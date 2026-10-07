// Files live in `public/images/`, which Vite serves from the site root -
// so the path here is `/images/...` (no `/public` prefix).
//
// Order below = order on the home grid (3 per row at desktop), matching the
// latest design:
//   Row 1: Mahalaxmi, Youthville, Nivasa
//   Row 2: Creamberg Icecream, Acurise, Belvalkar Group
//   Row 3: Kalika Steel, Skylife, GRD INFRAPROJECTS
//
// Cover images: Youthville has its final cover; the rest are the existing
// exports - swap the `image` paths once the updated artwork is ready. A missing
// file shows a grey placeholder.
export const projects = [
  // Row 1
  {
    id: 'mahalaxmi',
    title: 'Mahalaxmi',
    image: '/images/Image (4).png',
    link: '',
  },
  {
    id: 'youthville',
    title: 'Youthville',
    image: '/images/youthville/cover.jpg',
    link: '',
  },
  {
    id: 'nivasa',
    title: 'Nivasa',
    image: '/images/Image.png',
    link: '',
  },

  // Row 2
  {
    id: 'creamberg',
    title: 'Creamberg Icecream',
    image: '/images/Image (3).png',
    link: '',
  },
  {
    id: 'acurise',
    title: 'Acurise',
    image: '/images/Image (1).png',
    link: '',
  },
  {
    id: 'belvalkar',
    title: 'Belvalkar Group',
    image: '/images/Image (2).png',
    link: '',
  },

  // Row 3
  {
    id: 'kalika-steel',
    title: 'Kalika Steel',
    image: '/images/Image (5).png',
    link: '',
  },
  {
    id: 'skylife',
    title: 'Skylife',
    image: '/images/Image (7).png',
    link: '',
  },
  {
    id: 'grd-infraprojects',
    title: 'GRD INFRAPROJECTS',
    image: '/images/Image (8).png',
    link: '',
  },

  // Tetris hill view - removed from the home grid in the latest design.
  // The case study data and images are still in place (src/data/caseStudies.js,
  // public/images/tetris-hill-view/), so uncomment this block to bring it back.
  // {
  //   id: 'tetris-hill-view',
  //   title: 'Tetris hill view',
  //   image: '/images/Image (6).png',
  //   link: '',
  // },
]
