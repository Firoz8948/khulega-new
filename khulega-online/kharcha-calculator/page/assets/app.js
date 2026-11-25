/* Khulega Kharcha Calculator: page logic. Prices come only from window.KQ_CATALOG via the engine;
   every visible word comes from window.KQ_I18N. KQ_CONFIG.team adds the internal Team view
   (prototype only); the khulega.online build ships with team = false and no team markup. */
(function () {
  "use strict";
  var CFG = window.KQ_CONFIG || {};
  var TEAM = !!CFG.team;
  var CAT = window.KQ_CATALOG;
  var I18N = window.KQ_I18N;
  var E = window.KQ.create(CAT);
  var GST = CAT.gst;
  var LANG_BY = {};
  I18N.langs.forEach(function (l) { LANG_BY[l.code] = l; });

  var MP_NAME = { amazon: "Amazon", flipkart: "Flipkart", meesho: "Meesho", ondc: "ONDC" };
  var WA_NUMBER = "919226697740";
  var ORG = {
    name: "Sandhya Technology Solutions and Operations LLP", gstin: "27AFOFS2802K1ZN",
    address: "Block 14, B Wing 102, Balaji Diamond, Virar West, Palghar, Maharashtra, India – 401303",
    email: "admin@techsandhya.com", phone: "+91 92266 97740", web: "techsandhya.com"
  };
  var CARD_KEYS = ["reg", "cmp", "cat", "ops", "tax", "brand", "ads"];

  // Opening example: a seller finishing a free trial on Flipkart + Meesho with 15 products
  var state = {
    stage: "live", sellerType: "b2b2b", skus: 15, newSkus: 0,
    mps: { amazon: false, flipkart: true, meesho: true, ondc: false },
    live: { amazon: false, flipkart: true, meesho: true, ondc: false },
    orders: 120, adBudget: 5000, adMps: { amazon: true, flipkart: true, meesho: true },
    svc: { reg: false, cmp: false, cat: false, ops: true, tax: true, brand: false, ads: false },
    pick: {}, qty: {}, families: 1, open: { ops: true }, team: false,
    policy: { cat013ForB2B: true, tec001WithBundle: true },
    lang: "hi", name: "", city: ""
  };
  var REF = makeRef();

  // ------------------------------------------------------------------ icons
  var ICON = {
    reg: '<path d="M3 8.5 4.6 3.5h10.8L17 8.5M3 8.5h14M3.8 8.5V17h12.4V8.5M8 17v-4.5h4V17"/>',
    cmp: '<path d="M5.5 2.5h6l3.5 3.5v11.5h-9.5zM11.5 2.5V6H15M8 10h5M8 13h5"/>',
    cat: '<rect x="3" y="4" width="14" height="12" rx="1.6"/><path d="m3 13 4-4 3 3 2-2 5 5"/><circle cx="13" cy="7.6" r="1.2"/>',
    ops: '<path d="M3 6.2 10 3l7 3.2v7.6L10 17l-7-3.2zM3 6.2 10 9.4l7-3.2M10 9.4V17"/>',
    tax: '<path d="M5 2.5h10V18l-2-1.4-2 1.4-2-1.4-2 1.4-2-1.4zM8 6.5h4M8 9.5h4M8 12.5h2.5"/>',
    brand: '<path d="M10 2.6l2.1 4.4 4.8.6-3.5 3.3.9 4.8L10 13.4l-4.3 2.3.9-4.8-3.5-3.3 4.8-.6z"/>',
    ads: '<path d="M3 8v4h3l6 4V4L6 8zM14.6 7.2a4 4 0 0 1 0 5.6"/>',
    base: '<path d="M4 10.5a6 6 0 1 0 2-4.5M4 3.5V7h3.5"/>'
  };
  var SVG_LOCK = '<svg viewBox="0 0 20 20" aria-hidden="true"><rect x="5" y="9" width="10" height="8" rx="1.6"/><path d="M7 9V6.6a3 3 0 0 1 6 0V9"/></svg>';
  var SVG_CHECK = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4.5 10.5 3.8 3.8L15.5 6"/></svg>';
  var SVG_CHEV = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m5 8 5 5 5-5"/></svg>';

  // Quantity units per line (count templates n.*); composite lines are handled in qtyPhrase
  var UNIT = {
    "reg.addl": "marketplace", "reg.test": "marketplace", "reg.ful": "marketplace", "reg.train": "marketplace",
    "cat.photo": "product", "cat.copy": "product", "cat.qc": "product",
    "ops.recx": "marketplace", "ops.ship": "marketplace", "ops.stock": "product",
    "brd.lm": "family", "brd.label": "family", "brd.info": "photo", "brd.life": "photo", "brd.video": "video",
    "brd.tm": "class", "brd.reg": "marketplace",
    "ads.audit": "marketplace", "ads.build": "marketplace", "ads.kw": "marketplace", "ads.comp": "marketplace",
    "ads.copy": "product", "ads.wallet": "marketplace", "ads.creative": "set"
  };
  // Pay-per-use rates shown for transparency (not added to the bill)
  var PER_USE = [
    { id: "TS-OPS-001", u: "case", freeWithOps: true }, { id: "TS-OPS-002", u: "case", freeWithOps: true },
    { id: "TS-OPS-003", u: "case", freeWithOps: true }, { id: "TS-OPS-004", u: "case", freeWithOps: true },
    { id: "TS-OPS-005", u: "case", freeWithOps: true }, { id: "TS-PLT-001", u: "case" },
    { id: "TS-ONB-007", u: "time" }, { id: "TS-CAT-008", u: "product" }, { id: "TS-REC-002", u: "case" },
    { id: "TS-REC-003", u: "recovered", pct: true }, { id: "TS-PLT-002", u: "appeal" }, { id: "TS-PLT-003", u: "time" },
    { id: "TS-PLT-006", u: "notice" }, { id: "TS-OPS-009", u: "shipment" }, { id: "TS-DSN-009", u: "day" }
  ];

  // ------------------------------------------------------------------ helpers
  var nf0 = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 });
  var nf2 = new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  function rs(x) { return "₹" + nf0.format(Math.round(x)); }
  function rsRate(x) { return "₹" + (Math.abs(x - Math.round(x)) > 1e-9 ? nf2.format(x) : nf0.format(x)); }
  function rsTeam(x) { return "₹" + nf2.format(x); }
  function n0(x) { return nf0.format(x); }
  function el(id) { return document.getElementById(id); }
  function pct(x) { return (Math.round(x * 1000) / 10).toString().replace(/\.0$/, "") + "%"; }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function svg(path, cls) { return '<svg class="' + (cls || "") + '" viewBox="0 0 20 20" aria-hidden="true">' + path + "</svg>"; }
  function team(html) { return TEAM ? html : ""; }
  function pad2(n) { return String(n).padStart(2, "0"); }
  function makeRef() {
    var d = new Date(), abc = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789", s = "";
    for (var i = 0; i < 4; i++) s += abc.charAt(Math.floor(Math.random() * abc.length));
    return "KK-" + d.getFullYear() + pad2(d.getMonth() + 1) + pad2(d.getDate()) + "-" + s;
  }

  function dict() { return I18N.strings[state.lang] || I18N.strings.hi; }
  function t(key, vars) {
    var s = dict()[key];
    if (s === undefined) s = I18N.strings.hi[key];
    if (typeof s !== "string") return key;
    if (!vars) return s;
    return s.replace(/\{(\w+)\}/g, function (m, k) { return vars[k] !== undefined ? vars[k] : m; });
  }
  var PLURAL = {};
  function tn(key, n) {
    var o = dict()[key] || I18N.strings.hi[key] || {}, cat = "other";
    try {
      PLURAL[state.lang] = PLURAL[state.lang] || new Intl.PluralRules(state.lang === "hi" ? "hi" : state.lang);
      cat = PLURAL[state.lang].select(n);
    } catch (e) { cat = n === 1 ? "one" : "other"; }
    return String(o[cat] || o.other || "{n}").replace("{n}", n0(n));
  }
  function fmtDate(d) { return pad2(d.getDate()) + " " + (I18N.months[state.lang] || I18N.months.hi)[d.getMonth()] + " " + d.getFullYear(); }
  function catalogDate() { var p = String(CAT.issuedISO || "").split("-"); return p.length === 3 ? new Date(+p[0], +p[1] - 1, +p[2]) : new Date(); }
  function per(bucket) { return bucket === "monthly" ? t("per.month") : bucket === "annual" ? t("per.year") : ""; }
  function chhoot(mult) { return mult < 1 ? t("vol", { p: Math.round((1 - mult) * 100) }) : ""; }
  function markup() {
    var c = CAT.bundles["TS-SUB-003"].components.filter(function (x) { return x.pctOfAdSpend; })[0];
    return c ? c.rate : 0;
  }
  function lineKey(key) { return key === "am.TS-CMP-015" ? "cmp.alert" : key; }
  function lineT(key) { return t("line." + lineKey(key) + ".t", { p: pct(markup()) }); }
  function lineS(key) { return t("line." + lineKey(key) + ".s"); }
  function cardT(k) { return t("card." + k + ".t"); }

  // ------------------------------------------------------------------ rendering
  var D, Q, FOCUS = null;
  function fieldVal(id, v) { return FOCUS && FOCUS.id === id ? FOCUS.raw : n0(v); }

  function qtyPhrase(l) {
    var c = D.ctx;
    switch (l.key) {
      case "cat.upload": return tn("n.product", c.Nnew) + " × " + tn("n.marketplace", c.uploadCh);
      case "cat.bulk": return tn("n.file", l.batches) + " × " + tn("n.marketplace", c.uploadCh);
      case "cat.migrate": return tn("n.product", c.Nold) + " × " + tn("n.marketplace", c.migrateCh);
      default:
        var u = UNIT[l.key];
        if (!u) return l.qty > 1 ? n0(l.qty) : "";
        return tn("n." + u, l.qty);
    }
  }

  function lineRow(l, bucket) {
    var L = CAT.lines[l.id];
    var ctl;
    if (l.kind === "opt") {
      ctl = '<input type="checkbox" id="pk-' + l.key + '" data-pick="' + l.key + '"' + (l.on ? " checked" : "") + (l.coveredBy ? " disabled" : "") + ">";
    } else if (l.kind === "gate") {
      ctl = '<span class="ln-ico is-lock" title="' + esc(t("title.gate")) + '">' + SVG_LOCK + "</span>";
    } else {
      ctl = '<span class="ln-ico is-core" title="' + esc(t("title.core")) + '">' + SVG_CHECK + "</span>";
    }
    var q = qtyPhrase(l);
    var rateTxt = rsRate(L.rate) + per(bucket);
    var ch = chhoot(l.mult);
    var stepper = "";
    if (l.stepper && l.stepper !== "families" && l.on) {
      stepper = '<span class="mini-step"><button type="button" data-qty="' + l.stepper + '" data-d="-1" aria-label="' + esc(t("aria.less")) + '">−</button><span>' + n0(l.qty) +
        '</span><button type="button" data-qty="' + l.stepper + '" data-d="1" aria-label="' + esc(t("aria.more")) + '">+</button></span>';
    }
    var amt = l.coveredBy ? '<span class="ln-amt is-inc">' + esc(t("line.included")) + "</span>"
      : '<span class="ln-amt">' + (l.on ? rs(l.amount) + "<small>" + esc(per(bucket)) + "</small>" : '<span class="dim">' + rs(l.amount) + "</span>") + "</span>";
    var tag = l.kind === "gate" ? '<span class="tag tag-lock">' + esc(t("tag.required")) + "</span>" : "";
    var sub = l.coveredBy ? t("line.coveredBy") : lineS(l.key);
    return '<li class="ln' + (l.on ? "" : " is-off") + '">' +
      '<span class="ln-ctl">' + ctl + "</span>" +
      '<label class="ln-txt"' + (l.kind === "opt" ? ' for="pk-' + l.key + '"' : "") + ">" +
        '<span class="ln-t">' + esc(lineT(l.key)) + " " + tag + "</span>" +
        (sub ? '<span class="ln-s">' + esc(sub) + "</span>" : "") +
        '<span class="ln-q">' + esc((q ? q + " × " : "") + rateTxt) + (ch ? ' <span class="chip-ch">' + esc(ch) + "</span>" : "") + "</span>" +
        team('<span class="ln-meta team-only">' + l.id + " · " + L.tier + " " + (l.code || "") + " ×" + (l.mult || 1).toFixed(2) + " · " + L.freq + "</span>") +
      "</label>" + (stepper ? '<span class="ln-step">' + stepper + "</span>" : "") + amt + "</li>";
  }

  function bundleBlock(key, b, title, bid, spend) {
    if (!b) return "";
    var rows = b.comps.map(function (c) {
      var k = key + "." + c.id;
      var ctl = c.core ? '<span class="ln-ico is-core" title="' + esc(t("title.core")) + '">' + SVG_CHECK + "</span>"
        : '<input type="checkbox" id="pk-' + k + '" data-pick="' + k + '"' + (c.on ? " checked" : "") + ">";
      var amtTxt = c.pct ? t("bundle.budget", { p: pct(c.rate), amt: rs(spend) }) : rsRate(c.rate) + t("per.month") + (c.qty > 1 ? " × " + c.qty : "");
      return '<li class="ln' + (c.on ? "" : " is-off") + '"><span class="ln-ctl">' + ctl + "</span>" +
        '<label class="ln-txt"' + (c.core ? "" : ' for="pk-' + k + '"') + '><span class="ln-t">' + esc(lineT(k)) + "</span>" +
        '<span class="ln-s">' + esc(lineS(k)) + '</span><span class="ln-q">' + esc(amtTxt) + "</span>" +
        team('<span class="ln-meta team-only">' + c.id + (c.core ? " · Core" : " · Optional") + "</span>") + "</label>" +
        '<span class="ln-amt">' + (c.on ? rs(c.amount) : '<span class="dim">' + rs(c.pct ? c.rate * spend : c.rate * c.qty) + "</span>") + "</span></li>";
    }).join("");
    var math = '<div class="bm-row"><span>' + esc(t("bundle.sum")) + "</span><span>" + rs(b.sum) + "</span></div>" +
      '<div class="bm-row"><span>' + esc(t("bundle.disc", { services: tn("n.service", b.count), p: pct(b.disc) })) + "</span><span>−" + rs(b.sum - b.list) + "</span></div>" +
      (b.std > 0 ? '<div class="bm-row"><span>' + esc(t("bundle.std", { p: pct(b.std) })) + team('<span class="team-only"> · STD-BASE</span>') + "</span><span>−" + rs(b.list - b.realised) + "</span></div>" : "") +
      '<div class="bm-row bm-tot"><span>' + esc(t("bundle.month")) + "</span><span>" + rs(b.realised) + "</span></div>" +
      team('<div class="bm-row team-only"><span>Team: list ' + rsTeam(b.list) + " · realised " + rsTeam(b.realised) + " · subsidy " + rsTeam(b.subsidy) + "</span><span></span></div>");
    return '<div class="bnd"><div class="bnd-h"><span class="bnd-t">' + esc(title) + '</span><span class="bnd-id">' + bid + '</span></div><ul class="lns">' + rows + '</ul><div class="bnd-math">' + math + "</div></div>";
  }

  function priceSummary(k) {
    var tt = Q.cardTotals[k] || { oneTime: 0, monthly: 0, annual: 0 };
    var parts = [];
    if (tt.oneTime > 0.004) parts.push('<span class="ps ps-one">' + esc(t("chip.oneTime", { amt: rs(tt.oneTime) })) + "</span>");
    if (tt.monthly > 0.004) parts.push('<span class="ps ps-mon">' + rs(tt.monthly) + esc(t("per.month")) + "</span>");
    if (tt.annual > 0.004) parts.push('<span class="ps ps-yr">' + rs(tt.annual) + esc(t("per.year")) + "</span>");
    return parts.join("");
  }

  function slabText() {
    return CAT.tiers.ORD.filter(function (s) { return s.rate > 0; }).map(function (s) {
      return s.to === null ? t("slab.open", { a: n0(s.from), r: rsRate(s.rate) }) : t("slab.range", { a: n0(s.from), b: n0(s.to), r: rsRate(s.rate) });
    }).join(", ");
  }

  function cardBody(k) {
    var d = D.cards[k];
    var html = '<p class="long">' + esc(t("card." + k + ".long", { p: pct(markup()) })) + "</p>";
    if (k === "ops") {
      html += '<div class="field"><label class="lbl" for="in-orders">' + esc(t("ops.orders.q")) + ' <span class="opt">' + esc(t("estimate")) + "</span></label>" +
        stepperHtml("orders", state.orders, 50) + '<p class="hint">' + esc(t("ops.orders.hint", { slabs: slabText() })) + "</p></div>";
      html += bundleBlock("am", Q.bundles.am || E.priceBundle("TS-SUB-002", D.bundles.am.include, 0), "Account Management", "TS-SUB-002", 0);
      if (Q.universal.overage && Q.universal.overage.amount > 0) {
        html += '<div class="note-row"><span>' + esc(t("ops.over", { orders: tn("n.order", D.profile.orders - 600) })) + "</span><strong>" + rs(Q.universal.overage.amount) + esc(t("per.month")) + "</strong></div>";
      }
    }
    if (k === "brand") {
      html += '<div class="field"><label class="lbl" for="in-families">' + esc(t("brand.fam.q")) + ' <span class="opt">' + esc(t("brand.fam.opt")) + "</span></label>" + stepperHtml("families", state.families, 1) + "</div>";
    }
    if (k === "ads") {
      html += '<p class="notice">' + esc(t("ads.needOps", { ops: cardT("ops") })) + "</p>";
      html += '<div class="field"><label class="lbl" for="in-adBudget">' + esc(t("ads.budget.q")) + "</label>" +
        '<div class="money"><span aria-hidden="true">₹</span><input id="in-adBudget" data-num="adBudget" inputmode="numeric" autocomplete="off" value="' + esc(fieldVal("in-adBudget", state.adBudget)) + '"></div>' +
        '<div class="chips chips-sm">' + [3000, 5000, 10000, 25000].map(function (v) {
          return '<button type="button" class="chip' + (state.adBudget === v ? " is-on" : "") + '" data-budget="' + v + '" aria-pressed="' + (state.adBudget === v) + '">' + rs(v) + "</button>";
        }).join("") + "</div>" + '<p class="hint">' + esc(t("ads.budget.hint")) + "</p></div>";
      html += '<div class="field"><span class="lbl">' + esc(t("ads.where.q")) + '</span><div class="chips chips-sm">' + D.ctx.adCapable.map(function (m) {
        var on = !!state.adMps[m];
        return '<button type="button" class="chip' + (on ? " is-on" : "") + '" data-admp="' + m + '" aria-pressed="' + on + '">' + SVG_CHECK + MP_NAME[m] + "</button>";
      }).join("") + "</div>" + (d.ready === false ? '<p class="notice">' + esc(t("ads.pickOne")) + "</p>" : "") + "</div>";
      html += bundleBlock("dm", Q.bundles.dm || E.priceBundle("TS-SUB-003", D.bundles.dm.include, state.adBudget), "Digital Marketing", "TS-SUB-003", Q.bundles.dm ? D.profile.adSpend : state.adBudget);
      if (TEAM && Q.bundles.dm && D.profile.adSpend > 0) {
        html += '<p class="hint team-only">Team: fees ' + rsTeam(Q.bundles.dm.realised) + " = " + pct(Q.bundles.dm.realised / D.profile.adSpend) + " of ad budget.</p>";
      }
    }
    var lines = d.lines.map(function (l) { return lineRow(l, l.bucket); }).join("");
    if (lines) html += '<h4 class="sub-h">' + esc(k === "ops" || k === "ads" ? t("card.with") : t("card.inThis")) + '</h4><ul class="lns">' + lines + "</ul>";
    return html;
  }

  function stepperHtml(key, val, step) {
    return '<div class="stepper"><button type="button" data-step="' + key + '" data-d="-' + step + '" aria-label="' + esc(t("aria.less")) + '">−</button>' +
      '<input id="in-' + key + '" data-num="' + key + '" inputmode="numeric" autocomplete="off" value="' + esc(fieldVal("in-" + key, val)) + '">' +
      '<button type="button" data-step="' + key + '" data-d="' + step + '" aria-label="' + esc(t("aria.more")) + '">+</button></div>';
  }

  function renderCards() {
    var html = CARD_KEYS.map(function (k) {
      var d = D.cards[k];
      var intent = !!state.svc[k];
      var on = d.on;
      var open = !!state.open[k];
      var na = !d.applicable;
      var status = na ? '<span class="ps ps-na">' + esc(t("reason." + d.reason)) + "</span>" : priceSummary(k);
      if (!na && intent && !on && k === "ads") status = '<span class="ps ps-na">' + esc(t("card.pickBelow")) + "</span>";
      return '<article class="svc' + (on ? " is-on" : "") + (na ? " is-na" : "") + '" id="card-' + k + '">' +
        '<div class="svc-h">' + svg(ICON[k], "svc-ico") +
          '<div class="svc-tt"><h3 class="svc-t">' + esc(cardT(k)) + '</h3><p class="svc-s">' + esc(t("card." + k + ".s")) + "</p></div>" +
          '<button type="button" class="sw" role="switch" id="sw-' + k + '" data-svc="' + k + '" aria-checked="' + (intent && !na) + '"' + (na ? " disabled" : "") + ' aria-label="' + esc(cardT(k)) + '"><span></span></button>' +
        "</div>" +
        '<div class="svc-f"><div class="svc-price">' + (on || na ? status : '<span class="ps ps-na">' + esc(t("card.notChosen")) + "</span>") + "</div>" +
          (na ? "" : '<button type="button" class="more" id="op-' + k + '" data-open="' + k + '" aria-expanded="' + open + '">' + esc(t("card.more")) + SVG_CHEV + "</button>") + "</div>" +
        '<div class="svc-b"' + (open && !na ? "" : " hidden") + ">" + (na ? "" : cardBody(k)) + "</div>" +
      "</article>";
    }).join("");
    el("cards").innerHTML = html;
  }

  function renderBase() {
    var u = Q.universal.cat013, box = el("base");
    var head = svg(ICON.base, "svc-ico");
    var title = esc(t("line.base.cat013.t"));
    if (u) {
      box.className = "base is-on";
      box.innerHTML = head + '<div class="base-tt"><div class="base-top"><h3 class="svc-t">' + title + '</h3><div class="base-amt">' + rs(u.amount) + "<small>" + esc(t("per.month")) + "</small></div></div>" +
        '<span class="tag tag-lock">' + SVG_LOCK + esc(t("base.tag")) + "</span>" +
        '<p class="svc-s">' + esc(tn("n.product", D.profile.skus) + " × " + tn("n.marketplace", D.profile.channels) + " × " + rsRate(CAT.lines["TS-CAT-013"].rate) + t("per.month")) +
        (u.mult < 1 ? ' <span class="chip-ch">' + esc(chhoot(u.mult)) + "</span>" : "") + "</p>" +
        '<p class="hint">' + esc(t("base.hint")) + "</p>" +
        team('<p class="ln-meta team-only">TS-CAT-013 · SKU ' + u.code + " ×" + u.mult.toFixed(2) + " · never bundled, never capped (Rule X11)</p>") + "</div>";
    } else {
      box.className = "base";
      box.innerHTML = head + '<div class="base-tt"><div class="base-top"><h3 class="svc-t">' + title + '</h3><div class="base-amt">₹0</div></div><p class="svc-s">' +
        esc(D.cat013Blocked ? t("base.offB2B") : t("base.off")) + "</p></div>";
    }
  }

  function billLabel(b) {
    if (b.key === "bundle.am" || b.key === "bundle.dm" || b.key === "base.cat013" || b.key === "ops.over") return t("line." + b.key + ".t");
    return lineT(b.key);
  }
  function findLine(b) {
    var c = D.cards[b.card];
    if (!c) return null;
    for (var i = 0; i < c.lines.length; i++) if (c.lines[i].key === b.key) return c.lines[i];
    return null;
  }
  // Second line under each PDF row: what was counted, the unit rate, then the catalogue reference in English
  function billSub(b) {
    var L = CAT.lines[b.id], ref = b.id + " · " + (L ? L.name : "");
    if (b.key === "bundle.am" || b.key === "bundle.dm") {
      var bb = b.key === "bundle.am" ? Q.bundles.am : Q.bundles.dm;
      return tn("n.service", bb.count) + "  ·  " + ref;
    }
    if (b.key === "base.cat013") {
      return tn("n.product", D.profile.skus) + " × " + tn("n.marketplace", D.profile.channels) + " × " + rsRate(L.rate) + (b.mult < 1 ? " (" + chhoot(b.mult) + ")" : "") + "  ·  " + ref;
    }
    if (b.key === "ops.over") return tn("n.order", D.profile.orders - 600) + "  ·  " + ref;
    var l = findLine(b);
    if (!l) return ref;
    var q = qtyPhrase(l);
    return (q ? q + " × " : "") + rsRate(L.rate) + (l.mult < 1 ? " (" + chhoot(l.mult) + ")" : "") + "  ·  " + ref;
  }

  var GROUPS = [["monthly", "bill.monthly", "per.month"], ["oneTime", "bill.oneTime", ""], ["annual", "bill.annual", "per.year"]];
  function renderBill() {
    var tt = Q.totals;
    el("bill-date").textContent = fmtDate(new Date());
    el("tot-mon").textContent = rs(tt.monthly * (1 + GST));
    el("tot-one").textContent = rs(tt.oneTime * (1 + GST));
    el("tot-mon-ex").textContent = rs(tt.monthly) + " + GST " + rs(tt.monthlyGst);
    el("tot-one-ex").textContent = tt.oneTime > 0 ? rs(tt.oneTime) + " + GST " + rs(tt.oneTimeGst) : t("bill.none");
    var html = "";
    GROUPS.forEach(function (g) {
      var rows = Q.bill.filter(function (b) { return b.bucket === g[0]; });
      if (!rows.length) return;
      var sub = tt[g[0]], suffix = g[2] ? t(g[2]) : "";
      html += '<section class="bg"><h3 class="bg-h"><span>' + esc(t(g[1])) + "</span><span>" + rs(sub) + esc(suffix) + "</span></h3><ul>" +
        rows.map(function (b) {
          return '<li><span class="bl-t">' + esc(billLabel(b)) + ' <small class="bl-id">' + b.id + '</small></span><span class="bl-a">' + rs(b.amount) + team('<span class="team-only bl-p"> ' + rsTeam(b.amount) + "</span>") + "</span></li>";
        }).join("") +
        '</ul><div class="bg-tax"><span>GST 18%</span><span>' + rs(sub * GST) + '</span></div><div class="bg-tot"><span>' + esc(t(g[1]) + " (" + t("bill.inclGst") + ")") + "</span><span>" + rs(sub * (1 + GST)) + esc(suffix) + "</span></div></section>";
    });
    if (!html) html = '<p class="empty">' + esc(t("bill.empty")) + "</p>";
    el("bill-lines").innerHTML = html;
    el("bill-year").innerHTML = '<div class="yr"><span>' + esc(t("bill.year")) + " <small>(" + esc(t("bill.inclGst")) + ")</small></span><strong>" + rs(tt.tcv * (1 + GST)) + "</strong></div>" +
      (tt.adSpend > 0 ? '<div class="yr yr-ads"><span>' + esc(t("bill.adBudget")) + " <small>" + esc(t("bill.adBudgetSub")) + "</small></span><strong>" + rs(tt.adSpend) + esc(t("per.month")) + "</strong></div>" : "") +
      (state.stage === "live" ? '<p class="hint">' + esc(t("bill.trial")) + "</p>" : "") +
      team('<p class="hint team-only">Team: one-time ' + rsTeam(tt.oneTime) + " · monthly " + rsTeam(tt.monthly) + " · annual " + rsTeam(tt.annual) + " · 12-month " + rsTeam(tt.tcv) + " ex-GST · AM subsidy " + rsTeam(Q.bundles.am ? Q.bundles.am.subsidy : 0) + "/month</p>");
    var ops = D.cards.ops.on;
    el("per-use").innerHTML = PER_USE.map(function (r) {
      var L = CAT.lines[r.id];
      var rate = r.pct ? L.rate + "%" : rsRate(E.priceLine(r.id, 1, D.profile).amount);
      var free = r.freeWithOps && ops;
      return "<li><span>" + esc(t("pu." + r.id)) + team(' <small class="bl-id">' + r.id + "</small>") + "</span><span>" + (free ? '<s class="dim">' + rate + "</s> ₹0" : rate) + " <small>" + esc(t("perunit." + r.u)) + "</small></span></li>";
    }).join("");
    el("per-use-note").textContent = ops ? t("peruse.noteOn") : t("peruse.noteOff");
    renderShare();
  }

  function shareText() {
    var tt = Q.totals;
    var mps = D.ctx.sel.map(function (m) { return MP_NAME[m]; }).join(", ") || t("msg.notDecided");
    var svcs = CARD_KEYS.filter(function (k) { return D.cards[k].on; }).map(cardT).join(", ") || t("msg.noneYet");
    var out = [
      t("msg.hello"),
      t("msg.products") + ": " + n0(D.profile.skus) + " | " + t("msg.marketplace") + ": " + mps,
      t("msg.services") + ": " + svcs,
      t("bill.monthly") + ": " + rs(tt.monthly * (1 + GST)) + " (" + t("bill.inclGst") + ")",
      t("bill.oneTime") + ": " + rs(tt.oneTime * (1 + GST)) + " (" + t("bill.inclGst") + ")"
    ];
    if (tt.annual > 0) out.push(t("bill.annual") + ": " + rs(tt.annual * (1 + GST)) + " (" + t("bill.inclGst") + ")");
    if (tt.adSpend > 0) out.push(t("msg.ads", { amt: rs(tt.adSpend) }));
    out.push("Ref: " + REF);
    out.push(t("msg.ask") + " " + t("msg.name") + ": " + (state.name.trim() || t("msg.namePh")) + ", " + t("msg.city") + ": " + (state.city.trim() || t("msg.cityPh")));
    return out.join("\n");
  }
  function renderShare() {
    var txt = shareText();
    el("share-text").value = txt;
    el("wa-link").href = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(txt);
  }

  function renderBar() {
    var tt = Q.totals;
    el("bar-mon").textContent = rs(tt.monthly * (1 + GST));
    el("bar-one").textContent = rs(tt.oneTime * (1 + GST));
  }

  function renderProfile() {
    document.querySelectorAll("[data-stage]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.stage === state.stage)); });
    document.querySelectorAll("[data-type]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.type === state.sellerType)); });
    document.querySelectorAll("[data-mp]").forEach(function (b) {
      var on = !!state.mps[b.dataset.mp];
      b.setAttribute("aria-pressed", String(on)); b.classList.toggle("is-on", on);
    });
    el("live-block").hidden = state.stage !== "live";
    el("live-chips").innerHTML = D.ctx.sel.length ? D.ctx.sel.map(function (m) {
      var on = !!state.live[m];
      return '<button type="button" class="chip' + (on ? " is-on" : "") + '" data-live="' + m + '" aria-pressed="' + on + '">' + SVG_CHECK + MP_NAME[m] + "</button>";
    }).join("") : '<span class="hint">' + esc(t("reason.noMarketplace")) + "</span>";
    setVal("in-skus", state.skus);
    setVal("in-newSkus", state.newSkus);
    el("fpo-hint").hidden = state.sellerType !== "b2b2b";
    if (TEAM) {
      el("team-panel").hidden = !state.team;
      el("team-toggle").setAttribute("aria-pressed", String(state.team));
      document.documentElement.classList.toggle("team", state.team);
      document.querySelectorAll("[data-policy]").forEach(function (b) { b.setAttribute("aria-checked", String(!!state.policy[b.dataset.policy])); });
    }
  }
  function setVal(id, v) {
    var i = el(id);
    if (i && document.activeElement !== i) i.value = n0(v);
  }

  // Static text: every [data-i18n] node, aria labels, the two sentences with the catalogue version
  function applyStatic() {
    var L = LANG_BY[state.lang];
    document.documentElement.lang = L.html;
    document.querySelectorAll("[data-i18n]").forEach(function (n) { n.textContent = t(n.getAttribute("data-i18n")); });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (n) { n.setAttribute("aria-label", t(n.getAttribute("data-i18n-aria"))); });
    document.querySelectorAll("[data-lang]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.lang === state.lang)); });
    var cd = fmtDate(catalogDate());
    el("how-a").textContent = t("ui.how.a", { ver: CAT.version, date: cd });
    el("foot-1").textContent = t("foot.1", { ver: CAT.version, date: cd });
    el("step2-eg").textContent = t("ui.step2.eg", { more: t("card.more") });
    setShareLabel();
  }

  function embedContentHeight() {
    var wrap = document.querySelector(".wrap");
    if (wrap) {
      return Math.ceil(wrap.offsetTop + wrap.offsetHeight);
    }
    return Math.ceil(Math.max(document.body.scrollHeight, document.documentElement.scrollHeight));
  }

  function notifyParentResize() {
    if (window.self === window.top) return;
    try {
      window.parent.postMessage({ type: "kharcha-calculator-resize", height: embedContentHeight() }, "*");
    } catch (e) { /* ignore */ }
  }

  function render() {
    var a = document.activeElement, aid = a && a.id, s0 = null, s1 = null;
    FOCUS = null;
    if (a && a.tagName === "INPUT" && a.type === "text" && a.dataset && a.dataset.num) {
      FOCUS = { id: aid, raw: a.value };
      try { s0 = a.selectionStart; s1 = a.selectionEnd; } catch (e) { /* ignore */ }
    }
    D = E.derive(state, state.policy);
    Q = E.quote(D);
    renderProfile(); renderBase(); renderCards(); renderBill(); renderBar();
    notifyParentResize();
    if (aid) {
      var b = el(aid);
      if (b && b !== document.activeElement) {
        b.focus({ preventScroll: true });
        if (s0 !== null && b.setSelectionRange) { try { b.setSelectionRange(s0, s1); } catch (e) { /* ignore */ } }
      }
    }
  }

  // ------------------------------------------------------------------ PDF + sharing
  var IN_FRAME = (function () { try { return window.self !== window.top; } catch (e) { return true; } })();
  var DL = (window.claude && typeof window.claude.use === "function") ? window.claude.use("downloads").catch(function () { return null; }) : null;
  var CAN_SHARE_FILES = (function () {
    if (IN_FRAME || !navigator.canShare || !window.File) return false;
    try { return navigator.canShare({ files: [new File([new Uint8Array([37, 80, 68, 70])], "t.pdf", { type: "application/pdf" })] }); } catch (e) { return false; }
  })();
  var IN_APP = /FBAN|FBAV|Instagram|Line\/|; wv\)/.test(navigator.userAgent || "");
  var pdfCache = null, busy = false, shareReady = false;

  function pdfSig() {
    return JSON.stringify([state.stage, state.sellerType, state.skus, state.newSkus, state.mps, state.live, state.orders, state.adBudget, state.adMps,
      state.svc, state.pick, state.qty, state.families, state.policy, state.lang, state.name, state.city]);
  }
  function pdfName() { return "Khulega-Kharcha-" + REF + ".pdf"; }

  function pdfModel() {
    var L = LANG_BY[state.lang], tt = Q.totals, now = new Date(), valid = new Date(now.getTime() + 60 * 864e5);
    var groups = [];
    GROUPS.forEach(function (g) {
      var rows = Q.bill.filter(function (b) { return b.bucket === g[0]; });
      if (!rows.length) return;
      var sub = tt[g[0]], suffix = g[2] ? t(g[2]) : "";
      groups.push({
        title: t(g[1]), subtotal: rs(sub) + suffix,
        rows: rows.map(function (b) { return { label: billLabel(b), sub: billSub(b), amount: rs(b.amount) }; }),
        gstLabel: "GST 18%", gstAmount: rs(sub * GST),
        totalLabel: t(g[1]) + " (" + t("bill.inclGst") + ")", totalAmount: rs(sub * (1 + GST)) + suffix
      });
    });
    var who = [state.name.trim(), state.city.trim()].filter(Boolean).join(", ");
    var mps = D.ctx.sel.map(function (m) { return MP_NAME[m]; }).join(", ") || t("msg.notDecided");
    var svcs = CARD_KEYS.filter(function (k) { return D.cards[k].on; }).map(cardT).join(", ") || t("msg.noneYet");
    return {
      lang: state.lang, fonts: L.fonts, lh: (state.lang === "te" || state.lang === "kn") ? 1.5 : (state.lang === "gu" ? 1.42 : 1.38),
      logo: window.KQ_LOGO || "", web: ORG.web, ref: REF,
      docTitle: "Khulega Kharcha " + REF, docSubject: "Estimate from TechSandhya Rate Card v" + CAT.version,
      title: t("ui.step3"), subtitle: "khulega.online  ·  " + t("ui.h1"),
      estimateLocal: t("pdf.estimate"), estimateEn: "Estimate · Not a tax invoice · Valid 60 days",
      forLabel: t("pdf.for"), forValue: who,
      meta: [[t("pdf.date"), fmtDate(now)], [t("pdf.ref"), REF], [t("pdf.valid"), t("pdf.validUntil", { date: fmtDate(valid) })]],
      profile: [tn("n.product", D.profile.skus), mps, t(state.sellerType === "b2b" ? "ui.type.b2b" : "ui.type.b2b2b"),
        t(state.stage === "new" ? "ui.stage.new" : "ui.stage.live")].join("  ·  "),
      services: t("msg.services") + ": " + svcs,
      tiles: [
        { label: t("bill.monthly"), amount: rs(tt.monthly * (1 + GST)), incl: t("bill.inclGst"), ex: rs(tt.monthly) + " + GST " + rs(tt.monthlyGst), tone: "teal" },
        { label: t("bill.oneTime"), amount: rs(tt.oneTime * (1 + GST)), incl: t("bill.inclGst"), ex: tt.oneTime > 0 ? rs(tt.oneTime) + " + GST " + rs(tt.oneTimeGst) : t("bill.none"), tone: "amber" }
      ],
      linesTitle: t("pdf.lines"), emptyText: t("bill.empty"), groups: groups,
      year: { label: t("bill.year"), sub: "(" + t("bill.inclGst") + ")", amount: rs(tt.tcv * (1 + GST)) },
      ads: tt.adSpend > 0 ? { label: t("bill.adBudget"), sub: t("bill.adBudgetSub"), amount: rs(tt.adSpend) + t("per.month") } : null,
      trial: state.stage === "live" ? t("bill.trial") : "",
      notes: { title: t("pdf.notes"), sections: [
        { title: t("excl.q"), items: [1, 2, 3, 4, 5].map(function (i) { return t("excl." + i); }) },
        { title: t("when.q"), items: [1, 2, 3, 4, 5, 6].map(function (i) { return t("when." + i); }) }
      ] },
      contact: t("pdf.contact") + "  ·  khulega.online",
      smallprint: "TechSandhya Service Catalog & Rate Card v" + CAT.version + " (" + CAT.issued + ")  ·  Ref " + REF + "  ·  GST at 18%; marketplace fees, media spend and government fees are not included.",
      footer: [ORG.name + " | GSTIN: " + ORG.gstin, ORG.address, ORG.email + " | " + ORG.phone]
    };
  }

  function makePdf() {
    var sig = pdfSig();
    if (pdfCache && pdfCache.sig === sig) return Promise.resolve(pdfCache.blob);
    return window.KQPDF.make(pdfModel()).then(function (r) { pdfCache = { sig: sig, blob: r.blob }; return r.blob; });
  }

  function setBusy(on, which) {
    busy = on;
    el("pdf-dl").disabled = on; el("pdf-share").disabled = on;
    if (on) el(which === "share" ? "pdf-share-lbl" : "pdf-dl-lbl").textContent = t("pdf.making");
    else { el("pdf-dl-lbl").textContent = t("pdf.download"); setShareLabel(); }
  }
  function setShareLabel() { var s = el("pdf-share-lbl"); if (s) s.textContent = shareReady ? t("pdf.shareReady") : t("pdf.share"); }

  function browserDownload(blob, name) {
    var url = URL.createObjectURL(blob), a = document.createElement("a");
    a.href = url; a.download = name; a.rel = "noopener"; a.style.display = "none";
    document.body.appendChild(a); a.click();
    setTimeout(function () { a.remove(); URL.revokeObjectURL(url); }, 60000);
  }
  function saveBlob(blob, name) {
    var p = DL ? DL : Promise.resolve(null);
    return p.then(function (dl) {
      if (dl) {
        return dl.save({ filename: name, data: blob }).then(function () { toast(t("pdf.saved")); return true; }, function (e) {
          var c = e && e.code;
          toast(c === "declined" ? t("pdf.declined") : (c === "rate_limited" ? t("pdf.error") : t("pdf.unavailable")));
          return false;
        });
      }
      if (IN_FRAME && window.claude) { toast(t("pdf.unavailable")); return false; }
      browserDownload(blob, name); toast(t("pdf.saved")); return true;
    });
  }
  function onDownload() {
    if (busy) return;
    setBusy(true, "dl");
    makePdf().then(function (blob) { return saveBlob(blob, pdfName()); })
      .catch(function (e) { if (window.console) console.error(e); toast(t("pdf.error")); })
      .then(function () { setBusy(false); });
  }
  function onShare() {
    if (busy) return;
    var cached = pdfCache && pdfCache.sig === pdfSig();
    var doShare = function (blob) {
      var file = new File([blob], pdfName(), { type: "application/pdf" });
      return navigator.share({ files: [file], title: "Khulega Kharcha " + REF, text: shareText() }).then(function () {
        shareReady = false; setShareLabel();
      }, function (e) {
        if (e && e.name === "AbortError") { shareReady = false; setShareLabel(); return; }
        if (e && e.name === "NotAllowedError") { shareReady = true; setShareLabel(); return; }  // activation expired: next tap shares the ready file
        fallbackShare(blob);
      });
    };
    if (CAN_SHARE_FILES && cached) { doShare(pdfCache.blob); return; }
    setBusy(true, "share");
    makePdf().then(function (blob) {
      setBusy(false);
      if (CAN_SHARE_FILES) return doShare(blob);
      return fallbackShare(blob);
    }).catch(function (e) { if (window.console) console.error(e); setBusy(false); toast(t("pdf.error")); });
  }
  // No file sharing here (desktop, some browsers): save the PDF, then point at the WhatsApp button
  function fallbackShare(blob) {
    return saveBlob(blob, pdfName()).then(function (ok) {
      if (!ok) return;
      toast(t("pdf.attach"));
      var wa = el("wa-link"); wa.classList.add("pulse");
      try { wa.scrollIntoView({ behavior: "smooth", block: "center" }); } catch (e) { /* ignore */ }
      setTimeout(function () { wa.classList.remove("pulse"); }, 4000);
    });
  }

  // ------------------------------------------------------------------ events
  var LIMITS = { skus: [1, 5000], newSkus: [0, 5000], orders: [0, 100000], adBudget: [0, 1000000], families: [1, 50] };
  function clamp(k, v) { var l = LIMITS[k] || [0, 1e9]; return Math.min(l[1], Math.max(l[0], v)); }
  function parseNum(s) { var v = parseInt(String(s).replace(/[^\d]/g, ""), 10); return isNaN(v) ? 0 : v; }

  var toastTimer;
  function toast(msg) {
    var tEl = el("toast"); tEl.textContent = msg; tEl.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { tEl.hidden = true; }, 4200);
  }

  function setLang(code) {
    if (!LANG_BY[code]) return;
    state.lang = code;
    try { localStorage.setItem("kq.lang", code); } catch (e) { /* ignore */ }
    shareReady = false;
    applyStatic();
    render();
  }

  function syncThemeColor(theme) {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "light" ? "#2563EB" : "#122027");
  }

  function applyTheme(theme) {
    if (theme !== "light" && theme !== "dark") theme = "dark";
    document.documentElement.setAttribute("data-theme", theme);
    document.querySelectorAll("[data-theme-pick]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.themePick === theme));
    });
    syncThemeColor(theme);
  }

  function setTheme(theme) {
    applyTheme(theme);
    try { localStorage.setItem("kq.theme", theme); } catch (e) { /* ignore */ }
    notifyParentResize();
  }

  function initialTheme() {
    try {
      var saved = localStorage.getItem("kq.theme");
      if (saved === "light" || saved === "dark") return saved;
    } catch (e) { /* ignore */ }
    return IN_FRAME ? "dark" : (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }

  document.addEventListener("click", function (ev) {
    var b = ev.target.closest("button, a");
    if (!b) return;
    var ds = b.dataset;
    if (ds.lang) { setLang(ds.lang); return; }
    if (ds.themePick) { setTheme(ds.themePick); return; }
    if (b.id === "pdf-dl") { onDownload(); return; }
    if (b.id === "pdf-share") { onShare(); return; }
    if (ds.stage) {
      state.stage = ds.stage;
      if (ds.stage === "new") { state.svc.reg = true; state.svc.cat = true; }
      else { state.live = Object.assign({}, state.mps); state.newSkus = 0; state.svc.reg = false; state.svc.cat = false; }
    } else if (ds.type) {
      state.sellerType = ds.type;
    } else if (ds.mp) {
      var m = ds.mp; state.mps[m] = !state.mps[m];
      if (state.stage === "live" && !state.mps[m]) state.live[m] = false;
      if (state.stage === "live" && state.mps[m]) { state.svc.reg = true; state.svc.cat = true; }
    } else if (ds.live) {
      state.live[ds.live] = !state.live[ds.live];
      if (!state.live[ds.live]) { state.svc.reg = true; state.svc.cat = true; }
    } else if (ds.admp) {
      state.adMps[ds.admp] = !state.adMps[ds.admp];
    } else if (ds.svc) {
      var k = ds.svc, now = !state.svc[k];
      state.svc[k] = now;
      if (now) state.open[k] = true;
      if (k === "ads" && now && !state.svc.ops) { state.svc.ops = true; toast(t("toast.adsOn", { ops: cardT("ops") })); }
      if (k === "ops" && !now && state.svc.ads) { state.svc.ads = false; toast(t("toast.adsOff")); }
    } else if (ds.open) {
      state.open[ds.open] = !state.open[ds.open];
    } else if (ds.step) {
      var key = ds.step; state[key] = clamp(key, (state[key] || 0) + parseInt(ds.d, 10));
      if (key === "newSkus") { state.newSkus = Math.min(state.newSkus, state.skus); if (state.newSkus > 0) state.svc.cat = true; }
      if (key === "skus") state.newSkus = Math.min(state.newSkus, state.skus);
    } else if (ds.qty) {
      var cur = (state.qty[ds.qty] !== undefined) ? state.qty[ds.qty] : currentQty(ds.qty);
      state.qty[ds.qty] = Math.max(1, Math.min(500, cur + parseInt(ds.d, 10)));
    } else if (ds.budget) {
      state.adBudget = parseInt(ds.budget, 10);
    } else if (TEAM && ds.policy) {
      state.policy[ds.policy] = !state.policy[ds.policy];
    } else if (TEAM && b.id === "team-toggle") {
      state.team = !state.team;
    } else if (b.id === "copy-btn") {
      copyShare(); return;
    } else if (b.id === "bar-bill") {
      var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el("bill").scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" }); return;
    } else { return; }
    shareReady = false;
    render();
  });

  function currentQty(key) {
    var found = 1;
    Object.keys(D.cards).forEach(function (k) { D.cards[k].lines.forEach(function (l) { if (l.stepper === key) found = l.qty; }); });
    return found;
  }

  document.addEventListener("change", function (ev) {
    var i = ev.target;
    if (i.dataset && i.dataset.pick) { state.pick[i.dataset.pick] = i.checked; shareReady = false; render(); }
  });
  document.addEventListener("input", function (ev) {
    var i = ev.target;
    if (i.id === "in-name" || i.id === "in-city") {
      state[i.id === "in-name" ? "name" : "city"] = i.value.slice(0, i.id === "in-name" ? 60 : 40);
      shareReady = false; renderShare(); return;
    }
    if (!i.dataset || !i.dataset.num) return;
    var key = i.dataset.num;
    state[key] = clamp(key, parseNum(i.value));
    if (key === "skus") state.newSkus = Math.min(state.newSkus, state.skus);
    if (key === "newSkus") { state.newSkus = Math.min(state.newSkus, state.skus); if (state.newSkus > 0) state.svc.cat = true; }
    shareReady = false;
    render();
  });
  document.addEventListener("focusout", function (ev) {
    var i = ev.target;
    if (i.dataset && i.dataset.num) { i.value = n0(state[i.dataset.num]); }
  });

  function copyShare() {
    var txt = el("share-text").value, done = function () { toast(t("toast.copied")); };
    try {
      navigator.clipboard.writeText(txt).then(done, function () { selectShare(); });
    } catch (e) { selectShare(); }
  }
  function selectShare() {
    var ta = el("share-text"); el("share-box").open = true; ta.focus(); ta.select();
    toast(t("toast.selected"));
  }

  // ------------------------------------------------------------------ start
  function initialLang() {
    var cands = [];
    try { cands.push(new URLSearchParams(location.search).get("lang")); } catch (e) { /* ignore */ }
    cands.push((location.hash || "").replace(/^#/, ""));
    try { cands.push(localStorage.getItem("kq.lang")); } catch (e) { /* ignore */ }
    for (var i = 0; i < cands.length; i++) if (cands[i] && LANG_BY[cands[i]]) return cands[i];
    return "hi";
  }
  state.lang = initialLang();
  applyTheme(initialTheme());
  if (!IN_FRAME) el("pdf-share").hidden = false;
  if (IN_APP) el("pdf-inapp").hidden = false;
  if (el("pdf-share").hidden) el("pf-actions").classList.add("one");
  if (!TEAM) document.querySelectorAll(".team-only").forEach(function (n) { n.remove(); });
  applyStatic();
  render();
  if (IN_FRAME) {
    window.addEventListener("resize", notifyParentResize, { passive: true });
    var wrapEl = document.querySelector(".wrap");
    if (wrapEl && typeof ResizeObserver !== "undefined") {
      new ResizeObserver(notifyParentResize).observe(wrapEl);
    }
  }
})();
