import Placeholder from './Placeholder';
import DepthEffect from './DepthEffect';

export default function SectionPortfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: "Identidad Visual Corporativa",
      category: "Branding & Diseño",
      image: "Proyecto de identidad visual",
      imageUrl: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg"
    },
    {
      id: 2,
      title: "Plataforma E-commerce",
      category: "Desarrollo Web",
      image: "Desarrollo e-commerce",
      imageUrl: "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg"
    },
    {
      id: 3,
      title: "Campaña Digital 360°",
      category: "Marketing Digital",
      image: "Campaña digital integral",
      imageUrl: "https://images.pexels.com/photos/3568521/pexels-photo-3568521.jpeg"
    },
    {
      id: 4,
      title: "App Móvil Corporativa",
      category: "UX/UI Design",
      image: "Diseño app móvil",
      imageUrl: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg"
    }
  ];

  return (
    <section 
      id="portafolio"
      className="py-14 md:py-24 lg:py-32 bg-gray-50"
      aria-labelledby="portafolio-heading"
    >
      <div className="mx-auto max-w-[1120px] px-4 md:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 lg:mb-20 text-center">
          <DepthEffect type="heading" parallaxSpeed={0.1}>
            <h2 id="portafolio-heading" className="text-xl md:text-2xl lg:text-3xl font-bold text-text-primary mb-4 md:mb-6 tracking-tight">
              Portafolio
            </h2>
          </DepthEffect>
          <DepthEffect type="text" parallaxSpeed={0.2}>
            <p className="text-sm md:text-[15px] lg:text-base leading-relaxed text-text-secondary max-w-[600px] mx-auto">
              Una selección de proyectos destacados que muestran mi experiencia en diseño multimedia y desarrollo digital.
            </p>
          </DepthEffect>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {portfolioItems.map((item) => (
            <DepthEffect 
              key={item.id}
              type="image" 
              parallaxSpeed={0.25 + (item.id * 0.05)}
              className="group cursor-pointer"
            >
              <div className="relative mb-4 md:mb-6">
                <Placeholder 
                  label={item.image}
                  ratio="16/10"
                  className="w-full shadow-[0_12px_40px_rgba(0,0,0,0.08)] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-300"
                  aria-label={`Imagen del proyecto: ${item.title}`}
                  imageUrl={item.imageUrl}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-2xl"></div>
              </div>
              
              <div className="space-y-2">
                <span className="text-xs md:text-sm font-medium text-text-secondary uppercase tracking-wide">
                  {item.category}
                </span>
                <h3 className="text-lg md:text-xl font-semibold text-text-primary group-hover:text-text-primary/80 transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            </DepthEffect>
          ))}
        </div>

      </div>
    </section>
  );
}