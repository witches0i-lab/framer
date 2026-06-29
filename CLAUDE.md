# CLAUDE.md — GOYO Wellness Journal

Project context for Claude Code. Read this before making changes.

## What this is
GOYO (고요, "stillness") is a **dark-mode, undated wellness journal** sold on Etsy as a
**GoodNotes / Notability–compatible hyperlinked PDF**. Aesthetic: Korean *najeon* (나전,
mother-of-pearl) reinterpreted as modern, minimal, editorial. Identity = celadon (primary) +
najeon pink (secondary) on dark ink, with a procedural najeon medallion on the cover.

It is a **plain static site** — no framework, no build step, no dependencies.

## Run / preview
```bash
python3 -m http.server 5173      # or: npm run dev
# open http://localhost:5173
```
Every `.page` is `1080 × 1440` (portrait, tablet-friendly for GoodNotes). The page stacks
all 7 pages vertically for review; each is one journal page.

## Structure
```
index.html        7 pages of markup (Cover, Index, Monthly, Weekly, Daily, Habits, Notes)
css/tokens.css    DESIGN SYSTEM — single source of truth (palette, type, spacing, frame)
css/base.css      layout + components (chrome, labels, rows, page-specific). Don't churn.
js/medallion.js   procedural najeon cover art (seeded PRNG → SVG into #art)
js/journal.js     seal + page generators (date strip, calendar, weekly cols, habit grid)
assets/           hi-fidelity cover medallion (svg + png) for print/Figma
themes/           colourway overrides (light.css, hanji.css) — opt-in
tools/export.mjs  print-ready export: one self-contained HTML per page × theme → export/
export/           generated print-ready output (regenerate via `npm run export`)
```

## Design system rules (important)
- **Variations = edit `css/tokens.css` only.** Colour, font, spacing, and frame are all tokens.
  Never fork the layout to reskin it. To try a colourway, add/override `:root` in a theme file.
- **Apply a theme:** add `<link rel="stylesheet" href="themes/light.css">` *after* `css/tokens.css`
  in `index.html` (later link wins). Default ships dark. For review, the workspace **theme
  switcher** (top-right pill, `js/switcher.js`) swaps the empty `#theme` link's `href` at runtime
  and remembers the choice in `localStorage`. The switcher lives outside every `.page`, so it is
  excluded from any print/export pass.
- Keep the type hierarchy: one serif display per page (`--serif`, Fraunces), everything else
  `--sans` (Inter) at `--t-label` (11px, uppercase, letter-spaced) with hairline separators.
- Accents: `--accent` (celadon) = active/section; `--accent2` (pink) = dividers, gratitude, seal.
- Chrome is shared: text tabs w/ celadon underline, 40px **rotated** month rail, najeon seal.

## Cover medallion
Generated procedurally in `js/medallion.js` (water + moon + lower-left najeon pine, seed = 11).
Don't hand-edit the generated nodes. The dark colourway is fixed for the cover; the standalone
`assets/goyo-cover-medallion.svg/.png` is the print/Figma copy.

## Roadmap (good tasks)
1. ~~`themes/` colourways + a tiny theme switcher for review.~~ ✅ Najeon (default dark) /
   Light / Hanji, swapped live via the top-right switcher.
2. ~~Per-theme **export to print-ready HTML** (one file per page, no workspace chrome/labels).~~
   ✅ `npm run export` (`tools/export.mjs`) → `export/<theme>/NN-name.html` (7 pages × 3 themes),
   each self-contained (inlined CSS/JS, no chrome) at 1080×1440. `export/index.html` is a contact
   sheet. Dependency-free (Node built-ins only).
3. **Hyperlinked-PDF pipeline** — wire nav as anchors (tabs→pages, rail→months, index→sections),
   render to PDF preserving internal links, and a GoodNotes link-test checklist.
4. New pages: weekly reflection, year-at-a-glance, gratitude log.

## Conventions
- Stay dependency-free and framework-free. No bundler.
- Keep `index.html` self-contained and each page `1080×1440`.
- Preserve token names (other files + the Figma build depend on them).

## Caveats
- The rotated month-rail renders fine in browsers, but some PDF exporters mishandle vertical
  text — if it shifts on export, outline (vectorise) or rasterise just the month labels.
- Etsy product = the **hyperlinks**; test every link in GoodNotes before publishing.
