import { useNavigation } from '../router/navigation';

// ПРИЗЫВ К ДЕЙСТВИЮ (CTA-баннер)
// Тёмная полоса в конце страницы с кнопкой перехода.
// Props: title, text, buttonLabel, buttonPage.
export default function CtaBanner({
  title = 'Готовы обсудить ваш проект?',
  text = 'Оставьте заявку — свяжемся, уточним детали и пришлём смету.',
  buttonLabel = 'Оставить заявку',
  buttonPage = 'contacts',
  secondaryLabel,
  secondaryPage,
}) {
  const { go } = useNavigation();

  return (
    <section className="section section--tight">
      <div className="container">
        <div className="cta-banner">
          <div>
            <h2 className="cta-title">{title}</h2>
            <p className="cta-text">{text}</p>
          </div>
          <div className="cta-actions">
            <button className="btn btn-light" onClick={() => go(buttonPage)}>
              {buttonLabel}
            </button>
            {secondaryLabel && (
              <button className="btn btn-ghost" onClick={() => go(secondaryPage)}>
                {secondaryLabel}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
