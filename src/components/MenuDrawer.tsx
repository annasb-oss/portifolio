import React from 'react';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/65 backdrop-blur-sm select-none animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-sm bg-[#890039] text-[#fedb3f] h-full shadow-2xl flex flex-col justify-between border-l-4 border-black/30 z-10 p-6 overflow-y-auto">
        
        {/* Header do Menu */}
        <div>
          <div className="flex items-center justify-between pb-5 border-b border-white/10">
            <div>
              <span className="font-hero text-2xl tracking-wider text-[#fedb3f] block">
                ANNA SILVA
              </span>
              <span className="text-[10px] font-hero tracking-widest text-white/70 uppercase">
                DESIGNER DE MARCAS
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-black/30 hover:bg-black/60 flex items-center justify-center text-sm font-bold cursor-pointer text-white transition-colors"
              aria-label="Fechar Menu"
            >
              ✕
            </button>
          </div>

          {/* Links de Navegação em Português */}
          <div className="py-8 space-y-6 font-hero text-3xl sm:text-4xl uppercase tracking-wider">
            <div>
              <button
                onClick={() => { onNavigate('hero'); onClose(); }}
                className="hover:text-white transition-colors cursor-pointer block text-left"
              >
                INÍCIO
              </button>
            </div>
            <div>
              <button
                onClick={() => { onNavigate('campaign-visual'); onClose(); }}
                className="hover:text-white transition-colors cursor-pointer block text-left"
              >
                DIREÇÃO VISUAL
              </button>
            </div>
            <div>
              <button
                onClick={() => { onNavigate('about-me'); onClose(); }}
                className="hover:text-white transition-colors cursor-pointer block text-left"
              >
                SOBRE MIM
              </button>
            </div>
            <div>
              <button
                onClick={() => { onNavigate('campaigns'); onClose(); }}
                className="hover:text-white transition-colors cursor-pointer block text-left text-[#fedb3f]"
              >
                GALERIA DE DESIGN
              </button>
            </div>
          </div>
        </div>

        {/* Botão Direto para o WhatsApp */}
        <div className="pt-6 border-t border-white/10">
          <a
            href="https://wa.me/5518996301737?text=Oii%20Anna%2C%20vim%20direto%20do%20teu%20site"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 py-4 px-5 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-hero text-lg sm:text-xl tracking-wider uppercase shadow-xl transition-all hover:scale-[1.02] cursor-pointer"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.44C8.94 7.44 8.68 7.5 8.46 7.74C8.24 7.97 7.6 8.57 7.6 9.8C7.6 11.03 8.5 12.21 8.63 12.38C8.75 12.56 10.38 15.07 12.87 16.15C13.47 16.41 13.93 16.57 14.29 16.68C14.9 16.87 15.45 16.85 15.89 16.78C16.38 16.71 17.4 16.16 17.62 15.55C17.83 14.94 17.83 14.41 17.77 14.31C17.71 14.2 17.54 14.14 17.29 14.01C17.03 13.89 15.77 13.27 15.54 13.18C15.3 13.09 15.13 13.05 14.96 13.3C14.79 13.54 14.32 14.1 14.17 14.27C14.03 14.44 13.88 14.46 13.63 14.34C13.37 14.21 12.55 13.94 11.58 13.08C10.82 12.4 10.31 11.57 10.16 11.31C10.02 11.06 10.15 10.92 10.27 10.8C10.38 10.69 10.52 10.51 10.65 10.36C10.78 10.22 10.82 10.11 10.91 9.94C11 9.77 10.95 9.62 10.89 9.5C10.83 9.38 10.31 8.1 10.1 7.58C9.9 7.07 9.69 7.14 9.53 7.13C9.38 7.13 9.21 7.13 9.04 7.13L9.11 7.44Z" />
            </svg>
            <span>FALAR NO WHATSAPP</span>
          </a>
          <div className="text-center mt-3 text-xs text-white/70 font-medium">
            (18) 99630-1737 • Mensagem instantânea
          </div>
          <div className="mt-4 pt-3 border-t border-white/10 text-[10px] font-hero tracking-widest text-[#fedb3f] uppercase text-center">
            PUBLICIDADE & PROPAGANDA // 2026
          </div>
        </div>

      </div>
    </div>
  );
};
