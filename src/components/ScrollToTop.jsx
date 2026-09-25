import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Jump to the top on navigation. When the URL carries a #hash (e.g. coming
 * back to "/#work" from a project page), scroll to that section instead.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    // Wait a frame so the target page has rendered before scrolling
    const frame = requestAnimationFrame(() => {
      document
        .getElementById(hash.slice(1))
        ?.scrollIntoView({ behavior: 'smooth' })
    })

    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}

export default ScrollToTop
