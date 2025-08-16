import Placeholder from './Placeholder';

export default function StripTestimonial() {
  return (
    <section className="bg-testimonial text-white py-16 md:py-20">
      <div className="mx-auto max-w-[1120px] px-6 md:px-8 text-center space-y-6">
        <div className="text-white/80 text-lg tracking-[3px]">
          ★★★★★
        </div>
        
        <blockquote className="max-w-[720px] mx-auto space-y-2">
          <p className="text-white/90 text-lg md:text-xl leading-relaxed">
            Gracias a Darío, mi marca cobró vida. Su diseño multimedia
          </p>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed">
            superó mis expectativas y su profesionalismo es incomparable.
          </p>
        </blockquote>
        
        <div className="pt-4 flex items-center justify-center gap-3">
          <Placeholder 
            label=""
            ratio="square"
            isCircular={true}
            className="w-12 h-12 flex-shrink-0"
          />
          <cite className="text-white/70 text-sm not-italic">
            Ana Ruiz
          </cite>
        </div>
      </div>
    </section>
  );
}