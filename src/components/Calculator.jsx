import { calculator } from '../data/content';

// КАЛЬКУЛЯТОР (СТАТИЧЕСКИЙ МАКЕТ)
// Здесь нет расчётов и состояния: поля просто показывают варианты.
// Чтобы оживить форму, добавьте useState и обработчик onSubmit
// (см. комментарий в конце файла).
export default function Calculator() {
  return (
    <section className="section section--alt">
      <div className="container calc-container">
        {/* Левая колонка: объясняем выгоду */}
        <div className="calc-info">
          <h2>{calculator.title}</h2>
          <p>{calculator.text}</p>
          <ul className="feature-list">
            <li>✔ <b>Быстро:</b> ориентир по бюджету без звонков</li>
            <li>✔ <b>Удобно:</b> все параметры перед глазами</li>
            <li>✔ <b>Понятно:</b> никаких скрытых наценок</li>
          </ul>
        </div>

        {/* Правая колонка: форма-макет */}
        <div className="calc-card">
          <h3>Параметры проекта</h3>
          <form
            onSubmit={(event) => {
              // Макет: ничего не отправляем, просто не перезагружаем страницу.
              // Здесь позже можно посчитать стоимость или отправить данные.
              event.preventDefault();
            }}
          >
            <div className="form-group">
              <label htmlFor="calc-type">Тип проекта</label>
              <select id="calc-type" defaultValue="landing">
                {calculator.types.map((type) => (
                  <option value={type.value} key={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Дополнительные опции</label>
              <div className="check-list">
                {calculator.extras.map((extra) => (
                  <label className="check-item" key={extra.id}>
                    <input type="checkbox" />
                    <span>{extra.label}</span>
                    <span className="check-price">+{extra.price.toLocaleString('ru-RU')} ₽</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="calc-term">Сроки</label>
              <select id="calc-term" defaultValue="normal">
                {calculator.terms.map((term) => (
                  <option value={term.value} key={term.value}>
                    {term.label}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Рассчитать стоимость
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
