import { testimonials } from '../data/content';

// ОТЗЫВЫ КЛИЕНТОВ
// Три коротких цитаты с подписью автора.
export default function Testimonials({ title = 'Отзывы клиентов', subtitle = 'Что говорят о работе с нами' }) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="grid grid--3">
          {testimonials.map((item) => (
            <blockquote className="testimonial-card" key={item.quote}>
              <p className="testimonial-quote">«{item.quote}»</p>
              <div className="testimonial-author">
                <div className="ph testimonial-avatar">[ Фото ]</div>
                <div>
                  <div className="testimonial-name">{item.author}</div>
                  <div className="testimonial-role">{item.role}</div>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
