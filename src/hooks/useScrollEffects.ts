'use client';

import { useEffect, useState, useRef } from 'react';

interface UseScrollEffectsOptions {
  threshold?: number;
  rootMargin?: string;
  parallaxSpeed?: number;
}

export function useScrollEffects(options: UseScrollEffectsOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -10% 0px', parallaxSpeed = 0.3 } = options;
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Intersection Observer para detectar cuando el elemento entra al viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    // Scroll listener para efectos de parallax
    const handleScroll = () => {
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const scrollProgress = (window.scrollY - elementTop + window.innerHeight) / (window.innerHeight + rect.height);
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call once to set initial value

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold, rootMargin]);

  // Calcular valores para parallax diferencial
  const getParallaxOffset = (speed: number = parallaxSpeed) => {
    return scrollY * speed * 100;
  };

  return {
    elementRef,
    isVisible,
    scrollY,
    getParallaxOffset,
  };
}