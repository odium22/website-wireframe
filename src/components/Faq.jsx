import { faq } from '../data/content';

// ЧАСТЫЕ ВОПРОСЫ (FAQ)
// Используем встроенный тег <details>, поэтому никакого JS и useState не нужно:
// раскрытие и закрытие работает средствами браузера.
export default function Faq({ title = 'Частые вопросы', subtitle = 'Отвечаем на самое важное' }) {
  return (
    <section className="section section--alt">
      <div className="container container--narrow">
        <div className="section-header">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="faq-list">
          {faq.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary className="faq-question">{item.question}</summary>
              <p className="faq-answer">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
