/* Khulega Kharcha PDF: draws "Aapka Kharcha" on A4 canvases in the page's own fonts (so Devanagari,
   Gujarati, Telugu and Kannada shape correctly), then wraps the pages in a minimal PDF. No libraries.
   Layout follows the TechSandhya letterhead: logo top-left, rule from the logo's right edge, title
   right-aligned, three-line centred footer with GSTIN and a page number on the right. */
(function (root) {
  "use strict";

  var A4W = 595.28, A4H = 841.89;        // points
  var SCALE = 2.5;                         // canvas px per point (180 dpi)
  var ML = 54, MR = 54, CW = A4W - ML - MR;
  var MAXY = A4H - 70;                     // content stops above the footer
  var C = {
    ink: "#142229", body: "#24343B", muted: "#5F7078", faint: "#7E8E95", line: "#D6E0E2", zebra: "#F3F7F7",
    rule: "#2E75B6", title: "#17365D", footer: "#666666", brand: "#1F4E79",
    teal: "#006666", tealSoft: "#DCEFEE", amber: "#874C05", amberSoft: "#FBEBD4"
  };

  // ------------------------------------------------------------------ text helpers
  function F(weight, size, fam) { return weight + " " + size + "px " + fam; }
  var SEG = null;
  try { SEG = new Intl.Segmenter(undefined, { granularity: "grapheme" }); } catch (e) { SEG = null; }
  function graphemes(s) {
    if (SEG) { var out = []; var it = SEG.segment(s)[Symbol.iterator](), r; while (!(r = it.next()).done) out.push(r.value.segment); return out; }
    return Array.from(s);
  }
  function wrap(ctx, text, maxW) {
    var words = String(text || "").split(/\s+/).filter(Boolean), lines = [], cur = "";
    words.forEach(function (w) {
      var test = cur ? cur + " " + w : w;
      if (ctx.measureText(test).width <= maxW) { cur = test; return; }
      if (cur) lines.push(cur);
      if (ctx.measureText(w).width <= maxW) { cur = w; return; }
      var piece = "";
      graphemes(w).forEach(function (g) {
        if (piece && ctx.measureText(piece + g).width > maxW) { lines.push(piece); piece = g; } else { piece += g; }
      });
      cur = piece;
    });
    if (cur) lines.push(cur);
    return lines.length ? lines : [""];
  }
  function rrect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
  }
  function hline(ctx, x1, x2, y, color, width, dash) {
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = width || 0.6;
    if (dash) ctx.setLineDash(dash);
    ctx.beginPath(); ctx.moveTo(x1, y); ctx.lineTo(x2, y); ctx.stroke(); ctx.restore();
  }

  // ------------------------------------------------------------------ fonts and logo
  function loadFonts(m) {
    if (!document.fonts || !document.fonts.load) return Promise.resolve();
    var sample = [m.title, m.profile, m.tiles && m.tiles[0] && m.tiles[0].label, "₹0123456789 ABC"].join(" ");
    var fams = [m.fonts.display.split(",")[0], m.fonts.body.split(",")[0]];
    var jobs = [];
    fams.forEach(function (f) { ["400", "600", "700"].forEach(function (w) { jobs.push(document.fonts.load(w + " 16px " + f, sample).catch(function () { return null; })); }); });
    return Promise.race([Promise.all(jobs), new Promise(function (r) { setTimeout(r, 4000); })]);
  }
  function loadImage(src) {
    return new Promise(function (resolve) {
      if (!src) { resolve(null); return; }
      var img = new Image();
      img.onload = function () { resolve(img); };
      img.onerror = function () { resolve(null); };
      img.src = src;
    });
  }

  // ------------------------------------------------------------------ layout
  // Spacing comes from measured glyphs, not from font size: Telugu and Kannada vowel signs rise higher and
  // conjuncts hang lower than Latin, so a fixed baseline grid makes rows collide in those scripts.
  function render(m, logo) {
    var pages = [], ctx, y;
    var lh = m.lh || 1.38;
    var D = m.fonts.display, B = m.fonts.body;

    // Chrome reports glyph bounds in whole pixels of the font size, so small text is measured at 10x and scaled back
    var MC = document.createElement("canvas").getContext("2d"), inkCache = {};
    function ink(s) {
      var f = ctx.font, k = f + "|" + s;
      if (inkCache[k]) return inkCache[k];
      MC.font = f.replace(/(\d*\.?\d+)px/, function (_, n) { return (parseFloat(n) * 10) + "px"; });
      var t = MC.measureText(s || "");
      return (inkCache[k] = { a: (t.actualBoundingBoxAscent || 0) / 10, d: (t.actualBoundingBoxDescent || 0) / 10 });
    }
    function asc(s, size) { return Math.max(size * 0.72, ink(s).a); }
    function desc(s, size) { return Math.max(size * 0.22, ink(s).d); }
    function stepAfter(prev, next, size) { return Math.max(size * lh, desc(prev, size) + asc(next, size) + size * 0.15); }
    // wrapped paragraph: y is the top of free space on entry and sits just under the last line's ink (+ gap) on exit
    function para(text, size, weight, color, fam, maxW, x, gap) {
      ctx.font = F(weight, size, fam); ctx.fillStyle = color; ctx.textAlign = "left";
      var lines = wrap(ctx, text, maxW), b = y + asc(lines[0], size), first = b;
      lines.forEach(function (ln, i) { if (i) b += stepAfter(lines[i - 1], ln, size); ctx.fillText(ln, x, b); });
      y = b + desc(lines[lines.length - 1], size) + (gap || 0);
      return first;
    }
    function paraH(text, size, weight, fam, maxW) {
      ctx.font = F(weight, size, fam);
      var lines = wrap(ctx, text, maxW), h = asc(lines[0], size);
      lines.forEach(function (ln, i) { if (i) h += stepAfter(lines[i - 1], ln, size); });
      return h + desc(lines[lines.length - 1], size);
    }
    // one row of left text + right amount sharing a baseline; returns the baseline
    function pairRow(left, right, size, weight, fam, color, rightColor, pad) {
      ctx.font = F(weight, size, fam);
      var b = y + (pad || 0) + Math.max(asc(left, size), asc(right, size));
      ctx.fillStyle = color; ctx.textAlign = "left"; ctx.fillText(left, ML + 8, b);
      ctx.fillStyle = rightColor || color; ctx.textAlign = "right"; ctx.fillText(right, A4W - MR - 8, b); ctx.textAlign = "left";
      y = b + Math.max(desc(left, size), desc(right, size));
      return b;
    }

    function newPage() {
      var cv = document.createElement("canvas");
      cv.width = Math.round(A4W * SCALE); cv.height = Math.round(A4H * SCALE);
      var c = cv.getContext("2d");
      c.fillStyle = "#FFFFFF"; c.fillRect(0, 0, cv.width, cv.height);
      c.setTransform(SCALE, 0, 0, SCALE, 0, 0);
      c.textBaseline = "alphabetic";
      pages.push({ canvas: cv, ctx: c }); ctx = c;
      var rule;
      if (pages.length === 1) {
        if (logo) ctx.drawImage(logo, ML, 34, 48, 48);
        ctx.fillStyle = C.title; ctx.textAlign = "right"; ctx.font = F(700, 23, D);
        ctx.fillText(m.title, A4W - MR, 64);
        var td = desc(m.title, 23);
        ctx.fillStyle = C.muted; ctx.font = F(400, 8, B);
        var sb = Math.max(78, 64 + td + 2.5 + asc(m.subtitle, 8));
        ctx.fillText(m.subtitle, A4W - MR, sb);
        rule = Math.max(86, sb + desc(m.subtitle, 8) + 3);
        hline(ctx, ML + 56, A4W - MR, rule, C.rule, 0.9);
        ctx.textAlign = "left"; ctx.fillStyle = "#333333"; ctx.font = F(400, 6.5, B);
        ctx.fillText(m.web, ML, 94);
        y = rule + 22;
      } else {
        if (logo) ctx.drawImage(logo, ML, 20, 26, 26);
        ctx.fillStyle = C.title; ctx.textAlign = "right"; ctx.font = F(700, 12, D);
        var head = m.title + "  ·  " + m.ref;
        ctx.fillText(head, A4W - MR, 38);
        rule = Math.max(48, 38 + desc(head, 12) + 3);
        hline(ctx, ML + 32, A4W - MR, rule, C.rule, 0.8);
        ctx.textAlign = "left";
        y = rule + 18;
      }
    }
    function ensure(h) { if (y + h > MAXY) newPage(); }

    newPage();

    // ---- meta block: who / date / ref / validity, estimate badge on the right
    var badgeW = 196, leftW = CW - badgeW - 18, top = y;
    if (m.forValue) {
      para(m.forLabel, 7.5, 400, C.muted, B, leftW, ML, 2);
      para(m.forValue, 12, 700, C.ink, B, leftW, ML, 4.5);
    }
    m.meta.forEach(function (pair) {
      ctx.font = F(400, 8, B);
      var lw = ctx.measureText(pair[0] + "  ").width, la = asc(pair[0], 8), ld = desc(pair[0], 8);
      ctx.font = F(600, 9, B);
      var vl = wrap(ctx, pair[1], leftW - lw), b = y + Math.max(la, asc(vl[0], 9)), first = b;
      ctx.fillStyle = C.ink;
      vl.forEach(function (ln, i) { if (i) b += stepAfter(vl[i - 1], ln, 9); ctx.fillText(ln, ML + lw, b); });
      var vd = desc(vl[vl.length - 1], 9);
      ctx.font = F(400, 8, B); ctx.fillStyle = C.muted; ctx.fillText(pair[0], ML, first);
      y = b + Math.max(ld, vd) + 4.5;
    });
    var leftBottom = y;
    // badge (height measured before the box is drawn)
    var bx = A4W - MR - badgeW, bw = badgeW - 20;
    var bh = 10 + paraH(m.estimateLocal, 9.5, 700, B, bw) + 3.5 + paraH(m.estimateEn, 7.5, 400, B, bw) + 10;
    ctx.save(); rrect(ctx, bx, top, badgeW, bh, 6); ctx.fillStyle = C.amberSoft; ctx.fill(); ctx.restore();
    y = top + 10;
    para(m.estimateLocal, 9.5, 700, C.amber, B, bw, bx + 10, 3.5);
    para(m.estimateEn, 7.5, 400, C.body, B, bw, bx + 10, 0);
    y = Math.max(leftBottom, top + bh) + 10;

    // ---- profile + services
    para(m.profile, 9, 400, C.body, B, CW, ML, 3);
    para(m.services, 9, 400, C.body, B, CW, ML, 12);

    // ---- totals tiles: shared baselines across both tiles
    var tw = (CW - 10) / 2, R = { a1: 0, d1: 0, a2: 0, d2: 0, a3: 0, d3: 0, a4: 0, d4: 0 };
    m.tiles.forEach(function (tile) {
      ctx.font = F(700, 9.5, B); R.a1 = Math.max(R.a1, asc(tile.label, 9.5)); R.d1 = Math.max(R.d1, desc(tile.label, 9.5));
      ctx.font = F(700, 23, D); R.a2 = Math.max(R.a2, asc(tile.amount, 23)); R.d2 = Math.max(R.d2, desc(tile.amount, 23));
      ctx.font = F(400, 7.5, B); R.a3 = Math.max(R.a3, asc(tile.incl, 7.5)); R.d3 = Math.max(R.d3, desc(tile.incl, 7.5));
      R.a4 = Math.max(R.a4, asc(tile.ex, 7.5)); R.d4 = Math.max(R.d4, desc(tile.ex, 7.5));
    });
    var b1 = 10 + R.a1, b2 = b1 + R.d1 + 8 + R.a2, b3 = b2 + R.d2 + 2 + R.a3, b4 = b3 + R.d3 + 2.2 + R.a4, th = b4 + R.d4 + 8;
    ensure(th + 6);
    m.tiles.forEach(function (tile, i) {
      var tx = ML + i * (tw + 10), soft = tile.tone === "teal" ? C.tealSoft : C.amberSoft, ink = tile.tone === "teal" ? C.teal : C.amber;
      ctx.save(); rrect(ctx, tx, y, tw, th, 8); ctx.fillStyle = soft; ctx.fill(); ctx.restore();
      ctx.fillStyle = ink; ctx.textAlign = "left";
      ctx.font = F(700, 9.5, B); ctx.fillText(tile.label, tx + 12, y + b1);
      ctx.font = F(700, 23, D); ctx.fillText(tile.amount, tx + 12, y + b2);
      ctx.font = F(400, 7.5, B); ctx.fillText(tile.incl, tx + 12, y + b3);
      ctx.fillStyle = C.muted; ctx.fillText(tile.ex, tx + 12, y + b4);
    });
    y += th + 16;

    // ---- line items by bucket
    ensure(30);
    para(m.linesTitle, 13, 700, C.ink, D, CW, ML, 7);
    if (!m.groups.length) { para(m.emptyText, 9.5, 400, C.muted, B, CW, ML, 8); }
    var amtW = 92, labW = CW - amtW - 12;
    m.groups.forEach(function (g) {
      ensure(52);
      ctx.font = F(700, 10, B);
      var ga = Math.max(asc(g.title, 10), asc(g.subtotal, 10)), gd = Math.max(desc(g.title, 10), desc(g.subtotal, 10)), gh = 6 + ga + gd + 5;
      ctx.save(); rrect(ctx, ML, y, CW, gh, 4); ctx.fillStyle = C.zebra; ctx.fill(); ctx.restore();
      pairRow(g.title, g.subtotal, 10, 700, B, C.ink, C.ink, 6);
      y += 5 + 6;
      g.rows.forEach(function (r) {
        var h = 2 + paraH(r.label, 9.5, 600, B, labW) + (r.sub ? 2 + paraH(r.sub, 7.5, 400, B, labW) : 0) + 3.5;
        ensure(h + 1);
        y += 2;
        var first = para(r.label, 9.5, 600, C.ink, B, labW, ML + 8, r.sub ? 2 : 0);
        if (r.sub) para(r.sub, 7.5, 400, C.faint, B, labW, ML + 8, 0);
        ctx.font = F(600, 9.5, B); ctx.fillStyle = C.ink; ctx.textAlign = "right";
        ctx.fillText(r.amount, A4W - MR - 8, first); ctx.textAlign = "left";
        y += 3.5; hline(ctx, ML + 8, A4W - MR - 8, y - 1.3, C.line, 0.5);
      });
      ensure(36);
      pairRow(g.gstLabel, g.gstAmount, 8.5, 400, B, C.muted, C.muted, 2);
      y += 5.5;
      pairRow(g.totalLabel, g.totalAmount, 9.5, 700, B, C.ink, C.ink, 0);
      y += 12;
    });

    // ---- 12-month total, ad budget, trial note
    ensure(48);
    hline(ctx, ML, A4W - MR, y, C.ink, 1.3);
    y += 7;
    var ytop = y, yearW = CW - 150;
    para(m.year.label, 11, 700, C.ink, B, yearW, ML, 3);
    para(m.year.sub, 7.5, 400, C.muted, B, yearW, ML, 0);
    ctx.font = F(700, 17, D); ctx.fillStyle = C.ink; ctx.textAlign = "right";
    var ya = ytop + 1 + asc(m.year.amount, 17);
    ctx.fillText(m.year.amount, A4W - MR, ya); ctx.textAlign = "left";
    y = Math.max(y, ya + desc(m.year.amount, 17)) + 10;
    if (m.ads) {
      ensure(34);
      hline(ctx, ML, A4W - MR, y, C.line, 0.6);
      y += 5;
      var ab = para(m.ads.label, 9.5, 600, C.body, B, CW - 110, ML, 2);
      ctx.font = F(600, 9.5, B); ctx.textAlign = "right"; ctx.fillStyle = C.muted; ctx.fillText(m.ads.amount, A4W - MR, ab); ctx.textAlign = "left";
      para(m.ads.sub, 7.5, 400, C.muted, B, CW - 110, ML, 9);
    }
    if (m.trial) { ensure(paraH(m.trial, 8, 400, B, CW) + 8); para(m.trial, 8, 400, C.muted, B, CW, ML, 9); }

    // ---- contact sits with the totals, so page 1 always carries the numbers and the way to ask
    ensure(paraH(m.contact, 9.5, 700, B, CW) + 10);
    para(m.contact, 9.5, 700, C.teal, B, CW, ML, 12);

    // ---- notes: the two sections side by side (not in this bill | when to pay), kept together with the small print.
    // If they cannot fit in what is left of the page they start on a fresh one instead of leaving a few bullets behind.
    var NS = m.notes.sections, colGap = 20, colW = (CW - colGap) / 2;
    function itemH(it, w) { return paraH(it, 8, 400, B, w - 11) + 2.2; }
    function secH(s, w) { var h = paraH(s.title, 8.5, 700, B, w) + 3; s.items.forEach(function (it) { h += itemH(it, w); }); return h; }
    function drawSec(s, x, w, flow) {
      if (flow) ensure(paraH(s.title, 8.5, 700, B, w) + 3 + itemH(s.items[0] || "", w));
      para(s.title, 8.5, 700, C.body, B, w, x, 3);
      s.items.forEach(function (it) {
        if (flow) ensure(itemH(it, w));
        var b = para(it, 8, 400, C.body, B, w - 11, x + 11, 2.2);
        ctx.fillStyle = C.faint; ctx.font = F(400, 8, B); ctx.fillText("•", x + 2, b);
      });
    }
    var headH = paraH(m.notes.title, 11, 700, D, CW) + 5, spH = paraH(m.smallprint, 7, 400, B, CW) + 8;
    var two = NS.length === 2;
    var bodyH = two ? Math.max(secH(NS[0], colW), secH(NS[1], colW)) + 8 : NS.reduce(function (acc, s) { return acc + secH(s, CW) + 5; }, 0);
    var fits = headH + bodyH + spH <= MAXY - 70;
    ensure(fits ? headH + bodyH + spH : headH + 40);
    para(m.notes.title, 11, 700, C.ink, D, CW, ML, 5);
    if (two && fits) {
      var top0 = y; drawSec(NS[0], ML, colW, false); var leftEnd = y;
      y = top0; drawSec(NS[1], ML + colW + colGap, colW, false);
      y = Math.max(leftEnd, y) + 8;
    } else {
      NS.forEach(function (s) { drawSec(s, ML, CW, true); y += 5; });
    }
    ensure(spH);
    para(m.smallprint, 7, 400, C.faint, B, CW, ML, 0);

    // ---- footers (need the page count)
    pages.forEach(function (pg, i) {
      var c = pg.ctx;
      hline(c, ML, A4W - MR, A4H - 60, C.rule, 0.6);
      c.fillStyle = C.footer; c.textAlign = "center"; c.font = F(400, 7, B);
      c.fillText(m.footer[0], A4W / 2, A4H - 48);
      c.fillText(m.footer[1], A4W / 2, A4H - 38);
      c.fillText(m.footer[2], A4W / 2, A4H - 28);
      c.textAlign = "right"; c.fillText((i + 1) + " / " + pages.length, A4W - MR, A4H - 28);
      c.textAlign = "left";
    });
    var out = pages.map(function (p) { return p.canvas; });
    out.endY = y;
    return out;
  }

  // ------------------------------------------------------------------ PDF writer
  var enc = new TextEncoder();
  function bytes(s) { return enc.encode(s); }
  function pdfText(s) {
    var h = "FEFF";
    s = String(s || "");
    for (var i = 0; i < s.length; i++) h += ("000" + s.charCodeAt(i).toString(16)).slice(-4).toUpperCase();
    return "<" + h + ">";
  }
  function pdfDate(d) {
    var p = function (n) { return String(n).padStart(2, "0"); };
    var off = -d.getTimezoneOffset(), sign = off >= 0 ? "+" : "-"; off = Math.abs(off);
    return "D:" + d.getFullYear() + p(d.getMonth() + 1) + p(d.getDate()) + p(d.getHours()) + p(d.getMinutes()) + p(d.getSeconds()) +
      sign + p(Math.floor(off / 60)) + "'" + p(off % 60) + "'";
  }
  function deflate(u8) {
    var cs = new CompressionStream("deflate");
    return new Response(new Blob([u8]).stream().pipeThrough(cs)).arrayBuffer().then(function (b) { return new Uint8Array(b); });
  }
  function encodePage(cv) {
    var w = cv.width, h = cv.height;
    if (typeof CompressionStream === "function") {
      var px = cv.getContext("2d").getImageData(0, 0, w, h).data, rgb = new Uint8Array(w * h * 3);
      for (var i = 0, j = 0; i < px.length; i += 4) { rgb[j++] = px[i]; rgb[j++] = px[i + 1]; rgb[j++] = px[i + 2]; }
      return deflate(rgb).then(function (d) { return { w: w, h: h, filter: "FlateDecode", data: d }; });
    }
    return new Promise(function (resolve, reject) {
      cv.toBlob(function (b) {
        if (!b) { reject(new Error("toBlob failed")); return; }
        b.arrayBuffer().then(function (ab) { resolve({ w: w, h: h, filter: "DCTDecode", data: new Uint8Array(ab) }); }, reject);
      }, "image/jpeg", 0.92);
    });
  }
  function assemble(images, info) {
    var parts = [], pos = 0, offs = [];
    function add(x) { var b = typeof x === "string" ? bytes(x) : x; parts.push(b); pos += b.length; }
    function obj(id, s) { offs[id] = pos; add(id + " 0 obj\n" + s + "\nendobj\n"); }
    function sobj(id, dict, data) { offs[id] = pos; add(id + " 0 obj\n" + dict + "\nstream\n"); add(data); add("\nendstream\nendobj\n"); }
    var n = images.length, infoId = 3 + n * 3, size = infoId + 1;
    add("%PDF-1.4\n"); add(new Uint8Array([0x25, 0xE2, 0xE3, 0xCF, 0xD3, 0x0A]));
    obj(1, "<< /Type /Catalog /Pages 2 0 R >>");
    var kids = []; for (var k = 0; k < n; k++) kids.push((3 + k * 3) + " 0 R");
    obj(2, "<< /Type /Pages /Kids [" + kids.join(" ") + "] /Count " + n + " >>");
    images.forEach(function (im, i) {
      var pid = 3 + i * 3, cid = pid + 1, iid = pid + 2;
      obj(pid, "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 " + A4W + " " + A4H + "] /Resources << /XObject << /Im0 " + iid +
        " 0 R >> /ProcSet [/PDF /ImageC] >> /Contents " + cid + " 0 R >>");
      var content = bytes("q " + A4W + " 0 0 " + A4H + " 0 0 cm /Im0 Do Q");
      sobj(cid, "<< /Length " + content.length + " >>", content);
      sobj(iid, "<< /Type /XObject /Subtype /Image /Width " + im.w + " /Height " + im.h + " /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /" +
        im.filter + " /Length " + im.data.length + " >>", im.data);
    });
    obj(infoId, "<< /Title " + pdfText(info.title) + " /Author " + pdfText(info.author) + " /Subject " + pdfText(info.subject) +
      " /Creator (khulega.online Kharcha Calculator) /Producer (TechSandhya) /CreationDate (" + pdfDate(new Date()) + ") >>");
    var xref = pos, x = "xref\n0 " + size + "\n0000000000 65535 f \n";
    for (var j = 1; j < size; j++) x += String(offs[j]).padStart(10, "0") + " 00000 n \n";
    add(x);
    add("trailer\n<< /Size " + size + " /Root 1 0 R /Info " + infoId + " 0 R >>\nstartxref\n" + xref + "\n%%EOF\n");
    return new Blob(parts, { type: "application/pdf" });
  }

  function make(model) {
    return loadFonts(model).then(function () { return loadImage(model.logo); }).then(function (logo) {
      var canvases = render(model, logo);
      return canvases.reduce(function (p, cv) {
        return p.then(function (acc) { return encodePage(cv).then(function (im) { acc.push(im); return acc; }); });
      }, Promise.resolve([])).then(function (images) {
        return { blob: assemble(images, { title: model.docTitle, author: "TechSandhya (Sandhya Technology Solutions and Operations LLP)", subject: model.docSubject }), pages: images.length };
      });
    });
  }

  root.KQPDF = { make: make, layout: render };
})(typeof self !== "undefined" ? self : this);
