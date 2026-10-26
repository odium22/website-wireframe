import { useNavigation } from '../router/navigation';

// СТРАНИЦА 404
// Показывается, если ключ страницы не найден в объекте PAGES.
export default function NotFoundPage() {
  const { go } = useNavigation();

  return (
    <section className="section not-found">
      <div className="container container--narrow">
        <div className="not-found-code">404</div>
        <h1 className="page-title">Страница не найдена</h1>
        <p className="page-subtitle">Возможно, ссылка устарела или страница ещё не готова.</p>
        <div className="center-action">
          <button className="btn btn-primary" onClick={() => go('home')}>
            Вернуться на главную
          </button>
        </div>
      </div>
    </section>
  );
}
