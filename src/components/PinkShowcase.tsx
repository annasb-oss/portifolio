import React from 'react';

export const PinkShowcase: React.FC = () => {
  return (
    <section id="about-me" className="relative w-full bg-[#890039] text-white py-16 sm:py-24 overflow-hidden select-none border-y-2 border-black/20">
      
      {/* Giant Background Typography: "SOBRE MIM" */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-90">
        <div className="font-hero text-white/15 sm:text-white/20 uppercase text-[26vw] sm:text-[22vw] whitespace-nowrap leading-none select-none tracking-tight">
          SOBRE MIM
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center justify-center text-center">
        


        {/* Section Heading */}
        <h2 className="font-hero text-5xl sm:text-7xl lg:text-8xl text-white uppercase tracking-tight leading-[0.85] drop-shadow-md">
          SOBRE <span className="text-[#fedb3f]">MIM</span>
        </h2>

        {/* Sincere statement expressing deep love for Publicidade e Propaganda */}
        <div className="mt-8 max-w-3xl space-y-4">
          <p className="text-xl sm:text-3xl text-white font-hero tracking-wide uppercase leading-tight drop-shadow-sm text-balance">
            “Adoro o universo da <span className="text-[#fedb3f]">Publicidade e Propaganda</span>: o poder de transformar ideias em histórias inesquecíveis e conectar marcas a pessoas com emoção e impacto.”
          </p>
          
          <p className="text-sm sm:text-base text-white/90 font-medium leading-relaxed max-w-2xl mx-auto">
            Sou fascinada pela direção de arte, pelo pensamento estratégico e pela criação de conceitos visuais autênticos. Minha missão é traduzir a essência de cada projeto em campanhas que geram identificação genuína e relevância cultural.
          </p>
        </div>

        {/* Pillars / Competências */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-2xl">
          {[
            'DIREÇÃO DE ARTE',
            'CRIAÇÃO DE CAMPANHAS',
            'BRANDING & IDENTIDADE',
            'ESTRATÉGIA VISUAL',
            'STORYTELLING PUBLICITÁRIO',
            'CONCEITO CRIATIVO'
          ].map((tag, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1.5 bg-black/25 backdrop-blur-sm rounded-lg text-xs font-hero tracking-widest uppercase border border-white/30 text-white hover:border-[#fedb3f] hover:text-[#fedb3f] transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>

    </section>
  );
};
