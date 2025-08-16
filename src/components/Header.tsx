'use client';

import { useState } from 'react';
import NavMobile from './NavMobile';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#inicio', label: 'Inicio', active: true },
    { href: '#servicios', label: 'Servicios', active: false },
    { href: '#portafolio', label: 'Portafolio', active: false },
    { href: '#contacto', label: 'Contacto', active: false },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 md:h-16">
      <div className="mx-auto max-w-[1120px] px-6 md:px-8 h-full flex items-center justify-between">
        <a 
          href="#inicio" 
          className="font-semibold text-sm tracking-tight text-white hover:text-white/80 transition-colors duration-150"
        >
          DarioAchirica
        </a>
        
        <nav className="hidden md:flex" aria-label="Principal">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`text-[13px] transition-colors duration-150 ${
                    item.active 
                      ? 'text-white underline underline-offset-4 decoration-[1px]' 
                      : 'text-white/70 hover:text-white/90'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="md:hidden text-white/70 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(true)}
          aria-controls="mobile-menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
      />
    </header>
  );
}