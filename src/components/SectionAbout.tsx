import Placeholder from './Placeholder';

export default function SectionAbout() {
  return (
    <section 
      id="sobre-mi"
      className="py-14 md:py-24 lg:py-32"
      aria-labelledby="sobre-mi-heading"
    >
      <div className="mx-auto max-w-[1120px] px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
          <div className="md:order-1 order-1 space-y-4 md:space-y-6">
            <h2 id="sobre-mi-heading" className="text-xl md:text-2xl lg:text-3xl font-bold text-text-primary tracking-tight">
              Sobre mí
            </h2>
            
            <p className="text-sm md:text-[15px] lg:text-base leading-relaxed text-text-secondary max-w-[560px]">
              Soy un diseñador multimedia freelancer apasionado por crear soluciones visuales únicas que reflejan la esencia de mis clientes. Aquí encontrarás mi portafolio y servicios disponibles.
            </p>
            
            <button className="inline-flex items-center justify-center h-9 md:h-10 px-5 md:px-6 border border-border-light text-text-primary text-sm font-medium rounded-full hover:bg-text-primary hover:text-white hover:border-text-primary hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg transform transition-all duration-300 focus-visible:outline-offset-2 focus-visible:outline focus-visible:outline-text-primary active:scale-95">
              Contáctame
            </button>
          </div>
          
          <div className="md:order-2 order-2 relative">
            <Placeholder 
              label="Sobre mí - Perfil profesional"
              ratio="16/10"
              className="w-full max-w-[540px] shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
              aria-label="Imagen del perfil profesional de Dario Achirica"
              imageUrl="https://images.pexels.com/photos/3568521/pexels-photo-3568521.jpeg"
            />
            
            <div className="absolute left-4 md:left-6 bottom-4 md:bottom-6 bg-white/95 border border-border-light rounded-xl p-3 md:p-4 shadow-[0_10px_30px_rgba(0,0,0,0.06)] max-w-[200px] md:max-w-[240px]">
              <p className="font-semibold text-text-primary text-xs md:text-sm mb-1">
                Trabajo excepcional y creativo.
              </p>
              <p className="text-text-secondary text-xs">
                Cliente Satisfecho.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}