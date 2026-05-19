import { CheckCircle } from "lucide-react";
import { advantages } from "../data/advantages";
import "./Advantages.css";

function Advantages() {
  return (
    <section className="advantages">
      <div className="advantages-container">
        <div className="advantages-header">
          <h2 className="section-title">Почему выбирают нас</h2>
          <p className="section-subtitle">
            Работаем честно и прозрачно. Без скрытых платежей и срыва сроков
          </p>
        </div>

        <div className="advantages-grid">
          {advantages.map((item) => (
            <div key={item.id} className="advantage-card">
              <div className="advantage-stat">
                <span className="advantage-stat-number">{item.stat}</span>
                <span className="advantage-stat-label">{item.statLabel}</span>
              </div>
              <h3 className="advantage-title">{item.title}</h3>
              <p className="advantage-description">{item.description}</p>
              <div className="advantage-check">
                <CheckCircle size={16} />
                <span>Гарантируем</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Advantages;
