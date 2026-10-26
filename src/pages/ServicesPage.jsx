import PageHeader from '../components/PageHeader';
import ServicesGrid from '../components/ServicesGrid';
import Steps from '../components/Steps';
import Pricing from '../components/Pricing';
import Faq from '../components/Faq';
import CtaBanner from '../components/CtaBanner';

// СТРАНИЦА «УСЛУГИ»
export default function ServicesPage() {
  return (
    <>
      <PageHeader
        badge="Что мы делаем"
        title="Услуги"
        subtitle="От лендинга до веб-приложения: выберите формат, а мы подберём состав работ и сроки."
      />
      <ServicesGrid title="Все направления" subtitle="Полный список услуг и ориентировочные цены" />
      <Steps />
      <Pricing />
      <Faq />
      <CtaBanner title="Не нашли нужную услугу?" text="Расскажите о задаче — предложим решение и посчитаем стоимость." />
    </>
  );
}
