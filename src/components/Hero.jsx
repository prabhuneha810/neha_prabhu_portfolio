import { useEffect, useRef } from 'react'
import Media from './Media'
import { profile } from '../data/profile'
import './Hero.css'

// Pixels of scroll over which the curtains go from fully open to fully closed.
// Shorter on phones so the photo finishes closing while it is still on screen.
const closeDistance = () => (window.innerWidth <= 600 ? 160 : 360)

const Hero = () => {
  const boxRef = useRef(null)

  // Set --p on scroll: 0 at the top of the page, 1 once scrolled CLOSE_DISTANCE.
  // Both .curtain-l and .curtain-r read the same variable automatically.
  useEffect(() => {
    const element = boxRef.current
    if (!element) return
    const section = element.closest('.hero')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      section?.classList.add('is-closed') // no animation: just show the text
      return
    }

    let frame = 0
    const update = () => {
      frame = 0
      const scrollProgress = Math.min(1, Math.max(0, window.scrollY / closeDistance()))
      element.style.setProperty('--p', scrollProgress.toFixed(3))
      // Once the curtains have fully closed, the text below pops up
      section?.classList.toggle('is-closed', scrollProgress >= 1)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className="hero container" id="about">
      <div className="photo-box" ref={boxRef}>
        <Media src={profile.photo} alt={`Portrait of ${profile.name}`} label="Your photo" />
        <span className="curtain curtain-l" aria-hidden="true" />
        <span className="curtain curtain-r" aria-hidden="true" />
      </div>

      <h1 className="hero__title">
        {profile.role.map((word) => (
          <span key={word}>{word}</span>
        ))}
      </h1>

      <p className="hero__intro">{profile.intro}</p>

      <a className="hero__resume" href={profile.resume} target="_blank" rel="noreferrer">
        RESUME
      </a>
    </section>
  )
}

export default Hero
