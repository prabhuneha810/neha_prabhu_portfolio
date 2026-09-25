import { useState } from 'react'
import './Media.css'

/**
 * Pick the image class for a "width / height" ratio string:
 * wider than tall -> `horizontal-image`, otherwise `image`.
 */
export const orientationClass = (ratio) => {
  if (typeof ratio !== 'string') return 'image'
  const [width, height] = ratio.split('/').map((part) => Number(part.trim()))
  return width > height ? 'horizontal-image' : 'image'
}

const isVideo = (src = '') => /\.(mp4|webm|mov|m4v)(\?.*)?$/i.test(src)

/**
 * Image (or silent looping video, for .mp4 / .webm paths) that degrades to a
 * neutral placeholder while the real artwork is still missing from
 * `public/images/`.
 */
const Media = ({ src, alt, className = '', label, reveal = false }) => {
  const [failed, setFailed] = useState(false)
  // `reveal` opts the element into the scroll-in animation (see RevealOnScroll)
  const revealAttr = reveal ? { 'data-reveal': 'image' } : {}

  if (src && !failed && isVideo(src)) {
    return (
      <video
        className={`media ${className}`}
        {...revealAttr}
        src={src}
        aria-label={alt}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onError={() => setFailed(true)}
      />
    )
  }

  if (!src || failed) {
    return (
      <div
        className={`media media--empty ${className}`}
        role="img"
        aria-label={alt}
        {...revealAttr}
      >
        <span>{label ?? alt}</span>
      </div>
    )
  }

  return (
    <img
      className={`media ${className}`}
      {...revealAttr}
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  )
}

export default Media
