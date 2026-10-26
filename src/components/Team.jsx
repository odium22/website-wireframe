import { team } from '../data/content';

// КОМАНДА
// Карточки сотрудников: фото-заглушка, имя, роль и пара слов о человеке.
export default function Team({ title = 'Наша команда', subtitle = 'Люди, которые сделают ваш проект' }) {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="section-header">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="grid grid--4">
          {team.map((member) => (
            <div className="team-card" key={member.role}>
              <div className="ph ph--1x1 avatar-placeholder">[ Фото ]</div>
              <h3>{member.name}</h3>
              <div className="team-role">{member.role}</div>
              <p>{member.about}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
