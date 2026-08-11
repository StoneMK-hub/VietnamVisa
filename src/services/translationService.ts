import { Language } from '../types';
import { BlogPost, WpFaqItem } from './wordpressApi';
import { BLOG_POST_TRANSLATIONS, getLocalizedCategory, getLocalizedReadTime } from '../data/blogTranslations';

// In-memory translation cache
const memoryTranslationCache = new Map<string, { title: string; excerpt: string; content: string }>();

/**
 * Get cache key for a post and language
 */
function getCacheKey(idOrSlug: string | number, lang: Language): string {
  return `wp_trans_${idOrSlug}_${lang}`;
}

/**
 * Save translation to cache
 */
function saveToCache(
  idOrSlug: string | number, 
  lang: Language, 
  data: { title: string; excerpt: string; content?: string },
  skipContent: boolean = false
) {
  const key = getCacheKey(idOrSlug, lang);
  const existing = getFromCache(idOrSlug, lang);

  // If skipContent is true or content is not provided, keep existing cached content if available
  const finalContent = skipContent
    ? (existing?.content || '')
    : (data.content || existing?.content || '');

  const dataToSave = {
    title: data.title || existing?.title || '',
    excerpt: data.excerpt || existing?.excerpt || '',
    content: finalContent
  };

  memoryTranslationCache.set(key, dataToSave);
  try {
    localStorage.setItem(key, JSON.stringify(dataToSave));
  } catch (e) {
    // Ignore storage quota errors
  }
}

/**
 * Get translation from cache (Memory or LocalStorage)
 */
function getFromCache(idOrSlug: string | number, lang: Language): { title: string; excerpt: string; content: string } | null {
  const key = getCacheKey(idOrSlug, lang);
  if (memoryTranslationCache.has(key)) {
    return memoryTranslationCache.get(key)!;
  }

  try {
    const saved = localStorage.getItem(key);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.title) {
        memoryTranslationCache.set(key, parsed);
        return parsed;
      }
    }
  } catch (e) {
    // Ignore
  }

  return null;
}

/**
 * Fallback Title Localizer for standard WP article titles
 */
export function fallbackTranslateTitle(title: string, lang: Language): string {
  if (!title || lang === 'en') return title;

  let t = title;
  const replacements: Record<Language, Array<[RegExp, string]>> = {
    ja: [
      [/Vietnam Visa Requirements (?:&|and) Official Entry Guidelines for (.+?) Citizens/i, '$1市民向けベトナムビザ申請要件と公式入国ガイド'],
      [/Vietnam Visa Requirements for (.+?) Citizens/i, '$1市民向けベトナムビザ申請要件'],
      [/Vietnam Visa Fees for (.+?) Citizens/i, '$1市民向けベトナムビザ料金'],
      [/How to Apply Vietnam E-Visa for (.+?) Passport/i, '$1パスポート所持者向けベトナムEビザ申請方法'],
      [/Citizens/gi, '市民'],
      [/Travelers/gi, '旅行者'],
      [/Requirements/gi, '申請要件'],
      [/Vietnam Visa/gi, 'ベトナムビザ']
    ],
    ko: [
      [/Vietnam Visa Requirements (?:&|and) Official Entry Guidelines for (.+?) Citizens/i, '$1 시민을 위한 베트남 비자 신청 요건 및 입국 가이드'],
      [/Vietnam Visa Requirements for (.+?) Citizens/i, '$1 시민을 위한 베트남 비자 요건'],
      [/Vietnam Visa Fees for (.+?) Citizens/i, '$1 시민을 위한 베트남 비자 수수료'],
      [/Citizens/gi, '시민'],
      [/Requirements/gi, '요건'],
      [/Vietnam Visa/gi, '베트남 비자']
    ],
    zh: [
      [/Vietnam Visa Requirements (?:&|and) Official Entry Guidelines for (.+?) Citizens/i, '$1公民 2026 越南签证申请要求与官方入境指南'],
      [/Vietnam Visa Requirements for (.+?) Citizens/i, '$1公民越南签证申请要求'],
      [/Vietnam Visa Fees for (.+?) Citizens/i, '$1公民越南签证费用'],
      [/Citizens/gi, '公民'],
      [/Requirements/gi, '申请要求'],
      [/Vietnam Visa/gi, '越南签证']
    ],
    fr: [
      [/Vietnam Visa Requirements (?:&|and) Official Entry Guidelines for (.+?) Citizens/i, 'Exigences de visa pour le Vietnam et guide officiel pour les citoyens de $1'],
      [/Vietnam Visa Requirements for (.+?) Citizens/i, 'Exigences de visa pour le Vietnam pour les citoyens de $1'],
      [/Citizens/gi, 'citoyens'],
      [/Requirements/gi, 'exigences']
    ],
    de: [
      [/Vietnam Visa Requirements (?:&|and) Official Entry Guidelines for (.+?) Citizens/i, 'Vietnam Visabestimmungen und Einreiseleitfaden für Staatsbürger von $1'],
      [/Vietnam Visa Requirements for (.+?) Citizens/i, 'Vietnam Visabestimmungen für Staatsbürger von $1'],
      [/Citizens/gi, 'Staatsbürger'],
      [/Requirements/gi, 'Bestimmungen']
    ],
    es: [
      [/Vietnam Visa Requirements (?:&|and) Official Entry Guidelines for (.+?) Citizens/i, 'Requisitos de visado para Vietnam y guía oficial para ciudadanos de $1'],
      [/Vietnam Visa Requirements for (.+?) Citizens/i, 'Requisitos de visado para Vietnam para ciudadanos de $1'],
      [/Citizens/gi, 'ciudadanos'],
      [/Requirements/gi, 'requisitos']
    ],
    he: [
      [/Vietnam Visa Requirements (?:&|and) Official Entry Guidelines for (.+?) Citizens/i, 'דרישות ויזה לווייטנאם ומדריך כניסה רשמי לאזרחי $1'],
      [/Vietnam Visa Requirements for (.+?) Citizens/i, 'דרישות ויזה לווייטנאם לאזרחי $1'],
      [/Citizens/gi, 'אזרחי'],
      [/Requirements/gi, 'דרישות']
    ],
    vi: [
      [/Vietnam Visa Requirements (?:&|and) Official Entry Guidelines for (.+?) Citizens/i, 'Quy Định & Thủ Tục Xin Visa Việt Nam Cho Công Dân $1'],
      [/Vietnam Visa Requirements for (.+?) Citizens/i, 'Quy Định Xin Visa Việt Nam Cho Công Dân $1'],
      [/Citizens/gi, 'Công Dân'],
      [/Requirements/gi, 'Yêu Cầu']
    ],
    en: []
  };

  const rules = replacements[lang] || [];
  for (const [pattern, replacement] of rules) {
    t = t.replace(pattern, replacement);
  }
  return t;
}

/**
 * Fallback HTML Content Localizer for standard WP article bodies
 */
export function fallbackTranslateHtml(html: string, lang: Language): string {
  if (!html || lang === 'en') return html;

  let h = html;
  const commonReplacements: Record<Language, Array<[RegExp, string]>> = {
    ja: [
      [/Maximum E-visa Validity:/gi, 'Eビザの最大有効期間:'],
      [/The Vietnam E-visa is officially valid for a maximum of 90 days\./gi, 'ベトナムEビザは公式に最大90日間有効です。'],
      [/Flexible Entry Options:/gi, '柔軟な入国オプション:'],
      [/When applying for an E-visa, (.+?) travelers can select either a Single Entry or a Multiple Entries option depending on their travel itinerary \((.+?)\)\./gi, 'Eビザ申請時、旅行者は旅行日程（例：カンボジアやラオスなどの近隣国に立ち寄って再入国する場合など）に応じて、1回入国（シングル）または複数回入国（マルチ）を選択できます。'],
      [/Permitted Entry Points:/gi, '許可された入国ポイント:'],
      [/Your approved E-visa is accepted at over 40 international checkpoints across Vietnam, which covers all major international airports \((.+?)\), alongside various land borders and seaports\./gi, '承認されたEビザは、ハノイ（ノイバイ）、ホーチミン（タンソンニャット）、ダナンなどの主要国際空港をはじめ、陸路・海路を含むベトナム全土の40以上の国際出入国ゲートで利用可能です。'],
      [/Exemption Requirements:/gi, 'ビザ免除の条件:'],
      [/To enter visa-free for 45 days, your (.+?) passport must be valid for at least 6 months from your arrival date, and you should hold a return or onward travel ticket\./gi, '45日間のビザ免除で入国する場合、パスポートの有効期限が入国日から6ヶ月以上残っており、復路または第三国への航空券を所持している必要があります。'],
      [/upgraded to enhance flexibility:/gi, '利便性を向上させるために改定されました:'],
      [/Vietnam Visa Fees for (.+?) Citizens/gi, '$1市民向けベトナムビザ料金'],
      [/Passport & Photo Compliance Checklist:/gi, 'パスポートおよび証明写真の要件:'],
      [/Passport Validity:/gi, 'パスポート有効期限:'],
      [/Must have at least 6 months remaining validity from arrival date with 2 blank pages\./gi, '入国予定日から6ヶ月以上の残存期間と2ページ以上の未使用ページが必要です。'],
      [/Portrait Photo:/gi, '証明写真:'],
      [/4x6cm digital photo, white background, no eyeglasses, clear face facing forward\./gi, '白背景のデジタル写真、サングラス不可、正面を向いた鮮明な画像。'],
      [/E-Visa Categories & Speed Options:/gi, 'Eビザの種類と処理スピード:'],
      [/Standard Processing:/gi, '通常処理:'],
      [/3 working days/gi, '3営業日'],
      [/Urgent 24 Hours:/gi, '緊急処理 (24時間):'],
      [/Approved within 24 working hours\./gi, '24営業時間以内に承認。'],
      [/Super Urgent 1-4 Hours:/gi, '超緊急処理 (1〜4時間):'],
      [/Emergency clearance in 1 to 4 hours for upcoming flights\./gi, '緊急フライト向けに1〜4時間で優先発給。'],
      [/Eligible Ports of Entry:/gi, '利用可能な入国ポート:']
    ],
    ko: [
      [/Maximum E-visa Validity:/gi, '전자비자 최대 유효기간:'],
      [/The Vietnam E-visa is officially valid for a maximum of 90 days\./gi, '베트남 전자비자는 공식적으로 최대 90일간 유효합니다.'],
      [/Flexible Entry Options:/gi, '다양한 입국 옵션:'],
      [/When applying for an E-visa, (.+?) travelers can select either a Single Entry or a Multiple Entries option depending on their travel itinerary \((.+?)\)\./gi, '전자비자 신청 시 여행 일정(예: 캄보디아나 라오스 등 주변국 방문 후 재입국)에 따라 단수 입국 또는 복수 입국을 선택할 수 있습니다.'],
      [/Permitted Entry Points:/gi, '허용 입국 검문소:'],
      [/Your approved E-visa is accepted at over 40 international checkpoints across Vietnam, which covers all major international airports \((.+?)\), alongside various land borders and seaports\./gi, '승인된 전자비자는 하노이, 호치민, 다낭 등 주요 공항과 육로/해로를 포함한 40개 이상의 국제 검문소에서 사용 가능합니다.'],
      [/Exemption Requirements:/gi, '무비자 입국 요건:'],
      [/To enter visa-free for 45 days, your (.+?) passport must be valid for at least 6 months from your arrival date, and you should hold a return or onward travel ticket\./gi, '45일 무비자로 입국하려면 여권 유효기간이 6개월 이상 남아있어야 하며 귀국 항공권을 소지해야 합니다.'],
      [/upgraded to enhance flexibility:/gi, '편의성을 향상시키기 위해 개정되었습니다:'],
      [/Vietnam Visa Fees for (.+?) Citizens/gi, '$1 시민을 위한 베트남 비자 수수료'],
      [/Passport & Photo Compliance Checklist:/gi, '여권 및 사진 규격 체크리스트:'],
      [/Passport Validity:/gi, '여권 유효기간:'],
      [/Portrait Photo:/gi, '증명사진:'],
      [/E-Visa Categories & Speed Options:/gi, '전자비자 종류 및 발급 옵션:'],
      [/Standard Processing:/gi, '표준 처리 (3영업일):'],
      [/Urgent 24 Hours:/gi, '긴급 처리 (24시간):'],
      [/Super Urgent 1-4 Hours:/gi, '초긴급 패스트트랙 (1~4시간):'],
      [/Eligible Ports of Entry:/gi, '입국 허용 공항 및 포트:']
    ],
    zh: [
      [/Maximum E-visa Validity:/gi, '电子签证最长有效期：'],
      [/The Vietnam E-visa is officially valid for a maximum of 90 days\./gi, '越南电子签证官方最长有效期为 90 天。'],
      [/Flexible Entry Options:/gi, '灵活的入境选项：'],
      [/When applying for an E-visa, (.+?) travelers can select either a Single Entry or a Multiple Entries option depending on their travel itinerary \((.+?)\)\./gi, '申请电子签证时，您可以根据行程安排（如中途前往柬埔寨或老挝等邻国并再次返回越南），选择单次入境或多次入境。'],
      [/Permitted Entry Points:/gi, '允许入境口岸：'],
      [/Your approved E-visa is accepted at over 40 international checkpoints across Vietnam, which covers all major international airports \((.+?)\), alongside various land borders and seaports\./gi, '获批的电子签证可在越南全境 40 多个国际边境检查站使用，包括各大主要国际机场（如河内内排、胡志明市新山一、岘港机场）以及陆路口岸和海港。'],
      [/Exemption Requirements:/gi, '免签入境要求：'],
      [/To enter visa-free for 45 days, your (.+?) passport must be valid for at least 6 months from your arrival date, and you should hold a return or onward travel ticket\./gi, '如需享有 45 天免签入境，您的护照自入境日起须有至少 6 个月有效期，并持有离境机票。'],
      [/upgraded to enhance flexibility:/gi, '已进行全面升级以提升灵活性：'],
      [/Vietnam Visa Fees for (.+?) Citizens/gi, '$1公民越南签证费用须知'],
      [/Passport & Photo Compliance Checklist:/gi, '护照与照片符合要求 Checklist：'],
      [/Passport Validity:/gi, '护照有效期：'],
      [/Portrait Photo:/gi, '证件照：'],
      [/E-Visa Categories & Speed Options:/gi, '电子签证种类与加急选项：'],
      [/Standard Processing:/gi, '标准办理 (3 个工作日)：'],
      [/Urgent 24 Hours:/gi, '加急办理 (24 工作小时)：'],
      [/Super Urgent 1-4 Hours:/gi, '特急 1-4 小时出签：'],
      [/Eligible Ports of Entry:/gi, '允许入境口岸：']
    ],
    fr: [
      [/Maximum E-visa Validity:/gi, 'Validité maximale de l\'e-Visa:'],
      [/The Vietnam E-visa is officially valid for a maximum of 90 days\./gi, 'L\'e-Visa pour le Vietnam est officiellement valable pour un maximum de 90 jours.'],
      [/Flexible Entry Options:/gi, 'Options d\'entrée flexibles:'],
      [/Permitted Entry Points:/gi, 'Points d\'entrée autorisés:'],
      [/Exemption Requirements:/gi, 'Conditions d\'exemption:'],
      [/upgraded to enhance flexibility:/gi, 'mis à jour pour plus de flexibilité:'],
      [/Passport & Photo Compliance Checklist:/gi, 'Exigences relatives au passeport et aux photos:'],
      [/E-Visa Categories & Speed Options:/gi, 'Types d\'e-Visa et délais de traitement:'],
      [/Standard Processing:/gi, 'Traitement standard (3 jours ouvrés):'],
      [/Urgent 24 Hours:/gi, 'Traitement urgent (24 heures):'],
      [/Super Urgent 1-4 Hours:/gi, 'Traitement très urgent (1 à 4 heures):'],
      [/Eligible Ports of Entry:/gi, 'Points d\'entrée autorisés:']
    ],
    de: [
      [/Maximum E-visa Validity:/gi, 'Maximale Gültigkeit des E-Visums:'],
      [/The Vietnam E-visa is officially valid for a maximum of 90 days\./gi, 'Das Vietnam E-Visum ist offiziell für maximal 90 Tage gültig.'],
      [/Flexible Entry Options:/gi, 'Flexible Einreiseoptionen:'],
      [/Permitted Entry Points:/gi, 'Zugelassene Einreiseorte:'],
      [/Exemption Requirements:/gi, 'Voraussetzungen für die Visumbefreiung:'],
      [/upgraded to enhance flexibility:/gi, 'aktualisiert für mehr Flexibilität:'],
      [/Passport & Photo Compliance Checklist:/gi, 'Pass- und Fotoanforderungen:'],
      [/E-Visa Categories & Speed Options:/gi, 'E-Visum Kategorien und Eiloptionen:'],
      [/Standard Processing:/gi, 'Standardbearbeitung (3 Arbeitstage):'],
      [/Urgent 24 Hours:/gi, 'Eilbearbeitung (24 Stunden):'],
      [/Super Urgent 1-4 Hours:/gi, 'Expressbearbeitung (1 bis 4 Stunden):'],
      [/Eligible Ports of Entry:/gi, 'Zugelassene Einreisehäfen:']
    ],
    es: [
      [/Maximum E-visa Validity:/gi, 'Validez máxima del e-Visa:'],
      [/The Vietnam E-visa is officially valid for a maximum of 90 days\./gi, 'El e-Visa para Vietnam es oficialmente válido por un máximo de 90 días.'],
      [/Flexible Entry Options:/gi, 'Opciones de entrada flexibles:'],
      [/Permitted Entry Points:/gi, 'Puntos de entrada permitidos:'],
      [/Exemption Requirements:/gi, 'Requisitos de exención:'],
      [/upgraded to enhance flexibility:/gi, 'actualizado para mayor flexibilidad:'],
      [/Passport & Photo Compliance Checklist:/gi, 'Lista de verificación de pasaporte y foto:'],
      [/E-Visa Categories & Speed Options:/gi, 'Tipos de e-Visa y opciones de velocidad:'],
      [/Standard Processing:/gi, 'Trámite estándar (3 días laborables):'],
      [/Urgent 24 Hours:/gi, 'Trámite urgente (24 horas):'],
      [/Super Urgent 1-4 Hours:/gi, 'Trámite superurgente (1 a 4 horas):'],
      [/Eligible Ports of Entry:/gi, 'Puertos de entrada autorizados:']
    ],
    he: [
      [/Maximum E-visa Validity:/gi, 'תוקף מרבי לוויזה אלקטרונית:'],
      [/The Vietnam E-visa is officially valid for a maximum of 90 days\./gi, 'הויזה האלקטרונית לווייטנאם תקפה רשמית ל-90 יום.'],
      [/Flexible Entry Options:/gi, 'אפשרויות כניסה גמישות:'],
      [/Permitted Entry Points:/gi, 'נקודות כניסה מורשות:'],
      [/Exemption Requirements:/gi, 'תנאי פטור מויזה:'],
      [/upgraded to enhance flexibility:/gi, 'שודרג לשיפור הגמישות:'],
      [/Passport & Photo Compliance Checklist:/gi, 'דרישות דרכון ותמונה:'],
      [/E-Visa Categories & Speed Options:/gi, 'סוגי ויזה וזמני עיבוד:'],
      [/Eligible Ports of Entry:/gi, 'מעברי גבול מורשים:']
    ],
    vi: [
      [/Maximum E-visa Validity:/gi, 'Thời hạn E-Visa tối đa:'],
      [/The Vietnam E-visa is officially valid for a maximum of 90 days\./gi, 'E-visa Việt Nam có thời hạn chính thức tối đa 90 ngày.'],
      [/Flexible Entry Options:/gi, 'Tùy chọn nhập cảnh linh hoạt:'],
      [/Permitted Entry Points:/gi, 'Cửa khẩu cho phép nhập cảnh:'],
      [/Exemption Requirements:/gi, 'Điều kiện miễn thị thực:'],
      [/upgraded to enhance flexibility:/gi, 'được nâng cấp để linh hoạt hơn:'],
      [/Passport & Photo Compliance Checklist:/gi, 'Điều Kiện Hộ Chiếu & Hồ Sơ Bắt Buộc:'],
      [/E-Visa Categories & Speed Options:/gi, 'Loại E-Visa & Thời Gian Xử Lý:'],
      [/Eligible Ports of Entry:/gi, 'Cửa Khẩu Cho Phép Nhập Cảnh:']
    ],
    en: []
  };

  const rules = commonReplacements[lang] || [];
  for (const [pattern, replacement] of rules) {
    h = h.replace(pattern, replacement);
  }
  return h;
}

/**
 * Helper: Client-side plain text translation using Google GTX Free API
 */
export async function translateTextClientGTX(text: string, targetLang: string): Promise<string> {
  if (!text || !text.trim()) return text;
  const langMap: Record<string, string> = {
    zh: 'zh-CN',
    he: 'iw',
    ja: 'ja',
    ko: 'ko',
    vi: 'vi',
    fr: 'fr',
    de: 'de',
    es: 'es'
  };
  const tl = langMap[targetLang] || targetLang;

  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${tl}&dt=t&q=${encodeURIComponent(text)}`;
    const res = await fetch(url);
    if (!res.ok) return text;
    const data = await res.json();
    if (Array.isArray(data) && Array.isArray(data[0])) {
      return data[0].map((item: any) => (item && item[0]) ? item[0] : '').join('');
    }
  } catch (err) {
    console.warn('Client GTX translation error:', err);
  }
  return text;
}

/**
 * Helper: Client-side HTML content translation node-by-node
 */
export async function translateHtmlClientGTX(html: string, targetLang: string): Promise<string> {
  if (!html || !html.trim()) return html;
  const parts = html.split(/(<[^>]+>)/g);
  const textIndices: number[] = [];
  const textPromises: Promise<string>[] = [];

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (!part || part.startsWith('<') || !part.trim()) continue;
    if (/^[\d\s\p{P}]+$/u.test(part.trim())) continue;

    textIndices.push(i);
    textPromises.push(translateTextClientGTX(part, targetLang));
  }

  if (textPromises.length === 0) return html;

  const translatedTexts = await Promise.all(textPromises);
  for (let k = 0; k < textIndices.length; k++) {
    parts[textIndices[k]] = translatedTexts[k];
  }

  return parts.join('');
}

/**
 * Translate a BlogPost object into target language asynchronously
 */
export async function translateBlogPost(post: BlogPost, lang: Language, skipContent: boolean = false): Promise<BlogPost> {
  if (!post || lang === 'en') {
    return post;
  }

  const slug = (post.slug || post.id || '').toString().toLowerCase();

  // 1. Check dictionary pre-baked translations first
  if (BLOG_POST_TRANSLATIONS[slug]) {
    const dict = BLOG_POST_TRANSLATIONS[slug];
    if (dict.title[lang]) {
      return {
        ...post,
        title: dict.title[lang],
        excerpt: dict.excerpt[lang] || post.excerpt,
        content: dict.content[lang] || post.content,
        category: getLocalizedCategory(post.category, lang),
        readTime: getLocalizedReadTime(post.readTime, lang)
      };
    }
  }

  // 2. Check Local/Memory Cache
  const cached = getFromCache(slug, lang);
  if (cached) {
    const isContentTranslated = cached.content && cached.content.length > 50 && cached.content !== post.content;
    if (skipContent || isContentTranslated) {
      return {
        ...post,
        title: cached.title,
        excerpt: cached.excerpt,
        content: skipContent ? post.content : cached.content,
        category: getLocalizedCategory(post.category, lang),
        readTime: getLocalizedReadTime(post.readTime, lang)
      };
    }
  }

  // 3. Request server translation via Gemini AI
  try {
    const res = await fetch('/api/translate-article', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: post.id,
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        content: skipContent ? '' : post.content,
        targetLang: lang,
        skipContent
      })
    });

    if (res.ok) {
      const data = await res.json();
      if (data.success && data.title) {
        const translatedObj = {
          title: data.title,
          excerpt: data.excerpt || post.excerpt,
          content: data.content || ''
        };
        saveToCache(slug, lang, translatedObj, skipContent);
        return {
          ...post,
          title: translatedObj.title,
          excerpt: translatedObj.excerpt,
          content: skipContent ? post.content : (translatedObj.content || post.content),
          category: getLocalizedCategory(post.category, lang),
          readTime: getLocalizedReadTime(post.readTime, lang)
        };
      }
    }
  } catch (err) {
    console.warn('Post translation API call failed (static hosting fallback):', err);
  }

  // 4. Client-Side GTX Translation Fallback (Guaranteed to work on pure static hosting like cPanel/GitHub Pages)
  try {
    const [clientTitle, clientExcerpt, clientContent] = await Promise.all([
      translateTextClientGTX(post.title, lang),
      translateTextClientGTX(post.excerpt, lang),
      skipContent ? Promise.resolve('') : translateHtmlClientGTX(post.content, lang)
    ]);

    const translatedObj = {
      title: clientTitle || post.title,
      excerpt: clientExcerpt || post.excerpt,
      content: clientContent || ''
    };

    saveToCache(slug, lang, translatedObj, skipContent);

    return {
      ...post,
      title: translatedObj.title,
      excerpt: translatedObj.excerpt,
      content: skipContent ? post.content : (translatedObj.content || post.content),
      category: getLocalizedCategory(post.category, lang),
      readTime: getLocalizedReadTime(post.readTime, lang)
    };
  } catch (clientErr) {
    console.warn('Client-side GTX translation failed:', clientErr);
  }

  // Fallback: apply rule-based text/HTML localizer
  const fallbackTitle = fallbackTranslateTitle(post.title, lang);
  const fallbackExcerpt = fallbackTranslateTitle(post.excerpt, lang);
  const fallbackContent = skipContent ? post.content : fallbackTranslateHtml(post.content, lang);

  return {
    ...post,
    title: fallbackTitle,
    excerpt: fallbackExcerpt,
    content: fallbackContent,
    category: getLocalizedCategory(post.category, lang),
    readTime: getLocalizedReadTime(post.readTime, lang)
  };
}

/**
 * Translate a list of BlogPosts asynchronously (skips full content for card grid speed)
 */
export async function translateBlogPosts(posts: BlogPost[], lang: Language, skipContent: boolean = true): Promise<BlogPost[]> {
  if (lang === 'en' || !posts || posts.length === 0) {
    return posts;
  }

  return Promise.all(posts.map(p => translateBlogPost(p, lang, skipContent)));
}

/**
 * Translate a WpFaqItem object into target language asynchronously
 */
export async function translateWpFaq(faq: WpFaqItem, lang: Language): Promise<WpFaqItem> {
  if (!faq || lang === 'en') {
    return faq;
  }

  const slug = (faq.slug || faq.id || '').toString().toLowerCase();
  const cached = getFromCache(`faq_${slug}`, lang);
  if (cached) {
    return {
      ...faq,
      question: cached.title,
      answerSummary: cached.excerpt,
      fullAnswerHtml: cached.content
    };
  }

  try {
    const res = await fetch('/api/translate-article', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: faq.id,
        slug: faq.slug,
        title: faq.question,
        excerpt: faq.answerSummary,
        content: faq.fullAnswerHtml,
        targetLang: lang
      })
    });

    if (res.ok) {
      const data = await res.json();
      if (data.success && data.title) {
        const translatedObj = {
          title: data.title,
          excerpt: data.excerpt || faq.answerSummary,
          content: data.content || faq.fullAnswerHtml
        };
        saveToCache(`faq_${slug}`, lang, translatedObj);
        return {
          ...faq,
          question: translatedObj.title,
          answerSummary: translatedObj.excerpt,
          fullAnswerHtml: translatedObj.content
        };
      }
    }
  } catch (err) {
    console.warn('FAQ translation API call failed (static hosting fallback):', err);
  }

  // Client-Side GTX Fallback for Static Hosting
  try {
    const [clientQuestion, clientSummary, clientFullHtml] = await Promise.all([
      translateTextClientGTX(faq.question, lang),
      translateTextClientGTX(faq.answerSummary, lang),
      translateHtmlClientGTX(faq.fullAnswerHtml, lang)
    ]);

    const translatedObj = {
      title: clientQuestion || faq.question,
      excerpt: clientSummary || faq.answerSummary,
      content: clientFullHtml || faq.fullAnswerHtml
    };

    saveToCache(`faq_${slug}`, lang, translatedObj);

    return {
      ...faq,
      question: translatedObj.title,
      answerSummary: translatedObj.excerpt,
      fullAnswerHtml: translatedObj.content
    };
  } catch (clientErr) {
    console.warn('Client-side GTX FAQ translation failed:', clientErr);
  }

  return faq;
}

/**
 * Translate a list of WpFaqItems asynchronously
 */
export async function translateWpFaqs(faqs: WpFaqItem[], lang: Language): Promise<WpFaqItem[]> {
  if (lang === 'en' || !faqs || faqs.length === 0) {
    return faqs;
  }

  return Promise.all(faqs.map(f => translateWpFaq(f, lang)));
}
