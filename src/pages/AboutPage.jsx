import PageHeader from '../components/PageHeader';
import Stats from '../components/Stats';
import Features from '../components/Features';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import CtaBanner from '../components/CtaBanner';

// СТРАНИЦА «О НАС»
export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="О студии"
        title="О нас"
        subtitle="Небольшая команда, которая делает сайты и цифровые продукты с вниманием к деталям."
      />

      {/* Текстовый блок в две колонки: текст и картинка-заглушка */}
      <section className="section">
        <div className="container split">
          <div className="prose">
            <h2>Наша миссия</h2>
            <p>
              Здесь напишите, зачем существует ваша команда и какую задачу решаете для
              клиентов. Пара абзацев живым языком работает лучше сухих формулировок.
            </p>
            <p>
              Расскажите о подходе к работе, принципах и о том, чем вы отличаетесь от
              других. Этот блок — хорошее место, чтобы показать характер проекта.
            </p>
          </div>
          <div className="ph ph--4x3">[ Фото команды или офиса ]</div>
        </div>
      </section>

      <Stats />
      <Features title="Наши принципы" subtitle="Как мы подходим к каждому проекту" />
      <Team />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
