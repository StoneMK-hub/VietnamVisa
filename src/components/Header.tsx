import React, { useState } from 'react';
import { 
  Globe, 
  ChevronDown, 
  CheckCircle, 
  FileText, 
  Menu, 
  X, 
  LayoutDashboard, 
  Calculator, 
  Globe2, 
  Search, 
  HelpCircle, 
  PhoneCall,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Logo } from './Logo';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  activeTab: string;
  onNavigate: (tab: any) => void;
  onOpenQuickTrack?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  activeTab,
  onNavigate,
  onOpenQuickTrack
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isVi = currentLang === 'vi';

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'zh', name: '中文', flag: '🇨🇳' }
  ];

  // Hidden mobile menu items (only shown when user clicks Menu button)
  const hiddenMenuItems: {
    id: 'requirements' | 'faq' | 'contact';
    label: string;
    icon: React.ReactNode;
  }[] = [
    {
      id: 'requirements',
      label: t.navRequirements,
      icon: <Globe2 className="w-4 h-4 text-indigo-600" />
    },
    {
      id: 'faq',
      label: t.navFaq,
      icon: <HelpCircle className="w-4 h-4 text-amber-600" />
    },
    {
      id: 'contact',
      label: t.navContact || (isVi ? 'Liên Hệ' : 'Contact Us'),
      icon: <PhoneCall className="w-4 h-4 text-emerald-600" />
    }
  ];

  const handleNav = (id: 'home' | 'apply' | 'calculator' | 'requirements' | 'track' | 'faq' | 'overview' | 'contact') => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full shadow-sm z-40 bg-white border-b border-slate-200 sticky top-0">
      {/* Main Top Header Bar */}
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 py-2 sm:py-3.5 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Logo (Full text on desktop, icon emblem on mobile) */}
        <Logo 
          onClick={() => handleNav('home')}
          size="md"
          hideTextOnMobile={true}
        />

        {/* Desktop Navigation Links (Visible on lg+ screens) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-semibold text-slate-700">
          <a
            href="/overview"
            onClick={(e) => {
              e.preventDefault();
              handleNav('overview');
            }}
            className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'overview'
                ? 'bg-indigo-50 text-indigo-700 font-bold'
                : 'hover:bg-slate-100 text-slate-600'
            }`}
          >
            {isVi ? 'Tổng Quan' : 'Overview'}
          </a>
          
          <a
            href="/how-to-apply"
            onClick={(e) => {
              e.preventDefault();
              handleNav('apply');
            }}
            className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'apply'
                ? 'bg-indigo-50 text-indigo-700 font-bold'
                : 'hover:bg-slate-100 text-slate-600'
            }`}
          >
            {t.navApply}
          </a>

          <a
            href="/visa-fee"
            onClick={(e) => {
              e.preventDefault();
              handleNav('calculator');
            }}
            className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'calculator'
                ? 'bg-indigo-50 text-indigo-700 font-bold'
                : 'hover:bg-slate-100 text-slate-600'
            }`}
          >
            {t.navCalculator}
          </a>

          <a
            href="/visa-requirements"
            onClick={(e) => {
              e.preventDefault();
              handleNav('requirements');
            }}
            className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'requirements'
                ? 'bg-indigo-50 text-indigo-700 font-bold'
                : 'hover:bg-slate-100 text-slate-600'
            }`}
          >
            {t.navRequirements}
          </a>

          <a
            href="/faqs"
            onClick={(e) => {
              e.preventDefault();
              handleNav('faq');
            }}
            className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'faq' || activeTab === 'faqs'
                ? 'bg-indigo-50 text-indigo-700 font-bold'
                : 'hover:bg-slate-100 text-slate-600'
            }`}
          >
            {t.navFaq}
          </a>

          <a
            href="/contact-us"
            onClick={(e) => {
              e.preventDefault();
              handleNav('contact');
            }}
            className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'contact'
                ? 'bg-indigo-50 text-indigo-700 font-bold'
                : 'hover:bg-slate-100 text-slate-600'
            }`}
          >
            {t.navContact || 'Contact'}
          </a>
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Quick Track Button (Desktop / Tablet) */}
          {onOpenQuickTrack && (
            <button
              onClick={onOpenQuickTrack}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg border border-indigo-200 transition-colors whitespace-nowrap"
            >
              <Search className="w-3.5 h-3.5 text-indigo-600" />
              <span>{isVi ? 'Tra Cứu Hồ Sơ' : 'Track Status'}</span>
            </button>
          )}

          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setLangMenuOpen(!langMenuOpen);
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-1 px-2 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition-colors whitespace-nowrap"
            >
              <Globe className="w-3.5 h-3.5 text-slate-500 hidden sm:inline" />
              <span>{languages.find(l => l.code === currentLang)?.flag}</span>
              <span className="uppercase text-xs font-bold">{currentLang}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-1 w-44 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-50 animate-in fade-in slide-in-from-top-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm font-medium flex items-center justify-between hover:bg-indigo-50 transition-colors ${
                      currentLang === lang.code ? 'text-indigo-700 font-bold bg-indigo-50/50' : 'text-slate-700'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </span>
                    {currentLang === lang.code && <CheckCircle className="w-4 h-4 text-indigo-600" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Primary Apply Visa Button */}
          <a
            href="https://vietnamvisa.govt.vn/apply-online"
            target="_blank"
            rel="nofollow"
            className="bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-extrabold text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl shadow-sm hover:shadow transition-all flex items-center gap-1.5 border border-indigo-500 whitespace-nowrap shrink-0"
          >
            <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            <span>{isVi ? 'Nộp E-Visa' : 'Apply Online'}</span>
          </a>
        </div>
      </div>

      {/* Mobile Subbar Navigation (< lg) */}
      <div className="lg:hidden bg-slate-50/90 border-t border-slate-200 px-2 py-1.5 flex items-center justify-between gap-1 text-xs font-bold text-slate-700">
        {/* Primary 3 Mobile Menu Links */}
        <div className="grid grid-cols-3 gap-1 flex-1 min-w-0">
          <a 
            href="/overview"
            onClick={(e) => { e.preventDefault(); handleNav('overview'); }} 
            className={`py-1 px-1 sm:px-2 rounded-lg transition-all text-center whitespace-nowrap text-xs ${activeTab === 'overview' ? 'bg-indigo-600 text-white font-extrabold shadow-2xs' : 'text-slate-700 hover:bg-slate-200/70'}`}
          >
            {isVi ? 'Tổng Quan' : 'Overview'}
          </a>
          <a 
            href="/how-to-apply"
            onClick={(e) => { e.preventDefault(); handleNav('apply'); }} 
            className={`py-1 px-1 sm:px-2 rounded-lg transition-all text-center whitespace-nowrap text-xs ${activeTab === 'apply' ? 'bg-indigo-600 text-white font-extrabold shadow-2xs' : 'text-slate-700 hover:bg-slate-200/70'}`}
          >
            {isVi ? 'Xin Visa' : 'Apply'}
          </a>
          <a 
            href="/visa-fee"
            onClick={(e) => { e.preventDefault(); handleNav('calculator'); }} 
            className={`py-1 px-1 sm:px-2 rounded-lg transition-all text-center whitespace-nowrap text-xs ${activeTab === 'calculator' ? 'bg-indigo-600 text-white font-extrabold shadow-2xs' : 'text-slate-700 hover:bg-slate-200/70'}`}
          >
            {isVi ? 'Bảng Phí' : 'Fees'}
          </a>
        </div>

        {/* 3-Bars Hamburger Button for Hidden Menu Items */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`py-1 px-2 rounded-lg shrink-0 transition-all text-center flex items-center gap-1 border text-xs ${
            mobileMenuOpen 
              ? 'bg-indigo-600 border-indigo-600 text-white font-extrabold' 
              : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-100 font-bold'
          }`}
          aria-label="Toggle Hidden Menu"
        >
          {mobileMenuOpen ? (
            <X className="w-3.5 h-3.5 shrink-0" />
          ) : (
            <Menu className="w-3.5 h-3.5 shrink-0 text-slate-700" />
          )}
          <span className="text-[11px] font-black uppercase tracking-tight">Menu</span>
        </button>
      </div>

      {/* Simple Clean Mobile Dropdown Menu for Hidden Items */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl animate-in fade-in slide-in-from-top-1 z-50">
          <div className="p-2 space-y-1">
            {hiddenMenuItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg transition-colors flex items-center justify-between text-xs font-bold border ${
                    isActive
                      ? 'bg-indigo-50 border-indigo-200 text-indigo-700 font-extrabold'
                      : 'bg-slate-50/70 border-slate-200/80 text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  {isActive ? (
                    <CheckCircle className="w-4 h-4 text-indigo-600 shrink-0" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
