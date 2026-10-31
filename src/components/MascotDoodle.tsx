import React from 'react';

export const MascotDoodle: React.FC<{ className?: string }> = ({ className = 'w-28 h-28' }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Cartoon cheese character */}
      <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-md">
        {/* Cheese Body */}
        <path
          d="M35,50 C20,80 30,125 70,135 C115,140 135,110 130,70 C125,35 90,30 65,35 C50,38 42,42 35,50 Z"
          fill="#fdd813"
          stroke="#000000"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        
        {/* Cheese holes / texture dots */}
        <circle cx="50" cy="55" r="5" fill="#e5b800" stroke="#000" strokeWidth="2" />
        <circle cx="105" cy="65" r="7" fill="#e5b800" stroke="#000" strokeWidth="2" />
        <circle cx="65" cy="115" r="6" fill="#e5b800" stroke="#000" strokeWidth="2" />

        {/* Thick sunglasses frames */}
        <path
          d="M45,62 L75,62 C78,62 80,65 80,69 L80,78 C80,84 75,88 68,88 L52,88 C45,88 40,84 40,78 L40,69 C40,65 42,62 45,62 Z"
          fill="#000000"
        />
        <path
          d="M85,62 L115,62 C118,62 120,65 120,69 L120,78 C120,84 115,88 108,88 L92,88 C85,88 80,84 80,78 L80,69 C80,65 82,62 85,62 Z"
          fill="#000000"
        />
        {/* Bridge */}
        <rect x="76" y="68" width="8" height="5" fill="#000000" />

        {/* Glasses Lens Glare Reflection */}
        <line x1="48" y1="68" x2="65" y2="68" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="74" x2="60" y2="74" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="88" y1="68" x2="105" y2="68" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
        <line x1="90" y1="74" x2="100" y2="74" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />

        {/* Big Cheerful Smile */}
        <path
          d="M60,100 Q80,116 100,100"
          fill="none"
          stroke="#000000"
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* Tongue / mouth line */}
        <path d="M72,106 Q80,111 88,106" fill="none" stroke="#e40078" strokeWidth="3" />

        {/* Left Bicep flex arm */}
        <path
          d="M32,75 C15,65 10,48 20,38 C28,32 38,45 35,58"
          fill="#fdd813"
          stroke="#000000"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        {/* Left hand thumb up */}
        <circle cx="20" cy="38" r="4" fill="#000000" />

        {/* Right Bicep flex arm */}
        <path
          d="M128,75 C145,65 150,48 140,38 C132,32 122,45 125,58"
          fill="#fdd813"
          stroke="#000000"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        {/* Right hand */}
        <circle cx="140" cy="38" r="4" fill="#000000" />
      </svg>

      {/* Cloud Speech Bubble with cute smile like in the reference image */}
      <div className="absolute -top-3 -right-6 sm:-right-8 bg-white border-2 border-black rounded-full px-3 py-1.5 shadow-md flex items-center justify-center animate-bounce">
        <span className="text-black text-xs font-black tracking-tight select-none">
          ☺ yum!
        </span>
      </div>
    </div>
  );
};

export const StarburstIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => {
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className}`}>
      <path d="M12 0L14.5 7.5L22.5 5L17.5 12L24 14.5L16.5 17L19 24L12 19L5 24L7.5 17L0 14.5L6.5 12L1.5 5L9.5 7.5L12 0Z" />
    </svg>
  );
};
