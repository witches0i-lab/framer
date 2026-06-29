# GOYO — Hyperlink test checklist

The Etsy product **is** the hyperlinks. Run this before publishing any PDF.
Build the PDFs first:

```bash
npm run export      # → export/<theme>/goyo-print.html  (+ per-page files)
npm run pdf         # → export/<theme>/goyo.pdf         (internal links preserved)
```

If `npm run pdf` finds no Chromium it prints a manual fallback: open
`export/<theme>/goyo-print.html` in Chrome → **Print → Save as PDF**, with
**Background graphics ON** and **Margins: None**.

## Link map (what should be wired)
- **Tabs** (every page except cover) → Index · Daily · Weekly · Monthly · Habits · Notes
- **Month rail** (JAN–DEC) → Monthly page *(single Monthly page for now; see note)*
- **Index rows** → Daily · Weekly · Monthly · Habits · Notes
- **Cover** → no links (intentional)

Expected count in a built PDF: **113 link annotations** across 7 pages
(pages 2–7 = 6 tabs + 12 rail = 18 each ×6 = 108; Index adds 5 section rows).
Quick sanity check without opening a reader:

```bash
node -e "const d=require('fs').readFileSync('export/najeon/goyo.pdf');\
console.log('links:',(d.toString('latin1').match(/\/Subtype\s*\/Link/g)||[]).length)"
```

## In GoodNotes (iPad) — the real test
1. Import `goyo.pdf` as a document (not as an image).
2. Tap each **tab** on pages 2–7 → lands on the matching page.
3. Tap any **month** on the rail → lands on the Monthly page.
4. On **Index**, tap each row → lands on the matching section.
5. Confirm the **cover** has no stray tap targets.
6. Scribble on a page, then follow a link and come back — ink persists (links don't flatten the page).

## In Notability
- Repeat 2–5. Notability follows the same in-document `#anchor` destinations.

## Visual / print
- [ ] Each page is exactly **1080×1440** (portrait), no margins, no workspace chrome/labels.
- [ ] Background graphics present (dark najeon / paper / hanji as chosen).
- [ ] Rotated month-rail text not shifted (see CLAUDE.md caveat; vectorise/raster if it drifts).
- [ ] Fonts embedded — render with network access so Fraunces/Inter load before printing.

## Notes / future
- Rail currently points all months at the one Monthly page. When roadmap 4 adds 12
  monthly pages, give each `id="p-mon-jan"…`, point `JAN…DEC` at them, and update the
  expected link count.
