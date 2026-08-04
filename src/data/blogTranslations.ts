import { Language } from '../types';
import { BlogPost } from '../services/wordpressApi';

export interface LocalizedPostData {
  title: Record<Language, string>;
  excerpt: Record<Language, string>;
  content: Record<Language, string>;
  category?: Record<Language, string>;
  readTime?: Record<Language, string>;
}

// Multi-language blog post content dictionary for top posts
export const BLOG_POST_TRANSLATIONS: Record<string, LocalizedPostData> = {
  'urgent-1-hour-vietnam-evisa-guide-2026': {
    title: {
      en: 'Urgent 1-Hour Vietnam E-Visa Guide for Emergency Flights in 2026',
      vi: 'Hướng Dẫn Xin E-Visa Việt Nam Khẩn 1 Giờ Cho Chuyến Bay Gấp 2026',
      fr: 'Guide e-Visa d\'urgence Vietnam 1 heure pour vols urgents en 2026',
      de: 'Anleitung für Notfall-Vietnam-E-Visum in 1 Stunde für dringende Flüge 2026',
      ja: '2026年 緊急フライト向け1時間ベトナムe-Visa発給ガイド',
      zh: '2026 紧急航班 1 小时加急越南电子签证完全指南',
      he: 'מדריך להנפקת ויזה אלקטרונית דחופה לוייטנאם תוך שעה לטיסות חירום 2026',
      ko: '2026년 긴급 항공편을 위한 1시간 베트남 전자비자 발급 가이드',
      es: 'Guía e-Visa de emergencia para Vietnam en 1 hora para vuelos urgentes 2026'
    },
    excerpt: {
      en: 'Flight departing soon? Step-by-step breakdown of how our fast-track team processes emergency Vietnam e-visas within 60 to 120 minutes around the clock.',
      vi: 'Chuyến bay sắp khởi hành? Hướng dẫn chi tiết quy trình xử lý công văn E-Visa khẩn cấp trong 60 đến 120 phút 24/7.',
      fr: 'Vol imminent ? Découvrez comment notre équipe traite les e-visas d\'urgence pour le Vietnam en 60 à 120 minutes 24h/24.',
      de: 'Flug steht bevor? Wie unser Express-Team Notfall-Visumsanträge innerhalb von 60 bis 120 Minuten rund um die Uhr bearbeitet.',
      ja: 'フライトが目前に？当社の特急チームが24時間体制で60分〜120分以内に緊急ベトナムビザを発給する手順。',
      zh: '航班即将在数小时内起飞？了解我们 24/7 全天候团队如何在 60 至 120 分钟内处理紧急越南电子签证。',
      he: 'הטיסה יוצאת בקרוב? כיצד הצוות שלנו מנפיק ויזה דחופה לוייטנאם תוך 60 עד 120 דקות סביב השעון.',
      ko: '출국 직전이신가요? 24시간 당사 긴급 전담팀이 60분~120분 이내에 베트남 전자비자를 발급하는 방법.',
      es: '¿Su vuelo sale pronto? Conozca cómo nuestro equipo procesa e-visas de emergencia para Vietnam en 60 a 120 minutos las 24 horas.'
    },
    content: {
      en: `
        <p>Boarding a flight to Vietnam only to discover your e-visa is pending or expired can be overwhelming. Fortunately, Vietnam Immigration enables expedited 1-hour and 4-hour emergency processing under official regulations.</p>
        <h3>Key Steps for Emergency Processing:</h3>
        <ul>
          <li><strong>Verify Passport Validity:</strong> Ensure your passport has at least 6 months validity from arrival date.</li>
          <li><strong>Provide Flight Ticket Details:</strong> Submit your flight booking confirmation with the airline PNR code.</li>
          <li><strong>Clear Portrait & Passport Photo:</strong> Upload high-resolution scans without glass reflections.</li>
        </ul>
        <p>Our team directly liaises with Vietnam Immigration Officers at Hanoi (Noi Bai), Ho Chi Minh City (Tan Son Nhat), and Da Nang international airports to ensure approval letters are issued before departure.</p>
      `,
      vi: `
        <p>Chuẩn bị lên máy bay đi Việt Nam mới phát hiện e-visa chưa ra hoặc bị sai thông tin là tình huống vô cùng căng thẳng. Rất may mắn, Cục Quản lý Xuất nhập cảnh Việt Nam cho phép xử lý công văn khẩn 1 giờ và 4 giờ theo quy định hiện hành.</p>
        <h3>Các Bước Xử Lý E-Visa Khẩn Cấp:</h3>
        <ul>
          <li><strong>Kiểm tra thời hạn hộ chiếu:</strong> Đảm bảo hộ chiếu còn hạn ít nhất 6 tháng kể từ ngày nhập cảnh.</li>
          <li><strong>Cung cấp thông tin vé máy bay:</strong> Gửi xác nhận đặt vé có mã PNR chuyến bay.</li>
          <li><strong>Ảnh chân dung & hộ chiếu chuẩn:</strong> Tải lên bản scan hộ chiếu rõ nét và ảnh phông trắng không lóa.</li>
        </ul>
        <p>Đội ngũ chuyên viên hỗ trợ làm việc trực tiếp với Cán bộ Xuất Nhập Cảnh tại các sân bay quốc tế Nội Bài (Hà Nội), Tân Sơn Nhất (TP.HCM) và Đà Nẵng để đảm bảo cấp phép kịp giờ bay.</p>
      `,
      fr: `
        <p>Découvrir que votre e-visa est en attente juste avant d'embarquer pour le Vietnam peut être stressant. Heureusement, l'Immigration vietnamienne permet le traitement d'urgence en 1h et 4h.</p>
        <h3>Étapes clés pour le traitement d'urgence :</h3>
        <ul>
          <li><strong>Vérifier la validité du passeport :</strong> Au moins 6 mois de validité après la date d'arrivée.</li>
          <li><strong>Fournir le billet d'avion :</strong> Confirmation de réservation avec code PNR.</li>
          <li><strong>Photos conformes :</strong> Scans haute résolution sans reflet.</li>
        </ul>
        <p>Notre équipe communique directement avec les officiels aux aéroports de Hanoï, Ho Chi Minh-Ville et Da Nang pour garantir l'approbation avant le décollage.</p>
      `,
      de: `
        <p>Kurz vor dem Abflug nach Vietnam festzustellen, dass das E-Visum noch aussteht, ist extrem stressig. Glücklicherweise bietet die vietnamesische Einwanderungsbehörde einen 1-Stunden- und 4-Stunden-Notfall-Express-Service an.</p>
        <h3>Wichtige Schritte für die Eilbearbeitung:</h3>
        <ul>
          <li><strong>Passgültigkeit prüfen:</strong> Mindestens 6 Monate Restgültigkeit ab Einreisedatum.</li>
          <li><strong>Flugticket vorlegen:</strong> Buchungsbestätigung mit PNR-Code einreichen.</li>
          <li><strong>Keine spiegelnden Fotos:</strong> Hohe Auflösung ohne Brillenreflexionen.</li>
        </ul>
      `,
      ja: `
        <p>ベトナム行きの搭乗直前にe-Visaが未発給であることに気づくのは非常に深刻です。ベトナム出入国管理局では規定に基づき、1時間および4時間の緊急特急発給に対応しています。</p>
        <h3>緊急申請の重要ステップ:</h3>
        <ul>
          <li><strong>パスポート有効期限の確認:</strong> 入国予定日から6ヶ月以上の残存期間が必要です。</li>
          <li><strong>航空券情報の提示:</strong> PNRコード付きの予約確認書を提出してください。</li>
          <li><strong>鮮明な顔写真・パスポートスキャン:</strong> 反射のない高解像度画像をアップロード。</li>
        </ul>
      `,
      zh: `
        <p>登机前突然发现越南电子签证尚未出签或填写错误？幸运的是，根据越南出入境管理局规定，支持 1 小时与 4 小时加急特批流程。</p>
        <h3>加急出签核心步骤：</h3>
        <ul>
          <li><strong>核对护照有效期：</strong> 确保入境日起算剩余有效期 6 个月以上。</li>
          <li><strong>提供航班机票：</strong> 提交带有 PNR 编号的航班行程确认单。</li>
          <li><strong>合规照片与护照扫描件：</strong> 上传清晰无反光的白底证件照与护照首页。</li>
        </ul>
      `,
      he: `
        <p>גילוי שוויזה אלקטרונית מעוכבת רגע לפני העלייה למטוס עלול להיות מלחיץ. למרבה המזל, רשויות ההגירה בווייטנאם מאפשרות טיפול חירום תוך שעה ו-4 שעות.</p>
        <h3>שלבים קריטיים לטיפול דחוף:</h3>
        <ul>
          <li><strong>בדיקת תוקף דרכון:</strong> תוקף של 6 חודשים לפחות מיום ההגעה.</li>
          <li><strong>פרטי כרטיס טיסה:</strong> הגשת אישור הזמנה עם קוד PNR.</li>
          <li><strong>תמונה ודרכון ברורים:</strong> העלאת סריקה באיכות גבוהה ללא החזרי אור.</li>
        </ul>
      `,
      ko: `
        <p>베트남 탑승 직전 전자비자가 발급되지 않은 것을 확인하셨나요? 베트남 출입국관리국은 긴급 1시간 및 4시간 패스트트랙 승인 절차를 지원합니다.</p>
        <h3>긴급 발급 필수 단계:</h3>
        <ul>
          <li><strong>여권 유효기간 확인:</strong> 입국일 기준 6개월 이상 잔여 유효기간 필요.</li>
          <li><strong>항공권 정보 제출:</strong> PNR 코드가 포함된 E-티켓 제출.</li>
          <li><strong>여권 및 선명한 사진:</strong> 반사 없는 고ה상도 백색 배경 사진 제출.</li>
        </ul>
      `,
      es: `
        <p>Descubrir que su e-visa está pendiente justo antes de abordar su vuelo a Vietnam puede ser estresante. Afortunadamente, la Inmigración de Vietnam permite el procesamiento de emergencia en 1 y 4 horas.</p>
        <h3>Pasos clave para el trámite de emergencia:</h3>
        <ul>
          <li><strong>Verificar validez del pasaporte:</strong> Al menos 6 meses de vigencia a la llegada.</li>
          <li><strong>Presentar boleto de avión:</strong> Confirmación con código PNR de la aerolínea.</li>
          <li><strong>Foto de pasaporte clara:</strong> Subir escaneos de alta resolución sin reflejos.</li>
        </ul>
      `
    }
  },
  'top-5-evisa-photo-errors-delays': {
    title: {
      en: 'Top 5 Common E-Visa Photo Errors That Cause Airport Delays',
      vi: 'Top 5 Lỗi Ảnh Hộ Chiếu Khiến E-Visa Việt Nam Bị Từ Chối Hoặc Chậm Trễ',
      fr: 'Top 5 des erreurs de photo e-Visa causant des retards à l\'aéroport',
      de: 'Top 5 Foto-Fehler beim Vietnam E-Visum und wie man sie vermeidet',
      ja: 'ベトナムe-Visa写真でよくある5つの rejection エラーと対策',
      zh: '导致越南电子签证延迟与退件的 5 大照片常见错误',
      he: '5 שגיאות התמונה השכיחות ביותר הגורמות לעיכובים בויזה לווייטנאם',
      ko: '베트남 전자비자 발급 지연을 유발하는 5가지 여권 사진 실수',
      es: 'Top 5 errores en fotos de e-Visa que causan retrasos en el aeropuerto'
    },
    excerpt: {
      en: 'Avoid rejection and weekend delays by following official 2026 photo specifications for Vietnam e-visa applications.',
      vi: 'Tránh bị trả lại hồ sơ và trễ chuyến bay bằng cách tuân thủ chuẩn ảnh hộ chiếu xuất nhập cảnh 2026.',
      fr: 'Évitez le rejet de votre dossier en suivant les spécifications officielles de photo 2026.',
      de: 'Vermeiden Sie Ablehnungen durch die Einhaltung der offiziellen Fotovorschriften 2026.',
      ja: '公式の2026年ベトナムビザ写真規格に従って、審査の遅延や脚下を防ぎましょう。',
      zh: '遵循 2026 年官方规范照片要求，避免签证申请被退回或延误。',
      he: 'מנע דחייה של הבקשה על ידי הקפדה על דרישות התמונה הרשמיות לשנת 2026.',
      ko: '2026년 공식 베트남 여권 규격을 준수하여 전자비자 거절 및 지연을 예방하세요.',
      es: 'Evite rechazos siguiendo las especificaciones oficiales de fotografía para 2026.'
    },
    content: {
      en: `
        <p>Over 70% of delayed Vietnam e-visa applications are caused by non-compliant passport scan uploads or portrait photos. Immigration automated verification systems reject improper submissions immediately.</p>
        <h3>Photo Compliance Checklist:</h3>
        <ul>
          <li><strong>Plain White Background:</strong> No shadows, patterns, or tinted backgrounds.</li>
          <li><strong>Full Face Facing Camera:</strong> Both ears visible, neutral expression, no eyeglasses.</li>
          <li><strong>High Resolution:</strong> JPEG/PNG format with clear facial features.</li>
        </ul>
      `,
      vi: `
        <p>Hơn 70% hồ sơ xin e-Visa Việt Nam bị chậm trễ là do tải lên ảnh scan hộ chiếu hoặc ảnh chân dung không đạt chuẩn. Hệ thống kiểm duyệt tự động của Cục Xuất nhập cảnh sẽ từ chối ngay lập tức.</p>
        <h3>Checklist Ảnh Hợp Lệ:</h3>
        <ul>
          <li><strong>Phông nền trắng phau:</strong> Không có bóng, hoa văn hay phông màu.</li>
          <li><strong>Nhìn thẳng vào ống kính:</strong> Rõ 2 tai, biểu cảm tự nhiên, không đeo kính râm.</li>
          <li><strong>Độ phân giải cao:</strong> Định dạng JPEG/PNG sắc nét.</li>
        </ul>
      `,
      fr: `
        <p>Plus de 70% des demandes d'e-visa retardées sont dues à des photos non conformes. Le système d'inspection rejette automatiquement les images incorrectes.</p>
        <h3>Liste de vérification photo :</h3>
        <ul>
          <li><strong>Fond blanc uni :</strong> Sans ombres ni motifs.</li>
          <li><strong>Visage de face :</strong> Oreilles visibles, expression neutre.</li>
          <li><strong>Haute résolution :</strong> Format JPEG/PNG clair.</li>
        </ul>
      `,
      de: `
        <p>Über 70% der verzögerten E-Visa-Anträge für Vietnam sind auf fehlerhafte Fotos zurückzuführen.</p>
        <h3>Checkliste für das Foto:</h3>
        <ul>
          <li><strong>Reiner weißer Hintergrund:</strong> Keine Schatten oder Farben.</li>
          <li><strong>Gesicht gerade:</strong> Beide Ohren sichtbar, ohne Sonnenbrille.</li>
          <li><strong>Hohe Auflösung:</strong> Scharfes JPEG/PNG.</li>
        </ul>
      `,
      ja: `
        <p>ベトナムe-Visa審査遅延の70%以上が、規格外の顔写真やパスポートスキャンが原因です。</p>
        <h3>写真チェックリスト:</h3>
        <ul>
          <li><strong>無地の白背景:</strong> 影や柄、背景色がないこと。</li>
          <li><strong>正面を向いた顔:</strong> 両耳が見え、メガネなし。</li>
          <li><strong>高解像度:</strong> 鮮明なJPEG/PNG画像。</li>
        </ul>
      `,
      zh: `
        <p>超过 70% 的越南电子签证延误都是由于上传的照片或护照扫描件不符合要求造成的。</p>
        <h3>合规照片 Checklist：</h3>
        <ul>
          <li><strong>纯白背景：</strong> 无阴影、无图案或带色背景。</li>
          <li><strong>面部正对镜头：</strong> 双耳可见、表情自然、不戴眼镜。</li>
          <li><strong>高清分辨率：</strong> 清晰的 JPEG/PNG 格式。</li>
        </ul>
      `,
      he: `
        <p>למעלה מ-70% מהבקשות המעוכבות נגרמות בשל תמונות שאינן עומדות בתקן.</p>
        <h3>רשימת תיוג לתמונה:</h3>
        <ul>
          <li><strong>רקע לבן חלק:</strong> ללא צללים או דוגמאות.</li>
          <li><strong>פנים מול המצלמה:</strong> שתי אוזניים גלויות, ללא משקפיים.</li>
          <li><strong>רזולוציה גבוהה:</strong> קובץ JPEG/PNG ברור.</li>
        </ul>
      `,
      ko: `
        <p>베트남 전자비자 승인 지연 사유의 70% 이상이 여권 스캔본 및 증명사진 규격 미달 때문입니다.</p>
        <h3>사진 규격 체크리스트:</h3>
        <ul>
          <li><strong>순백색 배경:</strong> 그림자, 패턴, 색상 배경 불가.</li>
          <li><strong>정면 주시:</strong> 양쪽 귀 노출, 안경 미착용.</li>
          <li><strong>고화질:</strong> 선명한 JPEG/PNG 포맷.</li>
        </ul>
      `,
      es: `
        <p>Más del 70% de las solicitudes con retraso se deben a fotos de pasaporte que no cumplen con los requisitos.</p>
        <h3>Lista de verificación:</h3>
        <ul>
          <li><strong>Fondo blanco puro:</strong> Sin sombras ni estampados.</li>
          <li><strong>Rostro de frente:</strong> Orejas visibles, sin gafas de sol.</li>
          <li><strong>Alta resolución:</strong> Formato JPEG/PNG nítido.</li>
        </ul>
      `
    }
  },
  'weekend-holiday-urgent-vietnam-visa': {
    title: {
      en: 'How to Expedite Vietnam E-Visa Approval on Weekends & Public Holidays',
      vi: 'Cách Làm E-Visa Việt Nam Khẩn Vào Thứ 7, Chủ Nhật & Ngày Lễ Quốc Khánh',
      fr: 'Comment obtenir un e-Visa Vietnam d\'urgence les week-ends et jours fériés',
      de: 'Notfall-Visum für Vietnam am Wochenende & an Feiertagen beantragen',
      ja: '土日・祝日にベトナム緊急ビザを発給申請する方法',
      zh: '周末与节假日如何申请越南电子签证紧急加急出签',
      he: 'איך להנפיק ויזה דחופה לוייטנאם בסופי שבוע ובחגים רשמיים',
      ko: '주말 및 공휴일에 베트남 긴급 비자를 발급받는 방법',
      es: 'Cómo solicitar e-Visa urgente para Vietnam en fines de semana y festivos'
    },
    excerpt: {
      en: 'Standard government immigration offices are closed on weekends. Learn how our 24/7 hotline gets weekend urgent visas approved.',
      vi: 'Cơ quan hành chính nghỉ làm việc thứ 7, CN. Tìm hiểu giải pháp duyệt visa khẩn 24/7 áp đảo giờ bay cuối tuần.',
      fr: 'Les bureaux d\'immigration sont fermés le week-end. Découvrez notre assistance 24/7 pour les urgences du week-end.',
      de: 'Behörden sind am Wochenende geschlossen. Unser 24/7-Service hilft Ihnen bei Wochenendnotfällen.',
      ja: '政府機関は土日に閉鎖されますが、当社の24時間サポートで週末緊急発給が可能です。',
      zh: '常规移民局办公室在周末休息。了解我们 24/7 服务如何在周末完成加急核准。',
      he: 'משרדי ההגירה סגורים בסופי שבוע. למד כיצד שירות ה-24/7 שלנו מאשר ויזות בסוף השבוע.',
      ko: '정부 출입국 관공서는 주말에 휴무입니다. 당사의 24/7 긴급 서비스를 이용해 보세요.',
      es: 'Las oficinas de inmigración cierran los fines de semana. Conozca nuestro servicio 24/7.'
    },
    content: {
      en: `
        <p>Traveling on Saturday or Sunday? Standard government processing pauses over weekends. However, airport immigration advisory desks operate 24/7 for urgent entry support.</p>
        <p>By using our Fast-Track Emergency Service, our team coordinates with duty officers at major international entry ports to issue emergency landing approval letters even on public holidays.</p>
      `,
      vi: `
        <p>Bay vào Thứ 7 hoặc Chủ Nhật? Quy trình duyệt thường của nhà nước tạm dừng vào cuối tuần. Tuy nhiên, bộ phận trực xuất nhập cảnh sân bay hoạt động 24/7 hỗ trợ du khách khẩn cấp.</p>
        <p>Thông qua dịch vụ Làm E-Visa Khẩn Cấp, đội ngũ chuyên viên phối hợp cùng cán bộ trực ca tại các cửa khẩu sân bay quốc tế để cấp công văn nhập cảnh ngay cả trong ngày lễ.</p>
      `,
      fr: `
        <p>Voyagez-vous le samedi ou le dimanche ? Le traitement standard s'arrête le week-end. Cependant, les bureaux d'urgence des aéroports fonctionnent 24h/24.</p>
        <p>Grâce à notre service d'urgence, notre équipe se coordonne avec les agents de garde aux aéroports pour délivrer des autorisations même les jours fériés.</p>
      `,
      de: `
        <p>Reisen Sie am Samstag oder Sonntag? Die normale Bearbeitung ruht am Wochenende. Unsere Notfalldienste an den Flughäfen sind jedoch rund um die Uhr besetzt.</p>
      `,
      ja: `
        <p>土曜日や日曜日のご渡航ですか？標準の政府審査は週末に停止しますが、空港の緊急窓口は24時間体制で稼働しています。</p>
      `,
      zh: `
        <p>周六或周日出行？标准政府审批在周末暂停。然而，主要国际机场的出入境值班部门 24/7 保持运转。</p>
      `,
      he: `
        <p>טסים בשבת או בראשון? הטיפול הרגיל מוקפא בסוף השבוע. עם זאת, דלפקי החירום בשדות התעופה פעילים 24/7.</p>
      `,
      ko: `
        <p>토요일이나 일요일에 출국하시나요? 정부 일반 승인은 주말에 중단되지만 공항 긴급 지원 데스크는 24시간 운영됩니다.</p>
      `,
      es: `
        <p>¿Viaja en sábado o domingo? El procesamiento estándar se pausa los fines de semana. Sin embargo, nuestros servicios de aeropuerto operan 24/7.</p>
      `
    }
  }
};

/**
 * Returns localized version of a blog post based on current language
 */
export function getLocalizedBlogPost(post: BlogPost, lang: Language): BlogPost {
  if (!post) return post;
  if (lang === 'en') return post; // Default language in source

  const slug = (post.slug || '').toLowerCase();
  
  // 1. Check exact match dictionary
  if (BLOG_POST_TRANSLATIONS[slug]) {
    const t = BLOG_POST_TRANSLATIONS[slug];
    return {
      ...post,
      title: t.title[lang] || post.title,
      excerpt: t.excerpt[lang] || post.excerpt,
      content: t.content[lang] || post.content,
      category: t.category ? t.category[lang] : getLocalizedCategory(post.category, lang),
      readTime: getLocalizedReadTime(post.readTime, lang)
    };
  }

  // 2. Requirements post localization if post title starts with "Vietnam Visa Requirements"
  let localizedTitle = post.title;
  let localizedExcerpt = post.excerpt;
  if (post.title.includes('Vietnam Visa Requirements') || slug.includes('requirements-for')) {
    const countryMatch = post.title.match(/for\s+([A-Za-z\s]+?)\s+(Citizens|Passport|202\d|$)/i);
    const country = countryMatch ? countryMatch[1].trim() : '';

    if (lang === 'vi') {
      localizedTitle = `Quy Định & Thủ Tục Visa Việt Nam Cho Công Dân ${country || 'Quốc Tế'} (2026)`;
      localizedExcerpt = `Hướng dẫn xin E-Visa 30-90 ngày, thời hạn hộ chiếu và các gói duyệt visa khẩn cho công dân ${country || 'nước ngoài'}.`;
    } else if (lang === 'fr') {
      localizedTitle = `Exigences de visa pour le Vietnam pour les citoyens de ${country || 'l\'étranger'} (2026)`;
      localizedExcerpt = `Guide officiel 2026 sur les e-visas, exemptions et exigences pour les titulaires de passeport.`;
    } else if (lang === 'de') {
      localizedTitle = `Vietnam Visum Bestimmungen für Staatsbürger von ${country || 'ausländischen Staaten'} (2026)`;
      localizedExcerpt = `Vollständiger Leitfaden zu E-Visum Richtlinien, Gültigkeit und Notfalloptionen.`;
    } else if (lang === 'ja') {
      localizedTitle = `${country || '海外'}市民向けベトナムビザ申請要件と渡航ガイド (2026年)`;
      localizedExcerpt = `e-Visa申請手順、パスポート有効期限、緊急発給オプションに関する最新ガイド。`;
    } else if (lang === 'zh') {
      localizedTitle = `${country || '外籍'}公民 2026 越南签证申请要求与入境指南`;
      localizedExcerpt = `关于电子签证申请步骤、护照有效期及紧急加急出签服务的完整说明。`;
    } else if (lang === 'he') {
      localizedTitle = `דרישות ויזה לווייטנאם לאזרחי ${country || 'זרים'} (עדכון 2026)`;
      localizedExcerpt = `מדריך רשמי להנפקת ויזה אלקטרונית, תוקף דרכון ואפשרויות הנפקה דחופה.`;
    } else if (lang === 'ko') {
      localizedTitle = `${country || '외국'} 시민을 위한 베트남 비자 신청 요건 및 가이드 (2026년)`;
      localizedExcerpt = `전자비자 발급 절차, 여권 유효기간 및 긴급 발급 패스트트랙 안내.`;
    } else if (lang === 'es') {
      localizedTitle = `Requisitos de Visa para Vietnam para ciudadanos de ${country || 'extranjeros'} (2026)`;
      localizedExcerpt = `Guía oficial 2026 sobre e-visas, exenciones y opciones de trámite urgente.`;
    }
  }

  return {
    ...post,
    title: localizedTitle,
    excerpt: localizedExcerpt,
    category: getLocalizedCategory(post.category, lang),
    readTime: getLocalizedReadTime(post.readTime, lang)
  };
}

export function getLocalizedCategory(cat: string, lang: Language): string {
  if (lang === 'en') return cat || 'Visa News';
  const c = (cat || '').toLowerCase();
  
  if (c.includes('urgent') || c.includes('blog')) {
    const map: Record<Language, string> = {
      en: 'Urgent Visa News',
      vi: 'Tin Visa Khẩn',
      fr: 'Actualités Visa Urgent',
      de: 'Eilvisum Nachrichten',
      ja: '緊急ビザニュース',
      zh: '加急签证资讯',
      he: 'חדשות ויזה דחופה',
      ko: '긴급 비자 소식',
      es: 'Noticias Visa Urgente'
    };
    return map[lang] || cat;
  }

  if (c.includes('requirement')) {
    const map: Record<Language, string> = {
      en: 'Visa Requirements',
      vi: 'Quy Định Visa',
      fr: 'Exigences de Visa',
      de: 'Visabestimmungen',
      ja: 'ビザ申請要件',
      zh: '签证申请要求',
      he: 'דרישות ויזה',
      ko: '비자 요건',
      es: 'Requisitos de Visa'
    };
    return map[lang] || cat;
  }

  return cat;
}

export function getLocalizedReadTime(readTime: string, lang: Language): string {
  const mins = readTime.replace(/\D/g, '') || '4';
  const map: Record<Language, string> = {
    en: `${mins} min read`,
    vi: `${mins} phút đọc`,
    fr: `${mins} min de lecture`,
    de: `${mins} Min. Lesezeit`,
    ja: `読了時間: ${mins}分`,
    zh: `阅读时间 ${mins} 分钟`,
    he: `קריאה ב-${mins} דקות`,
    ko: `${mins}분 소요`,
    es: `${mins} min de lectura`
  };
  return map[lang] || readTime;
}
