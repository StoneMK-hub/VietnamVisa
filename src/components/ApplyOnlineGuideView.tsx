import React from 'react';
import {
  FileText,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Clock,
  Plane,
  Upload,
  CreditCard,
  Download,
  Sparkles,
  AlertCircle,
  Phone,
  HelpCircle,
  Globe,
  UserCheck,
  Zap,
  Award
} from 'lucide-react';
import { Language } from '../types';

interface ApplyOnlineGuideViewProps {
  currentLang: Language;
}

const APPLY_PORTAL_URL = 'https://vietnamvisa.govt.vn/apply-online';

interface GuideText {
  badge: string;
  h1: string;
  sapo: string;
  badge190: string;
  badgeValid: string;
  badgeExpress: string;
  ctaButton: string;
  sslNote: string;
  workflowBadge: string;
  workflowTitle: string;
  workflowSubtitle: string;
  step1Title: string;
  step1Desc: string;
  step1Tag: string;
  step2Title: string;
  step2Desc: string;
  step2Tag: string;
  step3Title: string;
  step3Desc: string;
  step3Tag: string;
  step4Title: string;
  step4Desc: string;
  step4Tag: string;
  reqHeader: string;
  reqTitle: string;
  reqSubtitle: string;
  doc1Title: string;
  doc1Desc: string;
  doc2Title: string;
  doc2Desc: string;
  doc3Title: string;
  doc3Desc: string;
  doc4Title: string;
  doc4Desc: string;
  cardPortalTitle: string;
  cardPortalDesc: string;
  cardPortalBtn: string;
  cardEmergencyTitle: string;
  cardEmergencyDesc: string;
}

const GUIDE_TRANSLATIONS: Record<Language, GuideText> = {
  en: {
    badge: 'VIETNAM E-VISA ONLINE APPLICATION PORTAL 2026',
    h1: 'How to Apply for Vietnam E-Visa Online: Step-by-Step Application Guide',
    sapo: 'Welcome to the step-by-step application portal guide for Vietnam Electronic Visas (E-Visa). Vietnam currently grants 30-day and 90-day single or multiple-entry e-Visas to citizens of all countries. Our pre-check verification system reviews your passport copy and portrait photo compliance before government submission to guarantee 100% approval with express processing in 1 to 2 business days.',
    badge190: 'All 190+ Nationalities',
    badgeValid: 'Valid Entry Visa',
    badgeExpress: 'Express 1-2 Day Option',
    ctaButton: 'GO TO ONLINE APPLICATION FORM →',
    sslNote: 'Direct 256-bit SSL encrypted application submission link',
    workflowBadge: 'SIMPLE 4-STEP WORKFLOW',
    workflowTitle: '4 Easy Steps to Complete Your Application',
    workflowSubtitle: 'Follow these steps on the online portal to finish your visa submission in less than 5 minutes.',
    step1Title: '1. Choose Visa & Speed',
    step1Desc: 'Select 30-day or 90-day single/multiple entry & speed (Standard/Urgent).',
    step1Tag: 'Express Available',
    step2Title: '2. Enter Details & Photo',
    step2Desc: 'Enter passport details, arrival date & upload passport page + 4x6 photo.',
    step2Tag: 'Auto Validation',
    step3Title: '3. Review & Pay',
    step3Desc: 'Review submission carefully & pay fees via Cards, PayPal, VietQR.',
    step3Tag: 'No Hidden Fees',
    step4Title: '4. Receive E-Visa PDF',
    step4Desc: 'Visa approval document sent to email as PDF file. Simply print & present.',
    step4Tag: 'Printable PDF File',
    reqHeader: 'REQUIREMENTS & GUIDELINES',
    reqTitle: 'Required Documents for Application',
    reqSubtitle: 'Ensure your documents meet the following criteria before applying.',
    doc1Title: 'Valid Passport (>6 months)',
    doc1Desc: 'Valid at least 6 months from arrival date with 2 blank pages.',
    doc2Title: 'Clear Passport Data Photo',
    doc2Desc: 'Clear scan or photo of passport bio page without glare or cut borders.',
    doc3Title: 'Portrait Photo (White BG)',
    doc3Desc: 'Recent color 4x6 cm photo, looking straight with white background.',
    doc4Title: 'Intended Border Checkpoint',
    doc4Desc: 'Select your correct port of entry airport or land/sea border.',
    cardPortalTitle: 'Ready to Submit Your Application?',
    cardPortalDesc: 'Click below to be transferred to the direct application submission system.',
    cardPortalBtn: 'Go to Application Form →',
    cardEmergencyTitle: 'Need Emergency Assistance?',
    cardEmergencyDesc: 'If flying within 24 hours or needing urgent guidance, contact our 24/7 hotline team.'
  },
  vi: {
    badge: 'HƯỚNG DẪN NỘP ĐƠN XIN E-VISA VIỆT NAM TRỰC TUYẾN 2026',
    h1: 'Quy Trình 4 Bước Xin E-Visa Việt Nam Trực Tuyến Nhanh Chóng & An Toàn',
    sapo: 'Dịch vụ cấp Thị thực điện tử (E-Visa) Việt Nam hỗ trợ công dân tất cả 190+ quốc gia và vùng lãnh thổ xin visa du lịch hoặc công tác 30 ngày và 90 ngày (nhập cảnh đơn hoặc nhiều lần). Hệ thống xử lý thông minh giúp kiểm tra tính hợp lệ của hộ chiếu và ảnh chân dung trước khi gửi, bảo đảm 100% tỷ lệ phê duyệt, có tùy chọn khẩn 1 đến 2 ngày làm việc.',
    badge190: '190+ Quốc gia',
    badgeValid: 'Thị Thực Nhập Cảnh',
    badgeExpress: 'Xử lý khẩn 1-2 ngày',
    ctaButton: 'TRUY CẬP TRANG NỘP ĐƠN E-VISA →',
    sslNote: 'Liên kết mã hóa SSL 256-bit an toàn',
    workflowBadge: 'QUY TRÌNH ĐƠN GIẢN',
    workflowTitle: 'Các Bước Nộp Đơn Xin E-Visa Việt Nam',
    workflowSubtitle: 'Thực hiện 4 bước sau trên hệ thống đăng ký để hoàn tất hồ sơ nhanh chóng trong 5 phút.',
    step1Title: '1. Chọn Loại Visa',
    step1Desc: 'Chọn loại e-Visa 30 hoặc 90 ngày (1 lần/nhiều lần) & tốc độ (Tiêu chuẩn/Khẩn).',
    step1Tag: 'Có xử lý siêu khẩn',
    step2Title: '2. Điền Đơn & Tải Ảnh',
    step2Desc: 'Nhập thông tin hộ chiếu, ngày nhập cảnh & tải ảnh hộ chiếu + ảnh chân dung 4x6.',
    step2Tag: 'Duyệt ảnh tự động',
    step3Title: '3. Thanh Toán Safe',
    step3Desc: 'Rà soát thông tin chính xác & thanh toán phí an toàn qua Thẻ, PayPal, VietQR.',
    step3Tag: 'Không phí ẩn',
    step4Title: '4. Nhận Visa Email',
    step4Desc: 'Kết quả e-Visa gửi trực tiếp về email dưới dạng tệp PDF, sẵn sàng in ra sử dụng.',
    step4Tag: 'Tệp PDF sẵn sàng in',
    reqHeader: 'HƯỚNG DẪN & QUY ĐỊNH',
    reqTitle: 'Giấy Tờ Cần Chuẩn Bị Khi Nộp Đơn',
    reqSubtitle: 'Đảm bảo các giấy tờ sau đáp ứng quy định để xử lý visa thuận lợi nhất.',
    doc1Title: 'Hộ Chiếu > 6 Tháng',
    doc1Desc: 'Hạn còn ít nhất 6 tháng kể từ ngày nhập cảnh và 2 trang trống.',
    doc2Title: 'Ảnh Hộ Chiếu Rõ Nét',
    doc2Desc: 'Chụp/scan trang thông tin rõ chữ, không bóng chói, không mất góc.',
    doc3Title: 'Ảnh Chân Dung Nền Trắng',
    doc3Desc: 'Ảnh 4x6 cm chụp thẳng mặt, phông nền trắng, chụp trong 6 tháng.',
    doc4Title: 'Cửa Khẩu Nhập Cảnh',
    doc4Desc: 'Xác định rõ sân bay hoặc cửa khẩu đường bộ/đường biển dự kiến.',
    cardPortalTitle: 'Sẵn Sàng Nộp Đơn Khai Thị Thực?',
    cardPortalDesc: 'Bấm nút dưới đây để chuyển hướng đến trang khai thông tin hồ sơ trực tuyến.',
    cardPortalBtn: 'Đến Trang Nộp Đơn Ngay →',
    cardEmergencyTitle: 'Cần Hỗ Trợ Khẩn Cấp Trực Tiếp?',
    cardEmergencyDesc: 'Nếu bạn cần tư vấn nhập cảnh khẩn trong 24h, gọi hotline hoặc chat WhatsApp ngay.'
  },
  fr: {
    badge: 'PORTAIL DE DEMANDE E-VISA VIETNAM EN LIGNE 2026',
    h1: 'Comment demander un e-Visa Vietnam en ligne : Guide étape par étape',
    sapo: 'Bienvenue dans le guide du portail de demande de e-Visa pour le Vietnam. Le Vietnam délivre actuellement des e-visas de 30 et 90 jours (entrée simple ou multiple) aux citoyens de tous les pays. Notre système de vérification préalable contrôle votre passeport et votre photo avant la soumission pour garantir une approbation rapide en 1 à 2 jours ouvrables.',
    badge190: 'Tous les 190+ pays',
    badgeValid: 'Visa d\'entrée valide',
    badgeExpress: 'Option Express 1-2 Jours',
    ctaButton: 'ACCÉDER AU FORMULAIRE EN LIGNE →',
    sslNote: 'Lien de soumission sécurisé chiffré SSL 256 bits',
    workflowBadge: 'PROCESSUS EN 4 ÉTAPES',
    workflowTitle: '4 étapes faciles pour compléter votre demande',
    workflowSubtitle: 'Suivez ces étapes sur le portail en ligne pour soumettre votre visa en moins de 5 minutes.',
    step1Title: '1. Choisir le visa & la vitesse',
    step1Desc: 'Sélectionnez e-Visa 30 ou 90 jours (entrée simple/multiple) et la vitesse.',
    step1Tag: 'Option Express disponible',
    step2Title: '2. Saisir infos & Téléverser photo',
    step2Desc: 'Entrez les détails du passeport, la date d\'arrivée et téléversez les photos.',
    step2Tag: 'Validation automatique',
    step3Title: '3. Vérifier & Payer',
    step3Desc: 'Vérifiez attentivement les informations et payez par Carte, PayPal ou VietQR.',
    step3Tag: 'Aucun frais caché',
    step4Title: '4. Recevoir le e-Visa PDF',
    step4Desc: 'Le document e-Visa est envoyé par e-mail au format PDF. Imprimez et présentez-le.',
    step4Tag: 'Fichier PDF à imprimer',
    reqHeader: 'EXIGENCES ET DIRECTIVES',
    reqTitle: 'Documents requis pour la demande',
    reqSubtitle: 'Assurez-vous que vos documents répondent aux critères ci-dessous.',
    doc1Title: 'Passeport valide (>6 mois)',
    doc1Desc: 'Valide au moins 6 mois après la date d\'arrivée avec 2 pages vierges.',
    doc2Title: 'Scan clair du passeport',
    doc2Desc: 'Scan ou photo nette de la page d\'identité sans reflet ni bord coupé.',
    doc3Title: 'Photo d\'identité (Fond blanc)',
    doc3Desc: 'Photo récente 4x6 cm, vue de face sur fond blanc uni.',
    doc4Title: 'Point de contrôle frontalier',
    doc4Desc: 'Sélectionnez l\'aéroport exact ou le poste frontière terrestre/maritime.',
    cardPortalTitle: 'Prêt à soumettre votre demande ?',
    cardPortalDesc: 'Cliquez ci-dessous pour accéder directement au système de demande en ligne.',
    cardPortalBtn: 'Accéder au formulaire →',
    cardEmergencyTitle: 'Besoin d\'une assistance d\'urgence ?',
    cardEmergencyDesc: 'Si vous volez dans les 24 heures, contactez notre équipe d\'assistance 24/7.'
  },
  de: {
    badge: 'VIETNAM E-VISUM ONLINE-ANTRAGSPORTAL 2026',
    h1: 'Vietnam E-Visum online beantragen: Schritt-für-Schritt-Anleitung',
    sapo: 'Willkommen zur Anleitung für das vietnamesische E-Visum-Portal. Vietnam gewährt Bürgerinnen und Bürgern aller Länder 30- und 90-Tage-E-Visa für die einmalige oder mehrmalige Einreise. Unser System überprüft Ihren Pass und Ihr Foto vor der Einreichung auf Konformität für eine schnelle Genehmigung in 1 bis 2 Werktagen.',
    badge190: 'Alle 190+ Nationalitäten',
    badgeValid: 'Gültiges Einreisevisum',
    badgeExpress: 'Express 1-2 Tage Option',
    ctaButton: 'ZUM ONLINE-ANTRAGSFORMULAR →',
    sslNote: 'Direkter SSL-256-Bit verschlüsselter Antragslink',
    workflowBadge: 'EINFACHER 4-SCHRITTE-ABLAUF',
    workflowTitle: '4 einfache Schritte zur Fertigstellung Ihres Antrags',
    workflowSubtitle: 'Befolgen Sie diese Schritte auf dem Portal, um Ihren Antrag in unter 5 Minuten abzuschließen.',
    step1Title: '1. Visumtyp & Tempo wählen',
    step1Desc: 'Wählen Sie 30 oder 90 Tage (Einmalige/Mehrmalige Einreise) & Bearbeitungszeit.',
    step1Tag: 'Express verfügbar',
    step2Title: '2. Daten eingeben & Foto hochladen',
    step2Desc: 'Geben Sie Passdaten und Ankunftsdatum ein & laden Sie Ihr Foto hoch.',
    step2Tag: 'Automatische Prüfung',
    step3Title: '3. Überprüfen & Bezahlen',
    step3Desc: 'Prüfen Sie Ihre Angaben und bezahlen Sie sicher per Karte, PayPal oder VietQR.',
    step3Tag: 'Keine versteckten Gebühren',
    step4Title: '4. E-Visum PDF erhalten',
    step4Desc: 'Das Visum-Dokument wird per E-Mail als PDF gesendet. Einfach ausdrucken.',
    step4Tag: 'Druckfertige PDF-Datei',
    reqHeader: 'ANFORDERUNGEN & RICHTLINIEN',
    reqTitle: 'Erforderliche Dokumente für den Antrag',
    reqSubtitle: 'Stellen Sie sicher, dass Ihre Dokumente folgende Kriterien erfüllen.',
    doc1Title: 'Gültiger Reisepass (>6 Monate)',
    doc1Desc: 'Mindestens 6 Monate ab Einreise gültig mit 2 freien Seiten.',
    doc2Title: 'Klarer Pass-Scan',
    doc2Desc: 'Deutlicher Scan ohne Spiegelungen oder abgeschnittene Ränder.',
    doc3Title: 'Passfoto (Weißer Hintergrund)',
    doc3Desc: 'Aktuelles Farbfoto 4x6 cm, frontal auf weißem Hintergrund.',
    doc4Title: 'Geplanter Grenzübergang',
    doc4Desc: 'Wählen Sie den genauen Flughafen oder Land-/Seegrenzübergang.',
    cardPortalTitle: 'Bereit, Ihren Antrag einzureichen?',
    cardPortalDesc: 'Klicken Sie unten, um direkt zum Online-Antragssystem zu gelangen.',
    cardPortalBtn: 'Zum Antragsformular →',
    cardEmergencyTitle: 'Benötigen Sie Notfallunterstützung?',
    cardEmergencyDesc: 'Fliegen Sie innerhalb von 24 Stunden? Kontaktieren Sie unser 24/7 Team.'
  },
  ja: {
    badge: '2026年 ベトナムe-VISAオンライン申請ポータル',
    h1: 'ベトナムe-Visaオンライン申請方法：ステップバイステップガイド',
    sapo: 'ベトナム電子ビザ（e-Visa）申請ガイドへようこそ。ベトナムは現在、すべての国の市民に対して30日間および90日間のシングル・マルチ入国e-Visaを発行しています。当社の事前検証システムがパスポートと顔写真を審査し、1〜2営業日での迅速な発給をサポートします。',
    badge190: '全190ヶ国以上対応',
    badgeValid: '正規入国ビザ',
    badgeExpress: '1〜2日特急オプション',
    ctaButton: 'オンライン申請フォームへ進む →',
    sslNote: '256ビットSSL暗号化された安全な申請リンク',
    workflowBadge: '簡単な4ステップの手順',
    workflowTitle: 'ビザ申請完了までの4つの簡単ステップ',
    workflowSubtitle: 'ポータル上で以下の手順に従い、5分未満でビザ申請を完了させてください。',
    step1Title: '1. ビザ種類と処理速度の選択',
    step1Desc: '30日または90日（シングル/マルチ）および処理速度（通常/緊急）を選択。',
    step1Tag: '特急対応可能',
    step2Title: '2. 申請者情報入力と写真添付',
    step2Desc: 'パスポート情報、入国予定日を入力し、パスポートと顔写真を添付。',
    step2Tag: '自動写真チェック',
    step3Title: '3. 内容確認と安全なお支払い',
    step3Desc: '入力内容を最終確認し、クレジットカード、PayPal、VietQR等で決済。',
    step3Tag: '追加隠し費用なし',
    step4Title: '4. e-Visa (PDF) をメールで受取',
    step4Desc: '承認されたe-Visa PDFがメールに届きます。印刷して空港で提示するだけです。',
    step4Tag: '印刷用PDFファイル',
    reqHeader: '必要書類と申請規定',
    reqTitle: 'ビザ申請に必要な準備書類',
    reqSubtitle: '申請前に書類が以下の要件を満たしているかご確認ください。',
    doc1Title: '6ヶ月以上の有効期限があるパスポート',
    doc1Desc: '入国予定日から6ヶ月以上の残存期間と見開き2ページ以上の余白が必要。',
    doc2Title: '鮮明なパスポート顔写真ページ',
    doc2Desc: '光の反射や四隅の切れがない、鮮明な見開きページ画像。',
    doc3Title: '証明写真（白背景）',
    doc3Desc: '直近6ヶ月以内に撮影した正面・無帽・背景白のカラー写真（4x6cm）。',
    doc4Title: '入国予定の空港・出入国港',
    doc4Desc: '入国する国際空港または陸路・海路の境界検問所を正確に選択。',
    cardPortalTitle: 'ビザ申請を始める準備はできましたか？',
    cardPortalDesc: '下のボタンをクリックして、公式オンライン申請フォームに進みます。',
    cardPortalBtn: '申請フォームへ移動 →',
    cardEmergencyTitle: '緊急のサポートが必要ですか？',
    cardEmergencyDesc: '24時間以内にご渡航の場合や緊急時、当社24時間ホットラインにご連絡ください。'
  },
  zh: {
    badge: '2026年 越南电子签证在线申请指南',
    h1: '如何在线申请越南电子签证：详细申请步骤指南',
    sapo: '欢迎查阅越南电子签证（E-Visa）在线申请指南。越南目前面向所有国家和地区的公民发放 30 天与 90 天单次或多次入境电子签证。我们的智能预审系统将在提交前审核您的护照和照片，确保 100% 顺利出签，并提供 1 至 2 个工作日的加急服务。',
    badge190: '适用于 190+ 国籍',
    badgeValid: '合法入境签证',
    badgeExpress: '1-2 天加急选项',
    ctaButton: '前往在线申请表格 →',
    sslNote: '256 位 SSL 加密安全提交链接',
    workflowBadge: '简单 4 步申请流程',
    workflowTitle: '完成签证申请的 4 个简单步骤',
    workflowSubtitle: '按以下步骤在在线门户填写，5 分钟内即可完成签证提交。',
    step1Title: '1. 选择签证类型与加急速度',
    step1Desc: '选择 30 天或 90 天（单次/多次入境）以及处理速度（标准/加急）。',
    step1Tag: '提供特急处理',
    step2Title: '2. 填写个人信息与上传照片',
    step2Desc: '输入护照数据、入境日期，并上传护照页与 4x6 证件照。',
    step2Tag: '自动照片校验',
    step3Title: '3. 核对信息与安全支付',
    step3Desc: '仔细核对申请数据，通过信用卡、PayPal 或 VietQR 进行安全支付。',
    step3Tag: '无任何隐藏费用',
    step4Title: '4. 邮箱接收电子签证 PDF',
    step4Desc: '电子签证批准文件将发送至您的邮箱。只需打印并于入境时出示。',
    step4Tag: '可直接打印 PDF',
    reqHeader: '申请要求与所需材料',
    reqTitle: '在线申请所需准备的材料',
    reqSubtitle: '请在提交前确保您的材料符合以下各项标准。',
    doc1Title: '有效期 6 个月以上的护照',
    doc1Desc: '自入境日起算剩余有效期至少 6 个月，且至少包含 2 页空白页。',
    doc2Title: '清晰的护照个人信息页扫描件',
    doc2Desc: '清晰拍摄或扫描护照全页，不得有反光、遮挡或缺角。',
    doc3Title: '白底个人证件照',
    doc3Desc: '近 6 个月内拍摄的 4x6 cm 正面免冠彩色白底证件照。',
    doc4Title: '预定入境边境口岸/机场',
    doc4Desc: '确认并选择您预计抵达的国际机场、陆路或海路边境口岸。',
    cardPortalTitle: '准备好提交您的签证申请了吗？',
    cardPortalDesc: '点击下方按钮，直接跳转至在线签证申请填写页面。',
    cardPortalBtn: '立即前往申请表格 →',
    cardEmergencyTitle: '需要紧急人工协助？',
    cardEmergencyDesc: '若您将在 24 小时内起飞或需要加急指导，请随时联系 24/7 客服团队。'
  },
  he: {
    badge: 'פורטל הגשת בקשה לויזה אלקטרונית לוייטנאם 2026',
    h1: 'כיצד להגיש בקשה לויזה אלקטרונית לוייטנאם: מדריך שלב אחר שלב',
    sapo: 'ברוכים הבאים למדריך הגשת הבקשה לויזה אלקטרונית לוייטנאם. וייטנאם מעניקה כעת ויזות של 30 ו-90 ימים לכל אזרחי העולם. המערכת שלנו בודקת את הדרכון והתמונה לפני ההגשה כדי להבטיח אישור מהיר תוך 1 עד 2 ימי עסקים.',
    badge190: 'כל 190+ המדינות',
    badgeValid: 'ויזת כניסה תקפה',
    badgeExpress: 'אפשרות אקספרס 1-2 ימים',
    ctaButton: 'מעבר לטופס הבקשה המקוון →',
    sslNote: 'קישור מאובטח להגשת בקשה מוצפן 256-bit SSL',
    workflowBadge: 'תהליך פשוט ב-4 שלבים',
    workflowTitle: '4 שלבים פשוטים להשלמת הבקשה',
    workflowSubtitle: 'בצע את השלבים בפורטל כדי להשלים את ההגשה תוך פחות מ-5 דקות.',
    step1Title: '1. בחירת סוג הויזה ודחיפות',
    step1Desc: 'בחר ויזה ל-30 או 90 ימים (כניסה בודדת/מרובה) ומהירות טיפול.',
    step1Tag: 'אקספרס זמין',
    step2Title: '2. הזנת פרטים ותמונה',
    step2Desc: 'הזן פרטי דרכון, תאריך הגעה והעלה תמונה וצילום דרכון.',
    step2Tag: 'אימות אוטומטי',
    step3Title: '3. בדיקה ותשלום',
    step3Desc: 'בדוק את הפרטים ושלם בבטחה באמצעות כרטיס אשראי, פייפאל או VietQR.',
    step3Tag: 'ללא עמלות נסתרות',
    step4Title: '4. קבלת קובץ הויזה במייל',
    step4Desc: 'מסמך האישור יישלח לכתובת הדוא"ל כקובץ PDF. הדפס והצג בהגעה.',
    step4Tag: 'קובץ PDF להדפסה',
    reqHeader: 'דרישות והנחיות',
    reqTitle: 'מסמכים נדרשים להגשת בקשה',
    reqSubtitle: 'וודא שהמסמכים שלך עומדים בקריטריונים הבאים לפני ההגשה.',
    doc1Title: 'דרכון בתוקף (מעל 6 חודשים)',
    doc1Desc: 'תקף לפחות 6 חודשים מיום ההגעה עם 2 דפים ריקים.',
    doc2Title: 'צילום ברור של עמוד הדרכון',
    doc2Desc: 'סריקה ברורה ללא החזרי אור או קצוות חתוכים.',
    doc3Title: 'תמונת פספורט (רקע לבן)',
    doc3Desc: 'תמונה צבעונית עדכנית בגודל 4x6 ס"מ על רקע לבן.',
    doc4Title: 'מעבר גבול מתוכנן',
    doc4Desc: 'בחר את נמל התעופה או מעבר הגבול המיועד.',
    cardPortalTitle: 'מוכן להגיש את הבקשה?',
    cardPortalDesc: 'לחץ למטה כדי לעבור למערכת הגשת הבקשות המקוונת.',
    cardPortalBtn: 'מעבר לטופס הבקשה →',
    cardEmergencyTitle: 'זקוק לסיוע חירום?',
    cardEmergencyDesc: 'אם אתם טסים תוך 24 שעות, צרו קשר עם מוקד החירום הפעיל 24/7.'
  },
  ko: {
    badge: '2026년 베트남 전자비자 온라인 신청 포털',
    h1: '베트남 전자비자 온라인 신청 방법: 단계별 신청 가이드',
    sapo: '베트남 전자비자(E-Visa) 온라인 신청 안내 가이드입니다. 베트남은 현재 모든 국가의 시민에게 30일 및 90일 단수/복수 전자비자를 발급합니다. 당사의 사전 검증 시스템이 여권 및 사진을 사전 확인하여 1~2 영업일 이내 신속한 발급을 지원합니다.',
    badge190: '전 세계 190+ 국가',
    badgeValid: '정식 입국 비자',
    badgeExpress: '1-2일 긴급 옵션',
    ctaButton: '온라인 신청서 작성하기 →',
    sslNote: '256비트 SSL 암호화 안전 신청 링크',
    workflowBadge: '간단한 4단계 절차',
    workflowTitle: '비자 신청 완료를 위한 4단계',
    workflowSubtitle: '온라인 포털에서 다음 단계를 따라 5분 이내에 비자 신청을 완료하세요.',
    step1Title: '1. 비자 종류 및 발급 속도 선택',
    step1Desc: '30일 또는 90일(단수/복수) 비자 및 발급 속도(일반/긴급)를 선택합니다.',
    step1Tag: '긴급 발급 가능',
    step2Title: '2. 신청 정보 입력 및 사진 업로드',
    step2Desc: '여권 정보, 입국 예정일을 입력하고 여권 면과 4x6 증명사진을 업로드합니다.',
    step2Tag: '자동 서류 검증',
    step3Title: '3. 정보 확인 및 안전 결제',
    step3Desc: '신청 내용을 꼼꼼히 확인한 후 신용카드, PayPal, VietQR 등으로 결제합니다.',
    step3Tag: '숨겨진 수수료 없음',
    step4Title: '4. 이메일로 전자비자 PDF 수령',
    step4Desc: '전자비자 승인서가 PDF 파일로 이메일 발송됩니다. 인쇄하여 입국 시 제출하세요.',
    step4Tag: '출력 가능한 PDF 파일',
    reqHeader: '신청 요건 및 준비 서류',
    reqTitle: '비자 신청 시 필요한 서류',
    reqSubtitle: '신청 전 서류가 다음 기준을 충족하는지 확인하세요.',
    doc1Title: '유효기간 6개월 이상 여권',
    doc1Desc: '입국 예정일 기준 최소 6개월 이상 남은 여권 및 여백 2면 이상 필요.',
    doc2Title: '선명한 여권 스캔본',
    doc2Desc: '빛 반사나 모서리 잘림이 없는 선명한 여권 스캔/사진.',
    doc3Title: '증명사진 (흰색 배경)',
    doc3Desc: '최근 6개월 이내 촬영한 흰색 배경의 4x6 cm 정면 사진.',
    doc4Title: '입국 예정 공항/항만/국경',
    doc4Desc: '도착 예정인 국제공항 또는 육로/해로 입국장을 정확히 선택하세요.',
    cardPortalTitle: '비자 신청서를 제출할 준비가 되셨나요?',
    cardPortalDesc: '아래 버튼을 클릭하면 온라인 신청서 작성 페이지로 이동합니다.',
    cardPortalBtn: '신청서 작성하러 가기 →',
    cardEmergencyTitle: '긴급 지원이 필요하신가요?',
    cardEmergencyDesc: '24시간 이내 출국이거나 긴급 안내가 필요하면 24/7 핫라인으로 문의하세요.'
  },
  es: {
    badge: 'PORTAL DE SOLICITUD DE E-VISA PARA VIETNAM EN LÍNEA 2026',
    h1: 'Cómo solicitar la e-Visa para Vietnam en línea: Guía paso a paso',
    sapo: 'Bienvenido a la guía del portal de solicitud de e-Visa para Vietnam. Vietnam otorga e-visas de 30 y 90 días (entrada única o múltiple) a ciudadanos de todos los países. Nuestro sistema revisa su pasaporte y foto antes del envío para garantizar su aprobación en 1 a 2 días hábiles.',
    badge190: 'Más de 190 nacionalidades',
    badgeValid: 'Visa de entrada válida',
    badgeExpress: 'Opción Exprés 1-2 Días',
    ctaButton: 'IR AL FORMULARIO EN LÍNEA →',
    sslNote: 'Enlace de envío directo con encriptación SSL de 256 bits',
    workflowBadge: 'FLUJO SIMPLE DE 4 PASOS',
    workflowTitle: '4 pasos sencillos para completar su solicitud',
    workflowSubtitle: 'Siga estos pasos en el portal para completar su solicitud en menos de 5 minutos.',
    step1Title: '1. Elegir tipo de visa y velocidad',
    step1Desc: 'Seleccione e-Visa de 30 o 90 días (entrada única/múltiple) y velocidad.',
    step1Tag: 'Express disponible',
    step2Title: '2. Ingresar datos y foto',
    step2Desc: 'Ingrese datos de pasaporte, fecha de llegada y suba su foto y pasaporte.',
    step2Tag: 'Validación automática',
    step3Title: '3. Revisar y pagar',
    step3Desc: 'Revise cuidadosamente los datos y pague de forma segura con tarjeta, PayPal o VietQR.',
    step3Tag: 'Sin cargos ocultos',
    step4Title: '4. Recibir e-Visa en PDF',
    step4Desc: 'El documento de e-Visa se envía a su correo en formato PDF. Simplemente imprímalo.',
    step4Tag: 'Archivo PDF imprimible',
    reqHeader: 'REQUISITOS Y DIRECTRICES',
    reqTitle: 'Documentos requeridos para la solicitud',
    reqSubtitle: 'Asegúrese de que sus documentos cumplan con los siguientes criterios.',
    doc1Title: 'Pasaporte válido (>6 meses)',
    doc1Desc: 'Validez mínima de 6 meses a partir de la llegada con 2 páginas en blanco.',
    doc2Title: 'Escaneo claro del pasaporte',
    doc2Desc: 'Escaneo o foto clara sin reflejos ni bordes cortados.',
    doc3Title: 'Foto de retrato (Fondo blanco)',
    doc3Desc: 'Foto reciente de 4x6 cm, de frente con fondo blanco.',
    doc4Title: 'Punto de entrada previsto',
    doc4Desc: 'Seleccione el aeropuerto o puerto de entrada correcto.',
    cardPortalTitle: '¿Listo para enviar su solicitud?',
    cardPortalDesc: 'Haga clic a continuación para ir al formulario de solicitud directa.',
    cardPortalBtn: 'Ir al formulario →',
    cardEmergencyTitle: '¿Necesita asistencia de emergencia?',
    cardEmergencyDesc: 'Si vuela en 24 horas o necesita orientación urgente, contáctenos 24/7.'
  }
};

export const ApplyOnlineGuideView: React.FC<ApplyOnlineGuideViewProps> = ({ currentLang }) => {
  const t = GUIDE_TRANSLATIONS[currentLang] || GUIDE_TRANSLATIONS.en;

  return (
    <div className="max-w-7xl mx-auto px-2.5 sm:px-8 py-4 sm:py-12 space-y-6 sm:space-y-10">
      {/* SEO ARTICLE HEADER & SAPO */}
      <article className="space-y-4 sm:space-y-6">
        {/* Category Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-200 text-indigo-700 text-[11px] sm:text-xs font-bold px-3 py-1 sm:px-4 sm:py-1.5 rounded-full shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
            <span className="truncate max-w-[280px] sm:max-w-none">
              {t.badge}
            </span>
          </div>
        </div>

        {/* H1 SEO Headline */}
        <h1 className="text-xl sm:text-4xl lg:text-5xl font-black text-slate-900 text-center tracking-tight leading-snug sm:leading-tight max-w-4xl mx-auto px-2">
          {t.h1}
        </h1>

        {/* SEO Sapo Paragraph */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5 sm:p-8 max-w-4xl mx-auto shadow-2xs">
          <p className="text-xs sm:text-lg text-slate-600 leading-normal sm:leading-relaxed font-normal text-left sm:text-center">
            {t.sapo}
          </p>

          <div className="mt-3 sm:mt-5 grid grid-cols-2 sm:flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 text-xs sm:text-sm font-bold text-slate-700">
            <span className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl border border-slate-200/80 shadow-2xs text-[11px] sm:text-xs">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
              <span className="truncate">{t.badge190}</span>
            </span>
            <span className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl border border-slate-200/80 shadow-2xs text-[11px] sm:text-xs">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
              <span className="truncate">{t.badgeValid}</span>
            </span>
            <span className="col-span-2 sm:col-span-1 flex items-center justify-center gap-1.5 bg-white px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl border border-slate-200/80 shadow-2xs text-[11px] sm:text-xs">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
              <span className="truncate">{t.badgeExpress}</span>
            </span>
          </div>
        </div>

        {/* CLEAN, COMPACT CTA BUTTON */}
        <div className="pt-1 sm:pt-2 flex flex-col items-center justify-center text-center space-y-2 sm:space-y-3 max-w-xl mx-auto px-1">
          <a
            href={APPLY_PORTAL_URL}
            target="_blank"
            rel="nofollow"
            className="w-full max-w-md sm:w-auto bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold sm:font-black text-xs sm:text-base px-5 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 border border-orange-500 cursor-pointer"
          >
            <span>{t.ctaButton}</span>
            <ExternalLink className="w-4 h-4 text-white shrink-0" />
          </a>

          <p className="text-[11px] sm:text-sm text-slate-500 font-medium inline-flex items-center justify-center gap-1.5 text-center leading-tight">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
            <span>{t.sslNote}</span>
          </p>
        </div>
      </article>

      {/* 4 STEP VISUAL GUIDE SECTION */}
      <section className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl border border-slate-200/90 p-3.5 sm:p-10 space-y-4 sm:space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-1 sm:space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 text-[10px] sm:text-xs font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
            <span>{t.workflowBadge}</span>
          </div>
          <h2 className="text-lg sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t.workflowTitle}
          </h2>
          <p className="text-xs sm:text-base text-slate-600 font-normal">
            {t.workflowSubtitle}
          </p>
        </div>

        {/* 4 Steps 2-Column Grid on Mobile, 4-Column on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {/* Step 1 */}
          <div className="bg-slate-50/90 rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-slate-200/90 hover:border-indigo-400 transition-all space-y-2 sm:space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-indigo-600 text-white font-black text-xs sm:text-base flex items-center justify-center shadow-2xs">
                1
              </div>
              <div className="space-y-1">
                <h3 className="text-xs sm:text-base font-extrabold text-slate-900 leading-tight">
                  {t.step1Title}
                </h3>
                <p className="text-[11px] sm:text-sm text-slate-600 leading-normal font-normal">
                  {t.step1Desc}
                </p>
              </div>
            </div>
            <div className="pt-1 text-[10px] sm:text-xs font-bold text-indigo-700 flex items-center gap-1">
              <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500 fill-amber-500 shrink-0" />
              <span className="truncate">{t.step1Tag}</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-slate-50/90 rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-slate-200/90 hover:border-indigo-400 transition-all space-y-2 sm:space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-indigo-600 text-white font-black text-xs sm:text-base flex items-center justify-center shadow-2xs">
                2
              </div>
              <div className="space-y-1">
                <h3 className="text-xs sm:text-base font-extrabold text-slate-900 leading-tight">
                  {t.step2Title}
                </h3>
                <p className="text-[11px] sm:text-sm text-slate-600 leading-normal font-normal">
                  {t.step2Desc}
                </p>
              </div>
            </div>
            <div className="pt-1 text-[10px] sm:text-xs font-bold text-indigo-700 flex items-center gap-1">
              <Upload className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-indigo-600 shrink-0" />
              <span className="truncate">{t.step2Tag}</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-slate-50/90 rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-slate-200/90 hover:border-indigo-400 transition-all space-y-2 sm:space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-indigo-600 text-white font-black text-xs sm:text-base flex items-center justify-center shadow-2xs">
                3
              </div>
              <div className="space-y-1">
                <h3 className="text-xs sm:text-base font-extrabold text-slate-900 leading-tight">
                  {t.step3Title}
                </h3>
                <p className="text-[11px] sm:text-sm text-slate-600 leading-normal font-normal">
                  {t.step3Desc}
                </p>
              </div>
            </div>
            <div className="pt-1 text-[10px] sm:text-xs font-bold text-indigo-700 flex items-center gap-1">
              <CreditCard className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 shrink-0" />
              <span className="truncate">{t.step3Tag}</span>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-slate-50/90 rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-slate-200/90 hover:border-indigo-400 transition-all space-y-2 sm:space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-indigo-600 text-white font-black text-xs sm:text-base flex items-center justify-center shadow-2xs">
                4
              </div>
              <div className="space-y-1">
                <h3 className="text-xs sm:text-base font-extrabold text-slate-900 leading-tight">
                  {t.step4Title}
                </h3>
                <p className="text-[11px] sm:text-sm text-slate-600 leading-normal font-normal">
                  {t.step4Desc}
                </p>
              </div>
            </div>
            <div className="pt-1 text-[10px] sm:text-xs font-bold text-indigo-700 flex items-center gap-1">
              <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600 shrink-0" />
              <span className="truncate">{t.step4Tag}</span>
            </div>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS & PREPARATION CHECKLIST SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-start">
        {/* Left Column: Requirements (2-Column Grid on Mobile) */}
        <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-8 border border-slate-200/90 shadow-lg sm:shadow-xl space-y-3 sm:space-y-6">
          <div className="space-y-0.5 sm:space-y-1 border-b border-slate-100 pb-2.5 sm:pb-4">
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-indigo-600 block">
              {t.reqHeader}
            </span>
            <h2 className="text-base sm:text-2xl font-extrabold text-slate-900">
              {t.reqTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-normal">
              {t.reqSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-4">
            <div className="flex flex-col sm:flex-row items-start gap-1.5 sm:gap-3 bg-slate-50/90 p-2.5 sm:p-4 rounded-xl border border-slate-200/80">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold sm:font-extrabold text-slate-900 text-xs sm:text-base leading-snug">
                  {t.doc1Title}
                </h3>
                <p className="text-slate-600 text-[11px] sm:text-sm mt-0.5 sm:mt-1 leading-normal font-normal">
                  {t.doc1Desc}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-1.5 sm:gap-3 bg-slate-50/90 p-2.5 sm:p-4 rounded-xl border border-slate-200/80">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold sm:font-extrabold text-slate-900 text-xs sm:text-base leading-snug">
                  {t.doc2Title}
                </h3>
                <p className="text-slate-600 text-[11px] sm:text-sm mt-0.5 sm:mt-1 leading-normal font-normal">
                  {t.doc2Desc}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-1.5 sm:gap-3 bg-slate-50/90 p-2.5 sm:p-4 rounded-xl border border-slate-200/80">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold sm:font-extrabold text-slate-900 text-xs sm:text-base leading-snug">
                  {t.doc3Title}
                </h3>
                <p className="text-slate-600 text-[11px] sm:text-sm mt-0.5 sm:mt-1 leading-normal font-normal">
                  {t.doc3Desc}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-1.5 sm:gap-3 bg-slate-50/90 p-2.5 sm:p-4 rounded-xl border border-slate-200/80">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold sm:font-extrabold text-slate-900 text-xs sm:text-base leading-snug">
                  {t.doc4Title}
                </h3>
                <p className="text-slate-600 text-[11px] sm:text-sm mt-0.5 sm:mt-1 leading-normal font-normal">
                  {t.doc4Desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Emergency Assistance & Redirect Card */}
        <div className="lg:col-span-5 space-y-3 sm:space-y-6">
          {/* Card: Direct Apply Redirect */}
          <div className="bg-slate-900 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-lg sm:shadow-xl space-y-3 sm:space-y-5 border border-slate-800">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 bg-indigo-500/20 text-indigo-300 text-[10px] sm:text-xs font-extrabold px-2.5 py-0.5 rounded-full border border-indigo-500/30">
                <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>ONLINE FORM ACCESS</span>
              </div>
              <h3 className="text-lg sm:text-2xl font-black text-white">
                {t.cardPortalTitle}
              </h3>
              <p className="text-xs sm:text-base text-slate-300 leading-normal font-normal">
                {t.cardPortalDesc}
              </p>
            </div>

            <a
              href={APPLY_PORTAL_URL}
              target="_blank"
              rel="nofollow"
              className="w-full bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-extrabold text-xs sm:text-base py-3 px-4 rounded-xl sm:rounded-2xl shadow transition-all flex items-center justify-center gap-2 cursor-pointer border border-orange-500"
            >
              <span>{t.cardPortalBtn}</span>
              <ExternalLink className="w-4 h-4 text-white shrink-0" />
            </a>

            <div className="pt-2 border-t border-slate-800 text-[11px] sm:text-xs text-slate-400 space-y-1">
              <p className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">Target: https://vietnamvisa.govt.vn/apply-online</span>
              </p>
            </div>
          </div>

          {/* Card: Need Immediate Assistance? */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 space-y-2 sm:space-y-3">
            <div className="flex items-center gap-2 text-amber-900 font-extrabold text-xs sm:text-base">
              <Phone className="w-4 h-4 text-amber-700 shrink-0" />
              <span>{t.cardEmergencyTitle}</span>
            </div>
            <p className="text-xs sm:text-sm text-amber-950/80 leading-normal font-normal">
              {t.cardEmergencyDesc}
            </p>
            <div className="pt-0.5">
              <a
                href="https://wa.me/84832320320"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-3.5 py-2 rounded-xl shadow transition-colors"
              >
                <span>WhatsApp: +84 832 320 320</span>
                <ExternalLink className="w-3 h-3 text-emerald-200 shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

