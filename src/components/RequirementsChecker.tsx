import React, { useState } from 'react';
import { Globe, Search, CheckCircle2, ShieldCheck, AlertCircle, FileText, Info } from 'lucide-react';
import { CountryRequirement, Language } from '../types';
import { COUNTRIES_DATA } from '../data/countries';
import { TRANSLATIONS } from '../data/translations';

interface RequirementsCheckerProps {
  currentLang: Language;
  onApplyForCountry: (countryName: string) => void;
}

export const RequirementsChecker: React.FC<RequirementsCheckerProps> = ({
  currentLang,
  onApplyForCountry
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCountries = COUNTRIES_DATA.filter(c =>
    c.countryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.countryNameVi.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full space-y-8">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 sm:p-8 lg:p-10 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full border border-indigo-200">
            <Globe className="w-3.5 h-3.5 text-indigo-600" />
            <span>Updated Immigration Rules 2026</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{t.reqTitle}</h2>
          <p className="text-xs sm:text-sm text-slate-500">{t.reqSubtitle}</p>
        </div>

        {/* Search Input */}
        <div className="relative max-w-md mx-auto">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
          <input
            type="text"
            placeholder={t.searchCountryPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>

        {/* Country Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {filteredCountries.map((c) => (
            <div
              key={c.code}
              className="bg-slate-50 rounded-xl p-4 border border-slate-200 hover:border-indigo-300 transition-all flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{c.flagEmoji}</span>
                    <span className="font-bold text-slate-900 text-sm">
                      {currentLang === 'vi' ? c.countryNameVi : c.countryName}
                    </span>
                  </div>

                  {c.exemptionDays > 0 ? (
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2 py-0.5 rounded border border-emerald-300">
                      {c.exemptionDays}-DAY EXEMPT
                    </span>
                  ) : (
                    <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded border border-blue-200">
                      E-VISA REQUIRED
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {currentLang === 'vi' ? c.notesVi : c.notes}
                </p>
              </div>

              <button
                onClick={() => onApplyForCountry(c.countryName)}
                className="w-full bg-white hover:bg-indigo-50 text-indigo-700 font-bold text-xs py-2 rounded-lg border border-slate-200 hover:border-indigo-300 transition-colors flex items-center justify-center gap-1"
              >
                <span>Apply Visa for {c.countryName}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* General Visa Rules Checklist */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-2">
          <Info className="w-4 h-4 text-indigo-400" />
          <span>General Vietnam E-Visa & Passport Requirements</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300 pt-2">
          <div className="space-y-1.5">
            <h4 className="font-bold text-white text-sm">1. Passport Validity</h4>
            <p className="leading-relaxed">
              Your passport must be valid for at least 6 months past your intended entry date into Vietnam and contain at least 2 blank pages.
            </p>
          </div>

          <div className="space-y-1.5">
            <h4 className="font-bold text-white text-sm">2. Photo Specifications</h4>
            <p className="leading-relaxed">
              1 passport bio page scan and 1 recent 4x6 portrait photo with white background, front facing, without glasses.
            </p>
          </div>

          <div className="space-y-1.5">
            <h4 className="font-bold text-white text-sm">3. Port of Entry Changes</h4>
            <p className="leading-relaxed">
              You may enter Vietnam at any of the 38 designated international airports, landports, or seaports listed on your approval document.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
