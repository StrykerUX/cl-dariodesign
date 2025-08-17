'use client';

import { useState, useEffect } from 'react';
import NavMobile from './NavMobile';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { href: '#inicio', label: 'Inicio', active: true },
    { href: '#sobre-mi', label: 'Sobre mí', active: false },
    { href: '#servicios', label: 'Servicios', active: false },
    { href: '#portafolio', label: 'Portafolio', active: false },
    { href: '#testimonios', label: 'Testimonios', active: false },
    { href: '#contacto', label: 'Contacto', active: false },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerHeight = 64; // Height of fixed header
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
      const heroHeight = window.innerHeight * 0.5;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50 h-14 md:h-16 transition-all duration-300
      ${isScrolled 
        ? 'bg-white/95 backdrop-blur-sm border-b border-border-light shadow-sm' 
        : 'bg-transparent'
      }
    `}>
      <div className="mx-auto max-w-[1120px] px-4 md:px-6 lg:px-8 h-full flex items-center justify-between">
        <a 
          href="#inicio" 
          onClick={(e) => handleSmoothScroll(e, '#inicio')}
          className={`
            font-semibold text-sm tracking-tight transition-colors duration-300 hover:scale-105 transform
            ${isScrolled ? 'text-text-primary hover:text-text-primary/80' : 'text-white hover:text-white/80'}
          `}
        >
          DarioAchirica
        </a>
        
        <nav className="hidden md:flex" aria-label="Principal">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`
                    text-[13px] transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 transform inline-block
                    ${item.active 
                      ? isScrolled 
                        ? 'text-text-primary underline underline-offset-4 decoration-[1px]'
                        : 'text-white underline underline-offset-4 decoration-[1px]'
                      : isScrolled
                        ? 'text-text-secondary hover:text-text-primary'
                        : 'text-white/70 hover:text-white/90'
                    }
                  `}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`
            md:hidden transition-all duration-300 hover:scale-110 transform p-2 -m-2
            ${isScrolled ? 'text-text-secondary hover:text-text-primary' : 'text-white/70 hover:text-white'}
          `}
          onClick={() => setMobileMenuOpen(true)}
          aria-controls="mobile-menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <span className="sr-only">Abrir menú</span>
        </button>
      </div>

      <NavMobile 
        open={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
        onSmoothScroll={handleSmoothScroll}
      />
    </header>
  );
}