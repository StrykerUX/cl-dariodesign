export default function ChartPlaceholder() {
  return (
    <div className="absolute inset-0 w-full h-full flex items-end justify-center pb-16 opacity-20">
      <div className="flex items-end gap-2 md:gap-4">
        <div className="w-8 md:w-12 h-32 md:h-48 bg-teal-400 rounded-t"></div>
        <div className="w-8 md:w-12 h-24 md:h-36 bg-red-400 rounded-t"></div>
        <div className="w-8 md:w-12 h-40 md:h-56 bg-teal-400 rounded-t"></div>
        <div className="w-8 md:w-12 h-28 md:h-40 bg-red-400 rounded-t"></div>
        <div className="w-8 md:w-12 h-36 md:h-52 bg-teal-400 rounded-t"></div>
        <div className="w-8 md:w-12 h-20 md:h-32 bg-red-400 rounded-t"></div>
      </div>
    </div>
  );
}