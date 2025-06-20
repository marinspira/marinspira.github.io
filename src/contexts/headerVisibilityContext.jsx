import { createContext, useState, useEffect, useRef, useCallback } from 'react';

export const HeaderVisibilityContext = createContext();

export function HeaderVisibilityProvider({ children }) {
  const [showHeader, setShowHeader] = useState(true);
  const [scrollContainer, setScrollContainer] = useState(null);
  const lastScrollYRef = useRef(0);

  const handleSetScrollContainer = useCallback((ref) => {
    setScrollContainer(ref);
  }, []);

  useEffect(() => {
    const container = scrollContainer || window;

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
  }, [scrollContainer]);

  return (
    <HeaderVisibilityContext.Provider value={{ showHeader, setScrollContainer: handleSetScrollContainer }}>
      {children}
    </HeaderVisibilityContext.Provider>
  );
}
