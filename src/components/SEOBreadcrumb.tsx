import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Language } from '../types';
import { TabType, getRouteFromTab } from '../routes';

interface SEOBreadcrumbProps {
  activeTab: TabType;
  currentLang: Language;
  onNavigate: (tab: TabType) => void;
}

export const SEOBreadcrumb: React.FC<SEOBreadcrumbProps> = ({ activeTab, currentLang, onNavigate }) => {
  if (activeTab === 'home') return null;

  const route = getRouteFromTab(activeTab);
  const isVi = currentLang === 'vi';
  const label = isVi ? route.breadcrumbVi : route.breadcrumbEn;

  return (
    <div className="bg-slate-50 border-b border-slate-200 py-2.5 px-4 sm:px-8 text-xs">
      <div className="max-w-7xl mx-auto flex items-center gap-2 text-slate-500 font-medium overflow-x-auto whitespace-nowrap">
        {/* Home Link */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
          className="inline-flex items-center gap-1 hover:text-indigo-600 transition-colors cursor-pointer text-slate-700 font-semibold"
        >
          <Home className="w-3.5 h-3.5 text-indigo-600" />
          <span>{isVi ? 'Trang chủ' : 'Home'}</span>
        </a>

        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />

        {/* Current Active Page Breadcrumb */}
        <span className="text-slate-900 font-bold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-md border border-indigo-100">
          {label}
        </span>
      </div>
    </div>
  );
};
