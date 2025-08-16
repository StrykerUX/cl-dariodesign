interface PlaceholderProps {
  label?: string;
  ratio: '16/9' | '3/4' | '16/10' | 'square' | string;
  className?: string;
  isCircular?: boolean;
  'aria-label'?: string;
}

export default function Placeholder({ 
  label = "Placeholder", 
  ratio, 
  className = "", 
  isCircular = false,
  'aria-label': ariaLabel
}: PlaceholderProps) {
  const aspectClass = ratio === 'square' ? 'aspect-square' : 
                     ratio === '16/9' ? 'aspect-[16/9]' :
                     ratio === '3/4' ? 'aspect-[3/4]' :
                     ratio === '16/10' ? 'aspect-[16/10]' : 
                     `aspect-[${ratio}]`;

  const baseClasses = isCircular 
    ? "rounded-full flex items-center justify-center" 
    : "rounded-2xl flex items-center justify-center";

  return (
    <div 
      className={`
        ${aspectClass} 
        ${baseClasses}
        bg-placeholder 
        border 
        border-border-light 
        text-placeholder-text 
        font-medium 
        text-sm
        relative
        overflow-hidden
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-xl
        hover:border-text-primary/20
        cursor-pointer
        group
        ${className}
      `}
      style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 10px,
          rgba(156, 163, 175, 0.04) 10px,
          rgba(156, 163, 175, 0.04) 20px
        )`
      }}
      role="img"
      aria-label={ariaLabel || label}
    >
      <span className="z-10 px-4 text-center transition-colors duration-300 group-hover:text-text-primary/80" aria-hidden="true">
        {label}
      </span>
    </div>
  );
}