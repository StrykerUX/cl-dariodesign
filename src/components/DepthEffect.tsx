'use client';

import { useScrollEffects } from '@/hooks/useScrollEffects';
import { ReactNode, CSSProperties } from 'react';

interface DepthEffectProps {
  children: ReactNode;
  type: 'image' | 'text' | 'heading';
  parallaxSpeed?: number;
  className?: string;
  style?: CSSProperties;
}

export default function DepthEffect({ 
  children, 
  type, 
  parallaxSpeed = 0.3, 
  className = '',
  style = {}
}: DepthEffectProps) {
  const { elementRef, isVisible, getParallaxOffset, isMounted } = useScrollEffects({
    parallaxSpeed,
    threshold: 0.1,
    rootMargin: '0px 0px -5% 0px'
  });

  const getEffectClasses = () => {
    if (!isMounted) return `depth-${type}`;
    
    switch (type) {
      case 'image':
        return `depth-image ${isVisible ? 'focused' : ''}`;
      case 'text':
        return `depth-text ${isVisible ? 'emerged' : ''}`;
      case 'heading':
        return `depth-text-heading ${isVisible ? 'emerged' : ''}`;
      default:
        return '';
    }
  };

  const parallaxOffset = isMounted ? getParallaxOffset(parallaxSpeed) : 0;
  
  const combinedStyle: CSSProperties = {
    ...style,
    transform: `${style.transform || ''} translateY(${parallaxOffset}px)`.trim(),
  };

  return (
    <div 
      ref={elementRef as React.Ref<HTMLDivElement>}
      className={`depth-container ${getEffectClasses()} ${className}`}
      style={combinedStyle}
    >
      {children}
    </div>
  );
}