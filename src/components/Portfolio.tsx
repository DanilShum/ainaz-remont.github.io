import { portfolio } from '../data/portfolio';
import './Portfolio.css';

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2 className="section-title">Портфолио</h2>
          <p className="section-subtitle">
            Реализованные проекты в Казани
          </p>
        </div>
        
        <div className="portfolio-grid">
          {portfolio.map((project) => (
            <div key={project.id} className="portfolio-card">
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <span className="portfolio-area">{project.area}</span>
                  <span className="portfolio-year">{project.year}</span>
                </div>
              </div>
              <div className="portfolio-info">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;