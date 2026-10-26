import PageHeader from '../components/PageHeader';
import ProjectsGrid from '../components/ProjectsGrid';
import BeforeAfter from '../components/BeforeAfter';
import Stats from '../components/Stats';
import CtaBanner from '../components/CtaBanner';

// СТРАНИЦА «РАБОТЫ» (ПОРТФОЛИО)
export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        badge="Портфолио"
        title="Работы"
        subtitle="Несколько проектов и результаты, которых удалось добиться вместе с клиентами."
      />
      <ProjectsGrid title="Все кейсы" subtitle="Фильтры и детальные страницы кейсов можно добавить позже" />
      <BeforeAfter />
      <Stats />
      <CtaBanner title="Хотите такой же результат?" text="Покажите похожий проект — обсудим, как улучшить ваш." />
    </>
  );
}
