import { useEffect, type RefObject } from 'react';

/** Reveal home sections once, only when they enter the viewport. */
export function useScrollReveal(root: RefObject<HTMLElement>, dependency: unknown) {
  useEffect(() => {
    const sections = root.current?.querySelectorAll<HTMLElement>('section[id]:not(#home)');
    if (!sections || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.setAttribute('data-scroll-reveal', 'visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });

    sections.forEach((section) => {
      section.setAttribute('data-scroll-reveal', 'pending');
      observer.observe(section);
    });
    return () => {
      observer.disconnect();
      sections.forEach((section) => section.removeAttribute('data-scroll-reveal'));
    };
  }, [root, dependency]);
}