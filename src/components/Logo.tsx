import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
  onClick
}) => {
  const isDark = variant === 'dark';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14'
  };

  const titleSizes = {
    sm: 'text-sm',
    md: 'text-base sm:text-lg',
    lg: 'text-xl sm:text-2xl'
  };

  const subtitleSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px] sm:text-[11px]',
    lg: 'text-xs'
  };

  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 select-none ${onClick ? 'cursor-pointer group' : ''} ${className}`}
    >
      {/* Lotus & Vietnam Star Emblem Icon */}
      <div className={`${iconSizes[size]} rounded-xl overflow-hidden shadow-sm border ${isDark ? 'border-slate-700' : 'border-indigo-100'} bg-gradient-to-br from-red-600 via-red-700 to-amber-600 flex items-center justify-center shrink-0 p-1.5`}>
        <svg viewBox="0 0 100 100" className="w-full h-full text-amber-300 fill-current drop-shadow-xs">
          {/* Central Vietnam Gold Star */}
          <polygon points="50,15 61,38 85,38 66,52 73,76 50,61 27,76 34,52 15,38 39,38" fill="#FCD34D" />
          {/* Subtle Lotus Petal Arc */}
          <path d="M20 85 C35 75, 65 75, 80 85 C65 92, 35 92, 20 85 Z" fill="#FEE2E2" opacity="0.8" />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1 leading-none">
          <span className={`font-black tracking-tight ${titleSizes[size]} ${isDark ? 'text-white' : 'text-slate-900'}`}>
            VIETNAM
          </span>
          {/* Stylized 'e' badge */}
          <span className="inline-flex items-center justify-center bg-red-700 text-white font-extrabold text-[11px] sm:text-xs px-1.5 py-0.5 rounded-full shadow-xs mx-0.5">
            e
          </span>
          <span className={`font-black tracking-tight ${titleSizes[size]} ${isDark ? 'text-white' : 'text-slate-900'}`}>
            VISA
          </span>
        </div>

        {/* Red Underline */}
        <div className="w-full h-[2px] bg-red-700 my-0.5 rounded-full opacity-80" />

        {/* Slogan */}
        <span className={`font-semibold tracking-tight ${subtitleSizes[size]} ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          Experience Vietnam the Best Way
        </span>
      </div>
    </div>
  );
};

