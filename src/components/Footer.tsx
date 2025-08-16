'use client';

export default function Footer() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const socialIcons = [
    {
      name: 'Facebook',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      )
    },
    {
      name: 'Instagram', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      )
    },
    {
      name: 'X (Twitter)',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect width="4" height="12" x="2" y="9"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      )
    }
  ];

  return (
    <footer 
      id="contacto"
      className="bg-footer text-white py-14 md:py-18"
    >
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="grid md:grid-cols-3 gap-y-8 md:gap-x-10">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contacto</h3>
            <p className="text-white/90 text-sm leading-relaxed">
              Diseño multimedia y desarrollo de portafolios.
            </p>
            <div className="flex items-center gap-4 pt-2">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="text-white/90 hover:text-white transition-colors duration-150"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg tracking-wide">SERVICIOS</h3>
            <div className="space-y-2 text-sm">
              <p className="text-white/90">+34 612 346 678</p>
              <p className="text-white/90">info@darioachirica.com</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg tracking-wide">REDES</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="newsletter-email" className="block text-sm font-medium mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="newsletter-email"
                  placeholder="Introduce tu correo aquí"
                  className="w-full h-11 px-4 bg-white text-text-primary border-0 rounded-lg focus:ring-2 focus:ring-white/20 focus:outline-none"
                  autoComplete="email"
                />
              </div>
              <button
                type="submit"
                className="h-10 px-6 bg-text-primary text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors duration-150 focus-visible:outline-offset-2 focus-visible:outline focus-visible:outline-white"
              >
                Enviar consulta
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6">
          <p className="text-white/60 text-sm text-center">
            © 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}