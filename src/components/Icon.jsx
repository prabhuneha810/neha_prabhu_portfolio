const paths = {
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="1.5" />
      <path d="m2.5 5.5 9.5 7.5 9.5-7.5" />
    </>
  ),
  whatsapp: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M8.6 8.2c.3-.6.6-.6.9-.6h.6c.2 0 .4 0 .6.5l.7 1.7c.1.3 0 .5-.1.7l-.5.6c-.2.2-.3.4-.1.7a7 7 0 0 0 3 2.6c.3.2.6.1.8-.1l.6-.7c.2-.2.4-.2.6-.1l1.7.8c.3.1.4.3.4.5v.8c0 .6-.5 1.2-1.1 1.4-.6.2-1.4.2-2.4-.1a10 10 0 0 1-5.7-5.1c-.5-1-.6-1.9-.5-2.6.1-.4.3-.8.5-1.3Z" />
    </>
  ),
  linkedin: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="2" />
      <path d="M7 10v7M7 6.6v.1M11.5 17v-4a2 2 0 0 1 4 0v4M11.5 17v-6" />
    </>
  ),
  behance: (
    <>
      <path d="M2 6h5.2a2.6 2.6 0 0 1 0 5.2H2zM2 11.2h5.8a2.9 2.9 0 0 1 0 5.8H2zM14 7h6" />
      <path d="M13.5 13.6h7c0-2-1.5-3.5-3.5-3.5s-3.5 1.6-3.5 3.6c0 2 1.5 3.5 3.5 3.5 1.5 0 2.7-.8 3.2-2" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.2 6.8v.1" strokeWidth="2.2" />
    </>
  ),
  menu: (
    <>
      <path d="M3 7h18M3 12h18M3 17h18" />
    </>
  ),
  close: (
    <>
      <path d="M5 5l14 14M19 5 5 19" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
}

const Icon = ({ name, size = 20, strokeWidth = 1.5, className = '' }) => {
  const path = paths[name]
  if (!path) return null

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {path}
    </svg>
  )
}

export default Icon
