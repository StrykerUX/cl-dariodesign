'use client';

import { useEffect, useState } from 'react';

interface NavMobileProps {
  open: boolean;
  onClose: () => void;
  navItems: Array<{
    href: string;
    label: string;
  }>;
  onSmoothScroll: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  isScrolled: boolean;
}

export default function NavMobile({ open, onClose, navItems, onSmoothScroll, isScrolled }: NavMobileProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (open) {
      setShouldRender(true);
      setTimeout(() => setIsAnimating(true), 10);
      document.body.style.overflow = 'hidden';
    } else {
      setIsAnimating(false);
      setTimeout(() => setShouldRender(false), 300);
      document.body.style.overflow = 'unset';
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (open) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEsc);
    };
  }, [open, onClose]);

  if (!shouldRender) return null;

  return (
    <nav
      id="mobile-menu"
      role="dialog"
      tabIndex={-1}
      className={`
        fixed top-0 left-0 right-0 bottom-0 w-screen h-screen z-[9999]
        transform transition-transform duration-300 ease-out
        ${isAnimating ? 'translate-x-0' : 'translate-x-full'}
      `}
      style={{ backgroundColor: 'white' }}
      onClick={onClose}
    >
        <div className="p-6 h-full flex flex-col text-center" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center justify-between mb-8">
            <span className="font-semibold text-text-primary">Menú</span>
            <button
              onClick={onClose}
              className="p-2 -m-2 text-text-secondary hover:text-text-primary transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="m6 6 12 12" />
                <path d="m18 6-12 12" />
              </svg>
              <span className="sr-only">Cerrar menú</span>
            </button>
          </div>

          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    onSmoothScroll(e, item.href);
                    onClose();
                  }}
                  className="block py-3 px-4 rounded-lg text-base transition-colors duration-150 text-center text-text-secondary hover:text-text-primary hover:bg-gray-50"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
    </nav>
  );
}