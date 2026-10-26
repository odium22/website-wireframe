import { stats } from '../data/content';

// ЦИФРЫ И ФАКТЫ (STATS)
// 4 карточки с фактами о проекте. Данные — в src/data/content.js.
export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container stats-grid">
        {stats.map((item) => (
          <div className="stat-card" key={item.label}>
            <div className="stat-number">{item.value}</div>
            <div className="stat-label">{item.label}</div>
            <p className="stat-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
