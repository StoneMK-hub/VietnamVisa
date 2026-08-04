import React from 'react';
import { ShieldCheck, Lock, Award, MapPin, Phone, Mail, ArrowUpRight, MessageCircle, FileCheck, Sliders } from 'lucide-react';
import { Language } from '../types';
import { TabType } from '../routes';
import { Logo } from './Logo';
import { tMulti } from '../data/translations';

interface FooterProps {
  currentLang: Language;
  onNavigate: (tab: TabType) => void;
  onOpenCookiePreferences?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onNavigate, onOpenCookiePreferences }) => {
  return (
    <footer className="bg-slate-200/90 text-slate-800 border-t-2 border-slate-300/80 pt-6 sm:pt-8 pb-6">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-8 space-y-5 sm:space-y-6">
        {/* Top Compact Trust Badges Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3.5 pb-4 sm:pb-6 border-b border-slate-300/80 text-xs sm:text-sm">
          <div className="flex items-center gap-2 sm:gap-3 bg-white p-2.5 sm:p-3 rounded-xl border border-slate-300/70 shadow-2xs">
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
            <div>
              <p className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">
                {tMulti(currentLang, {
                  en: '100% Satisfaction',
                  vi: 'Cam Kết 100% Hài Lòng',
                  fr: '100% De Satisfaction',
                  de: '100% Zufriedenheit',
                  ja: '100% 満足保証',
                  zh: '100% 满意保证',
                  he: '100% שביעות רצון',
                  ko: '100% 만족 보장',
                  es: '100% Satisfacción'
                })}
              </p>
              <p className="text-[10px] sm:text-xs text-slate-500 leading-none mt-0.5">
                {tMulti(currentLang, {
                  en: 'Guaranteed approval',
                  vi: 'Đảm bảo đậu visa',
                  fr: 'Approbation garantie',
                  de: 'Garantierte Genehmigung',
                  ja: '発給100%保証',
                  zh: '拒签退款保障',
                  he: 'אישור מובטח',
                  ko: '발급 보장',
                  es: 'Aprobación garantizada'
                })}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200/80 shadow-2xs">
            <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 shrink-0" />
            <div>
              <p className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">
                {tMulti(currentLang, {
                  en: '256-Bit SSL Secure',
                  vi: 'Bảo Mật SSL 256-Bit',
                  fr: 'Sécurité SSL 256 Bits',
                  de: '256-Bit SSL Verschlüsselt',
                  ja: '256ビットSSL暗号化',
                  zh: '256位 SSL 加密',
                  he: 'אבטחת SSL 256-ביט',
                  ko: '256-Bit SSL 보안',
                  es: 'Seguridad SSL 256-Bits'
                })}
              </p>
              <p className="text-[10px] sm:text-xs text-slate-500 leading-none mt-0.5">
                {tMulti(currentLang, {
                  en: 'Encrypted portal',
                  vi: 'Cổng thông tin mã hóa',
                  fr: 'Portail sécurisé',
                  de: 'Sicheres Portal',
                  ja: '暗号化通信',
                  zh: '加密传输',
                  he: 'פורטל מוצפן',
                  ko: '암호화 시스템',
                  es: 'Portal encriptado'
                })}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200/80 shadow-2xs">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 shrink-0" />
            <div>
              <p className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">
                {tMulti(currentLang, {
                  en: 'Verified Agency',
                  vi: 'Đại Lý Uy Tín',
                  fr: 'Agence Vérifiée',
                  de: 'Geprüfte Agentur',
                  ja: '認定代理店',
                  zh: '认证代办机构',
                  he: 'סוכנות מאומתת',
                  ko: '인증 대행사',
                  es: 'Agencia Verificada'
                })}
              </p>
              <p className="text-[10px] sm:text-xs text-slate-500 leading-none mt-0.5">
                {tMulti(currentLang, {
                  en: '24/7 Support team',
                  vi: 'Hỗ trợ 24/7',
                  fr: 'Support 24/7',
                  de: '24/7 Support',
                  ja: '24時間対応',
                  zh: '24/7 客服支持',
                  he: 'תמיכה 24/7',
                  ko: '24시간 상담',
                  es: 'Atención 24/7'
                })}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200/80 shadow-2xs">
            <FileCheck className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 shrink-0" />
            <div>
              <p className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">
                {tMulti(currentLang, {
                  en: 'Super Urgent',
                  vi: 'Xử Lý Khẩn Cấp',
                  fr: 'Super Urgent',
                  de: 'Super-Eilservice',
                  ja: '超特急発給',
                  zh: '特急办理',
                  he: 'טיפול סופר דחוף',
                  ko: '초긴급 발급',
                  es: 'Súper Urgente'
                })}
              </p>
              <p className="text-[10px] sm:text-xs text-slate-500 leading-none mt-0.5">
                {tMulti(currentLang, {
                  en: 'Express 24h service',
                  vi: 'Dịch vụ nhanh 24h',
                  fr: 'Service express 24h',
                  de: '24h Express-Service',
                  ja: '24時間以内対応',
                  zh: '24小时极速出签',
                  he: 'שירות אקספרס ב-24 שעות',
                  ko: '24시간 당일 발급',
                  es: 'Servicio exprés 24h'
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer 2-Column Mobile & 12-Column Desktop Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-4 gap-y-5 sm:gap-6 text-xs sm:text-sm border-b border-slate-300/80 pb-6">
          {/* Col 1: Brand & Brief Sapo */}
          <div className="col-span-2 md:col-span-4 space-y-2.5">
            <Logo variant="light" size="sm" onClick={() => onNavigate('home')} />
            <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
              {tMulti(currentLang, {
                en: 'Commercial visa agency facilitating e-Visa applications, urgent processing, and airport concierge for international travelers to Vietnam.',
                vi: 'Trung tâm hỗ trợ đăng ký Thị thực điện tử (e-Visa) Việt Nam & dịch vụ đón tiễn nhanh tại sân bay cho du khách quốc tế.',
                fr: 'Agence commerciale facilitant les demandes d\'e-Visa, le traitement d\'urgence et l\'accueil à l\'aéroport pour les voyageurs au Vietnam.',
                de: 'Kommerzielle Visagagentur für e-Visum Anträge, Eilbearbeitung und Flughafen-Concierge-Services in Vietnam.',
                ja: 'ベトナム渡航者向けのe-Visa申請、特急手続き、空港ファストトラック代行サービス。',
                zh: '提供越南电子签证（e-Visa）快速办理、紧急出签及机场 VIP 快速通关服务的商业代办机构。',
                he: 'סוכנות ויזות מסחרית המסייעת בהגשת ויזה אלקטרונית, טיפול דחוף ושירותי VIP בשדה התעופה בווייטנאם.',
                ko: '베트남 전자비자(e-Visa) 신청, 긴급 발급 및 공항 패스트트랙 서비스를 제공하는 전문 대행사입니다.',
                es: 'Agencia comercial para la gestión de e-Visas, trámites urgentes y atención en aeropuertos para viajeros a Vietnam.'
              })}
            </p>
            <div className="flex items-center gap-2 pt-0.5">
              <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full">
                ONLINE 24/7
              </span>
              <span className="text-slate-600 text-[11px] sm:text-xs font-medium">
                {tMulti(currentLang, {
                  en: 'All 195+ Nationalities',
                  vi: 'Tất cả 195+ Quốc tịch',
                  fr: 'Toutes nationalités (195+)',
                  de: 'Alle 195+ Nationalitäten',
                  ja: '全195ヶ国対象',
                  zh: '支持全球 195+ 国籍',
                  he: 'לכל 195+ האזרחויות',
                  ko: '전 세계 195개국 대상',
                  es: 'Todas las 195+ nacionalidades'
                })}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="col-span-1 md:col-span-3 space-y-2 sm:space-y-3">
            <h4 className="text-slate-900 font-extrabold text-xs sm:text-sm uppercase tracking-wider">
              {tMulti(currentLang, {
                en: 'Navigation',
                vi: 'Liên Kết',
                fr: 'Navigation',
                de: 'Navigation',
                ja: 'ナビゲーション',
                zh: '导航链接',
                he: 'ניווט',
                ko: '메뉴',
                es: 'Navegación'
              })}
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              <li>
                <a
                  href="/overview"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('overview');
                  }}
                  className="hover:text-indigo-600 text-slate-700 transition-colors inline-flex items-center gap-1 cursor-pointer font-medium"
                >
                  <span>
                    {tMulti(currentLang, {
                      en: 'Overview',
                      vi: 'Tổng Quan',
                      fr: 'Aperçu',
                      de: 'Übersicht',
                      ja: '概要',
                      zh: '概览',
                      he: 'סקירה כללית',
                      ko: '개요',
                      es: 'Visión general'
                    })}
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="/how-to-apply"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('apply');
                  }}
                  className="hover:text-indigo-600 text-slate-700 transition-colors inline-flex items-center gap-1 cursor-pointer font-medium"
                >
                  <span>
                    {tMulti(currentLang, {
                      en: 'How to Apply',
                      vi: 'Xin Visa',
                      fr: 'Comment postuler',
                      de: 'Visum beantragen',
                      ja: '申請方法',
                      zh: '申请流程',
                      he: 'איך להגיש',
                      ko: '신청 방법',
                      es: 'Cómo solicitar'
                    })}
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="/visa-fee"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('calculator');
                  }}
                  className="hover:text-indigo-600 text-slate-700 transition-colors inline-flex items-center gap-1 cursor-pointer font-medium"
                >
                  <span>
                    {tMulti(currentLang, {
                      en: 'Visa Fee',
                      vi: 'Bảng Phí',
                      fr: 'Frais de visa',
                      de: 'Visumgebühren',
                      ja: 'ビザ料金表',
                      zh: '签证费用',
                      he: 'עלות ויזה',
                      ko: '비자 수수료',
                      es: 'Tasas de visado'
                    })}
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="/visa-requirements"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('requirements');
                  }}
                  className="hover:text-indigo-600 text-slate-700 transition-colors inline-flex items-center gap-1 cursor-pointer font-medium"
                >
                  <span>
                    {tMulti(currentLang, {
                      en: 'Requirements',
                      vi: 'Điều Kiện',
                      fr: 'Exigences',
                      de: 'Anforderungen',
                      ja: '必要条件',
                      zh: '申请条件',
                      he: 'דרישות',
                      ko: '신청 자격',
                      es: 'Requisitos'
                    })}
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="/faqs"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('faqs');
                  }}
                  className="hover:text-indigo-600 text-slate-700 transition-colors inline-flex items-center gap-1 cursor-pointer font-medium"
                >
                  <span>
                    {tMulti(currentLang, {
                      en: 'FAQs',
                      vi: 'Hỏi Đáp',
                      fr: 'FAQ',
                      de: 'FAQs',
                      ja: 'よくある質問',
                      zh: '常见问题',
                      he: 'שאלות ותשובות',
                      ko: '자주 묻는 질문',
                      es: 'Preguntas frecuentes'
                    })}
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('contact');
                  }}
                  className="hover:text-indigo-600 text-slate-700 transition-colors inline-flex items-center gap-1 cursor-pointer font-medium"
                >
                  <span>
                    {tMulti(currentLang, {
                      en: 'Contact Us',
                      vi: 'Liên Hệ',
                      fr: 'Nous contacter',
                      de: 'Kontakt',
                      ja: 'お問い合わせ',
                      zh: '联系我们',
                      he: 'צור קשר',
                      ko: '문의하기',
                      es: 'Contacto'
                    })}
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Policies & Legal */}
          <div className="col-span-1 md:col-span-2 space-y-2 sm:space-y-3">
            <h4 className="text-slate-900 font-extrabold text-xs sm:text-sm uppercase tracking-wider">
              {tMulti(currentLang, {
                en: 'Legal',
                vi: 'Chính Sách',
                fr: 'Légal',
                de: 'Rechtliches',
                ja: '法的情報',
                zh: '法律政策',
                he: 'משפטי',
                ko: '약관 및 정책',
                es: 'Legal'
              })}
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              <li>
                <a
                  href="/payment-guidelines"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('payment-guidelines');
                  }}
                  className="hover:text-indigo-600 text-slate-700 transition-colors inline-flex items-center gap-1 cursor-pointer font-medium"
                >
                  <span>
                    {tMulti(currentLang, {
                      en: 'Payment',
                      vi: 'Thanh toán',
                      fr: 'Paiement',
                      de: 'Zahlung',
                      ja: 'お支払い',
                      zh: '支付指南',
                      he: 'תשלום',
                      ko: '결제 안내',
                      es: 'Pago'
                    })}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/terms-and-conditions"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('terms-and-conditions');
                  }}
                  className="hover:text-indigo-600 text-slate-700 transition-colors inline-flex items-center gap-1 cursor-pointer font-medium"
                >
                  <span>
                    {tMulti(currentLang, {
                      en: 'Terms',
                      vi: 'Điều khoản',
                      fr: 'Conditions',
                      de: 'AGB',
                      ja: '利用規約',
                      zh: '服务条款',
                      he: 'תנאים',
                      ko: '이용 약관',
                      es: 'Términos'
                    })}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('privacy-policy');
                  }}
                  className="hover:text-indigo-600 text-slate-700 transition-colors inline-flex items-center gap-1 cursor-pointer font-medium"
                >
                  <span>
                    {tMulti(currentLang, {
                      en: 'Privacy',
                      vi: 'Bảo mật',
                      fr: 'Confidentialité',
                      de: 'Datenschutz',
                      ja: 'プライバシー',
                      zh: '隐私政策',
                      he: 'פרטיות',
                      ko: '개인정보 처리방침',
                      es: 'Privacidad'
                    })}
                  </span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenCookiePreferences}
                  className="hover:text-indigo-600 text-slate-700 transition-colors inline-flex items-center gap-1 cursor-pointer font-medium text-left"
                >
                  <span>Cookies</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Support Contact Information */}
          <div className="col-span-2 md:col-span-3 space-y-2 sm:space-y-3 bg-white/70 sm:bg-transparent p-3 sm:p-0 rounded-xl border border-slate-300/70 sm:border-0 shadow-2xs sm:shadow-none">
            <h4 className="text-slate-900 font-extrabold text-xs sm:text-sm uppercase tracking-wider">
              {tMulti(currentLang, {
                en: 'Support & Contact',
                vi: 'Hỗ Trợ Khách Hàng',
                fr: 'Support & Contact',
                de: 'Support & Kontakt',
                ja: 'お問い合わせ',
                zh: '联系客服',
                he: 'תמיכה ויצירת קשר',
                ko: '고객 센터',
                es: 'Soporte y Contacto'
              })}
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900">HQ:</strong> BDA Building, Lo E50, Khu 3ha, Phú Diễn, Hà Nội 100000, Vietnam
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-0.5">
                <div className="flex items-center gap-1.5 text-emerald-800 font-bold">
                  <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Hotline: +84 832 320 320</span>
                </div>

                <a
                  href="https://wa.me/84832320320"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-emerald-800 hover:text-emerald-900 font-semibold"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>WhatsApp: +84 832 320 320</span>
                </a>
              </div>

              <div className="flex items-center gap-1.5 text-slate-800 font-medium truncate">
                <Mail className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span className="truncate">support@vietnamvisa.govt.vn</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="text-center text-xs text-slate-600 space-y-1.5">
          <p className="max-w-3xl mx-auto leading-relaxed text-[11px] sm:text-xs">
            <strong className="text-slate-800">
              {tMulti(currentLang, {
                en: 'Disclaimer:',
                vi: 'Miễn trừ trách nhiệm:',
                fr: 'Avertissement :',
                de: 'Haftungsausschluss:',
                ja: '免責事項:',
                zh: '免责声明：',
                he: 'הבהרה משפטית:',
                ko: '면책 조항:',
                es: 'Aviso legal:'
              })}{' '}
            </strong>
            {tMulti(currentLang, {
              en: 'Vietnamevisaservice.com is a private commercial website, NOT an official government website. We operate as a private service provider and charge fees for application assistance services. If you do not wish to use our simplified forms and visa application support services, you may submit your application directly via the official government website.',
              vi: 'Vietnamevisaservice.com là trang web thương mại tư nhân, KHÔNG phải là trang web chính thức của chính phủ. Chúng tôi hoạt động như một đơn vị cung cấp dịch vụ tư nhân và thu phí hỗ trợ nộp hồ sơ. Nếu quý khách không muốn sử dụng các biểu mẫu rút gọn và dịch vụ hỗ trợ của chúng tôi, quý khách có thể nộp trực tiếp qua trang web chính thức của chính phủ.',
              fr: 'Vietnamevisaservice.com est un site commercial privé, ET NON un site officiel du gouvernement. Nous agissons en tant que prestataire privé et facturons des frais pour l\'assistance aux demandes. Si vous ne souhaitez pas utiliser nos services, vous pouvez postuler directement sur le site officiel du gouvernement.',
              de: 'Vietnamevisaservice.com ist eine private kommerzielle Website, KEINE offizielle Regierungswebsite. Wir bieten Dienstleistungen zur Unterstützung bei der Visagewährung gegen eine Gebühr an. Sie können Ihren Antrag auch direkt über die offizielle Regierungswebsite einreichen.',
              ja: 'Vietnamevisaservice.com は民間の商用ウェブサイトであり、政府の公式サイトではありません。当サービスをご利用にならない場合は、政府の公式サイトから直接申請することも可能です。',
              zh: 'Vietnamevisaservice.com 是商业代办服务网站，并非越南政府官方网站。我们收取服务费以提供申请核查与加急出签服务。如您不需要相关代办支持，可直接前往政府官网提交申请。',
              he: 'Vietnamevisaservice.com הוא אתר מסחרי פרטי ולא אתר ממשלתי רשמי. אנו גובים דמי שירות עבור טיפול וסיוע בהגשת הבקשה. ניתן להגיש ישירות באתר הממשלתי הרשמי.',
              ko: 'Vietnamevisaservice.com은 민간 상업 대행 사이트이며 정부 공식 웹사이트가 아닙니다. 당사는 대행 수수료를 받고 비자 신청을 지원합니다. 직접 신청을 원하실 경우 정부 공식 웹사이트를 이용하실 수 있습니다.',
              es: 'Vietnamevisaservice.com es un sitio web comercial privado, NO un sitio oficial del gobierno. Cobramos tarifas por el servicio de asistencia en la solicitud. Si no desea utilizar nuestros servicios, puede solicitar directamente en el sitio oficial del gobierno.'
            })}
          </p>
          <p className="text-[11px] sm:text-xs">© {new Date().getFullYear()} Vietnam Visa Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

