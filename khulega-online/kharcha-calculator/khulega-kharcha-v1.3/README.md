# Khulega Kharcha Calculator: hosting package v1.3

Seller-facing cost calculator for khulega.online. Prices come from the TechSandhya Service Catalog & Rate Card Engine v1.3 (21 November 2026). It has five languages: Hinglish (default), मराठी, ગુજરાતી, తెలుగు and ಕನ್ನಡ. The seller can download the final "Aapka kharcha" as a PDF or share it on WhatsApp.

Plain static files: no build step, no server code, no database, no API keys. Nothing a seller types leaves their phone.

Package built 24 November 2026.

## What is in the folder

```
khulega-kharcha-v1.3/
├── README.md               this file
├── kharcha/                upload this folder; it becomes https://khulega.online/kharcha/
│   ├── index.html
│   └── assets/
│       ├── catalog.js      prices, generated from the rate card workbook (do not edit by hand)
│       ├── engine.js       pricing rules (same maths as sheet 06_QUOTE)
│       ├── i18n.js         every word on the page, in the PDF and in the WhatsApp message, 5 languages
│       ├── pdf.js          PDF maker (runs in the browser)
│       ├── app.js          page logic
│       └── style.css, logo.js, favicon-64.png, apple-touch-icon.png
└── tools/
    └── export_catalog.py   refreshes catalog.js from a new rate card workbook
```

## Put it live

The page has to load from a URL that ends in a slash (`/kharcha/`) so its `assets/` paths resolve. `index.html` sends `/kharcha` to `/kharcha/` by itself on hosts that serve it there.

Pick the setup that matches khulega.online. After it, run "Test after deploy" below.

### Normal web host (cPanel, Hostinger, GoDaddy, WordPress, Apache, nginx)
Upload the `kharcha` folder next to the site's own `index.html`; for cPanel or WordPress that is inside `public_html/`. Nothing else to change.

### React / Vite app built with Lovable, Bolt or similar (hosted on Lovable, Vercel or Netlify)
1. Copy the `kharcha` folder into the project's `public/` folder, so the file sits at `public/kharcha/index.html`.
2. Link to it with a plain anchor, not the router: `<a href="/kharcha/">Kharcha Calculator</a>`. A router `<Link>` tries to render it as an app screen and shows a blank page.
3. Deploy, then open `/kharcha/`. If the app's home page shows up instead, the host's "send everything to index.html" rule is catching it. Add a rule `/kharcha/` → `/kharcha/index.html` (rewrite, 200) above that catch-all, or link to `/kharcha/index.html` directly.

### Next.js
Copy to `public/kharcha/` and link to `/kharcha/index.html` (with `index.html`). Next.js serves files in `public/` as they are, but does not serve a folder's index file at `/kharcha/`.

### AWS S3 + CloudFront
1. Upload `kharcha/` to the bucket as the prefix `kharcha/`.
2. CloudFront with an S3 REST origin does not map `/kharcha/` to `/kharcha/index.html`. Add this CloudFront Function on viewer request (or add its two `if` lines to the function you already have):
   ```js
   function handler(event) {
     var r = event.request;
     if (r.uri === "/kharcha") {
       return { statusCode: 301, statusDescription: "Moved Permanently", headers: { location: { value: "/kharcha/" } } };
     }
     if (r.uri.endsWith("/")) r.uri += "index.html";
     return r;
   }
   ```
3. The app's error-page mapping (403/404 → `/index.html`) can stay.
4. After every update, invalidate `/kharcha/*`. CloudFront's default cache policy ignores query strings, so the `?v=` tokens alone do not refresh it.

### AWS Amplify Hosting
Amplify's single-page-app rule (source `</^[^.]+$|\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|woff2|ttf|map|json|webp)$)([^.]+$)/>`, target `/index.html`) also catches `/kharcha/`. In App settings → Rewrites and redirects, add these two rules above it:

| Source | Target | Type |
|---|---|---|
| `/kharcha` | `/kharcha/` | 301 |
| `/kharcha/` | `/kharcha/index.html` | 200 (Rewrite) |

### EC2 or a VPS with nginx
Copy `kharcha/` into the site root (for example `/var/www/khulega/kharcha/`). If the main app has a fallback to `/index.html`, add:
```nginx
location = /kharcha { return 301 /kharcha/; }
location /kharcha/ { index index.html; try_files $uri $uri/ =404; }
```

### Website builder that cannot host files (Wix, Squarespace, Shopify, Google Sites)
Host the folder on a free static host (Cloudflare Pages, Netlify or GitHub Pages: ₹0/month) at a subdomain such as `kharcha.khulega.online`. Add the CNAME record the host asks for, and link to the subdomain from a menu or button. Then change the two `https://khulega.online/kharcha/` addresses in `index.html` (`canonical` and `og:url`) to the new one.
Do not put the page inside an iframe or an embed block: browsers block or break the PDF download and the WhatsApp share sheet inside frames.

## Update prices when the rate card changes
```
pip install openpyxl
python3 tools/export_catalog.py "TechSandhya_Service_Catalog_Rate_Card_Engine_v1.4.xlsx" kharcha 1.4 "15 January 2027"
```
- The script rewrites `kharcha/assets/catalog.js` and bumps the `?v=` cache tokens in `index.html`. Upload the folder again afterwards. The catalog keeps only the service lines the page uses, with name, billing frequency, rate type, rate and tier family. No internal notes, approval bands or discount caps are included.
- It stops with `STOP: …` if the workbook's layout, GST formula, order slabs or listing-maintenance formula changed. A stop means the pricing rules changed, not just the rates, so `engine.js` needs review before publishing.
- It prints a `NOTE` if the 600-order threshold or the 12% ads markup changed. The page text mentions 600 orders in all five languages (`assets/i18n.js`), so update those lines too.
- Spot check after any price change: put the same inputs into sheet 06_QUOTE and compare the totals. On v1.3 the default example shows ₹4,997 + GST a month and ₹0 one-time. That example is 15 products on Flipkart and Meesho, already online, FPO/SHG, with order handling and GST returns.

## Languages
- The language picker is at the top. Direct links: `/kharcha/?lang=mr`, and the same with `gu`, `te`, `kn`, or `hi` for Hinglish. The phone remembers the last choice.
- All text sits in `assets/i18n.js`: one block per language, the same keys in each.
- **Before launch:** the Marathi, Gujarati, Telugu and Kannada text was drafted with AI. Get each one read by a native speaker, ideally someone who sells online. Prices and numbers come from the engine and need no translation review.
- Fonts load from Google Fonts: Baloo 2 + Mukta, Baloo Bhai 2 + Mukta Vaani, Baloo Tammudu 2 + Hind Guntur, and Baloo Tamma 2 + Hind Mysuru. If they fail to load, the phone's own fonts are used.

## PDF and WhatsApp
- "PDF download karein" saves `Khulega-Kharcha-<Ref>.pdf`. It uses the letterhead layout and includes the ref number, date, 60-day validity, totals, line items with service IDs, notes and the GSTIN footer. It is marked "Estimate · Not a tax invoice".
- "PDF WhatsApp par bhejein" opens the phone's share sheet with the PDF attached (Android Chrome, iPhone Safari). Where file sharing is not supported, as on most desktops, it downloads the PDF and highlights the WhatsApp message button so the seller can attach the file in the chat.
- Inside the Facebook, Instagram or WhatsApp in-app browser, downloads are often blocked, so the page shows a hint to open it in Chrome or Safari.
- The PDF is drawn as an image of the text (180 dpi), about 300–400 KB per page. Browser PDF libraries do not join Telugu and Kannada letters correctly; drawing with the page's own fonts does. As a result, text in the PDF cannot be selected or searched.

## Privacy
- Nothing is posted anywhere: no forms, cookies or analytics. The optional name and city stay on the phone and only appear in the PDF and the WhatsApp text. Browser storage keeps only the language choice (`kq.lang`).
- The browser fetches fonts from fonts.googleapis.com and fonts.gstatic.com, so Google sees the visitor's IP address. To avoid any third-party request, self-host the font files and replace the Google Fonts `<link>` in `index.html`.
- If you add analytics or a lead form later, update the site's privacy notice for the DPDP Act, 2023.

## Caching
- `index.html`: serve with `Cache-Control: no-cache`.
- `assets/*`: can be cached for a long time, because every price update changes the `?v=` token. A CDN that ignores query strings (CloudFront's default) needs an invalidation of `/kharcha/*`.

## Test after deploy (5 minutes, on a real phone)
1. Open `https://khulega.online/kharcha` (no slash). It should land on `/kharcha/`, styled.
2. The default example shows ₹5,896 a month (₹4,997 + GST) and ₹0 one-time in each of the 5 languages.
3. Download the PDF in Hinglish and in Telugu and open both. Totals and Ref must match the screen.
4. On Android Chrome, tap "PDF WhatsApp par bhejein", choose WhatsApp, and check the PDF arrives in the chat. Repeat on an iPhone.
5. Open the link from inside WhatsApp. The "open in Chrome/Safari" hint shows.
6. Switch the phone to dark mode. Text stays readable.

## Pricing defaults in this build
- The internal Team view (policy switches and per-line pricing detail) is not in this public build.
- TS-CAT-013 listing maintenance is charged to direct sellers as well as FPOs/SHGs, and TS-TEC-001 (USC console) comes with every bundle. Both follow the rate card's README and Rule X11. To change either, edit `policy` in `assets/app.js` (`cat013ForB2B`, `tec001WithBundle`).
