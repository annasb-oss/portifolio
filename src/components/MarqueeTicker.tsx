import React from 'react';

export const MarqueeTicker: React.FC = () => {
  // Repeated items strictly with 'PORTFOLIO' in black on yellow
  const items = Array.from({ length: 12 }, () => 'PORTFOLIO');

  return (
    <div className="relative w-full bg-[#fedb3f] text-black overflow-hidden py-2.5 sm:py-3 select-none z-20 border-y-2 border-black/20 shadow-md">
      <div className="animate-marquee flex items-center">
        {/* First Half */}
        <div className="flex items-center gap-6 sm:gap-10 whitespace-nowrap pr-6 sm:pr-10">
          {items.map((text, idx) => (
            <div key={`part1-${idx}`} className="flex items-center gap-6 sm:gap-10">
              <span className="font-hero tracking-[0.22em] text-lg sm:text-xl md:text-2xl uppercase font-black leading-none text-black">
                {text}
              </span>
              <span className="text-black/50 text-xs sm:text-sm font-black">•</span>
            </div>
          ))}
        </div>

        {/* Second Half (duplicate for seamless infinite 0% to -50% loop) */}
        <div className="flex items-center gap-6 sm:gap-10 whitespace-nowrap pr-6 sm:pr-10" aria-hidden="true">
          {items.map((text, idx) => (
            <div key={`part2-${idx}`} className="flex items-center gap-6 sm:gap-10">
              <span className="font-hero tracking-[0.22em] text-lg sm:text-xl md:text-2xl uppercase font-black leading-none text-black">
                {text}
              </span>
              <span className="text-black/50 text-xs sm:text-sm font-black">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
