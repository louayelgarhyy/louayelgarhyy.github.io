import { useEffect } from 'react';

export const useScrollToTop = () => {
  useEffect(() => {
    // Disable scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Immediately scroll to top
    window.scrollTo(0, 0);
    
    // Prevent any scroll restoration that might happen
    const preventScrollRestoration = () => {
      if (window.scrollY > 0) {
        window.scrollTo(0, 0);
      }
    };
    
    // Check multiple times to ensure we catch any late scroll restoration
    const timeouts = [
      setTimeout(preventScrollRestoration, 10),
      setTimeout(preventScrollRestoration, 50),
      setTimeout(preventScrollRestoration, 100),
      setTimeout(preventScrollRestoration, 200)
    ];
    
    // Also listen for scroll events to prevent unwanted scrolling
    const handleScroll = () => {
      if (window.scrollY > 0 && !window.scrollY) {
        window.scrollTo(0, 0);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      timeouts.forEach(clearTimeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};
