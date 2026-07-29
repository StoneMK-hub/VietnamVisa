import React, { useState } from 'react';
import { Globe, Search, CheckCircle2, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { COUNTRIES_DATA } from '../data/countries';
import { TRANSLATIONS } from '../data/translations';

interface RequirementsCheckerProps {
  currentLang: Language;
  onApplyForCountry: (countryName: string) => void;
  isHome?: boolean;
  onViewAll?: () => void;
}

// Top featured countries for homepage display (highest traveler volume to Vietnam)
const TOP_FEATURED_CODES = [
  'US', 'CN', 'KR', 'JP', 'TW', 'IN', 'AU', 'GB',
  'FR', 'DE', 'CA', 'SG', 'RU', 'IT', 'ES', 'NL'
];

export const RequirementsChecker: React.FC<RequirementsCheckerProps> = ({
  currentLang,
  onApplyForCountry,
  isHome = false,
  onViewAll
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const [searchTerm, setSearchTerm] = useState('');

  // Top featured list for Home, or full filtered list for Requirements Tab
  const topCountries = COUNTRIES_DATA.filter(c => TOP_FEATURED_CODES.includes(c.code));

  const filteredCountries = COUNTRIES_DATA.filter(c =>
    c.countryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.countryNameVi.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const countriesToDisplay = isHome ? topCountries : filteredCountries;

  return (
    <div className="w-full space-y-8">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 sm:p-8 lg:p-10 space-y-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full border border-indigo-200">
            {isHome ? <Sparkles className="w-3.5 h-3.5 text-indigo-600" /> : <Globe className="w-3.5 h-3.5 text-indigo-600" />}
            <span>
              {isHome
                ? (currentLang === 'vi' ? 'Top Quốc Gia Đến Việt Nam Nhiều Nhất' : 'Top Travel Destinations to Vietnam')
                : 'Updated Immigration Rules 2026'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{t.reqTitle}</h2>
          <p className="text-xs sm:text-sm text-slate-500">{t.reqSubtitle}</p>
        </div>

        {/* Search Input & Counter (Only on Full Requirements Page) */}
        {!isHome && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-2xl mx-auto">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
              <input
                type="text"
                placeholder={t.searchCountryPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            <div className="text-xs sm:text-sm font-bold text-slate-600 bg-slate-100 px-3.5 py-2.5 rounded-xl border border-slate-200 shrink-0">
              {currentLang === 'vi'
                ? `Hiển thị ${filteredCountries.length} / ${COUNTRIES_DATA.length} quốc gia`
                : `Showing ${filteredCountries.length} of ${COUNTRIES_DATA.length} countries`}
            </div>
          </div>
        )}

        {/* Country Cards Grid (4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 pt-2">
          {countriesToDisplay.map((c) => (
            <div
              key={c.code}
              className="bg-slate-50 hover:bg-white rounded-2xl p-4 border border-slate-200/90 hover:border-indigo-300 hover:shadow-md transition-all flex flex-col justify-between space-y-3 group"
            >
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/70 gap-1.5">
                  <div className="flex items-center gap-2 min-w-0">
                    <img
                      src={`https://flagcdn.com/w40/${c.code.toLowerCase()}.png`}
                      alt={`${c.countryName} flag`}
                      className="w-5 h-3.5 object-cover rounded-[2px] border border-slate-200/80 shrink-0 shadow-2xs"
                      loading="lazy"
                    />
                    <span className="font-bold text-slate-900 text-sm truncate group-hover:text-indigo-600 transition-colors">
                      {currentLang === 'vi' ? c.countryNameVi : c.countryName}
                    </span>
                  </div>

                  {c.exemptionDays > 0 ? (
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-black px-2 py-0.5 rounded border border-emerald-300/80 shrink-0">
                      {c.exemptionDays}D EXEMPT
                    </span>
                  ) : (
                    <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-0.5 rounded border border-blue-200 shrink-0">
                      E-VISA
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed line-clamp-2">
                  {currentLang === 'vi' ? c.notesVi : c.notes}
                </p>
              </div>

              <button
                onClick={() => onApplyForCountry(c.countryName)}
                className="w-full bg-white hover:bg-indigo-600 hover:text-white text-indigo-700 font-bold text-xs sm:text-sm py-2 px-3 rounded-xl border border-slate-200 hover:border-indigo-600 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <span>{currentLang === 'vi' ? `Xin Visa cho ${c.countryNameVi}` : `Apply Visa for ${c.countryName}`}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Home Page Call to Action Banner to View All Countries */}
        {isHome && onViewAll && (
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between bg-gradient-to-r from-indigo-50 via-slate-50 to-blue-50 p-4 sm:p-5 rounded-2xl border border-indigo-100 gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <p className="font-bold text-slate-900 text-sm">
                {currentLang === 'vi'
                  ? 'Bạn muốn kiểm tra quốc gia khác trên thế giới?'
                  : 'Looking for requirements of other countries?'}
              </p>
              <p className="text-xs text-slate-500">
                {currentLang === 'vi'
                  ? `Tra cứu danh sách đầy đủ ${COUNTRIES_DATA.length}+ quốc gia & lịch miễn thị thực mới nhất 2026.`
                  : `Search full directory of ${COUNTRIES_DATA.length}+ countries and 2026 exemption guidelines.`}
              </p>
            </div>

            <button
              onClick={onViewAll}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-indigo-200 hover:scale-[1.02] shrink-0 cursor-pointer"
            >
              <span>{currentLang === 'vi' ? 'Xem Tất Cả 100+ Quốc Gia' : 'View All 100+ Countries'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Vietnam Visa Exemption Summary List matching Official Resolutions (Only on full Requirements page) */}
      {!isHome && (
        <div className="bg-gradient-to-br from-emerald-50/70 via-white to-teal-50/40 text-slate-900 rounded-3xl p-6 sm:p-8 lg:p-10 space-y-6 shadow-xl border border-emerald-100">
          {/* Header */}
          <div className="border-b border-emerald-100 pb-4 space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>
                {currentLang === 'vi'
                  ? 'QUY ĐỊNH MIỄN THỊ THỰC VIỆT NAM 2026'
                  : 'VIETNAM VISA-FREE EXEMPTION SCHEDULE 2026'}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {currentLang === 'vi'
                ? 'Danh Sách Các Quốc Gia Được Miễn Visa Vào Việt Nam'
                : 'Vietnam Visa-Free Exemption Categories & Eligible Countries'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
              {currentLang === 'vi'
                ? 'Công dân thuộc các quốc gia dưới đây được miễn thị thực nhập cảnh Việt Nam theo Nghị định 44/NQ-CP, 229/NQ-CP và các Hiệp định song phương/ASEAN. Du khách lưu trú vượt quá thời gian miễn phí cần xin E-Visa trực tuyến.'
                : 'Citizens holding ordinary passports from the following countries are exempt from Vietnam visa requirements under Resolutions 44/NQ-CP, 229/NQ-CP, and ASEAN/bilateral agreements. Travelers staying longer than the visa-free period must apply for an E-Visa.'}
            </p>
          </div>

          {/* Compact Grid Layout */}
          <div className="space-y-4">
            {/* Top Main Section: 45 Days Visa-Free (24 Countries) */}
            <div className="bg-white/90 p-4 sm:p-5 rounded-2xl border border-emerald-100/80 shadow-2xs space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="bg-emerald-600 text-white text-xs font-black px-2.5 py-0.5 rounded-md shadow-2xs">
                    45 DAYS
                  </span>
                  <h4 className="text-sm font-extrabold text-slate-900">
                    {currentLang === 'vi' ? 'Miễn Visa 45 Ngày' : '45 Days Visa-Free'}
                  </h4>
                </div>
                <span className="text-xs font-medium text-slate-500">
                  24 {currentLang === 'vi' ? 'quốc gia theo NQ 44/NQ-CP & 229/NQ-CP' : 'countries under Resolutions 44/NQ-CP & 229/NQ-CP'}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                {[
                  { name: 'United Kingdom', code: 'gb' },
                  { name: 'France', code: 'fr' },
                  { name: 'Germany', code: 'de' },
                  { name: 'Italy', code: 'it' },
                  { name: 'Spain', code: 'es' },
                  { name: 'Denmark', code: 'dk' },
                  { name: 'Finland', code: 'fi' },
                  { name: 'Sweden', code: 'se' },
                  { name: 'Norway', code: 'no' },
                  { name: 'Russia', code: 'ru' },
                  { name: 'Japan', code: 'jp' },
                  { name: 'South Korea', code: 'kr' },
                  { name: 'Belgium', code: 'be' },
                  { name: 'Netherlands', code: 'nl' },
                  { name: 'Switzerland', code: 'ch' },
                  { name: 'Poland', code: 'pl' },
                  { name: 'Czech Republic', code: 'cz' },
                  { name: 'Hungary', code: 'hu' },
                  { name: 'Bulgaria', code: 'bg' },
                  { name: 'Croatia', code: 'hr' },
                  { name: 'Luxembourg', code: 'lu' },
                  { name: 'Romania', code: 'ro' },
                  { name: 'Slovakia', code: 'sk' },
                  { name: 'Slovenia', code: 'si' }
                ].map((c) => (
                  <span
                    key={c.name}
                    className="inline-flex items-center gap-1.5 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-300 text-slate-800 text-xs font-medium px-2.5 py-1 rounded-lg border border-slate-200/80 transition-colors shadow-2xs"
                  >
                    <img
                      src={`https://flagcdn.com/w40/${c.code}.png`}
                      alt={`${c.name} flag`}
                      className="w-5 h-3.5 object-cover rounded-[2px] border border-slate-200/80 shrink-0 shadow-2xs"
                      loading="lazy"
                    />
                    <span>{c.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* 2-Column Grid for 30 Days, 90 Days, 21 Days & 14 Days */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Column 1: 30 Days Visa-Free */}
              <div className="bg-white/90 p-4 sm:p-5 rounded-2xl border border-blue-100 shadow-2xs space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-blue-600 text-white text-xs font-black px-2.5 py-0.5 rounded-md shadow-2xs">
                      30 DAYS
                    </span>
                    <h4 className="text-sm font-extrabold text-slate-900">
                      {currentLang === 'vi' ? 'Miễn Visa 30 Ngày' : '30 Days Visa-Free'}
                    </h4>
                  </div>
                  <span className="text-xs font-medium text-slate-500">ASEAN & Bilateral</span>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {[
                    { name: 'Singapore', code: 'sg' },
                    { name: 'Thailand', code: 'th' },
                    { name: 'Malaysia', code: 'my' },
                    { name: 'Indonesia', code: 'id' },
                    { name: 'Laos', code: 'la' },
                    { name: 'Cambodia', code: 'kh' },
                    { name: 'Belarus', code: 'by' },
                    { name: 'Kazakhstan', code: 'kz' },
                    { name: 'Kyrgyzstan', code: 'kg' },
                    { name: 'Mongolia', code: 'mn' }
                  ].map((c) => (
                    <span
                      key={c.name}
                      className="inline-flex items-center gap-1.5 bg-slate-50 hover:bg-blue-50 hover:border-blue-300 text-slate-800 text-xs font-medium px-2.5 py-1 rounded-lg border border-slate-200/80 transition-colors shadow-2xs"
                    >
                      <img
                        src={`https://flagcdn.com/w40/${c.code}.png`}
                        alt={`${c.name} flag`}
                        className="w-5 h-3.5 object-cover rounded-[2px] border border-slate-200/80 shrink-0 shadow-2xs"
                        loading="lazy"
                      />
                      <span>{c.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Column 2: 90 Days, 21 Days & 14 Days Combined */}
              <div className="space-y-4">
                {/* 90 Days */}
                <div className="bg-white/90 p-3.5 sm:p-4 rounded-2xl border border-indigo-100 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-1.5">
                    <span className="bg-indigo-600 text-white text-xs font-black px-2.5 py-0.5 rounded-md shadow-2xs">
                      90 DAYS
                    </span>
                    <h4 className="text-sm font-extrabold text-slate-900">
                      {currentLang === 'vi' ? 'Miễn Visa 90 Ngày' : '90 Days Visa-Free'}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { name: 'Chile', code: 'cl' },
                      { name: 'Panama', code: 'pa' }
                    ].map((c) => (
                      <span
                        key={c.name}
                        className="inline-flex items-center gap-1.5 bg-slate-50 hover:bg-indigo-50 hover:border-indigo-300 text-slate-800 text-xs font-medium px-2.5 py-1 rounded-lg border border-slate-200/80 transition-colors shadow-2xs"
                      >
                        <img
                          src={`https://flagcdn.com/w40/${c.code}.png`}
                          alt={`${c.name} flag`}
                          className="w-5 h-3.5 object-cover rounded-[2px] border border-slate-200/80 shrink-0 shadow-2xs"
                          loading="lazy"
                        />
                        <span>{c.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* 21 Days & 14 Days Side-by-Side */}
                <div className="grid grid-cols-2 gap-3">
                  {/* 21 Days */}
                  <div className="bg-white/90 p-3.5 rounded-2xl border border-amber-100 shadow-2xs space-y-2">
                    <div className="flex items-center gap-1.5 border-b border-slate-100 pb-1.5">
                      <span className="bg-amber-600 text-white text-[10px] font-black px-2 py-0.5 rounded shadow-2xs">
                        21 DAYS
                      </span>
                      <h4 className="text-xs font-bold text-slate-900">
                        21 Days
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {[{ name: 'Philippines', code: 'ph' }].map((c) => (
                        <span
                          key={c.name}
                          className="inline-flex items-center gap-1.5 bg-slate-50 text-slate-800 text-xs font-medium px-2 py-1 rounded-lg border border-slate-200/80 shadow-2xs"
                        >
                          <img
                            src={`https://flagcdn.com/w40/${c.code}.png`}
                            alt={`${c.name} flag`}
                            className="w-5 h-3.5 object-cover rounded-[2px] border border-slate-200/80 shrink-0 shadow-2xs"
                            loading="lazy"
                          />
                          <span>{c.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 14 Days */}
                  <div className="bg-white/90 p-3.5 rounded-2xl border border-purple-100 shadow-2xs space-y-2">
                    <div className="flex items-center gap-1.5 border-b border-slate-100 pb-1.5">
                      <span className="bg-purple-600 text-white text-[10px] font-black px-2 py-0.5 rounded shadow-2xs">
                        14 DAYS
                      </span>
                      <h4 className="text-xs font-bold text-slate-900">
                        14 Days
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {[
                        { name: 'Brunei', code: 'bn' },
                        { name: 'Myanmar', code: 'mm' }
                      ].map((c) => (
                        <span
                          key={c.name}
                          className="inline-flex items-center gap-1.5 bg-slate-50 text-slate-800 text-xs font-medium px-2 py-1 rounded-lg border border-slate-200/80 shadow-2xs"
                        >
                          <img
                            src={`https://flagcdn.com/w40/${c.code}.png`}
                            alt={`${c.name} flag`}
                            className="w-5 h-3.5 object-cover rounded-[2px] border border-slate-200/80 shrink-0 shadow-2xs"
                            loading="lazy"
                          />
                          <span>{c.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Passport General Requirements Footer Note */}
          <div className="pt-4 border-t border-emerald-100/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-700">
            <div className="flex items-start gap-2.5 bg-white/80 p-3 rounded-xl border border-slate-200/70">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-900 text-xs">
                  {currentLang === 'vi' ? 'Thời Hạn Hộ Chiếu' : 'Passport Validity'}
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {currentLang === 'vi' ? 'Hộ chiếu phải còn hạn ít nhất 6 tháng và có 2 trang trống.' : 'Must be valid for at least 6 months past entry date with 2 blank pages.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 bg-white/80 p-3 rounded-xl border border-slate-200/70">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-900 text-xs">
                  {currentLang === 'vi' ? 'Lưu Ý Miễn Visa' : 'Overstay Caution'}
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {currentLang === 'vi' ? 'Áp dụng cho chuyến lưu trú liên tục. Muốn ở lâu hơn cần xin E-Visa.' : 'Exemption applies to continuous stay; apply E-Visa for longer stays.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 bg-white/80 p-3 rounded-xl border border-slate-200/70">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-900 text-xs">
                  {currentLang === 'vi' ? 'E-Visa Mọi Quốc Tịch' : 'E-Visa for All Nationalities'}
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {currentLang === 'vi' ? 'Công dân 190+ nước đều được cấp E-Visa 30/90 ngày 1 lần hoặc nhiều lần.' : 'Citizens of 190+ countries can apply for 30/90 days single/multiple E-Visa.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
