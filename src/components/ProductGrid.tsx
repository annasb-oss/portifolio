import React, { useState } from 'react';

interface ArtItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  title: string;
}

const GALLERY_ITEMS: ArtItem[] = [
  {
    id: 'ana-franz',
    type: 'image',
    src: '/assets/aistudio/WhatsApp_Image_2026-10-31_at_15.54.53_91e60b69.jpeg',
    title: 'Ana Franz'
  },
  {
    id: 'bella-box',
    type: 'image',
    src: '/assets/aistudio/WhatsApp_Image_2026-10-31_at_15.53.31__1__c34f079b.jpeg',
    title: 'Bella Rações - Box'
  },
  {
    id: 'bella-pouch',
    type: 'image',
    src: '/assets/aistudio/WhatsApp_Image_2026-10-31_at_15.53.31_5a051cf2.jpeg',
    title: 'Bella Rações - Pouch'
  },
  {
    id: 'video-manifesto',
    type: 'video',
    src: '/assets/aistudio/WhatsApp_Video_2026-10-31_at_15.54.52_dd978c31.mp4',
    title: 'Apresentação em Vídeo'
  },
  {
    id: 'informativo',
    type: 'image',
    src: '/assets/aistudio/WhatsApp_Image_2026-10-31_at_15.54.50_139abffc.jpeg',
    title: 'Informativo'
  },
  {
    id: 'bella-logo',
    type: 'image',
    src: '/assets/aistudio/WhatsApp_Image_2026-10-31_at_15.56.35_2f9de223.jpeg',
    title: 'Bella Rações - Logo'
  }
];

interface ProductGridProps {
  onSelectProject?: (projectId: string) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = () => {
  const [selectedItem, setSelectedItem] = useState<ArtItem | null>(null);

  return (
    <section id="campaigns" className="relative bg-[#25320c] text-white py-14 sm:py-20 border-t-2 border-black/20 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with requested subtitle in white */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="font-hero text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-[#fedb3f] leading-none drop-shadow-md">
            GALERIA DE DESIGN
          </h2>
          <p className="mt-2 sm:mt-3 font-handwriting text-2xl sm:text-3xl md:text-4xl text-white font-bold tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] -rotate-1 select-none">
            veja um pouquinho dos meus projetos anteriores
          </p>
        </div>

        {/* Clean Artworks Grid - Pristine visual presentation without yellow hover border */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="bg-[#1c2609] rounded-3xl p-3 sm:p-4 border-2 border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-center items-center group shadow-xl hover:-translate-y-1.5 cursor-pointer overflow-hidden"
            >
              {/* Artwork Container - Pure visuals without alteration */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-black/30 flex items-center justify-center">
                {item.type === 'video' ? (
                  <div className="relative w-full aspect-[9/16] max-h-[500px] bg-black flex items-center justify-center">
                    <video
                      src={item.src}
                      playsInline
                      muted
                      loop
                      autoPlay
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors pointer-events-none flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#fedb3f]/90 text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full aspect-[4/5] sm:aspect-[1/1] md:aspect-[4/5] bg-black/20 flex items-center justify-center p-2">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Subtle zoom indicator on hover */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-hero tracking-widest text-white uppercase">
                  AMPLIAR ↗
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full-screen Lightbox Modal for 100% Unaltered High-Res View */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#1c2609] text-white rounded-3xl border-2 border-white/20 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-black/30">
              <span className="font-hero text-xl text-white uppercase tracking-wider">
                GALERIA DE DESIGN // ANNA SILVA
              </span>
              <button
                onClick={() => setSelectedItem(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-bold cursor-pointer transition-colors"
                aria-label="Fechar"
              >
                ✕
              </button>
            </div>

            {/* Modal Media Body */}
            <div className="flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-black/50">
              {selectedItem.type === 'video' ? (
                <div className="w-full max-w-md aspect-[9/16] max-h-[72vh] flex items-center justify-center">
                  <video
                    src={selectedItem.src}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain rounded-xl shadow-2xl"
                  />
                </div>
              ) : (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="max-w-full max-h-[72vh] object-contain rounded-xl shadow-2xl"
                />
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-3.5 bg-black/40 border-t border-white/10 flex items-center justify-end">
              <button
                onClick={() => setSelectedItem(null)}
                className="px-5 py-2 bg-[#fedb3f] hover:bg-yellow-300 text-black font-hero text-sm tracking-wider uppercase rounded-xl transition-all font-black cursor-pointer"
              >
                FECHAR
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
