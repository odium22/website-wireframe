import { useNavigation } from '../router/navigation';

// ЗАГОЛОВОК ВНУТРЕННЕЙ СТРАНИЦЫ
// Используется на всех страницах, кроме главной.
// Props: badge — надпись-метка, title — заголовок, subtitle — описание.
export default function PageHeader({ badge, title, subtitle }) {
  const { go } = useNavigation();

  return (
    <section className="page-header">
      <div className="container">
        {/* Хлебные крошки: Главная → Название страницы */}
        <div className="breadcrumbs">
          <button onClick={() => go('home')}>Главная</button>
          <span>/</span>
          <span>{title}</span>
        </div>

        {badge && <span className="badge">{badge}</span>}
        <h1 className="page-title">{title}</h1>
        {subtitle && <p className="page-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
