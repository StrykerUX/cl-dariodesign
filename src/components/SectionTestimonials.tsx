import Placeholder from './Placeholder';

export default function SectionTestimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Gracias a Darío, mi marca cobró vida. Su diseño multimedia superó mis expectativas y su profesionalismo es incomparable.",
      author: "Ana Ruiz",
      role: "CEO, Startup Digital",
      project: "Identidad Visual Completa",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3568521/pexels-photo-3568521.jpeg"
    },
    {
      id: 2,
      text: "El sitio web que desarrolló Dario transformó completamente nuestra presencia online. Las conversiones aumentaron un 300% en el primer mes.",
      author: "Carlos Montenegro",
      role: "Director de Marketing",
      project: "Plataforma E-commerce",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3568521/pexels-photo-3568521.jpeg"
    },
    {
      id: 3,
      text: "Su capacidad para entender nuestras necesidades y traducirlas en soluciones visuales efectivas es excepcional. Altamente recomendado.",
      author: "María José García",
      role: "Fundadora",
      project: "Campaña Digital 360°",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3568521/pexels-photo-3568521.jpeg"
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
            La satisfacción de mis clientes es mi mayor logro. Cada proyecto es una oportunidad de crear algo extraordinario juntos.
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
          <button className="inline-flex items-center justify-center h-10 md:h-12 px-6 md:px-8 bg-text-primary text-white text-sm md:text-base font-medium rounded-full hover:bg-gray-800 hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg transform transition-all duration-300 focus-visible:outline-offset-2 focus-visible:outline focus-visible:outline-text-primary active:scale-95">
            Iniciar mi Proyecto
          </button>
        </div>
      </div>
    </section>
  );
}