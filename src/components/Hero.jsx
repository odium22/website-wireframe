import { useNavigation } from '../router/navigation';
import { hero } from '../data/content';

// ПЕРВЫЙ ЭКРАН (HERO) ГЛАВНОЙ СТРАНИЦЫ
// Слева — текст и кнопки, справа — заглушка под картинку.
export default function Hero() {
  const { go } = useNavigation();

  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="badge">{hero.badge}</span>
          <h1 className="hero-title">{hero.title}</h1>
          <p className="hero-description">{hero.description}</p>

          <div className="hero-actions">
            {hero.actions.map((action) => (
              <button
                key={action.label}
                className={`btn btn-${action.variant}`}
                onClick={() => go(action.page)}
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>

        <div className="ph ph--4x3 hero-visual">{hero.visual}</div>
      </div>
    </section>
  );
}
