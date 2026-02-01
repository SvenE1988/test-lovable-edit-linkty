import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToHash = () => {
  const { pathname, hash, state } = useLocation();

  useEffect(() => {
    // Check either hash from URL or state (passed via navigation)
    const targetHash = hash || (state && state.scrollTo);

    if (targetHash) {
      const id = targetHash.replace('#', '');
      
      // Try to find the element
      const attemptScroll = (retryCount = 0) => {
        const element = document.getElementById(id);
        if (element) {
          // Native smooth scroll
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (retryCount < 5) {
          // Retry a few times for lazy loaded content
          setTimeout(() => attemptScroll(retryCount + 1), 100 * (retryCount + 1));
        }
      };

      attemptScroll();
    } else {
      // Scroll to top on route change if no hash
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, state]);
};
