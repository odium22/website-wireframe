import PageHeader from '../components/PageHeader';
import Calculator from '../components/Calculator';
import Faq from '../components/Faq';
import CtaBanner from '../components/CtaBanner';
import { calculator } from '../data/content';

// СТРАНИЦА «КАЛЬКУЛЯТОР»
export default function CalculatorPage() {
  return (
    <>
      <PageHeader
        badge="Оценка проекта"
        title="Калькулятор"
        subtitle="Прикиньте бюджет и сроки ещё до звонка. Форма сейчас работает как макет."
      />
      <Calculator />

      {/* Заглушка «результата расчёта». Значение меняется в content.js. */}
      <section className="section section--tight">
        <div className="container">
          <div className="result-card">
            <div>
              <div className="result-label">Предварительная стоимость</div>
              <p className="result-note">{calculator.resultNote}</p>
            </div>
            <div className="result-value">{calculator.resultValue}</div>
          </div>
        </div>
      </section>

      <Faq title="Вопросы про расчёт" subtitle="Что важно знать о смете" />
      <CtaBanner title="Готовы к точной смете?" text="Отправьте параметры — посчитаем стоимость под ваш проект." />
    </>
  );
}
