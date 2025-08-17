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
          <div className="md:order-1 order-1 space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <h2 id="sobre-mi-heading" className="text-xl md:text-2xl lg:text-3xl font-bold text-text-primary tracking-tight">
                Sobre mí
              </h2>
              
              <p className="text-sm md:text-[15px] lg:text-base leading-relaxed text-text-secondary max-w-[560px]">
                Soy un diseñador multimedia freelancer apasionado por crear soluciones visuales únicas que reflejan la esencia de mis clientes. Con años de experiencia en proyectos creativos, me especializo en desarrollar soluciones visuales efectivas que capturan la identidad de cada marca.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h3 className="text-lg md:text-xl font-semibold text-text-primary">
                Mi Experiencia
              </h3>
              
              <div className="space-y-4">
                <div className="relative pl-4">
                  <div className="absolute left-0 top-[0.5em] h-3 w-[2px] bg-text-primary" />
                  <div>
                    <h4 className="font-medium text-text-primary text-sm mb-1">
                      +5 años de experiencia
                    </h4>
                    <p className="text-xs md:text-[13px] leading-relaxed text-text-secondary">
                      Desarrollando identidades visuales y soluciones digitales para empresas de diversos sectores.
                    </p>
                  </div>
                </div>
                
                <div className="relative pl-4">
                  <div className="absolute left-0 top-[0.5em] h-3 w-[2px] bg-text-primary" />
                  <div>
                    <h4 className="font-medium text-text-primary text-sm mb-1">
                      50+ proyectos completados
                    </h4>
                    <p className="text-xs md:text-[13px] leading-relaxed text-text-secondary">
                      Desde startups hasta empresas consolidadas, siempre enfocado en resultados excepcionales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <button className="inline-flex items-center justify-center h-9 md:h-10 px-5 md:px-6 border border-border-light text-text-primary text-sm font-medium rounded-full hover:bg-text-primary hover:text-white hover:border-text-primary hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg transform transition-all duration-300 focus-visible:outline-offset-2 focus-visible:outline focus-visible:outline-text-primary active:scale-95">
              Contáctame
            </button>
          </div>
          
          <div className="md:order-2 order-2 relative">
            <Placeholder 
              label="Sobre mí - Perfil profesional"
              ratio="4/5"
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