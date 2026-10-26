import { useState } from 'react';
import { NavigationContext } from './navigation';

// ПРОВАЙДЕР НАВИГАЦИИ
// Хранит, какая страница открыта сейчас, и даёт функцию перехода.
// Никаких useEffect: только useState. Это чистый «макет» переключения страниц.
export default function NavigationProvider({ initialPage = 'home', children }) {
  const [page, setPage] = useState(initialPage);

  // Переход на другую страницу + подъём к началу экрана.
  const go = (nextPage) => {
    setPage(nextPage);
    window.scrollTo({ top: 0 });
  };

  return (
    <NavigationContext.Provider value={{ page, go }}>
      {children}
    </NavigationContext.Provider>
  );
}
