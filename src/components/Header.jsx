import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Icon from './Icon'
import { navLinks, profile } from '../data/profile'
import './Header.css'

// Site name on the left, hamburger on the right at every screen size (per the
// design). The links live in a dropdown that the hamburger opens.
const Header = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const innerRef = useRef(null)

  // Close the dropdown when the route changes
  useEffect(() => setOpen(false), [pathname])

  // Close on Escape, or on a click/tap anywhere outside the header
  useEffect(() => {
    if (!open) return

    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const onPointer = (event) => {
      if (!innerRef.current?.contains(event.target)) setOpen(false)
    }

    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [open])

  const goToSection = (event, link) => {
    event.preventDefault()
    setOpen(false)

    if (pathname === '/') {
      // Already on the home page - scroll straight to the section
      document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })
      return
    }

    // On a project page - go home; ScrollToTop then scrolls to the hash
    navigate(link.href)
  }

  return (
    <header className="header">
      <div className="header__inner container" ref={innerRef}>
        <Link className="header__brand" to="/">
          {profile.siteTitle}
        </Link>

        <button
          className="header__toggle"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? (
            <Icon name="close" size={26} strokeWidth={2.4} />
          ) : (
            // Figma "Group 8": three 4px bars in a 26.45 x 23 box
            <span className="header__burger" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          )}
        </button>

        <nav
          id="primary-nav"
          className={`header__nav ${open ? 'is-open' : ''}`}
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(event) => goToSection(event, link)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
