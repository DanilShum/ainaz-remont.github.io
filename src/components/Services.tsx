import { Home, PenTool, Hammer, Ruler } from 'lucide-react';
import { services } from '../data/services';
import './Services.css';

const iconMap = {
  home: Home,
  'pen-tool': PenTool,
  hammer: Hammer,
  ruler: Ruler
};

function Services() {
  return (
    <section className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="section-title">Наши услуги</h2>
          <p className="section-subtitle">
            Комплексный подход к ремонту — от проекта до реализации
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div key={service.id} className="service-card">
                <div className="service-icon">
                  <Icon size={28} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;