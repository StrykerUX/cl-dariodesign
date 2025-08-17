'use client';

import { useEffect } from 'react';

interface NavMobileProps {
  open: boolean;
  onClose: () => void;
  navItems: Array<{
    href: string;
    label: string;
    active: boolean;
  }>;
  onSmoothScroll: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export default function NavMobile({ open, onClose, navItems, onSmoothScroll }: NavMobileProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
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

  if (!open) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />
      <nav
        id="mobile-menu"
        role="dialog"
        tabIndex={-1}
        className={`
          fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white z-50
          shadow-2xl rounded-l-xl
          transform transition-transform duration-300 ease-out
          ${open ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="p-6 h-full flex flex-col">
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
                  className={`
                    block py-3 px-4 rounded-lg text-base transition-colors duration-150
                    ${item.active 
                      ? 'text-text-primary bg-gray-50 font-medium' 
                      : 'text-text-secondary hover:text-text-primary hover:bg-gray-50'
                    }
                  `}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}