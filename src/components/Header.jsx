import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Icon from './Icon'
import { navLinks, profile } from '../data/profile'
import './Header.css'

const Header = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  // Mobile-only dropdown state; on tablet and desktop the links are always inline
  const [open, setOpen] = useState(false)

  // Close the dropdown when the route changes
  useEffect(() => setOpen(false), [pathname])

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
      <div className="header__inner container">
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
          <Icon name={open ? 'close' : 'menu'} size={26} strokeWidth={2} />
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
