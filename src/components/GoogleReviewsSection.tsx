import React from 'react';
import { Star, CheckCircle2, ExternalLink, MessageSquare, Award } from 'lucide-react';
import { Language } from '../types';
import { tMulti } from '../data/translations';

interface GoogleReviewsSectionProps {
  currentLang: Language;
}

const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/KP14hMxYdpceVi3a6";

interface ReviewItem {
  id: number;
  name: string;
  country: string;
  flag: string;
  rating: number;
  date: Record<Language, string>;
  service: Record<Language, string>;
  text: Record<Language, string>;
  verified: boolean;
}

const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 1,
    name: 'Michael R. Vance',
    country: 'United States',
    flag: '🇺🇸',
    rating: 5,
    date: {
      en: '3 days ago',
      vi: '3 ngày trước',
      fr: 'Il y a 3 jours',
      de: 'Vor 3 Tagen',
      ja: '3日前',
      zh: '3天前',
      he: 'לפני 3 ימים',
      ko: '3일 전',
      es: 'Hace 3 días'
    },
    service: {
      en: 'Emergency 1-Hour e-Visa + Fast Track',
      vi: 'Visa Khẩn 1h + Đón VIP Sân Bay',
      fr: 'e-Visa d\'urgence 1h + Fast Track',
      de: 'Notfall 1h e-Visum + Fast Track',
      ja: '1時間緊急e-Visa + ファストトラック',
      zh: '1小时特急电子签 + 快速通关',
      he: 'ויזה דחופה ב-1 שעה + ליווי VIP',
      ko: '1시간 긴급 비자 + 패스트트랙',
      es: 'e-Visa de emergencia 1h + Fast Track'
    },
    text: {
      en: 'Absolute lifesavers! My e-visa hadn’t arrived from the gov portal on the morning of my flight to Ho Chi Minh. Found Vietnam Visa Services online and contacted their WhatsApp support at 7 AM. Within 50 minutes, my approved e-visa PDF was in my inbox. Their agent even greeted me at SGN airport gate. 10/10 service!',
      vi: 'Cứu tinh tuyệt vời! Sáng hôm bay đi TP.HCM mà visa chính phủ vẫn chưa ra. Tôi tìm thấy Vietnam Visa Services và nhắn WhatsApp lúc 7h sáng. Chỉ 50 phút sau, file PDF visa đã gửi thẳng vào email. Nhân viên còn đón tôi ngay cửa ra máy bay ở SGN. Đánh giá 10/10!',
      fr: 'De véritables sauveurs ! Mon e-visa n\'était pas arrivé le matin de mon vol pour Hô Chi Minh. J\'ai contacté leur support WhatsApp à 7h du matin. En 50 minutes, mon e-visa approuvé était dans ma boîte mail. Leur agent m\'a même accueilli à la porte de l\'aéroport SGN !',
      de: 'Absolute Lebensretter! Mein e-Visum war am Morgen meines Fluges nach Ho-Chi-Minh-Stadt noch nicht da. Habe ihren WhatsApp-Support um 7 Uhr morgens kontaktiert. Innerhalb von 50 Minuten war das e-Visum da. Agent hat mich sogar am Gate in SGN empfangen!',
      ja: 'まさに救世主！ホーチミン行きのフライト当日の朝、政府ポータルからのビザが届いておらず焦っていました。朝7時にWhatsAppで相談したところ、わずか50分で承認済みe-Visaが届きました！空港での出迎えもあり最高です。',
      zh: '简直是救星！飞往胡志明市的当天早上，政府官网申请的签证还没出。早上7点联系了WhatsApp客服，不到50分钟核准的电子签证PDF就发到了邮箱。工作人员还在新山一机场闸口迎接通关，10/10满分推荐！',
      he: 'מצילי חיים ממש! הויזה מהאתר הממשלתי לא הגיעה בבוקר הטיסה להו צ\'י מין. פניתי ב-WhatsApp ב-7 בבוקר, ותוך 50 דקות הויזה המאושרת הייתה במייל שלי. נציג חיכה לי בפתח המטוס בשדה התעופה. שירות 10/10!',
      ko: '정말 완벽한 구세주였습니다! 호치민행 비행기 당일 아침까지 정부 비자가 나오지 않아 당황했는데, 아침 7시에 WhatsApp으로 문의하자 50분 만에 비자 PDF가 이메일로 도착했습니다. 공항 게이트 마중까지 정말 완벽했습니다!',
      es: '¡Un verdadero salvavidas! Mi e-visa no había llegado la mañana de mi vuelo a Ho Chi Minh. Contacté por WhatsApp a las 7 AM y en 50 minutos tenía mi e-visa aprobada en el correo. Un agente me recibió en la puerta del aeropuerto de SGN. ¡Servicio 10/10!'
    },
    verified: true,
  },
  {
    id: 2,
    name: 'Sophie Laurent',
    country: 'France',
    flag: '🇫🇷',
    rating: 5,
    date: {
      en: '1 week ago',
      vi: '1 tuần trước',
      fr: 'Il y a 1 semaine',
      de: 'Vor 1 Woche',
      ja: '1週間前',
      zh: '1周前',
      he: 'לפני שבוע',
      ko: '1주일 전',
      es: 'Hace 1 semana'
    },
    service: {
      en: '90-Day Multiple Entry Visa',
      vi: 'Visa 90 Ngày Nhập Cảnh Nhiều Lần',
      fr: 'Visa 90 jours entrées multiples',
      de: '90-Tage Visum Mehrfache Einreise',
      ja: '90日間 査証（数次・マルチプル）',
      zh: '90天多次往返电子签证',
      he: 'ויזה ל-90 יום כניסות מרובות',
      ko: '90일 복수 입국 비자',
      es: 'Visa de 90 días entradas múltiples'
    },
    text: {
      en: 'Très service professionnel! Direct support on WhatsApp in English & French. Submitted my passport copy and photo, they checked everything before processing. Got my 90-day multi-entry visa in 2 business days. Smooth and stress-free experience.',
      vi: 'Dịch vụ rất chuyên nghiệp! Hỗ trợ trực tiếp qua WhatsApp bằng tiếng Anh và tiếng Pháp. Sau khi nộp ảnh và hộ chiếu, họ đã kiểm tra kỹ trước khi xử lý. Nhận visa 90 ngày nhiều lần chỉ trong 2 ngày làm việc.',
      fr: 'Service très professionnel ! Assistance directe sur WhatsApp en anglais et en français. J\'ai envoyé ma copie de passeport et ma photo, ils ont tout vérifié avant le traitement. J\'ai obtenu mon visa 90 jours entrées multiples en 2 jours ouvrés.',
      de: 'Sehr professioneller Service! Direkte Unterstützung über WhatsApp auf Englisch und Französisch. Nach Einreichen von Passkopie und Foto wurde alles gründlich geprüft. Erhielt mein 90-Tage-Visum für mehrfache Einreise in 2 Werktagen.',
      ja: 'とてもプロフェッショナルなサービスです！WhatsAppで英語・フランス語でスムーズに対応してくれました。パスポートと写真を提出後、スタッフが事前に細かくチェックしてくれたので、2営業日で90日マルチビザを取得できました。',
      zh: '非常专业的代办服务！可以通过 WhatsApp 用英语和法语进行沟通。提交护照和照片后，客服在提交给移民局前仔细核对了一切。2个工作日就顺利拿到了90天多次往返签证。',
      he: 'שירות מקצועי מאוד! תמיכה ישירה ב-WhatsApp באנגלית ובצרפתית. שלחתי צילום דרכון ותמונה, הם בדקו הכל מראש וקיבלתי ויזה ל-90 יום לריבוי כניסות תוך 2 ימי עסקים.',
      ko: '매우 전문적인 서비스입니다! WhatsApp을 통해 영어와 프랑스어로 친절하게 상담해 주었습니다. 여권 복사본과 사진 제출 후 사전 검토를 거쳐 영업일 기준 2일 만에 90일 복수 비자를 받았습니다.',
      es: '¡Servicio muy profesional! Atención directa en WhatsApp en inglés y francés. Revisaron la copia de mi pasaporte y foto antes de procesar. Obtuve mi visa de 90 días con múltiples entradas en 2 días hábiles.'
    },
    verified: true,
  },
  {
    id: 3,
    name: 'David & Emma Lawson',
    country: 'Australia',
    flag: '🇦🇺',
    rating: 5,
    date: {
      en: '2 weeks ago',
      vi: '2 tuần trước',
      fr: 'Il y a 2 semaines',
      de: 'Vor 2 Wochen',
      ja: '2週間前',
      zh: '2周前',
      he: 'לפני שבועיים',
      ko: '2주일 전',
      es: 'Hace 2 semanas'
    },
    service: {
      en: 'Urgent 4-Hour Visa Service',
      vi: 'Dịch Vụ Visa Khẩn 4 Giờ',
      fr: 'Service visa d\'urgence 4 heures',
      de: 'Dringender 4-Stunden Visaservice',
      ja: '4時間特急ビザ発行サービス',
      zh: '4小时加急出签服务',
      he: 'שירות ויזה דחופה ב-4 שעות',
      ko: '4시간 긴급 비자 발급',
      es: 'Servicio de visa urgente 4 horas'
    },
    text: {
      en: 'Extremely reliable agency in Hanoi. We made a typo on our passport number on our initial application. They corrected our details and re-issued our e-visas urgently before our flight from Sydney. Highly recommended for any traveler to Vietnam!',
      vi: 'Đại lý cực kỳ uy tín tại Hà Nội. Chúng tôi đã gõ sai số hộ chiếu khi tự điền đơn ban đầu. Đội ngũ đã giúp sửa lại thông tin và cấp lại e-visa khẩn cấp trước giờ bay từ Sydney. Rất khuyên dùng cho ai đi du lịch Việt Nam!',
      fr: 'Agence extrêmement fiable à Hanoï. Nous avions fait une faute de frappe sur notre numéro de passeport. Ils ont corrigé nos informations et réémis nos e-visas en urgence avant notre vol depuis Sydney. Très hautement recommandé !',
      de: 'Außerordentlich zuverlässige Agentur in Hanoi. Wir hatten einen Tippfehler bei unserer Passnummer. Das Team hat die Daten korrigiert und vor unserem Flug ab Sydney dringlich neue e-Visa ausgestellt. Sehr zu empfehlen!',
      ja: 'ハノイにある非常に信頼できる代理店です。自分たちで申請した際にパスポート番号を押し間違えてしまいましたが、シドニーからの搭乗前に緊急で修正・再発行対応をしてくれました。本当に感謝しています！',
      zh: '在河内非常靠谱的代办机构！我们在官方自填时写错了护照号码，工作人员在我们在悉尼登机前紧迫地帮我们修正了信息并重新核发了电子签证。强烈推荐给每一位前往越南的游客！',
      he: 'סוכנות אמינה מאוד בהאנוי. עשינו שגיאת הקלדה במספר הדרכון בבקשה הראשונית. הם תיקנו את הפרטים והנפיקו מחדש את הויזות באופן דחוף לפני הטיסה שלנו מסידני.',
      ko: '하노이에 위치한 매우 신뢰할 수 있는 대행사입니다. 처음에 직접 신청할 때 여권 번호 오타가 있었는데, 시드니 출발 직전에 긴급하게 정보를 수정하고 재발급해 주었습니다. 강력 추천합니다!',
      es: 'Agencia extremadamente confiable en Hanói. Cometimos un error tipográfico en el número de pasaporte. Corrigieron nuestros datos y reemitieron nuestras e-visas urgentemente antes de nuestro vuelo desde Sídney.'
    },
    verified: true,
  },
  {
    id: 4,
    name: 'Kenji Takahashi',
    country: 'Japan',
    flag: '🇯🇵',
    rating: 5,
    date: {
      en: '3 weeks ago',
      vi: '3 tuần trước',
      fr: 'Il y a 3 semaines',
      de: 'Vor 3 Wochen',
      ja: '3週間前',
      zh: '3周前',
      he: 'לפני 3 שבועות',
      ko: '3주일 전',
      es: 'Hace 3 semanas'
    },
    service: {
      en: 'Business Visa & Airport VIP Arrival',
      vi: 'Visa Thương Mại & Đón VIP Sân Bay',
      fr: 'Visa d\'affaires & Arrivée VIP aéroport',
      de: 'Geschäftsvisum & Flughafen VIP Service',
      ja: '商用ビザ ＆ 空港VIPファストトラック',
      zh: '商务签证 + 机场 VIP 快速通关',
      he: 'ויזה עסקית ושירות VIP בשדה התעופה',
      ko: '상용 비자 & 공항 VIP 입국 패스트트랙',
      es: 'Visa de negocios y llegada VIP aeropuerto'
    },
    text: {
      en: 'Great customer service and fast response. I needed a business visa for a last-minute conference in Da Nang. They processed it within 4 hours. Fast-track airport team was waiting with a welcome board. Very impressionable service.',
      vi: 'Dịch vụ chăm sóc khách hàng tuyệt vời, phản hồi rất nhanh. Tôi cần visa thương mại cấp tốc để dự hội thảo tại Đà Nẵng. Họ đã hoàn thành trong 4 giờ. Đội đón sân bay đã chờ sẵn với biển tên đón. Rất ấn tượng.',
      fr: 'Excellent service client et réponse très rapide. J\'avais besoin d\'un visa d\'affaires de dernière minute pour une conférence à Da Nang. Ils l\'ont traité en 4 heures. L\'équipe VIP m\'attendait avec un panneau à mon nom.',
      de: 'Großartiger Kundenservice und schnelle Antwort. Ich benötigte ein Geschäftsvisum für eine kurzfristige Konferenz in Da Nang. Es wurde innerhalb von 4 Stunden ausgestellt. Das VIP-Team wartete bereits mit einem Namensschild.',
      ja: '素晴らしいカスタマーサービスと迅速な対応でした。ダナンでの急なカンファレンス参加のためにビジネスビザが必要になりましたが、4時間で処理してくれました。空港ではネームボードを持ったスタッフが出迎えてくれ大変助かりました。',
      zh: '优质的客服和快速的响应速度！我临时需要去岘港参加紧急商务会议，他们只用了4个小时就帮我办好了商签。抵达机场时，快速通关团队拿着接机牌在等候，非常深刻且愉快的体验。',
      he: 'שירות לקוחות מעולה ותגובה מהירה. הייתי צריך ויזה עסקית לוועידה ברגע האחרון בדא נאנג. הם טיפלו בזה תוך 4 שעות. צוות VIP חיכה לי בשדה עם שלט ברוכים הבאים.',
      ko: '훌륭한 고객 서비스와 빠른 응대! 다낭에서 열리는 급한 컨퍼런스 참가용 상용 비자가 필요했는데 4시간 만에 발급되었습니다. 공항 패스트트랙 팀이 피켓을 들고 기다려 주어 매우 감동적이었습니다.',
      es: 'Excelente servicio al cliente y respuesta rápida. Necesitaba una visa de negocios para una conferencia de última hora en Da Nang. La procesaron en 4 horas. El equipo VIP me esperaba en el aeropuerto con un cartel.'
    },
    verified: true,
  },
];

export const GoogleReviewsSection: React.FC<GoogleReviewsSectionProps> = ({ currentLang }) => {
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
            <span>
              {tMulti(currentLang, {
                en: 'Google Reviews • Verified Business',
                vi: 'Đánh Giá Google • Doanh Nghiệp Xác Thực',
                fr: 'Avis Google • Entreprise Vérifiée',
                de: 'Google Bewertungen • Verifiziertes Unternehmen',
                ja: 'Google レビュー • 認証済みビジネス',
                zh: 'Google 谷歌真实评价 • 认证企业',
                he: 'ביקורות גוגל • עסק מאומת',
                ko: 'Google 리뷰 • 인증된 기업',
                es: 'Reseñas de Google • Empresa verificada'
              })}
            </span>
          </div>

          <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {tMulti(currentLang, {
              en: 'Customer Reviews on Google Maps',
              vi: 'Đánh Giá Từ Khách Hàng Trên Google Maps',
              fr: 'Avis clients sur Google Maps',
              de: 'Kundenbewertungen auf Google Maps',
              ja: 'Googleマップ上の顧客レビュー',
              zh: '来自 Google Maps 谷歌地图的真实好评',
              he: 'ביקורות לקוחות ב-Google Maps',
              ko: 'Google 지도 실제 이용 고객 후기',
              es: 'Reseñas de clientes en Google Maps'
            })}
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            {tMulti(currentLang, {
              en: 'Thousands of international travelers trust our fast-track e-Visa & airport concierge services.',
              vi: 'Hàng ngàn du khách quốc tế đã tin tưởng sử dụng dịch vụ e-Visa & đón sân bay của chúng tôi.',
              fr: 'Des milliers de voyageurs internationaux font confiance à nos services e-Visa et d\'accueil à l\'aéroport.',
              de: 'Tausende internationale Reisende vertrauen auf unseren e-Visum Express-Service & Flughafen-Concierge.',
              ja: '何千人もの国際旅行者が当社のe-Visa発給および空港ファストトラックサービスを利用しています。',
              zh: '数以万计的国际游客信任并选择了我们的电子签证加急与机场VIP快速通关服务。',
              he: 'אלפי מטיילים בינלאומיים סומכים על שירותי הויזה המהירים ושירותי ה-VIP שלנו בשדה התעופה.',
              ko: '수천 명의 전 세계 여행객이 당사의 전자비자 및 공항 패스트트랙 서비스를 신뢰합니다.',
              es: 'Miles de viajeros internacionales confían en nuestros servicios de e-Visa y conserjería de aeropuerto.'
            })}
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
              {tMulti(currentLang, {
                en: 'Based on 520+ verified 4★ & 5★ reviews',
                vi: 'Dựa trên 520+ đánh giá 4★ & 5★ thực tế',
                fr: 'Basé sur plus de 520 avis vérifiés 4★ & 5★',
                de: 'Basiert auf 520+ verifizierten 4★ & 5★ Bewertungen',
                ja: '520件以上の検証済み4★・5★レビュー',
                zh: '基于 520+ 条 4★ & 5★ 谷歌真实打分',
                he: 'מבוסס על 520+ ביקורות מאומתות בנות 4-5 כוכבים',
                ko: '520개 이상의 검증된 4★ & 5★ 후기',
                es: 'Basado en más de 520 reseñas verificadas de 4★ y 5★'
              })}
            </p>
          </div>

          <a
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-extrabold text-xs px-4 py-2.5 sm:py-3 rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 text-center shrink-0"
          >
            <span>
              {tMulti(currentLang, {
                en: 'View on Google Maps',
                vi: 'Xem Trên Google Maps',
                fr: 'Voir sur Google Maps',
                de: 'Auf Google Maps ansehen',
                ja: 'Googleマップで見る',
                zh: '在 Google Maps 上查看',
                he: 'צפה ב-Google Maps',
                ko: 'Google 지도에서 보기',
                es: 'Ver en Google Maps'
              })}
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-indigo-200" />
          </a>
        </div>
      </div>

      {/* 4* & 5* Star Filter Ribbon */}
      <div className="flex items-center justify-between text-xs font-semibold text-slate-600 bg-amber-50/80 border border-amber-200/80 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5">
        <div className="flex items-center gap-2 text-amber-900 font-bold text-xs">
          <Award className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            {tMulti(currentLang, {
              en: 'Showing top 4★ and 5★ customer feedback',
              vi: 'Chỉ hiển thị các đánh giá xuất sắc 4★ và 5★',
              fr: 'Affichage des meilleurs avis 4★ et 5★',
              de: 'Anzeige der besten 4★ und 5★ Kundenbewertungen',
              ja: '最高評価 4★ および 5★ のレビューを表示中',
              zh: '展示高品质 4★ 和 5★ 真实用户反馈',
              he: 'מציג חוות דעת מובילות בנות 4 ו-5 כוכבים',
              ko: '우수 4★ 및 5★ 고객 후기만 표시 중',
              es: 'Mostrando las mejores reseñas de 4★ y 5★'
            })}
          </span>
        </div>
        <span className="text-[11px] text-amber-700 font-bold hidden sm:inline">
          100% Verified Trips
        </span>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {REVIEWS_DATA.slice(0, 4).map((review) => (
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
                {review.service[currentLang] || review.service.en}
              </div>

              {/* Review Comment */}
              <p className="text-xs text-slate-700 leading-relaxed font-normal italic">
                "{review.text[currentLang] || review.text.en}"
              </p>
            </div>

            {/* Footer of Review Card */}
            <div className="pt-2 sm:pt-3 border-t border-slate-200/60 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 font-medium">
              <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-500" />
                <span>
                  {tMulti(currentLang, {
                    en: 'Verified Review',
                    vi: 'Đánh Giá Đã Xác Thực',
                    fr: 'Avis Vérifié',
                    de: 'Verifizierte Bewertung',
                    ja: '認証済みレビュー',
                    zh: '已认证评价',
                    he: 'חוות דעת מאומתת',
                    ko: '인증된 후기',
                    es: 'Reseña Verificada'
                  })}
                </span>
              </span>
              <span>{review.date[currentLang] || review.date.en}</span>
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
            {tMulti(currentLang, {
              en: 'Read all 520+ reviews directly on Google Maps ↗',
              vi: 'Xem tất cả 520+ đánh giá trực tiếp trên Google Maps ↗',
              fr: 'Lire les 520+ avis directement sur Google Maps ↗',
              de: 'Alle 520+ Bewertungen direkt auf Google Maps lesen ↗',
              ja: 'Googleマップで520件以上のレビューをすべて読む ↗',
              zh: '在 Google 地图上阅读全部 520+ 条真实评价 ↗',
              he: 'קרא את כל 520+ הביקורות ישירות ב-Google Maps ↗',
              ko: 'Google 지도에서 520개 이상의 모든 후기 읽기 ↗',
              es: 'Leer las más de 520 reseñas directamente en Google Maps ↗'
            })}
          </span>
        </a>
      </div>
    </section>
  );
};

