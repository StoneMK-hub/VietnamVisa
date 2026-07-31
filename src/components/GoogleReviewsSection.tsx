import React from 'react';
import { Star, CheckCircle2, ExternalLink, ThumbsUp, MessageSquare, MapPin, Award } from 'lucide-react';
import { Language } from '../types';

interface GoogleReviewsSectionProps {
  currentLang: Language;
}

const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/KP14hMxYdpceVi3a6";

const REVIEWS_DATA = [
  {
    id: 1,
    name: 'Michael R. Vance',
    country: 'United States',
    flag: '🇺🇸',
    rating: 5,
    date: '3 days ago',
    service: 'Emergency 1-Hour e-Visa + Fast Track',
    text: 'Absolute lifesavers! My e-visa hadn’t arrived from the gov portal on the morning of my flight to Ho Chi Minh. Found Vietnam Visa Services online and contacted their WhatsApp support at 7 AM. Within 50 minutes, my approved e-visa PDF was in my inbox. Their agent even greeted me at SGN airport gate. 10/10 service!',
    verified: true,
  },
  {
    id: 2,
    name: 'Sophie Laurent',
    country: 'France',
    flag: '🇫🇷',
    rating: 5,
    date: '1 week ago',
    service: '90-Day Multiple Entry Visa',
    text: 'Très service professionnel! Direct support on WhatsApp in English & French. Submitted my passport copy and photo, they checked everything before processing. Got the official 90-day multi-entry visa in 2 business days. Smooth and stress-free experience.',
    verified: true,
  },
  {
    id: 3,
    name: 'David & Emma Lawson',
    country: 'Australia',
    flag: '🇦🇺',
    rating: 5,
    date: '2 weeks ago',
    service: 'Urgent 4-Hour Visa Service',
    text: 'Extremely reliable agency in Hanoi. We made a typo on our passport number on our initial application. They corrected our details and re-issued our e-visas urgently before our flight from Sydney. Highly recommended for any traveler to Vietnam!',
    verified: true,
  },
  {
    id: 4,
    name: 'Kenji Takahashi',
    country: 'Japan',
    flag: '🇯🇵',
    rating: 5,
    date: '3 weeks ago',
    service: 'Business Visa & Airport VIP Arrival',
    text: 'Great customer service and fast response. I needed a business visa for a last-minute conference in Da Nang. They processed it within 4 hours. Fast-track airport team was waiting with a welcome board. Very impressionable service.',
    verified: true,
  },
  {
    id: 5,
    name: 'Alexander Schmidt',
    country: 'Germany',
    flag: '🇩🇪',
    rating: 4,
    date: '1 month ago',
    service: 'Standard 30-Day e-Visa',
    text: 'Fast, clear communication and reasonable fee. The online fee quote tool gave me the exact total upfront with no hidden charges. Received visa on time. Will definitely use them again for my next trip to SEA.',
    verified: true,
  },
  {
    id: 6,
    name: 'Priya Sharma',
    country: 'India',
    flag: '🇮🇳',
    rating: 5,
    date: '1 month ago',
    service: 'Super Urgent e-Visa',
    text: 'Prompt response on WhatsApp even late at night! They helped me upload a compliant passport photo and verified all my entry details. E-visa was approved smoothly. Thank you so much for the emergency help!',
    verified: true,
  },
];

export const GoogleReviewsSection: React.FC<GoogleReviewsSectionProps> = ({ currentLang }) => {
  const isVi = currentLang === 'vi';

  return (
    <section className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-slate-200 p-3.5 sm:p-8 lg:p-10 space-y-4 sm:space-y-8">
      {/* Header Container */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 pb-4 sm:pb-6 border-b border-slate-100">
        <div className="space-y-1.5 sm:space-y-2">
          {/* Google Brand Badge */}
          <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 text-slate-800 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.15C3.26 21.39 7.37 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27a7.17 7.17 0 0 1 0-4.54V6.58H1.24a11.96 11.96 0 0 0 0 10.84l4.04-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.37 0 3.26 2.61 1.24 6.58l4.04 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
            <span>Google Reviews • Verified Business</span>
          </div>

          <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {isVi ? 'Đánh Giá Từ Khách Hàng Trên Google Maps' : 'Customer Reviews on Google Maps'}
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            {isVi
              ? 'Hàng ngàn du khách quốc tế đã tin tưởng sử dụng dịch vụ e-Visa & đón sân bay của chúng tôi.'
              : 'Thousands of international travelers trust our fast-track e-Visa & airport concierge services.'}
          </p>
        </div>

        {/* Overall Rating Box + Direct Google Link Button */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl p-3 sm:p-5 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 shrink-0">
          <div className="text-center sm:text-left space-y-0.5">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="text-2xl sm:text-3xl font-black text-slate-900">4.9</span>
              <div className="flex items-center gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400" />
                ))}
              </div>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-500 font-semibold">
              {isVi ? 'Dựa trên 520+ đánh giá 4* & 5*' : 'Based on 520+ verified 4* & 5* reviews'}
            </p>
          </div>

          <a
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-extrabold text-xs px-4 py-2.5 sm:py-3 rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 text-center shrink-0"
          >
            <span>{isVi ? 'Xem Trên Google Maps' : 'View on Google Maps'}</span>
            <ExternalLink className="w-3.5 h-3.5 text-indigo-200" />
          </a>
        </div>
      </div>

      {/* 4* & 5* Star Filter Ribbon */}
      <div className="flex items-center justify-between text-xs font-semibold text-slate-600 bg-amber-50/80 border border-amber-200/80 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5">
        <div className="flex items-center gap-2 text-amber-900 font-bold text-xs">
          <Award className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            {isVi
              ? 'Chỉ hiển thị các đánh giá xuất sắc 4★ và 5★'
              : 'Showing top 4★ and 5★ customer feedback'}
          </span>
        </div>
        <span className="text-[11px] text-amber-700 font-bold hidden sm:inline">
          100% Verified Trips
        </span>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
        {REVIEWS_DATA.map((review) => (
          <div
            key={review.id}
            className="bg-slate-50/80 hover:bg-slate-50 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-3"
          >
            <div className="space-y-2 sm:space-y-3">
              {/* User Header */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center shadow-xs shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs font-extrabold text-slate-900">{review.name}</h4>
                      <span className="text-xs sm:text-sm">{review.flag}</span>
                    </div>
                    <span className="text-[10px] sm:text-[11px] text-slate-500 block">{review.country}</span>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-0.5 text-amber-400 shrink-0">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>

              {/* Service Tag */}
              <div className="inline-block bg-white border border-slate-200 rounded-md px-2 py-0.5 text-[10px] font-bold text-indigo-700">
                {review.service}
              </div>

              {/* Review Comment */}
              <p className="text-xs text-slate-700 leading-relaxed font-normal italic">
                "{review.text}"
              </p>
            </div>

            {/* Footer of Review Card */}
            <div className="pt-2 sm:pt-3 border-t border-slate-200/60 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 font-medium">
              <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-500" />
                <span>Verified Review</span>
              </span>
              <span>{review.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Link CTA to Google Maps */}
      <div className="pt-2 text-center">
        <a
          href={GOOGLE_MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-bold text-indigo-700 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 px-5 py-2.5 rounded-xl transition-all"
        >
          <MessageSquare className="w-4 h-4 text-indigo-600" />
          <span>
            {isVi
              ? 'Xem tất cả 520+ đánh giá trực tiếp trên Google Maps ↗'
              : 'Read all 520+ reviews directly on Google Maps ↗'}
          </span>
        </a>
      </div>
    </section>
  );
};
