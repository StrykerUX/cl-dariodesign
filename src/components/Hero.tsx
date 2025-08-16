import ChartPlaceholder from './ChartPlaceholder';

export default function Hero() {
  return (
    <section 
      id="inicio"
      className="relative min-h-[72vh] lg:min-h-[72vh] md:min-h-[65vh] sm:min-h-[60vh] flex items-center pt-16 md:pt-20 lg:pt-24"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-600 via-slate-500 to-slate-400">
        <ChartPlaceholder />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/40 via-slate-700/30 to-transparent" />
      
      <div className="relative z-10 mx-auto max-w-[1120px] px-4 md:px-6 lg:px-8 w-full">
        <div className="max-w-[720px] pl-4 md:pl-[clamp(24px,6vw,80px)] lg:pl-[clamp(24px,8vw,80px)] space-y-4 md:space-y-5">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-[-0.01em]">
            Portafolio de Dario<br className="hidden md:block" />
            Achirica: Diseño<br className="hidden md:block" />
            Multimedia Creativo
          </h1>
          
          <p className="text-white/80 text-base md:text-lg lg:text-xl font-medium">
            Servicios de diseño a tu medida
          </p>
          
          <button className="inline-flex items-center justify-center h-9 md:h-10 px-5 md:px-6 bg-white/96 text-text-primary text-sm font-medium rounded-full hover:bg-text-primary hover:text-white hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg transform transition-all duration-300 focus-visible:outline-offset-2 focus-visible:outline focus-visible:outline-text-primary active:scale-95">
            Ver Trabajos
          </button>
        </div>
      </div>
    </section>
  );
}