'use client';

export default function SectionContact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "info@darioachirica.com",
      link: "mailto:info@darioachirica.com"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Teléfono",
      value: "+34 612 346 678",
      link: "tel:+34612346678"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Ubicación",
      value: "Madrid, España",
      link: "#"
    }
  ];

  return (
    <section 
      id="contacto"
      className="py-14 md:py-24 lg:py-32 bg-gray-50"
      aria-labelledby="contacto-heading"
    >
      <div className="mx-auto max-w-[1120px] px-4 md:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 lg:mb-20 text-center">
          <h2 id="contacto-heading" className="text-xl md:text-2xl lg:text-3xl font-bold text-text-primary mb-4 md:mb-6 tracking-tight">
            Hablemos de tu proyecto
          </h2>
          <p className="text-sm md:text-[15px] lg:text-base leading-relaxed text-text-secondary max-w-[600px] mx-auto">
            ¿Tienes una idea que quieres hacer realidad? Me encantaría conocer los detalles y ayudarte a crear algo extraordinario.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          {/* Contact Information */}
          <div className="space-y-8 md:space-y-10">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-6 md:mb-8">
                Información de contacto
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-text-primary text-white rounded-full flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium text-text-primary text-sm">
                        {info.title}
                      </p>
                      <a 
                        href={info.link}
                        className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm md:text-base"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <h4 className="font-semibold text-text-primary mb-4">
                ¿Prefieres WhatsApp?
              </h4>
              <p className="text-text-secondary text-sm mb-4">
                Respondo más rápido por WhatsApp. ¡Escríbeme directamente!
              </p>
              <a 
                href="https://wa.me/34612346678"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium text-sm transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Abrir WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
            <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-6 md:mb-8">
              Envíame un mensaje
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 border border-border-light rounded-lg focus:ring-2 focus:ring-text-primary/20 focus:border-text-primary outline-none transition-all duration-200"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-border-light rounded-lg focus:ring-2 focus:ring-text-primary/20 focus:border-text-primary outline-none transition-all duration-200"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-border-light rounded-lg focus:ring-2 focus:ring-text-primary/20 focus:border-text-primary outline-none transition-all duration-200"
                  placeholder="¿En qué puedo ayudarte?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-border-light rounded-lg focus:ring-2 focus:ring-text-primary/20 focus:border-text-primary outline-none transition-all duration-200 resize-vertical"
                  placeholder="Cuéntame sobre tu proyecto, ideas, presupuesto y plazos..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full h-12 bg-text-primary text-white font-medium rounded-lg hover:bg-gray-800 hover:-translate-y-0.5 hover:shadow-lg transform transition-all duration-300 focus-visible:outline-offset-2 focus-visible:outline focus-visible:outline-text-primary active:scale-[0.98]"
              >
                Enviar Mensaje
              </button>
            </form>

            <p className="text-xs text-text-secondary mt-4 text-center">
              Respondo todos los mensajes en menos de 24 horas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}