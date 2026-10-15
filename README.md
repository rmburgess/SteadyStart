# Steady Start

A trauma-informed pregnancy care guide for survivors of intimate partner and/or
sexual violence. Draft class project (AI in Public Health Governance), due December.

Plain HTML, CSS and JavaScript. No build step, no frameworks.

## Ground rules

- **No accounts, no tracking, nothing stored.** No cookies, no localStorage, no
  analytics, no outside fonts or scripts. A Content-Security-Policy in
  `index.html` blocks the page from loading anything that isn't its own file.
- **Keep the Quick exit.** The button, or the Esc key, replaces the page with a
  neutral search page.
- **Don't invent statistics.** Every number must come from a named, linked source.
- **Pregnancy only** for now. **3rd-grade reading level** for page text.
  Check with `python3 tools/readability.py -v`.
- **Providers:** clinic- or hospital-based care only (no home birth or birth
  centers). Listed only if the practice's own website says trauma-informed.
  Reviews and Reddit may be used to find candidates, never quoted.
- **Suggest a provider** is a class demo: it checks and clears the form but
  sends and saves nothing. Real submissions would need a decision about where
  the data goes, which conflicts with "nothing stored."
- **Texas law card** (in `js/guide-content.js`): re-check before turning in and
  update `LAW_CHECKED`.

## Files

| File | What it holds |
| --- | --- |
| `index.html` | Page layout: header, tabs, footer with hotlines |
| `css/styles.css` | Look and feel, including dark mode and phone layout |
| `js/guide-content.js` | The guide's choices and cards. Edit the text here |
| `js/pages-content.js` | "Costs" (insurance) and "Video care" (telehealth) tabs |
| `js/providers.js` | "Find a provider" listings and the rules for adding one |
| `js/evidence-data.js` | Chart data and sources for "Why this exists" |
| `js/texas-map.js` | Texas health-region map shapes (generated, don't edit) |
| `js/app.js` | Page behavior: tabs, quick exit, provider search, map and charts |
| `tools/build_texas_map.py` | Rebuilds `js/texas-map.js` from Census + DSHS data |
| `tools/readability.py` | Rough reading-level check |

## Viewing it

Open `index.html` in a browser, or run a local server from this folder:

```bash
python3 -m http.server 8000
```

then visit http://localhost:8000.

## Later

- Gynecologic care (HPV screening and vaccination)
- "For providers": a short page of trauma-informed communication tips
