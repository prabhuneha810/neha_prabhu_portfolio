/*
 * Detail pages, keyed by the project id in `projects.js`.
 * A project only becomes clickable on the home grid once it has an entry here,
 * and "NEXT PROJECT" cycles through the projects that have one - so Nivasa's
 * NEXT PROJECT button and the Acurise tile both land on /work/acurise.
 *
 * Files live in `public/images/<project>/`, which Vite serves from the site
 * root - so paths here start with `/images/...` and never `/public/...`.
 *
 * block.layout
 *   'full'  - one image across the 1420px column
 *   'two'   - two equal columns
 *   'three' - three equal columns
 *   'split' - wide `main` image (932) beside a `side` stack (442)
 *   'cols'  - unequal columns, widths given by `columns`
 * block.ratio - sizes the grey placeholder until the file exists; once the
 *               image loads it is drawn at its own natural proportions.
 * block.gap   - optional override of the default gap for that layout. A number
 *               is a uniform gap in px; a string is passed straight through,
 *               e.g. '57px 36px' for a different row and column gap.
 * block.wide  - let the block bleed past the 1420 column when the viewport has
 *               room, for artwork with built-in white margins.
 * block.bleed - how far past the column each side runs (default 107px).
 * block.spaceBefore - override the 30px gap above this block.
 *
 * An entry in `images` is either a path, or `{ src, ratio }` when that one
 * image needs a different placeholder ratio to the rest of the block.
 *
 * study.instagram - optional `{ label, href }`; when present, the page ends
 *                   with a button that opens that profile in a new tab.
 */
export const caseStudies = {
  nivasa: {
    title: 'NIVASA',
    summary:
      'Nivasa Group is a residential real estate brand committed to creating thoughtfully designed homes that combine quality, comfort, and modern living.',
    sections: [
      {
        id: 'ananya',
        title: 'Festive Campaign for Ananya',
        blocks: [
          {
            layout: 'two',
            gap: 88,
            ratio: '1 / 1',
            images: ['/images/nivasa/1.jpg', '/images/nivasa/2.jpg'],
          },
          {
            layout: 'full',
            ratio: '1420 / 1320',
            images: ['/images/nivasa/3.jpg'],
          },
        ],
      },
      {
        id: 'enchante',
        title: 'Festive Campaign for Enchante',
        blocks: [
          {
            layout: 'full',
            ratio: '16 / 9',
            images: ['/images/nivasa/4.png'],
          },
          {
            layout: 'two',
            gap: 88,
            ratio: '2 / 1',
            images: ['/images/nivasa/5.png', '/images/nivasa/6.png'],
          },
        ],
      },
      {
        id: 'site-branding',
        title: 'Site Branding',
        blocks: [
          {
            layout: 'two',
            gap: 88,
            ratio: '3 / 2',
            images: ['/images/nivasa/7.png', '/images/nivasa/8.png'],
          },
        ],
      },
      {
        id: 'leaflet',
        title: 'Project leaflet',
        blocks: [
          {
            layout: 'two',
            gap: 88,
            ratio: '3 / 2',
            images: ['/images/nivasa/9.png', '/images/nivasa/10.png'],
          },
        ],
      },
      {
        id: 'digital-media',
        title: 'Digital media creatives',
        blocks: [
          {
            layout: 'three',
            ratio: '11 / 20',
            images: ['/images/nivasa/11.png', '/images/nivasa/12.png', '/images/nivasa/13.png'],
          },
          {
            layout: 'three',
            ratio: '2 / 3',
            images: ['/images/nivasa/14.png', '/images/nivasa/15.png', '/images/nivasa/16.png'],
          },
        ],
      },
    ],
    instagram: {
      label: 'Nivasa Instagram Profile',
      href: 'https://www.instagram.com/nivasagroup?igsi=ZjUwYjBsbHFjeHoy',
    },
  },

  acurise: {
    title: 'ACURISE',
    summary:
      'Acurise is a manufacturing brand for aluminium formwork systems (Aluform) used in precision-based concrete construction. Backed by a 50+ year legacy in precision manufacturing and engineering. Acurise is made for Indian construction needs, and delivers global standards because of its engineered systems with no errors.',
    sections: [
      {
        id: 'visual-identity',
        title: 'Visual identity design',
        blocks: [
          {
            layout: 'split',
            ratio: '932 / 606',
            sideRatio: '442 / 600',
            main: '/images/acurise/1.png',
            side: ['/images/acurise/2.png'],
          },
          {
            layout: 'split',
            ratio: '932 / 606',
            sideRatio: '442 / 288',
            main: '/images/acurise/3.png',
            side: ['/images/acurise/4.png', '/images/acurise/5.png'],
          },
          {
            layout: 'split',
            ratio: '932 / 606',
            sideRatio: '442 / 288',
            main: '/images/acurise/6.png',
            side: ['/images/acurise/7.png', '/images/acurise/8.png'],
          },
        ],
      },
      {
        id: 'digital-media',
        title: 'Digital media creatives',
        blocks: [
          {
            layout: 'two',
            ratio: '688 / 516',
            images: ['/images/acurise/9.png', '/images/acurise/10.png'],
          },
        ],
      },
    ],
    instagram: {
      label: 'Acurise Instagram Profile',
      href: 'https://www.instagram.com/acurise_official?igsi=MWRkejdqYnJxNHhhZg==',
    },
  },

  belvalkar: {
    title: 'BELVALKAR',
    summary:
      'Belvalkar Group is a residential real estate brand dedicated to transforming heritage neighborhoods into thoughtfully designed modern homes.',
    sections: [
      {
        id: 'event-standee',
        title: 'Event standee',
        blocks: [
          {
            layout: 'cols',
            columns: '433fr 286fr 286fr 285fr',
            gap: 43,
            ratio: '286 / 571',
            images: [
              { src: '/images/belvalkar/1.png', ratio: '433 / 571' },
              '/images/belvalkar/2.jpg',
              '/images/belvalkar/3.jpg',
              '/images/belvalkar/4.jpg',
            ],
          },
          {
            layout: 'cols',
            columns: '397fr 397fr 482fr',
            gap: 66,
            ratio: '397 / 793',
            images: [
              '/images/belvalkar/5.jpg',
              '/images/belvalkar/6.jpg',
              { src: '/images/belvalkar/7.png', ratio: '482 / 793' },
            ],
          },
        ],
      },
      {
        id: 'project-logo',
        title: 'Project logo',
        blocks: [
          {
            layout: 'full',
            ratio: '1420 / 764',
            images: ['/images/belvalkar/8.png'],
          },
        ],
      },
      {
        id: 'project-brochure',
        title: 'Project brochure',
        blocks: [
          {
            layout: 'two',
            gap: 77,
            ratio: '671 / 441',
            images: ['/images/belvalkar/9.png', '/images/belvalkar/10.png'],
          },
        ],
      },
      {
        id: 'digital-media',
        title: 'Digital media creatives',
        blocks: [
          {
            layout: 'three',
            gap: 54,
            ratio: '437 / 777',
            images: [
              '/images/belvalkar/11.jpg',
              '/images/belvalkar/12.jpg',
              '/images/belvalkar/13.jpg',
            ],
          },
        ],
      },
    ],
  },

  creamberg: {
    title: 'CREAMBERG ICECREM',
    summaryWidth: 1363,
    summary:
      "This packaging for Creamberg's kulfi range blends tradition with a modern visual style. Inspired by the nostalgia of kulfi, it uses illustrated scenes and distinct color cues to differentiate flavors while keeping a cohesive brand identity. The clean, minimal design enhances shelf's appeal and reflects the brand's contemporary yet rooted approach.",
    sections: [
      {
        id: 'packaging',
        title: 'Packaging Design',
        blocks: [
          {
            layout: 'cols',
            columns: '699fr 677fr',
            gap: 48,
            ratio: '699 / 680',
            images: ['/images/creamberg/1.png', '/images/creamberg/2.mp4'],
          },
          {
            layout: 'full',
            spaceBefore: 53,
            ratio: '1424 / 952',
            images: ['/images/creamberg/3.png'],
          },
          // Dielines carry their own white margins, so they run wider than the
          // text column and sit flush against each other.
          {
            layout: 'two',
            wide: true,
            spaceBefore: 93,
            gap: 51,
            ratio: '792 / 1245',
            images: ['/images/creamberg/4.png', '/images/creamberg/5.png'],
          },
          {
            layout: 'two',
            wide: true,
            spaceBefore: 0,
            gap: 51,
            ratio: '792 / 1245',
            images: ['/images/creamberg/6.png', '/images/creamberg/7.png'],
          },
        ],
      },
      {
        id: 'kiosk',
        title: 'Kiosk Design',
        blocks: [
          {
            layout: 'full',
            ratio: '1419 / 965',
            images: ['/images/creamberg/8.png'],
          },
        ],
      },
    ],
  },

  mahalaxmi: {
    title: 'MAHALAXMI',
    summaryWidth: 977,
    summary:
      'Mahalaxmi Group is a Pune-based real estate developer creating thoughtfully designed spaces with a focus on quality, modern living, and lasting value.',
    sections: [
      {
        id: 'tenstep-event',
        title: 'Tenstep event',
        blocks: [
          {
            layout: 'cols',
            columns: '468fr 917fr',
            gap: 34,
            ratio: '917 / 499',
            images: [
              { src: '/images/mahalaxmi/1.png', ratio: '468 / 498' },
              '/images/mahalaxmi/2.png',
            ],
          },
          {
            layout: 'cols',
            columns: '401fr 981fr',
            gap: 36,
            ratio: '981 / 530',
            images: [
              { src: '/images/mahalaxmi/3.jpg', ratio: '401 / 530' },
              '/images/mahalaxmi/4.png',
            ],
          },
          {
            layout: 'full',
            ratio: '1414 / 610',
            images: ['/images/mahalaxmi/5.png'],
          },
        ],
      },
      {
        id: 'zen-event',
        title: 'Zen event',
        blocks: [
          {
            layout: 'cols',
            columns: '367fr 1001fr',
            gap: 44,
            ratio: '1001 / 652',
            images: [
              { src: '/images/mahalaxmi/6.jpg', ratio: '367 / 652' },
              '/images/mahalaxmi/7.png',
            ],
          },
          {
            layout: 'cols',
            columns: '406fr 406fr 556fr',
            gap: 22,
            ratio: '406 / 278',
            images: [
              '/images/mahalaxmi/8.png',
              '/images/mahalaxmi/9.png',
              { src: '/images/mahalaxmi/10.png', ratio: '556 / 278' },
            ],
          },
          {
            layout: 'cols',
            columns: '372fr 372fr 579fr',
            gap: 45,
            ratio: '372 / 745',
            images: [
              '/images/mahalaxmi/11.png',
              '/images/mahalaxmi/12.png',
              { src: '/images/mahalaxmi/13.png', ratio: '579 / 745' },
            ],
          },
        ],
      },
      {
        id: 'digital-media',
        title: 'Digital media creatives',
        blocks: [
          {
            layout: 'three',
            gap: 22,
            ratio: '458 / 573',
            images: [
              '/images/mahalaxmi/14.png',
              '/images/mahalaxmi/15.png',
              '/images/mahalaxmi/16.png',
            ],
          },
          {
            layout: 'three',
            gap: 21,
            ratio: '460 / 575',
            images: [
              '/images/mahalaxmi/17.png',
              '/images/mahalaxmi/18.png',
              '/images/mahalaxmi/19.png',
            ],
          },
          {
            layout: 'three',
            gap: 20,
            ratio: '460 / 575',
            images: [
              '/images/mahalaxmi/20.png',
              '/images/mahalaxmi/21.png',
              '/images/mahalaxmi/22.png',
            ],
          },
        ],
      },
    ],
  },

  'kalika-steel': {
    title: 'KALIKA STEEL',
    summaryWidth: 1411,
    summary:
      'Kalika Steel is a leading TMT bar manufacturer in Maharashtra, established in 2003. Known for high-strength, durable steel, the company combines advanced technology with a strong commitment to quality and reliability.',
    sections: [
      {
        id: 'standee',
        title: 'Standee',
        blocks: [
          {
            layout: 'cols',
            columns: '482fr 402fr 400fr',
            gap: 66,
            ratio: '402 / 804',
            images: [
              { src: '/images/kalika-steel/1.png', ratio: '482 / 804' },
              '/images/kalika-steel/2.png',
              '/images/kalika-steel/3.png',
            ],
          },
        ],
      },
      {
        id: 'magazine-leaflet',
        title: 'Magazine and Leaflet',
        blocks: [
          {
            layout: 'split',
            columns: '705fr 663fr',
            gap: 52,
            stackGap: 56,
            ratio: '705 / 940',
            sideRatio: '663 / 442',
            main: '/images/kalika-steel/4.png',
            side: ['/images/kalika-steel/5.png', '/images/kalika-steel/6.png'],
          },
        ],
      },
      {
        id: 'digital-media',
        title: 'Digital media creatives',
        blocks: [
          // A 2 x 2 grid of creatives beside one full-height phone mockup
          {
            layout: 'split',
            columns: '836fr 511fr',
            gap: 71,
            ratio: '390 / 487',
            sideRatio: '511 / 1064',
            mainColumns: 'repeat(2, 1fr)',
            mainGap: '36px 56px',
            main: [
              '/images/kalika-steel/7.png',
              '/images/kalika-steel/8.png',
              '/images/kalika-steel/9.png',
              '/images/kalika-steel/10.png',
            ],
            side: ['/images/kalika-steel/11.png'],
          },
        ],
      },
    ],
    instagram: {
      label: 'Kalika Steel Instagram Profile',
      href: 'https://www.instagram.com/kalikasteelofficial?igsi=MW1pYTl5bmh3ODFkaw==',
    },
  },

  'tetris-hill-view': {
    title: 'TETRIS HILLVIEW',
    summaryWidth: 1419,
    summary:
      'Tetris Hill View by Avora Realty is a modern residential project in Nallasopara, offering thoughtfully designed 1 & 2 BHK homes with scenic hill views, contemporary amenities, and convenient connectivity.',
    sections: [
      {
        id: 'hoardings',
        title: 'Hoardings',
        blocks: [
          {
            layout: 'full',
            ratio: '1423 / 690',
            images: ['/images/tetris-hill-view/1.png'],
          },
        ],
      },
      {
        id: 'static-display',
        title: 'Static Display',
        blocks: [
          {
            layout: 'full',
            ratio: '1433 / 781',
            images: ['/images/tetris-hill-view/2.png'],
          },
        ],
      },
      {
        id: 'project-brochure',
        title: 'Project brochure',
        blocks: [
          {
            layout: 'full',
            ratio: '1428 / 893',
            images: ['/images/tetris-hill-view/3.png'],
          },
          // Four spreads as a 2 x 2 grid, 57px between rows, 36px between columns
          {
            layout: 'two',
            gap: '57px 36px',
            ratio: '694 / 348',
            images: [
              '/images/tetris-hill-view/4.jpg',
              '/images/tetris-hill-view/5.jpg',
              '/images/tetris-hill-view/6.jpg',
              '/images/tetris-hill-view/7.jpg',
            ],
          },
        ],
      },
      {
        id: 'digital-media',
        title: 'Digital media creatives',
        blocks: [
          {
            layout: 'two',
            gap: '54px 58px',
            ratio: '678 / 678',
            images: [
              '/images/tetris-hill-view/8.png',
              '/images/tetris-hill-view/9.png',
              '/images/tetris-hill-view/10.png',
              '/images/tetris-hill-view/11.png',
            ],
          },
        ],
      },
    ],
  },

  skylife: {
    title: 'SKYLIFE',
    summaryWidth: 1191,
    summary:
      'Skylife is a premium residential development in Matunga East, located in the sought-after Five Gardens neighbourhood. The project combines contemporary architecture, refined living spaces, and the charm of an established South Mumbai community.',
    sections: [
      {
        id: 'hoardings',
        title: 'Hoardings',
        blocks: [
          {
            layout: 'split',
            columns: '626fr 745fr',
            gap: 48,
            stackGap: 28,
            ratio: '626 / 626',
            sideRatio: '745 / 299',
            main: '/images/skylife/1.png',
            side: ['/images/skylife/2.jpg', '/images/skylife/3.jpg'],
          },
        ],
      },
      {
        id: 'brochure-design',
        title: 'Brochure design',
        blocks: [
          // 1467 wide against the 1420 column, so it runs 24px past each side
          {
            layout: 'full',
            wide: true,
            bleed: 24,
            ratio: '1467 / 809',
            images: ['/images/skylife/4.png'],
          },
        ],
      },
      {
        id: 'project-leaflet',
        title: 'Project leaflet',
        blocks: [
          {
            layout: 'full',
            ratio: '1420 / 946',
            images: ['/images/skylife/5.png'],
          },
        ],
      },
      {
        id: 'digital-media',
        title: 'Digital media creatives',
        blocks: [
          {
            layout: 'two',
            gap: '53px 66px',
            ratio: '676 / 675',
            images: [
              '/images/skylife/6.png',
              '/images/skylife/7.png',
              '/images/skylife/8.png',
              '/images/skylife/9.png',
            ],
          },
        ],
      },
    ],
  },

  /*
   * No Figma spec was supplied for this page, so the section headings and the
   * summary below were written from the artwork itself and are placeholders -
   * replace them with the real copy when it arrives. The grid is exact: the
   * exports are 460 x 818, and 460 x 3 + 20 x 2 = the 1420 content column.
   */
  'grd-infraprojects': {
    title: 'GRD INFRAPROJECTS',
    summaryWidth: 1191,
    summary:
      'GRD Infraprojects is a Pune-based developer with 15 years of building across Balewadi, Wakad and Punawale. The brand campaign carries a single promise - development done right - through leadership, process and project storytelling.',
    sections: [
      {
        id: 'digital-media',
        title: 'Digital media creatives',
        blocks: [
          {
            layout: 'three',
            gap: 20,
            ratio: '460 / 818',
            images: [
              '/images/grd-infraprojects/1.png',
              '/images/grd-infraprojects/2.png',
              '/images/grd-infraprojects/3.png',
            ],
          },
          {
            layout: 'three',
            gap: 20,
            ratio: '460 / 818',
            images: [
              '/images/grd-infraprojects/4.png',
              '/images/grd-infraprojects/5.png',
              '/images/grd-infraprojects/6.png',
            ],
          },
        ],
      },
      {
        id: 'grd-collective',
        title: 'GRD Collective campaign',
        blocks: [
          // Chronological: save the date, invitation, then the countdown
          {
            layout: 'three',
            gap: 20,
            ratio: '460 / 818',
            images: [
              '/images/grd-infraprojects/8.png',
              '/images/grd-infraprojects/7.png',
              '/images/grd-infraprojects/9.png',
            ],
          },
          {
            layout: 'three',
            gap: 20,
            ratio: '460 / 818',
            images: [
              '/images/grd-infraprojects/10.png',
              '/images/grd-infraprojects/11.png',
              '/images/grd-infraprojects/12.png',
            ],
          },
        ],
      },
    ],
  },
}

export const hasCaseStudy = (id) => Boolean(caseStudies[id])
