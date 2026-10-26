import { useNavigation } from '../router/navigation';
import { pricing } from '../data/content';

// ТАРИФЫ / ЦЕНЫ
// Три карточки. Флаг featured: true делает карточку выделенной.
export default function Pricing({ title = 'Тарифы и цены', subtitle = 'Прозрачные пакеты под разный бюджет' }) {
  const { go } = useNavigation();

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="grid grid--3">
          {pricing.map((plan) => (
            <div className={plan.featured ? 'pricing-card is-featured' : 'pricing-card'} key={plan.name}>
              {plan.featured && <span className="pricing-flag">Популярный</span>}
              <div className="pricing-name">{plan.name}</div>
              <div className="pricing-price">{plan.price}</div>
              <div className="pricing-note">{plan.note}</div>
              <ul className="pricing-features">
                {plan.items.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
              <button className="btn btn-primary btn-block" onClick={() => go('contacts')}>
                Оставить заявку
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
