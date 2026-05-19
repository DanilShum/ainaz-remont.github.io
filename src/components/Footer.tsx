import { contacts } from '../data/contacts';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <span className="footer-logo">{contacts.companyName}</span>
            <p className="footer-tagline">Ремонт квартир под ключ в Казани</p>
          </div>
          
          <div className="footer-contacts">
            <a href={`tel:${contacts.phoneClean}`} className="footer-phone">
              {contacts.phone}
            </a>
            <span className="footer-address">
              г. {contacts.city}, {contacts.address}
            </span>
          </div>
        </div>
        
        <div className="footer-bottom">
          <span className="footer-copyright">
            © {currentYear} {contacts.companyName}. Все права защищены.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;