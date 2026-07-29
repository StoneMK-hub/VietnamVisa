import React, { useState } from 'react';
import { Globe, ChevronDown, CheckCircle, FileText } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Logo } from './Logo';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  activeTab: 'home' | 'apply' | 'calculator' | 'requirements' | 'track' | 'faq';
  onNavigate: (tab: 'home' | 'apply' | 'calculator' | 'requirements' | 'track' | 'faq') => void;
  onOpenQuickTrack?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  activeTab,
  onNavigate
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'zh', name: '中文', flag: '🇨🇳' }
  ];

  return (
    <header className="w-full shadow-sm z-40 bg-white border-b border-slate-200">
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
        {/* Logo and Brand */}
        <Logo 
          onClick={() => onNavigate('home')}
          size="md"
        />

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-semibold text-slate-700">
          <a
            href="/overview"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('overview');
            }}
            className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'overview'
                ? 'bg-indigo-50 text-indigo-700 font-bold'
                : 'hover:bg-slate-100 text-slate-600'
            }`}
          >
            {currentLang === 'vi' ? 'Tổng Quan' : 'Overview'}
          </a>
          
          <a
            href="/how-to-apply"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('apply');
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
              onNavigate('calculator');
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
              onNavigate('requirements');
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
              onNavigate('faq');
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
              onNavigate('contact');
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


        {/* Right Actions: Language + Compact CTA */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs sm:text-sm font-semibold text-slate-700 transition-colors whitespace-nowrap"
            >
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <span>{languages.find(l => l.code === currentLang)?.flag}</span>
              <span className="uppercase text-xs font-bold">{currentLang}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
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

          {/* Compact Apply Visa Primary Button */}
          <a
            href="https://vietnamvisa.govt.vn/apply-online"
            target="_blank"
            rel="nofollow"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm px-3.5 py-1.5 rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-1.5 border border-indigo-500 whitespace-nowrap shrink-0"
          >
            <FileText className="w-3.5 h-3.5 text-white" />
            <span>{t.heroCtaApply}</span>
          </a>
        </div>
      </div>

      {/* Mobile Nav Subbar */}
      <div className="lg:hidden bg-slate-50 border-t border-slate-200 px-4 py-2.5 flex items-center justify-around text-sm font-semibold text-slate-700 overflow-x-auto">
        <a 
          href="/overview"
          onClick={(e) => { e.preventDefault(); onNavigate('overview'); }} 
          className={`py-1 px-2 rounded ${activeTab === 'overview' ? 'text-indigo-700 font-bold' : ''}`}
        >
          {currentLang === 'vi' ? 'Tổng Quan' : 'Overview'}
        </a>
        <a 
          href="/how-to-apply"
          onClick={(e) => { e.preventDefault(); onNavigate('apply'); }} 
          className={`py-1 px-2 rounded ${activeTab === 'apply' ? 'text-indigo-700 font-bold' : ''}`}
        >
          {t.navApply}
        </a>
        <a 
          href="/visa-fee"
          onClick={(e) => { e.preventDefault(); onNavigate('calculator'); }} 
          className={`py-1 px-2 rounded ${activeTab === 'calculator' ? 'text-indigo-700 font-bold' : ''}`}
        >
          {t.navCalculator}
        </a>
        <a 
          href="/visa-requirements"
          onClick={(e) => { e.preventDefault(); onNavigate('requirements'); }} 
          className={`py-1 px-2 rounded ${activeTab === 'requirements' ? 'text-indigo-700 font-bold' : ''}`}
        >
          {t.navRequirements}
        </a>
        <a 
          href="/faqs"
          onClick={(e) => { e.preventDefault(); onNavigate('faq'); }} 
          className={`py-1 px-2 rounded ${activeTab === 'faq' || activeTab === 'faqs' ? 'text-indigo-700 font-bold' : ''}`}
        >
          {t.navFaq}
        </a>
        <a 
          href="/contact-us"
          onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} 
          className={`py-1 px-2 rounded ${activeTab === 'contact' ? 'text-indigo-700 font-bold' : ''}`}
        >
          {t.navContact || 'Contact'}
        </a>
      </div>

    </header>
  );
};
