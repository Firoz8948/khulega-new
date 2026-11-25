#!/usr/bin/env python3
"""Refresh the calculator's prices from a TechSandhya Rate Card Engine workbook.

Writes <site>/assets/catalog.js (only the service lines the page uses, no internal notes,
approval bands or discount caps) and bumps the ?v= cache token in <site>/index.html.

Usage:
  python3 export_catalog.py <Rate_Card_Engine.xlsx> <path/to/kharcha> <version> "<DD Month YYYY>"
  e.g. python3 export_catalog.py TechSandhya_Service_Catalog_Rate_Card_Engine_v1.3.xlsx ../kharcha 1.3 "21 November 2026"

Needs: Python 3.9+, openpyxl (pip install openpyxl).
Stops with an error if the workbook layout, GST formula, overage slabs or listing-maintenance formula
no longer match what the page's engine assumes. Fix the engine first in that case.
"""
import datetime
import json
import os
import re
import sys

try:
    import openpyxl
except ImportError:
    sys.exit("openpyxl is missing: pip install openpyxl")

MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


def fail(msg):
    sys.exit("STOP: " + msg)


def read_workbook(src):
    wb = openpyxl.load_workbook(src, data_only=True)
    ws = wb["01_CATALOG"]
    hdr = [c.value for c in ws[4]][:16]
    expected = ["Service ID", "Module", "Module Name", "Service Name", "Sub-Service", "Billing Frequency", "Rate Type", "Base Rate",
                "Unit", "Scaling Metric", "Tier Family", "Max Discount %", "Approval Band", "Engagement Models", "In Line Grid?", "Commercial Note"]
    if hdr != expected:
        fail("01_CATALOG header changed: %r" % hdr)
    lines = {}
    for r in range(5, ws.max_row + 1):
        sid = ws.cell(r, 1).value
        if not sid or not str(sid).startswith("TS-"):
            continue
        v = [ws.cell(r, c).value for c in range(1, 17)]
        lines[sid] = {"name": v[3], "freq": v[5], "rateType": v[6], "rate": float(v[7]), "tier": v[10]}

    t = wb["03_TIERS"]
    col = lambda rows: [float(t.cell(r, 3).value) for r in rows]
    if not (str(t["B8"].value).startswith("1 – 10") and str(t["B12"].value).startswith("501+") and str(t["B21"].value).startswith("4 or more")):
        fail("03_TIERS bands moved")
    tiers = {
        "SKU": {"upTo": [10, 50, 200, 500, None], "mult": col(range(8, 13)), "codes": ["S1", "S2", "S3", "S4", "S5"]},
        "CHN": {"upTo": [1, 2, 3, None], "mult": col(range(18, 22)), "codes": ["C1", "C2", "C3", "C4"]},
        "PTC": {"upTo": [100, 500, 2000, 10000, None], "mult": col(range(36, 41)), "codes": ["P1", "P2", "P3", "P4", "P5"]},
        "ORD": [],
    }
    for r in range(27, 31):
        nums = [int(x.replace(",", "")) for x in re.findall(r"[\d,]+", str(t.cell(r, 2).value))]
        rate = float(re.search(r"([\d.]+)", str(t.cell(r, 3).value).replace(",", "")).group(1))
        tiers["ORD"].append({"from": nums[0], "to": nums[1] if len(nums) > 1 else None, "rate": rate})

    rl = wb["04_RULES"]
    start = next((r for r in range(1, rl.max_row + 1) if str(rl.cell(r, 2).value or "").startswith("C.  BUNDLE DISCOUNT LADDER")), None)
    if not start:
        fail("04_RULES bundle ladder not found")
    ladder = []
    for r in range(start + 2, start + 7):
        label, disc = str(rl.cell(r, 1).value), str(rl.cell(r, 2).value)
        ladder.append({"components": int(re.match(r"(\d+)", label).group(1)), "orMore": "or more" in label,
                       "disc": float(re.match(r"([\d.]+)%", disc).group(1)) / 100})

    b = wb["05_BUNDLES"]
    if not (str(b["B4"].value).startswith("TS-SUB-002") and str(b["B24"].value).startswith("TS-SUB-003")):
        fail("05_BUNDLES layout moved")
    def bundle(rows, std_cell, bid):
        comps = [{"id": b.cell(r, 2).value, "core": b.cell(r, 4).value == "Core", "rate": float(b.cell(r, 5).value),
                  "qty": float(b.cell(r, 6).value), "pctOfAdSpend": b.cell(r, 2).value == "TS-ADS-003"} for r in rows]
        return {"id": bid, "components": comps, "std": float(b[std_cell].value)}
    bundles = {"TS-SUB-002": bundle(range(7, 14), "E18", "TS-SUB-002"), "TS-SUB-003": bundle(range(27, 30), "E34", "TS-SUB-003")}

    fq = openpyxl.load_workbook(src, data_only=False)["06_QUOTE"]
    if fq["I78"].value != "=$I$77*0.18":
        fail("GST formula on 06_QUOTE!I78 changed: %r" % fq["I78"].value)
    if "100" not in str(fq["P65"].value) or "03_TIERS" not in str(fq["P65"].value):
        fail("TS-CAT-013 formula on 06_QUOTE!P65 changed: %r" % fq["P65"].value)
    if str(fq["P66"].value).replace(" ", "") != "=MAX(0,MIN($C$9,1500)-600)*2.5+MAX(0,MIN($C$9,3000)-1500)*2+MAX(0,$C$9-3000)*1.75":
        fail("Overage formula on 06_QUOTE!P66 changed: %r" % fq["P66"].value)
    return lines, tiers, ladder, bundles


def used_ids(site):
    ids = set()
    for name in ("app.js", "engine.js"):
        p = os.path.join(site, "assets", name)
        ids |= set(re.findall(r"TS-[A-Z]{3}-\d{3}", open(p, encoding="utf-8").read()))
    return ids


def main():
    if len(sys.argv) != 5:
        sys.exit(__doc__)
    src, site, version, issued = sys.argv[1:5]
    try:
        d = datetime.datetime.strptime(issued, "%d %B %Y")
    except ValueError:
        fail('date must look like "21 November 2026"')
    lines, tiers, ladder, bundles = read_workbook(src)
    need = used_ids(site) | {c["id"] for bd in bundles.values() for c in bd["components"]} | {"TS-CAT-013", "TS-SUB-002", "TS-SUB-003", "TS-OPS-007"}
    missing = sorted(i for i in need if i not in lines)
    if missing:
        fail("the page uses service IDs that are not in this workbook: " + ", ".join(missing))
    slim = {k: lines[k] for k in sorted(need)}
    markup = [c["rate"] for c in bundles["TS-SUB-003"]["components"] if c["pctOfAdSpend"]][0]
    if abs(markup - 0.12) > 1e-9 or tiers["ORD"][0]["to"] != 600:
        print("NOTE: ad markup or the 600-order threshold changed. Page copy mentions 600 orders; review assets/i18n.js.")
    data = {"source": os.path.basename(src), "version": version, "issued": issued, "issuedISO": d.strftime("%Y-%m-%d"),
            "gst": 0.18, "lines": slim, "tiers": tiers, "ladder": ladder, "bundles": bundles}
    out = os.path.join(site, "assets", "catalog.js")
    with open(out, "w", encoding="utf-8") as f:
        f.write("/* Generated from %s on %s. Do not edit by hand: rerun tools/export_catalog.py. */\n" % (os.path.basename(src), datetime.date.today().isoformat()))
        f.write("window.KQ_CATALOG = " + json.dumps(data, ensure_ascii=False, separators=(",", ":")).replace("</", "<\\/") + ";\n")
    idx = os.path.join(site, "index.html")
    html = open(idx, encoding="utf-8").read()
    html2 = re.sub(r"\?v=[0-9A-Za-z.\-]+", "?v=" + version + "-" + datetime.date.today().strftime("%Y%m%d"), html)
    open(idx, "w", encoding="utf-8").write(html2)
    print("Wrote %s: %d lines, v%s (%s). Cache token bumped in index.html." % (out, len(slim), version, issued))


if __name__ == "__main__":
    main()
