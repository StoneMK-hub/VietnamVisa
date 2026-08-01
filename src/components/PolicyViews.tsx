import React from 'react';
import { ShieldCheck, CreditCard, Lock, FileText, CheckCircle2, HelpCircle, ArrowRight, RefreshCw, AlertCircle } from 'lucide-react';
import { Language } from '../types';
import { TabType } from '../routes';

interface PolicyProps {
  currentLang: Language;
  onNavigate: (tab: TabType) => void;
}

/** 1. PAYMENT GUIDELINES VIEW */
export const PaymentGuidelinesView: React.FC<PolicyProps> = ({ currentLang, onNavigate }) => {
  const isVi = currentLang === 'vi';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-10 space-y-8 text-slate-800">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <CreditCard className="w-64 h-64 text-white" />
        </div>
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-xs font-semibold border border-indigo-400/30">
            <CreditCard className="w-3.5 h-3.5" />
            <span>{isVi ? 'Quy Định & Lệ Phí' : 'Payment & Pricing Policy'}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {isVi ? 'Hướng Dẫn Thanh Toán & Minh Bạch Phí' : 'Payment Guidelines & Fee Structure'}
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
            {isVi
              ? 'Chi tiết các phương thức thanh toán hợp lệ, cấu trúc lệ phí niêm yết, quy trình bảo mật SSL 256-bit và chính sách hoàn tiền 100%.'
              : 'Complete overview of accepted payment methods, fee structure, 256-bit SSL encryption standards, and transparent refund policies.'}
          </p>
          <p className="text-xs text-slate-400 pt-2 border-t border-slate-800">
            {isVi ? 'Cập nhật lần cuối: Tháng 01/2026' : 'Last updated: January 2026'}
          </p>
        </div>
      </div>

      {/* Key Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
          <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">{isVi ? 'Chính Sách Hoàn Tiền 100%' : '100% Money-Back Guarantee'}</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {isVi
              ? 'Hoàn trả 100% phí dịch vụ nếu hồ sơ chưa nộp lên Cục XNC hoặc từ chối do lỗi kỹ thuật của hệ thống.'
              : 'Full refund if application is cancelled before immigration submission or rejected due to agency processing error.'}
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
          <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
            <Lock className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">{isVi ? 'Bảo Mật Chuẩn PCI-DSS' : '256-Bit SSL Encrypted'}</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {isVi
              ? 'Toàn bộ thông tin thẻ ngân hàng được mã hóa trực tiếp qua Stripe/Cổng thanh toán quốc tế, không lưu thông tin thẻ thô.'
              : 'All card payments are processed via PCI-DSS compliant international gateways. No raw card data is stored on our servers.'}
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
          <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
            <RefreshCw className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-sm">{isVi ? 'Không Chi Phí Ẩn' : 'Transparent Pricing'}</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {isVi
              ? 'Tổng chi phí hiển thị rõ ràng trước khi thanh toán, đã bao gồm lệ phí tem nhà nước và phí xử lý dịch vụ.'
              : 'All prices include government stamp fees and service processing. Itemized breakdown shown before final payment.'}
          </p>
        </div>
      </div>

      {/* Main Detailed Content */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-8 text-sm leading-relaxed">
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
            <span className="w-6 h-6 rounded-md bg-indigo-600 text-white text-xs flex items-center justify-center font-bold">1</span>
            {isVi ? '1. Cấu Trúc Lệ Phí Visa Việt Nam' : '1. Fee Structure Breakdown'}
          </h2>
          <p className="text-slate-600">
            {isVi
              ? 'Tổng chi phí xin E-Visa Việt Nam qua cổng dịch vụ bao gồm hai khoản chi phí chính:'
              : 'The total fee for Vietnam e-Visa facilitation consists of two main components:'}
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>
              <strong>{isVi ? 'Phí Tem Nhà Nước (Government Stamp Fee):' : 'Government Stamp Fee:'}</strong>{' '}
              {isVi
                ? '$25 USD cho visa nhập cảnh 1 lần (30/90 ngày) và $50 USD cho visa nhập cảnh nhiều lần (90 ngày). Đây là khoản phí bắt buộc do Cục Quản lý Xuất nhập cảnh Việt Nam quy định.'
                : 'USD $25 for Single Entry (30 or 90 days) and USD $50 for Multiple Entry (90 days). This is the mandatory fee required by the Vietnam Immigration Department.'}
            </li>
            <li>
              <strong>{isVi ? 'Phí Dịch Vụ Xử Lý Hồ Sơ (Service Processing Fee):' : 'Service & Facilitation Fee:'}</strong>{' '}
              {isVi
                ? 'Bao gồm chi phí rà soát giấy tờ, chuẩn hóa ảnh định dạng passport, theo dõi tiến độ khẩn, xử lý 1h - 24h và hỗ trợ tư vấn nhập cảnh 24/7.'
                : 'Covers document verification, passport photo compliance check, continuous application tracking, express emergency options (1h to 24h), and 24/7 support.'}
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
            <span className="w-6 h-6 rounded-md bg-indigo-600 text-white text-xs flex items-center justify-center font-bold">2</span>
            {isVi ? '2. Phương Thức Thanh Toán Chấp Nhận' : '2. Accepted Payment Methods'}
          </h2>
          <p className="text-slate-600">
            {isVi
              ? 'Chúng tôi hỗ trợ đa dạng cổng thanh toán quốc tế và nội địa để thuận tiện nhất cho quý khách:'
              : 'We accept multiple international and local payment options for your convenience:'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
              <CreditCard className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-900 text-xs">{isVi ? 'Thẻ Quốc Tế Credit / Debit' : 'Credit & Debit Cards'}</p>
                <p className="text-[11px] text-slate-500">Visa, MasterCard, American Express, JCB, UnionPay</p>
              </div>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
              <Lock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-900 text-xs">{isVi ? 'Ví Điện Tử Quốc Tế & Apple Pay' : 'PayPal & Mobile Payments'}</p>
                <p className="text-[11px] text-slate-500">PayPal Express Checkout, Apple Pay, Google Pay</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
            <span className="w-6 h-6 rounded-md bg-indigo-600 text-white text-xs flex items-center justify-center font-bold">3</span>
            {isVi ? '3. Quy Định Hoàn Tiền (Refund Policy)' : '3. Refund & Cancellation Terms'}
          </h2>
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-amber-900 space-y-2 text-xs">
            <p className="font-bold flex items-center gap-1.5 text-sm text-amber-950">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              {isVi ? 'Cam kết minh bạch về chính sách hoàn phí:' : 'Clear Refund Policy Guarantee:'}
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                {isVi
                  ? 'Nếu quý khách yêu cầu hủy đơn trước khi hồ sơ được gửi sang hệ thống Cục Quản lý Xuất nhập cảnh, quý khách sẽ được hoàn tiền 100%.'
                  : 'Full 100% refund if you request cancellation prior to application submission to the Vietnam Immigration Department.'}
              </li>
              <li>
                {isVi
                  ? 'Nếu hồ sơ bị từ chối do sai sót nghiệp vụ từ phía chúng tôi, quý khách được hoàn lại 100% phí dịch vụ đã thanh toán.'
                  : 'If your application is rejected due to a processing error on our part, 100% of the service fee will be promptly refunded.'}
              </li>
              <li>
                {isVi
                  ? 'Lệ phí tem Nhà nước ($25/$50 USD) sẽ không được phía Cục Xuất nhập cảnh hoàn trả một khi hồ sơ đã được tiếp nhận thụ lý.'
                  : 'Government stamp fees ($25/$50 USD) are non-refundable by the Immigration Department once processing has formally begun.'}
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

/** 2. TERMS AND CONDITIONS VIEW */
export const TermsAndConditionsView: React.FC<PolicyProps> = ({ currentLang, onNavigate }) => {
  const isVi = currentLang === 'vi';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-10 space-y-8 text-slate-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-xs font-semibold border border-indigo-400/30">
            <FileText className="w-3.5 h-3.5" />
            <span>{isVi ? 'Điều Khoản Dịch Vụ' : 'Legal Agreement'}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {isVi ? 'Điều Khoản & Điều Kiện Sử Dụng' : 'Terms and Conditions'}
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
            {isVi
              ? 'Quy định chi tiết về phạm vi dịch vụ, nghĩa vụ khách hàng, quy trình làm khẩn và giới hạn trách nhiệm pháp lý khi sử dụng dịch vụ tư vấn E-Visa.'
              : 'Terms governing our commercial visa facilitation services, processing guarantees, client responsibilities, and limitation of liability.'}
          </p>
          <p className="text-xs text-slate-400 pt-2 border-t border-slate-800">
            {isVi ? 'Áp dụng cho tất cả giao dịch trực tuyến từ năm 2026' : 'Effective for all online applications in 2026'}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-8 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">
            {isVi ? '1. Tư Cách Pháp Lý & Tuyên Bố Tư Nhân' : '1. Commercial Facilitator Notice'}
          </h2>
          <p className="text-slate-600">
            {isVi
              ? 'VietnamVisa là một đơn vị cung cấp dịch vụ hỗ trợ tư vấn và nộp hồ sơ visa thương mại độc lập. Chúng tôi KHÔNG phải là cơ quan đại diện thuộc Chính phủ Việt Nam hoặc Cục Quản lý Xuất nhập cảnh. Quý khách hoàn toàn có thể tự nộp trực tiếp tại Cổng thông tin Chính phủ nếu muốn.'
              : 'VietnamVisa is an independent commercial service agency providing visa application assistance and fast-track processing. We are NOT a government department or embassy. Applicants may choose to apply directly through government portals independently.'}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">
            {isVi ? '2. Phạm Vi Dịch Vụ' : '2. Scope of Services'}
          </h2>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
            <li>{isVi ? 'Rà soát tính chính xác của thông tin hộ chiếu và ảnh chụp cá nhân.' : 'Review and verification of passport data and compliance of uploaded photos.'}</li>
            <li>{isVi ? 'Chuẩn hóa định dạng hồ sơ đúng yêu cầu kỹ thuật của Xuất nhập cảnh.' : 'Formatting and translating application entries according to required immigration standards.'}</li>
            <li>{isVi ? 'Xử lý các gói nộp khẩn 1 giờ, 4 giờ, 24 giờ và hỗ trợ đón nhanh tại cửa khẩu.' : 'Processing express 1-hour, 4-hour, and 24-hour fast-track concierge services at airports.'}</li>
            <li>{isVi ? 'Hỗ trợ giải đáp và xử lý sự cố trong suốt quá trình nhập cảnh.' : 'Providing 24/7 support throughout the entry process until clearance.'}</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">
            {isVi ? '3. Trách Nhiệm Của Khách Hàng' : '3. Applicant Obligations'}
          </h2>
          <p className="text-slate-600">
            {isVi
              ? 'Khách hàng có trách nhiệm cung cấp thông tin trung thực, hộ chiếu còn hạn ít nhất 6 tháng kể từ ngày nhập cảnh dự kiến, không nằm trong danh sách cấm nhập cảnh của Việt Nam.'
              : 'Applicants must provide accurate and truthful information, hold a valid passport with at least 6 months remaining validity from entry date, and ensure they are eligible for entry into Vietnam.'}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">
            {isVi ? '4. Quyền Hạn Của Cơ Quan Xuất Nhập Cảnh' : '4. Immigration Discretion'}
          </h2>
          <p className="text-slate-600">
            {isVi
              ? 'Quyết định phê duyệt hoặc từ chối visa thuộc thẩm quyền tuyệt đối của Cục Quản lý Xuất nhập cảnh Việt Nam. Chúng tôi không chịu trách nhiệm về các quyết định từ chối do các lý do an ninh quốc gia hoặc lịch sử vi phạm pháp luật của hành khách.'
              : 'The final decision to grant or deny entry rests solely with the Vietnam Immigration Department. Our service is limited to administrative facilitation and tracking.'}
          </p>
        </section>
      </div>
    </div>
  );
};

/** 3. PRIVACY POLICY VIEW */
export const PrivacyPolicyView: React.FC<PolicyProps> = ({ currentLang, onNavigate }) => {
  const isVi = currentLang === 'vi';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-10 space-y-8 text-slate-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-900 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold border border-emerald-400/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{isVi ? 'Bảo Mật Dữ Liệu' : 'Data Privacy'}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {isVi ? 'Chính Sách Bảo Mật Thông Tin' : 'Privacy Policy'}
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
            {isVi
              ? 'Cam kết bảo vệ tuyệt đối dữ liệu hộ chiếu và thông tin cá nhân của quý khách bằng mã hóa SSL 256-bit và chính sách tự động xóa dữ liệu an toàn.'
              : 'How we protect, encrypt, and handle your passport and personal data using 256-bit SSL encryption and strict data deletion protocols.'}
          </p>
          <p className="text-xs text-slate-400 pt-2 border-t border-slate-800">
            {isVi ? 'Tương thích tiêu chuẩn bảo mật dữ liệu toàn cầu GDPR' : 'Compliant with international data privacy standards'}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-8 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">
            {isVi ? '1. Dữ Liệu Chúng Tôi Thu Thập' : '1. Information We Collect'}
          </h2>
          <p className="text-slate-600">
            {isVi
              ? 'Để hoàn tất thủ tục đăng ký E-Visa Việt Nam, chúng tôi thu thập các thông tin cần thiết bao gồm: Họ tên, số hộ chiếu, ngày sinh, quốc tịch, hình ảnh hộ chiếu, ảnh chân dung, ngày nhập cảnh và email/số điện thoại liên hệ.'
              : 'To facilitate your Vietnam e-Visa application, we collect essential personal information including full name, passport number, birth date, nationality, passport scan, portrait photo, entry dates, and contact email/phone.'}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">
            {isVi ? '2. Mục Đích Sử Dụng Dữ Liệu' : '2. How We Use Your Data'}
          </h2>
          <p className="text-slate-600">
            {isVi
              ? 'Thông tin của quý khách CHỈ được sử dụng cho mục đích duy nhất là kê khai và nộp hồ sơ xin E-Visa tới Cục Quản lý Xuất nhập cảnh Việt Nam, cũng như thông báo kết quả qua Email. Chúng tôi cam kết KHÔNG bán hoặc chia sẻ thông tin cho bất kỳ bên thứ ba nào vì mục đích quảng cáo.'
              : 'Your data is strictly used for submitting your visa application to the Vietnam Immigration Department and delivering support regarding your entry. We never sell, lease, or distribute personal information to third parties for marketing purposes.'}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">
            {isVi ? '3. Thời Gian Lưu Trữ & Tự Động Xóa File' : '3. Data Retention & Automatic Purging'}
          </h2>
          <p className="text-slate-600">
            {isVi
              ? 'Ảnh chụp hộ chiếu và ảnh chân dung cá nhân sẽ tự động bị xóa khỏi hệ thống máy chủ của chúng tôi sau 30 ngày kể từ khi công văn E-Visa được cấp thành công để bảo vệ tối đa quyền riêng tư của quý khách.'
              : 'All sensitive passport scans and personal portrait files are automatically purged from our servers 30 days after visa issuance to protect user privacy.'}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">
            {isVi ? '4. An Toàn Thông Tin SSL 256-Bit' : '4. Security Standards'}
          </h2>
          <p className="text-slate-600">
            {isVi
              ? 'Toàn bộ dữ liệu truyền tải trên website được bảo vệ bằng giao thức mã hóa SSL 256-bit chuẩn ngân hàng, đảm bảo không bị can thiệp trên đường truyền.'
              : 'All web traffic and file uploads are secured using 256-bit SSL encryption protocol, ensuring bank-grade protection during transmission.'}
          </p>
        </section>
      </div>
    </div>
  );
};
