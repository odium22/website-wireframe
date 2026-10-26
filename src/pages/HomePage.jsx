import Hero from '../components/Hero';
import LogoStrip from '../components/LogoStrip';
import Stats from '../components/Stats';
import ServicesGrid from '../components/ServicesGrid';
import Features from '../components/Features';
import Steps from '../components/Steps';
import ProjectsGrid from '../components/ProjectsGrid';
import Testimonials from '../components/Testimonials';
import CtaBanner from '../components/CtaBanner';

// ГЛАВНАЯ СТРАНИЦА
// Порядок блоков легко менять — просто переставьте строки местами.
export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <Stats />
      <ServicesGrid limit={3} />
      <Features />
      <Steps />
      <ProjectsGrid limit={3} />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
