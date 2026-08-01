import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  hideTextOnMobile?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
  onClick,
  hideTextOnMobile = true
}) => {
  const isDark = variant === 'dark';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-9 h-9 sm:w-10 sm:h-10',
    lg: 'w-12 h-12 sm:w-14 sm:h-14'
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
      className={`flex items-center gap-2 sm:gap-3 select-none ${onClick ? 'cursor-pointer group' : ''} ${className}`}
    >
      {/* Brand Emblem Icon: Indigo-emerald shield with flight check emblem */}
      <div className={`${iconSizes[size]} rounded-xl overflow-hidden shadow-sm border ${isDark ? 'border-slate-700' : 'border-indigo-100'} bg-gradient-to-br from-indigo-950 via-indigo-900 to-emerald-800 flex items-center justify-center shrink-0 p-1.5 transition-transform group-hover:scale-105`}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xs">
          <circle cx="50" cy="50" r="42" stroke="#38BDF8" strokeWidth="2.5" strokeDasharray="4 3" opacity="0.35" />
          <path d="M50 8 V92" stroke="#38BDF8" strokeWidth="2" opacity="0.25" />
          <path d="M24 58 L42 74 L76 34" stroke="#10B981" strokeWidth="8.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 42 Q45 18 78 22" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M78 22 L70 17 M78 22 L73 28" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>

      {/* Brand Text - Hidden on mobile if hideTextOnMobile is true */}
      <div className={`flex-col ${hideTextOnMobile ? 'hidden sm:flex' : 'flex'}`}>
        <div className="flex items-center gap-1 leading-none">
          <span className={`font-black tracking-tight ${titleSizes[size]} ${isDark ? 'text-white' : 'text-slate-900'}`}>
            VIETNAM
          </span>
          {/* Stylized 'e' badge */}
          <span className="inline-flex items-center justify-center bg-indigo-600 text-white font-extrabold text-[10px] sm:text-xs px-1.5 py-0.5 rounded-full shadow-2xs mx-0.5">
            e
          </span>
          <span className={`font-black tracking-tight ${titleSizes[size]} ${isDark ? 'text-white' : 'text-slate-900'}`}>
            VISA
          </span>
        </div>

        {/* Gradient Underline */}
        <div className="w-full h-[2px] bg-gradient-to-r from-indigo-600 to-emerald-500 my-0.5 rounded-full opacity-90" />

        {/* Slogan */}
        <span className={`hidden sm:block font-semibold tracking-tight ${subtitleSizes[size]} ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          Fast-Track Travel & Visa Facilitation
        </span>
      </div>
    </div>
  );
};

