import { Phone, MapPin, Clock } from 'lucide-react';
import { contacts } from '../data/contacts';
import './Contacts.css';

function Contacts() {
  return (
    <section id="contacts" className="contacts">
      <div className="contacts-container">
        <div className="contacts-header">
          <h2 className="section-title">Контакты</h2>
          <p className="section-subtitle">
            Свяжитесь с нами для бесплатной консультации
          </p>
        </div>
        
        <div className="contacts-grid">
          <div className="contacts-info">
            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <div className="contact-content">
                <span className="contact-label">Телефон</span>
                <a href={`tel:${contacts.phoneClean}`} className="contact-value">
                  {contacts.phone}
                </a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={24} />
              </div>
              <div className="contact-content">
                <span className="contact-label">Адрес</span>
                <span className="contact-value">
                  г. {contacts.city}, {contacts.address}
                </span>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <Clock size={24} />
              </div>
              <div className="contact-content">
                <span className="contact-label">Режим работы</span>
                <span className="contact-value">Ежедневно с 9:00 до 20:00</span>
              </div>
            </div>
            
            <a href="https://web.max.ru/238716647" className="contact-max" target="_blank" rel="noopener noreferrer">
              <img src="/MAX.svg" alt="Max" width="20" height="20" />
              <span>Написать в Max</span>
            </a>
          </div>
          
          <div className="contacts-map">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=49.210385%2C55.803115&z=17&pt=49.210385%2C55.803115"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;