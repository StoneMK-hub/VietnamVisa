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

const APPLY_PORTAL_URL = 'https://vietnamvisaservice.com/apply-online';

export const ApplyOnlineGuideView: React.FC<ApplyOnlineGuideViewProps> = ({ currentLang }) => {
  const isVi = currentLang === 'vi';

  const handleRedirect = () => {
    window.open(APPLY_PORTAL_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-10">
      {/* SEO ARTICLE HEADER & SAPO */}
      <article className="space-y-6">
        {/* Category Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>
              {isVi
                ? 'HƯỚNG DẪN NỘP ĐƠN XIN E-VISA VIỆT NAM TRỰC TUYẾN 2026'
                : 'VIETNAM E-VISA ONLINE APPLICATION PORTAL 2026'}
            </span>
          </div>
        </div>

        {/* H1 SEO Headline */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 text-center tracking-tight leading-tight max-w-4xl mx-auto">
          {isVi
            ? 'Quy Trình 4 Bước Xin E-Visa Việt Nam Trực Tuyến Nhanh Chóng & An Toàn'
            : 'How to Apply for Vietnam E-Visa Online: Step-by-Step Application Guide'}
        </h1>

        {/* SEO Sapo Paragraph */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto shadow-2xs">
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal text-justify sm:text-center">
            {isVi
              ? 'Dịch vụ cấp Thị thực điện tử (E-Visa) Việt Nam hỗ trợ công dân tất cả 190+ quốc gia và vùng lãnh thổ xin visa du lịch hoặc công tác 30 ngày và 90 ngày (nhập cảnh đơn hoặc nhiều lần). Hệ thống xử lý thông minh giúp kiểm tra tính hợp lệ của hộ chiếu và ảnh chân dung trước khi gửi, bảo đảm 100% tỷ lệ phê duyệt, có tùy chọn khẩn 1 đến 2 ngày làm việc.'
              : 'Welcome to the step-by-step application portal guide for Vietnam Electronic Visas (E-Visa). Vietnam currently grants 30-day and 90-day single or multiple-entry e-Visas to citizens of all countries. Our pre-check verification system reviews your passport copy and portrait photo compliance before government submission to guarantee 100% approval with express processing in 1 to 2 business days.'}
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-slate-700">
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{isVi ? '190+ Quốc gia được áp dụng' : 'Eligible for all 190+ Nationalities'}</span>
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{isVi ? 'Nhập cảnh qua 33 Cửa khẩu' : 'Accepted at 33 International Ports'}</span>
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{isVi ? 'Xử lý khẩn 1 đến 2 ngày' : 'Express Super Urgent 1-Day Option'}</span>
            </span>
          </div>
        </div>

        {/* CLEAN, DIRECT ORANGE CTA BUTTON (NO HEAVY BACKGROUND BLOCK) */}
        <div className="pt-2 flex flex-col items-center justify-center text-center space-y-3 max-w-2xl mx-auto">
          <button
            onClick={handleRedirect}
            className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-black text-sm sm:text-base px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 border border-orange-500 cursor-pointer"
          >
            <span>{isVi ? 'TRUY CẬP TRANG NỘP ĐƠN E-VISA (APPLY ONLINE) →' : 'GO TO ONLINE APPLICATION FORM →'}</span>
            <ExternalLink className="w-5 h-5 text-white" />
          </button>

          <p className="text-[11px] text-slate-500 font-medium flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>
              {isVi
                ? 'Liên kết chuyển hướng an toàn mã hóa SSL 256-bit'
                : 'Direct 256-bit SSL encrypted application submission link'}
            </span>
          </p>
        </div>
      </article>

      {/* 4 STEP VISUAL GUIDE SECTION */}
      <section className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 sm:p-10 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            <span>{isVi ? 'QUY TRÌNH ĐƠN GIẢN' : 'SIMPLE 4-STEP WORKFLOW'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {isVi ? 'Các Bước Nộp Đơn Xin E-Visa Việt Nam' : '4 Easy Steps to Complete Your Application'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            {isVi
              ? 'Thực hiện 4 bước sau trên hệ thống đăng ký để hoàn tất hồ sơ nhanh chóng trong 5 phút.'
              : 'Follow these steps on the online portal to finish your visa submission in less than 5 minutes.'}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-indigo-400 transition-all space-y-4 relative">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-extrabold text-base flex items-center justify-center shadow-md">
              1
            </div>
            <div className="space-y-1.5">
              <h3 className="text-sm font-extrabold text-slate-900">
                {isVi ? '1. Chọn Loại Visa & Tốc Độ' : '1. Choose Visa & Speed'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isVi
                  ? 'Lựa chọn loại e-Visa 30 ngày hoặc 90 ngày (1 lần hoặc nhiều lần). Chọn thời gian xử lý: Tiêu chuẩn (5-10 ngày) hoặc Khẩn cấp (1-2 ngày).'
                  : 'Select 30-day or 90-day single/multiple entry. Choose your required processing time: Standard (5-10 days) or Urgent (1-2 days).'}
              </p>
            </div>
            <div className="pt-2 text-[11px] font-bold text-indigo-700 flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>{isVi ? 'Có tùy chọn xử lý siêu khẩn' : 'Super Urgent Express Option'}</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-indigo-400 transition-all space-y-4 relative">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-extrabold text-base flex items-center justify-center shadow-md">
              2
            </div>
            <div className="space-y-1.5">
              <h3 className="text-sm font-extrabold text-slate-900">
                {isVi ? '2. Điền Thông Tin & Tải Ảnh' : '2. Enter Details & Upload Photo'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isVi
                  ? 'Nhập thông tin cá nhân theo hộ chiếu, ngày dự kiến nhập cảnh và cửa khẩu. Tải lên trang ảnh hộ chiếu & 1 ảnh chân dung 4x6 nền trắng.'
                  : 'Enter applicant details matching your passport, intended arrival date & port. Upload a clear passport data page copy and 4x6 white background photo.'}
              </p>
            </div>
            <div className="pt-2 text-[11px] font-bold text-indigo-700 flex items-center gap-1">
              <Upload className="w-3.5 h-3.5 text-indigo-600" />
              <span>{isVi ? 'Tự động duyệt ảnh chuẩn' : 'Auto Photo Pre-Validation'}</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-indigo-400 transition-all space-y-4 relative">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-extrabold text-base flex items-center justify-center shadow-md">
              3
            </div>
            <div className="space-y-1.5">
              <h3 className="text-sm font-extrabold text-slate-900">
                {isVi ? '3. Kiểm Tra & Thanh Toán' : '3. Review & Pay Securely'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isVi
                  ? 'Rà soát toàn bộ thông tin chính xác. Thanh toán phí dịch vụ niêm yết minh bạch bằng Thẻ quốc tế (Visa/Mastercard), PayPal, VietQR hoặc MoMo.'
                  : 'Review your submission carefully. Pay service fees securely via Credit/Debit Cards, PayPal, VietQR bank transfer, or e-wallets.'}
              </p>
            </div>
            <div className="pt-2 text-[11px] font-bold text-indigo-700 flex items-center gap-1">
              <CreditCard className="w-3.5 h-3.5 text-emerald-600" />
              <span>{isVi ? 'Minh bạch không phí ẩn' : 'No Hidden Charges'}</span>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-indigo-400 transition-all space-y-4 relative">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-extrabold text-base flex items-center justify-center shadow-md">
              4
            </div>
            <div className="space-y-1.5">
              <h3 className="text-sm font-extrabold text-slate-900">
                {isVi ? '4. Nhận Visa Qua Email' : '4. Receive E-Visa PDF'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isVi
                  ? 'Visa điện tử kết quả phê duyệt chính thức sẽ được gửi trực tiếp về email của bạn dưới dạng tệp PDF. Chỉ cần in ra và xuất trình khi làm thủ tục.'
                  : 'Your official approval document will be delivered to your email as a PDF file. Simply print a copy and present it at airport border check-in.'}
              </p>
            </div>
            <div className="pt-2 text-[11px] font-bold text-indigo-700 flex items-center gap-1">
              <Download className="w-3.5 h-3.5 text-blue-600" />
              <span>{isVi ? 'Tệp PDF sẵn sàng in' : 'Printable E-Visa File'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS & PREPARATION CHECKLIST SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Requirements */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
          <div className="space-y-1 border-b border-slate-100 pb-4">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600 block">
              REQUIREMENTS & GUIDELINES
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {isVi ? 'Giấy Tờ Cần Chuẩn Bị Khi Nộp Đơn' : 'Required Documents for Application'}
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              {isVi
                ? 'Đảm bảo các giấy tờ sau đáp ứng quy định để xử lý visa thuận lợi nhất.'
                : 'Ensure your documents meet the following criteria before clicking to apply.'}
            </p>
          </div>

          <div className="space-y-4 text-xs">
            <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-extrabold text-slate-900 text-xs">
                  {isVi ? 'Hộ Chiếu Còn Hạn Trên 6 Tháng' : 'Valid Passport (At least 6 months validity)'}
                </h3>
                <p className="text-slate-600 text-[11px] mt-0.5">
                  {isVi
                    ? 'Hộ chiếu còn hạn ít nhất 6 tháng kể từ ngày nhập cảnh dự kiến và còn ít nhất 2 trang trống.'
                    : 'Passport must be valid for at least 6 months from your intended arrival date with 2 blank pages.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-extrabold text-slate-900 text-xs">
                  {isVi ? 'Ảnh Chụp Hộ Chiếu Rõ Nét' : 'Clear Passport Data Page Photo'}
                </h3>
                <p className="text-slate-600 text-[11px] mt-0.5">
                  {isVi
                    ? 'Ảnh chụp hoặc scan trang thông tin cá nhân rõ chữ, không bị chói sáng, không mất góc.'
                    : 'Clear scan or photo of your full passport photo page without glare or clipped borders.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-extrabold text-slate-900 text-xs">
                  {isVi ? 'Ảnh Chân Dung Nền Trắng (4x6 cm)' : 'Portrait Photo (4x6 cm, White Background)'}
                </h3>
                <p className="text-slate-600 text-[11px] mt-0.5">
                  {isVi
                    ? 'Ảnh chụp thẳng mặt, không đeo kính râm, nền trắng phông trơn, chụp trong vòng 6 tháng gần nhất.'
                    : 'Recent color photo looking straight into camera, white background, no sunglasses or hat.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-extrabold text-slate-900 text-xs">
                  {isVi ? 'Xác Nhận Cửa Khẩu Nhập Cảnh' : 'Intended Border Checkpoint'}
                </h3>
                <p className="text-slate-600 text-[11px] mt-0.5">
                  {isVi
                    ? 'Xác định rõ cửa khẩu dự kiến nhập cảnh (Sân bay Tân Sơn Nhất, Nội Bài, Đà Nẵng, Cam Ranh... hoặc đường bộ/đường biển).'
                    : 'Select your correct port of entry (Hanoi, Ho Chi Minh, Da Nang, Nha Trang airports or land borders).'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Emergency Assistance & Redirect Card */}
        <div className="lg:col-span-5 space-y-6">
          {/* Card: Direct Apply Redirect */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-5 border border-slate-800">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 bg-indigo-500/20 text-indigo-300 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-indigo-500/30">
                <Globe className="w-3 h-3" />
                <span>ONLINE FORM ACCESS</span>
              </div>
              <h3 className="text-xl font-extrabold text-white">
                {isVi ? 'Sẵn Sàng Nộp Đơn Khai Thị Thực?' : 'Ready to Submit Your Application?'}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isVi
                  ? 'Bấm nút dưới đây để chuyển hướng đến trang khai thông tin hồ sơ trực tuyến theo liên kết chính thức.'
                  : 'Click below to be transferred to the direct application submission system.'}
              </p>
            </div>

            <button
              onClick={handleRedirect}
              className="w-full bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-extrabold text-sm py-3.5 px-6 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border border-orange-500"
            >
              <span>{isVi ? 'Đến Trang Nộp Đơn Ngay →' : 'Go to Application Form →'}</span>
              <ExternalLink className="w-4 h-4 text-white" />
            </button>

            <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
              <p className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Target URL: https://vietnamvisa.govt.vn/apply-online</span>
              </p>
              <p className="text-slate-500">
                {isVi
                  ? 'Trang sẽ mở trong tab mới để giữ trải nghiệm thuận tiện.'
                  : 'Opens securely in a new tab for your convenience.'}
              </p>
            </div>
          </div>

          {/* Card: Need Immediate Assistance? */}
          <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6 space-y-3">
            <div className="flex items-center gap-2 text-amber-900 font-extrabold text-sm">
              <Phone className="w-4 h-4 text-amber-700" />
              <span>{isVi ? 'Cần Hỗ Trợ Khẩn Cấp Trực Tiếp?' : 'Need Emergency Assistance?'}</span>
            </div>
            <p className="text-xs text-amber-950/80 leading-relaxed font-medium">
              {isVi
                ? 'Nếu bạn cần tư vấn chọn loại visa hoặc nhập cảnh trong vòng 24 giờ, vui lòng gọi hotline hoặc chat WhatsApp với chuyên viên của chúng tôi.'
                : 'If you are flying within 24 hours or have questions regarding complex passport types, reach out directly to our 24/7 hotline team.'}
            </p>
            <div className="pt-1">
              <a
                href="https://wa.me/84832320320"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow transition-colors"
              >
                <span>WhatsApp: +84 832 320 320</span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-200" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
