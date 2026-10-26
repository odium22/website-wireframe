// МИНИ-РОУТЕР (без сторонних библиотек и без useEffect)
// Вся навигация — это одно значение useState в провайдере ниже.
// Здесь храним сам контекст и удобный хук, чтобы из любого места
// можно было перейти на другую страницу: go('services').
import { createContext, useContext } from 'react';

// Значение по умолчанию — на случай, если компонент вызовут вне провайдера.
export const NavigationContext = createContext({
  page: 'home',
  go: () => {},
});

// Хук-«пульт»: const { page, go } = useNavigation();
export function useNavigation() {
  return useContext(NavigationContext);
}
