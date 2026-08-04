import React, { useState, useEffect } from 'react';
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
import { COUNTRY_LOCALES, getLocaleByCode, getLocalePath } from '../data/locales';

interface HeaderProps {
  currentLang: Language;
  currentLocaleCode?: string;
  onLanguageChange: (lang: Language, localeCode?: string) => void;
  activeTab: string;
  onNavigate: (tab: any) => void;
  onOpenQuickTrack?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  currentLocaleCode,
  onLanguageChange,
  activeTab,
  onNavigate,
  onOpenQuickTrack
}) => {
  const currentLocale = getLocaleByCode(currentLocaleCode || currentLang);
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // If mobile menu is open, always keep header visible
      if (mobileMenuOpen) {
        setIsVisible(true);
        return;
      }

      // Always show if near top of page (< 60px)
      if (currentScrollY < 60) {
        setIsVisible(true);
      } else {
        // If scrolling down, hide header
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 5) {
          setIsVisible(false);
        } 
        // If scrolling up, show header
        else if (lastScrollY - currentScrollY > 5) {
          setIsVisible(true);
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  const isVi = currentLang === 'vi';

  const handleNav = (id: 'home' | 'apply' | 'calculator' | 'requirements' | 'track' | 'faq' | 'overview' | 'contact') => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`w-full shadow-sm z-40 bg-white border-b border-slate-200 sticky top-0 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Main Top Header Bar */}
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 py-2 sm:py-3.5 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Logo (Full text on mobile and desktop) */}
        <Logo 
          onClick={() => handleNav('home')}
          size="md"
          hideTextOnMobile={false}
        />

        {/* Desktop Navigation Links (Visible on lg+ screens) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-semibold text-slate-700">
          <a
            href={getLocalePath('/overview', currentLocale.code)}
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
            href={getLocalePath('/how-to-apply', currentLocale.code)}
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
            href={getLocalePath('/visa-fee', currentLocale.code)}
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
            href={getLocalePath('/visa-requirements', currentLocale.code)}
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
            href={getLocalePath('/blog', currentLocale.code)}
            onClick={(e) => {
              e.preventDefault();
              handleNav('blog' as any);
            }}
            className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'blog'
                ? 'bg-indigo-50 text-indigo-700 font-bold'
                : 'hover:bg-slate-100 text-slate-600'
            }`}
          >
            Blog
          </a>

          <a
            href={getLocalePath('/faqs', currentLocale.code)}
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

          {/* Country / Language Selector Dropdown (Desktop & Mobile) */}
          <div className="relative">
            <button
              onClick={() => {
                setLangMenuOpen(!langMenuOpen);
                if (!langMenuOpen) setMobileMenuOpen(false);
              }}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition-colors whitespace-nowrap cursor-pointer shadow-2xs"
            >
              <Globe className="w-3.5 h-3.5 text-indigo-600" />
              <span className="text-base leading-none">{currentLocale.flag}</span>
              <span className="uppercase text-xs font-bold tracking-wider">{currentLocale.code}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 max-h-80 overflow-y-auto">
                <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 mb-1">
                  Select Country / Region
                </div>
                {COUNTRY_LOCALES.map((loc) => (
                  <button
                    key={loc.code}
                    onClick={() => {
                      onLanguageChange(loc.lang, loc.code);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-2 text-xs font-medium flex items-center justify-between hover:bg-indigo-50 transition-colors ${
                      currentLocale.code === loc.code ? 'text-indigo-700 font-bold bg-indigo-50/70' : 'text-slate-700'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="text-base">{loc.flag}</span>
                      <div className="flex flex-col">
                        <span className="font-semibold leading-tight">{loc.name}</span>
                        <span className="text-[10px] text-slate-400">{loc.englishName}</span>
                      </div>
                    </span>
                    <span className="uppercase text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                      /{loc.code}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Primary Apply Visa Button (Desktop only on lg+) */}
          <a
            href="https://vietnamvisa.govt.vn/apply-online"
            target="_blank"
            rel="nofollow"
            className="hidden lg:flex bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-extrabold text-sm px-4 py-2 rounded-xl shadow-sm hover:shadow transition-all items-center gap-1.5 border border-indigo-500 whitespace-nowrap shrink-0"
          >
            <FileText className="w-4 h-4 text-white" />
            <span>{isVi ? 'Nộp E-Visa' : 'Apply Online'}</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden px-3.5 py-2 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 border transition-all cursor-pointer shadow-2xs ${
              mobileMenuOpen
                ? 'bg-indigo-600 border-indigo-600 text-white shadow-md'
                : 'bg-slate-900 border-slate-800 text-white hover:bg-slate-800'
            }`}
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
            <span className="font-extrabold uppercase tracking-wide">Menu</span>
          </button>
        </div>
      </div>

      {/* Complete Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-md shadow-2xl animate-in fade-in slide-in-from-top-1 z-50">
          <div className="p-3.5 space-y-2 max-w-lg mx-auto">
            {/* Primary Action inside Dropdown Menu */}
            <a
              href="https://vietnamvisa.govt.vn/apply-online"
              target="_blank"
              rel="nofollow"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-extrabold text-sm py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 border border-orange-500 mb-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-white" />
              <span>{isVi ? 'Nộp E-Visa Trực Tuyến' : 'Apply Online Now'}</span>
            </a>

            {/* Track Status inside Mobile Menu */}
            {onOpenQuickTrack && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuickTrack();
                }}
                className="w-full bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-extrabold text-xs sm:text-sm py-2.5 px-3.5 rounded-xl border border-indigo-200 transition-colors flex items-center justify-between cursor-pointer mb-2"
              >
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-indigo-600" />
                  <span>{isVi ? 'Tra Cứu Hồ Sơ Visa' : 'Track Visa Application'}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-indigo-500" />
              </button>
            )}

            {/* List of Navigation Links */}
            <div className="grid grid-cols-1 gap-1.5 pt-1 border-t border-slate-100">
              {[
                {
                  id: 'overview',
                  label: isVi ? 'Tổng Quan' : 'Overview',
                  href: getLocalePath('/overview', currentLocale.code),
                  icon: <LayoutDashboard className="w-4 h-4 text-indigo-600" />
                },
                {
                  id: 'apply',
                  label: t.navApply || (isVi ? 'Xin Visa' : 'How to Apply'),
                  href: getLocalePath('/how-to-apply', currentLocale.code),
                  icon: <FileText className="w-4 h-4 text-blue-600" />
                },
                {
                  id: 'calculator',
                  label: t.navCalculator || (isVi ? 'Bảng Phí' : 'Visa Fees'),
                  href: getLocalePath('/visa-fee', currentLocale.code),
                  icon: <Calculator className="w-4 h-4 text-emerald-600" />
                },
                {
                  id: 'requirements',
                  label: t.navRequirements || (isVi ? 'Điều Kiện Visa' : 'Requirements'),
                  href: getLocalePath('/visa-requirements', currentLocale.code),
                  icon: <Globe2 className="w-4 h-4 text-purple-600" />
                },
                {
                  id: 'faq',
                  label: t.navFaq || (isVi ? 'Hỏi Đáp FAQs' : 'FAQs'),
                  href: getLocalePath('/faqs', currentLocale.code),
                  icon: <HelpCircle className="w-4 h-4 text-amber-600" />
                }
              ].map((item) => {
                const isActive = activeTab === item.id || (item.id === 'faq' && activeTab === 'faqs');
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(item.id as any);
                    }}
                    className={`w-full text-left px-3.5 py-3 rounded-xl transition-all flex items-center justify-between text-xs sm:text-sm font-bold border ${
                      isActive
                        ? 'bg-indigo-50 border-indigo-200 text-indigo-700 font-extrabold shadow-2xs'
                        : 'bg-slate-50/70 border-slate-200/80 text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                    {isActive ? (
                      <CheckCircle className="w-4 h-4 text-indigo-600 shrink-0" />
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
