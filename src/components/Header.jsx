import { useNavigation } from '../router/navigation';
import { site } from '../data/site';

// ШАПКА САЙТА (HEADER)
// Логотип, меню и кнопка действия. Меню берётся из src/data/site.js.
export default function Header() {
  const { page, go } = useNavigation();

  return (
    <header className="header">
      <div className="container header-container">
        {/* Логотип = название проекта. Клик ведёт на главную. */}
        <button className="logo" onClick={() => go('home')}>
          {site.name}
          {site.tagline && <span className="logo-tagline">{site.tagline}</span>}
        </button>

        {/* Ссылки страниц. Активная подсвечивается. */}
        <nav className="nav-menu">
          {site.nav.map((item) => (
            <button
              key={item.key}
              className={item.key === page ? 'nav-link is-active' : 'nav-link'}
              onClick={() => go(item.key)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button className="btn btn-secondary btn-sm" onClick={() => go(site.headerCta.page)}>
          {site.headerCta.label}
        </button>
      </div>
    </header>
  );
}
