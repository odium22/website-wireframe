import { useNavigation } from '../router/navigation';
import { services } from '../data/content';

// КАРТОЧКИ УСЛУГ / НАПРАВЛЕНИЙ
// Props: title, subtitle — заголовок секции; limit — сколько карточек показать.
export default function ServicesGrid({
  title = 'Направления работы',
  subtitle = 'Выберите подходящий формат под вашу задачу',
  limit,
}) {
  const { go } = useNavigation();
  const items = limit ? services.slice(0, limit) : services;

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="grid grid--3">
          {items.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="ph ph--16x9 card-image">{service.title}</div>
              <div className="card-body">
                <span className="card-tag">{service.tag}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="card-price">{service.price}</div>
              </div>
            </article>
          ))}
        </div>

        {limit && (
          <div className="center-action">
            <button className="btn btn-secondary" onClick={() => go('services')}>
              Все услуги →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
