import React, { useState } from 'react';
import { ShieldCheck, Clock, CheckCircle2, ArrowRight, Zap, Calculator, Sparkles, Plane, ChevronDown } from 'lucide-react';
import { VisaType, ProcessingTime, Language } from '../types';
import { TRANSLATIONS, tMulti } from '../data/translations';
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

  const [quoteVisaType, setQuoteVisaType] = useState<VisaType>('tourist_30_single');
  const [quoteSpeed, setQuoteSpeed] = useState<ProcessingTime>('standard');
  const [quoteApplicants, setQuoteApplicants] = useState<number>(1);

  const pricing = calculateVisaFees(quoteVisaType, quoteSpeed, [], quoteApplicants);

  // Multi-lingual text helpers
  const getBadgeText = () => t.govBadge || 'VIETNAM EVISA SERVICE';
  const getTitleText = () => t.heroTitle || 'Vietnam eVisa: Fast, Simple, Done';
  const getSubtitleText = () => t.heroSubtitle || 'We help foreign travelers apply for a Vietnam e-Visa quickly and securely with professional guidance.';
  const getApplyCta = () => t.heroCtaApply || 'Apply Online Now';
  const getCalcCta = () => t.heroCtaCalculate || 'See Pricing';

  const getRushText = () => tMulti(currentLang, {
    en: '24-hour rush available',
    vi: 'Hỗ trợ xử lý khẩn 24h',
    fr: 'Traitement d\'urgence 24h',
    de: '24h-Eilservice verfügbar',
    ja: '24時間特急対応',
    zh: '24小时加急办理',
    he: 'טיפול דחוף ב-24 שעות',
    ko: '24시간 긴급 발급 지원',
    es: 'Trámite urgente 24h'
  });

  const getHumanSupportText = () => tMulti(currentLang, {
    en: 'Human support, not a bot',
    vi: 'Chuyên viên hỗ trợ, không dùng bot',
    fr: 'Assistance humaine 24/7',
    de: 'Persönlicher Support rund um die Uhr',
    ja: '専任スタッフによるサポート',
    zh: '人工客服 24/7 在线',
    he: 'תמיכה אנושית 24/7',
    ko: '전문 상담원 24시간 지원',
    es: 'Asistencia humana, sin bots'
  });

  const getRefundText = () => tMulti(currentLang, {
    en: 'Refund if denied',
    vi: 'Hoàn tiền nếu từ chối',
    fr: 'Remboursement en cas de refus',
    de: 'Geld-zurück-Garantie bei Ablehnung',
    ja: '不許可の場合 100% 返金',
    zh: '拒签 100% 退款保障',
    he: 'החזר כספי במקרה של דחייה',
    ko: '거절 시 100% 환불 보장',
    es: 'Reembolso si es denegado'
  });

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
    { value: 1, label: `1 ${tMulti(currentLang, { en: 'applicant', vi: 'khách', fr: 'demandeur', de: 'Antragsteller', ja: '名', zh: '位', he: 'מבקש', ko: '명', es: 'solicitante' })}` },
    { value: 2, label: `2 ${tMulti(currentLang, { en: 'applicants', vi: 'khách', fr: 'demandeurs', de: 'Antragsteller', ja: '名', zh: '位', he: 'מבקשים', ko: '명', es: 'solicitantes' })}` },
    { value: 3, label: `3 ${tMulti(currentLang, { en: 'applicants', vi: 'khách', fr: 'demandeurs', de: 'Antragsteller', ja: '名', zh: '位', he: 'מבקשים', ko: '명', es: 'solicitantes' })}` },
    { value: 4, label: `4 ${tMulti(currentLang, { en: 'applicants', vi: 'khách', fr: 'demandeurs', de: 'Antragsteller', ja: '名', zh: '位', he: 'מבקשים', ko: '명', es: 'solicitantes' })}` },
    { value: 5, label: `5 ${tMulti(currentLang, { en: 'applicants', vi: 'khách', fr: 'demandeurs', de: 'Antragsteller', ja: '名', zh: '位', he: 'מבקשים', ko: '명', es: 'solicitantes' })}` },
    { value: 6, label: `6 ${tMulti(currentLang, { en: 'applicants', vi: 'khách', fr: 'demandeurs', de: 'Antragsteller', ja: '名', zh: '位', he: 'מבקשים', ko: '명', es: 'solicitantes' })}` },
    { value: 7, label: `7 ${tMulti(currentLang, { en: 'applicants', vi: 'khách', fr: 'demandeurs', de: 'Antragsteller', ja: '名', zh: '位', he: 'מבקשים', ko: '명', es: 'solicitantes' })}` },
    { value: 8, label: `8 ${tMulti(currentLang, { en: 'applicants', vi: 'khách', fr: 'demandeurs', de: 'Antragsteller', ja: '名', zh: '位', he: 'מבקשים', ko: '명', es: 'solicitantes' })}` },
    { value: 9, label: `9 ${tMulti(currentLang, { en: 'applicants', vi: 'khách', fr: 'demandeurs', de: 'Antragsteller', ja: '名', zh: '位', he: 'מבקשים', ko: '명', es: 'solicitantes' })}` },
    { value: 10, label: `10 ${tMulti(currentLang, { en: 'applicants', vi: 'khách', fr: 'demandeurs', de: 'Antragsteller', ja: '名', zh: '位', he: 'מבקשים', ko: '명', es: 'solicitantes' })}` }
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

      <div className="max-w-7xl mx-auto px-2.5 sm:px-8 relative z-10 pt-2 pb-8 sm:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-8 lg:gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left mb-8 lg:mb-0">
            {/* Service Agency Badge */}
            <div className="inline-flex items-center gap-1.5 bg-emerald-100/90 border border-emerald-300/80 px-3.5 py-1 rounded-full text-emerald-950 text-xs sm:text-sm font-bold tracking-wider uppercase shadow-2xs backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700 shrink-0" />
              <span>{getBadgeText()}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 leading-snug sm:leading-tight py-0.5">
              {getTitleText()}
            </h1>

            <p className="text-sm sm:text-base text-slate-700 max-w-xl leading-relaxed sm:leading-relaxed font-medium py-1">
              {getSubtitleText()}
            </p>

            {/* CTA Buttons - Orange Apply Now + Outline See Pricing */}
            <div className="flex flex-row items-center gap-3 pt-2">
              <a
                href="https://vietnamvisa.govt.vn/apply-online"
                target="_blank"
                rel="nofollow"
                className="flex-1 sm:flex-initial bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-extrabold text-sm sm:text-base px-5 sm:px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 border border-orange-500 cursor-pointer"
              >
                <span>{getApplyCta()} →</span>
              </a>

              <button
                onClick={onOpenCalculator}
                className="flex-1 sm:flex-initial bg-white/95 hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base px-4 sm:px-5 py-3.5 rounded-xl border border-slate-300/90 shadow-2xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{getCalcCta()}</span>
              </button>
            </div>

            {/* Feature Bullets with Checkmarks (1 per row on mobile) */}
            <div className="pt-3 sm:pt-2 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-x-4 sm:gap-y-2 text-sm sm:text-base font-bold text-slate-800">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{getRushText()}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{getHumanSupportText()}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{getRefundText()}</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="pt-3 sm:pt-4 grid grid-cols-3 gap-2 sm:gap-4 border-t border-slate-200/80 text-left">
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
                  {tMulti(currentLang, {
                    en: 'Get a Quick Quote',
                    vi: 'Báo Giá Nhanh',
                    fr: 'Obtenir un devis rapide',
                    de: 'Schnellangebot einholen',
                    ja: 'お見積もり計算',
                    zh: '快速获取报价',
                    he: 'קבל הצעת מחיר מהירה',
                    ko: '빠른 견적 확인',
                    es: 'Obtener cotización rápida'
                  })}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                  {tMulti(currentLang, {
                    en: "We're working late so you don't have to.",
                    vi: 'Đội ngũ hỗ trợ 24/7 xử lý hồ sơ nhanh chóng.',
                    fr: 'Assistance rapide 24/7 pour votre visa.',
                    de: 'Unser Team arbeitet rund um die Uhr für Sie.',
                    ja: '24時間年中無休でスピーディーに対応。',
                    zh: '全天候为您快速处理签证申请。',
                    he: 'הצוות שלנו עובד מסביב לשעון עבורך.',
                    ko: '24시간 대기하며 빠르게 처리해 드립니다.',
                    es: 'Trabajamos 24/7 para facilitarle el trámite.'
                  })}
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                {/* Visa Type Dropdown */}
                <div className="space-y-1">
                  <label className="text-xs sm:text-sm font-bold text-slate-700 block">
                    {tMulti(currentLang, {
                      en: 'Visa type',
                      vi: 'Loại Visa',
                      fr: 'Type de visa',
                      de: 'Visumtyp',
                      ja: 'ビザ種類',
                      zh: '签证类型',
                      he: 'סוג ויזה',
                      ko: '비자 유형',
                      es: 'Tipo de visado'
                    })}
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
                    {tMulti(currentLang, {
                      en: 'Processing speed',
                      vi: 'Thời gian xử lý',
                      fr: 'Vitesse de traitement',
                      de: 'Bearbeitungszeit',
                      ja: '処理スピード',
                      zh: '办理速度',
                      he: 'מהירות טיפול',
                      ko: '발급 속도',
                      es: 'Velocidad de procesamiento'
                    })}
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
                    {tMulti(currentLang, {
                      en: 'Number of applicants',
                      vi: 'Số lượng hành khách',
                      fr: 'Nombre de demandeurs',
                      de: 'Anzahl der Antragsteller',
                      ja: '申請人数',
                      zh: '申请人数',
                      he: 'מספר מבקשים',
                      ko: '신청 인원',
                      es: 'Número de solicitantes'
                    })}
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
                    {tMulti(currentLang, {
                      en: 'Total',
                      vi: 'Tổng cộng',
                      fr: 'Total',
                      de: 'Gesamt',
                      ja: '合計',
                      zh: '总计',
                      he: 'סה"כ',
                      ko: '합계',
                      es: 'Total'
                    })}
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
                  <span>
                    {tMulti(currentLang, {
                      en: 'Start Application →',
                      vi: 'Bắt Đầu Nộp Hồ Sơ →',
                      fr: 'Commencer la demande →',
                      de: 'Antrag starten →',
                      ja: '申請を開始する →',
                      zh: '开始申请 →',
                      he: 'התחל בקשה ←',
                      ko: '신청 시작하기 →',
                      es: 'Iniciar solicitud →'
                    })}
                  </span>
                </a>
              </div>

              {/* Fine Print Footer */}
              <div className="space-y-1 text-xs text-slate-400 leading-snug">
                <p>
                  {tMulti(currentLang, {
                    en: 'Government stamp fee included. No hidden charges.',
                    vi: 'Đã bao gồm lệ phí Chính phủ. Không có chi phí ẩn.',
                    fr: 'Frais de gouvernement inclus. Aucun frais caché.',
                    de: 'Inklusive staatlicher Stempelgebühr. Keine versteckten Kosten.',
                    ja: '政府印紙代込み。隠れた追加料金はありません。',
                    zh: '已包含政府印花费，无任何隐形附加费。',
                    he: 'כולל אגרת ממשלה. ללא עלויות נסתרות.',
                    ko: '정부 수수료 포함. 추가 비용 없음.',
                    es: 'Tasa gubernamental incluida. Sin cargos ocultos.'
                  })}
                </p>
                <p>
                  {tMulti(currentLang, {
                    en: 'All charges are in USD. Your card provider will handle any currency conversion automatically during checkout.',
                    vi: 'Tất cả chi phí bằng USD. Ngân hàng phát hành thẻ sẽ tự động chuyển đổi tỷ giá khi thanh toán.',
                    fr: 'Tous les frais sont en USD. Votre banque convertira automatiquement la devise.',
                    de: 'Alle Gebühren in USD. Währungsumrechnung erfolgt automatisch bei der Zahlung.',
                    ja: 'お支払いは USD です。カード会社により自動で日本円等に換算されます。',
                    zh: '所有计费均为美元 USD。您的发卡银行将在结算时自动处理汇率兑换。',
                    he: 'כל החיובים ב-USD. חברת האשראי תבצע המרת מטבע אוטומטית.',
                    ko: '모든 수수료는 USD 기준입니다. 결제 시 해당 통화로 자동 환전됩니다.',
                    es: 'Todas las tarifas están en USD. Su emisor de tarjeta gestionará el cambio de divisa.'
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


