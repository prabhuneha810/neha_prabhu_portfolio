# Images

Everything in this folder is served from the site root, so `public/images/x.png`
is referenced in code as `/images/x.png`. Any slot without a file shows a
neutral grey placeholder instead of breaking.

## Home page

| File | Where it shows |
| --- | --- |
| `Mask group.png` | Hero portrait (457 x 555, rounded corners) |
| `Image (4).png` | Project tile - Mahalaxmi |
| `youthville/cover.jpg` | Project tile - Youthville |
| `Image.png` | Project tile - Nivasa |
| `Image (3).png` | Project tile - Creamberg Icecream |
| `Image (1).png` | Project tile - Acurise |
| `Image (2).png` | Project tile - Belvalkar Group |
| `Image (5).png` | Project tile - Kalika Steel |
| `Image (7).png` | Project tile - Skylife |
| `Image (8).png` | Project tile - GRD INFRAPROJECTS |
| `Image (6).png` | Project tile - Tetris hill view (currently commented out) |

Project tiles are cropped to a 414 x 275 frame, so export them around
1242 x 825 (3x) or at least 828 x 550 (2x).

To swap a cover, either overwrite the file above or change the `image` path in
`src/data/projects.js`. That file also controls the grid order.

## Case study pages

Each project's detail-page artwork lives in its own folder (`acurise/`,
`belvalkar/`, `creamberg/`, `youthville/`, ...) and is wired up in
`src/data/caseStudies.js`. Each folder has its own README mapping files to
sections.

Text, contact links and the resume link live in `src/data/profile.js`.
