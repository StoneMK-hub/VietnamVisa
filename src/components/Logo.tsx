import React from 'react';
import logoImg from '../assets/images/vietnam_evisa_logo_1785216777748.jpg';

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
      {/* Generated Lotus & Pagoda Emblem Icon */}
      <div className={`${iconSizes[size]} rounded-xl overflow-hidden shadow-sm border ${isDark ? 'border-slate-700' : 'border-indigo-100'} bg-white flex items-center justify-center shrink-0`}>
        <img
          src={logoImg}
          alt="Vietnam E-Visa Emblem"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Brand Text styled like the user's provided logo */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1 leading-none">
          <span className={`font-black tracking-tight ${titleSizes[size]} ${isDark ? 'text-white' : 'text-slate-900'}`}>
            VIETNAM
          </span>
          {/* Stylized 'e' with globe icon badge */}
          <span className="inline-flex items-center justify-center bg-red-700 text-white font-extrabold text-[11px] sm:text-xs px-1.5 py-0.5 rounded-full shadow-sm mx-0.5">
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
