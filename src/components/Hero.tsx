'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  const handleScrollToPortfolio = () => {
    const element = document.getElementById('portafolio');
    if (element) {
      const headerHeight = 64;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Solo agregar el listener en el cliente
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section 
      id="inicio"
      className="relative min-h-[90vh] flex items-center pt-16 md:pt-20 lg:pt-24 overflow-hidden"
    >
      <div 
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      >
        <Image
          src="https://images.pexels.com/photos/3184657/pexels-photo-3184657.jpeg"
          alt="Background workspace - Diseño multimedia creativo"
          fill
          className="object-cover scale-110"
          priority
          sizes="100vw"
        />
      </div>
      
      <div className="absolute inset-0 bg-black/[0.66]" />
      
      <div className="relative z-10 mx-auto max-w-[1120px] px-4 md:px-6 lg:px-8 w-full">
        <div className="max-w-[720px] pl-4 md:pl-[clamp(24px,6vw,80px)] lg:pl-[clamp(24px,8vw,80px)] space-y-4 md:space-y-5">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-[-0.01em]">
            Portafolio de Dario<br className="hidden md:block" />
            Achirica: Diseño<br className="hidden md:block" />
            Multimedia Creativo
          </h1>
          
          <p className="text-white/80 text-base md:text-lg lg:text-xl font-medium">
            Servicios de diseño a tu medida
          </p>
          
          <button 
            onClick={handleScrollToPortfolio}
            className="inline-flex items-center justify-center h-9 md:h-10 px-5 md:px-6 bg-white/96 text-text-primary text-sm font-medium rounded-full hover:bg-text-primary hover:text-white hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg transform transition-all duration-300 focus-visible:outline-offset-2 focus-visible:outline focus-visible:outline-text-primary active:scale-95"
          >
            Ver Trabajos
          </button>
        </div>
      </div>
    </section>
  );
}