/* Khulega quote engine — mirrors TechSandhya Rate Card Engine v1.1 (06_QUOTE / 05_BUNDLES / 03_TIERS).
   Pure functions only: the page and the test harness run this same file. */
(function (root, factory) {
  var api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.KQ = api;
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  var MPS = ["amazon", "flipkart", "meesho", "ondc"];

  function create(cat) {
    // ---------------------------------------------------------------- pricing primitives
    function tier(family, p) {
      if (family === "ORD") return { mult: 1, code: "slab" };
      var t = cat.tiers[family];
      if (!t) return { mult: 1, code: "FLAT" };
      var x = family === "SKU" ? p.skus : family === "CHN" ? p.channels : p.cohort;
      for (var i = 0; i < t.upTo.length; i++) {
        if (t.upTo[i] === null || x <= t.upTo[i]) return { mult: t.mult[i], code: t.codes[i] };
      }
      return { mult: 1, code: "?" };
    }

    // Line Amount = Base Rate x Quantity x Tier Multiplier x (1 - Discount); PCT: (Rate/100) x Basis
    function priceLine(id, qty, p) {
      var L = cat.lines[id];
      if (!L) throw new Error("Unknown service " + id);
      if (L.rateType === "PCT") return { amount: (L.rate / 100) * qty, mult: 1, code: "%" };
      var t = tier(L.tier, p);
      return { amount: L.rate * qty * t.mult, mult: t.mult, code: t.code };
    }

    function ladderDisc(n) {
      for (var i = 0; i < cat.ladder.length; i++) {
        var s = cat.ladder[i];
        if (s.orMore ? n >= s.components : n === s.components) return s.disc;
      }
      return 0;
    }

    // Bundle Price = sum(retained components) x (1 - bundle discount) x (1 - standing class discount)
    function priceBundle(bid, include, adSpend) {
      var b = cat.bundles[bid];
      var count = 0, sum = 0, comps = [];
      b.components.forEach(function (c) {
        var on = c.core ? true : include[c.id] !== false;
        var amount = on ? (c.pctOfAdSpend ? c.rate * adSpend : c.rate * c.qty) : 0;
        if (on) count++;
        sum += amount;
        comps.push({ id: c.id, core: c.core, rate: c.rate, qty: c.qty, pct: c.pctOfAdSpend, on: on, amount: amount });
      });
      var disc = ladderDisc(count);
      var list = sum * (1 - disc);
      var realised = list * (1 - b.std);
      return { id: bid, comps: comps, count: count, sum: sum, disc: disc, list: list, std: b.std, realised: realised, subsidy: list - realised };
    }

    // TS-OPS-007: marginal slabs, orders 1-600 included
    function overage(orders) {
      var total = 0, parts = [];
      cat.tiers.ORD.forEach(function (s) {
        if (!s.rate) return;
        var top = s.to === null ? Infinity : s.to;
        var n = Math.max(0, Math.min(orders, top) - (s.from - 1));
        if (n > 0) parts.push({ from: s.from, to: s.to, orders: n, rate: s.rate, amount: n * s.rate });
        total += n * s.rate;
      });
      return { amount: total, parts: parts };
    }

    // TS-CAT-013: active SKUs x managed channels x Rs100 x SKU tier
    function listingMaintenance(p) {
      var t = tier("SKU", p);
      return { amount: p.skus * p.channels * cat.lines["TS-CAT-013"].rate * t.mult, mult: t.mult, code: t.code };
    }

    // ---------------------------------------------------------------- page rules: seller inputs -> lines
    function derive(st, policy) {
      policy = policy || {};
      var sel = MPS.filter(function (m) { return st.mps[m]; });
      var live = st.stage === "live" ? sel.filter(function (m) { return st.live[m]; }) : [];
      var fresh = sel.filter(function (m) { return live.indexOf(m) < 0; });           // channels to activate
      var freshMp = fresh.filter(function (m) { return m !== "ondc"; });
      var ondcFresh = fresh.indexOf("ondc") >= 0;
      var N = Math.max(0, Math.floor(st.skus || 0));
      var Nnew = st.stage === "live" ? Math.min(N, Math.max(0, Math.floor(st.newSkus || 0))) : N;
      var Nold = N - Nnew;
      // ONDC catalogue publication is inside TS-ONB-002, so a fresh ONDC channel takes no upload line
      var uploadCh = sel.filter(function (m) { return m !== "ondc" || live.indexOf("ondc") >= 0; }).length;
      var migrateCh = freshMp.length;
      var adCapable = sel.filter(function (m) { return m !== "ondc"; });
      var adMps = adCapable.filter(function (m) { return st.adMps[m]; });

      var ctx = { sel: sel, live: live, fresh: fresh, freshMp: freshMp, ondcFresh: ondcFresh, N: N, Nnew: Nnew, Nold: Nold,
        C: sel.length, uploadCh: uploadCh, migrateCh: migrateCh, adCapable: adCapable, adMps: adMps };

      var svc = Object.assign({}, st.svc);
      var notices = [];
      // Digital Marketing is gated behind Account Management (TS-SUB-003 prerequisite)
      if (svc.ads && !svc.ops && adMps.length) { svc.ops = true; notices.push("adsNeedsOps"); }

      var cards = {};
      function line(key, id, kind, qty, extra) {
        var o = { key: key, id: id, kind: kind, qty: qty };
        if (extra) for (var k in extra) o[k] = extra[k];
        return o;
      }

      // Marketplace registration (M4 + the M1 KYC gate)
      var newStage = st.stage === "new";
      var reg = [];
      if (fresh.length) {
        if (freshMp.length) {
          reg.push(line("reg.kyc", "TS-CMP-007", newStage ? "gate" : "opt", 1, { def: false }));
          reg.push(line("reg.pin", "TS-ONB-003", newStage ? "gate" : "opt", 1, { def: true }));
          var firstComp = newStage ? 1 : 0;   // a seller already live on a channel expands via TS-ONB-008
          if (firstComp) {
            reg.push(line("reg.acct", "TS-ONB-001", "core", 1));
            reg.push(line("reg.bank", "TS-ONB-004", "core", 1));
            reg.push(line("reg.usc", "TS-ONB-005", "core", 1));
          }
          if (freshMp.length - firstComp > 0) reg.push(line("reg.addl", "TS-ONB-008", "core", freshMp.length - firstComp));
        } else if (newStage) {
          reg.push(line("reg.kyc", "TS-CMP-007", "gate", 1));
        }
        if (ondcFresh) reg.push(line("reg.ondc", "TS-ONB-002", "core", 1));
        reg.push(line("reg.test", "TS-ONB-006", "gate", fresh.length));
        if (freshMp.length) {
          reg.push(line("reg.ful", "TS-ONB-009", "opt", freshMp.length, { def: false }));
          reg.push(line("reg.train", "TS-TRN-005", "opt", freshMp.length, { def: false }));
        }
      }
      cards.reg = { applicable: fresh.length > 0, reason: sel.length ? "allLive" : "noMarketplace", lines: reg };

      // Compliance registrations (M1)
      cards.cmp = { applicable: true, lines: [
        line("cmp.gst", "TS-CMP-002", "opt", 1, { def: true }),
        line("cmp.udyam", "TS-CMP-004", "opt", 1, { def: true }),
        line("cmp.pan", "TS-CMP-001", "opt", 1, { def: false }),
        line("cmp.fssai", "TS-CMP-005", "opt", 1, { def: false }),
        line("cmp.alert", "TS-CMP-015", "opt", 1, { def: false })
      ] };

      // Cataloguing (M3)
      var catl = [];
      if (Nnew > 0 && uploadCh > 0) {
        catl.push(line("cat.photo", "TS-CAT-001", "opt", Nnew, { def: true }));
        catl.push(line("cat.copy", "TS-CAT-002", "opt", Nnew, { def: true }));
        catl.push(line("cat.qc", "TS-CAT-003", "core", Nnew));
        if (Nnew <= 25) catl.push(line("cat.upload", "TS-CAT-004", "core", Nnew * uploadCh));
        else catl.push(line("cat.bulk", "TS-CAT-005", "core", Math.ceil(Nnew / 250) * uploadCh, { batches: Math.ceil(Nnew / 250) }));
      }
      if (Nold > 0 && migrateCh > 0) catl.push(line("cat.migrate", "TS-CAT-011", "core", Nold * migrateCh));
      cards.cat = { applicable: catl.length > 0, reason: sel.length ? "nothingNew" : "noMarketplace", lines: catl };

      // Orders, returns, payments: TS-SUB-002 bundle + platform licence + add-ons
      var opsl = [];
      if (policy.tec001WithBundle !== false) opsl.push(line("ops.tec", "TS-TEC-001", "gate", 1));
      if (ctx.C > 2) opsl.push(line("ops.recx", "TS-REC-001", "opt", ctx.C - 2, { def: st.pick["am.TS-REC-001"] !== false }));
      if (adCapable.length) opsl.push(line("ops.ship", "TS-REC-004", "opt", adCapable.length, { def: false }));
      if (N > 0) opsl.push(line("ops.stock", "TS-OPS-006", "opt", N, { def: false }));
      cards.ops = { applicable: true, lines: opsl, bundle: "TS-SUB-002" };

      // GST return filing
      cards.tax = { applicable: true, lines: [
        line("tax.gstr", "TS-CMP-009", "core", 1),
        line("tax.tcs", "TS-CMP-011", "opt", 1, { def: false }),
        line("tax.annual", "TS-CMP-010", "opt", 1, { def: false })
      ] };

      // Brand and design (M2 + brand protection lines of M1)
      var fam = Math.max(1, Math.floor(st.families || 1));
      var labelOn = !!(st.pick["brd.label"]);
      cards.brand = { applicable: true, lines: [
        line("brd.logo", "TS-BRD-001", "opt", 1, { def: true }),
        line("brd.price", "TS-BRD-002", "opt", 1, { def: false }),
        line("brd.pack", "TS-BRD-003", "opt", 1, { def: false }),
        line("brd.lm", "TS-CMP-008", labelOn ? "gate" : "opt", fam, { def: false, stepper: "families" }),
        line("brd.label", "TS-DSN-008", "opt", fam, { def: false, stepper: "families" }),
        line("brd.info", "TS-DSN-001", "opt", qtyOf(st, "brd.info", Math.max(1, N)), { def: false, stepper: "brd.info" }),
        line("brd.life", "TS-DSN-002", "opt", qtyOf(st, "brd.life", Math.max(1, N)), { def: false, stepper: "brd.life" }),
        line("brd.video", "TS-DSN-007", "opt", qtyOf(st, "brd.video", 1), { def: false, stepper: "brd.video" }),
        line("brd.tm", "TS-CMP-012", "opt", qtyOf(st, "brd.tm", 1), { def: false, stepper: "brd.tm" }),
        line("brd.reg", "TS-CMP-013", "opt", Math.min(qtyOf(st, "brd.reg", Math.max(1, adCapable.length)), Math.max(1, adCapable.length)), { def: false, stepper: "brd.reg", max: Math.max(1, adCapable.length) })
      ] };

      // Advertising: TS-SUB-003 bundle + one-time builds
      var adsl = [];
      if (adMps.length) {
        adsl.push(line("ads.audit", "TS-ADS-001", newStage ? "gate" : "opt", adMps.length, { def: true }));
        adsl.push(line("ads.build", "TS-ADS-002", "opt", adMps.length, { def: true }));
        adsl.push(line("ads.kw", "TS-ADS-005", "opt", adMps.length, { def: false }));
        adsl.push(line("ads.comp", "TS-ADS-010", "opt", adMps.length, { def: false }));
        if (N > 0) adsl.push(line("ads.copy", "TS-ADS-007", "opt", N, { def: false }));
        adsl.push(line("ads.wallet", "TS-REC-006", "opt", adMps.length, { def: false }));
        adsl.push(line("ads.creative", "TS-DSN-005", "opt", qtyOf(st, "ads.creative", 1), { def: false, stepper: "ads.creative" }));
      }
      cards.ads = { applicable: adCapable.length > 0, ready: adMps.length > 0, reason: "noAdCapable", lines: adsl, bundle: "TS-SUB-003" };

      // Resolve on/off for every line
      var cardOn = {};
      Object.keys(cards).forEach(function (k) {
        var c = cards[k];
        cardOn[k] = !!svc[k] && c.applicable && c.ready !== false;
        c.on = cardOn[k];
        c.lines.forEach(function (l) {
          var picked = st.pick[l.key];
          l.on = c.on && l.qty > 0 && (l.kind !== "opt" ? true : (picked === undefined ? !!l.def : !!picked));
        });
      });

      var amOn = cardOn.ops, dmOn = cardOn.ads;
      var amInclude = { "TS-CMP-015": st.pick["am.TS-CMP-015"] !== false, "TS-REC-001": st.pick["am.TS-REC-001"] !== false, "TS-OPS-008": st.pick["am.TS-OPS-008"] !== false };
      var dmInclude = { "TS-ADS-009": st.pick["dm.TS-ADS-009"] !== false };
      // Rule X9: a component retained in an active bundle is not separately billable
      cards.cmp.lines.forEach(function (l) {
        if (l.id === "TS-CMP-015" && amOn && amInclude["TS-CMP-015"]) { l.coveredBy = "TS-SUB-002"; l.on = false; }
      });

      var managed = (cardOn.reg) || (cardOn.cat) || amOn || dmOn;
      var cat013 = managed && N > 0 && ctx.C > 0 && !(st.sellerType === "b2b" && policy.cat013ForB2B === false);

      var profile = { skus: N, channels: ctx.C, cohort: 1, orders: amOn ? Math.max(0, Math.floor(st.orders || 0)) : 0, adSpend: dmOn ? Math.max(0, st.adBudget || 0) : 0 };
      return { ctx: ctx, svc: svc, cards: cards, notices: notices, managed: managed, cat013: cat013,
        cat013Blocked: managed && N > 0 && ctx.C > 0 && !cat013,
        bundles: { am: { on: amOn, include: amInclude }, dm: { on: dmOn, include: dmInclude } }, profile: profile };
    }

    function qtyOf(st, key, dflt) {
      var v = st.qty && st.qty[key];
      return v === undefined || v === null || isNaN(v) ? dflt : Math.max(1, Math.floor(v));
    }

    // ---------------------------------------------------------------- price everything + commercial summary
    function quote(d) {
      var p = d.profile;
      var buckets = { oneTime: 0, monthly: 0, annual: 0, usage: 0 };
      var bill = [];   // every billable row, in display order
      function bucketOf(freq) {
        return freq === "One-Time" ? "oneTime" : freq === "Monthly Recurring" ? "monthly" : freq === "Annual Recurring" ? "annual" : "usage";
      }
      var cardTotals = {};
      Object.keys(d.cards).forEach(function (k) {
        var c = d.cards[k];
        var tot = { oneTime: 0, monthly: 0, annual: 0, usage: 0 };
        c.lines.forEach(function (l) {
          var pr = priceLine(l.id, l.qty, p);
          l.amount = pr.amount; l.mult = pr.mult; l.code = pr.code;
          l.freq = cat.lines[l.id].freq; l.bucket = bucketOf(l.freq);
          if (l.on) {
            tot[l.bucket] += pr.amount;
            buckets[l.bucket] += pr.amount;
            bill.push({ card: k, key: l.key, id: l.id, qty: l.qty, amount: pr.amount, bucket: l.bucket, mult: pr.mult, code: pr.code });
          }
        });
        cardTotals[k] = tot;
      });

      var bundles = {};
      if (d.bundles.am.on) {
        bundles.am = priceBundle("TS-SUB-002", d.bundles.am.include, p.adSpend);
        cardTotals.ops.monthly += bundles.am.realised;
        buckets.monthly += bundles.am.realised;
        bill.push({ card: "ops", key: "bundle.am", id: "TS-SUB-002", qty: 1, amount: bundles.am.realised, bucket: "monthly" });
      }
      if (d.bundles.dm.on) {
        bundles.dm = priceBundle("TS-SUB-003", d.bundles.dm.include, p.adSpend);
        cardTotals.ads.monthly += bundles.dm.realised;
        buckets.monthly += bundles.dm.realised;
        bill.push({ card: "ads", key: "bundle.dm", id: "TS-SUB-003", qty: 1, amount: bundles.dm.realised, bucket: "monthly" });
      }

      var universal = { cat013: null, overage: null };
      if (d.cat013) {
        universal.cat013 = listingMaintenance(p);
        buckets.monthly += universal.cat013.amount;
        bill.push({ card: "base", key: "base.cat013", id: "TS-CAT-013", qty: p.skus * p.channels, amount: universal.cat013.amount, bucket: "monthly", mult: universal.cat013.mult, code: universal.cat013.code });
      }
      if (d.bundles.am.on) {
        universal.overage = overage(p.orders);
        if (universal.overage.amount > 0) {
          cardTotals.ops.monthly += universal.overage.amount;
          buckets.monthly += universal.overage.amount;
          bill.push({ card: "ops", key: "ops.over", id: "TS-OPS-007", qty: p.orders, amount: universal.overage.amount, bucket: "monthly" });
        }
      }

      var g = cat.gst;
      var t = {
        oneTime: buckets.oneTime, monthly: buckets.monthly, annual: buckets.annual, usage: buckets.usage,
        tcv: buckets.oneTime + buckets.annual + buckets.usage + buckets.monthly * 12
      };
      t.oneTimeGst = t.oneTime * g; t.monthlyGst = t.monthly * g; t.annualGst = t.annual * g; t.tcvGst = t.tcv * g;
      t.adSpend = p.adSpend;
      return { totals: t, cardTotals: cardTotals, bundles: bundles, universal: universal, bill: bill };
    }

    // For the Excel parity harness: the 06_QUOTE inputs that reproduce a derived quote
    function excelInputs(d) {
      var grid = [];
      Object.keys(d.cards).forEach(function (k) {
        d.cards[k].lines.forEach(function (l) { if (l.on && l.qty > 0) grid.push([l.id, l.qty]); });
      });
      return {
        C6: d.profile.skus, C7: d.profile.channels, C9: d.profile.orders, C10: d.profile.adSpend,
        grid: grid,
        am: d.bundles.am.on ? d.bundles.am.include : null,
        dm: d.bundles.dm.on ? d.bundles.dm.include : null,
        cat013: d.cat013
      };
    }

    return { tier: tier, priceLine: priceLine, priceBundle: priceBundle, overage: overage, listingMaintenance: listingMaintenance,
      derive: derive, quote: quote, excelInputs: excelInputs, MPS: MPS, cat: cat };
  }

  return { create: create, MPS: MPS };
});
