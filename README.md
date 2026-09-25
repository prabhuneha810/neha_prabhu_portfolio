# Neha Prabhu - Portfolio

Portfolio site for Neha Prabhu, Creative Visualizer and Brand Designer.
Built with React 19 + Vite, plain JavaScript, no UI framework.

## Commands

```bash
npm run dev      # dev server, http://localhost:5173
npm run build    # production build -> dist/
npm run preview  # serve the production build
npm run lint     # oxlint
```

## How the site is put together

```
src/
  data/            <- all content lives here
    profile.js       name, intro, resume path, contact links, nav
    projects.js      the nine tiles on the home grid
    caseStudies.js   the project detail pages
  pages/
    Home.jsx         hero + project grid
    ProjectDetail.jsx  renders any case study from data
  components/      Header, Hero, Projects, Footer, Media, Icon, ScrollToTop
public/images/     artwork, one folder per project
```

**You should not need to touch JSX to change content.** Text, image paths and
page structure are all data in `src/data/`.

### Routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/work/:slug` | Project detail, where `slug` is a project id |

A tile on the home grid becomes clickable only once its id has an entry in
`caseStudies.js`, and each detail page's "NEXT PROJECT" button walks to the
next project that has one. Both happen automatically - adding a case study is
the only step.

### Images

Files go in `public/images/<project-id>/`, referenced as `/images/...` - **not**
`/public/images/...`. Vite copies `public/` to the site root, so a `/public`
prefix works in dev and 404s in the build.

Folder names must match the project id exactly (`kalika-steel`, not
`kalika steel`). Every folder has a README mapping each numbered file to its
slot on the page.

A missing image renders as a grey placeholder at the right proportions instead
of breaking the layout, so a page can be built before its artwork arrives.

### Case study layouts

Each section is a heading plus blocks. `block.layout` is one of:

| Layout | Shape |
| --- | --- |
| `full` | one image across the 1420px column |
| `two` / `three` | equal columns |
| `cols` | unequal columns, widths from `block.columns` |
| `split` | a main area beside a stacked side column |

Tuning fields: `gap` (number for uniform, or a string like `'57px 36px'`),
`ratio` / `sideRatio` (placeholder proportions), `spaceBefore`, `wide` + `bleed`
(let a block run past the text column), and `columns` / `mainColumns` /
`mainGap` / `stackGap`.

Design reference is a 1920px frame with a 1420px content column (250px margins).
Type scales down below that via `clamp()`; grids drop to 2 columns under 900px
and 1 under 560px.

## Deploying

The build is static - deploy `dist/`. React Router uses real URLs, so the host
must rewrite unknown paths to `index.html` or `/work/nivasa` will 404 on a hard
refresh. Included for the two common hosts:

- Netlify - `public/_redirects`
- Vercel - `vercel.json`

For Apache use `.htaccess`, for nginx `try_files $uri /index.html`.

## Still to do

- Resume PDF: drop it at `public/resume.pdf` (the hero button points there).
- Instagram sections on several detail pages are headings with no content yet.
- `caseStudies.js` for `grd-infraprojects` has placeholder headings and summary
  copy, written from the artwork because no design spec was supplied.
