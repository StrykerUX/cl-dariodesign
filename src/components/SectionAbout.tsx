import Placeholder from './Placeholder';

export default function SectionAbout() {
  return (
    <section 
      id="sobre-mi"
      className="py-32 md:py-32 sm:py-14"
    >
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-x-20 md:gap-x-20 sm:gap-y-12 items-center">
          <div className="md:order-1 sm:order-1 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight">
              Sobre mí
            </h2>
            
            <p className="text-[15px] md:text-base leading-relaxed text-text-secondary max-w-[560px]">
              Soy un diseñador multimedia freelancer apasionado por crear soluciones visuales únicas que reflejan la esencia de mis clientes. Aquí encontrarás mi portafolio y servicios disponibles.
            </p>
            
            <button className="inline-flex items-center justify-center h-10 px-6 border border-border-light text-text-primary text-sm font-medium rounded-full hover:bg-text-primary hover:text-white hover:border-text-primary transition-all duration-150 focus-visible:outline-offset-2 focus-visible:outline focus-visible:outline-text-primary">
              Contáctame
            </button>
          </div>
          
          <div className="md:order-2 sm:order-2 relative">
            <Placeholder 
              label="About 864×540"
              ratio="16/10"
              className="w-full max-w-[540px] shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
            />
            
            <div className="absolute left-6 bottom-6 bg-white/95 border border-border-light rounded-xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.06)] max-w-[240px]">
              <p className="font-semibold text-text-primary text-sm mb-1">
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