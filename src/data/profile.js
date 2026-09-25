export const profile = {
  name: 'Neha Prabhu',
  siteTitle: 'Neha Prabhu - Portfolio',
  role: ['Creative', 'Visualizer'],
  photo: '/images/Mask group.png',
  intro:
    "Hi, I'm Neha, a Creative Visualizer and Brand Designer with 5+ years of experience - creating thoughtful, story-driven designs that connect with people.",
  // CV hosted on Google Drive - opens in a new tab from the RESUME button
  resume: 'https://drive.google.com/file/d/1-VUrsW3ZMhU0nCoZ962y-nXp9UFsg3UL/view?usp=sharing',
}

// Rendered as a 2 x 2 block: column one is email + phone, column two is
// LinkedIn + Behance (matching the footer layout in the design).
export const contacts = [
  {
    id: 'email',
    icon: 'mail',
    label: 'prabhuneha810@gmail.com',
    // Opens the user's Gmail inbox with the small compose popup pre-filled.
    // "tf=cm" = compose mail; leaving out "fs=1" avoids the full-screen editor.
    href: 'https://mail.google.com/mail/u/0/?tf=cm&to=prabhuneha810@gmail.com',
  },
  {
    id: 'phone',
    icon: 'whatsapp',
    label: '+91 7666550591',
    href: 'https://wa.me/917666550591',
  },
  {
    id: 'linkedin',
    icon: 'linkedin',
    label: 'linkedin.com/in/neha-prabhu-a8a78200',
    href: 'https://www.linkedin.com/in/neha-prabhu-aba878200?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
  {
    id: 'behance',
    icon: 'behance',
    label: 'behance.net/nehaprabhu_16',
    href: 'https://www.behance.net/nehaprabhu_16',
  },
]

// Rooted at "/" so the menu also works from a project detail page
export const navLinks = [
  { id: 'work', label: 'Work', href: '/#work' },
  { id: 'about', label: 'About', href: '/#about' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
]
