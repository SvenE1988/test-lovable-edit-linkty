/**
 * ScrollContext - Native Scroll Implementation
 * 
 * Replaced GSAP ScrollTrigger with clean React state management.
 * Uses native window scroll events.
 */

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

// Define context type
interface ScrollContextType {
  scrollY: number;
  isScrolled: boolean;
  isReady: boolean;
  scrollTo: (target: string | HTMLElement | number, options?: { offset?: number }) => void;
}

const ScrollContext = createContext<ScrollContextType | null>(null);

/**
 * ScrollProvider - Wraps the application with scroll context
 */
export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Native scroll listener (passive for Performance)
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      setIsScrolled(y > 50);
    };

    // Initial state
    handleScroll();
    setIsReady(true);

    // Event listener with passive flag
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /**
   * Smooth scroll to target element or position
   * Uses native CSS scroll-behavior: smooth
   */
  const scrollTo = useCallback((target: string | HTMLElement | number, options = {}) => {
    const { offset = -100 } = options as { offset?: number };

    // String selector or Element
    const element = typeof target === 'string'
      ? document.querySelector(target)
      : target;

    if (element instanceof HTMLElement) {
      const top = element.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    } else if (typeof target === 'number') {
      // Direct Pixel-Position
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    }
  }, []);

  // Anchor-Link Handler
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (href === '#' || !href) return;

      e.preventDefault();
      scrollTo(href);
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [scrollTo]);

  return (
    <ScrollContext.Provider value={{
      scrollY,
      isScrolled,
      isReady,
      scrollTo,
    }}>
      {children}
    </ScrollContext.Provider>
  );
};

/**
 * useScroll Hook - Access scroll context
 */
export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    // Fallback for components outside provider
    return {
      scrollY: 0,
      isScrolled: false,
      isReady: true,
      scrollTo: () => {},
    };
  }
  return context;
};

export default ScrollContext;
