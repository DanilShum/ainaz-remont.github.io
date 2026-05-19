import { useParams, Link } from 'react-router-dom';
import { portfolio } from '../data/portfolio';
import './ProjectDetail.css';
import { ArrowLeft, Calendar, Ruler, Clock, MapPin, DollarSign } from 'lucide-react';

function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = portfolio.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Проект не найден</h2>
        <Link to="/" className="back-link">Вернуться на главную</Link>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <div className="project-detail-header">
        <Link to="/#portfolio" className="back-button">
          <ArrowLeft size={20} />
          Назад к портфолио
        </Link>
      </div>

      <div className="project-detail-content">
        <h1 className="project-detail-title">{project.title}</h1>
        
        <div className="project-meta">
          <div className="meta-item">
            <Ruler size={18} />
            <span>{project.area}</span>
          </div>
          <div className="meta-item">
            <Calendar size={18} />
            <span>{project.year}</span>
          </div>
          <div className="meta-item">
            <Clock size={18} />
            <span>{project.duration}</span>
          </div>
          <div className="meta-item">
            <MapPin size={18} />
            <span>{project.location}</span>
          </div>
          <div className="meta-item price">
            <DollarSign size={18} />
            <span>{project.price}</span>
          </div>
        </div>

        <div className="project-gallery">
          {project.images.map((img, index) => (
            <div key={index} className="gallery-image">
              <img src={img} alt={`${project.title} - фото ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="project-description">
          <h2>О проекте</h2>
          <p>{project.fullDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;