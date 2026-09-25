import Icon from './Icon'
import { contacts } from '../data/profile'
import './Footer.css'

const Footer = () => (
  <footer className="footer" id="contact">
    <div className="footer__inner container">
      <p className="footer__heading">Let's connect!</p>

      <ul className="footer__list">
        {contacts.map((contact) => (
          <li key={contact.id}>
            <a
              className="footer__item"
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
            >
              <Icon name={contact.icon} size={34} />
              <span>{contact.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
)

export default Footer
