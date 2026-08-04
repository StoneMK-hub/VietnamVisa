import React, { useState, useEffect } from 'react';
import { 
  HelpCircle, 
  Search, 
  RefreshCw, 
  ExternalLink, 
  BookOpen, 
  Sparkles, 
  X,
  PhoneCall,
  ShieldCheck,
  Calendar,
  User,
  ArrowRight,
  ShieldAlert,
  ChevronDown,
  LayoutGrid,
  List
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS, tMulti } from '../data/translations';
import { WpFaqItem, fetchWpFaqPosts } from '../services/wordpressApi';

interface FaqSectionProps {
  currentLang: Language;
  variant?: 'accordion' | 'grid';
  onStartApplication?: () => void;
}

// Static FAQs for Home Page with full multi-language support (9 languages)
const STATIC_FAQS = [
  {
    id: 'static-1',
    question: {
      en: 'How long does it take to process a Vietnam e-Visa?',
      vi: 'Thời gian xử lý e-Visa Việt Nam mất bao lâu?',
      fr: 'Combien de temps faut-il pour traiter un e-Visa pour le Vietnam ?',
      de: 'Wie lange dauert die Bearbeitung eines Vietnam E-Visums?',
      ja: 'ベトナム E-Visa の発行にはどれくらいの時間がかかりますか？',
      zh: '办理越南电子签证需要多长时间？',
      he: 'כמה זמן לוקח לעבד ויזה אלקטרונית לוייטנאם?',
      ko: '베트남 전자비자 발급에 얼마나 걸리나요?',
      es: '¿Cuánto tiempo se tarda en procesar una e-Visa para Vietnam?'
    },
    answer: {
      en: 'Standard processing takes 3-5 working days. Urgent e-Visa processing is available for 1 to 24-hour turnaround (including weekends and holidays).',
      vi: 'Thời gian xử lý tiêu chuẩn là 3-5 ngày làm việc. Dịch vụ xin e-Visa khẩn hỗ trợ cấp nhanh từ 1h đến 24h (kể cả thứ 7, Chủ Nhật và ngày Lễ).',
      fr: 'Le traitement standard prend 3 à 5 jours ouvrables. Le traitement d\'urgence est disponible en 1 à 24 heures (week-ends et jours fériés inclus).',
      de: 'Die Standardbearbeitung dauert 3-5 Arbeitstage. Ein Eilservice ist für eine Bearbeitung innerhalb von 1 bis 24 Stunden verfügbar (auch an Wochenenden und Feiertagen).',
      ja: '通常の発行手続きは3〜5営業日かかります。緊急発行サービスをご利用いただくと、1〜24時間以内（土日祝日含む）で取得可能です。',
      zh: '标准办理时间为 3-5 个工作日。我们提供加急办理服务，最快 1 至 24 小时内出签（包含周末与节假日）。',
      he: 'עיבוד רגיל לוקח 3-5 ימי עבודה. טיפול דחוף זמין מ-1 עד 24 שעות (כולל סופי שבוע וחגים).',
      ko: '일반 발급은 영업일 기준 3~5일 소요됩니다. 긴급 서비스 이용 시 1~24시간 이내(주말 및 공휴일 포함) 발급 가능합니다.',
      es: 'El procesamiento estándar tarda de 3 a 5 días laborables. El procesamiento urgente está disponible de 1 a 24 horas (incluidos fines de semana y festivos).'
    }
  },
  {
    id: 'static-2',
    question: {
      en: 'What are the required passport validity rules for Vietnam entry?',
      vi: 'Quy định về thời hạn hộ chiếu khi nhập cảnh Việt Nam là gì?',
      fr: 'Quelles sont les règles de validité du passeport pour entrer au Vietnam ?',
      de: 'Welche Passgültigkeitsregeln gelten für die Einreise nach Vietnam?',
      ja: 'ベトナム入国時のパスポート有効期限のルールは？',
      zh: '入境越南对护照有效期有什么要求？',
      he: 'מהם כללי תוקף הדרכון הנדרשים לכניסה לוייטנאם?',
      ko: '베트남 입국 시 여권 유효기간 규정은 어떻게 되나요?',
      es: '¿Cuáles son las reglas de validez del pasaporte para entrar a Vietnam?'
    },
    answer: {
      en: 'Your passport must be valid for at least 6 months beyond your planned entry date and have at least two blank pages for entry and exit stamps.',
      vi: 'Hộ chiếu của bạn phải còn thời hạn ít nhất 6 tháng kể từ ngày nhập cảnh dự kiến và còn tối thiểu 2 trang trống để đóng dấu xuất nhập cảnh.',
      fr: 'Votre passeport doit être valide au moins 6 mois après votre date d\'entrée prévue et comporter au moins deux pages vierges.',
      de: 'Ihr Reisepass muss ab Ihrem geplanten Einreisedatum noch mindestens 6 Monate gültig sein und mindestens zwei freie Seiten enthalten.',
      ja: 'パスポートは入国予定日から6ヶ月以上の有効期限が必要で、スタンプ用の未使用ページが2ページ以上必要です。',
      zh: '您的护照必须在计划入境日期起算至少有 6 个月有效期，并留有至少 2 页空白页用于盖出入境章。',
      he: 'הדרכון שלך חייב להיות בתוקף לפחות 6 חודשים מעבר לתאריך הכניסה המתוכנן ולכלול לפחות שני דפים ריקים.',
      ko: '여권은 입국 예정일 기준으로 최소 6개월 이상 유효기간이 남아있어야 하며, 출입국 도장용 빈 페이지가 2면 이상 필요합니다.',
      es: 'Su pasaporte debe ser válido durante al menos 6 meses a partir de la fecha de entrada prevista y tener al menos dos páginas en blanco.'
    }
  },
  {
    id: 'static-3',
    question: {
      en: 'Which nationalities qualify for Vietnam e-Visa?',
      vi: 'Quốc tịch nào được cấp e-Visa Việt Nam?',
      fr: 'Quelles nationalités sont éligibles à l\'e-Visa pour le Vietnam ?',
      de: 'Welche Staatsangehörigkeiten sind für das Vietnam E-Visum berechtigt?',
      ja: 'どの国籍の人がベトナム E-Visa を申請できますか？',
      zh: '哪些国籍的公民可以申请越南电子签证？',
      he: 'אילו אזרחויות זכאיות לויזה אלקטרונית לוייטנאם?',
      ko: '어느 국적의 신청자가 베트남 전자비자를 받을 수 있나요?',
      es: '¿Qué nacionalidades pueden solicitar la e-Visa de Vietnam?'
    },
    answer: {
      en: 'Citizens of all countries and territories worldwide are eligible to apply for Vietnam e-Visa (up to 90 days validity, single or multiple entry).',
      vi: 'Công dân tất cả các quốc gia và vùng lãnh thổ trên thế giới đều đủ điều kiện xin e-Visa Việt Nam (thời hạn lên tới 90 ngày, nhập cảnh 1 lần hoặc nhiều lần).',
      fr: 'Les citoyens de tous les pays et territoires du monde sont éligibles à l\'e-Visa pour le Vietnam (jusqu\'à 90 jours de validité, entrée simple ou multiple).',
      de: 'Bürger aller Länder und Territorien weltweit können das Vietnam E-Visum beantragen (bis zu 90 Tage Gültigkeit, ein- oder mehrmalige Einreise).',
      ja: '世界中のすべての国と地域の市民がベトナム E-Visa（最長90日間有効、シングルまたはマルチ）を申請できます。',
      zh: '全球所有国家和地区的公民均可申请越南电子签证（有效期最长 90 天，可选单次或多次入境）。',
      he: 'אזרחי כל המדינות והטריטוריות ברחבי העולם זכאים להגיש בקשה לויזה אלקטרונית לוייטנאם (תוקף עד 90 יום, כניסה יחידה או מרובה).',
      ko: '전 세계 모든 국가 및 지역의 국민이 베트남 전자비자(최대 90일 유효, 단수/복수)를 신청할 수 있습니다.',
      es: 'Los ciudadanos de todos los países y territorios del mundo son elegibles para solicitar la e-Visa de Vietnam (hasta 90 días de validez, entrada única o múltiple).'
    }
  },
  {
    id: 'static-4',
    question: {
      en: 'What is the Airport Fast-Track Concierge Service?',
      vi: 'Dịch vụ Đón Nhanh tại Sân Bay (Airport Fast-Track) là gì?',
      fr: 'Qu\'est-ce que le service Fast-Track à l\'aéroport ?',
      de: 'Was ist der Flughafen Fast-Track VIP-Service?',
      ja: '空港ファストトラック（優先入国）サービスとは何ですか？',
      zh: '什么是机场 VIP 快速通关服务（Airport Fast-Track）？',
      he: 'מהו שירות Fast-Track בשדה התעופה?',
      ko: '공항 패스트트랙 VIP 서비스란 무엇인가요?',
      es: '¿Qué es el servicio Fast-Track en el aeropuerto?'
    },
    answer: {
      en: 'Our Fast-Track service provides a dedicated officer at the arrival airport to greet you at the gate, assist with immigration clearance, and expedite baggage handling.',
      vi: 'Dịch vụ Fast-Track hỗ trợ chuyên viên đón quý khách ngay tại cửa máy bay, phân luồng ưu tiên làm thủ tục nhập cảnh và hỗ trợ lấy hành lý nhanh chóng.',
      fr: 'Notre service Fast-Track met à votre disposition un agent dédié à l\'aéroport pour vous accueillir à la porte d\'embarquement, vous aider aux formalités d\'immigration et accélérer la récupération des bagages.',
      de: 'Unser Fast-Track-Service stellt Ihnen am Ankunftsflughafen einen Mitarbeiter zur Seite, der Sie am Flugsteig empfängt, bei der Einreise hilft und die Gepäckabwicklung beschleunigt.',
      ja: '専任のスタッフが到着空港の搭乗口でお出迎えし、専用レーンでの入国審査手続きや手荷物受け取りをスムーズにサポートするサービスです。',
      zh: 'Fast-Track 服务在到达机场安排专人于出舱口迎宾，带您走 VIP 快速通道优先办理入境手续并协助快速提取行李。',
      he: 'שירות Fast-Track מספק נציג ייעודי בשדה התעופה שמקבל אותך בשער, מסייע בביקורת דרכונים ומזרז את טיפול במזודות.',
      ko: '패스트트랙 서비스는 도착 공항 게이트에서 전용 담당자가 고객님을 맞이하여 전용 패스트트랙으로 빠른 입국 심사 및 수하물 수령을 도와드립니다.',
      es: 'Nuestro servicio Fast-Track le ofrece un asistente dedicado en el aeropuerto para recibirle en la puerta, ayudarle con el control de inmigración y agilizar el equipaje.'
    }
  },
  {
    id: 'static-5',
    question: {
      en: 'What if my visa application is declined?',
      vi: 'Nếu đơn xin visa của tôi bị từ chối thì sao?',
      fr: 'Que se passe-t-il si ma demande de visa est refusée ?',
      de: 'Was passiert, wenn mein Visumantrag abgelehnt wird?',
      ja: 'ビザ申請が不許可・拒否された場合はどうなりますか？',
      zh: '如果我的签证申请被拒绝怎么办？',
      he: 'מה קורה אם בקשת הויזה שלי נדחית?',
      ko: '만약 비자 신청이 거절되면 어떻게 되나요?',
      es: '¿Qué pasa si mi solicitud de visado es denegada?'
    },
    answer: {
      en: 'If your application is declined due to document or information errors, our specialist team will review, rectify, and resubmit your application with a 100% money-back guarantee policy.',
      vi: 'Nếu hồ sơ bị từ chối do sai sót thông tin hoặc giấy tờ, đội ngũ chuyên gia của chúng tôi sẽ kiểm tra, điều chỉnh và nộp lại với chính sách hoàn tiền 100% nếu không thành công.',
      fr: 'Si votre demande est refusée en raison d\'erreurs, notre équipe spécialisée révisera, corrigera et soumettra à nouveau votre demande avec une garantie de remboursement à 100%.',
      de: 'Wenn Ihr Antrag aufgrund von Fehlern abgelehnt wird, prüft, korrigiert und reicht unser Expertenteam Ihren Antrag erneut ein – mit 100 % Geld-zurück-Garantie.',
      ja: '書類や情報の誤りで不許可となった場合、専門チームが確認・修正の上再申請を行います。不許可が確定した場合は 100% 全額返金保証がございます。',
      zh: '若因材料或信息错误被退回/拒绝，我们的专家团队将重新审核修整并免费再次提交，同时承诺 100% 退款保障。',
      he: 'אם הבקשה נדחית בשל שגיאות במסמכים, צוות המומחים שלנו יבדוק, יתקן ויגיש מחדש עם מדיניות 100% החזר כספי.',
      ko: '서류나 정보 오류로 인해 신청이 거절된 경우, 전문 팀이 검토 및 수정하여 재신청을 진행하며, 최종 불허 시 100% 환불해 드립니다.',
      es: 'Si su solicitud es denegada debido a errores, nuestro equipo la revisará, corregirá y volverá a enviar con una garantía de reembolso del 100%.'
    }
  }
];

export const FaqSection: React.FC<FaqSectionProps> = ({ 
  currentLang, 
  variant = 'accordion',
  onStartApplication 
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const isVi = currentLang === 'vi';

  // WordPress state (used on dedicated FAQs page)
  const [wpFaqs, setWpFaqs] = useState<WpFaqItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [selectedFaq, setSelectedFaq] = useState<WpFaqItem | null>(null);
  
  // Accordion open state for both static and WP FAQs
  const [openStaticId, setOpenStaticId] = useState<string | null>(null);
  const [openWpId, setOpenWpId] = useState<number | string | null>(null);
  
  // View mode state initialized with prop
  const [viewMode, setViewMode] = useState<'accordion' | 'grid'>(variant);

  useEffect(() => {
    setViewMode(variant);
  }, [variant]);

  // Load WP FAQs only when in grid view or explicit user reload
  const loadWpFaqs = async () => {
    setLoading(true);
    try {
      const data = await fetchWpFaqPosts();
      setWpFaqs(data);
      if (data.length > 0) {
        setOpenWpId(data[0].id);
      }
    } catch (err) {
      console.error('Failed to load WP FAQs:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (viewMode === 'grid') {
      loadWpFaqs();
    }
  }, [viewMode]);

  // Topic Keyword Filter Helper for WP FAQs
  const topicFilterKeywords: Record<string, string[]> = {
    rules: ['visa', 'exemption', 're-enter', 'country', 'need', 'validity', 'legitimate', 'miễn'],
    photo: ['photo', 'passport', 'picture', 'upload', 'size', 'requirement', 'ảnh', 'hộ chiếu'],
    work: ['work', 'study', 'business', 'job', 'tourist', 'làm việc', 'học'],
    process: ['time', 'urgent', 'express', 'emergency', 'cost', 'fee', 'delay', 'khẩn']
  };

  const filteredWpFaqs = wpFaqs.filter((item) => {
    const matchesSearch = 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answerSummary.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    if (selectedTopic === 'all') return true;

    const keywords = topicFilterKeywords[selectedTopic] || [];
    const lowerQ = item.question.toLowerCase();
    return keywords.some(k => lowerQ.includes(k));
  });

  // HOME PAGE ACCORDION VIEW (STATIC CONTENT MATCHING USER SCREENSHOT EXACTLY)
  if (viewMode === 'accordion') {
    return (
      <div className="w-full space-y-6 sm:space-y-8 my-6 sm:my-10">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xs border border-slate-200/90 p-4 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
          
          {/* Header Section (Matching screenshot exactly) */}
          <div className="text-center space-y-2.5 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 bg-indigo-50/90 text-indigo-700 text-xs sm:text-sm font-semibold px-3.5 py-1 rounded-full border border-indigo-100/90 shadow-2xs">
              <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
              <span>
                {tMulti(currentLang, {
                  en: '24/7 Support Center',
                  vi: 'Trung tâm hỗ trợ 24/7',
                  fr: 'Centre d\'assistance 24/7',
                  de: '24/7 Support-Center',
                  ja: '24時間365日 サポートセンター',
                  zh: '24/7 全天候客服中心',
                  he: 'מרכז תמיכה 24/7',
                  ko: '24시간 고객지원 센터',
                  es: 'Centro de soporte 24/7'
                })}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {tMulti(currentLang, {
                en: 'Frequently Asked Questions (FAQs)',
                vi: 'Hỏi Đáp Thường Gặp (FAQs)',
                fr: 'Foire Aux Questions (FAQ)',
                de: 'Häufig gestellte Fragen (FAQ)',
                ja: 'よくあるご質問 (FAQ)',
                zh: '常见问题解答 (FAQ)',
                he: 'שאלות נפוצות (FAQ)',
                ko: '자주 묻는 질문 (FAQ)',
                es: 'Preguntas Frecuentes (FAQ)'
              })}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              {tMulti(currentLang, {
                en: 'Find answers to common questions about Vietnam visa processing.',
                vi: 'Giải đáp các thắc mắc thường gặp về thủ tục xin visa Việt Nam.',
                fr: 'Trouvez les réponses aux questions fréquentes sur les visas pour le Vietnam.',
                de: 'Antworten auf häufig gestellte Fragen zur Visabearbeitung für Vietnam.',
                ja: 'ベトナムビザ申請に関するよくあるご質問とお手続きの回答。',
                zh: '查找有关越南签证办理常见问题的详细解答。',
                he: 'מצא תשובות לשאלות נפוצות בנושא ויזה לוייטנאם.',
                ko: '베트남 비자 발급 절차에 대해 자주 묻는 질문을 확인하세요.',
                es: 'Encuentre respuestas a preguntas frecuentes sobre el visado para Vietnam.'
              })}
            </p>
          </div>

          {/* Static Accordion Items (Matching screenshot layout) */}
          <div className="space-y-3.5 max-w-4xl mx-auto pt-2">
            {STATIC_FAQS.map((faq) => {
              const isOpen = openStaticId === faq.id;
              const question = tMulti(currentLang, faq.question);
              const answer = tMulti(currentLang, faq.answer);

              return (
                <div
                  key={faq.id}
                  className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                    isOpen 
                      ? 'border-indigo-300 bg-white ring-2 ring-indigo-500/10 shadow-2xs' 
                      : 'border-slate-200/90 bg-slate-50/60 hover:bg-slate-50'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenStaticId(isOpen ? null : faq.id)}
                    className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="leading-snug">{question}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-indigo-600' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 animate-fade-in">
                      <p>{answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* 24/7 Advisory & Assistance Callout Banner */}
          <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-5 sm:p-7 text-white flex flex-col md:flex-row items-center justify-between gap-5 border border-slate-800 shadow-xl max-w-4xl mx-auto">
            <div className="space-y-1 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-amber-400 font-extrabold text-xs sm:text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>
                  {tMulti(currentLang, {
                    en: '24/7 Live Immigration Advisory',
                    vi: 'Giải Đáp Trực Tiếp 24/7',
                    fr: 'Conseil d\'immigration en direct 24/7',
                    de: '24/7 Einreiseberatung',
                    ja: '24時間 リアルタイム入国相談',
                    zh: '24/7 在线出入境咨询',
                    he: 'ייעוץ הגירה בזמן אמת 24/7',
                    ko: '24시간 실시간 입국 상담',
                    es: 'Asesoría de inmigración 24/7'
                  })}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-black">
                {tMulti(currentLang, {
                  en: 'Need Instant Clarification or Airport Emergency Support?',
                  vi: 'Cần Xử Lý Hồ Sơ Khẩn Hoặc Giải Đáp Trực Tiếp?',
                  fr: 'Besoin d\'une clarification ou d\'une assistance d\'urgence ?',
                  de: 'Benötigen Sie sofortige Klärung oder Notfall-Support?',
                  ja: 'お急ぎのビザ申請や空港での緊急サポートが必要ですか？',
                  zh: '需要紧急签证办理或机场急救通关支持？',
                  he: 'זקוק להבהרה מיידית או תמיכת חירום בשדה התעופה?',
                  ko: '긴급 비자 발급이나 공항 입국 지원이 필요하신가요?',
                  es: '¿Necesita aclaración instantánea o soporte de emergencia?'
                })}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                {tMulti(currentLang, {
                  en: 'Our dedicated advisory hotline operates 24/7 for emergency airport entry approval and custom e-visa guidance.',
                  vi: 'Đội ngũ chuyên viên sẵn sàng tiếp nhận thông tin và tư vấn nhập cảnh khẩn 1h-24h tại tất cả các sân bay quốc tế Việt Nam.',
                  fr: 'Notre ligne d\'assistance dédiée fonctionne 24/7 pour l\'approbation d\'urgence et les conseils e-visa.',
                  de: 'Unsere Hotline ist rund um die Uhr für dringende Einreisefragen und E-Visa-Beratung erreichbar.',
                  ja: '緊急の入国許可やビザ相談のため、専門スタッフが24時間体制で対応しております。',
                  zh: '我们的客服热线 24 小时在线，协助处理机场加急批文与电子签证疑问。',
                  he: 'מוקד הייעוץ שלנו פועל 24/7 לאישור כניסה דחוף והדרכת ויזה.',
                  ko: '긴급 공항 입국 승인 및 비자 안내를 위해 24시간 전용 핫라인을 운영합니다.',
                  es: 'Nuestra línea de atención opera 24/7 para aprobación de emergencia y orientación.'
                })}
              </p>
            </div>

            <a
              href="https://wa.me/84832320320"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm sm:text-base px-5 py-3 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer shrink-0"
            >
              <PhoneCall className="w-4 h-4" />
              <span>WhatsApp Hotline 24/7</span>
            </a>
          </div>

        </div>
      </div>
    );
  }

  // DEDICATED FAQs PAGE VIEW (GRID / WORDPRESS BLOG KNOWLEDGEBASE)
  return (
    <div className="w-full space-y-6 sm:space-y-8 my-6 sm:my-10">
      {/* Container Card */}
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-md border border-slate-200/90 p-4 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
        
        {/* Full Knowledgebase Header for FAQs Tab */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-[11px] sm:text-xs font-black px-3.5 py-1 rounded-full shadow-xs tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              <span>FAQs Vietnam Visa Knowledgebase</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {tMulti(currentLang, {
                en: 'Vietnam Visa FAQs & Entry Knowledgebase',
                vi: 'Hỏi Đáp & Cẩm Nang Visa Việt Nam 2026',
                fr: 'FAQ Visa Vietnam et Base de connaissances',
                de: 'Vietnam Visum FAQ & Wissensdatenbank',
                ja: 'ベトナムビザ FAQ & 入国ナレッジベース',
                zh: '越南签证 FAQ 与入境指南知识库',
                he: 'שאלות נפוצות ומאגר מידע לויזה לוייטנאם',
                ko: '베트남 비자 FAQ 및 입국 지식베이스',
                es: 'Preguntas Frecuentes y Guía de Visado de Vietnam'
              })}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
              {tMulti(currentLang, {
                en: 'Comprehensive answers published directly from our official WordPress blog category covering e-Visa rules, photo requirements, exemptions, and emergency entry.',
                vi: 'Tổng hợp giải đáp thắc mắc về quy định e-Visa, hình ảnh tiêu chuẩn, miễn thị thực, nhập cảnh lại và thủ tục visa khẩn 24/7 từ chuyên gia.',
                fr: 'Réponses complètes directement publiées sur notre blog officiel concernant les règles e-Visa, photos, exemptions et urgences.',
                de: 'Umfassende Antworten zu E-Visum-Regeln, Fotoanforderungen, Befreiungen und Eilanträgen.',
                ja: 'e-Visaの規定、写真規格、ビザ免除、緊急入国手続きに関する詳細ガイド。',
                zh: '权威解答电子签证规则、照片尺寸、免签政策、再次入境及 24/7 加急办理等相关问题。',
                he: 'תשובות מקיפות המכסות כללי ויזה, דרישות תמונה, פטורים וכניסת חירום.',
                ko: '전자비자 규정, 사진 규격, 비자 면제, 긴급 입국 등 전문 안내.',
                es: 'Respuestas completas sobre reglas de e-Visa, fotos, exenciones y trámites urgentes.'
              })}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* View Mode Switch */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                type="button"
                onClick={() => setViewMode('accordion')}
                className={`flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'accordion' 
                    ? 'bg-white text-indigo-700 shadow-2xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <List className="w-3.5 h-3.5" />
                <span>
                  {tMulti(currentLang, {
                    en: 'Accordion',
                    vi: 'Danh sách',
                    fr: 'Accordéon',
                    de: 'Akkordeon',
                    ja: 'リスト',
                    zh: '折叠列表',
                    he: 'רשימה',
                    ko: '아코디언',
                    es: 'Acordeón'
                  })}
                </span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'grid' 
                    ? 'bg-white text-indigo-700 shadow-2xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>
                  {tMulti(currentLang, {
                    en: 'Grid',
                    vi: 'Lưới Grid',
                    fr: 'Grille',
                    de: 'Raster',
                    ja: 'グリッド',
                    zh: '网格',
                    he: 'רשת',
                    ko: '그리드',
                    es: 'Cuadrícula'
                  })}
                </span>
              </button>
            </div>

            <button
              onClick={loadWpFaqs}
              disabled={loading}
              className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-3.5 py-2 rounded-xl border border-slate-200 transition-colors cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>
                {tMulti(currentLang, {
                  en: 'Reload',
                  vi: 'Làm mới',
                  fr: 'Recharger',
                  de: 'Neu laden',
                  ja: '更新',
                  zh: '刷新',
                  he: 'רענן',
                  ko: '새로고침',
                  es: 'Recargar'
                })}
              </span>
            </button>
          </div>
        </div>

        {/* Search Bar & Filter Pills */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={tMulti(currentLang, {
                en: 'Search questions (e.g., re-enter, photo size, work visa, passport validity...)',
                vi: 'Tìm kiếm câu hỏi (ví dụ: re-enter, photo, work, exemption...)',
                fr: 'Rechercher une question (ex. photo, passeport, urgence...)',
                de: 'Fragen suchen (z. B. Foto, Pass, Eilservice...)',
                ja: '質問を検索（例：写真サイズ、パスポート有効期限、特急…）',
                zh: '搜索问题（例如：护照有效期、照片要求、加急...）',
                he: 'חפש שאלות (למשל: תמונה, דרכון, דחופים...)',
                ko: '질문 검색 (예: 여권 유효기간, 사진 규격, 긴급 발급...)',
                es: 'Buscar preguntas (ej. foto, pasaporte, trámite urgente...)'
              })}
              className="w-full pl-10 pr-10 py-3 bg-slate-50 border border-slate-200/90 rounded-2xl text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-all shadow-2xs"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-extrabold text-slate-500 mr-1">
              {tMulti(currentLang, {
                en: 'Topics:',
                vi: 'Danh mục:',
                fr: 'Sujets :',
                de: 'Themen:',
                ja: 'トピック:',
                zh: '主题分类:',
                he: 'נושאים:',
                ko: '주제:',
                es: 'Temas:'
              })}
            </span>
            <button
              onClick={() => setSelectedTopic('all')}
              className={`text-xs font-bold px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                selectedTopic === 'all'
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
              }`}
            >
              {tMulti(currentLang, {
                en: 'All FAQs',
                vi: 'Tất cả',
                fr: 'Toutes',
                de: 'Alle',
                ja: 'すべて',
                zh: '全部 FAQ',
                he: 'הכל',
                ko: '전체',
                es: 'Todas'
              })} ({wpFaqs.length})
            </button>
            <button
              onClick={() => setSelectedTopic('rules')}
              className={`text-xs font-bold px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                selectedTopic === 'rules'
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
              }`}
            >
              {tMulti(currentLang, {
                en: 'Visa Rules & Exemption',
                vi: 'Quy định & Miễn Visa',
                fr: 'Règles & Exemption',
                de: 'Regeln & Befreiung',
                ja: '規定・ビザ免除',
                zh: '签证规则与免签',
                he: 'כללים ופטורים',
                ko: '비자 규정 및 면제',
                es: 'Reglas y Exención'
              })}
            </button>
            <button
              onClick={() => setSelectedTopic('photo')}
              className={`text-xs font-bold px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                selectedTopic === 'photo'
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
              }`}
            >
              {tMulti(currentLang, {
                en: 'Photo & Passport',
                vi: 'Ảnh & Hộ Chiếu',
                fr: 'Photo & Passeport',
                de: 'Foto & Reisepass',
                ja: '写真・パスポート',
                zh: '照片与护照',
                he: 'תמונה ודרכון',
                ko: '사진 및 여권',
                es: 'Foto y Pasaporte'
              })}
            </button>
            <button
              onClick={() => setSelectedTopic('work')}
              className={`text-xs font-bold px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                selectedTopic === 'work'
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
              }`}
            >
              {tMulti(currentLang, {
                en: 'Work & Study',
                vi: 'Làm Việc & Học Tập',
                fr: 'Travail & Études',
                de: 'Arbeit & Studium',
                ja: '就労・留学',
                zh: '工作与留学',
                he: 'עבודה ולימודים',
                ko: '취업 및 학업',
                es: 'Trabajo y Estudios'
              })}
            </button>
            <button
              onClick={() => setSelectedTopic('process')}
              className={`text-xs font-bold px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                selectedTopic === 'process'
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
              }`}
            >
              {tMulti(currentLang, {
                en: 'Urgent & Processing',
                vi: 'Xử Lý Khẩn & Chi Phí',
                fr: 'Urgence & Traitement',
                de: 'Eilservice & Kosten',
                ja: '特急・費用',
                zh: '加急与费用',
                he: 'דחופים וטיפול',
                ko: '긴급 및 수수료',
                es: 'Urgencia y Tarifas'
              })}
            </button>
          </div>
        </div>

        {/* Loading State Skeleton */}
        {loading ? (
          <div className="space-y-3 pt-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-16 bg-slate-100 rounded-2xl animate-pulse border border-slate-200" />
            ))}
          </div>
        ) : filteredWpFaqs.length === 0 ? (
          <div className="bg-slate-50 border border-dashed border-slate-300 rounded-2xl p-10 text-center space-y-2">
            <p className="text-slate-600 text-sm font-bold">
              {tMulti(currentLang, {
                en: 'No FAQ items matched your search query.',
                vi: 'Không tìm thấy bài viết FAQ nào phù hợp.',
                fr: 'Aucune FAQ ne correspond à votre recherche.',
                de: 'Keine FAQ-Einträge entsprechen Ihrer Suche.',
                ja: '該当するFAQが見つかりませんでした。',
                zh: '未找到符合条件的 FAQ 文章。',
                he: 'לא נמצאו שאלות מתאימות לחיפוש שלך.',
                ko: '검색 조건에 맞는 FAQ 항목이 없습니다.',
                es: 'No se encontraron preguntas que coincidan con su búsqueda.'
              })}
            </p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedTopic('all'); loadWpFaqs(); }}
              className="text-xs font-extrabold text-indigo-600 hover:underline cursor-pointer"
            >
              {tMulti(currentLang, {
                en: 'Reload articles from WordPress',
                vi: 'Tải lại bài viết từ WordPress',
                fr: 'Recharger les articles depuis WordPress',
                de: 'Artikel von WordPress neu laden',
                ja: 'WordPressから記事を再読み込み',
                zh: '从 WordPress 重新加载文章',
                he: 'טען מחדש מאמרים מ-WordPress',
                ko: 'WordPress에서 문서 다시 불러오기',
                es: 'Recargar artículos desde WordPress'
              })}
            </button>
          </div>
        ) : (
          /* GRID LIST STYLE (BLOG CARDS STYLE) */
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {filteredWpFaqs.map((item) => (
              <article
                key={item.id}
                onClick={() => setSelectedFaq(item)}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-indigo-400 transition-all duration-200 flex flex-col overflow-hidden group cursor-pointer"
              >
                {/* Header Banner / Image */}
                <div className="relative h-36 sm:h-40 bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-950 overflow-hidden shrink-0">
                  {item.featuredImage ? (
                    <img
                      src={item.featuredImage}
                      alt={item.question}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center opacity-20 p-4">
                      <HelpCircle className="w-20 h-20 text-indigo-300" />
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    {/* Meta Info */}
                    <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                        {item.date}
                      </span>
                    </div>

                    {/* Question Title */}
                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base group-hover:text-indigo-600 transition-colors line-clamp-2 leading-snug">
                      {item.question}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed font-normal">
                      {item.answerSummary}
                    </p>
                  </div>

                  {/* Action Footer */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-bold text-indigo-600 group-hover:text-indigo-700 flex items-center gap-1">
                      <span>
                        {tMulti(currentLang, {
                          en: 'Read Full FAQ',
                          vi: 'Xem chi tiết',
                          fr: 'Lire la suite',
                          de: 'Vollständige FAQ lesen',
                          ja: '詳細を見る',
                          zh: '阅读完整回答',
                          he: 'קרא תשובה מלאה',
                          ko: '상세 보기',
                          es: 'Leer respuesta completa'
                        })}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-slate-400 hover:text-slate-700 p-1"
                        title={tMulti(currentLang, {
                          en: 'View WordPress Source',
                          vi: 'Xem nguồn WordPress',
                          fr: 'Voir la source WordPress',
                          de: 'WordPress-Quelle anzeigen',
                          ja: 'WordPressで見る',
                          zh: '查看 WordPress 原文',
                          he: 'הצג מקור ב-WordPress',
                          ko: 'WordPress 원문 보기',
                          es: 'Ver fuente en WordPress'
                        })}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* 24/7 Advisory & Assistance Callout */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-5 sm:p-7 text-white flex flex-col md:flex-row items-center justify-between gap-5 border border-slate-800 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-amber-400 font-extrabold text-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>
                {tMulti(currentLang, {
                  en: '24/7 Live Immigration Advisory',
                  vi: 'Giải Đáp Trực Tiếp 24/7',
                  fr: 'Conseil d\'immigration en direct 24/7',
                  de: '24/7 Einreiseberatung',
                  ja: '24時間 リアルタイム入国相談',
                  zh: '24/7 在线出入境咨询',
                  he: 'ייעוץ הגירה בזמן אמת 24/7',
                  ko: '24시간 실시간 입국 상담',
                  es: 'Asesoría de inmigración 24/7'
                })}
              </span>
            </div>
            <h3 className="text-base sm:text-xl font-black">
              {tMulti(currentLang, {
                en: 'Need Instant Clarification or Airport Emergency Support?',
                vi: 'Cần Xử Lý Hồ Sơ Khẩn Hoặc Giải Đáp Trực Tiếp?',
                fr: 'Besoin d\'une clarification ou d\'une assistance d\'urgence ?',
                de: 'Benötigen Sie sofortige Klärung oder Notfall-Support?',
                ja: 'お急ぎのビザ申請や空港での緊急サポートが必要ですか？',
                zh: '需要紧急签证办理或机场急救通关支持？',
                he: 'זקוק להבהרה מיידית או תמיכת חירום בשדה התעופה?',
                ko: '긴급 비자 발급이나 공항 입국 지원이 필요하신가요?',
                es: '¿Necesita aclaración instantánea o soporte de emergencia?'
              })}
            </h3>
            <p className="text-xs text-slate-300 max-w-xl">
              {tMulti(currentLang, {
                en: 'Our dedicated advisory hotline operates 24/7 for emergency airport entry approval and custom e-visa guidance.',
                vi: 'Đội ngũ chuyên viên sẵn sàng tiếp nhận thông tin và tư vấn nhập cảnh khẩn 1h-24h tại tất cả các sân bay quốc tế Việt Nam.',
                fr: 'Notre ligne d\'assistance dédiée fonctionne 24/7 pour l\'approbation d\'urgence et les conseils e-visa.',
                de: 'Unsere Hotline ist rund um die Uhr für dringende Einreisefragen und E-Visa-Beratung erreichbar.',
                ja: '緊急の入国許可やビザ相談のため、専門スタッフが24時間体制で対応しております。',
                zh: '我们的客服热线 24 小时在线，协助处理机场加急批文与电子签证疑问。',
                he: 'מוקד הייעוץ שלנו פועל 24/7 לאישור כניסה דחוף והדרכת ויזה.',
                ko: '긴급 공항 입국 승인 및 비자 안내를 위해 24시간 전용 핫라인을 운영합니다.',
                es: 'Nuestra línea de atención opera 24/7 para aprobación de emergencia y orientación.'
              })}
            </p>
          </div>

          <a
            href="https://wa.me/84832320320"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            <span>WhatsApp Hotline 24/7</span>
          </a>
        </div>
      </div>

      {/* Full Modal Article Reader */}
      {selectedFaq && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative space-y-6">
            
            {/* Modal Image / Banner */}
            <div className="relative h-48 sm:h-60 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 overflow-hidden rounded-t-3xl">
              {selectedFaq.featuredImage ? (
                <img
                  src={selectedFaq.featuredImage}
                  alt={selectedFaq.question}
                  className="w-full h-full object-cover opacity-80"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center opacity-15">
                  <HelpCircle className="w-32 h-32 text-indigo-300" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent" />

              {/* Close Modal Button */}
              <button
                onClick={() => setSelectedFaq(null)}
                className="absolute top-4 right-4 bg-slate-900/80 hover:bg-slate-900 text-white p-2.5 rounded-full backdrop-blur-md transition-all cursor-pointer border border-white/20 shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-4 right-4 space-y-2 text-white">
                <h2 className="text-lg sm:text-2xl font-black text-white leading-tight">
                  {selectedFaq.question}
                </h2>
                <div className="flex items-center gap-4 text-xs text-slate-300 pt-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    {selectedFaq.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-emerald-400" />
                    {selectedFaq.author}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Highlighted Summary Box */}
              <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4 rounded-r-2xl text-slate-900 text-xs sm:text-sm font-semibold leading-relaxed">
                <span className="block text-[11px] font-black text-indigo-700 uppercase tracking-wider mb-1">
                  {tMulti(currentLang, {
                    en: 'Quick Answer Summary:',
                    vi: 'Tóm Tắt Giải Đáp:',
                    fr: 'Résumé de la réponse :',
                    de: 'Zusammenfassung:',
                    ja: '回答の要約:',
                    zh: '核心解答摘要:',
                    he: 'תקציר תשובה:',
                    ko: '답변 요약:',
                    es: 'Resumen de la respuesta:'
                  })}
                </span>
                {selectedFaq.answerSummary}
              </div>

              {/* HTML Content Body */}
              <div 
                className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed text-slate-700 space-y-4"
                dangerouslySetInnerHTML={{ __html: selectedFaq.fullAnswerHtml || selectedFaq.answerSummary }}
              />

              {/* Urgent Action CTA Box inside Modal */}
              <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-orange-600 text-white shrink-0 mt-0.5">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">
                      {tMulti(currentLang, {
                        en: 'Need Emergency 1-Hour Vietnam E-Visa?',
                        vi: 'Bạn Cần Xin Visa Gấp 1h - 24h?',
                        fr: 'Besoin d\'un e-Visa d\'urgence en 1 heure ?',
                        de: 'Benötigen Sie ein Notfall-Visum in 1 Stunde?',
                        ja: '1時間〜の緊急ベトナムビザが必要ですか？',
                        zh: '需要 1 小时超加急越南电子签证？',
                        he: 'זקוק לויזה דחופה לוייטנאם תוך שעה?',
                        ko: '1시간 초긴급 비자 발급이 필요하신가요?',
                        es: '¿Necesita una e-Visa de emergencia en 1 hora?'
                      })}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">
                      {tMulti(currentLang, {
                        en: 'Our 24/7 fast-track team processes emergency visas directly with Vietnam Immigration.',
                        vi: 'Đội ngũ chuyên gia hỗ trợ nộp hồ sơ gấp trực tiếp với Cục XNC 24/7 kể cả cuối tuần.',
                        fr: 'Notre équipe dédiée traite les urgences directement auprès de l\'immigration.',
                        de: 'Unser Team bearbeitet Notfallvisa direkt bei der vietnamesischen Einreisebehörde.',
                        ja: '専門チームがベトナム出入国管理局と連携し、24時間体制で即時発給手続きを行います。',
                        zh: '我们的 24/7 加急团队直接与越南移民局联动，极速下发离岸/在途批文。',
                        he: 'צוות החירום שלנו מעבד ויזות דחופות ישירות מול רשויות ההגירה.',
                        ko: '24시간 긴급 팀이 베트남 출입국관리국과 직접 연계하여 신속 발급해 드립니다.',
                        es: 'Nuestro equipo procesa visados de emergencia directamente con Inmigración.'
                      })}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedFaq(null);
                    if (onStartApplication) onStartApplication();
                  }}
                  className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs px-5 py-2.5 rounded-xl transition-all cursor-pointer shrink-0 shadow-md border border-orange-500"
                >
                  {tMulti(currentLang, {
                    en: 'Apply Urgent Visa',
                    vi: 'Xin Visa Khẩn Ngay',
                    fr: 'Demande urgente',
                    de: 'Eilvisum beantragen',
                    ja: '至急ビザを申請',
                    zh: '立即加急申请',
                    he: 'הגש ויזה דחופה',
                    ko: '긴급 비자 신청',
                    es: 'Solicitar visado urgente'
                  })}
                </button>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedFaq(null)}
                  className="text-xs font-bold text-slate-700 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  {tMulti(currentLang, {
                    en: 'Close',
                    vi: 'Đóng',
                    fr: 'Fermer',
                    de: 'Schließen',
                    ja: '閉じる',
                    zh: '关闭',
                    he: 'סגור',
                    ko: '닫기',
                    es: 'Cerrar'
                  })}
                </button>

                {selectedFaq.link && (
                  <a
                    href={selectedFaq.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:underline"
                  >
                    <span>
                      {tMulti(currentLang, {
                        en: 'View on WordPress Blog',
                        vi: 'Xem trên WordPress Blog',
                        fr: 'Voir sur le blog WordPress',
                        de: 'Auf WordPress-Blog anzeigen',
                        ja: 'WordPressブログで読む',
                        zh: '在 WordPress 博客查看',
                        he: 'הצג בבלוג WordPress',
                        ko: 'WordPress 블로그에서 보기',
                        es: 'Ver en el blog de WordPress'
                      })}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
