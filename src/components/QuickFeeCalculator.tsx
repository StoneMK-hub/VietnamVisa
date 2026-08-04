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
import { TRANSLATIONS, tMulti } from '../data/translations';

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
            {tMulti(currentLang, {
              en: 'TRANSPARENT VIETNAM E-VISA FEE SCHEDULE 2026',
              vi: 'BẢNG GIÁ NIÊM YẾT E-VISA VIỆT NAM 2026',
              fr: 'GRILLE TARIFAIRE DE L\'E-VISA POUR LE VIETNAM 2026',
              de: 'TRANSPARENTE VIETNAM E-VISUM GEBÜHRENORDNUNG 2026',
              ja: '2026年 ベトナム e-Visa 公開料金表',
              zh: '2026 年越南电子签证透明收费标准',
              he: 'לוח אגרות ויזה אלקטרונית לווייטנאם 2026',
              ko: '2026년 베트남 전자비자 수수료 안내',
              es: 'TABLA DE TARIFAS DE E-VISA PARA VIETNAM 2026'
            })}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {tMulti(currentLang, {
            en: 'Vietnam E-Visa Fee Calculator & Pricing Schedule',
            vi: 'Công Cụ Tính Phí & Bảng Lệ Phí E-Visa Việt Nam Trọn Gói',
            fr: 'Calculateur de frais d\'e-Visa pour le Vietnam et grille tarifaire',
            de: 'Vietnam E-Visum Gebührenrechner & Preisübersicht',
            ja: 'ベトナム e-Visa 料金計算ツール・定額費用一覧',
            zh: '越南电子签证费用在线计算器与全包价格表',
            he: 'מחשבון אגרות ויזה אלקטרונית לווייטנאם ולוח מחירים',
            ko: '베트남 전자비자 수수료 계산기 및 정찰제 안내',
            es: 'Calculadora de tarifas de e-Visa para Vietnam y tabla de precios'
          })}
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed text-center bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 sm:p-4 shadow-2xs">
          {tMulti(currentLang, {
            en: 'Calculate the total cost for your Vietnam Electronic Visa (E-Visa). Our transparent breakdown includes government stamping fees and application processing with zero hidden charges.',
            vi: 'Tra cứu và tính toán chính xác tổng chi phí cấp Thị thực điện tử (E-Visa) Việt Nam. Bảng giá minh bạch đã bao gồm phí đóng dấu Chính phủ và phí dịch vụ thẩm định hồ sơ.',
            fr: 'Calculez le coût total de votre e-Visa pour le Vietnam. Notre ventilation transparente comprend les frais de gouvernement et le traitement du dossier sans frais cachés.',
            de: 'Berechnen Sie die Gesamtkosten für Ihr Vietnam E-Visum. Unsere transparente Aufschlüsselung enthält Regierungsgebühren und Bearbeitung ohne versteckte Kosten.',
            ja: 'ベトナム電子ビザ (E-Visa) の総費用を正確に試算できます。政府手数料および審査サポート費を含む明朗会計です。',
            zh: '准确计算您的越南电子签证 (E-Visa) 总费用。透明计费，已包含越南政府规费及审核服务费，无隐藏附加费。',
            he: 'חשב את העלות הכוללת עבור הויזה האלקטרונית לווייטנאם. הפירוט השקוף שלנו כולל אגרות ממשלתיות וטיפול בבקשה.',
            ko: '베트남 전자비자(E-Visa) 총 발급 비용을 정확하게 계산하세요. 정부 수수료 및 서류 검토 수수료가 포함되어 있습니다.',
            es: 'Calcule el costo total de su e-Visa para Vietnam. Desglose transparente que incluye las tasas gubernamentales sin cargos ocultos.'
          })}
        </p>
      </article>

      {/* 2. COMPACT INTERACTIVE FEE CALCULATOR BOX */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 sm:p-7 space-y-5">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-1.5 text-indigo-700 font-bold text-xs uppercase tracking-wider mb-0.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>
                {tMulti(currentLang, {
                  en: 'Live Fee Estimator',
                  vi: 'Tính Phí Nhanh Trực Tuyến',
                  fr: 'Estimateur de frais en direct',
                  de: 'Live-Gebührenrechner',
                  ja: 'リアルタイム費用見積もり',
                  zh: '在线费用估算器',
                  he: 'אומדן אגרות בזמן אמת',
                  ko: '실시간 수수료 계산기',
                  es: 'Estimador de tarifas en vivo'
                })}
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
              {tMulti(currentLang, {
                en: 'Select Visa Options',
                vi: 'Chọn Thông Tin Chuyến Đi Của Bạn',
                fr: 'Sélectionnez les options de visa',
                de: 'Visum-Optionen auswählen',
                ja: '旅行条件の選択',
                zh: '选择您的行程与签证选项',
                he: 'בחר אפשרויות ויזה',
                ko: '비자 옵션 선택',
                es: 'Seleccione las opciones de visado'
              })}
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
                <span>
                  {tMulti(currentLang, {
                    en: 'Applicants Count',
                    vi: 'Số lượng khách',
                    fr: 'Nombre de demandeurs',
                    de: 'Anzahl der Antragsteller',
                    ja: '申請人数',
                    zh: '申请人数',
                    he: 'מספר מבקשים',
                    ko: '신청 인원 수',
                    es: 'Número de solicitantes'
                  })}
                </span>
              </label>
              <div className="relative">
                <select
                  value={applicantCount}
                  onChange={(e) => setApplicantCount(parseInt(e.target.value))}
                  className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 pr-10 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 
                        ? tMulti(currentLang, { en: 'Applicant', vi: 'Khách', fr: 'Demandeur', de: 'Antragsteller', ja: '名', zh: '位', he: 'מבקש', ko: '명', es: 'Solicitante' })
                        : tMulti(currentLang, { en: 'Applicants', vi: 'Khách', fr: 'Demandeurs', de: 'Antragsteller', ja: '名', zh: '位', he: 'מבקשים', ko: '명', es: 'Solicitantes' })}
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
                <span>
                  {tMulti(currentLang, {
                    en: 'Visa Type & Duration',
                    vi: 'Loại thị thực (Visa Type & Duration)',
                    fr: 'Type et durée du visa',
                    de: 'Visumtyp & Dauer',
                    ja: 'ビザの種類・滞在期間',
                    zh: '签证类型与有效期限',
                    he: 'סוג ויזה ומשך שהייה',
                    ko: '비자 유형 및 체류 기간',
                    es: 'Tipo de visado y duración'
                  })}
                </span>
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
                <span>
                  {tMulti(currentLang, {
                    en: 'Processing Speed Tier',
                    vi: 'Tốc độ xử lý (Processing Speed)',
                    fr: 'Niveau de vitesse de traitement',
                    de: 'Bearbeitungsgeschwindigkeit',
                    ja: '発券処理スピード',
                    zh: '加急办理速度',
                    he: 'מהירות טיפול',
                    ko: '발급 처리 속도',
                    es: 'Nivel de velocidad de procesamiento'
                  })}
                </span>
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
                {tMulti(currentLang, {
                  en: 'Optional Airport Add-Ons',
                  vi: 'Dịch Vụ Bổ Sung Sân Bay (Tùy Chọn)',
                  fr: 'Services optionnels à l\'aéroport',
                  de: 'Optionale Flughafen-Zusatzleistungen',
                  ja: '空港オプショナルサービス',
                  zh: '机场可选增值服务',
                  he: 'שירותי שדה תעופה אופציונליים',
                  ko: '공항 부가 서비스 (선택)',
                  es: 'Servicios opcionales de aeropuerto'
                })}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2">
                {(['travel_insurance', 'fast_track', 'car_pickup'] as ExtraService[]).map((srvKey, idx) => {
                  const srv = EXTRA_SERVICES_PRICING[srvKey];
                  const isChecked = selectedServices.includes(srvKey);
                  return (
                    <label
                      key={srvKey}
                      onClick={() => toggleService(srvKey)}
                      className={`flex items-center gap-1.5 p-2 sm:p-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                        idx === 2 ? 'col-span-2 sm:col-span-1' : ''
                      } ${
                        isChecked
                          ? 'bg-emerald-50/90 border-emerald-500 text-emerald-950 font-bold shadow-2xs'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100/80'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="accent-emerald-600 w-3.5 h-3.5 rounded cursor-pointer shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="truncate font-semibold text-[11px] sm:text-xs text-slate-900">
                          {currentLang === 'vi' ? srv.labelVi : srv.labelEn}
                        </div>
                        <div className="text-[10px] sm:text-[11px] text-emerald-700 font-extrabold leading-none mt-0.5">+${srv.feePerApplicantUsd}/pax</div>
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
                  {tMulti(currentLang, {
                    en: 'Fee Breakdown',
                    vi: 'Bảng Chi Tiết Giá',
                    fr: 'Détail des frais',
                    de: 'Gebührenaufschlüsselung',
                    ja: '費用の内訳',
                    zh: '费用细目清单',
                    he: 'פירוט אגרות',
                    ko: '수수료 내역',
                    es: 'Desglose de tarifas'
                  })}
                </span>
                <span className="text-xs text-slate-500 font-semibold">{applicantCount} Pax</span>
              </div>

              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">
                    {tMulti(currentLang, {
                      en: 'Base Visa Fee',
                      vi: 'Phí Visa Cơ Bản',
                      fr: 'Frais de visa de base',
                      de: 'Basis-Visumgebühr',
                      ja: '基本ビザ費用',
                      zh: '基础签证费',
                      he: 'אגרת ויזה בסיסית',
                      ko: '기본 비자 수수료',
                      es: 'Tarifa base de visado'
                    })} (${pricing.govFeePerPerson + pricing.serviceFeePerPerson} x {applicantCount}):
                  </span>
                  <span className="font-bold text-slate-900">${(pricing.govFeePerPerson + pricing.serviceFeePerPerson) * applicantCount} USD</span>
                </div>

                {pricing.speedFeeTotal > 0 && (
                  <div className="flex items-center justify-between text-indigo-800">
                    <span>
                      {tMulti(currentLang, {
                        en: 'Speed Surcharge',
                        vi: 'Phụ Phí Xử Lý Khẩn',
                        fr: 'Supplément urgence',
                        de: 'Eilzuschlag',
                        ja: '特急加算費用',
                        zh: '加急办理附加费',
                        he: 'תוספת מהירות',
                        ko: '급행 발급 수수료',
                        es: 'Recargo por velocidad'
                      })}:
                    </span>
                    <span className="font-extrabold">+${pricing.speedFeeTotal} USD</span>
                  </div>
                )}

                {pricing.extraServicesTotal > 0 && (
                  <div className="flex items-center justify-between text-emerald-800">
                    <span>
                      {tMulti(currentLang, {
                        en: 'Selected Add-Ons',
                        vi: 'Dịch Vụ Bổ Sung',
                        fr: 'Options sélectionnées',
                        de: 'Gewählte Zusatzleistungen',
                        ja: '選択中のオプション',
                        zh: '已选增值服务',
                        he: 'תוספות שנבחרו',
                        ko: '선택된 추가 서비스',
                        es: 'Servicios opcionales seleccionados'
                      })}:
                    </span>
                    <span className="font-extrabold">+${pricing.extraServicesTotal} USD</span>
                  </div>
                )}

                {pricing.groupDiscount > 0 && (
                  <div className="flex items-center justify-between text-emerald-700 font-semibold">
                    <span>
                      {tMulti(currentLang, {
                        en: 'Group Discount',
                        vi: 'Giảm Giá Nhóm',
                        fr: 'Remise de groupe',
                        de: 'Gruppenrabatt',
                        ja: '団体割引',
                        zh: '多人拼团优惠',
                        he: 'הנחת קבוצה',
                        ko: '단체 할인',
                        es: 'Descuento de grupo'
                      })}:
                    </span>
                    <span>-${pricing.groupDiscount} USD</span>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-slate-200 space-y-0.5">
                <div className="text-[11px] text-slate-500 uppercase tracking-wider font-bold">
                  {tMulti(currentLang, {
                    en: 'GRAND TOTAL',
                    vi: 'TỔNG CỘNG TRỌN GÓI',
                    fr: 'TOTAL GÉNÉRAL',
                    de: 'GESAMTBETRAG',
                    ja: '合計金額',
                    zh: '全包总费用',
                    he: 'סה"כ לתשלום',
                    ko: '최종 합계',
                    es: 'TOTAL GENERAL'
                  })}
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
                <span>
                  {tMulti(currentLang, {
                    en: 'Apply Online Now →',
                    vi: 'Bắt Đầu Nộp Đơn Ngay →',
                    fr: 'Postulez en ligne maintenant →',
                    de: 'Jetzt online beantragen →',
                    ja: '今すぐオンライン申請 →',
                    zh: '立即在线提交申请 →',
                    he: 'הגש בקשה באינטרנט עכשיו ←',
                    ko: '지금 온라인 신청하기 →',
                    es: 'Solicitar en línea ahora →'
                  })}
                </span>
              </a>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>
                  {tMulti(currentLang, {
                    en: '100% Transparent Fee Guarantee',
                    vi: 'Không phụ phí ẩn • Cam kết hoàn 100%',
                    fr: 'Garantie de transparence des frais à 100%',
                    de: '100% transparente Gebührengarantie',
                    ja: '隠し費用なし・100% 返金保証',
                    zh: '无隐形收费 • 承诺 100% 全额退款保障',
                    he: 'התחייבות 100% לשקיפות באגרות',
                    ko: '숨겨진 수수료 없음 • 100% 환불 보장',
                    es: 'Garantía de tarifas 100% transparentes'
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. PRICING TABLES */}
      <section className="space-y-6 bg-white rounded-2xl shadow-sm border border-slate-200 p-5 sm:p-7">
        <div className="border-b border-slate-100 pb-2.5">
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
            {tMulti(currentLang, {
              en: 'Visa Fee Schedules',
              vi: 'Bảng Giá Niêm Yết Chi Tiết',
              fr: 'Barème des frais de visa',
              de: 'Visum-Gebührentabelle',
              ja: 'ビザ定額料金表',
              zh: '签证收费标准表',
              he: 'לוח אגרות ויזה מפורט',
              ko: '비자 정찰제 요금표',
              es: 'Tabla detallada de tarifas de visado'
            })}
          </h2>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            {tMulti(currentLang, {
              en: 'Refer to our itemized rates for visa types, processing speeds, and optional airport services.',
              vi: 'Chi tiết bảng lệ phí e-Visa theo loại thị thực, tốc độ xử lý và các dịch vụ bổ sung tùy chọn.',
              fr: 'Consultez nos tarifs détaillés selon les types de visa, la rapidité et les services aéroportuaires.',
              de: 'Detaillierte Übersicht nach Visumart, Bearbeitungszeit und optionalen Flughafendiensten.',
              ja: 'ビザの種類、緊急処理速度、空港オプショナルサービスごとの料金一覧です。',
              zh: '按签证类型、加急办理速度及可选机场服务查阅明细费用。',
              he: 'עיין בתעריפים המפורטים שלנו לפי סוג ויזה, מהירות טיפול ושירותים אופציונליים.',
              ko: '비자 유형, 발급 속도 및 선택형 공항 서비스별 상세 요금표입니다.',
              es: 'Consulte nuestras tarifas desglosadas por tipo de visado, rapidez y servicios adicionales.'
            })}
          </p>
        </div>

        {/* TABLE 1: VISA TYPE */}
        <div className="space-y-2">
          <h3 className="text-sm sm:text-base font-extrabold text-slate-900 uppercase tracking-tight flex items-center gap-2">
            <FileText className="w-4 h-4 text-indigo-600" />
            <span>
              {tMulti(currentLang, {
                en: '1. VISA TYPE & DURATION',
                vi: '1. LOẠI THỊ THỰC & THỜI HẠN',
                fr: '1. TYPE DE VISA & DURÉE',
                de: '1. VISUMTYP & DAUER',
                ja: '1. ビザの種類・滞在期間',
                zh: '1. 签证类型与有效期限',
                he: '1. סוג ויזה ומשך שהייה',
                ko: '1. 비자 유형 및 체류 기간',
                es: '1. TIPO DE VISADO Y DURACIÓN'
              })}
            </span>
          </h3>

          {/* Mobile View: Cards Layout (sm:hidden) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:hidden">
            {[
              { type: '1-month single', duration: '30 days', entries: 'Single entry', price: '$54' },
              { type: '1-month multiple', duration: '30 days', entries: 'Multiple entry', price: '$84' },
              { type: '3-month single', duration: '90 days', entries: 'Single entry', price: '$94' },
              { type: '3-month multiple', duration: '90 days', entries: 'Multiple entry', price: '$104' },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50/90 border border-slate-200/90 rounded-xl p-3 flex items-center justify-between gap-2 shadow-2xs">
                <div className="space-y-0.5 min-w-0">
                  <div className="font-extrabold text-xs text-slate-900">{item.type}</div>
                  <div className="text-[11px] text-slate-600 font-medium">
                    {item.duration} • <span className="text-slate-500">{item.entries}</span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-sm font-black text-emerald-700">{item.price}</div>
                  <div className="text-[10px] text-slate-400 font-normal">
                    {tMulti(currentLang, {
                      en: 'per applicant',
                      vi: 'mỗi khách',
                      fr: 'par demandeur',
                      de: 'pro Antragsteller',
                      ja: '1名あたり',
                      zh: '每位申请人',
                      he: 'לכל מבקש',
                      ko: '1인당',
                      es: 'por solicitante'
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View: Table (hidden sm:block) */}
          <div className="hidden sm:block overflow-x-auto rounded-xl border border-slate-200/80 shadow-2xs">
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
              <span>
                {tMulti(currentLang, {
                  en: '2. PROCESSING SPEED',
                  vi: '2. TỐC ĐỘ XỬ LÝ HỒ SƠ',
                  fr: '2. VITESSE DE TRAITEMENT',
                  de: '2. BEARBEITUNGSZEIT',
                  ja: '2. 発券処理スピード',
                  zh: '2. 办理速度',
                  he: '2. מהירות טיפול',
                  ko: '2. 발급 처리 속도',
                  es: '2. VELOCIDAD DE PROCESAMIENTO'
                })}
              </span>
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              {tMulti(currentLang, {
                en: 'Pick the speed that matches your travel date. Times are measured from the moment our team submits your application to Vietnam Immigration.',
                vi: 'Lựa chọn tốc độ xử lý phù hợp với ngày khởi hành của bạn. Thời gian tính từ khi hồ sơ gửi lên Cục Xuất Nhập Cảnh.',
                fr: 'Choisissez la rapidité en fonction de votre date de départ.',
                de: 'Wählen Sie die für Ihr Abreisedatum passende Bearbeitungszeit.',
                ja: '出発予定日に合わせて処理スピードをお選びいただけます。',
                zh: '根据您的出行计划选择合适的加急速度。',
                he: 'בחר את המהירות המתאימה לתאריך הנסיעה שלך.',
                ko: '출국 일정에 맞는 처리 속도를 선택하세요.',
                es: 'Elija la velocidad que coincida con su fecha de viaje.'
              })}
            </p>
          </div>

          {/* Mobile View: Cards Layout (sm:hidden) */}
          <div className="grid grid-cols-1 gap-2 sm:hidden">
            {[
              { tier: 'Normal', delivery: '5 to 10 business days', surcharge: 'Included' },
              { tier: 'Urgent', delivery: '2 business days', surcharge: '+$45 per applicant' },
              { tier: 'Super Urgent', delivery: '1 business day', surcharge: '+$85 per applicant' },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50/90 border border-slate-200/90 rounded-xl p-3 flex items-center justify-between gap-2 shadow-2xs">
                <div className="space-y-0.5 min-w-0">
                  <div className="font-extrabold text-xs text-slate-900">{item.tier}</div>
                  <div className="text-[11px] text-slate-600 font-normal">{item.delivery}</div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs font-extrabold text-emerald-700">{item.surcharge}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View: Table (hidden sm:block) */}
          <div className="hidden sm:block overflow-x-auto rounded-xl border border-slate-200/80 shadow-2xs">
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
              <span>
                {tMulti(currentLang, {
                  en: '3. OPTIONAL ADD-ONS',
                  vi: '3. DỊCH VỤ BỔ SUNG TÙY CHỌN',
                  fr: '3. SERVICES OPTIONNELS',
                  de: '3. OPTIONALE ZUSATZLEISTUNGEN',
                  ja: '3. オプショナルサービス',
                  zh: '3. 可选增值服务',
                  he: '3. שירותים אופציונליים',
                  ko: '3. 선택형 공항 부가 서비스',
                  es: '3. SERVICIOS OPCIONALES'
                })}
              </span>
            </h3>
          </div>

          {/* Mobile View: Cards Layout (sm:hidden) */}
          <div className="grid grid-cols-1 gap-2 sm:hidden">
            {[
              { name: 'Travel Insurance', desc: 'Medical & baggage issues coverage up to $10,000', price: '$30 / applicant' },
              { name: 'Airport Fast-Track', desc: 'Priority VIP immigration lane, saves 30–60+ mins', price: '$35 / applicant' },
              { name: 'Car Pickup', desc: 'Private airport transfer directly to your hotel', price: '$35 / applicant' },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50/90 border border-slate-200/90 rounded-xl p-3 space-y-1 shadow-2xs">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-extrabold text-xs text-slate-900">{item.name}</span>
                  <span className="text-xs font-black text-emerald-700 shrink-0">{item.price}</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-normal font-normal">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Desktop View: Table (hidden sm:block) */}
          <div className="hidden sm:block overflow-x-auto rounded-xl border border-slate-200/80 shadow-2xs">
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
            {tMulti(currentLang, {
              en: 'Comprehensive Guide to Vietnam E-Visa Fees & Payment Policies',
              vi: 'Hướng Dẫn Chi Tiết Chi Phí & Quy Định Thị Thực Việt Nam 2026',
              fr: 'Guide complet des frais d\'e-Visa pour le Vietnam et des politiques de paiement',
              de: 'Umfassender Leitfaden zu Vietnam E-Visum Gebühren & Zahlungsrichtlinien',
              ja: 'ベトナム e-Visa 費用・お支払い規定の完全ガイド 2026',
              zh: '2026 年越南电子签证费用与支付政策指南',
              he: 'מדריך מקיף לאגרות ויזה אלקטרונית לווייטנאם ומדיניות תשלום',
              ko: '베트남 전자비자 수수료 및 결제 규정 상세 안내',
              es: 'Guía completa de tarifas de e-Visa para Vietnam y políticas de pago'
            })}
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
              1. {tMulti(currentLang, {
                en: 'What Do Vietnam E-Visa Fees Cover?',
                vi: 'Chi phí E-Visa Việt Nam bao gồm những khoản nào?',
                fr: 'Que couvrent les frais d\'e-Visa pour le Vietnam ?',
                de: 'Was decken die Vietnam E-Visum Gebühren ab?',
                ja: 'ベトナム e-Visa 費用には何が含まれますか？',
                zh: '越南电子签证费用包含哪些内容？',
                he: 'מה כוללות אגרות הויזה לווייטנאם?',
                ko: '베트남 전자비자 수수료에는 무엇이 포함되나요?',
                es: '¿Qué cubren las tarifas de la e-Visa para Vietnam?'
              })}
            </h3>
            <p className="text-slate-600 text-justify">
              {tMulti(currentLang, {
                en: 'When applying for an Electronic Visa (E-Visa) for Vietnam, the total cost comprises two primary elements: the mandatory Government Stamping Fee and the Application Processing & Review Fee.',
                vi: 'Khi nộp đơn xin cấp Thị thực điện tử (E-Visa) Việt Nam, tổng chi phí bao gồm hai khoản chính: Lệ phí cấp visa ấn định của Chính phủ (phí đóng dấu) và Phí dịch vụ kiểm tra, xử lý hồ sơ.',
                fr: 'Le coût total comprend les frais gouvernementaux et les frais de traitement.',
                de: 'Die Gesamtkosten umfassen die obligatorische Stempelgebühr der Regierung und die Bearbeitungsgebühr.',
                ja: 'ベトナム E-Visa の総費用には、政府規定の発券手数料と申請書類の精査サポート費用が含まれます。',
                zh: '申请越南电子签证的总费用由两部分组成：政府印花规费和前置审核与申报服务费。',
                he: 'העלות הכוללת מורכבת מאגרת ממשלה חובה ומדמי טיפול וסקירה.',
                ko: '베트남 전자비자 발급 총비용은 정부 수수료와 서류 검토 및 신청 대행 수수료로 구성됩니다.',
                es: 'El costo total incluye la tasa gubernamental obligatoria y la tarifa de procesamiento y revisión.'
              })}
            </p>
          </div>

          {/* Article Section 2 */}
          <div className="space-y-1">
            <h3 className="text-xs sm:text-sm font-extrabold text-slate-900">
              2. {tMulti(currentLang, {
                en: 'Processing Speed Comparison: Normal vs Urgent Tiers',
                vi: 'So sánh tốc độ xử lý: Gói Thường vs Gói Khẩn',
                fr: 'Comparaison des vitesses de traitement : Normal vs Urgent',
                de: 'Vergleich der Bearbeitungszeiten: Normal vs. Eilzug',
                ja: '発券スピード比較：通常申請 vs 緊急申請',
                zh: '办理速度对比：普通办理 vs 加急办理',
                he: 'השוואת מהירויות טיפול: רגיל מול דחוף',
                ko: '발급 속도 비교: 일반 vs 급행',
                es: 'Comparación de velocidad de procesamiento: Normal vs Urgente'
              })}
            </h3>
            <p className="text-slate-600 text-justify">
              {tMulti(currentLang, {
                en: 'Processing timelines depend directly on your scheduled departure date. For travelers with flexible travel itineraries, the Normal tier delivers maximum savings. For immediate flight arrangements, urgent options guarantee fast turnaround.',
                vi: 'Thời gian cấp visa phụ thuộc trực tiếp vào ngày khởi hành của bạn. Nếu có lịch trình linh hoạt, gói Thường mang lại chi phí tối ưu nhất. Nếu cần gấp, gói Khẩn cam kết cấp đúng thời hạn.',
                fr: 'Les délais dépendent de votre date de départ. Le tarif normal offre une économie maximale.',
                de: 'Die Bearbeitungszeiten hängen von Ihrem Abreisedatum ab. Der Normaltarif bietet maximale Ersparnis.',
                ja: 'ご出発日に応じて適切なプランをお選びいただけます。日程に余裕がある場合は通常プランがお得です。',
                zh: '根据您的出行日期选择最合适的时间包。行程富余选普通版最划算，加急版保障快捷出签。',
                he: 'לוחות הזמנים תלויים בתאריך היציאה שלך. המסלול הרגיל מציע חיסכון מרבי.',
                ko: '출국 일정에 따라 발급 시간이 달라집니다. 여유가 있다면 일반 발급이 가장 경제적입니다.',
                es: 'Los plazos dependen de su fecha de salida. El nivel Normal ofrece el máximo ahorro.'
              })}
            </p>
          </div>

          {/* Article Section 3 */}
          <div className="space-y-1">
            <h3 className="text-xs sm:text-sm font-extrabold text-slate-900">
              3. {tMulti(currentLang, {
                en: 'Benefits of Airport Fast-Track Concierge Services',
                vi: 'Lợi ích của Dịch vụ Hỗ trợ Sân bay (Fast-Track)',
                fr: 'Avantages du service Fast-Track à l\'aéroport',
                de: 'Vorteile des Flughafen Fast-Track-Service',
                ja: '空港ファストトラック（優先入国）のメリット',
                zh: '机场 Fast-Track 快速通关服务优势',
                he: 'יתרונות שירות המעבר המהיר בשדה התעופה',
                ko: '공항 패스트트랙(VIP 입국) 서비스의 장점',
                es: 'Beneficios del servicio Fast-Track en el aeropuerto'
              })}
            </h3>
            <p className="text-slate-600 text-justify">
              {tMulti(currentLang, {
                en: 'Avoid long immigration queues during peak hours at Tan Son Nhat, Noi Bai, or Da Nang airports. Fast-Track provides a dedicated agent guiding you through the priority lane in 5 to 10 minutes.',
                vi: 'Tránh xếp hàng chờ đợi kéo dài tại sân bay Tân Sơn Nhất, Nội Bài, Đà Nẵng. Dịch vụ Fast-Track có nhân viên đón trực tiếp và hướng dẫn đi luồng ưu tiên VIP chỉ trong 5-10 phút.',
                fr: 'Évitez les longues files d\'attente. Un agent dédié vous guide dans la voie prioritaire en 5 à 10 minutes.',
                de: 'Vermeiden Sie lange Warteschlangen. Ein eigener Agent führt Sie in 5 bis 10 Minuten durch die VIP-Spur.',
                ja: '混雑するタンソンニャット、ノイバイ、ダナン空港での長い入国審査列を回避。専用スタッフが5〜10分で優先レーンをご案内します。',
                zh: '在胡志明市、河内或岘港机场免去排队苦恼。专属客服带您走 VIP 绿色通道，5-10 分钟快速入境。',
                he: 'מנע תורים ארוכים. סוכן ייעודי ילווה אותך בנתיב המהיר תוך 5 עד 10 דקות.',
                ko: '탄손냐트, 노이바이, 다낭 공항의 긴 입국 대기 줄을 피하세요. 전담 직원이 5~10분 만에 VIP 전용 라인으로 안내합니다.',
                es: 'Evite largas filas. Un agente dedicado le guiará por el carril VIP en 5 a 10 minutos.'
              })}
            </p>
          </div>

          {/* Article Section 4 */}
          <div className="space-y-1">
            <h3 className="text-xs sm:text-sm font-extrabold text-slate-900">
              4. {tMulti(currentLang, {
                en: '100% Money-Back Approval Guarantee & Security',
                vi: 'Cam kết Hoàn tiền 100% & Bảo mật An toàn SSL',
                fr: 'Garantie satisfait ou remboursé à 100% & Sécurité SSL',
                de: '100% Geld-zurück-Garantie & SSL-Sicherheit',
                ja: '100% 返金保証および SSL セキュリティ保護',
                zh: '100% 拒签全额退款保障与 SSL 加密安全',
                he: 'התחייבות 100% להחזר כספי ואבטחת SSL',
                ko: '100% 환불 보장 정책 및 SSL 보안',
                es: 'Garantía de reembolso del 100% y seguridad SSL'
              })}
            </h3>
            <p className="text-slate-600 text-justify">
              {tMulti(currentLang, {
                en: 'We uphold strict customer protection standards with a 100% transparent refund policy. In the rare event an application cannot be approved, 100% of the service fee is refunded immediately.',
                vi: 'Chúng tôi cam kết chính sách hoàn tiền 100% minh bạch. Trong trường hợp hiếm hoi hồ sơ không được phê duyệt do lỗi kỹ thuật, 100% phí dịch vụ sẽ được hoàn trả ngay lập tức.',
                fr: 'Politique de remboursement 100% transparente si votre demande ne peut pas être approuvée.',
                de: '100% transparente Rückerstattung, falls ein Antrag nicht genehmigt werden kann.',
                ja: '万が一ビザが発給されなかった場合は、サービス手数料を 100% 全額返金いたします。',
                zh: '若由于系统原因未能成功获批，我们承诺 100% 立即全额退还服务费用。',
                he: 'מדיניות החזר מפורשת וגלגול מלא במידה והבקשה לא מאושרת.',
                ko: '만약 비자가 승인되지 않을 경우, 서비스 수수료 100%를 즉시 환불해 드립니다.',
                es: 'Política de reembolso 100% transparente en caso de que la solicitud नहीं sea aprobada.'
              })}
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
                ? tMulti(currentLang, {
                    en: 'Show Less ▲',
                    vi: 'Thu gọn nội dung ▲',
                    fr: 'Réduire ▲',
                    de: 'Weniger anzeigen ▲',
                    ja: '折りたたむ ▲',
                    zh: '收起内容 ▲',
                    he: 'הצג פחות ▲',
                    ko: '접기 ▲',
                    es: 'Mostrar menos ▲'
                  })
                : tMulti(currentLang, {
                    en: 'Read Full Guide & Details ▼',
                    vi: 'Xem thêm nội dung hướng dẫn chi tiết ▼',
                    fr: 'Lire le guide complet ▼',
                    de: 'Vollständigen Leitfaden lesen ▼',
                    ja: '詳細ガイドを読む ▼',
                    zh: '查看完整指南与细节 ▼',
                    he: 'קרא את המדריך המלא ▼',
                    ko: '상세 가이드 더보기 ▼',
                    es: 'Leer la guía completa ▼'
                  })}
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
