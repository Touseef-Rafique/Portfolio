import { useEffect, useRef, useState } from 'react';

/**
 * useScrollReveal
 * Returns [ref, isVisible] — attach ref to any element, and toggle a
 * "visible" class on it once it scrolls into the viewport.
 *
 * Place this file at: src/hooks/useScrollReveal.js
 */
export function useScrollReveal(options = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -60px 0px', once = true } = options;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion users by revealing immediately
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, isVisible];
}

export default useScrollReveal;
