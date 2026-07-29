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
    <section className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 sm:p-8 lg:p-10 space-y-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold px-3.5 py-1.5 rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          <span>
            {isVi
              ? 'DỊCH VỤ E-VISA VIỆT NAM UY TÍN HÀNG ĐẦU 2026'
              : 'VIETNAM E-VISA AGENCY & TRAVEL SERVICES'}
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
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

      {/* 4 Core Value Proposition Cards (SEO & User Conversion Focus) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Card 1 */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-indigo-300 transition-all space-y-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-extrabold text-slate-900">
            {isVi ? 'Đảm Bảo Duyệt 100% & Hoàn Tiền' : '100% Approval & Guarantee'}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {isVi
              ? 'Chuyên viên kiểm tra kỹ lưỡng họ tên, số hộ chiếu và chuẩn định dạng ảnh trước khi nộp. Cam kết hoàn tiền 100% nếu visa bị trễ hoặc từ chối.'
              : 'Every passport and photo is manually checked for 100% compliance. If your visa is delayed or denied, we provide a full refund.'}
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-indigo-300 transition-all space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-extrabold text-slate-900">
            {isVi ? 'Xử Lý Khẩn Cấp Từ 1 Giờ' : 'Super Urgent 1-Hour Express'}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {isVi
              ? 'Cần visa gấp để lên máy bay hôm nay? Gói Super Urgent giúp bạn nhận công văn/e-Visa phê duyệt trong 1 - 4 giờ làm việc.'
              : 'Flying today or over the weekend? Our emergency express lane processes urgent approvals in 1 to 4 working hours.'}
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-indigo-300 transition-all space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
            <Plane className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-extrabold text-slate-900">
            {isVi ? 'Đón Sân Bay Fast-Track VIP' : 'Airport Fast-Track Service'}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {isVi
              ? 'Bỏ qua hàng dài chờ đợi tại sân bay Tân Sơn Nhất, Nội Bài, Đà Nẵng. Nhân viên đón tận cửa máy bay và hỗ trợ nhập cảnh ưu tiên.'
              : 'Skip 2-hour lines at Hanoi (HAN), Ho Chi Minh (SGN), and Da Nang (DAD) airports. Our officer greets you at the gate.'}
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-indigo-300 transition-all space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
            <Headphones className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-extrabold text-slate-900">
            {isVi ? 'Hỗ Trợ 24/7 Đa Ngôn Ngữ' : '24/7 Human Support'}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {isVi
              ? 'Hỗ trợ giải đáp thắc mắc qua WhatsApp, Email, Hotline 24/7 bằng tiếng Việt, Anh, Pháp, Đức, Nhật, Trung.'
              : 'Dedicated customer care via WhatsApp (+84 832 320 320), live chat, and email in English, Vietnamese, French, German, Japanese, Chinese.'}
          </p>
        </div>
      </div>

      {/* High-Converting SEO Info Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-8 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-950 font-black text-[10px] uppercase px-2.5 py-0.5 rounded-full">
            <span>2026 IMMIGRATION POLICY HIGHLIGHTS</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            {isVi
              ? 'Quy Định E-Visa Việt Nam 2026 Mới Nhất Cho Du Khách'
              : 'Vietnam E-Visa Rules & Guidelines for 2026'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {isVi
              ? 'Thị thực điện tử Việt Nam áp dụng cho tất cả 190+ quốc gia và vùng lãnh thổ, có thời hạn từ 30 ngày đến 90 ngày (nhập cảnh 1 lần hoặc nhiều lần). Cho phép nhập cảnh qua các cửa khẩu quốc tế gồm sân bay, đường bộ và đường biển.'
              : 'Vietnam e-Visa is valid for 30 to 90 days with Single or Multiple entry options for all countries. Valid across international border checkpoints in Vietnam (airports, land ports, and seaports). No physical passport submission required.'}
          </p>
          <div className="pt-1 flex flex-wrap items-center gap-4 text-xs font-semibold text-amber-300">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>30-Day & 90-Day Validity</span>
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Single & Multiple Entry</span>
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Vietnam Entry Checkpoints</span>
            </span>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
          <button
            onClick={onOpenOverview || onStartApplication}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs sm:text-sm py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border border-orange-500"
          >
            <span>{isVi ? 'Xem Tổng Quan E-Visa →' : 'Vietnam eVisa Overview →'}</span>
          </button>

          <button
            onClick={onOpenRequirements}
            className="w-full bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 font-bold text-xs py-3 px-5 rounded-xl border border-slate-700 transition-all flex items-center justify-center gap-2"
          >
            <Globe className="w-4 h-4 text-indigo-400" />
            <span>{isVi ? 'Xem Các Quốc Gia Miễn Visa' : 'Check Country Eligibility'}</span>
          </button>
        </div>
      </div>

    </section>
  );
};
