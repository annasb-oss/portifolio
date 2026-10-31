import React from 'react';

interface HeaderProps {
  onOpenMenu: () => void;
  onOpenProjects?: () => void;
  projectCount?: number;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMenu }) => {
  return (
    <header className="w-full bg-[#890039] text-[#fedb3f] px-4 sm:px-8 pt-4 pb-2 flex items-center justify-between select-none z-30">
      
      {/* Left side empty: no logo next to ANNA SILVA title */}
      <div className="w-10"></div>

      {/* Top Right: WhatsApp Direct Contact & Clean Menu in Portuguese */}
      <div className="flex items-center gap-3">
        <a
          href="https://wa.me/5518996301737?text=Oii%20Anna%2C%20vim%20direto%20do%20teu%20site"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-hero text-sm sm:text-base tracking-wider uppercase transition-all shadow-md hover:scale-105 cursor-pointer"
          title="Falar no WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.44C8.94 7.44 8.68 7.5 8.46 7.74C8.24 7.97 7.6 8.57 7.6 9.8C7.6 11.03 8.5 12.21 8.63 12.38C8.75 12.56 10.38 15.07 12.87 16.15C13.47 16.41 13.93 16.57 14.29 16.68C14.9 16.87 15.45 16.85 15.89 16.78C16.38 16.71 17.4 16.16 17.62 15.55C17.83 14.94 17.83 14.41 17.77 14.31C17.71 14.2 17.54 14.14 17.29 14.01C17.03 13.89 15.77 13.27 15.54 13.18C15.3 13.09 15.13 13.05 14.96 13.3C14.79 13.54 14.32 14.1 14.17 14.27C14.03 14.44 13.88 14.46 13.63 14.34C13.37 14.21 12.55 13.94 11.58 13.08C10.82 12.4 10.31 11.57 10.16 11.31C10.02 11.06 10.15 10.92 10.27 10.8C10.38 10.69 10.52 10.51 10.65 10.36C10.78 10.22 10.82 10.11 10.91 9.94C11 9.77 10.95 9.62 10.89 9.5C10.83 9.38 10.31 8.1 10.1 7.58C9.9 7.07 9.69 7.14 9.53 7.13C9.38 7.13 9.21 7.13 9.04 7.13L9.11 7.44Z" />
          </svg>
          <span>WHATSAPP</span>
        </a>

        <button
          onClick={onOpenMenu}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[#fedb3f] hover:text-white hover:bg-white/10 transition-all cursor-pointer group"
          aria-label="Abrir Menu"
          title="Abrir Menu"
        >
          <span className="font-hero text-lg sm:text-xl tracking-wider uppercase leading-none">
            MENU
          </span>
          <div className="flex flex-col gap-1 w-5 justify-center items-end">
            <span className="w-5 h-[2px] bg-current rounded-full transition-all group-hover:w-5"></span>
            <span className="w-3.5 h-[2px] bg-current rounded-full transition-all group-hover:w-5"></span>
            <span className="w-5 h-[2px] bg-current rounded-full transition-all group-hover:w-5"></span>
          </div>
        </button>
      </div>

    </header>
  );
};

