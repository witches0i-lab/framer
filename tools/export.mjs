/* ============================================================
   GOYO — print-ready HTML export  (roadmap 2)
   Generates one standalone, self-contained HTML file per page,
   per theme, with all workspace chrome/labels stripped.

     node tools/export.mjs        # or: npm run export

   Output: export/<theme>/NN-name.html  (+ export/index.html)
   Dependency-free — Node built-ins only. No build step required
   to *use* the journal; this is opt-in tooling for the
   hyperlinked-PDF pipeline (roadmap 3).
   ============================================================ */
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => readFileSync(join(root, p), 'utf8');

const html      = read('index.html');
const tokens    = read('css/tokens.css');
const base      = read('css/base.css');
const medallion = read('js/medallion.js');
const journal   = read('js/journal.js');

/* themes: name -> overriding css ('' = default dark najeon) */
const themes = {
  najeon: '',
  light:  read('themes/light.css'),
  hanji:  read('themes/hanji.css'),
};

/* fonts: lift the <link> tags from index.html so files stay self-contained */
const fonts = (html.match(/<link[^>]*fonts[^>]*>/g) || []).join('\n');

/* ---- extract each .page (with its number + name from the flabel) ---- */
function extractPages(src) {
  const pages = [];
  const re = /<div class="flabel">(\d+)\s*·\s*<span>([^<]+)<\/span><\/div>/g;
  let m;
  while ((m = re.exec(src))) {
    const num = m[1], name = m[2].trim();
    const start = src.indexOf('<div class="page"', m.index);
    if (start === -1) continue;
    pages.push({ num, name, markup: sliceElement(src, start) });
  }
  return pages;
}

/* walk matched <div>…</div> depth from `start` and return the element */
function sliceElement(src, start) {
  const tag = /<div\b|<\/div>/g;
  tag.lastIndex = start;
  let depth = 0, m;
  while ((m = tag.exec(src))) {
    depth += m[0] === '</div>' ? -1 : 1;
    if (depth === 0) return src.slice(start, tag.lastIndex);
  }
  return src.slice(start);
}

/* print reset — overrides base.css body so only the page renders */
const printCss = `
/* ---- print/export reset (workspace chrome removed) ---- */
html,body{margin:0;padding:0;background:var(--bg);}
body{display:block;min-height:0;}
.page{margin:0 auto;}
@page{size:${'1080px 1440px'};margin:0;}
@media print{html,body{background:#fff;}.page{box-shadow:none;}}
`;

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

function doc(title, css, body) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
${fonts}
<style>
${css}
</style>
</head>
<body>
${body}
<script>
${medallion}
${journal}
</script>
</body>
</html>
`;
}

/* per-page file: in-doc #p-x anchors can't resolve (single page), so
   rewrite them to the sibling .html files for click-through navigation. */
function rewriteAnchors(markup, idToFile) {
  return markup.replace(/href="#(p-[a-z]+)"/g, (m, id) => idToFile[id] ? `href="${idToFile[id]}"` : m);
}

/* ---- build ---- */
const pages = extractPages(html);
const outRoot = join(root, 'export');
rmSync(outRoot, { recursive: true, force: true });

/* page-id (#p-slug) -> per-page filename, for sibling-link rewriting */
const idToFile = {};
for (const p of pages) idToFile['p-' + slug(p.name)] = `${p.num}-${slug(p.name)}.html`;

/* combined-print stylesheet: stack every page, one PDF page each, keep #anchors */
const combinedCss = printCss + `\n.page{break-after:page;page-break-after:always;}\n.page:last-of-type{break-after:auto;}\n`;

const manifest = {};
for (const [theme, themeCss] of Object.entries(themes)) {
  mkdirSync(join(outRoot, theme), { recursive: true });
  manifest[theme] = [];
  const pageCss = [tokens, base, themeCss, printCss].filter(Boolean).join('\n');
  for (const page of pages) {
    const file = `${page.num}-${slug(page.name)}.html`;
    const body = rewriteAnchors(page.markup, idToFile);
    writeFileSync(join(outRoot, theme, file), doc(`GOYO · ${page.num} ${page.name} · ${theme}`, pageCss, body));
    manifest[theme].push({ file, name: page.name, num: page.num });
  }
  /* combined hyperlinked file → source for the PDF (internal #anchors preserved) */
  const allCss = [tokens, base, themeCss, combinedCss].filter(Boolean).join('\n');
  const allBody = pages.map((p) => p.markup).join('\n');
  writeFileSync(join(outRoot, theme, 'goyo-print.html'), doc(`GOYO — ${theme} (print)`, allCss, allBody));
}

/* ---- contact-sheet index for quick review ---- */
const links = Object.entries(manifest).map(([theme, list]) => {
  const items = list.map((p) => `<li><a href="${theme}/${p.file}">${p.num} · ${p.name}</a></li>`).join('');
  return `<section><h2>${theme}</h2><ul><li><a href="${theme}/goyo-print.html"><b>▸ Combined (print → PDF)</b></a></li>${items}</ul></section>`;
}).join('\n');

writeFileSync(join(outRoot, 'index.html'), `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>GOYO — print exports</title>
<style>
body{font:14px/1.6 system-ui,sans-serif;background:#14181a;color:#e9e6df;margin:0;padding:40px;}
h1{font-weight:400;letter-spacing:.04em;} h2{text-transform:uppercase;letter-spacing:.18em;font-size:12px;color:#74a89f;}
section{display:inline-block;vertical-align:top;margin:0 48px 24px 0;} ul{list-style:none;padding:0;}
a{color:#e9e6df;text-decoration:none;} a:hover{color:#74a89f;}
</style></head>
<body><h1>GOYO — print-ready exports</h1>
<p style="color:#8a9499">One self-contained file per page, per theme. Open any page to print / render to PDF (1080×1440).</p>
${links}
</body></html>
`);

const nThemes = Object.keys(themes).length;
const count = pages.length * nThemes + nThemes; // per-page + combined
console.log(`Exported ${count} files → export/  (${pages.length} pages × ${nThemes} themes + ${nThemes} combined)`);
console.log(`Next: node tools/pdf.mjs   (render export/<theme>/goyo-print.html → goyo.pdf, internal links preserved)`);
