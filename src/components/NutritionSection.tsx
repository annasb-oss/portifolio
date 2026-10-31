import React from 'react';

export const NutritionSection: React.FC = () => {
  return (
    <section id="nutrition" className="relative bg-[#033b31] text-white py-16 sm:py-24 border-t-2 border-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[#fde01a] text-xs font-black tracking-widest uppercase mb-2">
            <span>✦</span>
            <span>NUTRIÇÃO SEM MISTÉRIO</span>
            <span>✦</span>
          </div>
          <h2 className="font-condensed font-black text-5xl sm:text-7xl uppercase tracking-tight text-white leading-none">
            POR QUE <span className="text-[#fde01a]">ANNA SILVA</span> É DIFERENTE?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/80">
            A levedura nutricional tradicional tem sabor neutro ou amargo. Anna Silva é cuidadosamente cultivada e combinada com temperos artesanais no ponto exato para criar um perfil umami salgadinho e viciante.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-[#055848] rounded-3xl border-2 border-white/10 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-black/20 text-xs sm:text-sm font-black tracking-widest uppercase">
                  <th className="p-4 sm:p-6 text-white/70">Atributo</th>
                  <th className="p-4 sm:p-6 text-[#fde01a] bg-[#fde01a]/10 font-black">
                    ★ ANNA SILVA CO.
                  </th>
                  <th className="p-4 sm:p-6 text-white/60">Parmesão Tradicional</th>
                  <th className="p-4 sm:p-6 text-white/60">Levedura Comum Granel</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-xs sm:text-sm font-medium">
                <tr>
                  <td className="p-4 sm:p-6 font-bold text-white">Sabor & Intensidade</td>
                  <td className="p-4 sm:p-6 font-black text-[#fde01a] bg-[#fde01a]/5">
                    Queijo maturado pronunciado ou bacon defumado crocante
                  </td>
                  <td className="p-4 sm:p-6 text-white/70">Gorduroso, forte</td>
                  <td className="p-4 sm:p-6 text-white/50">Neutro, levemente amargo</td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-6 font-bold text-white">Lactose & Derivados de Leite</td>
                  <td className="p-4 sm:p-6 font-black text-[#fde01a] bg-[#fde01a]/5">
                    0% (100% Plant-Based & Vegan)
                  </td>
                  <td className="p-4 sm:p-6 text-red-300">Alto teor lácteo</td>
                  <td className="p-4 sm:p-6 text-white/70">0%</td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-6 font-bold text-white">Vitamina B12 Ativa</td>
                  <td className="p-4 sm:p-6 font-black text-[#fde01a] bg-[#fde01a]/5">
                    240% da dose diária por porção
                  </td>
                  <td className="p-4 sm:p-6 text-white/70">Baixo / residual</td>
                  <td className="p-4 sm:p-6 text-white/70">Varia conforme a marca</td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-6 font-bold text-white">Proteína Vegetal</td>
                  <td className="p-4 sm:p-6 font-black text-[#fde01a] bg-[#fde01a]/5">
                    8.4g de proteína completa por colher
                  </td>
                  <td className="p-4 sm:p-6 text-white/70">7g (com colesterol)</td>
                  <td className="p-4 sm:p-6 text-white/70">5g a 7g</td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-6 font-bold text-white">Glúten & Alérgenos</td>
                  <td className="p-4 sm:p-6 font-black text-[#fde01a] bg-[#fde01a]/5">
                    Zero glúten, sem soja, sem nozes
                  </td>
                  <td className="p-4 sm:p-6 text-white/70">Sem glúten</td>
                  <td className="p-4 sm:p-6 text-white/70">Risco de contaminação cruzada</td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-6 font-bold text-white">Validade Fechado</td>
                  <td className="p-4 sm:p-6 font-black text-[#fde01a] bg-[#fde01a]/5">
                    18 meses em temperatura ambiente
                  </td>
                  <td className="p-4 sm:p-6 text-white/70">Requer refrigeração estrita</td>
                  <td className="p-4 sm:p-6 text-white/70">12 meses</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Fun quote banner */}
        <div className="mt-12 text-center p-6 bg-black/20 rounded-2xl border border-white/10 max-w-2xl mx-auto">
          <p className="text-base sm:text-lg font-condensed font-black tracking-wide text-[#fde01a] uppercase">
            “Não é apenas um tempero. É o segredo para transformar pratos simples em refeições dignas de restaurante sem culpa.”
          </p>
          <span className="block mt-2 text-xs text-white/60 uppercase tracking-widest font-bold">
            — Equipe de P&D Anna Silva Co.
          </span>
        </div>

      </div>
    </section>
  );
};
