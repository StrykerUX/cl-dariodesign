import Placeholder from './Placeholder';

export default function SectionProjects() {
  const projects = [
    {
      id: 1,
      title: "Diseño gráfico",
      description: "Aquí encontrarás ejemplos de mis proyectos de diseño gráfico, donde combino creatividad y técnica para ofrecer soluciones visuales impactantes.",
      image: "Placeholder 1280×720"
    },
    {
      id: 2,
      title: "Desarrollo web",
      description: "Mira mis proyectos de desarrollo web, donde diseño páginas atractivas y funcionales que destacan los servicios que ofrezco como freelancer.",
      image: "Placeholder 1280×720"
    }
  ];

  return (
    <section 
      id="proyectos"
      className="py-14 md:py-24 lg:py-32"
      aria-labelledby="proyectos-heading"
    >
      <div className="mx-auto max-w-[1120px] px-4 md:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 lg:mb-20">
          <h2 id="proyectos-heading" className="text-xl md:text-2xl lg:text-3xl font-bold text-text-primary mb-4 md:mb-6 tracking-tight">
            Proyectos
          </h2>
          <p className="text-sm md:text-[15px] lg:text-base leading-relaxed text-text-secondary max-w-[600px]">
            Explora mis trabajos como diseñador multimedia freelance.
          </p>
        </div>

        <div className="space-y-16 md:space-y-20 lg:space-y-24">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="grid md:grid-cols-2 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-y-6 md:gap-x-10 lg:gap-x-20 items-center"
            >
              <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'} order-1`}>
                <Placeholder 
                  label={project.image}
                  ratio="16/9"
                  className="w-full max-w-[560px] shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
                  aria-label={`Imagen de ejemplo del proyecto: ${project.title}`}
                />
              </div>
              
              <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} order-2 space-y-3 md:space-y-4`}>
                <h3 className="text-lg md:text-xl font-semibold text-text-primary">
                  {project.title}
                </h3>
                <p className="text-sm md:text-[15px] lg:text-base leading-relaxed text-text-secondary max-w-[420px]">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}