import Placeholder from './Placeholder';

export default function SectionServices() {
  const services = [
    {
      id: 1,
      title: "Diseño Gráfico & Visual",
      description: "Creación de identidades visuales, branding, materiales promocionales y diseños gráficos que comunican efectivamente tu mensaje y fortalecen tu marca.",
      image: "Diseño gráfico profesional",
      imageUrl: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg"
    },
    {
      id: 2,
      title: "Desarrollo Web & Digital",
      description: "Desarrollo de sitios web modernos, responsive y optimizados. Desde landing pages hasta plataformas complejas, siempre enfocado en la experiencia del usuario.",
      image: "Desarrollo web y digital",
      imageUrl: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg"
    },
    {
      id: 3,
      title: "Consultoría Multimedia",
      description: "Asesoramiento estratégico en comunicación visual, optimización de contenidos digitales y soluciones multimedia integrales para tu negocio.",
      image: "Consultoría multimedia",
      imageUrl: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg"
    }
  ];

  return (
    <section 
      id="servicios"
      className="py-14 md:py-24 lg:py-32"
      aria-labelledby="servicios-heading"
    >
      <div className="mx-auto max-w-[1120px] px-4 md:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 lg:mb-20">
          <h2 id="servicios-heading" className="text-xl md:text-2xl lg:text-3xl font-bold text-text-primary mb-4 md:mb-6 tracking-tight">
            Servicios
          </h2>
          <p className="text-sm md:text-[15px] lg:text-base leading-relaxed text-text-secondary max-w-[600px]">
            Soluciones creativas y tecnológicas diseñadas específicamente para potenciar tu presencia digital y comunicación visual.
          </p>
        </div>

        <div className="space-y-16 md:space-y-20 lg:space-y-24">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="grid md:grid-cols-2 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-y-6 md:gap-x-10 lg:gap-x-20 items-center"
            >
              <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'} order-1`}>
                <Placeholder 
                  label={service.image}
                  ratio="16/9"
                  className="w-full max-w-[560px] shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
                  aria-label={`Imagen representativa del servicio: ${service.title}`}
                  imageUrl={service.imageUrl}
                />
              </div>
              
              <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} order-2 space-y-3 md:space-y-4`}>
                <h3 className="text-lg md:text-xl font-semibold text-text-primary">
                  {service.title}
                </h3>
                <p className="text-sm md:text-[15px] lg:text-base leading-relaxed text-text-secondary max-w-[420px]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}