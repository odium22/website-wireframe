import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import Faq from '../components/Faq';
import { site } from '../data/site';

// СТРАНИЦА «КОНТАКТЫ»
// Слева — контактные данные, справа — форма. Ниже карта-заглушка.
export default function ContactsPage() {
  const { phone, email, address, hours, telegram, telegramUrl } = site.contacts;

  const rows = [
    { label: 'Телефон', value: phone, href: `tel:${phone.replace(/[^+\d]/g, '')}` },
    { label: 'E-mail', value: email, href: `mailto:${email}` },
    { label: 'Telegram', value: telegram, href: telegramUrl },
    { label: 'Адрес', value: address },
    { label: 'Часы работы', value: hours },
  ];

  return (
    <>
      <PageHeader
        badge="Свяжитесь с нами"
        title="Контакты"
        subtitle="Напишите, позвоните или оставьте заявку — ответим в рабочее время."
      />

      <section className="section">
        <div className="container split split--wide">
          <div className="contact-info">
            <h2>Как с нами связаться</h2>
            <p>
              Выберите удобный способ. Если не уверены, что именно нужно —
              просто оставьте заявку, поможем разобраться.
            </p>

            <ul className="contact-list">
              {rows.map((row) => (
                <li className="contact-row" key={row.label}>
                  <span className="contact-row-label">{row.label}</span>
                  {row.href ? (
                    <a className="contact-row-value" href={row.href}>
                      {row.value}
                    </a>
                  ) : (
                    <span className="contact-row-value">{row.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Заглушка карты: сюда можно вставить iframe карты */}
      <section className="section section--tight">
        <div className="container">
          <div className="map-placeholder">[ Здесь будет карта ]</div>
        </div>
      </section>

      <Faq title="Перед обращением" subtitle="Пара частых вопросов" />
    </>
  );
}
