import { useNavigation } from '../router/navigation';
import { projects } from '../data/content';

// СЕТКА ПРИМЕРОВ РАБОТ (ПОРТФОЛИО)
// Props: title, subtitle, limit — сколько кейсов показать.
export default function ProjectsGrid({
  title = 'Примеры работ',
  subtitle = 'Реальные проекты и их результат',
  limit,
}) {
  const { go } = useNavigation();
  const items = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="grid grid--3">
          {items.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="ph ph--4x3 project-image">{project.image}</div>
              <div className="card-body">
                <div className="project-meta">
                  <span className="card-tag">{project.category}</span>
                  <span className="project-year">{project.year}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.result}</p>
              </div>
            </article>
          ))}
        </div>

        {limit && (
          <div className="center-action">
            <button className="btn btn-secondary" onClick={() => go('portfolio')}>
              Все работы →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
