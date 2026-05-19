import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { contacts, navItems } from '../data/contacts';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <a href="#hero" className="logo" onClick={(e) => handleNavClick(e, '#hero')}>
          <span className="logo-text">{contacts.companyName}</span>
        </a>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href={`tel:${contacts.phoneClean}`} className="phone-link">
          <Phone size={18} />
          <span>{contacts.phone}</span>
        </a>

        <button 
          className="menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}

export default Header;