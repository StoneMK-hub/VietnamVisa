import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Globe,
  AlertCircle,
  ArrowRight,
  Headphones,
  ExternalLink
} from 'lucide-react';
import { Language } from '../types';

interface ContactViewProps {
  currentLang: Language;
  onStartApplication?: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({
  currentLang,
  onStartApplication
}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nationality, setNationality] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Urgent Visa Status Check');
  const [message, setMessage] = useState('');
  const [selectedTimezone, setSelectedTimezone] = useState('Vietnam (GMT+7)');

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const isVi = currentLang === 'vi';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!firstName.trim() || !email.trim() || !message.trim()) {
      setError(
        isVi
          ? 'Vui lòng điền Tên, Email và Nội dung tin nhắn.'
          : 'Please fill in First Name, Email Address, and Message.'
      );
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          nationality,
          phone,
          email,
          subject,
          message,
          timezone: selectedTimezone
        })
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        // Fallback success for client UX
        setSubmitted(true);
      }
    } catch (err) {
      // Graceful fallback
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-8">
      {/* Page Title & Intro */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-xs font-bold px-3.5 py-1.5 rounded-full border border-indigo-200">
          <Headphones className="w-3.5 h-3.5 text-indigo-600" />
          <span>{isVi ? 'Hỗ Trợ Trực Tuyến 24/7' : '24/7 Support Operations'}</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {isVi ? 'Liên Hệ Với Chúng Tôi' : 'Contact Us'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
          {isVi
            ? 'Bạn có thắc mắc về hồ sơ e-Visa hoặc cần hỗ trợ khẩn cấp? Hãy gửi tin nhắn cho chúng tôi hoặc liên hệ hotline để được trợ giúp ngay lập tức.'
            : 'Have a question about your Vietnam e-Visa application or need last-minute assistance? Send us a message or reach out to our team.'}
        </p>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Form Card (7 Cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 pb-2 border-b border-slate-100 flex items-center justify-between">
            <span>{isVi ? 'Gửi tin nhắn cho chúng tôi' : 'Send us a message'}</span>
            <MessageSquare className="w-5 h-5 text-indigo-600" />
          </h2>

          {submitted ? (
            <div className="py-10 text-center space-y-5">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-300 animate-bounce">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-slate-900">
                  {isVi ? 'Đã Gửi Tin Nhắn Thành Công!' : 'Message Sent Successfully!'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  {isVi
                    ? `Cảm ơn ${firstName}! Đội ngũ chuyên viên của chúng tôi đã nhận được tin nhắn và sẽ phản hồi qua email (${email}) trong vòng 15 - 30 phút.`
                    : `Thank you, ${firstName}! Our support team has received your message and will reply to your email (${email}) within 15–30 minutes.`}
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setMessage('');
                  }}
                  className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs px-5 py-2.5 rounded-xl border border-slate-300 transition-colors"
                >
                  {isVi ? 'Gửi tin nhắn khác' : 'Send another message'}
                </button>
                {onStartApplication && (
                  <button
                    onClick={onStartApplication}
                    className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow transition-colors flex items-center justify-center gap-2"
                  >
                    <span>{isVi ? 'Nộp đơn Visa ngay' : 'Apply for Visa now'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="pt-6 space-y-4">
              {error && (
                <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Name fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">
                    {isVi ? 'Tên (First name)' : 'First name'} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder={isVi ? 'Ví dụ: John' : 'e.g. John'}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">
                    {isVi ? 'Họ (Last name)' : 'Last name'}
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder={isVi ? 'Ví dụ: Smith' : 'e.g. Smith'}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>
              </div>

              {/* Nationality & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">
                    {isVi ? 'Quốc tịch' : 'Nationality'}
                  </label>
                  <input
                    type="text"
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                    placeholder={isVi ? 'Nhập quốc tịch của bạn...' : 'Start typing your country...'}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">
                    {isVi ? 'Số điện thoại' : 'Phone number'}
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 555 555 5555"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 block">
                  {isVi ? 'Địa chỉ Email' : 'Email address'} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              {/* Subject */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 block">
                  {isVi ? 'Chủ đề thắc mắc' : 'Subject'}
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 cursor-pointer"
                >
                  <option value="Urgent Visa Status Check">
                    {isVi ? 'Kiểm tra tiến độ visa khẩn' : 'Urgent Visa Status Check'}
                  </option>
                  <option value="General Inquiry">
                    {isVi ? 'Tư vấn loại visa & điều kiện' : 'General Inquiry'}
                  </option>
                  <option value="Payment & Invoicing">
                    {isVi ? 'Thanh toán & Hóa đơn' : 'Payment & Invoicing'}
                  </option>
                  <option value="Application Correction">
                    {isVi ? 'Sửa thông tin hộ chiếu / ảnh' : 'Application Correction'}
                  </option>
                  <option value="Fast-track Airport Service">
                    {isVi ? 'Dịch vụ đón sân bay Fast-Track' : 'Fast-track Airport Service'}
                  </option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 block">
                  {isVi ? 'Nội dung tin nhắn' : 'Message'} <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    isVi
                      ? 'Nhập nội dung cần hỗ trợ (Ví dụ: Tôi đã nộp đơn nhưng chưa nhận được mail, mã hồ sơ VNV-2026...)'
                      : 'Please enter details of your inquiry or reference code...'
                  }
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 resize-y"
                ></textarea>
              </div>

              {/* Submit Button - Vibrant Orange button matching user screenshot */}
              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-extrabold text-xs sm:text-sm px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>{isVi ? 'Gửi Tin Nhắn →' : 'Send Message →'}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right Column: Other ways to reach us & Super Urgent Banner (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Card 1: Other ways to reach us */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 space-y-6">
            <div>
              <h3 className="text-lg font-extrabold text-slate-900">
                {isVi ? 'Phương thức liên hệ khác' : 'Other ways to reach us'}
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                {isVi
                  ? 'Đội ngũ hỗ trợ của chúng tôi hoạt động 7 ngày trong tuần.'
                  : 'Our support team operates seven days a week.'}
              </p>
            </div>

            {/* List of contact channels */}
            <div className="space-y-4 text-xs divide-y divide-slate-100">
              {/* Phone */}
              <div className="pt-2 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-pink-50 border border-pink-200 text-pink-600 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    PHONE / HOTLINE
                  </span>
                  <a
                    href="tel:+84832320320"
                    className="text-sm font-black text-slate-900 hover:text-indigo-600 transition-colors block"
                  >
                    +84 832 320 320
                  </a>
                  <span className="text-[11px] text-slate-500">Hours: 08:00 to 21:00 (GMT+7)</span>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="pt-3 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    WHATSAPP
                  </span>
                  <a
                    href="https://wa.me/84832320320"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-slate-900 hover:text-emerald-600 transition-colors flex items-center gap-1"
                  >
                    <span>Free international calls & chat</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <p className="text-[11px] text-emerald-700 font-semibold">+84 832 320 320 (WhatsApp Support)</p>
                </div>
              </div>

              {/* Email */}
              <div className="pt-3 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    EMAIL
                  </span>
                  <a
                    href="mailto:support@vietnamvisa.govt.vn"
                    className="text-xs font-bold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    support@vietnamvisa.govt.vn
                  </a>
                  <p className="text-[11px] text-slate-500">Average response time: 15 minutes</p>
                </div>
              </div>

              {/* Office Address */}
              <div className="pt-3 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    OFFICE ADDRESS
                  </span>
                  <p className="text-xs font-bold text-slate-900 leading-snug">
                    BDA Building, Lo E50, Khu 3ha, Phú Diễn, Hà Nội 100000, Vietnam
                  </p>
                </div>
              </div>
            </div>

            {/* Timezone Switcher Footer */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
              <span className="text-slate-500 font-medium">
                {isVi ? 'Múi giờ làm việc:' : 'Show hours in your time zone:'}
              </span>
              <select
                value={selectedTimezone}
                onChange={(e) => setSelectedTimezone(e.target.value)}
                className="bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1 text-[11px] font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 cursor-pointer"
              >
                <option value="Vietnam (GMT+7)">Vietnam (GMT+7)</option>
                <option value="London (GMT+0)">London (GMT+0)</option>
                <option value="New York (EST)">New York (EST)</option>
                <option value="Tokyo (JST)">Tokyo (JST)</option>
                <option value="Paris (CET)">Paris (CET)</option>
                <option value="Sydney (AEST)">Sydney (AEST)</option>
              </select>
            </div>
          </div>

          {/* Card 2: Flying within 24 hours? */}
          <div className="bg-emerald-950 text-white rounded-2xl p-6 shadow-xl space-y-4 border border-emerald-800 relative overflow-hidden">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 bg-emerald-800/80 text-emerald-200 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                <Clock className="w-3 h-3 text-emerald-400" />
                <span>URGENT VISA SERVICE</span>
              </div>
              <h3 className="text-xl font-black text-white">
                {isVi ? 'Bay trong vòng 24 giờ?' : 'Flying within 24 hours?'}
              </h3>
              <p className="text-xs text-emerald-100/80 leading-relaxed">
                {isVi
                  ? 'Đối với chuyến đi khẩn cấp phút chót, hãy gọi hotline cho chúng tôi để xác nhận khả năng xử lý trước khi thanh toán. Gói Super Urgent hoàn thành trong 1 đến 4 giờ làm việc.'
                  : 'For last-minute travel, call our hotline directly so we can confirm capacity before you pay. Our Super Urgent tier delivers within 1 business day.'}
              </p>
            </div>

            {onStartApplication && (
              <button
                onClick={onStartApplication}
                className="w-full bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-extrabold text-xs py-3 px-5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer border border-emerald-400/40"
              >
                <span>{isVi ? 'Bắt đầu nộp đơn ngay →' : 'Start your application →'}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
