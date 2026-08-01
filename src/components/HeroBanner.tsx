import React, { useState } from 'react';
import { ShieldCheck, Clock, CheckCircle2, ArrowRight, Zap, Calculator, Sparkles, Plane, ChevronDown } from 'lucide-react';
import { VisaType, ProcessingTime, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { VISA_TYPE_PRICING, PROCESSING_SPEED_PRICING, calculateVisaFees } from '../data/pricing';
import trongDongImg from '../assets/images/trong_dong_pattern_1785216791732.jpg';

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
  const isVi = currentLang === 'vi';

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
    <div className="relative bg-gradient-to-br from-amber-50/90 via-slate-50 to-indigo-50/70 text-slate-900 overflow-hidden py-6 sm:py-10 lg:py-14 border-b border-slate-200">
      {/* Trống Đồng Đông Sơn Watermark Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <img
          src={trongDongImg}
          alt="Trống Đồng Việt Nam Background"
          className="w-full h-full object-cover opacity-20 mix-blend-multiply"
          referrerPolicy="no-referrer"
        />
        {/* Soft Radial Gradient Fade overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/70 via-slate-50/50 to-indigo-50/70" />
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

      <div className="max-w-7xl mx-auto px-2.5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
            {/* Service Agency Badge */}
            <div className="inline-flex items-center gap-1.5 bg-emerald-100/90 border border-emerald-300/80 px-3.5 py-1 rounded-full text-emerald-950 text-xs sm:text-sm font-bold tracking-wider uppercase shadow-2xs backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700 shrink-0" />
              <span>{isVi ? 'DỊCH VỤ E-VISA VIỆT NAM' : 'VIETNAM EVISA SERVICE'}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 leading-snug sm:leading-tight">
              {isVi ? 'e-Visa Việt Nam: Nhanh Chóng, Đơn Giản, Trọn Gói' : 'Vietnam eVisa: Fast, Simple, Done'}
            </h1>

            <p className="text-sm sm:text-base text-slate-700 max-w-xl leading-relaxed font-medium">
              {isVi
                ? 'Chúng tôi thay mặt bạn nộp hồ sơ tới Cục Xuất nhập cảnh Việt Nam. Nhanh hơn, dễ dàng hơn và có đội ngũ hỗ trợ thực sự đồng hành khi xảy ra sự cố.'
                : 'We apply to Vietnam Immigration on your behalf. Faster, easier, and with a real support team behind you when something goes wrong.'}
            </p>

            {/* CTA Buttons - Orange Apply Now + Outline See Pricing */}
            <div className="flex flex-row items-center gap-3 pt-1">
              <a
                href="https://vietnamvisa.govt.vn/apply-online"
                target="_blank"
                rel="nofollow"
                className="flex-1 sm:flex-initial bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-extrabold text-sm sm:text-base px-5 sm:px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 border border-orange-500 cursor-pointer"
              >
                <span>{isVi ? 'Xin Visa Ngay →' : 'Apply Now →'}</span>
              </a>

              <button
                onClick={onOpenCalculator}
                className="flex-1 sm:flex-initial bg-white/95 hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base px-4 sm:px-5 py-3.5 rounded-xl border border-slate-300/90 shadow-2xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{isVi ? 'Xem Bảng Giá' : 'See Pricing'}</span>
              </button>
            </div>

            {/* Feature Bullets with Checkmarks */}
            <div className="pt-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm sm:text-base font-bold text-slate-800">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{isVi ? 'Hỗ trợ xử lý khẩn 24h' : '24-hour rush available'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{isVi ? 'Chuyên viên hỗ trợ, không dùng bot' : 'Human support, not a bot'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{isVi ? 'Hoàn tiền nếu từ chối' : 'Refund if denied'}</span>
              </div>
            </div>

            {/* Disclaimer / Transparency Box */}
            <div className="bg-white/90 border border-slate-300/80 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal shadow-2xs">
              <p className="leading-relaxed">
                {isVi
                  ? 'Chúng tôi hỗ trợ du khách nước ngoài đăng ký Thị thực điện tử (e-Visa) Việt Nam nhanh chóng, an toàn và bảo mật với sự hướng dẫn chuyên nghiệp trong suốt quá trình.'
                  : 'We help foreign travelers apply for a Vietnam e-Visa quickly and securely with professional guidance throughout the process.'}
              </p>
            </div>

            {/* Trust Badges */}
            <div className="pt-2 sm:pt-4 grid grid-cols-3 gap-2 sm:gap-4 border-t border-slate-200/80 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-black text-indigo-700">{t.statIssued}</div>
                <div className="text-xs text-slate-600 font-semibold">{t.statIssuedLabel}</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-emerald-700">{t.statSuccess}</div>
                <div className="text-xs text-slate-600 font-semibold">{t.statSuccessLabel}</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-blue-700">{t.statSupport}</div>
                <div className="text-xs text-slate-600 font-semibold">{t.statSupportLabel}</div>
              </div>
            </div>
          </div>

          {/* Right Hero Feature Card: Get a Quick Quote */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 border border-slate-200/90 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg backdrop-blur-xl relative overflow-hidden space-y-3 sm:space-y-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Get a Quick Quote
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                  We're working late so you don't have to.
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                {/* Visa Type Dropdown */}
                <div className="space-y-1">
                  <label className="text-xs sm:text-sm font-bold text-slate-700 block">
                    Visa type
                  </label>
                  <div className="relative">
                    <select
                      value={quoteVisaType}
                      onChange={(e) => setQuoteVisaType(e.target.value as VisaType)}
                      className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-sm font-semibold rounded-xl px-3.5 py-2.5 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-600 pr-9 cursor-pointer"
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
                  <label className="text-xs sm:text-sm font-bold text-slate-700 block">
                    Processing speed
                  </label>
                  <div className="relative">
                    <select
                      value={quoteSpeed}
                      onChange={(e) => setQuoteSpeed(e.target.value as ProcessingTime)}
                      className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-sm font-semibold rounded-xl px-3.5 py-2.5 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-600 pr-9 cursor-pointer"
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
                  <label className="text-xs sm:text-sm font-bold text-slate-700 block">
                    Number of applicants
                  </label>
                  <div className="relative">
                    <select
                      value={quoteApplicants}
                      onChange={(e) => setQuoteApplicants(Number(e.target.value))}
                      className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-sm font-semibold rounded-xl px-3.5 py-2.5 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-600 pr-9 cursor-pointer"
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
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                    Total
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-emerald-950">
                      ${pricing.grandTotalUsd}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-emerald-800">
                      {visaTypeOptions.find((v) => v.value === quoteVisaType)?.shortLabel}
                    </span>
                  </div>
                </div>

                <a
                  href="https://vietnamvisa.govt.vn/apply-online"
                  target="_blank"
                  rel="nofollow"
                  className="w-full bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-extrabold text-sm sm:text-base py-3 px-5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer border border-orange-500"
                >
                  <span>Start Application →</span>
                </a>
              </div>

              {/* Fine Print Footer */}
              <div className="space-y-1 text-xs text-slate-400 leading-snug">
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


