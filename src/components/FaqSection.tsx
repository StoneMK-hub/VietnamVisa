import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, PhoneCall, Zap, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface FaqSectionProps {
  currentLang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      qEn: 'How long does it take to process a Vietnam e-Visa?',
      qVi: 'Thời gian xử lý e-Visa Việt Nam mất bao lâu?',
      aEn: 'Standard processing takes 3-4 working days. If you have an urgent or emergency travel situation, our expedited services guarantee delivery in 24 Hours, 4 Hours, or 1 Hour (Super Emergency).',
      aVi: 'Thời gian chuẩn là 3-4 ngày làm việc. Nếu cần gấp, dịch vụ khẩn cấp hỗ trợ cấp visa trong 24 giờ, 4 giờ hoặc siêu khẩn 1 giờ.'
    },
    {
      qEn: 'What are the required passport validity rules for Vietnam entry?',
      qVi: 'Yêu cầu về thời hạn hộ chiếu khi nhập cảnh Việt Nam là gì?',
      aEn: 'Your passport must be valid for at least 6 months past your date of arrival in Vietnam and contain at least 2 blank pages for stamping.',
      aVi: 'Hộ chiếu phải còn thời hạn ít nhất 6 tháng tính từ ngày nhập cảnh dự kiến và còn tối thiểu 2 trang trống.'
    },
    {
      qEn: 'Which nationalities qualify for Vietnam e-Visa?',
      qVi: 'Những quốc tịch nào được phép xin e-Visa Việt Nam?',
      aEn: 'Citizens of ALL countries and territories are eligible to apply for Vietnam 30-day or 90-day e-Visas (Single or Multiple entry) under Law No. 23/2023/QH15.',
      aVi: 'Tất cả công dân thuộc mọi quốc gia và vùng lãnh thổ đều được phép xin e-Visa 30 hoặc 90 ngày (1 lần hoặc nhiều lần).'
    },
    {
      qEn: 'What is the Airport Fast-Track Concierge Service?',
      qVi: 'Dịch vụ đón nhanh Fast-Track tại sân bay là gì?',
      aEn: 'An official representative greets you right at the arrival gate before immigration, assists with passport line prioritization, and guides you through the express lane in under 5 minutes.',
      aVi: 'Chuyên viên đón quý khách ngay tại cửa ống lồng, hỗ trợ ưu tiên qua cửa Hải quan khẩn cấp chỉ trong dưới 5 phút.'
    },
    {
      qEn: 'What if my visa application is declined?',
      qVi: 'Chuyện gì xảy ra nếu đơn xin visa bị từ chối?',
      aEn: 'We provide a 100% money-back guarantee. If your visa application is declined by the Immigration Department, all service fees are refunded immediately.',
      aVi: 'Chúng tôi cam kết hoàn tiền 100% nếu đơn xin thị thực không được Cục Quản lý Xuất nhập cảnh chấp thuận.'
    }
  ];

  return (
    <div className="w-full space-y-8">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 sm:p-8 lg:p-10 space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full border border-indigo-200">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
            <span>24/7 Support Center</span>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">{t.navFaq}</h2>
          <p className="text-xs sm:text-sm text-slate-500">Find answers to common questions about Vietnam visa processing.</p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 pt-2">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 bg-slate-50 hover:bg-slate-100 font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4 transition-colors"
                >
                  <span>{currentLang === 'vi' ? faq.qVi : faq.qEn}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4.5 h-4.5 text-indigo-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4.5 h-4.5 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-5 bg-white text-sm sm:text-base text-slate-700 leading-relaxed border-t border-slate-200">
                    {currentLang === 'vi' ? faq.aVi : faq.aEn}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
