import { features } from '../data/content';

// ПРЕИМУЩЕСТВА («Почему мы»)
// Сетка коротких причин выбрать именно вас.
export default function Features({ title = 'Почему выбирают нас', subtitle = 'Шесть причин работать с нами' }) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="grid grid--3">
          {features.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
