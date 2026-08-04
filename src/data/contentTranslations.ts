import { Language } from '../types';

export interface OverviewTranslation {
  badge: string;
  title: string;
  subtitle: string;
  
  sec1Title: string;
  sec1Body1: string;
  sec1Body2: string;
  
  sec2Title: string;
  sec2Body1: string;
  sec2Body2: string;

  sec3Title: string;
  sec3Sub: string;
  types: {
    t30sTitle: string;
    t30sDesc: string;
    t30mTitle: string;
    t30mDesc: string;
    t90sTitle: string;
    t90sDesc: string;
    t90mTitle: string;
    t90mDesc: string;
  };

  sec4Title: string;
  sec4Sub: string;
  govFeeTitle: string;
  govFeeDesc: string;
  serviceFeeTitle: string;
  serviceFeeDesc: string;

  sec5Title: string;
  sec5Sub: string;
  airportsLabel: string;
  landPortsLabel: string;
  seaPortsLabel: string;

  sec6Title: string;
  sec6Sub: string;

  sec7Title: string;
  rule1Title: string;
  rule1Desc: string;
  rule2Title: string;
  rule2Desc: string;
  rule3Title: string;
  rule3Desc: string;
  rule4Title: string;
  rule4Desc: string;
}

export const OVERVIEW_TRANSLATIONS: Record<Language, OverviewTranslation> = {
  en: {
    badge: 'Vietnam eVisa Overview 2026',
    title: 'What Is a Vietnam eVisa?',
    subtitle: 'Comprehensive guide to Vietnam electronic visa regulations, duration options, fee breakdowns, and the expanded list of 83 entry checkpoints.',
    sec1Title: 'What Is a Vietnam eVisa?',
    sec1Body1: 'The Vietnam eVisa is an electronic visa issued by Vietnam Immigration Department and sent directly to your email as a downloadable PDF certificate. There is no physical stamp or sticker required in your passport before flying. Customs officers scan the QR code on your printed or mobile eVisa, match it against your passport, and grant entry.',
    sec1Body2: 'Under Resolution 127/NQ-CP and Resolution 389/NQ-CP, the eVisa program is available to citizens of all 195+ countries and territories worldwide. It allows entry through 83 international entry checkpoints across Vietnam, including 17 international airports, 22 land border gates, and 44 seaports.',
    sec2Title: 'Who Needs a Vietnam eVisa?',
    sec2Body1: 'Citizens from visa-exempt countries (such as 12 European nations, UK, Japan, South Korea, Russia, and ASEAN members) can enter visa-free for 14 to 45 days. For longer stays or for citizens of all other countries (including United States, Canada, Australia, China, India, Israel), a Vietnam eVisa is mandatory.',
    sec2Body2: 'Even visa-exempt travelers frequently apply for an eVisa if they plan to stay longer than their visa-free period (e.g. 90 days) or require multiple entries to explore neighboring countries like Laos, Cambodia, or Thailand.',
    sec3Title: '4 Official Vietnam eVisa Categories',
    sec3Sub: 'Travelers can select from four official visa validity options depending on their itinerary requirements:',
    types: {
      t30sTitle: '30-Day Single Entry',
      t30sDesc: 'Valid for up to 30 continuous days. Once you leave Vietnam, the visa expires automatically.',
      t30mTitle: '30-Day Multiple Entry',
      t30mDesc: 'Valid for 30 days, allowing unlimited exits and re-entries during the 30-day period.',
      t90sTitle: '90-Day Single Entry',
      t90sDesc: 'Ideal for extended vacations or business assignments up to 3 continuous months.',
      t90mTitle: '90-Day Multiple Entry',
      t90mDesc: 'Maximum flexibility for frequent travelers and digital nomads exploring Southeast Asia for up to 90 days.'
    },
    sec4Title: 'Official Fee Breakdown & Pricing Structure',
    sec4Sub: 'Understanding government stamping fees vs expedited processing service fees:',
    govFeeTitle: 'Government Stamping Fee',
    govFeeDesc: 'Paid directly to Vietnam Treasury ($25 USD for Single Entry, $50 USD for Multiple Entry). Non-refundable by government rules.',
    serviceFeeTitle: 'Facilitation & Service Fee',
    serviceFeeDesc: 'Covers application review, document formatting, error prevention, 24/7 hotline support, and expedited processing (urgent 24h / super urgent 1-4h).',
    sec5Title: '83 Approved Ports of Entry',
    sec5Sub: 'You can enter Vietnam through any of these officially designated international entry checkpoints:',
    airportsLabel: 'Airports (17 Checkpoints)',
    landPortsLabel: 'Land Border Gates (22 Checkpoints)',
    seaPortsLabel: 'Seaports (44 Checkpoints)',
    sec6Title: '4-Step Online Application Process',
    sec6Sub: 'Get your official Vietnam eVisa approved in 4 easy steps:',
    sec7Title: 'Crucial Passport & Photo Compliance Rules',
    rule1Title: 'Passport Validity Requirement',
    rule1Desc: 'Your passport must have at least 6 months of remaining validity beyond your planned arrival date in Vietnam, with at least 2 blank pages.',
    rule2Title: 'Portrait Photo Specifications',
    rule2Desc: 'Upload a clear 4x6cm photo taken within the last 6 months against a white background. No glasses, hats, or headwear (except religious headwear).',
    rule3Title: 'Passport Bio Page Scan',
    rule3Desc: 'Full color scan of your passport information page showing all 4 corners and the full 2-line ICAO MRZ code clearly readable.',
    rule4Title: 'Port of Entry Accuracy',
    rule4Desc: 'Your entry checkpoint must match the port specified on your approved eVisa. You can enter through a different airport only if approved by border authorities.'
  },

  vi: {
    badge: 'Tổng Quan E-Visa Việt Nam 2026',
    title: 'Thị Thực Điện Tử (E-Visa) Việt Nam Là Gì?',
    subtitle: 'Hướng dẫn toàn diện về quy định cấp eVisa Việt Nam, các loại thời hạn, bảng phí dịch vụ và danh sách 83 cửa khẩu nhập cảnh mới nhất.',
    sec1Title: 'Khái Niệm Về E-Visa Việt Nam',
    sec1Body1: 'E-Visa (Thị thực điện tử) Việt Nam là loại thị thực do Cục Quản lý Xuất nhập cảnh cấp dưới dạng file PDF gửi qua email. Người nước ngoài không cần dán tem visa hay đến Đại sứ quán/Lãnh sự quán. Khi nhập cảnh, cán bộ xuất nhập cảnh quét mã QR trên bản in hoặc màn hình điện thoại để cho phép nhập cảnh.',
    sec1Body2: 'Theo Nghị quyết 127/NQ-CP và Nghị quyết 389/NQ-CP, chính phủ Việt Nam cấp e-Visa cho công dân tất cả các quốc gia và vùng lãnh thổ trên thế giới với 83 cửa khẩu quốc tế được phép nhập cảnh (17 sân bay, 22 cửa khẩu đường bộ, 44 cảng biển).',
    sec2Title: 'Ai Cần Xin E-Visa Việt Nam?',
    sec2Body1: 'Công dân các nước được miễn thị thực (như 12 nước Châu Âu, Anh, Nhật Bản, Hàn Quốc, Nga và các nước ASEAN) được nhập cảnh miễn phí từ 14 đến 45 ngày. Công dân các quốc gia khác (Mỹ, Canada, Úc, Trung Quốc, Ấn Độ, Israel...) hoặc người muốn ở lâu hơn bắt buộc phải có E-Visa trước khi bay.',
    sec2Body2: 'Nhiều du khách thuộc diện miễn thị thực vẫn chọn xin e-Visa 90 ngày nhiều lần để thoải mái du lịch xuyên Việt và kết hợp đi Lào, Campuchia, Thái Lan rồi quay lại Việt Nam.',
    sec3Title: '4 Loại E-Visa Việt Nam Chính Thức',
    sec3Sub: 'Tùy theo lịch trình chuyến đi, bạn có thể lựa chọn 1 trong 4 loại E-Visa sau:',
    types: {
      t30sTitle: '30 Ngày 1 Lần Nhập Cảnh',
      t30sDesc: 'Cho phép lưu trú tối đa 30 ngày liên tục. Khi xuất cảnh khỏi Việt Nam, visa tự động hết hiệu lực.',
      t30mTitle: '30 Ngày Nhiều Lần Nhập Cảnh',
      t30mDesc: 'Cho phép ra vào Việt Nam không giới hạn số lần trong thời hạn 30 ngày.',
      t90sTitle: '90 Ngày 1 Lần Nhập Cảnh',
      t90sDesc: 'Thích hợp cho các chuyến du lịch dài ngày, thăm thân hoặc công tác đến 3 tháng.',
      t90mTitle: '90 Ngày Nhiều Lần Nhập Cảnh',
      t90mDesc: 'Lựa chọn tối ưu cho doanh nhân và du khách muốn tự do di chuyển giữa Việt Nam và các nước Đông Nam Á.'
    },
    sec4Title: 'Cấu Trúc Lệ Phí & Chi Phí Xử Lý Hồ Sơ',
    sec4Sub: 'Phân biệt lệ phí nhà nước bắt buộc và phí dịch vụ tư vấn xử lý hồ sơ:',
    govFeeTitle: 'Lệ Phí Nhà Nước (Government Fee)',
    govFeeDesc: 'Nộp trực tiếp vào Kho bạc Nhà nước ($25 USD cho loại 1 lần, $50 USD cho loại nhiều lần). Không hoàn lại theo quy định xuất nhập cảnh.',
    sec5Title: 'Danh Sách 83 Cửa Khẩu Được Phép Nhập Cảnh',
    sec5Sub: 'Bạn có thể nhập cảnh Việt Nam qua bất kỳ cửa khẩu quốc tế nào dưới đây:',
    serviceFeeTitle: 'Phí Dịch Vụ & Xử Lý Khẩn',
    serviceFeeDesc: 'Bao gồm kiểm tra hồ sơ, chỉnh sửa định dạng ảnh, hỗ trợ 24/7 và xử lý hồ sơ khẩn (24h) hoặc siêu khẩn (1h - 4h).',
    airportsLabel: 'Sân Bay Quốc Tế (17 Cửa Khẩu)',
    landPortsLabel: 'Cửa Khẩu Đường Bộ (22 Cửa Khẩu)',
    seaPortsLabel: 'Cảng Biển Quốc Tế (44 Cửa Khẩu)',
    sec6Title: 'Quy Trình 4 Bước Xin E-Visa Trực Tuyến',
    sec6Sub: 'Nhận E-Visa Việt Nam hợp lệ chỉ với 4 bước đơn giản:',
    sec7Title: 'Quy Định Bắt Buộc Về Hộ Chiếu & Ảnh',
    rule1Title: 'Thời Hạn Hộ Chiếu',
    rule1Desc: 'Hộ chiếu phải còn hạn ít nhất 6 tháng tính từ ngày dự kiến nhập cảnh Việt Nam và còn tối thiểu 2 trang trống.',
    rule2Title: 'Quy Định Ảnh Chân Dùng',
    rule2Desc: 'Chụp trong vòng 6 tháng gần nhất, phông nền trắng, rõ mặt, không đeo kính râm hay đội mũ.',
    rule3Title: 'Ảnh Trang Thông Tin Hộ Chiếu',
    rule3Desc: 'Chụp hoặc scan rõ nét 4 góc, đầy đủ 2 dòng mã ICAO MRZ ở đáy trang.',
    rule4Title: 'Đúng Cửa Khẩu Nhập Cảnh',
    rule4Desc: 'Nhập cảnh đúng cửa khẩu đã khai báo trên E-Visa. Nếu thay đổi sân bay cần liên hệ hỗ trợ điều chỉnh.'
  },

  fr: {
    badge: 'Aperçu e-Visa Vietnam 2026',
    title: 'Qu\'est-ce que l\'e-Visa pour le Vietnam ?',
    subtitle: 'Guide complet sur les réglementations du visa électronique vietnamien, les options de durée, les frais et les 83 points de contrôle d\'entrée.',
    sec1Title: 'Concept de l\'e-Visa Vietnam',
    sec1Body1: 'L\'e-Visa pour le Vietnam est un visa électronique délivré par le Département de l\'Immigration du Vietnam et envoyé sous forme de document PDF par e-mail. Aucune vignette dans le passeport n\'est nécessaire. À l\'arrivée, les agents de l\'immigration scannent le code QR de votre e-Visa.',
    sec1Body2: 'Conformément aux résolutions 127/NQ-CP et 389/NQ-CP, l\'e-Visa est accessible aux citoyens de tous les pays du monde. Il permet d\'entrer par 83 points de contrôle internationaux (17 aéroports, 22 frontières terrestres et 44 ports maritimes).',
    sec2Title: 'Qui a besoin d\'un e-Visa ?',
    sec2Body1: 'Les citoyens bénéficiant d\'une exemption de visa (France, Allemagne, Italie, Espagne, Royaume-Uni, Japon, Corée du Sud, etc.) peuvent séjourner sans visa jusqu\'à 45 jours. Pour les autres nationalités ou pour des séjours plus longs, l\'e-Visa est obligatoire.',
    sec2Body2: 'De nombreux voyageurs dispensés de visa choisissent néanmoins l\'e-Visa de 90 jours à entrées multiples pour explorer les pays voisins comme le Laos ou le Cambodge.',
    sec3Title: '4 Catégories d\'e-Visa Officiels',
    sec3Sub: 'Choisissez parmi 4 options de validité selon votre itinéraire :',
    types: {
      t30sTitle: '30 Jours Entrée Unique',
      t30sDesc: 'Valable pour un séjour continu jusqu\'à 30 jours. Expire dès que vous quittez le pays.',
      t30mTitle: '30 Jours Entrées Multiples',
      t30mDesc: 'Permet des entrées et sorties illimitées pendant une période de 30 jours.',
      t90sTitle: '90 Jours Entrée Unique',
      t90sDesc: 'Idéal pour des vacances prolongées ou un voyage d\'affaires allant jusqu\'à 3 mois.',
      t90mTitle: '90 Jours Entrées Multiples',
      t90mDesc: 'Flexibilité maximale pour voyager entre le Vietnam et l\'Asie du Sud-Est.'
    },
    sec4Title: 'Structure des Frais et Tarification',
    sec4Sub: 'Détail des frais gouvernementaux et des frais de service express :',
    govFeeTitle: 'Frais Gouvernementaux',
    govFeeDesc: '25 $ USD pour entrée unique, 50 $ USD pour entrées multiples (non remboursables).',
    serviceFeeTitle: 'Frais de Service et Traitement Urgent',
    serviceFeeDesc: 'Inclus la révision des documents, la correction des photos, l\'assistance 24/7 et le traitement d\'urgence (24h ou 1-4h).',
    sec5Title: '83 Points d\'Entrée Autorisés',
    sec5Sub: 'Vous pouvez entrer par l\'un de ces points de contrôle internationaux :',
    airportsLabel: 'Aéroports Internationaux (17)',
    landPortsLabel: 'Postes Frontaliers Terrestres (22)',
    seaPortsLabel: 'Ports Maritimes (44)',
    sec6Title: 'Procédure en 4 Étapes',
    sec6Sub: 'Obtenez votre e-Visa en 4 étapes simples :',
    sec7Title: 'Exigences Relatives au Passeport et Photos',
    rule1Title: 'Validité du Passeport',
    rule1Desc: 'Au moins 6 mois de validité après la date d\'arrivée et au moins 2 pages vierges.',
    rule2Title: 'Normes de la Photo d\'Identité',
    rule2Desc: 'Photo récente 4x6cm sur fond blanc, sans lunettes ni couvre-chef.',
    rule3Title: 'Scan du Passeport',
    rule3Desc: 'Copie couleur nette montrant les 4 coins et la zone de lecture optique (MRZ).',
    rule4Title: 'Point d\'Entrée Correct',
    rule4Desc: 'Entrée obligatoire par le point de contrôle mentionné sur votre e-Visa.'
  },

  de: {
    badge: 'Vietnam e-Visum Übersicht 2026',
    title: 'Was ist ein Vietnam e-Visum?',
    subtitle: 'Vollständiger Leitfaden zum elektronischen Visum für Vietnam, Gültigkeitsdauer, Gebühren und 83 Einreise-Grenzübergängen.',
    sec1Title: 'Das Konzept des e-Visums',
    sec1Body1: 'Das Vietnam e-Visum ist ein elektronisches Visum der vietnamesischen Einwanderungsbehörde, das direkt als PDF per E-Mail zugestellt wird. Kein Visumstempel im Pass vorab erforderlich. Bei der Ankunft scannen die Grenzbeamten den QR-Code Ihres Dokuments.',
    sec1Body2: 'Gemäß den Beschlüssen 127/NQ-CP und 389/NQ-CP steht das e-Visum Staatsbürgern aller Länder weltweit zur Verfügung für 83 zugelassene Einreiseorte (17 Flughäfen, 22 Landgrenzen, 44 Seehäfen).',
    sec2Title: 'Wer benötigt ein e-Visum?',
    sec2Body1: 'Staatsbürger aus visumfreien Ländern (z.B. Deutschland, Frankreich, Italien, Spanien, Japan, Südkorea) können bis zu 45 Tage visumfrei einreisen. Für längere Aufenthalte oder für Bürger anderer Länder (z.B. USA, Kanada, Australien) ist ein e-Visum erforderlich.',
    sec2Body2: 'Viele Reisende nutzen das 90-Tage-Visum mit mehrfacher Einreise, um flexibel Nachbarländer wie Laos oder Kambodscha zu besuchen.',
    sec3Title: '4 Offizielle Visum-Kategorien',
    sec3Sub: 'Wählen Sie aus 4 Gültigkeitsoptionen für Ihre Reise:',
    types: {
      t30sTitle: '30 Tage Einmalige Einreise',
      t30sDesc: 'Gültig für bis zu 30 zusammenhängende Tage.',
      t30mTitle: '30 Tage Mehrfache Einreise',
      t30mDesc: 'Beliebige Ein- und Ausreisen innerhalb von 30 Tagen.',
      t90sTitle: '90 Tage Einmalige Einreise',
      t90sDesc: 'Ideal für längere Urlaube oder Geschäftsreisen bis zu 3 Monaten.',
      t90mTitle: '90 Tage Mehrfache Einreise',
      t90mDesc: 'Maximale Flexibilität für Rundreisen in Südostasien.'
    },
    sec4Title: 'Gebührenstruktur & Aufschlüsselung',
    sec4Sub: 'Unterscheidung zwischen Staatsgebühren und Eilservice-Gebühren:',
    govFeeTitle: 'Staatliche Visumgebühr',
    govFeeDesc: '25 USD für einmalige Einreise, 50 USD für mehrfache Einreise.',
    serviceFeeTitle: 'Service- & Eilbearbeitungsgebühr',
    serviceFeeDesc: 'Beinhaltet Antragsprüfung, Fotokorrektur, 24/7 Support und Expressausstellung (24h oder 1-4h).',
    sec5Title: '83 Zugelassene Einreiseorte',
    sec5Sub: 'Einreise über alle 83 internationalen Grenzübergänge möglich:',
    airportsLabel: 'Internationale Flughäfen (17)',
    landPortsLabel: 'Landgrenzübergänge (22)',
    seaPortsLabel: 'Seehäfen (44)',
    sec6Title: 'Online-Beantragung in 4 Schritten',
    sec6Sub: 'In 4 einfachen Schritten zum genehmigten Visum:',
    sec7Title: 'Wichtige Pass- & Fotovorschriften',
    rule1Title: 'Passgültigkeit',
    rule1Desc: 'Mindestens 6 Monate Restgültigkeit ab Einreisedatum und 2 freie Seiten.',
    rule2Title: 'Passfoto-Bestimmungen',
    rule2Desc: 'Aktuelles Foto 4x6cm auf weißem Hintergrund, ohne Brille.',
    rule3Title: 'Passkopie-Scan',
    rule3Desc: 'Farbiger Scan der Passseite inklusive des zweizeiligen MRZ-Codes.',
    rule4Title: 'Korrektes Einreisetor',
    rule4Desc: 'Einreise muss über den im Visum angegebenen Grenzübergang erfolgen.'
  },

  ja: {
    badge: 'ベトナム e-Visa 概要 2026',
    title: 'ベトナム e-Visa（電子ビザ）とは？',
    subtitle: 'ベトナム電子ビザの制度、有効期間の種類、料金体系、全83箇所の対象入国ポートの完全ガイド。',
    sec1Title: 'ベトナム e-Visa の概要',
    sec1Body1: 'ベトナムe-Visaは出入国管理局が発行する電子ビザで、PDF形式でメール送信されます。パスポートへの事前シール貼り付けは不要です。入国審査で印刷したQRコードを提示して入国します。',
    sec1Body2: '決議127/NQ-CPおよび決議389/NQ-CPに基づき、世界すべての国・地域の市民が対象となり、全83箇所の国際ポート（空港17、陸路22、港湾44）で利用可能です。',
    sec2Title: 'e-Visaが必要な方',
    sec2Body1: '日本、韓国、英国、フランス、ドイツなどのビザ免除国籍者は45日間までビザなし滞在が可能です。45日を超える滞在や、米国、カナダ、オーストラリア等の国籍者はe-Visa申請が必要です。',
    sec2Body2: '免除国籍の方でも、90日間の数次（マルチプル）e-Visaを取得することで、ラオスやカンボジアへの周遊旅行がスムーズになります。',
    sec3Title: '4つのビザ区分',
    sec3Sub: '旅程に合わせて4種類の有効期間から選択できます：',
    types: {
      t30sTitle: '30日間・一次有効（シングル）',
      t30sDesc: '最長30日間の連続滞在が可能。出国時点で失効します。',
      t30mTitle: '30日間・数次有効（マルチ）',
      t30mDesc: '30日間の有効期間内であれば何度でも出入国可能。',
      t90sTitle: '90日間・一次有効（シングル）',
      t90sDesc: '最長3ヶ月間の長期滞在やビジネスに最適。',
      t90mTitle: '90日間・数次有効（マルチ）',
      t90mDesc: '東南アジア周遊やノマドワーカーに最適な最長90日マルチビザ。'
    },
    sec4Title: '料金体系と内訳',
    sec4Sub: '政府納付金と特急代行手数料の説明：',
    govFeeTitle: '政府ビザ発給手数料',
    govFeeDesc: 'シングル25USドル、マルチ50USドル（返金不可）。',
    serviceFeeTitle: '代行・緊急サポート手数料',
    serviceFeeDesc: '書類確認、写真補正、24時間サポート、緊急発給（24時間以内/1〜4時間）を含む。',
    sec5Title: '83箇所の対象入国ポート',
    sec5Sub: '以下の国際入国ポートからベトナムへ入国可能です：',
    airportsLabel: '国際空港 (17箇所)',
    landPortsLabel: '陸路国境 (22箇所)',
    seaPortsLabel: '国際港湾 (44箇所)',
    sec6Title: 'オンライン申請 4ステップ',
    sec6Sub: '簡単4ステップでe-Visaを取得：',
    sec7Title: 'パスポート・写真の必須規定',
    rule1Title: 'パスポート有効期限',
    rule1Desc: 'ベトナム入国時点で6ヶ月以上の残存期間と未使用2ページ以上が必要です。',
    rule2Title: '証明写真の規定',
    rule2Desc: '6ヶ月以内に撮影した背景白の4x6cm写真。眼鏡着用不可。',
    rule3Title: 'パスポート画像',
    rule3Desc: '顔写真ページ全体とMRZコードが鮮明に見えるカラー画像。',
    rule4Title: '指定入国ポート',
    rule4Desc: 'ビザ記載の指定ポートから入国してください。'
  },

  zh: {
    badge: '2026 越南电子签证概览',
    title: '什么是越南电子签证（e-Visa）？',
    subtitle: '全面了解越南电子签证政策、有效期分类、费用构成及全境 83 个入境口岸指南。',
    sec1Title: '电子签证概念',
    sec1Body1: '越南电子签证（e-Visa）是由越南出入境管理局通过电子系统签发的官方签证，以 PDF 形式发送至申请人邮箱。无需寄送护照或前往使领馆，入境时只需出示打印件或手机上的二维码即可。',
    sec1Body2: '根据第 127/NQ-CP 和第 389/NQ-CP 号决议，越南电子签证面向全球所有国家和地区公民开放，支持通过 83 个国际口岸入境（包括 17 个机场、22 个陆路口岸和 44 个海港）。',
    sec2Title: '谁需要申请电子签证？',
    sec2Body1: '免签国家（如日本、韩国、英国、法国、德国等）公民可免签停留 14 至 45 天。中国、美国、加拿大、澳大利亚、印度等国护照持有人或计划停留超过 45 天者，均需提前申请 e-Visa。',
    sec2Body2: '许多免签游客也选择申请 90 天多次入境 e-Visa，以便自由前往老挝、柬埔寨或泰国后再返回越南。',
    sec3Title: '4 种官方电子签证类型',
    sec3Sub: '根据您的行程安排，可选择以下 4 种签证类型：',
    types: {
      t30sTitle: '30 天单次入境',
      t30sDesc: '最长可停留 30 天，离境后签证即自动失效。',
      t30mTitle: '30 天多次入境',
      t30mDesc: '在 30 天有效期内可不限次数多次往返越南。',
      t90sTitle: '90 天单次入境',
      t90sDesc: '适合长达 3 个月的深度游或商务考察。',
      t90mTitle: '90 天多次入境',
      t90mDesc: '为频繁往返东南亚的商务人士和数字游民提供最大便利。'
    },
    sec4Title: '费用构成与明细',
    sec4Sub: '政府规费与加急服务费说明：',
    govFeeTitle: '政府签证规费',
    govFeeDesc: '单次入境 25 美元，多次入境 50 美元（移民局规定不予退还）。',
    serviceFeeTitle: '代办与加急服务费',
    serviceFeeDesc: '包含材料审核、照片合规处理、24/7 客服及加急（24小时）或特急（1-4小时）加急办理。',
    sec5Title: '83 个官方入境口岸',
    sec5Sub: '您可以通过以下任意一个国际口岸入境越南：',
    airportsLabel: '国际机场（17 个）',
    landPortsLabel: '陆路口岸（22 个）',
    seaPortsLabel: '海港口岸（44 个）',
    sec6Title: '4 步在线申请流程',
    sec6Sub: '轻松 4 步即可获得越南电子签证：',
    sec7Title: '护照与照片关键规范',
    rule1Title: '护照有效期要求',
    rule1Desc: '护照有效期须自入境之日起不少于 6 个月，且至少留有 2 页空白页。',
    rule2Title: '证件照规范',
    rule2Desc: '近 6 个月内拍摄的 4x6cm 白底彩色照片，请勿佩戴眼镜或帽子。',
    rule3Title: '护照资料页扫描件',
    rule3Desc: '清晰无遮挡的彩色扫描件，须完整显示护照下方 2 行 MRZ 机读码。',
    rule4Title: '入境口岸一致性',
    rule4Desc: '请务必从电子签证上注明的入境口岸入境。'
  },

  he: {
    badge: 'סקירת ויזה לוייטנאם 2026',
    title: 'מהי ויזה אלקטרונית (e-Visa) לוייטנאם?',
    subtitle: 'מדריך מקיף לתקנות הוויזה האלקטרונית לוייטנאם, סוגי התוקף, עלויות ו-83 מעברי הגבול المורשים.',
    sec1Title: 'מהות הוויזה האלקטרונית',
    sec1Body1: 'ויזה אלקטרונית (e-Visa) לוייטנאם היא אישור כניסה רשמי המונפק על ידי רשות ההגירה של וייטנאם ונשלח כקובץ PDF למייל. אין צורך בהטבעת מדבקה בדרכון מראש. בעת הנחיתה, פקידי ההגירה סורקים את קוד ה-QR.',
    sec1Body2: 'לפי החלטות 127/NQ-CP ו-389/NQ-CP, הוויזה זמינה לאזרחי כל מדינות העולם ומוכרת ב-83 מעברי גבול בינלאומיים (17 שדות תעופה, 22 מעברים יבשתיים ו-44 נמלים).',
    sec2Title: 'מי צריך ויזה לוייטנאם?',
    sec2Body1: 'אזרחים ממדינות הפטורות מוויזה (כגון יפן, דרום קוריאה, בריטניה, צרפת, גרמניה) זכאים לשהייה של עד 45 ימים. לבעלי דרכון ישראלי, אמריקאי, קנדי, אוסטרלי ואחרים - הוויזה חובה מראש.',
    sec2Body2: 'גם נוסעים הפטורים מוויזה בוחרים לעיתים בוויזה ל-90 ימים עם כניסות מרובות כדי לטייל בלאוס, קמבודיה או תאילנד ולחזור לוייטנאם.',
    sec3Title: '4 קטגוריות ויזה רשמיות',
    sec3Sub: 'ניתן לבחור בין 4 אפשרויות תוקף בהתאם למסלול הטיול:',
    types: {
      t30sTitle: '30 יום - כניסה יחידה',
      t30sDesc: 'תקף לשהייה רצופה של עד 30 ימים. פג תוקף בעת היציאה מהמדינה.',
      t30mTitle: '30 יום - כניסות מרובות',
      t30mDesc: 'מאפשר כניסות ויציאות ללא הגבלה במהלך 30 יום.',
      t90sTitle: '90 יום - כניסה יחידה',
      t90sDesc: 'מתאים לשהייה ממושכת או טיול ארוך של עד 3 חודשים.',
      t90mTitle: '90 יום - כניסות מרובות',
      t90mDesc: 'גמישות מרבית למטיילים ואנשי עסקים באסיה.'
    },
    sec4Title: 'מבנה פירוט העלויות',
    sec4Sub: 'הבחנה בין אגרת ממשלה לאגרת שירות מזורז:',
    govFeeTitle: 'אגרת ממשלה רשמית',
    govFeeDesc: '25$ לכניסה יחידה, 50$ לכניסות מרובות (אינו ניתן להחזר).',
    serviceFeeTitle: 'דמי שירות וטיפול דחוף',
    serviceFeeDesc: 'כולל בדיקת מסמכים, תיקון תמונות, תמיכה 24/7 וטיפול מהיר (24 שעות או 1-4 שעות).',
    sec5Title: '83 מעברי גבול מאושרים',
    sec5Sub: 'ניתן להיכנס לוייטנאם דרך כל אחד מ-83 המעברים הבאים:',
    airportsLabel: 'שדות תעופה בינלאומיים (17)',
    landPortsLabel: 'מעברי גבול יבשתיים (22)',
    seaPortsLabel: 'נמלים ימיים (44)',
    sec6Title: 'תהליך הגשה ב-4 שלבים',
    sec6Sub: 'קבלת הוויזה ב-4 שלבים פשוטים:',
    sec7Title: 'כללי חובה לדרכון ותמונה',
    rule1Title: 'תוקף דרכון',
    rule1Desc: 'לפחות 6 חודשי תוקף מיום הכניסה המתוכנן ו-2 עמודים ריקים.',
    rule2Title: 'מפרט תמונת פספורט',
    rule2Desc: 'תמונה עדכנית 4x6 ס״מ על רקע לבן, ללא משקפיים.',
    rule3Title: 'צילום עמוד הדרכון',
    rule3Desc: 'סריקה צבעונית וברורה הכוללת את קוד ה-MRZ בתחתית.',
    rule4Title: 'דיוק במעבר הכניסה',
    rule4Desc: 'יש להיכנס דרך מעבר הגבול המצוין בוויזה.'
  },

  ko: {
    badge: '2026 베트남 E-비자 개요',
    title: '베트남 전자비자(E-Visa)란 무엇인가요?',
    subtitle: '베트남 전자비자 규정, 종류별 유효기간, 발급 수수료 및 83개 입국 공항·항구 완벽 가이드.',
    sec1Title: '베트남 E-Visa 개념',
    sec1Body1: '베트남 E-Visa는 베트남 출입국관리국에서 발급하여 이메일 PDF로 전달되는 전자 비자입니다. 여권에 별도의 비자 스티커를 부착할 필요 없이, 입국 시 QR코드를 제시하여 입국 심사를 받습니다.',
    sec1Body2: '결의안 127/NQ-CP 및 389/NQ-CP에 따라 전 세계 모든 국가 국민이 신청 가능하며, 총 83개 국제 입국 관문(공항 17곳, 육로 border 22곳, 항구 44곳)을 통해 입국할 수 있습니다.',
    sec2Title: 'E-Visa 신청 대상자',
    sec2Body1: '대한민국, 일본, 영국, 프랑스, 독일 등 무비자협정 국가 국민은 45일까지 무비자 입국이 가능합니다. 45일 초과 체류자 및 미국, 캐나다, 호주 등 비협정국 국민은 E-Visa 신청이 필수입니다.',
    sec2Body2: '무비자 대상자라도 90일 복수 E-Visa를 발급받으면 라오스, 캄보디아, 태국 등 인근 국가를 자유롭게 여행한 후 베트남으로 재입국할 수 있습니다.',
    sec3Title: '4가지 공식 E-Visa 종류',
    sec3Sub: '여행 일정에 맞춰 4가지 비자 종류 중 선택하세요:',
    types: {
      t30sTitle: '30일 단수 비자 (Single Entry)',
      t30sDesc: '최대 30일간 연속 체류 가능. 베트남 출국 시 비자는 자동 만료됩니다.',
      t30mTitle: '30일 복수 비자 (Multiple Entry)',
      t30mDesc: '30일 유효기간 동안 횟수 제한 없이 출입국 가능.',
      t90sTitle: '90일 단수 비자 (Single Entry)',
      t90sDesc: '최대 3개월간의 장기 여행이나 출장에 적합.',
      t90mTitle: '90일 복수 비자 (Multiple Entry)',
      t90mDesc: '동남아시아 자유 여행객 및 디지털 노마드를 위한 최적의 비자.'
    },
    sec4Title: '발급 수수료 및 비용 구성',
    sec4Sub: '정부 인두세와 긴급 대행 서비스 수수료 안내:',
    govFeeTitle: '베트남 정부 인두세',
    govFeeDesc: '단수 $25 USD, 복수 $50 USD (정부 규정상 환불 불가).',
    serviceFeeTitle: '대행 및 긴급 발급 수수료',
    serviceFeeDesc: '서류 검토, 사진 보정, 24시간 상담 및 긴급(24시간) 또는 초긴급(1-4시간) 발급 서비스 포함.',
    sec5Title: '83개 승인 입국 관문',
    sec5Sub: '다음 83개 국제 입국 관문을 통해 베트남 입국이 가능합니다:',
    airportsLabel: '국제공항 (17곳)',
    landPortsLabel: '육로 국경 (22곳)',
    seaPortsLabel: '국제항구 (44곳)',
    sec6Title: '4단계 온라인 신청 절차',
    sec6Sub: '간단한 4단계로 베트남 E-Visa 발급 완료:',
    sec7Title: '여권 및 사진 필수 규정',
    rule1Title: '여권 유효기간',
    rule1Desc: '베트남 입국 예정일 기준 여권 잔여 유효기간이 6개월 이상이고 사면이 2면 이상 남아있어야 합니다.',
    rule2Title: '증명사진 규정',
    rule2Desc: '6개월 이내 촬영한 4x6cm 흰색 배경 사진 (안경 착용 불가).',
    rule3Title: '여권 면 스캔본',
    rule3Desc: '여권 하단 MRZ 코드 2줄이 명확히 보이는 컬러 스캔본.',
    rule4Title: '입국 공항/항구 일치',
    rule4Desc: 'E-Visa에 기재된 지정 입국 관문으로 입국해야 합니다.'
  },

  es: {
    badge: 'Resumen e-Visa Vietnam 2026',
    title: '¿Qué es el visado electrónico (e-Visa) para Vietnam?',
    subtitle: 'Guía completa sobre el e-Visa para Vietnam, tipos de validez, desglose de tasas y los 83 puntos de entrada autorizados.',
    sec1Title: 'Concepto del e-Visa de Vietnam',
    sec1Body1: 'El e-Visa para Vietnam es un visado electrónico emitido por el Departamento de Inmigración de Vietnam y enviado en formato PDF por correo electrónico. No requiere sello ni pegatina en el pasaporte antes de viajar.',
    sec1Body2: 'Bajo las resoluciones 127/NQ-CP y 389/NQ-CP, el e-Visa está disponible para ciudadanos de todos los países del mundo y permite la entrada por 83 puntos de control internacionales (17 aeropuertos, 22 pasos terrestres y 44 puertos marítimos).',
    sec2Title: '¿Quién necesita un e-Visa?',
    sec2Body1: 'Los ciudadanos de países exentos (España, Reino Unido, Francia, Alemania, Japón, Corea del Sur, etc.) pueden entrar sin visado hasta 45 días. Para estancias más largas o ciudadanos de otros países (EE. UU., México, Colombia, Argentina, etc.), el e-Visa es obligatorio.',
    sec2Body2: 'Muchos viajeros exentos optan por solicitar un e-Visa de 90 días con múltiples entradas para viajar libremente por el Sudeste Asiático.',
    sec3Title: '4 Categorías Oficiales de e-Visa',
    sec3Sub: 'Seleccione entre 4 opciones según su itinerario:',
    types: {
      t30sTitle: '30 Días Entrada Única',
      t30sDesc: 'Válido para una estancia continua de hasta 30 días.',
      t30mTitle: '30 Días Entradas Múltiples',
      t30mDesc: 'Permite salir y volver a entrar ilimitadamente durante 30 días.',
      t90sTitle: '90 Días Entrada Única',
      t90sDesc: 'Ideal para vacaciones prolongadas o viajes de negocios de hasta 3 meses.',
      t90mTitle: '90 Días Entradas Múltiples',
      t90mDesc: 'Máxima flexibilidad para explorar el Sudeste Asiático.'
    },
    sec4Title: 'Estructura y Desglose de Tasas',
    sec4Sub: 'Diferencia entre tasas gubernamentales y tarifas de servicio urgente:',
    govFeeTitle: 'Tasa Gubernamental',
    govFeeDesc: '$25 USD para entrada única, $50 USD para entradas múltiples (no reembolsable).',
    serviceFeeTitle: 'Tarifa de Servicio y Tramitación Urgente',
    serviceFeeDesc: 'Incluye revisión de documentos, ajuste de fotos, soporte 24/7 y emisión urgente (24h o 1-4h).',
    sec5Title: '83 Puntos de Entrada Autorizados',
    sec5Sub: 'Puede entrar por cualquiera de estos 83 puntos internacionales:',
    airportsLabel: 'Aeropuertos Internacionales (17)',
    landPortsLabel: 'Pasos Fronterizos Terrestres (22)',
    seaPortsLabel: 'Puertos Marítimos (44)',
    sec6Title: 'Proceso de Solicitud en 4 Pasos',
    sec6Sub: 'Consiga su e-Visa aprobado en 4 sencillos pasos:',
    sec7Title: 'Reglas de Cumplimiento de Pasaporte y Fotos',
    rule1Title: 'Validez del Pasaporte',
    rule1Desc: 'Mínimo 6 meses de validez desde la fecha de llegada y 2 páginas en blanco.',
    rule2Title: 'Especificaciones de la Foto',
    rule2Desc: 'Foto reciente 4x6cm con fondo blanco, sin gafas.',
    rule3Title: 'Escaneo del Pasaporte',
    rule3Desc: 'Copia en color que muestre las 4 esquinas y el código MRZ.',
    rule4Title: 'Puerto de Entrada Correcto',
    rule4Desc: 'Debe entrar por el punto especificado en su e-Visa.'
  }
};

export function getOverviewTranslation(lang: Language): OverviewTranslation {
  return OVERVIEW_TRANSLATIONS[lang] || OVERVIEW_TRANSLATIONS.en;
}
