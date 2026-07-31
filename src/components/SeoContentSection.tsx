import React from 'react';
import {
  ShieldCheck,
  Zap,
  Clock,
  Headphones,
  CheckCircle2,
  Globe,
  FileCheck,
  Plane,
  Award,
  Sparkles,
  ChevronRight,
  UserCheck
} from 'lucide-react';
import { Language } from '../types';

interface SeoContentSectionProps {
  currentLang: Language;
  onStartApplication: () => void;
  onOpenRequirements: () => void;
  onOpenOverview?: () => void;
}

export const SeoContentSection: React.FC<SeoContentSectionProps> = ({
  currentLang,
  onStartApplication,
  onOpenRequirements,
  onOpenOverview
}) => {
  const isVi = currentLang === 'vi';

  return (
    <section className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-slate-200 p-3.5 sm:p-8 lg:p-10 space-y-6 sm:space-y-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3">
        <div className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-200 text-indigo-700 text-[11px] sm:text-xs font-bold px-3 py-1 sm:py-1.5 rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
          <span>
            {isVi
              ? 'DỊCH VỤ E-VISA VIỆT NAM UY TÍN HÀNG ĐẦU 2026'
              : 'VIETNAM E-VISA AGENCY & TRAVEL SERVICES'}
          </span>
        </div>

        <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug sm:leading-tight">
          {isVi
            ? 'Giải Pháp Xin E-Visa Việt Nam Nhanh Chóng, Đảm Bảo 100% Đậu'
            : 'Fast, Guaranteed & Seamless Vietnam E-Visa Application Service'}
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
          {isVi
            ? 'Cung cấp dịch vụ tư vấn, kiểm tra hồ sơ và xử lý thị thực điện tử (E-Visa) Việt Nam cho khách quốc tế, Việt kiều và doanh nhân. Cam kết duyệt nhanh từ 1 giờ, hỗ trợ trọn gói không phát sinh phí.'
            : 'Trusted processing portal for 30-day & 90-day Vietnam e-Visas. We verify your passport details and photo compliance before government submission to prevent delays and rejections.'}
        </p>
      </div>

      {/* 4 Core Value Proposition Cards (2 Columns on mobile for compact vertical layout) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5">
        {/* Card 1 */}
        <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border border-slate-200 hover:border-indigo-300 transition-all space-y-2 sm:space-y-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">
            {isVi ? 'Đảm Bảo Duyệt 100%' : '100% Approval Guarantee'}
          </h3>
          <p className="text-[11px] sm:text-xs text-slate-600 leading-normal sm:leading-relaxed">
            {isVi
              ? 'Kiểm tra họ tên, số hộ chiếu & ảnh chuẩn 100% trước khi nộp. Hoàn tiền nếu trễ.'
              : 'Every passport & photo is checked for 100% compliance. Full refund guarantee.'}
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border border-slate-200 hover:border-indigo-300 transition-all space-y-2 sm:space-y-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">
            {isVi ? 'Xử Lý Khẩn Cấp 1H' : 'Super Urgent 1-Hour Express'}
          </h3>
          <p className="text-[11px] sm:text-xs text-slate-600 leading-normal sm:leading-relaxed">
            {isVi
              ? 'Cần visa gấp? Gói Super Urgent duyệt công văn trong 1 - 4 giờ làm việc.'
              : 'Emergency express lane processes urgent approvals in 1 to 4 working hours.'}
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border border-slate-200 hover:border-indigo-300 transition-all space-y-2 sm:space-y-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
            <Plane className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">
            {isVi ? 'Fast-Track Sân Bay' : 'Airport Fast-Track VIP'}
          </h3>
          <p className="text-[11px] sm:text-xs text-slate-600 leading-normal sm:leading-relaxed">
            {isVi
              ? 'Bỏ qua xếp hàng chờ tại Tân Sơn Nhất, Nội Bài, Đà Nẵng. Ưu tiên nhập cảnh.'
              : 'Skip 2-hour airport lines at HAN, SGN & DAD. Officer greets you at gate.'}
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border border-slate-200 hover:border-indigo-300 transition-all space-y-2 sm:space-y-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
            <Headphones className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">
            {isVi ? 'Hỗ Trợ 24/7 Đa Ngôn Ngữ' : '24/7 Human Support'}
          </h3>
          <p className="text-[11px] sm:text-xs text-slate-600 leading-normal sm:leading-relaxed">
            {isVi
              ? 'Hỗ trợ WhatsApp, Email, Live chat 24/7 bằng tiếng Việt, Anh, Pháp, Đức, Nhật, Trung.'
              : 'Dedicated care via WhatsApp (+84 832 320 320) & chat in EN, VI, FR, DE, JA, ZH.'}
          </p>
        </div>
      </div>

      {/* High-Converting SEO Info Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-xl sm:rounded-2xl p-4 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-center">
        <div className="lg:col-span-8 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-950 font-black text-[9px] sm:text-[10px] uppercase px-2 py-0.5 rounded-full">
            <span>2026 IMMIGRATION POLICY HIGHLIGHTS</span>
          </div>
          <h3 className="text-lg sm:text-2xl font-extrabold text-white">
            {isVi
              ? 'Quy Định E-Visa Việt Nam 2026 Mới Nhất Cho Du Khách'
              : 'Vietnam E-Visa Rules & Guidelines for 2026'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {isVi
              ? 'Thị thực điện tử Việt Nam áp dụng cho tất cả 190+ quốc gia và vùng lãnh thổ, có thời hạn từ 30 ngày đến 90 ngày (nhập cảnh 1 lần hoặc nhiều lần). Cho phép nhập cảnh qua các cửa khẩu quốc tế gồm sân bay, đường bộ và đường biển.'
              : 'Vietnam e-Visa is valid for 30 to 90 days with Single or Multiple entry options for all countries. Valid across international border checkpoints in Vietnam (airports, land ports, and seaports). No physical passport submission required.'}
          </p>
          <div className="pt-1 flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs font-semibold text-amber-300">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>30 & 90-Day Validity</span>
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Single & Multiple Entry</span>
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Airports, Land & Seaports</span>
            </span>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5 justify-center pt-2 lg:pt-0">
          <button
            onClick={onOpenOverview || onStartApplication}
            className="w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-extrabold text-xs sm:text-sm py-3 px-5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer border border-indigo-500"
          >
            <span>Vietnam E-Visa →</span>
          </button>

          <button
            onClick={onOpenRequirements}
            className="w-full bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 font-bold text-xs py-2.5 px-4 rounded-xl border border-slate-700 transition-all flex items-center justify-center gap-2"
          >
            <Globe className="w-4 h-4 text-indigo-400" />
            <span>{isVi ? 'Xem Các Quốc Gia Miễn Visa' : 'Check Country Eligibility'}</span>
          </button>
        </div>
      </div>

    </section>
  );
};
