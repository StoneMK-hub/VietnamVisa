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
import { tMulti } from '../data/translations';

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
  return (
    <section className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-slate-200 p-3.5 sm:p-8 lg:p-10 space-y-6 sm:space-y-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3">
        <div className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-200 text-indigo-700 text-[11px] sm:text-xs font-bold px-3 py-1 sm:py-1.5 rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
          <span>
            {tMulti(currentLang, {
              en: 'VIETNAM E-VISA AGENCY & TRAVEL SERVICES',
              vi: 'DỊCH VỤ E-VISA VIỆT NAM UY TÍN HÀNG ĐẦU 2026',
              fr: 'AGENCE D\'E-VISA POUR LE VIETNAM ET SERVICES DE VOYAGE',
              de: 'VIETNAM E-VISUM AGENTUR & REISEDIENSTE',
              ja: 'ベトナム E-VISA 申請代行＆旅行サービス',
              zh: '越南电子签证代办与专业入境服务',
              he: 'סוכנות ויזה אלקטרונית ושירותי נסיעות לוייטנאם',
              ko: '베트남 전자비자 발급 대행 및 여행 서비스',
              es: 'AGENCIA DE E-VISA PARA VIETNAM Y SERVICIOS DE VIAJE'
            })}
          </span>
        </div>

        <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug sm:leading-tight">
          {tMulti(currentLang, {
            en: 'Fast, Guaranteed & Seamless Vietnam E-Visa Application Service',
            vi: 'Giải Pháp Xin E-Visa Việt Nam Nhanh Chóng, Đảm Bảo 100% Đậu',
            fr: 'Service de demande d\'E-Visa pour le Vietnam rapide et garanti',
            de: 'Schneller und garantierter E-Visum-Service für Vietnam',
            ja: '迅速・確実・スムーズなベトナム E-Visa 申請サポート',
            zh: '快速、保障且便捷的越南电子签证申请服务',
            he: 'שירות בקשת ויזה אלקטרונית לוייטנאם מהיר, מובטח וללא תקלות',
            ko: '빠르고 확실한 베트남 전자비자 발급 대행 서비스',
            es: 'Servicio de solicitud de E-Visa para Vietnam rápido y garantizado'
          })}
        </h2>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
          {tMulti(currentLang, {
            en: 'Trusted processing portal for 30-day & 90-day Vietnam e-Visas. We verify your passport details and photo compliance before government submission to prevent delays and rejections.',
            vi: 'Cung cấp dịch vụ tư vấn, kiểm tra hồ sơ và xử lý thị thực điện tử (E-Visa) Việt Nam cho khách quốc tế, Việt kiều và doanh nhân. Cam kết duyệt nhanh từ 1 giờ, hỗ trợ trọn gói không phát sinh phí.',
            fr: 'Portail de traitement agréé pour les e-Visas Vietnam de 30 et 90 jours. Nous vérifions la conformité de votre passeport et photo avant soumission.',
            de: 'Vertrauenswürdiges Portal für 30-Tage- und 90-Tage-E-Visa für Vietnam. Wir prüfen Ihre Passdaten und Ihr Foto vor der Einreichung.',
            ja: '30日・90日間のベトナムE-Visaに対応。申請前にパスポート情報や顔写真を事前確認し、不備や遅延を防ぎます。',
            zh: '专业办理30天和90天越南电子签证。提交前仔细核对护照信息与照片，确保无误顺畅通过。',
            he: 'פורטל מעבד אמין לויזות אלקטרוניות ל-30 ו-90 יום. אנו בודקים את פרטי הדרכון והתמונה לפני הגשה.',
            ko: '30일 및 90일 베트남 전자비자 전문 발급 대행. 정부 제출 전 여권 정보와 사진 규격을 사전 검ท하여 거절 및 지연을 방지합니다.',
            es: 'Portal de confianza para e-Visas de Vietnam de 30 y 90 días. Verificamos pasaporte y foto antes del envío oficial.'
          })}
        </p>
      </div>

      {/* 4 Core Value Proposition Cards (2 Columns on mobile for compact vertical layout) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5">
        {/* Card 1 */}
        <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border border-slate-200 hover:border-indigo-300 transition-all space-y-2 sm:space-y-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-tight">
            {tMulti(currentLang, {
              en: '100% Approval Guarantee',
              vi: 'Đảm Bảo Duyệt 100%',
              fr: 'Garantie d\'approbation 100%',
              de: '100% Genehmigungsgarantie',
              ja: '100% 許可保証',
              zh: '100% 签发保障',
              he: 'התחייבות 100% לאישור',
              ko: '100% 승인 보장',
              es: 'Garantía del 100% de aprobación'
            })}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {tMulti(currentLang, {
              en: 'Every passport & photo is checked for 100% compliance. Full refund guarantee.',
              vi: 'Kiểm tra họ tên, số hộ chiếu & ảnh chuẩn 100% trước khi nộp. Hoàn tiền nếu trễ.',
              fr: 'Vérification complète du passeport et de la photo. Remboursement garanti.',
              de: 'Prüfung auf 100% Richtigkeit vor der Einreichung. Geld-zurück-Garantie.',
              ja: 'パスポ―ト情報と写真を事前チェック。不許可時は全額返金保障。',
              zh: '提交前双重人工审核，保证信息完全符合要求。拒签或延迟无条件退款。',
              he: 'כל דרכון ותמונה נבדקים לציות מלא. החזר כספי מלא במקרה של דחייה.',
              ko: '여권과 사진 100% 사전 검수 진행. 거절 시 전액 환불 보장.',
              es: 'Verificación exhaustiva de pasaporte y fotografía. Reembolso garantizado.'
            })}
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border border-slate-200 hover:border-indigo-300 transition-all space-y-2 sm:space-y-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-tight">
            {tMulti(currentLang, {
              en: 'Super Urgent 1-Hour Express',
              vi: 'Xử Lý Khẩn Cấp 1H',
              fr: 'Traitement Super Urgent 1H',
              de: 'Super-Eilservice in 1 Stunde',
              ja: '1時間特急処理対応',
              zh: '1小时超加急办理',
              he: 'טיפול דחוף במיוחד תוך שעה',
              ko: '1시간 초긴급 발급',
              es: 'Trámite Súper Urgente 1H'
            })}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {tMulti(currentLang, {
              en: 'Emergency express lane processes urgent approvals in 1 to 4 working hours.',
              vi: 'Cần visa gấp? Gói Super Urgent duyệt công văn trong 1 - 4 giờ làm việc.',
              fr: 'Traitement d\'urgence en 1 à 4 heures ouvrables en cas de départ imminent.',
              de: 'Eilkanal bearbeitet dringende Anträge innerhalb von 1 bis 4 Arbeitsstunden.',
              ja: '急な出発にも対応！1〜4営業時間で結果をお届けする特急プラン。',
              zh: '加急绿色通道，最快 1 至 4 个工作小时内完成审核出签。',
              he: 'מסלול חירום מעבד אישורים דחופים תוך 1 עד 4 שעות עבודה.',
              ko: '긴급 출국 시 1~4시간 이내 빠르게 승인 문서를 발급해 드립니다.',
              es: 'Vía exprés de emergencia que procesa su visado en 1 a 4 horas laborables.'
            })}
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border border-slate-200 hover:border-indigo-300 transition-all space-y-2 sm:space-y-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
            <Plane className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-tight">
            {tMulti(currentLang, {
              en: 'Airport Fast-Track VIP',
              vi: 'Fast-Track Sân Bay VIP',
              fr: 'Fast-Track Aéroport VIP',
              de: 'Flughafen Fast-Track VIP',
              ja: '空港 Fast-Track VIP',
              zh: '机场 VIP 快速通关',
              he: 'שירות VIP אקספרס בשדה התעופה',
              ko: '공항 패스트트랙 VIP',
              es: 'Fast-Track VIP en Aeropuerto'
            })}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {tMulti(currentLang, {
              en: 'Skip 2-hour airport lines at HAN, SGN & DAD. Officer greets you at gate.',
              vi: 'Bỏ qua xếp hàng chờ tại Tân Sơn Nhất, Nội Bài, Đà Nẵng. Ưu tiên nhập cảnh.',
              fr: 'Évitez les longues files à Hanoi, Ho Chi Minh et Da Nang. Accueil personnalisé.',
              de: 'Sparen Sie Wartezeit an den Flughäfen HAN, SGN & DAD. Bevorzugte Einreise.',
              ja: 'ハノイ、ホーチミン、ダナン等の空港で並ばずに優先入国手続き。',
              zh: '免去河内、胡志明、岘港机场长达2小时的排队，工作人员迎宾快速协助通关。',
              he: 'דלג על התורים בנמלי התעופה בהאנוי, הוי צ\'י מין ודנאנג.',
              ko: '하노이, 호치민, 다낭 공항의 긴 입국 줄을 스킵하고 전용 통로로 우선 입국.',
              es: 'Evite largas filas en los aeropuertos de Hanói, Ho Chi Minh y Da Nang.'
            })}
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border border-slate-200 hover:border-indigo-300 transition-all space-y-2 sm:space-y-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
            <Headphones className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-tight">
            {tMulti(currentLang, {
              en: '24/7 Human Support',
              vi: 'Hỗ Trợ 24/7 Đa Ngôn Ngữ',
              fr: 'Assistance humaine 24/7',
              de: '24/7 Persönlicher Support',
              ja: '24時間年中無休サポート',
              zh: '24/7 多语言人工客服',
              he: 'תמיכה אנושית 24/7',
              ko: '24시간 다국어 상담 지원',
              es: 'Soporte humano 24/7'
            })}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {tMulti(currentLang, {
              en: 'Dedicated care via WhatsApp (+84 832 320 320) & chat in EN, VI, FR, DE, JA, ZH.',
              vi: 'Hỗ trợ WhatsApp, Email, Live chat 24/7 bằng tiếng Việt, Anh, Pháp, Đức, Nhật, Trung.',
              fr: 'Support client par WhatsApp et chat en français, anglais, vietnamien, etc.',
              de: 'Mehrsprachiger Kundenservice via WhatsApp und Chat rund um die Uhr.',
              ja: 'WhatsAppおよびチャットにて多言語（日・英・越・仏・独・中等）で手厚く対応。',
              zh: '通过 WhatsApp 与在线客服提供中文、英文、法文、德文、日文等多语种服务。',
              he: 'תמיכה ייעודית ב-WhatsApp ובצ\'אט במגוון שפות.',
              ko: 'WhatsApp 및 온라인 채팅을 통해 한국어, 영어, 베트남어 등 24시간 상담.',
              es: 'Atención personalizada vía WhatsApp y chat en múltiples idiomas.'
            })}
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
            {tMulti(currentLang, {
              en: 'Vietnam E-Visa Rules & Guidelines for 2026',
              vi: 'Quy Định E-Visa Việt Nam 2026 Mới Nhất Cho Du Khách',
              fr: 'Réglementations de l\'E-Visa Vietnam 2026',
              de: 'Bestimmungen für das Vietnam E-Visum 2026',
              ja: '2026年最新 ベトナム E-Visa 規定・ガイドライン',
              zh: '2026年最新越南电子签证政策与指南',
              he: 'הנחיות ותקנות ויזה אלקטרונית לוייטנאם 2026',
              ko: '2026년 최신 베트남 전자비자 규정 및 안내',
              es: 'Regulaciones de E-Visa de Vietnam 2026'
            })}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {tMulti(currentLang, {
              en: 'Vietnam e-Visa is valid for 30 to 90 days with Single or Multiple entry options for all countries. Valid across international border checkpoints in Vietnam (airports, land ports, and seaports). No physical passport submission required.',
              vi: 'Thị thực điện tử Việt Nam áp dụng cho tất cả 190+ quốc gia và vùng lãnh thổ, có thời hạn từ 30 ngày đến 90 ngày (nhập cảnh 1 lần hoặc nhiều lần). Cho phép nhập cảnh qua các cửa khẩu quốc tế gồm sân bay, đường bộ và đường biển.',
              fr: 'L\'e-Visa Vietnam est valable de 30 à 90 jours (entrée simple ou multiple) pour tous les pays. Valable dans tous les points de contrôle frontaliers internationaux.',
              de: 'Das Vietnam E-Visum gilt für 30 bis 90 Tage (ein- oder mehrmalige Einreise) für alle Nationalitäten und an allen internationalen Grenzüberwegen.',
              ja: 'ベトナムE-Visaは全対象国に対し、30日〜90日間の有効期間（1回または me複数回入国）で発급されます。主要空港・陸路・港湾のすべての国際検問所で利用可能です。',
              zh: '越南电子签证面向所有国家开放，有效期 30 至 90 天，可选单次或多次入境。适用于越南所有国际机场、陆路及海路口岸，无须邮寄护照原件。',
              he: 'הויזה האלקטרונית תקפה ל-30 עד 90 יום, כניסה יחידה או מרובה, לכל המדינות בנמלי התעופה, המעברים היבשתיים והימיים.',
              ko: '베트남 전자비자는 모든 국가 국민을 대상으로 30일~90일(단수/복수) 유효합니다. 공항, 육로, 항구 등 모든 국제 출입국 검문소에서 사용 가능하며 여권 실물 제출이 필요 없습니다.',
              es: 'La e-Visa de Vietnam es válida de 30 a 90 días (entrada única o múltiple) para todos los países en aeropuertos, puertos terrestres y marítimos.'
            })}
          </p>
          <div className="pt-1 flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs font-semibold text-amber-300">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>
                {tMulti(currentLang, {
                  en: '30 & 90-Day Validity',
                  vi: 'Thời hạn 30 & 90 Ngày',
                  fr: 'Validité 30 & 90 jours',
                  de: '30 & 90 Tage Gültigkeit',
                  ja: '30日 & 90日 有効期限',
                  zh: '30天与90天有效期',
                  he: 'תוקף ל-30 ו-90 ימים',
                  ko: '30일 및 90일 유효기간',
                  es: 'Validez de 30 y 90 días'
                })}
              </span>
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>
                {tMulti(currentLang, {
                  en: 'Single & Multiple Entry',
                  vi: 'Nhập cảnh 1 hoặc nhiều lần',
                  fr: 'Entrée simple ou multiple',
                  de: 'Ein- und mehrmalige Einreise',
                  ja: 'シングル・マルチ入国対応',
                  zh: '单次或多次入境',
                  he: 'כניסה יחידה או מרובה',
                  ko: '단수 및 복수 입국',
                  es: 'Entrada única o múltiple'
                })}
              </span>
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>
                {tMulti(currentLang, {
                  en: 'Airports, Land & Seaports',
                  vi: 'Áp dụng cho Sân bay, Đường bộ & Cảng biển',
                  fr: 'Aéroports, voies terrestres et maritimes',
                  de: 'Flughäfen, Land- & Seehäfen',
                  ja: '空港・陸路・港湾に対応',
                  zh: '适用于机场、陆路与海路',
                  he: 'נמלי תעופה, מעברים יבשתיים וימיים',
                  ko: '공항, 육로, 항구 모두 가능',
                  es: 'Aeropuertos, vía terrestre y marítima'
                })}
              </span>
            </span>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5 justify-center pt-2 lg:pt-0">
          <button
            onClick={onOpenOverview || onStartApplication}
            className="w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-extrabold text-xs sm:text-sm py-3 px-5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer border border-indigo-500"
          >
            <span>
              {tMulti(currentLang, {
                en: 'Vietnam E-Visa →',
                vi: 'Nộp Hồ Sơ E-Visa →',
                fr: 'Demander un E-Visa →',
                de: 'E-Visum beantragen →',
                ja: 'E-Visa を申請する →',
                zh: '立即申请电子签证 →',
                he: 'הגש בקשת ויזה →',
                ko: '전자비자 신청하기 →',
                es: 'Solicitar E-Visa →'
              })}
            </span>
          </button>

          <button
            onClick={onOpenRequirements}
            className="w-full bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 font-bold text-xs py-2.5 px-4 rounded-xl border border-slate-700 transition-all flex items-center justify-center gap-2"
          >
            <Globe className="w-4 h-4 text-indigo-400" />
            <span>
              {tMulti(currentLang, {
                en: 'Check Country Eligibility',
                vi: 'Xem Các Quốc Gia Miễn Visa',
                fr: 'Vérifier l\'éligibilité du pays',
                de: 'Länderberechtigung prüfen',
                ja: '国別のビザ免除・要件を確認',
                zh: '查询各国家的签证与免签政策',
                he: 'בדוק זכאות לפי מדינה',
                ko: '국가별 비자 면제 여부 확인',
                es: 'Verificar elegibilidad por país'
              })}
            </span>
          </button>
        </div>
      </div>

    </section>
  );
};
