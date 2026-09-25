import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './RevealOnScroll.css'

/**
 * Scroll-driven reveal for anything marked `data-reveal="image" | "text" | "fade"`.
 * Each element gets `is-visible` the first time it enters the viewport and
 * keeps it, so the reveal plays once and the page stays static after that.
 */
const RevealOnScroll = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const reveal = (el) => {
      el.classList.add('is-visible')
      io.unobserve(el)
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) reveal(entry.target)
        })
      },
      // Fire once the element's top edge is 120px inside the viewport, so the
      // animation is actually seen rather than finishing below the fold.
      { threshold: 0, rootMargin: '0px 0px -120px 0px' },
    )

    const observeAll = (root = document) => {
      root.querySelectorAll?.('[data-reveal]').forEach((el) => io.observe(el))
    }

    observeAll()

    // Pick up elements rendered later, e.g. a placeholder swapped in for a
    // missing image, so nothing is left stuck in its hidden state.
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return
          if (node.hasAttribute('data-reveal')) io.observe(node)
          observeAll(node)
        })
      })
    })
    mo.observe(document.body, { childList: true, subtree: true })

    // Safety net: at the very bottom of the page nothing can travel 120px past
    // the fold, so reveal whatever is still pending.
    const onScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (!atBottom) return
      document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach(reveal)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      io.disconnect()
      mo.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [pathname])

  return null
}

export default RevealOnScroll
