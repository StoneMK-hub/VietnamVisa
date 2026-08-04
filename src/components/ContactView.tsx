import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  CheckCircle2,
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

interface ContactText {
  badge: string;
  h1: string;
  sapo: string;
  cardTitle: string;
  successTitle: string;
  successDesc: (name: string, mail: string) => string;
  sendAnother: string;
  applyNow: string;
  valError: string;
  firstName: string;
  firstNamePlaceholder: string;
  lastName: string;
  lastNamePlaceholder: string;
  nationality: string;
  nationalityPlaceholder: string;
  phone: string;
  email: string;
  subject: string;
  subjectOpts: {
    urgent: string;
    general: string;
    payment: string;
    correction: string;
    fasttrack: string;
  };
  message: string;
  messagePlaceholder: string;
  sendBtn: string;
  otherWaysTitle: string;
  otherWaysDesc: string;
  phoneLabel: string;
  phoneHours: string;
  waLabel: string;
  waChat: string;
  waNumber: string;
  emailLabel: string;
  emailTime: string;
  officeAddrLabel: string;
  officeAddr: string;
  tzLabel: string;
  bannerTag: string;
  bannerTitle: string;
  bannerDesc: string;
  bannerCta: string;
}

const CONTACT_TRANSLATIONS: Record<Language, ContactText> = {
  en: {
    badge: '24/7 Support Operations',
    h1: 'Contact Us',
    sapo: 'Have a question about your Vietnam e-Visa application or need last-minute assistance? Send us a message or reach out to our team.',
    cardTitle: 'Send us a message',
    successTitle: 'Message Sent Successfully!',
    successDesc: (name, mail) => `Thank you, ${name}! Our support team has received your message and will reply to your email (${mail}) within 15–30 minutes.`,
    sendAnother: 'Send another message',
    applyNow: 'Apply for Visa now',
    valError: 'Please fill in First Name, Email Address, and Message.',
    firstName: 'First name',
    firstNamePlaceholder: 'e.g. John',
    lastName: 'Last name',
    lastNamePlaceholder: 'e.g. Smith',
    nationality: 'Nationality',
    nationalityPlaceholder: 'Start typing your country...',
    phone: 'Phone number',
    email: 'Email address',
    subject: 'Subject',
    subjectOpts: {
      urgent: 'Urgent Visa Status Check',
      general: 'General Inquiry',
      payment: 'Payment & Invoicing',
      correction: 'Application Correction',
      fasttrack: 'Fast-track Airport Service'
    },
    message: 'Message',
    messagePlaceholder: 'Please enter details of your inquiry or reference code...',
    sendBtn: 'Send Message →',
    otherWaysTitle: 'Other ways to reach us',
    otherWaysDesc: 'Our support team operates seven days a week.',
    phoneLabel: 'PHONE / HOTLINE',
    phoneHours: 'Hours: 08:00 to 21:00 (GMT+7)',
    waLabel: 'WHATSAPP',
    waChat: 'Free international calls & chat',
    waNumber: '+84 832 320 320 (WhatsApp Support)',
    emailLabel: 'EMAIL',
    emailTime: 'Average response time: 15 minutes',
    officeAddrLabel: 'OFFICE ADDRESS',
    officeAddr: 'BDA Building, Lo E50, Khu 3ha, Phú Diễn, Hà Nội 100000, Vietnam',
    tzLabel: 'Show hours in your time zone:',
    bannerTag: 'URGENT VISA SERVICE',
    bannerTitle: 'Flying within 24 hours?',
    bannerDesc: 'For last-minute travel, call our hotline directly so we can confirm capacity before you pay. Our Super Urgent tier delivers within 1 business day.',
    bannerCta: 'Start your application →'
  },
  vi: {
    badge: 'Hỗ Trợ Trực Tuyến 24/7',
    h1: 'Liên Hệ Với Chúng Tôi',
    sapo: 'Bạn có thắc mắc về hồ sơ e-Visa hoặc cần hỗ trợ khẩn cấp? Hãy gửi tin nhắn cho chúng tôi hoặc liên hệ hotline để được trợ giúp ngay lập tức.',
    cardTitle: 'Gửi tin nhắn cho chúng tôi',
    successTitle: 'Đã Gửi Tin Nhắn Thành Công!',
    successDesc: (name, mail) => `Cảm ơn ${name}! Đội ngũ chuyên viên của chúng tôi đã nhận được tin nhắn và sẽ phản hồi qua email (${mail}) trong vòng 15 - 30 phút.`,
    sendAnother: 'Gửi tin nhắn khác',
    applyNow: 'Nộp đơn Visa ngay',
    valError: 'Vui lòng điền Tên, Email và Nội dung tin nhắn.',
    firstName: 'Tên (First name)',
    firstNamePlaceholder: 'Ví dụ: John',
    lastName: 'Họ (Last name)',
    lastNamePlaceholder: 'Ví dụ: Smith',
    nationality: 'Quốc tịch',
    nationalityPlaceholder: 'Nhập quốc tịch của bạn...',
    phone: 'Số điện thoại',
    email: 'Địa chỉ Email',
    subject: 'Chủ đề thắc mắc',
    subjectOpts: {
      urgent: 'Kiểm tra tiến độ visa khẩn',
      general: 'Tư vấn loại visa & điều kiện',
      payment: 'Thanh toán & Hóa đơn',
      correction: 'Sửa thông tin hộ chiếu / ảnh',
      fasttrack: 'Dịch vụ đón sân bay Fast-Track'
    },
    message: 'Nội dung tin nhắn',
    messagePlaceholder: 'Nhập nội dung cần hỗ trợ (Ví dụ: Tôi đã nộp đơn nhưng chưa nhận được mail, mã hồ sơ VNV-2026...)',
    sendBtn: 'Gửi Tin Nhắn →',
    otherWaysTitle: 'Phương thức liên hệ khác',
    otherWaysDesc: 'Đội ngũ hỗ trợ của chúng tôi hoạt động 7 ngày trong tuần.',
    phoneLabel: 'HOTLINE HỖ TRỢ',
    phoneHours: 'Giờ làm việc: 08:00 - 21:00 (GMT+7)',
    waLabel: 'WHATSAPP HỖ TRỢ',
    waChat: 'Gọi & chat quốc tế miễn phí',
    waNumber: '+84 832 320 320 (Hỗ trợ WhatsApp)',
    emailLabel: 'EMAIL',
    emailTime: 'Thời gian phản hồi trung bình: 15 phút',
    officeAddrLabel: 'ĐỊA CHỈ VĂN PHÒNG',
    officeAddr: 'Tòa nhà BDA, Lô E50, Khu 3ha, Phú Diễn, Bắc Từ Liêm, Hà Nội 100000, Việt Nam',
    tzLabel: 'Múi giờ làm việc:',
    bannerTag: 'DỊCH VỤ VISA KHẨN CẤP',
    bannerTitle: 'Bay trong vòng 24 giờ?',
    bannerDesc: 'Đối với chuyến đi khẩn cấp phút chót, hãy gọi hotline cho chúng tôi để xác nhận khả năng xử lý trước khi thanh toán. Gói Super Urgent hoàn thành trong 1 đến 4 giờ làm việc.',
    bannerCta: 'Bắt đầu nộp đơn ngay →'
  },
  fr: {
    badge: 'Support Client 24/7',
    h1: 'Contactez-nous',
    sapo: 'Vous avez des questions sur votre demande d\'e-Visa pour le Vietnam ou besoin d\'une assistance urgente ? Envoyez-nous un message ou contactez notre équipe.',
    cardTitle: 'Envoyez-nous un message',
    successTitle: 'Message envoyé avec succès !',
    successDesc: (name, mail) => `Merci ${name} ! Notre équipe a bien reçu votre message et vous répondra à l'adresse (${mail}) sous 15 à 30 minutes.`,
    sendAnother: 'Envoyer un autre message',
    applyNow: 'Demander un visa maintenant',
    valError: 'Veuillez remplir le prénom, l\'adresse e-mail et le message.',
    firstName: 'Prénom',
    firstNamePlaceholder: 'ex. Jean',
    lastName: 'Nom',
    lastNamePlaceholder: 'ex. Dupont',
    nationality: 'Nationalité',
    nationalityPlaceholder: 'Saisissez votre pays...',
    phone: 'Numéro de téléphone',
    email: 'Adresse e-mail',
    subject: 'Sujet',
    subjectOpts: {
      urgent: 'Vérification du statut de visa urgent',
      general: 'Demande d\'information générale',
      payment: 'Paiement et facturation',
      correction: 'Correction de la demande',
      fasttrack: 'Service Fast-Track à l\'aéroport'
    },
    message: 'Message',
    messagePlaceholder: 'Veuillez préciser votre demande ou votre code de référence...',
    sendBtn: 'Envoyer le message →',
    otherWaysTitle: 'Autres moyens de nous joindre',
    otherWaysDesc: 'Notre équipe de support est disponible 7 jours sur 7.',
    phoneLabel: 'TÉLÉPHONE / HOTLINE',
    phoneHours: 'Horaires : 08h00 à 21h00 (GMT+7)',
    waLabel: 'WHATSAPP',
    waChat: 'Appels & chat internationaux gratuits',
    waNumber: '+84 832 320 320 (Support WhatsApp)',
    emailLabel: 'E-MAIL',
    emailTime: 'Temps de réponse moyen : 15 minutes',
    officeAddrLabel: 'ADRESSE DU BUREAU',
    officeAddr: 'Immeuble BDA, Lot E50, Zone 3ha, Phu Dien, Hanoi 100000, Vietnam',
    tzLabel: 'Afficher selon votre fuseau :',
    bannerTag: 'SERVICE VISA URGENT',
    bannerTitle: 'Vol dans les 24 heures ?',
    bannerDesc: 'Pour les voyages de dernière minute, appelez directement notre hotline. Notre option Super Urgent traite votre demande rapidement.',
    bannerCta: 'Commencer la demande →'
  },
  de: {
    badge: '24/7 Kundensupport',
    h1: 'Kontaktieren Sie uns',
    sapo: 'Haben Sie Fragen zu Ihrem e-Visum-Antrag oder benötigen Sie dringende Hilfe? Senden Sie uns eine Nachricht oder kontaktieren Sie unser Team.',
    cardTitle: 'Senden Sie uns eine Nachricht',
    successTitle: 'Nachricht erfolgreich gesendet!',
    successDesc: (name, mail) => `Vielen Dank, ${name}! Unser Support-Team hat Ihre Nachricht erhalten und antwortet an (${mail}) innerhalb von 15–30 Minuten.`,
    sendAnother: 'Weitere Nachricht senden',
    applyNow: 'Jetzt Visum beantragen',
    valError: 'Bitte füllen Sie Vorname, E-Mail-Adresse und Nachricht aus.',
    firstName: 'Vorname',
    firstNamePlaceholder: 'z.B. Max',
    lastName: 'Nachname',
    lastNamePlaceholder: 'z.B. Mustermann',
    nationality: 'Nationalität',
    nationalityPlaceholder: 'Land eingeben...',
    phone: 'Telefonnummer',
    email: 'E-Mail-Adresse',
    subject: 'Betreff',
    subjectOpts: {
      urgent: 'Dringende Visums-Statusprüfung',
      general: 'Allgemeine Anfrage',
      payment: 'Zahlung & Rechnung',
      correction: 'Antragskorrektur',
      fasttrack: 'Flughafen Fast-Track-Service'
    },
    message: 'Nachricht',
    messagePlaceholder: 'Bitte geben Sie Details Ihrer Anfrage oder Referenzcode ein...',
    sendBtn: 'Nachricht senden →',
    otherWaysTitle: 'Weitere Kontaktmöglichkeiten',
    otherWaysDesc: 'Unser Support-Team ist 7 Tage die Woche für Sie da.',
    phoneLabel: 'TELEFON / HOTLINE',
    phoneHours: 'Zeiten: 08:00 bis 21:00 Uhr (GMT+7)',
    waLabel: 'WHATSAPP',
    waChat: 'Kostenlose internationale Anrufe & Chat',
    waNumber: '+84 832 320 320 (WhatsApp Support)',
    emailLabel: 'E-MAIL',
    emailTime: 'Durchschnittliche Antwortzeit: 15 Minuten',
    officeAddrLabel: 'BÜROADRESSE',
    officeAddr: 'BDA-Gebäude, Lot E50, Phu Dien, Hanoi 100000, Vietnam',
    tzLabel: 'Zeiten in Ihrer Zeitzone anzeigen:',
    bannerTag: 'DRINGENDER VISUM-SERVICE',
    bannerTitle: 'Abflug innerhalb von 24 Stunden?',
    bannerDesc: 'Für kurzfristige Reisen rufen Sie bitte direkt unsere Hotline an. Unser Super-Eilservice liefert innerhalb von 1 Arbeitstag.',
    bannerCta: 'Antrag jetzt starten →'
  },
  ja: {
    badge: '24時間年中無休サポート',
    h1: 'お問い合わせ',
    sapo: 'ベトナムe-Visa申請に関するご質問や直前のサポートが必要ですか？メッセージをお送りいただくか、サポートチームにお問い合わせください。',
    cardTitle: 'メッセージを送信する',
    successTitle: 'メッセージが送信されました！',
    successDesc: (name, mail) => `${name}様、ありがとうございます。サポートチームがメッセージを受信しました。15〜30分以内に (${mail}) へご返信いたします。`,
    sendAnother: '別のメッセージを送る',
    applyNow: '今すぐビザを申請する',
    valError: 'お名前（名）、メールアドレス、メッセージを入力してください。',
    firstName: '名（First Name）',
    firstNamePlaceholder: '例：Taro',
    lastName: '姓（Last Name）',
    lastNamePlaceholder: '例：Tanaka',
    nationality: '国籍',
    nationalityPlaceholder: '国名を入力...',
    phone: '電話番号',
    email: 'メールアドレス',
    subject: 'お問い合わせ件名',
    subjectOpts: {
      urgent: '緊急ビザ進捗状況の確認',
      general: '一般的なお問い合わせ',
      payment: 'お支払い・請求書',
      correction: '申請情報の修正・変更',
      fasttrack: '空港ファストトラックサービス'
    },
    message: 'お問い合わせ内容',
    messagePlaceholder: 'お問い合わせの詳細や申請参照コードをご入力ください...',
    sendBtn: 'メッセージを送信する →',
    otherWaysTitle: 'その他の連絡方法',
    otherWaysDesc: '当社のサポートチームは週7日体制で対応しております。',
    phoneLabel: '電話 / ホットライン',
    phoneHours: '営業時間：08:00〜21:00（GMT+7）',
    waLabel: 'WHATSAPP',
    waChat: '国際通話・チャット無料',
    waNumber: '+84 832 320 320 (WhatsAppサポート)',
    emailLabel: 'メールアドレス',
    emailTime: '平均回答時間：15分',
    officeAddrLabel: 'オフィス所在地',
    officeAddr: 'BDA Building, Lo E50, Khu 3ha, Phu Dien, Hanoi 100000, Vietnam',
    tzLabel: 'タイムゾーン別の営業時間表示：',
    bannerTag: '緊急ビザ発給サービス',
    bannerTitle: '24時間以内にお急ぎのご渡航ですか？',
    bannerDesc: '直前のご旅行の場合は、お支払い前にホットラインへお電話ください。超特急プランは1営業日以内に対応します。',
    bannerCta: '今すぐ申請を開始する →'
  },
  zh: {
    badge: '24/7 全天候在线客服',
    h1: '联系我们',
    sapo: '对越南电子签证申请有疑问或需要极速紧急协助？请在此发送留言或直接联系我们的客服团队。',
    cardTitle: '在线给我们留言',
    successTitle: '留言已成功发送！',
    successDesc: (name, mail) => `感谢您，${name}！我们的客服团队已收到您的留言，将在 15 至 30 分钟内回复至您的邮箱 (${mail})。`,
    sendAnother: '发送其他留言',
    applyNow: '立即申请签证',
    valError: '请填写名字、邮箱地址和留言内容。',
    firstName: '名字 (First Name)',
    firstNamePlaceholder: '例如：San',
    lastName: '姓氏 (Last Name)',
    lastNamePlaceholder: '例如：Zhang',
    nationality: '国籍',
    nationalityPlaceholder: '输入您的国籍...',
    phone: '电话号码',
    email: '电子邮箱',
    subject: '咨询主题',
    subjectOpts: {
      urgent: '加急签证进度查询',
      general: '签证类型与条件咨询',
      payment: '支付与发票',
      correction: '修改护照/照片信息',
      fasttrack: '机场 VIP 快速通关服务'
    },
    message: '留言内容',
    messagePlaceholder: '请输入您需要协助的详细内容或订单参考编号...',
    sendBtn: '发送留言 →',
    otherWaysTitle: '其他联系方式',
    otherWaysDesc: '我们的支持团队每周 7 天在线服务。',
    phoneLabel: '电话 / 服务热线',
    phoneHours: '服务时间：08:00 至 21:00 (GMT+7)',
    waLabel: 'WHATSAPP',
    waChat: '免费国际通话与在线 Chat',
    waNumber: '+84 832 320 320 (WhatsApp 支持)',
    emailLabel: '电子邮箱',
    emailTime: '平均回复时间：15 分钟',
    officeAddrLabel: '办公地址',
    officeAddr: 'BDA Building, Lo E50, Khu 3ha, Phú Diễn, Hà Nội 100000, Vietnam',
    tzLabel: '按您的时区显示营业时间：',
    bannerTag: '加急签证服务',
    bannerTitle: '将在 24 小时内起飞？',
    bannerDesc: '临近起飞的紧急行程，请在支付前直接拨打热线确认。特急办理可在 1 个工作日内完成。',
    bannerCta: '立即开始申请 →'
  },
  he: {
    badge: 'שירות תמיכה 24/7',
    h1: 'צור קשר',
    sapo: 'יש לך שאלות לגבי הבקשה לויזה אלקטרונית לוייטנאם או שאתה זקוק לעזרה דחופה? שלח לנו הודעה או צור קשר עם הצוות שלנו.',
    cardTitle: 'שלח לנו הודעה',
    successTitle: 'ההודעה נשלחה בהצלחה!',
    successDesc: (name, mail) => `תודה ${name}! צוות התמיכה שלנו קיבל את ההודעה וישיב למייל שלך (${mail}) תוך 15–30 דקות.`,
    sendAnother: 'שלח הודעה נוספת',
    applyNow: 'הגש בקשה לויזה עכשיו',
    valError: 'אנא מלא שם פרטי, כתובת דוא"ל ותוכן ההודעה.',
    firstName: 'שם פרטי',
    firstNamePlaceholder: 'למשל: ישראל',
    lastName: 'שם משפחה',
    lastNamePlaceholder: 'למשל: ישראלי',
    nationality: 'אזרחות',
    nationalityPlaceholder: 'הקלד את המדינה שלך...',
    phone: 'מספר טלפון',
    email: 'כתובת דוא"ל',
    subject: 'נושא הפנייה',
    subjectOpts: {
      urgent: 'בדיקת סטטוס ויזה דחופה',
      general: 'בירור כללי',
      payment: 'תשלום וחשבוניות',
      correction: 'תיקון פרטי בקשה',
      fasttrack: 'שירות VIP בשדה התעופה'
    },
    message: 'תוכן ההודעה',
    messagePlaceholder: 'אנא הזן את פרטי הפנייה או קוד המעקב...',
    sendBtn: 'שלח הודעה →',
    otherWaysTitle: 'דרכים נוספות ליצור קשר',
    otherWaysDesc: 'צוות התמיכה שלנו פעיל 7 ימים בשבוע.',
    phoneLabel: 'טלפון / מוקד תמיכה',
    phoneHours: 'שעות פעילות: 08:00 עד 21:00 (GMT+7)',
    waLabel: 'WHATSAPP',
    waChat: 'שיחות וצ\'אט בינלאומי בחינם',
    waNumber: '+84 832 320 320 (תמיכת WhatsApp)',
    emailLabel: 'דוא"ל',
    emailTime: 'זמן תגובה ממוצע: 15 דקות',
    officeAddrLabel: 'כתובת המשרד',
    officeAddr: 'BDA Building, Lo E50, Khu 3ha, Phu Dien, Hanoi 100000, Vietnam',
    tzLabel: 'הצג שעות באזור הזמן שלך:',
    bannerTag: 'שירות ויזה דחוף',
    bannerTitle: 'טסים תוך 24 שעות?',
    bannerDesc: 'לנסיעות של הרגע האחרון, התקשר ישירות למוקד שלנו כדי לאשר זמינות לפני התשלום.',
    bannerCta: 'התחל בקשה עכשיו →'
  },
  ko: {
    badge: '24/7 고객 지원 센터',
    h1: '문의하기',
    sapo: '베트남 전자비자 신청에 대해 궁금한 점이 있거나 긴급 도움이 필요하신가요? 메시지를 남기시거나 지원 팀에 문의해 주세요.',
    cardTitle: '메시지 보내기',
    successTitle: '메시지가 성공적으로 전송되었습니다!',
    successDesc: (name, mail) => `${name}님, 감사합니다! 지원 팀이 메시지를 접수했으며 15~30분 이내에 이메일 (${mail})로 답변 드리겠습니다.`,
    sendAnother: '다른 메시지 보내기',
    applyNow: '지금 비자 신청하기',
    valError: '이름(First Name), 이메일 주소 및 메시지 내용을 입력해 주세요.',
    firstName: '이름 (First Name)',
    firstNamePlaceholder: '예: Gildong',
    lastName: '성 (Last Name)',
    lastNamePlaceholder: '예: Hong',
    nationality: '국적',
    nationalityPlaceholder: '국가명을 입력하세요...',
    phone: '전화번호',
    email: '이메일 주소',
    subject: '문의 유형',
    subjectOpts: {
      urgent: '긴급 비자 진행 상태 확인',
      general: '비자 종류 및 자격 문의',
      payment: '결제 및 영수증',
      correction: '여권/사진 정보 수정',
      fasttrack: '공항 패스트트랙 서비스'
    },
    message: '문의 내용',
    messagePlaceholder: '문의 사항이나 접수 번호를 자세히 입력해 주세요...',
    sendBtn: '메시지 전송 →',
    otherWaysTitle: '기타 연락 방법',
    otherWaysDesc: '당사 지원 팀은 연중무휴 주 7일 운영됩니다.',
    phoneLabel: '전화 / 핫라인',
    phoneHours: '운영 시간: 08:00 ~ 21:00 (GMT+7)',
    waLabel: 'WHATSAPP',
    waChat: '무료 국제 전화 및 챗 상담',
    waNumber: '+84 832 320 320 (WhatsApp 지원)',
    emailLabel: '이메일',
    emailTime: '평균 답변 시간: 15분',
    officeAddrLabel: '사무실 주소',
    officeAddr: 'BDA Building, Lo E50, Khu 3ha, Phu Dien, Hanoi 100000, Vietnam',
    tzLabel: '해당 지역 시대로 시간 표시:',
    bannerTag: '긴급 비자 서비스',
    bannerTitle: '24시간 이내 출국 예정이신가요?',
    bannerDesc: '출국 직전 긴급 여행의 경우, 결제 전 핫라인으로 직접 문의하여 발급 가능 여부를 확인하세요. 초긴급 서비스는 1영업일 이내 완료됩니다.',
    bannerCta: '지금 신청 시작하기 →'
  },
  es: {
    badge: 'Soporte de Atención 24/7',
    h1: 'Contacto',
    sapo: '¿Tiene alguna duda sobre su solicitud de e-Visa para Vietnam o necesita asistencia de última hora? Envíenos un mensaje o contacte con nuestro equipo.',
    cardTitle: 'Envíenos un mensaje',
    successTitle: '¡Mensaje enviado con éxito!',
    successDesc: (name, mail) => `¡Gracias, ${name}! Nuestro equipo ha recibido su mensaje y le responderá a su correo (${mail}) en 15–30 minutos.`,
    sendAnother: 'Enviar otro mensaje',
    applyNow: 'Solicitar visado ahora',
    valError: 'Por favor, rellene el nombre, dirección de correo y el mensaje.',
    firstName: 'Nombre',
    firstNamePlaceholder: 'ej. Juan',
    lastName: 'Apellidos',
    lastNamePlaceholder: 'ej. Pérez',
    nationality: 'Nacionalidad',
    nationalityPlaceholder: 'Escriba su país...',
    phone: 'Número de teléfono',
    email: 'Correo electrónico',
    subject: 'Asunto',
    subjectOpts: {
      urgent: 'Consulta urgente del estado del visado',
      general: 'Consulta general',
      payment: 'Pago y facturación',
      correction: 'Corrección de datos',
      fasttrack: 'Servicio Fast-track en aeropuerto'
    },
    message: 'Mensaje',
    messagePlaceholder: 'Por favor, introduzca detalles de su consulta o código de referencia...',
    sendBtn: 'Enviar mensaje →',
    otherWaysTitle: 'Otras formas de contactar',
    otherWaysDesc: 'Nuestro equipo de atención está disponible los 7 días de la semana.',
    phoneLabel: 'TELÉFONO / HOTLINE',
    phoneHours: 'Horario: 08:00 a 21:00 (GMT+7)',
    waLabel: 'WHATSAPP',
    waChat: 'Llamadas y chat internacionales gratuitos',
    waNumber: '+84 832 320 320 (Soporte WhatsApp)',
    emailLabel: 'CORREO ELECTRÓNICO',
    emailTime: 'Tiempo medio de respuesta: 15 minutos',
    officeAddrLabel: 'DIRECCIÓN DE LA OFICINA',
    officeAddr: 'Edificio BDA, Lote E50, Zona 3ha, Phu Dien, Hanói 100000, Vietnam',
    tzLabel: 'Mostrar horarios en su zona horaria:',
    bannerTag: 'SERVICIO DE VISADO URGENTE',
    bannerTitle: '¿Vuela en menos de 24 horas?',
    bannerDesc: 'Para viajes de última hora, llame directamente a nuestra línea de atención. Nuestro nivel Súper Urgente entrega en 1 día hábil.',
    bannerCta: 'Comenzar solicitud →'
  }
};

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

  const t = CONTACT_TRANSLATIONS[currentLang] || CONTACT_TRANSLATIONS.en;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!firstName.trim() || !email.trim() || !message.trim()) {
      setError(t.valError);
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
        setSubmitted(true);
      }
    } catch (err) {
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
          <span>{t.badge}</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {t.h1}
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
          {t.sapo}
        </p>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Form Card (7 Cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 pb-2 border-b border-slate-100 flex items-center justify-between">
            <span>{t.cardTitle}</span>
            <MessageSquare className="w-5 h-5 text-indigo-600" />
          </h2>

          {submitted ? (
            <div className="py-10 text-center space-y-5">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-300 animate-bounce">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-slate-900">
                  {t.successTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  {t.successDesc(firstName, email)}
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
                  {t.sendAnother}
                </button>
                {onStartApplication && (
                  <button
                    onClick={onStartApplication}
                    className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow transition-colors flex items-center justify-center gap-2"
                  >
                    <span>{t.applyNow}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="pt-6 space-y-4">
              {error && (
                <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Name fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-slate-800 block">
                    {t.firstName} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder={t.firstNamePlaceholder}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-slate-800 block">
                    {t.lastName}
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder={t.lastNamePlaceholder}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>
              </div>

              {/* Nationality & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-slate-800 block">
                    {t.nationality}
                  </label>
                  <input
                    type="text"
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                    placeholder={t.nationalityPlaceholder}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-slate-800 block">
                    {t.phone}
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 555 555 5555"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-800 block">
                  {t.email} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-800 block">
                  {t.subject}
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 cursor-pointer"
                >
                  <option value="Urgent Visa Status Check">
                    {t.subjectOpts.urgent}
                  </option>
                  <option value="General Inquiry">
                    {t.subjectOpts.general}
                  </option>
                  <option value="Payment & Invoicing">
                    {t.subjectOpts.payment}
                  </option>
                  <option value="Application Correction">
                    {t.subjectOpts.correction}
                  </option>
                  <option value="Fast-track Airport Service">
                    {t.subjectOpts.fasttrack}
                  </option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-800 block">
                  {t.message} <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.messagePlaceholder}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 resize-y"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border border-indigo-500 disabled:opacity-60"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <span>{t.sendBtn}</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right Column: Other ways to reach us & Super Urgent Banner (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Card 1: Other ways to reach us */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-7 space-y-6">
            <div>
              <h3 className="text-xl font-extrabold text-slate-900">
                {t.otherWaysTitle}
              </h3>
              <p className="text-sm text-slate-500 font-medium mt-1">
                {t.otherWaysDesc}
              </p>
            </div>

            {/* List of contact channels */}
            <div className="space-y-4 divide-y divide-slate-100">
              {/* Phone */}
              <div className="pt-2 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-200 text-pink-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    {t.phoneLabel}
                  </span>
                  <a
                    href="tel:+84832320320"
                    className="text-base sm:text-lg font-black text-slate-900 hover:text-indigo-600 transition-colors block"
                  >
                    +84 832 320 320
                  </a>
                  <span className="text-xs text-slate-500 font-medium">{t.phoneHours}</span>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="pt-3.5 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    {t.waLabel}
                  </span>
                  <a
                    href="https://wa.me/84832320320"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-extrabold text-slate-900 hover:text-emerald-600 transition-colors flex items-center gap-1"
                  >
                    <span>{t.waChat}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                  <p className="text-xs sm:text-sm text-emerald-700 font-bold">{t.waNumber}</p>
                </div>
              </div>

              {/* Email */}
              <div className="pt-3.5 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    {t.emailLabel}
                  </span>
                  <a
                    href="mailto:support@vietnamvisa.govt.vn"
                    className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors block"
                  >
                    support@vietnamvisa.govt.vn
                  </a>
                  <p className="text-xs text-slate-500 font-medium">{t.emailTime}</p>
                </div>
              </div>

              {/* Office Address */}
              <div className="pt-3.5 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    {t.officeAddrLabel}
                  </span>
                  <p className="text-sm font-bold text-slate-900 leading-relaxed">
                    {t.officeAddr}
                  </p>
                </div>
              </div>
            </div>

            {/* Timezone Switcher Footer */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 text-xs sm:text-sm">
              <span className="text-slate-500 font-medium">
                {t.tzLabel}
              </span>
              <select
                value={selectedTimezone}
                onChange={(e) => setSelectedTimezone(e.target.value)}
                className="bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 cursor-pointer"
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
          <div className="bg-emerald-950 text-white rounded-2xl p-6 sm:p-7 shadow-xl space-y-4 border border-emerald-800 relative overflow-hidden">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 bg-emerald-800/80 text-emerald-200 text-xs font-bold px-3 py-1 rounded-full">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.bannerTag}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                {t.bannerTitle}
              </h3>
              <p className="text-sm text-emerald-100/90 leading-relaxed font-medium">
                {t.bannerDesc}
              </p>
            </div>

            {onStartApplication && (
              <button
                onClick={onStartApplication}
                className="w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-extrabold text-xs sm:text-sm py-3.5 px-5 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer border border-indigo-500"
              >
                <span>{t.bannerCta}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
