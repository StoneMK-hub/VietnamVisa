import React from 'react';
import {
  FileText,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Clock,
  Plane,
  Upload,
  CreditCard,
  Download,
  Sparkles,
  AlertCircle,
  Phone,
  HelpCircle,
  Globe,
  UserCheck,
  Zap,
  Award
} from 'lucide-react';
import { Language } from '../types';

interface ApplyOnlineGuideViewProps {
  currentLang: Language;
}

const APPLY_PORTAL_URL = 'https://vietnamvisa.govt.vn/apply-online';

export const ApplyOnlineGuideView: React.FC<ApplyOnlineGuideViewProps> = ({ currentLang }) => {
  const isVi = currentLang === 'vi';

  return (
    <div className="max-w-7xl mx-auto px-2.5 sm:px-8 py-4 sm:py-12 space-y-6 sm:space-y-10">
      {/* SEO ARTICLE HEADER & SAPO */}
      <article className="space-y-4 sm:space-y-6">
        {/* Category Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-200 text-indigo-700 text-[11px] sm:text-xs font-bold px-3 py-1 sm:px-4 sm:py-1.5 rounded-full shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
            <span className="truncate max-w-[280px] sm:max-w-none">
              {isVi
                ? 'HƯỚNG DẪN NỘP ĐƠN XIN E-VISA VIỆT NAM TRỰC TUYẾN 2026'
                : 'VIETNAM E-VISA ONLINE APPLICATION PORTAL 2026'}
            </span>
          </div>
        </div>

        {/* H1 SEO Headline */}
        <h1 className="text-xl sm:text-4xl lg:text-5xl font-black text-slate-900 text-center tracking-tight leading-snug sm:leading-tight max-w-4xl mx-auto px-2">
          {isVi
            ? 'Quy Trình 4 Bước Xin E-Visa Việt Nam Trực Tuyến Nhanh Chóng & An Toàn'
            : 'How to Apply for Vietnam E-Visa Online: Step-by-Step Application Guide'}
        </h1>

        {/* SEO Sapo Paragraph */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5 sm:p-8 max-w-4xl mx-auto shadow-2xs">
          <p className="text-xs sm:text-lg text-slate-600 leading-normal sm:leading-relaxed font-normal text-left sm:text-center">
            {isVi
              ? 'Dịch vụ cấp Thị thực điện tử (E-Visa) Việt Nam hỗ trợ công dân tất cả 190+ quốc gia và vùng lãnh thổ xin visa du lịch hoặc công tác 30 ngày và 90 ngày (nhập cảnh đơn hoặc nhiều lần). Hệ thống xử lý thông minh giúp kiểm tra tính hợp lệ của hộ chiếu và ảnh chân dung trước khi gửi, bảo đảm 100% tỷ lệ phê duyệt, có tùy chọn khẩn 1 đến 2 ngày làm việc.'
              : 'Welcome to the step-by-step application portal guide for Vietnam Electronic Visas (E-Visa). Vietnam currently grants 30-day and 90-day single or multiple-entry e-Visas to citizens of all countries. Our pre-check verification system reviews your passport copy and portrait photo compliance before government submission to guarantee 100% approval with express processing in 1 to 2 business days.'}
          </p>

          <div className="mt-3 sm:mt-5 grid grid-cols-2 sm:flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 text-xs sm:text-sm font-bold text-slate-700">
            <span className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl border border-slate-200/80 shadow-2xs text-[11px] sm:text-xs">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
              <span className="truncate">{isVi ? '190+ Quốc gia' : 'All 190+ Nationalities'}</span>
            </span>
            <span className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl border border-slate-200/80 shadow-2xs text-[11px] sm:text-xs">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
              <span className="truncate">{isVi ? 'Thị Thực Nhập Cảnh' : 'Valid Entry Visa'}</span>
            </span>
            <span className="col-span-2 sm:col-span-1 flex items-center justify-center gap-1.5 bg-white px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl border border-slate-200/80 shadow-2xs text-[11px] sm:text-xs">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
              <span className="truncate">{isVi ? 'Xử lý khẩn 1-2 ngày' : 'Express 1-2 Day Option'}</span>
            </span>
          </div>
        </div>

        {/* CLEAN, COMPACT CTA BUTTON */}
        <div className="pt-1 sm:pt-2 flex flex-col items-center justify-center text-center space-y-2 sm:space-y-3 max-w-xl mx-auto px-1">
          <a
            href={APPLY_PORTAL_URL}
            target="_blank"
            rel="nofollow"
            className="w-full max-w-md sm:w-auto bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold sm:font-black text-xs sm:text-base px-5 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 border border-orange-500 cursor-pointer"
          >
            <span>{isVi ? 'TRUY CẬP TRANG NỘP ĐƠN E-VISA →' : 'GO TO ONLINE APPLICATION FORM →'}</span>
            <ExternalLink className="w-4 h-4 text-white shrink-0" />
          </a>

          <p className="text-[11px] sm:text-sm text-slate-500 font-medium inline-flex items-center justify-center gap-1.5 text-center leading-tight">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
            <span>
              {isVi
                ? 'Liên kết mã hóa SSL 256-bit an toàn'
                : 'Direct 256-bit SSL encrypted application submission link'}
            </span>
          </p>
        </div>
      </article>

      {/* 4 STEP VISUAL GUIDE SECTION */}
      <section className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl border border-slate-200/90 p-3.5 sm:p-10 space-y-4 sm:space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-1 sm:space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 text-[10px] sm:text-xs font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
            <span>{isVi ? 'QUY TRÌNH ĐƠN GIẢN' : 'SIMPLE 4-STEP WORKFLOW'}</span>
          </div>
          <h2 className="text-lg sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {isVi ? 'Các Bước Nộp Đơn Xin E-Visa Việt Nam' : '4 Easy Steps to Complete Your Application'}
          </h2>
          <p className="text-xs sm:text-base text-slate-600 font-normal">
            {isVi
              ? 'Thực hiện 4 bước sau trên hệ thống đăng ký để hoàn tất hồ sơ nhanh chóng trong 5 phút.'
              : 'Follow these steps on the online portal to finish your visa submission in less than 5 minutes.'}
          </p>
        </div>

        {/* 4 Steps 2-Column Grid on Mobile, 4-Column on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {/* Step 1 */}
          <div className="bg-slate-50/90 rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-slate-200/90 hover:border-indigo-400 transition-all space-y-2 sm:space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-indigo-600 text-white font-black text-xs sm:text-base flex items-center justify-center shadow-2xs">
                1
              </div>
              <div className="space-y-1">
                <h3 className="text-xs sm:text-base font-extrabold text-slate-900 leading-tight">
                  {isVi ? '1. Chọn Loại Visa' : '1. Choose Visa & Speed'}
                </h3>
                <p className="text-[11px] sm:text-sm text-slate-600 leading-normal font-normal">
                  {isVi
                    ? 'Chọn loại e-Visa 30 hoặc 90 ngày (1 lần/nhiều lần) & tốc độ (Tiêu chuẩn/Khẩn).'
                    : 'Select 30-day or 90-day single/multiple entry & speed (Standard/Urgent).'}
                </p>
              </div>
            </div>
            <div className="pt-1 text-[10px] sm:text-xs font-bold text-indigo-700 flex items-center gap-1">
              <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500 fill-amber-500 shrink-0" />
              <span className="truncate">{isVi ? 'Có xử lý siêu khẩn' : 'Express Available'}</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-slate-50/90 rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-slate-200/90 hover:border-indigo-400 transition-all space-y-2 sm:space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-indigo-600 text-white font-black text-xs sm:text-base flex items-center justify-center shadow-2xs">
                2
              </div>
              <div className="space-y-1">
                <h3 className="text-xs sm:text-base font-extrabold text-slate-900 leading-tight">
                  {isVi ? '2. Điền Đơn & Tải Ảnh' : '2. Enter Details & Photo'}
                </h3>
                <p className="text-[11px] sm:text-sm text-slate-600 leading-normal font-normal">
                  {isVi
                    ? 'Nhập thông tin hộ chiếu, ngày nhập cảnh & tải ảnh hộ chiếu + ảnh chân dung 4x6.'
                    : 'Enter passport details, arrival date & upload passport page + 4x6 photo.'}
                </p>
              </div>
            </div>
            <div className="pt-1 text-[10px] sm:text-xs font-bold text-indigo-700 flex items-center gap-1">
              <Upload className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-indigo-600 shrink-0" />
              <span className="truncate">{isVi ? 'Duyệt ảnh tự động' : 'Auto Validation'}</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-slate-50/90 rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-slate-200/90 hover:border-indigo-400 transition-all space-y-2 sm:space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-indigo-600 text-white font-black text-xs sm:text-base flex items-center justify-center shadow-2xs">
                3
              </div>
              <div className="space-y-1">
                <h3 className="text-xs sm:text-base font-extrabold text-slate-900 leading-tight">
                  {isVi ? '3. Thanh Toán Safe' : '3. Review & Pay'}
                </h3>
                <p className="text-[11px] sm:text-sm text-slate-600 leading-normal font-normal">
                  {isVi
                    ? 'Rà soát thông tin chính xác & thanh toán phí an toàn qua Thẻ, PayPal, VietQR.'
                    : 'Review submission carefully & pay fees via Cards, PayPal, VietQR.'}
                </p>
              </div>
            </div>
            <div className="pt-1 text-[10px] sm:text-xs font-bold text-indigo-700 flex items-center gap-1">
              <CreditCard className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 shrink-0" />
              <span className="truncate">{isVi ? 'Không phí ẩn' : 'No Hidden Fees'}</span>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-slate-50/90 rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-slate-200/90 hover:border-indigo-400 transition-all space-y-2 sm:space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-indigo-600 text-white font-black text-xs sm:text-base flex items-center justify-center shadow-2xs">
                4
              </div>
              <div className="space-y-1">
                <h3 className="text-xs sm:text-base font-extrabold text-slate-900 leading-tight">
                  {isVi ? '4. Nhận Visa Email' : '4. Receive E-Visa PDF'}
                </h3>
                <p className="text-[11px] sm:text-sm text-slate-600 leading-normal font-normal">
                  {isVi
                    ? 'Kết quả e-Visa gửi trực tiếp về email dưới dạng tệp PDF, sẵn sàng in ra sử dụng.'
                    : 'Visa approval document sent to email as PDF file. Simply print & present.'}
                </p>
              </div>
            </div>
            <div className="pt-1 text-[10px] sm:text-xs font-bold text-indigo-700 flex items-center gap-1">
              <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600 shrink-0" />
              <span className="truncate">{isVi ? 'Tệp PDF sẵn sàng in' : 'Printable PDF File'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS & PREPARATION CHECKLIST SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-start">
        {/* Left Column: Requirements (2-Column Grid on Mobile) */}
        <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-8 border border-slate-200/90 shadow-lg sm:shadow-xl space-y-3 sm:space-y-6">
          <div className="space-y-0.5 sm:space-y-1 border-b border-slate-100 pb-2.5 sm:pb-4">
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-indigo-600 block">
              REQUIREMENTS & GUIDELINES
            </span>
            <h2 className="text-base sm:text-2xl font-extrabold text-slate-900">
              {isVi ? 'Giấy Tờ Cần Chuẩn Bị Khi Nộp Đơn' : 'Required Documents for Application'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-normal">
              {isVi
                ? 'Đảm bảo các giấy tờ sau đáp ứng quy định để xử lý visa thuận lợi nhất.'
                : 'Ensure your documents meet the following criteria before applying.'}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-4">
            <div className="flex flex-col sm:flex-row items-start gap-1.5 sm:gap-3 bg-slate-50/90 p-2.5 sm:p-4 rounded-xl border border-slate-200/80">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold sm:font-extrabold text-slate-900 text-xs sm:text-base leading-snug">
                  {isVi ? 'Hộ Chiếu > 6 Tháng' : 'Valid Passport (>6 months)'}
                </h3>
                <p className="text-slate-600 text-[11px] sm:text-sm mt-0.5 sm:mt-1 leading-normal font-normal">
                  {isVi
                    ? 'Hạn còn ít nhất 6 tháng kể từ ngày nhập cảnh và 2 trang trống.'
                    : 'Valid at least 6 months from arrival with 2 blank pages.'}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-1.5 sm:gap-3 bg-slate-50/90 p-2.5 sm:p-4 rounded-xl border border-slate-200/80">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold sm:font-extrabold text-slate-900 text-xs sm:text-base leading-snug">
                  {isVi ? 'Ảnh Hộ Chiếu Rõ Nét' : 'Clear Passport Data Photo'}
                </h3>
                <p className="text-slate-600 text-[11px] sm:text-sm mt-0.5 sm:mt-1 leading-normal font-normal">
                  {isVi
                    ? 'Chụp/scan trang thông tin rõ chữ, không bóng chói, không mất góc.'
                    : 'Clear scan or photo of passport page without glare or cut borders.'}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-1.5 sm:gap-3 bg-slate-50/90 p-2.5 sm:p-4 rounded-xl border border-slate-200/80">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold sm:font-extrabold text-slate-900 text-xs sm:text-base leading-snug">
                  {isVi ? 'Ảnh Chân Dung Nền Trắng' : 'Portrait Photo (White BG)'}
                </h3>
                <p className="text-slate-600 text-[11px] sm:text-sm mt-0.5 sm:mt-1 leading-normal font-normal">
                  {isVi
                    ? 'Ảnh 4x6 cm chụp thẳng mặt, phông nền trắng, chụp trong 6 tháng.'
                    : 'Recent color 4x6 cm photo, looking straight with white background.'}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-1.5 sm:gap-3 bg-slate-50/90 p-2.5 sm:p-4 rounded-xl border border-slate-200/80">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold sm:font-extrabold text-slate-900 text-xs sm:text-base leading-snug">
                  {isVi ? 'Cửa Khẩu Nhập Cảnh' : 'Intended Border Checkpoint'}
                </h3>
                <p className="text-slate-600 text-[11px] sm:text-sm mt-0.5 sm:mt-1 leading-normal font-normal">
                  {isVi
                    ? 'Xác định rõ sân bay hoặc cửa khẩu đường bộ/đường biển dự kiến.'
                    : 'Select your correct port of entry airport or land/sea border.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Emergency Assistance & Redirect Card */}
        <div className="lg:col-span-5 space-y-3 sm:space-y-6">
          {/* Card: Direct Apply Redirect */}
          <div className="bg-slate-900 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-lg sm:shadow-xl space-y-3 sm:space-y-5 border border-slate-800">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 bg-indigo-500/20 text-indigo-300 text-[10px] sm:text-xs font-extrabold px-2.5 py-0.5 rounded-full border border-indigo-500/30">
                <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>ONLINE FORM ACCESS</span>
              </div>
              <h3 className="text-lg sm:text-2xl font-black text-white">
                {isVi ? 'Sẵn Sàng Nộp Đơn Khai Thị Thực?' : 'Ready to Submit Your Application?'}
              </h3>
              <p className="text-xs sm:text-base text-slate-300 leading-normal font-normal">
                {isVi
                  ? 'Bấm nút dưới đây để chuyển hướng đến trang khai thông tin hồ sơ trực tuyến.'
                  : 'Click below to be transferred to the direct application submission system.'}
              </p>
            </div>

            <a
              href={APPLY_PORTAL_URL}
              target="_blank"
              rel="nofollow"
              className="w-full bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-extrabold text-xs sm:text-base py-3 px-4 rounded-xl sm:rounded-2xl shadow transition-all flex items-center justify-center gap-2 cursor-pointer border border-orange-500"
            >
              <span>{isVi ? 'Đến Trang Nộp Đơn Ngay →' : 'Go to Application Form →'}</span>
              <ExternalLink className="w-4 h-4 text-white shrink-0" />
            </a>

            <div className="pt-2 border-t border-slate-800 text-[11px] sm:text-xs text-slate-400 space-y-1">
              <p className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">Target: https://vietnamvisa.govt.vn/apply-online</span>
              </p>
            </div>
          </div>

          {/* Card: Need Immediate Assistance? */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 space-y-2 sm:space-y-3">
            <div className="flex items-center gap-2 text-amber-900 font-extrabold text-xs sm:text-base">
              <Phone className="w-4 h-4 text-amber-700 shrink-0" />
              <span>{isVi ? 'Cần Hỗ Trợ Khẩn Cấp Trực Tiếp?' : 'Need Emergency Assistance?'}</span>
            </div>
            <p className="text-xs sm:text-sm text-amber-950/80 leading-normal font-normal">
              {isVi
                ? 'Nếu bạn cần tư vấn nhập cảnh khẩn trong 24h, gọi hotline hoặc chat WhatsApp ngay.'
                : 'If flying within 24 hours or needing urgent guidance, contact our 24/7 hotline team.'}
            </p>
            <div className="pt-0.5">
              <a
                href="https://wa.me/84832320320"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-3.5 py-2 rounded-xl shadow transition-colors"
              >
                <span>WhatsApp: +84 832 320 320</span>
                <ExternalLink className="w-3 h-3 text-emerald-200 shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
