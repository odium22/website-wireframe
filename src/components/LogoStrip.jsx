import { clients } from '../data/content';

// ПОЛОСА КЛИЕНТОВ / ЛОГОТИПОВ
// Просто ряд серых заглушек, чтобы показать, что вам доверяют.
export default function LogoStrip({ title = 'Нам доверяют' }) {
  return (
    <section className="section section--tight section--alt">
      <div className="container">
        <p className="logo-strip-title">{title}</p>
        <div className="logo-strip">
          {clients.map((name) => (
            <div className="logo-item" key={name}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
