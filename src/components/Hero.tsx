import Placeholder from './Placeholder';

export default function Hero() {
  return (
    <section 
      id="inicio"
      className="relative min-h-[72vh] md:min-h-[72vh] sm:min-h-[60vh] flex items-center pt-24 md:pt-28"
    >
      <Placeholder 
        label="Hero Background 1920×1080"
        ratio="16/9"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-transparent" />
      
      <div className="relative z-10 mx-auto max-w-[1120px] px-6 md:px-8 w-full">
        <div className="max-w-[720px] pl-[clamp(24px,8vw,80px)] space-y-5">
          <h1 className="font-bold text-5xl md:text-5xl sm:text-3xl text-white leading-tight tracking-[-0.01em]">
            Portafolio de Dario<br className="hidden md:block" />
            Achirica: Diseño<br className="hidden md:block" />
            Multimedia Creativo
          </h1>
          
          <p className="text-white/80 text-lg md:text-xl sm:text-base font-medium">
            Servicios de diseño a tu medida
          </p>
          
          <button className="inline-flex items-center justify-center h-10 px-6 bg-white/96 text-text-primary text-sm font-medium rounded-full hover:bg-text-primary hover:text-white transition-all duration-150 focus-visible:outline-offset-2 focus-visible:outline focus-visible:outline-text-primary">
            Ver Trabajos
          </button>
        </div>
      </div>
    </section>
  );
}