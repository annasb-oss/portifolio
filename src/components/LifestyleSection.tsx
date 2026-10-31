import React from 'react';

export const LifestyleSection: React.FC = () => {
  return (
    <section id="campaign-visual" className="relative w-full bg-[#25320c] overflow-hidden select-none">
      
      {/* Wave Transition Overlay: Teal green (#016450) flowing seamlessly from the top hero banner */}
      <div className="absolute top-0 left-0 w-full z-20 pointer-events-none leading-none -mt-[1px]">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 block"
          preserveAspectRatio="none"
        >
          {/* Continuous organic wave curve faithfully matching ONDA_39a14299.PNG design */}
          <path
            d="M 0,-2 L 1440,-2 L 1440,78 C 1410,80 1370,84 1330,84 C 1170,32 830,32 670,84 C 480,32 160,32 0,84 Z"
            fill="#890039"
          />
        </svg>
      </div>

      {/* Full-width Editorial Portrait of Anna Silva - Head completely visible without abrupt cut */}
      <div className="relative w-full overflow-hidden flex items-center justify-center bg-[#25320c] z-10">
        <img
          src="/assets/aistudio/Retrato_elegante_com_sorriso_suave_c6ff7cf3.png"
          alt="Anna Silva - Publicidade & Propaganda"
          className="w-full h-auto max-h-[820px] object-cover object-top block"
        />

        {/* Minimal Editorial Badge overlay in the corner */}
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20">
          <div className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/20 text-[10px] sm:text-xs font-hero tracking-widest text-[#fedb3f] uppercase">
            DESIGNER DE MARCAS
          </div>
        </div>
      </div>

    </section>
  );
};

