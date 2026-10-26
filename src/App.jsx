import './App.css';

import NavigationProvider from './router/NavigationProvider';
import { useNavigation } from './router/navigation';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import CalculatorPage from './pages/CalculatorPage';
import ContactsPage from './pages/ContactsPage';
import NotFoundPage from './pages/NotFoundPage';

// ========================================================
// КАРТА СТРАНИЦ
// ========================================================
// Ключ слева должен совпадать с полем key в меню (src/data/site.js).
// Чтобы добавить новую страницу:
//   1) создайте файл в src/pages/...
//   2) импортируйте его выше
//   3) добавьте строку сюда и пункт меню в src/data/site.js
// ========================================================
const PAGES = {
  home: HomePage,
  services: ServicesPage,
  portfolio: PortfolioPage,
  about: AboutPage,
  calculator: CalculatorPage,
  contacts: ContactsPage,
};

// Показывает нужную страницу по текущему ключу.
function CurrentPage() {
  const { page } = useNavigation();
  const Page = PAGES[page] || NotFoundPage;
  return <Page />;
}

export default function App() {
  return (
    <NavigationProvider>
      <div className="page-wrapper">
        <Header />
        <main className="page-main">
          <CurrentPage />
        </main>
        <Footer />
      </div>
    </NavigationProvider>
  );
}
