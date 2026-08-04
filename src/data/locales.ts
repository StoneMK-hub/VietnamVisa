import { Language } from '../types';

export interface CountryLocale {
  code: string;           // e.g. 'he-il'
  shortCode: string;      // e.g. 'he'
  lang: Language;         // e.g. 'he'
  countryName: string;    // e.g. 'Israel'
  countryNameVi: string;  // e.g. 'Is-ra-en'
  name: string;           // e.g. 'עברית (ישראל)'
  englishName: string;    // e.g. 'Hebrew (Israel)'
  flag: string;           // e.g. '🇮🇱'
  hreflang: string;       // e.g. 'he-IL'
  isRtl?: boolean;        // e.g. true for Hebrew
}

export const COUNTRY_LOCALES: CountryLocale[] = [
  {
    code: 'en-us',
    shortCode: 'en',
    lang: 'en',
    countryName: 'United States',
    countryNameVi: 'Mỹ',
    name: 'English (US)',
    englishName: 'English (United States)',
    flag: '🇺🇸',
    hreflang: 'en-US',
    isRtl: false
  },
  {
    code: 'vi-vn',
    shortCode: 'vi',
    lang: 'vi',
    countryName: 'Vietnam',
    countryNameVi: 'Việt Nam',
    name: 'Tiếng Việt',
    englishName: 'Vietnamese (Vietnam)',
    flag: '🇻🇳',
    hreflang: 'vi-VN',
    isRtl: false
  },
  {
    code: 'he-il',
    shortCode: 'he',
    lang: 'he',
    countryName: 'Israel',
    countryNameVi: 'Israel',
    name: 'עברית (ישראל)',
    englishName: 'Hebrew (Israel)',
    flag: '🇮🇱',
    hreflang: 'he-IL',
    isRtl: true
  },
  {
    code: 'fr-fr',
    shortCode: 'fr',
    lang: 'fr',
    countryName: 'France',
    countryNameVi: 'Pháp',
    name: 'Français (France)',
    englishName: 'French (France)',
    flag: '🇫🇷',
    hreflang: 'fr-FR',
    isRtl: false
  },
  {
    code: 'de-de',
    shortCode: 'de',
    lang: 'de',
    countryName: 'Germany',
    countryNameVi: 'Đức',
    name: 'Deutsch (Deutschland)',
    englishName: 'German (Germany)',
    flag: '🇩🇪',
    hreflang: 'de-DE',
    isRtl: false
  },
  {
    code: 'ja-jp',
    shortCode: 'ja',
    lang: 'ja',
    countryName: 'Japan',
    countryNameVi: 'Nhật Bản',
    name: '日本語 (日本)',
    englishName: 'Japanese (Japan)',
    flag: '🇯🇵',
    hreflang: 'ja-JP',
    isRtl: false
  },
  {
    code: 'zh-cn',
    shortCode: 'zh',
    lang: 'zh',
    countryName: 'China',
    countryNameVi: 'Trung Quốc',
    name: '中文 (中国)',
    englishName: 'Chinese (Simplified)',
    flag: '🇨🇳',
    hreflang: 'zh-CN',
    isRtl: false
  },
  {
    code: 'ko-kr',
    shortCode: 'ko',
    lang: 'ko',
    countryName: 'South Korea',
    countryNameVi: 'Hàn Quốc',
    name: '한국어 (대한민국)',
    englishName: 'Korean (South Korea)',
    flag: '🇰🇷',
    hreflang: 'ko-KR',
    isRtl: false
  },
  {
    code: 'es-es',
    shortCode: 'es',
    lang: 'es',
    countryName: 'Spain',
    countryNameVi: 'Tây Ban Nha',
    name: 'Español (España)',
    englishName: 'Spanish (Spain)',
    flag: '🇪🇸',
    hreflang: 'es-ES',
    isRtl: false
  }
];

export const DEFAULT_LOCALE = COUNTRY_LOCALES[0]; // en-us

/** Find CountryLocale by code (e.g. 'he-il', 'he', 'vi-vn', 'vi') */
export function getLocaleByCode(code: string): CountryLocale {
  if (!code) return DEFAULT_LOCALE;
  const lower = code.toLowerCase();
  
  // Direct match for code or shortCode
  const found = COUNTRY_LOCALES.find(
    l => l.code === lower || l.shortCode === lower || l.lang === lower
  );
  if (found) return found;

  return DEFAULT_LOCALE;
}

/** Detect locale from pathname (e.g., /he-il/blog -> locale: he-il, cleanPath: /blog) */
export function parseLocaleAndPath(pathname: string): { locale: CountryLocale; cleanPath: string; hasLocalePrefix: boolean } {
  const normalized = pathname.toLowerCase();
  const segments = normalized.split('/').filter(Boolean);

  if (segments.length === 0) {
    return { locale: DEFAULT_LOCALE, cleanPath: '/', hasLocalePrefix: false };
  }

  const firstSegment = segments[0];
  const matchedLocale = COUNTRY_LOCALES.find(
    l => l.code === firstSegment || l.shortCode === firstSegment
  );

  if (matchedLocale) {
    const cleanSegments = segments.slice(1);
    const cleanPath = cleanSegments.length === 0 ? '/' : `/${cleanSegments.join('/')}`;
    return { locale: matchedLocale, cleanPath, hasLocalePrefix: true };
  }

  return { locale: DEFAULT_LOCALE, cleanPath: pathname, hasLocalePrefix: false };
}

/** Build full pathname with locale prefix (e.g. getLocalePath('/blog', 'he-il') => '/he-il/blog') */
export function getLocalePath(cleanPath: string, localeCode: string): string {
  const locale = getLocaleByCode(localeCode);
  const normalizedPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
  
  if (normalizedPath === '/') {
    return `/${locale.code}`;
  }
  
  return `/${locale.code}${normalizedPath}`;
}

/** Auto detect best locale from browser navigator.language, timezone or localStorage */
export function autoDetectLocale(): CountryLocale {
  // 1. Check localStorage first (user explicit preference)
  try {
    const saved = localStorage.getItem('user_locale');
    if (saved) {
      const loc = getLocaleByCode(saved);
      if (loc) return loc;
    }
  } catch (e) {
    // Ignore storage errors
  }

  // 2. Check browser language
  if (typeof navigator !== 'undefined') {
    const browserLangs = navigator.languages || [navigator.language || ''];
    for (const bLang of browserLangs) {
      if (!bLang) continue;
      const lower = bLang.toLowerCase();
      
      if (lower.startsWith('he') || lower.startsWith('iw')) return getLocaleByCode('he-il');
      if (lower.startsWith('vi')) return getLocaleByCode('vi-vn');
      if (lower.startsWith('fr')) return getLocaleByCode('fr-fr');
      if (lower.startsWith('de')) return getLocaleByCode('de-de');
      if (lower.startsWith('ja')) return getLocaleByCode('ja-jp');
      if (lower.startsWith('zh')) return getLocaleByCode('zh-cn');
      if (lower.startsWith('ko')) return getLocaleByCode('ko-kr');
      if (lower.startsWith('es')) return getLocaleByCode('es-es');
      if (lower.startsWith('en')) return getLocaleByCode('en-us');
    }
  }

  // 3. Timezone fallback
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz) {
      const lowerTz = tz.toLowerCase();
      if (lowerTz.includes('ho_chi_minh') || lowerTz.includes('saigon') || lowerTz.includes('hanoi')) return getLocaleByCode('vi-vn');
      if (lowerTz.includes('jerusalem') || lowerTz.includes('tel_aviv')) return getLocaleByCode('he-il');
      if (lowerTz.includes('tokyo')) return getLocaleByCode('ja-jp');
      if (lowerTz.includes('seoul')) return getLocaleByCode('ko-kr');
      if (lowerTz.includes('paris')) return getLocaleByCode('fr-fr');
      if (lowerTz.includes('berlin')) return getLocaleByCode('de-de');
      if (lowerTz.includes('shanghai') || lowerTz.includes('chongqing') || lowerTz.includes('hong_kong')) return getLocaleByCode('zh-cn');
      if (lowerTz.includes('madrid')) return getLocaleByCode('es-es');
    }
  } catch (e) {
    // Ignore
  }

  return DEFAULT_LOCALE;
}
