import { createContext, useState, useEffect, useRef, useCallback } from 'react';

export const HeaderVisibilityContext = createContext();

export function HeaderVisibilityProvider({ children }) {
  const [showHeader, setShowHeader] = useState(true);
  const [showDock, setShowDock] = useState(true);
  const [forceHideHeader, setForceHideHeader] = useState(false);
  const [scrollContainer, setScrollContainer] = useState(null);
  const lastScrollYRef = useRef(0);
  const hiddenBySectionRef = useRef(new Set());

  const handleSetScrollContainer = useCallback((ref) => {
    setScrollContainer(ref);
  }, []);

  const setHeaderHiddenBySection = useCallback((sectionId, isHidden) => {
    if (!sectionId) return;

    if (isHidden) {
      hiddenBySectionRef.current.add(sectionId);
    } else {
      hiddenBySectionRef.current.delete(sectionId);
    }

    setForceHideHeader(hiddenBySectionRef.current.size > 0);
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
    <HeaderVisibilityContext.Provider
      value={{
        showHeader: showHeader && !forceHideHeader,
        setShowHeader,
        showDock,
        setShowDock,
        setScrollContainer: handleSetScrollContainer,
        setHeaderHiddenBySection,
      }}
    >
      {children}
    </HeaderVisibilityContext.Provider>
  );
}
