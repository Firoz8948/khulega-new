# Kharcha Calculator page assets

Live URL: `https://khulega.online/kharcha-calculator/` — Vue shell (`../index.html`) with site header/footer; calculator UI in `calculator.html`.

- **`assets/`** — `style.css`, `app.js`, `engine.js`, `catalog.js`, `i18n.js`, `pdf.js`, `logo.js`, icons
- Source bundle: `../khulega-kharcha-v1.3/kharcha/` (archive)
- Regenerate catalog: `khulega-kharcha-v1.3/tools/export_catalog.py`

Deploy note: nginx (or CDN) must serve `/kharcha-calculator/` as static files, **above** the SPA fallback:

```nginx
location = /kharcha-calculator { return 301 /kharcha-calculator/; }
location /kharcha-calculator/ {
  try_files $uri $uri/ /kharcha-calculator/index.html =404;
}
```

`npm run build` syncs this folder to `public/kharcha-calculator/` and copies into `dist/kharcha-calculator/`.