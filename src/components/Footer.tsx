export default function Footer() {
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
      className="bg-footer text-white py-12 md:py-14 lg:py-18"
    >
      <div className="mx-auto max-w-[1120px] px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-y-6 md:gap-y-8 md:gap-x-8 lg:gap-x-10">
          <div className="space-y-3 md:space-y-4">
            <h3 className="font-semibold text-base md:text-lg">Dario Achirica</h3>
            <p className="text-white/90 text-sm leading-relaxed">
              Diseño multimedia y desarrollo de portafolios profesionales que impulsan tu presencia digital.
            </p>
          </div>

          <div className="space-y-3 md:space-y-4">
            <h3 className="font-semibold text-base md:text-lg tracking-wide">Contacto</h3>
            <div className="space-y-1 md:space-y-2 text-sm">
              <p className="text-white/90">+34 612 346 678</p>
              <p className="text-white/90">info@darioachirica.com</p>
              <p className="text-white/90">Madrid, España</p>
            </div>
          </div>

          <div className="space-y-3 md:space-y-4">
            <h3 className="font-semibold text-base md:text-lg tracking-wide">Sígueme</h3>
            <div className="flex items-center gap-3 md:gap-4">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="text-white/90 hover:text-white hover:scale-110 transition-all duration-200 p-1"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="mt-4">
              <a 
                href="https://wa.me/34612346678"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-sm transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 md:mt-10 lg:mt-12 pt-4 md:pt-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © 2025. All rights reserved.
            </p>
            <p className="text-white/60 text-sm text-center order-first md:order-none">
              <a 
                href="https://novalabss.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-all duration-300 inline-flex items-center gap-1 group"
              >
                ¿Quieres tu sitio web? Empecemos.
                <svg 
                  className="w-3 h-3 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </a>
            </p>
            <p className="text-white/60 text-sm text-center md:text-right">
              Powered by{' '}
              <a 
                href="https://novalabss.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors duration-200"
              >
                Novalabss
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}