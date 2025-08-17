'use client';

import { useEffect, useState, useRef, ReactNode } from 'react';

interface SimpleScrollEffectProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function SimpleScrollEffect({ 
  children, 
  className = '',
  delay = 0
}: SimpleScrollEffectProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [isMounted, delay]);

  if (!isMounted) {
    return (
      <div 
        ref={elementRef}
        className={`opacity-0 ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <div 
      ref={elementRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
}