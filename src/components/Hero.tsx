import { ArrowRight, Phone } from "lucide-react";
import { contacts } from "../data/contacts";
import { images } from "../data/team";
import "./Hero.css";

function Hero() {
  const handleScrollToContacts = () => {
    const element = document.querySelector("#contacts");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
      </div>

      <div className="hero-content">
        <div className="hero-tag">Ремонт квартир в Казани</div>

        <h1 className="hero-title">
          Ремонт квартир
          <br />
          <span>под ключ</span>
        </h1>

        <p className="hero-subtitle">
          Качественный ремонт с фиксированной сметой и соблюдением сроков.
          Работаем в Казани. Одна команда — один подрядчик.
        </p>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-number">100+</span>
            <span className="hero-stat-label">проектов</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">15</span>
            <span className="hero-stat-label">лет опыта</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">3 года</span>
            <span className="hero-stat-label">гарантия</span>
          </div>
        </div>

        <div className="hero-actions">
          <button className="hero-btn primary" onClick={handleScrollToContacts}>
            Получить консультацию
            <ArrowRight size={18} />
          </button>
          <a href={`tel:${contacts.phoneClean}`} className="hero-btn secondary">
            <Phone size={18} />
            {contacts.phone}
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={images.room2} alt="Ремонт квартиры" />
      </div>
    </section>
  );
}

export default Hero;
