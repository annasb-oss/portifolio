import React from 'react';

interface HeroProps {
  onShopNow?: () => void;
  onQuickAdd?: (productId: string) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      id="hero"
      className="relative bg-[#890039] text-[#fedb3f] select-none flex flex-col items-center justify-center pt-6 sm:pt-8 md:pt-10 pb-6 sm:pb-8 md:pb-10 overflow-hidden"
    >
      {/* Banner Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center">
        
        {/* Monumental Title: ANNA SILVA - Animated with gentle staggered hop per letter */}
        <h1 className="font-hero text-[#fdebf3] uppercase font-black tracking-[-0.025em] leading-[0.88] text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[115px] xl:text-[132px] select-none text-center drop-shadow-[0_6px_16px_rgba(0,0,0,0.35)] flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 md:gap-x-8">
          <span className="inline-flex whitespace-nowrap">
            {['A', 'N', 'N', 'A'].map((letter, i) => (
              <span
                key={i}
                className="inline-block animate-letter-hop hover:-translate-y-3 transition-transform cursor-default"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                {letter}
              </span>
            ))}
          </span>

          <span className="inline-flex whitespace-nowrap">
            {['S', 'I', 'L', 'V', 'A'].map((letter, i) => (
              <span
                key={i}
                className="inline-block animate-letter-hop hover:-translate-y-3 transition-transform cursor-default"
                style={{ animationDelay: `${(i + 4) * 0.12 + 0.12}s` }}
              >
                {letter}
              </span>
            ))}
          </span>
        </h1>

        {/* Tablet Pen / Stylus Handwriting: "crio marcas ousadas" */}
        <div className="mt-2 sm:mt-3 md:mt-4 flex flex-col items-center justify-center -rotate-2 select-none group">
          <p className="font-handwriting text-2xl sm:text-3xl md:text-4xl lg:text-[44px] text-[#fedb3f] font-bold tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] transition-transform group-hover:scale-105 group-hover:-rotate-1 leading-tight">
            crio marcas ousadas
          </p>

          {/* Natural stylus stroke underline */}
          <svg
            viewBox="0 0 280 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-36 sm:w-48 md:w-60 lg:w-68 h-2.5 sm:h-3 text-[#fedb3f] mt-0.5 opacity-90 drop-shadow-sm"
          >
            <path
              d="M4 12C65 5 155 4 276 9"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

      </div>
    </section>
  );
};
