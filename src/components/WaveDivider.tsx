import React from 'react';

interface WaveDividerProps {
  color?: string; // hex color of the wave fill
  className?: string;
  flip?: boolean;
}

export const WaveDivider: React.FC<WaveDividerProps> = ({
  color = '#25320c',
  className = '',
  flip = false
}) => {
  return (
    <div
      className={`w-full bg-[#890039] overflow-hidden leading-none select-none pointer-events-none -mb-[1px] ${className}`}
      style={{ transform: flip ? 'rotate(180deg)' : undefined }}
    >
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-12 sm:h-16 md:h-20 lg:h-24 block"
        preserveAspectRatio="none"
      >
        <path
          d="M 0,-2 L 1440,-2 L 1440,78 C 1410,80 1370,84 1330,84 C 1170,32 830,32 670,84 C 480,32 160,32 0,84 Z"
          fill={color}
        />
      </svg>
    </div>
  );
};
