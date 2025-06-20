import { createContext, useState, useEffect, useRef, useCallback } from 'react';

export const HeaderVisibilityContext = createContext();

export function HeaderVisibilityProvider({ children }) {
  const [showHeader, setShowHeader] = useState(true);
  const scrollContainerRef = useRef(null); // pode ser window ou um elemento DOM
  const lastScrollYRef = useRef(0);

  const setScrollContainer = useCallback((ref) => {
    scrollContainerRef.current = ref;
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current || window;

    const handleScroll = () => {
      const currentScrollY = container === window
        ? window.scrollY
        : container.scrollTop;

      const shouldShow = currentScrollY < lastScrollYRef.current || currentScrollY <= 100;
      setShowHeader(shouldShow);
      lastScrollYRef.current = currentScrollY;
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderVisibilityContext.Provider value={{ showHeader, setScrollContainer }}>
      {children}
    </HeaderVisibilityContext.Provider>
  );
}
