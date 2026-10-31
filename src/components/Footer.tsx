import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#48001d] text-white pt-10 pb-8 border-t-2 border-black/20 select-none">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimal Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <span className="font-hero text-2xl text-[#fedb3f] tracking-wide">
              ANNA SILVA — PUBLICIDADE & PROPAGANDA
            </span>
          </div>

          <div className="flex items-center gap-6 font-hero text-sm tracking-widest text-white/80 uppercase">
            <span>ART DIRECTION</span>
            <span>•</span>
            <span>BRANDING</span>
            <span>•</span>
            <span>CAMPAIGNS</span>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-white/50 tracking-wider">
          <div>
            © {new Date().getFullYear()} ANNA SILVA. ALL RIGHTS RESERVED.
          </div>
          <div>
            PORTFOLIO // PUBLICIDADE & PROPAGANDA
          </div>
        </div>

      </div>
    </footer>
  );
};

