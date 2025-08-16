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
      className="py-32 md:py-32 sm:py-14"
    >
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="mb-16 md:mb-20 sm:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6 tracking-tight">
            Proyectos
          </h2>
          <p className="text-[15px] md:text-base leading-relaxed text-text-secondary max-w-[600px]">
            Explora mis trabajos como diseñador multimedia freelance.
          </p>
        </div>

        <div className="space-y-20 md:space-y-24 sm:space-y-16">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-x-20 md:gap-x-20 sm:gap-y-8 items-center"
            >
              <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'} sm:order-1`}>
                <Placeholder 
                  label={project.image}
                  ratio="16/9"
                  className="w-full max-w-[560px] shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
                />
              </div>
              
              <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} sm:order-2 space-y-4`}>
                <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-[15px] md:text-base leading-relaxed text-text-secondary max-w-[420px]">
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