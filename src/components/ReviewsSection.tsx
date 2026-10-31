import React from 'react';

export const ReviewsSection: React.FC = () => {
  const awards = [
    { title: 'CANNES LIONS', category: 'BRONZE // DESIGN & PACKAGING' },
    { title: 'D&AD PENCILS', category: 'WOOD PENCIL // ART DIRECTION' },
    { title: 'CLIO AWARDS', category: 'SILVER // BRAND IDENTITY' },
    { title: 'EFFIE BRASIL', category: 'GOLD // CREATIVE EFFECTIVENESS' }
  ];

  return (
    <section id="recognition" className="relative bg-[#5a0025] text-white py-12 sm:py-16 border-t-2 border-black/20 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimal Recognition Cards - Without long text */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {awards.map((award, i) => (
            <div
              key={i}
              className="bg-[#890039] p-4 sm:p-6 rounded-2xl border border-white/10 text-center flex flex-col justify-center items-center hover:border-[#fedb3f]/50 transition-colors"
            >
              <h4 className="font-hero text-xl sm:text-2xl text-white uppercase tracking-wider leading-none">
                {award.title}
              </h4>
              <div className="text-[9px] sm:text-[10px] font-bold text-[#fedb3f] uppercase tracking-widest mt-1">
                {award.category}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
