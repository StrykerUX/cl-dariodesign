import Image from 'next/image';
import DepthEffect from './DepthEffect';

export default function SectionPortfolio() {
  const galleryImages = [
    {
      id: 1,
      url: "https://storage.novalabss.app/u/Propuesta%203.jpg",
      alt: "Propuesta de diseño 3"
    },
    {
      id: 2,
      url: "https://storage.novalabss.app/u/Logo%20Capture%20a%20color.jpg",
      alt: "Logo Capture a color"
    },
    {
      id: 3,
      url: "https://storage.novalabss.app/u/Propuesta%201.jpg",
      alt: "Propuesta de diseño 1"
    },
    {
      id: 4,
      url: "https://storage.novalabss.app/u/Post%20E6.jpg",
      alt: "Post E6"
    },
    {
      id: 5,
      url: "https://storage.novalabss.app/u/Sorteo%20E6WIFI-2.jpeg",
      alt: "Sorteo E6WIFI"
    },
    {
      id: 6,
      url: "https://storage.novalabss.app/u/Post%20A6F.jpg",
      alt: "Post A6F"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {galleryImages.map((image, index) => (
            <DepthEffect 
              key={image.id}
              type="image" 
              parallaxSpeed={0.25 + (index * 0.05)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-300">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
            </DepthEffect>
          ))}
        </div>

      </div>
    </section>
  );
}