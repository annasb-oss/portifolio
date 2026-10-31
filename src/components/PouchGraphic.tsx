import React from 'react';

interface PouchProps {
  color?: string; // card primary color e.g. #065c4c or #df0b76
  textColor?: string;
  flavorTitle: string;
  subtitle?: string;
  variant?: 'green' | 'pink' | 'blue' | 'orange';
  className?: string;
  badgeText?: string;
  rotation?: number; // degrees
  shadow?: boolean;
}

export const PouchGraphic: React.FC<PouchProps> = ({
  color = '#065c4c',
  textColor = '#fde01a',
  flavorTitle = 'CREATIVE CAMPAIGN ANNA SILVA',
  subtitle = 'ART DIRECTION & INTEGRATED CONCEPT',
  className = '',
  badgeText,
  rotation = 0,
  shadow = true
}) => {
  return (
    <div
      style={{
        transform: rotation ? `rotate(${rotation}deg)` : undefined,
        transformOrigin: 'center center'
      }}
      className={`relative inline-block transition-transform duration-300 hover:scale-105 select-none ${className}`}
    >
      {/* Editorial Card Container - Clean advertising design without cartoon doodles */}
      <div
        className={`relative w-56 sm:w-64 md:w-72 rounded-3xl p-6 pt-7 pb-6 flex flex-col items-center justify-between overflow-hidden border-2 border-black/20 ${
          shadow ? 'shadow-[0_25px_40px_-15px_rgba(0,0,0,0.5)]' : ''
        }`}
        style={{
          backgroundColor: color,
          color: textColor,
          minHeight: '340px'
        }}
      >
        {/* Subtle foil/matte sheen overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-white/15 pointer-events-none" />
        
        {/* Top Header Label */}
        <div className="w-full flex items-center justify-between border-b border-black/20 pb-3 mb-2 opacity-80">
          <div className="w-2 h-1 bg-black/30 rounded-full" />
          <div className="flex items-center gap-1.5 text-[9px] font-bold tracking-widest uppercase opacity-90">
            <span>ANNA SILVA</span>
            <span>//</span>
            <span>PORTFOLIO</span>
          </div>
          <div className="w-2 h-1 bg-black/30 rounded-full" />
        </div>

        {/* Badge if provided */}
        {badgeText && (
          <div className="absolute -top-1 -right-1 bg-[#fde01a] text-black font-black text-[10px] tracking-widest px-2.5 py-1 rounded-full shadow-md uppercase rotate-3 border border-black/30">
            {badgeText}
          </div>
        )}

        {/* Case Title */}
        <div className="text-center my-auto w-full z-10 px-1">
          <div className="text-xs font-black tracking-widest text-white/90 mb-1.5 uppercase">
            {flavorTitle.split(' ANNA')[0] || flavorTitle}
          </div>
          <div className="text-2xl sm:text-3xl font-black font-hero uppercase tracking-tight leading-none text-[#fde01a] drop-shadow-sm">
            ANNA SILVA
          </div>
          <div className="text-[10px] font-bold tracking-widest uppercase mt-2 text-white/80">
            {subtitle}
          </div>
        </div>

        {/* Clean Minimalist Typography Monogram (No cartoon drawings) */}
        <div className="my-3 p-3 bg-white/10 backdrop-blur-md rounded-2xl w-24 h-24 sm:w-28 sm:h-28 flex flex-col items-center justify-center border border-white/20 text-white shadow-inner relative z-10">
          <span className="font-hero text-3xl sm:text-4xl text-[#fde01a] leading-none tracking-tight">
            AS
          </span>
          <span className="text-[9px] font-hero tracking-widest text-white/90 uppercase mt-1">
            CAMPAIGN
          </span>
          <span className="text-[8px] font-bold tracking-wider text-white/60 uppercase">
            EDITION 2026
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="w-full flex items-center justify-between pt-3 border-t border-black/20 text-[10px] font-bold opacity-90 z-10">
          <span className="text-[9px] uppercase tracking-wider font-hero text-white/90">
            PUBLICIDADE & PROPAGANDA
          </span>
          <span className="text-[9px] uppercase tracking-widest font-black text-[#fde01a]">
            CASE 2026
          </span>
        </div>
      </div>
    </div>
  );
};
