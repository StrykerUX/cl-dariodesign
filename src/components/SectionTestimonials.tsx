import Placeholder from './Placeholder';

export default function SectionTestimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Dario me ayudó a crear posts muy llamativos para mis redes sociales. Sus diseños son frescos y me han ayudado a conseguir más seguidores.",
      author: "Sofía Mendez",
      role: "Emprendedora",
      project: "Posts para Instagram",
      rating: 5,
      avatar: "https://images.pexels.com/photos/415263/pexels-photo-415263.jpeg"
    },
    {
      id: 2,
      text: "Necesitaba un logo simple para mi negocio local y Dario me hizo varias opciones geniales. Muy buena atención y precios justos.",
      author: "Miguel Torres",
      role: "Dueño de Cafetería",
      project: "Logo básico",
      rating: 4,
      avatar: "https://images.pexels.com/photos/4603528/pexels-photo-4603528.jpeg"
    },
    {
      id: 3,
      text: "Me encantó trabajar con Dario en el diseño de mis stories y posts. Tiene buenas ideas y es muy rápido entregando.",
      author: "Laura Vásquez",
      role: "Influencer",
      project: "Contenido para redes",
      rating: 5,
      avatar: "https://images.pexels.com/photos/30083656/pexels-photo-30083656.png"
    }
  ];

  return (
    <section 
      id="testimonios"
      className="py-14 md:py-24 lg:py-32"
      aria-labelledby="testimonios-heading"
    >
      <div className="mx-auto max-w-[1120px] px-4 md:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 lg:mb-20 text-center">
          <h2 id="testimonios-heading" className="text-xl md:text-2xl lg:text-3xl font-bold text-text-primary mb-4 md:mb-6 tracking-tight">
            Lo que dicen mis clientes
          </h2>
          <p className="text-sm md:text-[15px] lg:text-base leading-relaxed text-text-secondary max-w-[600px] mx-auto">
            Testimonios reales de clientes que han confiado en mis diseños para sus redes sociales y proyectos de marca.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4 md:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-sm md:text-base leading-relaxed text-text-primary mb-6 md:mb-8">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <Placeholder 
                  label={`Avatar ${testimonial.author}`}
                  ratio="square"
                  isCircular={true}
                  className="w-12 h-12 flex-shrink-0"
                  imageUrl={testimonial.avatar}
                  aria-label={`Foto de perfil de ${testimonial.author}`}
                />
                <div className="min-w-0 flex-1">
                  <cite className="font-semibold text-text-primary text-sm md:text-base not-italic">
                    {testimonial.author}
                  </cite>
                  <p className="text-text-secondary text-xs md:text-sm mt-1">
                    {testimonial.role}
                  </p>
                  <p className="text-text-secondary/80 text-xs mt-1 font-medium">
                    Proyecto: {testimonial.project}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 lg:mt-20 text-center">
          <p className="text-sm md:text-base text-text-secondary mb-6">
            ¿Listo para ser el próximo cliente satisfecho?
          </p>
          <a 
            href="https://w.app/dqzu5w"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-10 md:h-12 px-6 md:px-8 bg-text-primary text-white text-sm md:text-base font-medium rounded-full hover:bg-gray-800 hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg transform transition-all duration-300 focus-visible:outline-offset-2 focus-visible:outline focus-visible:outline-text-primary active:scale-95"
          >
            Iniciar mi Proyecto
          </a>
        </div>
      </div>
    </section>
  );
}