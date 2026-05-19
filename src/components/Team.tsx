import { team } from "../data/team";
import "./Team.css";

function Team() {
  return (
    <section id="team" className="team">
      <div className="team-container">
        <div className="team-header">
          <h2 className="section-title">Наша команда</h2>
          <p className="section-subtitle">
            Профессионалы с большим опытом работы в сфере ремонта
          </p>
        </div>

        <div className="team-grid">
          {team.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-photo">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p className="team-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
