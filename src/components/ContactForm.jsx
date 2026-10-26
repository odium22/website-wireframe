import { site } from '../data/site';

// ФОРМА ЗАЯВКИ (СТАТИЧЕСКИЙ МАКЕТ)
// Поля без состояния: просто разметка. Отправка ничего не делает.
// Props: title, subtitle.
export default function ContactForm({ title = 'Оставить заявку', subtitle = 'Перезвоним в течение 15 минут' }) {
  return (
    <div className="contact-form-card">
      <h3>{title}</h3>
      <p className="form-subtitle">{subtitle}</p>

      <form
        onSubmit={(event) => {
          // Макет: подключайте отправку (почта, CRM, Telegram) здесь.
          event.preventDefault();
        }}
      >
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="contact-name">Ваше имя</label>
            <input id="contact-name" type="text" placeholder="Как к вам обращаться" />
          </div>
          <div className="form-group">
            <label htmlFor="contact-phone">Телефон</label>
            <input id="contact-phone" type="tel" placeholder="+7 (___) ___-__-__" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="contact-email">E-mail или Telegram</label>
          <input id="contact-email" type="text" placeholder={`Например, ${site.contacts.telegram}`} />
        </div>

        <div className="form-group">
          <label htmlFor="contact-message">Задача</label>
          <textarea id="contact-message" rows="4" placeholder="Опишите в двух словах вашу задачу..."></textarea>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Отправить заявку
        </button>
        <p className="form-note">Нажимая кнопку, вы соглашаетесь с обработкой данных.</p>
      </form>
    </div>
  );
}
