import React, { useState } from 'react';
import {
  Calculator,
  Users,
  Clock,
  Globe,
  FileText,
  Sparkles,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Zap,
  Info
} from 'lucide-react';
import { VisaType, ProcessingTime, ExtraService, Language } from '../types';
import { COUNTRIES_DATA } from '../data/countries';
import { VISA_TYPE_PRICING, PROCESSING_SPEED_PRICING, EXTRA_SERVICES_PRICING, calculateVisaFees } from '../data/pricing';
import { TRANSLATIONS } from '../data/translations';

interface QuickFeeCalculatorProps {
  currentLang: Language;
  onApplyWithOptions: (options: {
    nationality: string;
    visaType: VisaType;
    processingTime: ProcessingTime;
    applicantCount: number;
  }) => void;
}

export const QuickFeeCalculator: React.FC<QuickFeeCalculatorProps> = ({
  currentLang,
  onApplyWithOptions
}) => {
  const isVi = currentLang === 'vi';

  const [selectedNationality] = useState('United States');
  const [selectedVisaType, setSelectedVisaType] = useState<VisaType>('tourist_30_single');
  const [selectedSpeed, setSelectedSpeed] = useState<ProcessingTime>('standard');
  const [applicantCount, setApplicantCount] = useState<number>(1);
  const [selectedServices, setSelectedServices] = useState<ExtraService[]>([]);

  // Mobile & Desktop SEO Text Collapse/Expand State
  const [isSeoExpanded, setIsSeoExpanded] = useState<boolean>(false);

  const pricing = calculateVisaFees(
    selectedVisaType,
    selectedSpeed,
    selectedServices,
    applicantCount
  );

  const toggleService = (srv: ExtraService) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter(s => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  return (
    <div id="visa-fee" className="max-w-6xl mx-auto py-6 sm:py-10 space-y-8 font-sans">
      {/* 1. PAGE HEADER & SAPO */}
      <article className="space-y-2.5 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold px-3.5 py-1 rounded-full shadow-2xs">
          <Calculator className="w-3.5 h-3.5 text-indigo-600" />
          <span>
            {isVi ? 'BẢNG GIÁ NIÊM YẾT E-VISA VIỆT NAM 2026' : 'TRANSPARENT VIETNAM E-VISA FEE SCHEDULE 2026'}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {isVi
            ? 'Công Cụ Tính Phí & Bảng Lệ Phí E-Visa Việt Nam Trọn Gói'
            : 'Vietnam E-Visa Fee Calculator & Official Pricing Schedule'}
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed text-center bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 sm:p-4 shadow-2xs">
          {isVi
            ? 'Tra cứu và tính toán chính xác tổng chi phí cấp Thị thực điện tử (E-Visa) Việt Nam. Bảng giá minh bạch đã bao gồm phí đóng dấu Chính phủ và phí dịch vụ thẩm định hồ sơ.'
            : 'Calculate the total cost for your Vietnam Electronic Visa (E-Visa). Our transparent breakdown includes government stamping fees and application processing with zero hidden charges.'}
        </p>
      </article>

      {/* 2. COMPACT INTERACTIVE FEE CALCULATOR BOX */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 sm:p-7 space-y-5">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-1.5 text-indigo-700 font-bold text-xs uppercase tracking-wider mb-0.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>{isVi ? 'Tính Phí Nhanh Trực Tuyến' : 'Live Fee Estimator'}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
              {isVi ? 'Chọn Thông Tin Chuyến Đi Của Bạn' : 'Select Visa Options'}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Controls Form - Sleek & Compact Dropdowns (7 Cols) */}
          <div className="lg:col-span-7 space-y-3.5">
            {/* Number of Applicants Dropdown */}
            <div className="space-y-1">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-indigo-600" />
                <span>{isVi ? 'Số lượng khách' : 'Applicants Count'}</span>
              </label>
              <div className="relative">
                <select
                  value={applicantCount}
                  onChange={(e) => setApplicantCount(parseInt(e.target.value))}
                  className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 pr-10 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Applicant' : 'Applicants'}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Visa Type Dropdown */}
            <div className="space-y-1">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1">
                <FileText className="w-3.5 h-3.5 text-indigo-600" />
                <span>{isVi ? 'Loại thị thực (Visa Type & Duration)' : 'Visa Type & Duration'}</span>
              </label>
              <div className="relative">
                <select
                  value={selectedVisaType}
                  onChange={(e) => setSelectedVisaType(e.target.value as VisaType)}
                  className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 pr-10 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all cursor-pointer"
                >
                  <option value="tourist_30_single">1-month single (30 days - Single entry) — $54 / pax</option>
                  <option value="tourist_30_multi">1-month multiple (30 days - Multiple entry) — $84 / pax</option>
                  <option value="tourist_90_single">3-month single (90 days - Single entry) — $94 / pax</option>
                  <option value="tourist_90_multi">3-month multiple (90 days - Multiple entry) — $104 / pax</option>
                  <option value="business_30_single">1-month business single (30 days) — $54 / pax</option>
                  <option value="business_90_multi">3-month business multiple (90 days) — $104 / pax</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Processing Speed Dropdown */}
            <div className="space-y-1">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-indigo-600" />
                <span>{isVi ? 'Tốc độ xử lý (Processing Speed)' : 'Processing Speed Tier'}</span>
              </label>
              <div className="relative">
                <select
                  value={selectedSpeed}
                  onChange={(e) => setSelectedSpeed(e.target.value as ProcessingTime)}
                  className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 pr-10 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all cursor-pointer"
                >
                  <option value="standard">Normal (5 to 10 business days) — Included ($0)</option>
                  <option value="urgent_24h">Urgent (2 business days) — +$45 / pax</option>
                  <option value="emergency_4h">Super Urgent (1 business day) — +$85 / pax</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Compact Add-ons Selection */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                {isVi ? 'Dịch Vụ Bổ Sung Sân Bay (Tùy Chọn)' : 'Optional Airport Add-Ons'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {(['travel_insurance', 'fast_track', 'car_pickup'] as ExtraService[]).map((srvKey) => {
                  const srv = EXTRA_SERVICES_PRICING[srvKey];
                  const isChecked = selectedServices.includes(srvKey);
                  return (
                    <label
                      key={srvKey}
                      onClick={() => toggleService(srvKey)}
                      className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-emerald-50/90 border-emerald-500 text-emerald-950 font-bold'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100/80'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="accent-emerald-600 w-3.5 h-3.5 rounded cursor-pointer shrink-0"
                      />
                      <div className="flex-1 truncate">
                        <div className="truncate font-semibold text-xs">{srv.labelEn}</div>
                        <div className="text-[11px] text-emerald-700 font-extrabold">+${srv.feePerApplicantUsd}/pax</div>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Summary Box - Clear Light Breakdown (5 Cols) */}
          <div className="lg:col-span-5 bg-slate-50 text-slate-900 rounded-xl p-4 sm:p-5 border border-slate-200 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                  {isVi ? 'Bảng Chi Tiết Giá' : 'Fee Breakdown'}
                </span>
                <span className="text-xs text-slate-500 font-semibold">{applicantCount} Pax</span>
              </div>

              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">
                    {isVi ? 'Phí Visa Cơ Bản' : 'Base Visa Fee'} (${pricing.govFeePerPerson + pricing.serviceFeePerPerson} x {applicantCount}):
                  </span>
                  <span className="font-bold text-slate-900">${(pricing.govFeePerPerson + pricing.serviceFeePerPerson) * applicantCount} USD</span>
                </div>

                {pricing.speedFeeTotal > 0 && (
                  <div className="flex items-center justify-between text-indigo-800">
                    <span>{isVi ? 'Phụ Phí Xử Lý Khẩn' : 'Speed Surcharge'}:</span>
                    <span className="font-extrabold">+${pricing.speedFeeTotal} USD</span>
                  </div>
                )}

                {pricing.extraServicesTotal > 0 && (
                  <div className="flex items-center justify-between text-emerald-800">
                    <span>{isVi ? 'Dịch Vụ Bổ Sung' : 'Selected Add-Ons'}:</span>
                    <span className="font-extrabold">+${pricing.extraServicesTotal} USD</span>
                  </div>
                )}

                {pricing.groupDiscount > 0 && (
                  <div className="flex items-center justify-between text-emerald-700 font-semibold">
                    <span>{isVi ? 'Giảm Giá Nhóm' : 'Group Discount'}:</span>
                    <span>-${pricing.groupDiscount} USD</span>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-slate-200 space-y-0.5">
                <div className="text-[11px] text-slate-500 uppercase tracking-wider font-bold">
                  {isVi ? 'TỔNG CỘNG TRỌN GÓI' : 'GRAND TOTAL'}
                </div>
                <div className="text-2xl sm:text-3xl font-black text-indigo-700">
                  ${pricing.grandTotalUsd} <span className="text-xs font-normal text-slate-500">USD</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <a
                href="https://vietnamvisa.govt.vn/apply-online"
                target="_blank"
                rel="nofollow"
                className="w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-extrabold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 border border-indigo-500 cursor-pointer"
              >
                <span>{isVi ? 'Bắt Đầu Nộp Đơn Ngay →' : 'Apply Online Now →'}</span>
              </a>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{isVi ? 'Không phụ phí ẩn • Cam kết hoàn 100%' : '100% Transparent Fee Guarantee'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. OFFICIAL PRICING TABLES */}
      <section className="space-y-6 bg-white rounded-2xl shadow-sm border border-slate-200 p-5 sm:p-7">
        <div className="border-b border-slate-100 pb-2.5">
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
            {isVi ? 'Bảng Giá Niêm Yết Chi Tiết' : 'Visa Fee Schedules'}
          </h2>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            {isVi
              ? 'Chi tiết bảng lệ phí e-Visa theo loại thị thực, tốc độ xử lý và các dịch vụ bổ sung tùy chọn.'
              : 'Refer to our itemized rates for visa types, processing speeds, and optional airport services.'}
          </p>
        </div>

        {/* TABLE 1: VISA TYPE */}
        <div className="space-y-2">
          <h3 className="text-sm sm:text-base font-extrabold text-slate-900 uppercase tracking-tight flex items-center gap-2">
            <FileText className="w-4 h-4 text-indigo-600" />
            <span>1. VISA TYPE & DURATION</span>
          </h3>

          <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-700 border-b border-slate-200 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                  <th className="py-2.5 px-4">VISA TYPE</th>
                  <th className="py-2.5 px-4">DURATION</th>
                  <th className="py-2.5 px-4">ENTRIES</th>
                  <th className="py-2.5 px-4 text-right">PER APPLICANT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-2.5 px-4 font-bold text-slate-900">1-month single</td>
                  <td className="py-2.5 px-4">30 days</td>
                  <td className="py-2.5 px-4">Single entry</td>
                  <td className="py-2.5 px-4 text-right font-extrabold text-emerald-700">$54</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-2.5 px-4 font-bold text-slate-900">1-month multiple</td>
                  <td className="py-2.5 px-4">30 days</td>
                  <td className="py-2.5 px-4">Multiple entry</td>
                  <td className="py-2.5 px-4 text-right font-extrabold text-emerald-700">$84</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-2.5 px-4 font-bold text-slate-900">3-month single</td>
                  <td className="py-2.5 px-4">90 days</td>
                  <td className="py-2.5 px-4">Single entry</td>
                  <td className="py-2.5 px-4 text-right font-extrabold text-emerald-700">$94</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-2.5 px-4 font-bold text-slate-900">3-month multiple</td>
                  <td className="py-2.5 px-4">90 days</td>
                  <td className="py-2.5 px-4">Multiple entry</td>
                  <td className="py-2.5 px-4 text-right font-extrabold text-emerald-700">$104</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* TABLE 2: PROCESSING SPEED */}
        <div className="space-y-2 pt-1">
          <div className="space-y-0.5">
            <h3 className="text-sm sm:text-base font-extrabold text-slate-900 uppercase tracking-tight flex items-center gap-2">
              <Clock className="w-4 h-4 text-indigo-600" />
              <span>2. PROCESSING SPEED</span>
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Pick the speed that matches your travel date. Times are measured from the moment our team submits your application to Vietnam Immigration.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-700 border-b border-slate-200 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                  <th className="py-2.5 px-4">TIER</th>
                  <th className="py-2.5 px-4">DELIVERY</th>
                  <th className="py-2.5 px-4 text-right">SURCHARGE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-2.5 px-4 font-bold text-slate-900">Normal</td>
                  <td className="py-2.5 px-4">5 to 10 business days</td>
                  <td className="py-2.5 px-4 text-right font-extrabold text-emerald-700">Included</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-2.5 px-4 font-bold text-slate-900">Urgent</td>
                  <td className="py-2.5 px-4">2 business days</td>
                  <td className="py-2.5 px-4 text-right font-extrabold text-emerald-700">+$45 per applicant</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-2.5 px-4 font-bold text-slate-900">Super Urgent</td>
                  <td className="py-2.5 px-4">1 business day</td>
                  <td className="py-2.5 px-4 text-right font-extrabold text-emerald-700">+$85 per applicant</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* TABLE 3: OPTIONAL ADD-ONS */}
        <div className="space-y-2 pt-1">
          <div className="space-y-0.5">
            <h3 className="text-sm sm:text-base font-extrabold text-slate-900 uppercase tracking-tight flex items-center gap-2">
              <Zap className="w-4 h-4 text-indigo-600" />
              <span>3. OPTIONAL ADD-ONS</span>
            </h3>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-700 border-b border-slate-200 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                  <th className="py-2.5 px-4 min-w-[130px]">ADD-ON</th>
                  <th className="py-2.5 px-4">WHAT YOU GET</th>
                  <th className="py-2.5 px-4 text-right min-w-[120px]">PRICE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-2.5 px-4 font-bold text-slate-900">Travel Insurance</td>
                  <td className="py-2.5 px-4 text-slate-600">
                    Medical & baggage issues coverage up to $10,000
                  </td>
                  <td className="py-2.5 px-4 text-right font-extrabold text-emerald-700">$30 / applicant</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-2.5 px-4 font-bold text-slate-900">Airport Fast-Track</td>
                  <td className="py-2.5 px-4 text-slate-600">
                    Priority VIP immigration lane, saves 30–60+ mins
                  </td>
                  <td className="py-2.5 px-4 text-right font-extrabold text-emerald-700">$35 / applicant</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-2.5 px-4 font-bold text-slate-900">Car Pickup</td>
                  <td className="py-2.5 px-4 text-slate-600">
                    Private airport transfer directly to your hotel
                  </td>
                  <td className="py-2.5 px-4 text-right font-extrabold text-emerald-700">$35 / applicant</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. GUIDANCE & POLICIES SECTION */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 sm:p-7 space-y-4 relative overflow-hidden">
        <div className="border-b border-slate-100 pb-2.5">
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
            {isVi ? 'Hướng Dẫn Chi Tiết Chi Phí & Quy Định Thị Thực Việt Nam 2026' : 'Comprehensive Guide to Vietnam E-Visa Fees & Payment Policies'}
          </h2>
        </div>

        {/* Collapsible Article Body */}
        <div
          className={`relative transition-all duration-500 overflow-hidden text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4 ${
            !isSeoExpanded ? 'max-h-[260px] sm:max-h-[300px]' : 'max-h-[5000px]'
          }`}
        >
          {/* Article Section 1 */}
          <div className="space-y-1">
            <h3 className="text-xs sm:text-sm font-extrabold text-slate-900">
              1. What Do Vietnam E-Visa Fees Cover?
            </h3>
            <p className="text-slate-600 text-justify">
              When applying for an Electronic Visa (E-Visa) for Vietnam, the total cost comprises two primary elements: the mandatory <strong>Government Stamping Fee</strong> and the <strong>Application Processing & Review Fee</strong>.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>
                <strong>Government Stamping Fee:</strong> Fixed fee collected directly by Vietnam Immigration Department ($25 USD for single entry and $50 USD for multiple entry).
              </li>
              <li>
                <strong>Pre-Submission Verification Fee:</strong> Includes passport data auditing, 4x6 photo compliance review, entry port verification, and round-the-clock status monitoring.
              </li>
            </ul>
          </div>

          {/* Article Section 2 */}
          <div className="space-y-1">
            <h3 className="text-xs sm:text-sm font-extrabold text-slate-900">
              2. Processing Speed Comparison: Normal vs Urgent Tiers
            </h3>
            <p className="text-slate-600 text-justify">
              Processing timelines depend directly on your scheduled departure date. For travelers with flexible travel itineraries, the <strong>Normal (5 to 10 business days)</strong> tier delivers maximum savings. However, if you have immediate flight arrangements or weekend emergencies, urgent tiers guarantee expedited issuance:
            </p>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1 text-xs">
              <p>
                <strong>Urgent (2 business days):</strong> Recommended for travelers requiring approved visa PDFs within 48 hours. Surcharge: +$45 per applicant.
              </p>
              <p>
                <strong>Super Urgent (1 business day / 24 hours):</strong> Priority submission route guaranteeing visa PDF turnaround within 24 working hours. Surcharge: +$85 per applicant.
              </p>
            </div>
          </div>

          {/* Article Section 3 */}
          <div className="space-y-1">
            <h3 className="text-xs sm:text-sm font-extrabold text-slate-900">
              3. Benefits of Airport Fast-Track Concierge Services
            </h3>
            <p className="text-slate-600 text-justify">
              During peak tourist seasons (October through April) or late-night arrival peaks at Tan Son Nhat (SGN), Noi Bai (HAN), and Da Nang (DAD) airports, immigration queues frequently extend from 45 minutes to over two hours. The <strong>Airport Fast-Track service ($35 per applicant)</strong> provides a dedicated airport agent greeting you at the arrival airbridge and guiding you through the expedited VIP immigration queue in just 5 to 10 minutes.
            </p>
          </div>

          {/* Article Section 4 */}
          <div className="space-y-1">
            <h3 className="text-xs sm:text-sm font-extrabold text-slate-900">
              4. 100% Money-Back Approval Guarantee & SSL Payment Security
            </h3>
            <p className="text-slate-600 text-justify">
              We uphold strict customer protection standards with a 100% transparent refund policy. In the rare event an application cannot be approved due to technical system faults, 100% of the service fee is refunded immediately. All transactions are encrypted via industry-standard 256-Bit SSL security protocol with formal receipts provided.
            </p>
          </div>

          {/* Bottom Fade Gradient Mask when collapsed */}
          {!isSeoExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none" />
          )}
        </div>

        {/* Expand / Collapse Button */}
        <div className="pt-1 text-center">
          <button
            type="button"
            onClick={() => setIsSeoExpanded(!isSeoExpanded)}
            className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-800 font-bold text-xs px-4 py-2 rounded-xl border border-slate-300/80 transition-all cursor-pointer shadow-2xs"
          >
            <span>
              {isSeoExpanded
                ? isVi
                  ? 'Thu gọn nội dung ▲'
                  : 'Show Less ▲'
                : isVi
                ? 'Xem thêm nội dung hướng dẫn chi tiết ▼'
                : 'Read Full Guide & Details ▼'}
            </span>
            {isSeoExpanded ? (
              <ChevronUp className="w-3.5 h-3.5 text-slate-600" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5 text-slate-600" />
            )}
          </button>
        </div>
      </section>
    </div>
  );
};
