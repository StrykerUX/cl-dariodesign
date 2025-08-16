import Placeholder from './Placeholder';

export default function SectionExperience() {
  const workItems = [
    {
      title: "Proyectos Destacados",
      description: "Aquí encontrarás una selección de mis trabajos más relevantes y creativos."
    },
    {
      title: "Servicios Ofrecidos", 
      description: "Experiencia. With our intuitive design and user-friendly interface, your website will captivate visitors."
    }
  ];

  return (
    <section 
      id="experiencia"
      className="py-14 md:py-24 lg:py-32"
      aria-labelledby="experiencia-heading"
    >
      <div className="mx-auto max-w-[1120px] px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-y-8 md:gap-x-10 lg:gap-x-20 items-start">
          <div className="md:order-1 order-2">
            <Placeholder 
              label="Experience 840×1120"
              ratio="3/4"
              className="w-full max-w-[520px] shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
              aria-label="Imagen representativa de experiencia profesional"
            />
          </div>
          
          <div className="md:order-2 order-1 space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <h2 id="experiencia-heading" className="text-xl md:text-2xl lg:text-3xl font-bold text-text-primary tracking-tight">
                Experiencia Profesional
              </h2>
              <p className="text-sm md:text-[15px] lg:text-base leading-relaxed text-text-secondary max-w-[560px]">
                Soy un diseñador multimedia con experiencia en proyectos creativos y soluciones visuales efectivas que capturan la esencia de cada cliente.
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              <h3 className="text-lg md:text-xl font-semibold text-text-primary">
                Trabajo
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                {workItems.map((item, index) => (
                  <div key={index} className="relative pl-4">
                    <div className="absolute left-0 top-[0.5em] h-3 w-[2px] bg-border-light" />
                    <div>
                      <h4 className="font-medium text-text-primary text-sm mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs md:text-[13px] leading-relaxed text-text-secondary">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}