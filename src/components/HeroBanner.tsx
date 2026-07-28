import React, { useState } from 'react';
import { ShieldCheck, Clock, CheckCircle2, ArrowRight, Zap, Calculator, Sparkles, Plane, ChevronDown } from 'lucide-react';
import { VisaType, ProcessingTime, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { VISA_TYPE_PRICING, PROCESSING_SPEED_PRICING, calculateVisaFees } from '../data/pricing';

interface HeroBannerProps {
  currentLang: Language;
  onStartApplication: () => void;
  onOpenCalculator: () => void;
  onOpenTrack?: () => void;
  onApplyWithOptions?: (options: {
    visaType: VisaType;
    processingTime: ProcessingTime;
    applicantCount: number;
  }) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  currentLang,
  onStartApplication,
  onOpenCalculator,
  onApplyWithOptions
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const [quoteVisaType, setQuoteVisaType] = useState<VisaType>('tourist_30_single');
  const [quoteSpeed, setQuoteSpeed] = useState<ProcessingTime>('standard');
  const [quoteApplicants, setQuoteApplicants] = useState<number>(1);

  const pricing = calculateVisaFees(quoteVisaType, quoteSpeed, [], quoteApplicants);

  const visaTypeOptions = [
    { value: 'tourist_30_single', label: '1-month single (30 days) — $54', shortLabel: '1-Month Single' },
    { value: 'tourist_30_multi', label: '1-month multiple (30 days) — $84', shortLabel: '1-Month Multiple' },
    { value: 'tourist_90_single', label: '3-month single (90 days) — $94', shortLabel: '3-Month Single' },
    { value: 'tourist_90_multi', label: '3-month multiple (90 days) — $104', shortLabel: '3-Month Multiple' }
  ];

  const speedOptions = [
    { value: 'standard', label: 'Normal (5 to 10 business days) — Included' },
    { value: 'urgent_24h', label: 'Urgent (2 business days) — +$45 / pax' },
    { value: 'emergency_4h', label: 'Super Urgent (1 business day) — +$85 / pax' }
  ];

  const applicantOptions = [
    { value: 1, label: '1 applicant' },
    { value: 2, label: '2 applicants' },
    { value: 3, label: '3 applicants' },
    { value: 4, label: '4 applicants' },
    { value: 5, label: '5 applicants' },
    { value: 6, label: '6 applicants' },
    { value: 7, label: '7 applicants' },
    { value: 8, label: '8 applicants' },
    { value: 9, label: '9 applicants' },
    { value: 10, label: '10 applicants' }
  ];

  return (
    <div className="relative bg-gradient-to-br from-amber-50/90 via-slate-50 to-indigo-50/70 text-slate-900 overflow-hidden py-10 lg:py-14 border-b border-slate-200">
      {/* Trống Đồng Đông Sơn Watermark Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden opacity-10">
        <svg viewBox="0 0 500 500" className="w-full h-full text-indigo-950 fill-current">
          <circle cx="250" cy="250" r="230" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="6 3" />
          <circle cx="250" cy="250" r="190" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="250" cy="250" r="140" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="250" cy="250" r="80" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
          <polygon points="250,50 262,100 300,75 275,120 325,125 280,155 312,188 270,195 288,238 250,212 212,238 230,195 188,188 220,155 175,125 225,120 200,75 238,100" />
        </svg>
      </div>

      {/* Decorative Dong Son Drum Radial Vector Watermark */}
      <div className="absolute -right-24 -bottom-24 w-96 h-96 opacity-10 pointer-events-none text-indigo-900 z-0">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-current">
          <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
          <circle cx="100" cy="100" r="75" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="2" />
          <polygon points="100,20 105,40 120,30 110,48 130,50 112,62 125,75 108,78 115,95 100,85 85,95 92,78 75,75 88,62 70,50 90,48 80,30 95,40" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            {/* Service Agency Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-100/90 border border-amber-300/80 px-3.5 py-1.5 rounded-full text-amber-900 text-xs font-bold shadow-xs backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Fast Vietnam E-Visa Agency Service • Express 24/7 Processing</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {t.heroTitle}
            </h1>

            <p className="text-xs sm:text-sm text-slate-700 max-w-2xl leading-relaxed font-medium">
              {t.heroSubtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={onStartApplication}
                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 border border-indigo-500 cursor-pointer"
              >
                <span>{t.heroCtaApply}</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <button
                onClick={onOpenCalculator}
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm px-5 py-3 rounded-xl border border-slate-300 shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-indigo-600" />
                <span>{t.heroCtaCalculate}</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200/80 text-center lg:text-left">
              <div>
                <div className="text-xl sm:text-2xl font-black text-indigo-700">{t.statIssued}</div>
                <div className="text-[11px] text-slate-600 font-semibold">{t.statIssuedLabel}</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-emerald-700">{t.statSuccess}</div>
                <div className="text-[11px] text-slate-600 font-semibold">{t.statSuccessLabel}</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-blue-700">{t.statSupport}</div>
                <div className="text-[11px] text-slate-600 font-semibold">{t.statSupportLabel}</div>
              </div>
            </div>
          </div>

          {/* Right Hero Feature Card: Get a Quick Quote */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-xl backdrop-blur-xl relative overflow-hidden space-y-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Get a Quick Quote
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  We're working late so you don't have to.
                </p>
              </div>

              <div className="space-y-3 text-xs">
                {/* Visa Type Dropdown */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700 block">
                    Visa type
                  </label>
                  <div className="relative">
                    <select
                      value={quoteVisaType}
                      onChange={(e) => setQuoteVisaType(e.target.value as VisaType)}
                      className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-xs font-semibold rounded-xl px-3.5 py-2.5 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-600 pr-9 cursor-pointer"
                    >
                      {visaTypeOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Processing Speed Dropdown */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700 block">
                    Processing speed
                  </label>
                  <div className="relative">
                    <select
                      value={quoteSpeed}
                      onChange={(e) => setQuoteSpeed(e.target.value as ProcessingTime)}
                      className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-xs font-semibold rounded-xl px-3.5 py-2.5 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-600 pr-9 cursor-pointer"
                    >
                      {speedOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Number of Applicants Dropdown */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700 block">
                    Number of applicants
                  </label>
                  <div className="relative">
                    <select
                      value={quoteApplicants}
                      onChange={(e) => setQuoteApplicants(Number(e.target.value))}
                      className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-xs font-semibold rounded-xl px-3.5 py-2.5 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-600 pr-9 cursor-pointer"
                    >
                      {applicantOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Mint Green Result Box */}
              <div className="bg-emerald-50/90 border border-emerald-200 rounded-2xl p-4 space-y-3">
                <div className="space-y-0.5">
                  <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                    Total
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-emerald-950">
                      ${pricing.grandTotalUsd}
                    </span>
                    <span className="text-xs font-semibold text-emerald-800">
                      {visaTypeOptions.find((v) => v.value === quoteVisaType)?.shortLabel}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (onApplyWithOptions) {
                      onApplyWithOptions({
                        visaType: quoteVisaType,
                        processingTime: quoteSpeed,
                        applicantCount: quoteApplicants
                      });
                    } else {
                      onStartApplication();
                    }
                  }}
                  className="w-full bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-extrabold text-sm py-3 px-5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer border border-orange-500"
                >
                  <span>Start Application →</span>
                </button>
              </div>

              {/* Fine Print Footer */}
              <div className="space-y-1 text-[10px] text-slate-400 leading-snug">
                <p>Government stamp fee included. No hidden charges.</p>
                <p>
                  All charges are in USD. Your card provider will handle any currency
                  conversion automatically during the checkout process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


