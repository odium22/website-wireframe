import { beforeAfter } from '../data/content';

// БЛОК «ДО / ПОСЛЕ»
// Наглядное сравнение результата. Картинки-заглушки меняются в content.js.
export default function BeforeAfter({ title = 'Результат нашей работы', subtitle = 'Посмотрите, как преображается проект при правильном подходе' }) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="comparison-mockup">
          <div className="comparison-half before">
            <span className="comparison-badge">ДО</span>
            <p>{beforeAfter.before}</p>
          </div>
          <div className="comparison-divider">⟷</div>
          <div className="comparison-half after">
            <span className="comparison-badge">ПОСЛЕ</span>
            <p>{beforeAfter.after}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
