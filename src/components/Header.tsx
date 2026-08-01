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

          {/* Language Selector Dropdown (Hidden on mobile < lg) */}
          <div className="relative hidden lg:block">
            <button
              onClick={() => {
                setLangMenuOpen(!langMenuOpen);
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-slate-500" />
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

          {/* Mobile Menu Toggle Button (Replaces Apply Online & Language on mobile top right) */}
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
                  href: '/overview',
                  icon: <LayoutDashboard className="w-4 h-4 text-indigo-600" />
                },
                {
                  id: 'apply',
                  label: t.navApply || (isVi ? 'Xin Visa' : 'How to Apply'),
                  href: '/how-to-apply',
                  icon: <FileText className="w-4 h-4 text-blue-600" />
                },
                {
                  id: 'calculator',
                  label: t.navCalculator || (isVi ? 'Bảng Phí' : 'Visa Fees'),
                  href: '/visa-fee',
                  icon: <Calculator className="w-4 h-4 text-emerald-600" />
                },
                {
                  id: 'requirements',
                  label: t.navRequirements || (isVi ? 'Điều Kiện Visa' : 'Requirements'),
                  href: '/visa-requirements',
                  icon: <Globe2 className="w-4 h-4 text-purple-600" />
                },
                {
                  id: 'faq',
                  label: t.navFaq || (isVi ? 'Hỏi Đáp FAQs' : 'FAQs'),
                  href: '/faqs',
                  icon: <HelpCircle className="w-4 h-4 text-amber-600" />
                },
                {
                  id: 'contact',
                  label: t.navContact || (isVi ? 'Liên Hệ' : 'Contact Us'),
                  href: '/contact-us',
                  icon: <PhoneCall className="w-4 h-4 text-teal-600" />
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
