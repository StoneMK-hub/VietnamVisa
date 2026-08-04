import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Search, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft,
  ChevronRight,
  Sparkles, 
  BookOpen, 
  X, 
  Calendar, 
  User, 
  ExternalLink, 
  ShieldAlert, 
  FileText,
  ZoomIn,
  ZoomOut
} from 'lucide-react';
import { Language } from '../types';
import { COUNTRIES_DATA } from '../data/countries';
import { TRANSLATIONS, tMulti } from '../data/translations';
import { 
  BlogPost, 
  fetchWpRequirementPosts, 
  getRequirementPostForCountry,
  fetchWpPostBySlug 
} from '../services/wordpressApi';
import { getExactCountryRequirementUrl } from '../data/countryUrls';

import { CustomSEOData } from './SEOMetadata';
import { getRequirementSlugFromPath } from '../routes';

// Localized Country Name Helper
export function getLocalizedCountryName(c: { countryName: string; countryNameVi: string; code?: string }, lang: Language): string {
  if (lang === 'vi') return c.countryNameVi || c.countryName;
  if (lang === 'en') return c.countryName;
  
  const countryNameMap: Record<string, Record<Language, string>> = {
    'US': { en: 'United States', vi: 'Mỹ (Hoa Kỳ)', fr: 'États-Unis', de: 'Vereinigte Staaten', ja: 'アメリカ合衆国', zh: '美国', he: 'ארצות הברית', ko: '미국', es: 'Estados Unidos' },
    'GB': { en: 'United Kingdom', vi: 'Vương quốc Anh', fr: 'Royaume-Uni', de: 'Vereinigtes Königreich', ja: 'イギリス', zh: '英国', he: 'הממלכה המאוחדת', ko: '영국', es: 'Reino Unido' },
    'DE': { en: 'Germany', vi: 'Đức', fr: 'Allemagne', de: 'Deutschland', ja: 'ドイツ', zh: '德国', he: 'גרמניה', ko: '독일', es: 'Alemania' },
    'FR': { en: 'France', vi: 'Pháp', fr: 'France', de: 'Frankreich', ja: 'フランス', zh: '法国', he: 'צרפת', ko: 'פנים', es: 'Francia' },
    'IT': { en: 'Italy', vi: 'Ý (Italia)', fr: 'Italie', de: 'Italien', ja: 'イタリア', zh: '意大利', he: 'איטליה', ko: '이탈리아', es: 'Italia' },
    'ES': { en: 'Spain', vi: 'Tây Ban Nha', fr: 'Espagne', de: 'Spanien', ja: 'スペイン', zh: '西班牙', he: 'ספרד', ko: '스페인', es: 'España' },
    'RU': { en: 'Russia', vi: 'Nga', fr: 'Russie', de: 'Russland', ja: 'ロシア', zh: '俄罗斯', he: 'רוסיה', ko: '러시아', es: 'Rusia' },
    'JP': { en: 'Japan', vi: 'Nhật Bản', fr: 'Japon', de: 'Japan', ja: '日本', zh: '日本', he: 'יפן', ko: '일본', es: 'Japón' },
    'KR': { en: 'South Korea', vi: 'Hàn Quốc', fr: 'Corée du Sud', de: 'Südkorea', ja: '韓国', zh: '韩国', he: 'קוריאה הדרומית', ko: '대한민국', es: 'Corea del Sur' },
    'CN': { en: 'China', vi: 'Trung Quốc', fr: 'Chine', de: 'China', ja: '中国', zh: '中国', he: 'סין', ko: '중국', es: 'China' },
    'TW': { en: 'Taiwan', vi: 'Đài Loan', fr: 'Taïwan', de: 'Taiwan', ja: '台湾', zh: '台湾', he: 'טייוואן', ko: '대만', es: 'Taiwán' },
    'IN': { en: 'India', vi: 'Ấn Độ', fr: 'Inde', de: 'Indien', ja: 'インド', zh: '印度', he: 'הודו', ko: '인도', es: 'India' },
    'AU': { en: 'Australia', vi: 'Úc (Australia)', fr: 'Australie', de: 'Australien', ja: 'オーストラリア', zh: '澳大利亚', he: 'אוסטרליה', ko: '호주', es: 'Australia' },
    'CA': { en: 'Canada', vi: 'Canada', fr: 'Canada', de: 'Kanada', ja: 'カナダ', zh: '加拿大', he: 'קנדה', ko: '캐나다', es: 'Canadá' },
    'BE': { en: 'Belgium', vi: 'Bỉ', fr: 'Belgique', de: 'Belgien', ja: 'ベルギー', zh: '比利时', he: 'בלגיה', ko: '벨기에', es: 'Bélgica' },
    'NL': { en: 'Netherlands', vi: 'Hà Lan', fr: 'Pays-Bas', de: 'Niederlande', ja: 'オランダ', zh: '荷兰', he: 'הולנד', ko: '네덜란드', es: 'Países Bajos' },
    'CH': { en: 'Switzerland', vi: 'Thụy Sĩ', fr: 'Suisse', de: 'Schweiz', ja: 'スイス', zh: '瑞士', he: 'שווייץ', ko: '스위스', es: 'Suiza' },
    'SE': { en: 'Sweden', vi: 'Thụy Điển', fr: 'Suède', de: 'Schweden', ja: 'スウェーデン', zh: '瑞典', he: 'שוודיה', ko: '스웨덴', es: 'Suecia' },
    'NO': { en: 'Norway', vi: 'Na Uy', fr: 'Norvège', de: 'Norwegen', ja: 'ノルウェー', zh: '挪威', he: 'נורווגיה', ko: '노르웨이', es: 'Noruega' },
    'DK': { en: 'Denmark', vi: 'Đan Mạch', fr: 'Danemark', de: 'Dänemark', ja: 'デンマーク', zh: '丹麦', he: 'דנמרק', ko: '덴마크', es: 'Dinamarca' },
    'FI': { en: 'Finland', vi: 'Phần Lan', fr: 'Finlande', de: 'Finnland', ja: 'フィンランド', zh: '芬兰', he: 'פינלנד', ko: '핀란드', es: 'Finlandia' },
    'SG': { en: 'Singapore', vi: 'Singapore', fr: 'Singapour', de: 'Singapur', ja: 'シンガポール', zh: '新加坡', he: 'סינגפור', ko: '싱가포르', es: 'Singapur' },
    'TH': { en: 'Thailand', vi: 'Thái Lan', fr: 'Thaïlande', de: 'Thailand', ja: 'タイ', zh: '泰国', he: 'תאילנד', ko: '태국', es: 'Tailandia' },
    'MY': { en: 'Malaysia', vi: 'Malaysia', fr: 'Malaisie', de: 'Malaysia', ja: 'マレーシア', zh: '马来西亚', he: 'מלזיה', ko: '말레이시아', es: 'Malasia' },
    'ID': { en: 'Indonesia', vi: 'Indonesia', fr: 'Indonésie', de: 'Indonesien', ja: 'インドネシア', zh: '印度尼西亚', he: 'אינדונזיה', ko: '인โด네시아', es: 'Indonesia' },
    'PH': { en: 'Philippines', vi: 'Philippines', fr: 'Philippines', de: 'Philippinen', ja: 'フィリピン', zh: '菲律宾', he: 'פיליפינים', ko: '필리핀', es: 'Filipinas' }
  };

  const code = c.code?.toUpperCase();
  if (code && countryNameMap[code] && countryNameMap[code][lang]) {
    return countryNameMap[code][lang];
  }

  return c.countryName;
}

// Localized Country Note Helper
export function getLocalizedCountryNotes(c: { exemptionDays: number; notes: string; notesVi: string }, lang: Language): string {
  if (c.exemptionDays > 0) {
    return tMulti(lang, {
      en: `Visa exemption up to ${c.exemptionDays} days. 90-day e-Visa available.`,
      vi: `Miễn visa ${c.exemptionDays} ngày. Đủ điều kiện e-Visa 90 ngày.`,
      fr: `Exemption de visa jusqu'à ${c.exemptionDays} jours. e-Visa 90 jours disponible.`,
      de: `Visumbefreiung bis zu ${c.exemptionDays} Tage. 90-Tage-e-Visum verfügbar.`,
      ja: `最大${c.exemptionDays}日間のビザ免除。90日間e-Visa申請可能。`,
      zh: `免签停留长达 ${c.exemptionDays} 天。可申请 90 天电子签证。`,
      he: `פטור וויזה עד ${c.exemptionDays} ימים. ויזה אלקטרונית ל-90 יום זמינה.`,
      ko: `최대 ${c.exemptionDays}일 비자 면제. 90일 전자비자 신청 가능.`,
      es: `Exención de visado hasta ${c.exemptionDays} días. e-Visa de 90 días disponible.`
    });
  }

  return tMulti(lang, {
    en: 'Eligible for 30-day and 90-day Single/Multiple Entry e-Visa.',
    vi: 'Được cấp e-Visa 30 ngày hoặc 90 ngày (1 hoặc nhiều lần).',
    fr: 'Éligible à l\'e-Visa 30 et 90 jours (entrée simple/multiple).',
    de: 'Berechtigt für 30- und 90-Tage e-Visum (ein- oder mehrmalige Einreise).',
    ja: '30日および90日間の一次/数次e-Visaの対象。',
    zh: '符合 30 天和 90 天单次/多次入境电子签证条件。',
    he: 'זכאי לוויזה אלקטרונית ל-30 ו-90 יום (כניסה חד/רב פעמית).',
    ko: '30일 및 90일 단수/복수 전자비자 신청 가능.',
    es: 'Elegible para e-Visa de 30 y 90 días (entrada única/múltiple).'
  });
}

interface RequirementsCheckerProps {
  currentLang: Language;
  onApplyForCountry: (countryName: string) => void;
  isHome?: boolean;
  onViewAll?: () => void;
  onSEOChange?: (seoData: CustomSEOData | null) => void;
}

// Top featured countries for homepage display (top visitor volume to Vietnam)
const TOP_FEATURED_CODES = [
  'US', 'CN', 'KR', 'JP', 'TW', 'IN', 'AU', 'GB'
];

export const RequirementsChecker: React.FC<RequirementsCheckerProps> = ({
  currentLang,
  onApplyForCountry,
  isHome = false,
  onViewAll,
  onSEOChange
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const isVi = currentLang === 'vi';
  const [searchTerm, setSearchTerm] = useState('');
  const [wpPosts, setWpPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedCountryName, setSelectedCountryName] = useState<string>('');
  const [loadingCode, setLoadingCode] = useState<string | null>(null);

  // Interactive Image Lightbox Zoom state
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'IMG') {
      const img = target as HTMLImageElement;
      if (img.src) {
        setLightboxImage({ src: img.src, alt: img.alt || selectedPost?.title || '' });
        setZoomLevel(1);
      }
    }
  };

  useEffect(() => {
    async function loadReqPosts() {
      try {
        const posts = await fetchWpRequirementPosts();
        setWpPosts(posts);
      } catch (err) {
        console.warn('Error fetching WP requirement posts:', err);
      }
    }
    loadReqPosts();
  }, []);

  // Dynamically derive and order countries list based on WordPress Category "Visa Requirements" (wpPosts)
  const dynamicCountries = React.useMemo(() => {
    const list = [...COUNTRIES_DATA];
    if (!wpPosts || wpPosts.length === 0) {
      return list;
    }

    // Set of country codes that have matching posts in WordPress REST API
    const wpMatchedCodes = new Set<string>();
    const extraSynthesized: typeof COUNTRIES_DATA[0][] = [];

    wpPosts.forEach((post, idx) => {
      const titleLower = post.title.toLowerCase();
      const slugLower = post.slug.toLowerCase();

      const matched = list.find(c => {
        const cNameLower = c.countryName.toLowerCase();
        const cViLower = c.countryNameVi.toLowerCase();
        return (
          titleLower.includes(cNameLower) ||
          slugLower.includes(cNameLower) ||
          titleLower.includes(cViLower) ||
          (c.code === 'US' && (titleLower.includes('united states') || titleLower.includes('us ') || titleLower.includes('american'))) ||
          (c.code === 'GB' && (titleLower.includes('united kingdom') || titleLower.includes('uk ') || titleLower.includes('british')))
        );
      });

      if (matched) {
        wpMatchedCodes.add(matched.code);
      } else {
        // Extract country name from post title e.g., "Vietnam Visa Requirements for [Country] Citizens"
        const matchTitle = post.title.match(/for\s+([A-Za-z\s]+?)\s+(citizens|passport|national|travelers|202\d|$)/i);
        if (matchTitle && matchTitle[1]) {
          const rawCountry = matchTitle[1].trim();
          if (rawCountry.length > 2) {
            const cleanCountryName = rawCountry.charAt(0).toUpperCase() + rawCountry.slice(1);
            const synCode = `WP${post.id || idx}`;
            if (!extraSynthesized.some(e => e.countryName.toLowerCase() === cleanCountryName.toLowerCase())) {
              const synCountry: typeof COUNTRIES_DATA[0] = {
                code: synCode,
                countryName: cleanCountryName,
                countryNameVi: cleanCountryName,
                flagEmoji: '🌐',
                exemptionDays: 0,
                eVisaEligible: true,
                visaOnArrivalEligible: true,
                notes: 'Eligible for 30-day and 90-day e-Visa.',
                notesVi: 'Được cấp e-Visa 30-90 ngày.'
              };
              extraSynthesized.push(synCountry);
              wpMatchedCodes.add(synCode);
            }
          }
        }
      }
    });

    const combinedList = [...list, ...extraSynthesized];

    // Re-order list so countries with live WordPress category posts are prioritized first
    return combinedList.sort((a, b) => {
      const aHasWp = wpMatchedCodes.has(a.code);
      const bHasWp = wpMatchedCodes.has(b.code);
      if (aHasWp && !bHasWp) return -1;
      if (!aHasWp && bHasWp) return 1;
      return 0;
    });
  }, [wpPosts]);

  const handleOpenCountryPost = async (c: typeof COUNTRIES_DATA[0], updateUrl = true) => {
    const exactUrl = getExactCountryRequirementUrl(c.code, c.countryName);
    const slug = exactUrl.split('/').filter(Boolean).pop() || '';

    setSelectedCountryName(c.countryName);
    setLoadingCode(c.code);

    if (updateUrl) {
      const targetPath = `/vietnam-visa-requirements/${slug}`;
      if (window.location.pathname !== targetPath) {
        window.history.pushState({}, '', targetPath);
        window.dispatchEvent(new Event('popstate'));
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });

    let postToDisplay: BlogPost | null = null;

    // 1. Try finding in pre-fetched wpPosts array
    const existingPost = wpPosts.find(p => 
      p.slug === slug || 
      (p.link && p.link.replace(/\/$/, '').endsWith(slug)) ||
      p.title.toLowerCase().includes(c.countryName.toLowerCase())
    );

    if (existingPost && existingPost.content && existingPost.content.length > 300) {
      postToDisplay = {
        ...existingPost,
        link: `${window.location.origin}/vietnam-visa-requirements/${slug}`
      };
    } else if (slug) {
      // 2. Fetch live post directly from WordPress API by slug
      const livePost = await fetchWpPostBySlug(slug);
      if (livePost && livePost.content) {
        postToDisplay = {
          ...livePost,
          link: `${window.location.origin}/vietnam-visa-requirements/${slug}`
        };
      }
    }

    if (!postToDisplay) {
      // 3. Fallback to structured article if WP API has no specific post yet
      const fallbackPost = getRequirementPostForCountry(
        c.countryName,
        c.countryNameVi,
        c.code,
        c.exemptionDays,
        c.notes,
        c.notesVi,
        currentLang,
        wpPosts
      );
      postToDisplay = {
        ...fallbackPost,
        link: `${window.location.origin}/vietnam-visa-requirements/${slug}`
      };
    }

    setSelectedPost(postToDisplay);
    setLoadingCode(null);

    // Update dynamic SEO metadata for head tag injection
    if (onSEOChange && postToDisplay) {
      onSEOChange({
        title: postToDisplay.title,
        description: postToDisplay.excerpt,
        canonicalUrl: `${window.location.origin}/vietnam-visa-requirements/${slug}`,
        ogImage: postToDisplay.featuredImage,
        ogType: 'article',
        articleAuthor: postToDisplay.author || 'Vietnam Visa Advisory Team'
      });
    }
  };

  const handleCloseArticle = () => {
    setSelectedPost(null);
    setSelectedCountryName('');
    window.history.pushState({}, '', isHome ? '/' : '/vietnam-visa-requirements');
    window.dispatchEvent(new Event('popstate'));
    if (onSEOChange) {
      onSEOChange(null);
    }
  };

  useEffect(() => {
    const checkUrlRoute = async () => {
      const pathname = window.location.pathname;
      const slugFromPath = getRequirementSlugFromPath(pathname);
      const hash = window.location.hash.toLowerCase();

      if (slugFromPath) {
        const matchedCountry = dynamicCountries.find(c => {
          const exactUrl = getExactCountryRequirementUrl(c.code, c.countryName);
          const cSlug = exactUrl.split('/').filter(Boolean).pop();
          return cSlug === slugFromPath || slugFromPath.includes(c.countryName.toLowerCase().replace(/\s+/g, '-'));
        }) || COUNTRIES_DATA.find(c => {
          const exactUrl = getExactCountryRequirementUrl(c.code, c.countryName);
          const cSlug = exactUrl.split('/').filter(Boolean).pop();
          return cSlug === slugFromPath || slugFromPath.includes(c.countryName.toLowerCase().replace(/\s+/g, '-'));
        });

        if (matchedCountry) {
          await handleOpenCountryPost(matchedCountry, false);
          return;
        }

        // Direct slug lookup if not in local list
        setLoadingCode('slug');
        const livePost = await fetchWpPostBySlug(slugFromPath);
        if (livePost) {
          setSelectedPost(livePost);
          setSelectedCountryName(livePost.title);
          if (onSEOChange) {
            onSEOChange({
              title: livePost.title,
              description: livePost.excerpt,
              canonicalUrl: `${window.location.origin}/vietnam-visa-requirements/${slugFromPath}`,
              ogImage: livePost.featuredImage,
              ogType: 'article',
              articleAuthor: livePost.author || 'Vietnam Visa Advisory Team'
            });
          }
        }
        setLoadingCode(null);
      } else if (hash && hash.startsWith('#req-')) {
        const code = hash.replace('#req-', '').toUpperCase();
        const country = dynamicCountries.find(c => c.code.toUpperCase() === code) || COUNTRIES_DATA.find(c => c.code.toUpperCase() === code);
        if (country) {
          await handleOpenCountryPost(country, false);
        }
      }
    };

    checkUrlRoute();
    window.addEventListener('popstate', checkUrlRoute);
    window.addEventListener('hashchange', checkUrlRoute);
    return () => {
      window.removeEventListener('popstate', checkUrlRoute);
      window.removeEventListener('hashchange', checkUrlRoute);
    };
  }, [wpPosts, dynamicCountries]);

  // Top 8 featured countries ordered by traveler volume to Vietnam for homepage
  const top8Countries = TOP_FEATURED_CODES
    .map(code => dynamicCountries.find(c => c.code === code) || COUNTRIES_DATA.find(c => c.code === code))
    .filter((c): c is typeof COUNTRIES_DATA[0] => c !== undefined);

  const filteredCountries = dynamicCountries.filter(c =>
    c.countryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.countryNameVi.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const countriesToDisplay = isHome ? top8Countries : filteredCountries;

  if (selectedPost) {
    return (
      <div id="requirement-article-view" className="space-y-6 sm:space-y-8 animate-fade-in pb-12">
        {/* Top Breadcrumb & Navigation Bar (Static Flow) */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
            <button
              onClick={handleCloseArticle}
              className="inline-flex items-center gap-1.5 font-bold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{isVi ? 'Tất Cả Quy Định Visa' : 'All Visa Requirements'}</span>
            </button>
            <ChevronRight className="w-4 h-4 text-slate-300 shrink-0" />
            <span className="font-semibold text-slate-800 truncate max-w-[200px] sm:max-w-md">
              {selectedCountryName || selectedPost.title}
            </span>
          </div>

          <button
            onClick={handleCloseArticle}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-slate-900 hover:bg-indigo-600 px-3.5 py-2 rounded-xl transition-all cursor-pointer shadow-xs"
          >
            <X className="w-4 h-4" />
            <span>{isVi ? 'Đóng Bài Viết' : 'Close Article'}</span>
          </button>
        </div>

        {/* Article Reader Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden">
          {/* Header Banner Image */}
          <div className="relative h-60 sm:h-80 md:h-96 bg-slate-950 overflow-hidden">
            <img
              src={selectedPost.featuredImage}
              alt={selectedPost.title}
              className="w-full h-full object-cover opacity-80 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 space-y-3 text-white max-w-4xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-indigo-600 text-white text-[11px] font-black px-3 py-1 rounded-lg uppercase tracking-wider shadow-md">
                  {selectedPost.category || 'Visa Requirements'}
                </span>
                <span className="bg-emerald-500/90 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-lg flex items-center gap-1 backdrop-blur-md">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {isVi ? 'Dữ Liệu Trực Tiếp 2026' : 'Direct 2026 Data'}
                </span>
              </div>

              <h1 className="text-xl sm:text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
                {selectedPost.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-1">
                <span className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-md px-2.5 py-1 rounded-lg">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  {selectedPost.date}
                </span>
                <span className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-md px-2.5 py-1 rounded-lg">
                  <User className="w-3.5 h-3.5 text-emerald-400" />
                  {selectedPost.author}
                </span>
                <span className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-md px-2.5 py-1 rounded-lg">
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                  {selectedPost.readTime || '4 min read'}
                </span>
              </div>
            </div>
          </div>

          {/* Article Body Content */}
          <div className="p-6 sm:p-10 md:p-12 space-y-8">
            <div 
              onClick={handleContentClick}
              className="prose prose-slate lg:prose-lg max-w-none text-slate-800 leading-relaxed space-y-5 break-words cursor-pointer [&_img]:w-full [&_img]:max-w-full [&_img]:h-auto [&_img]:max-h-none [&_img]:object-contain [&_img]:rounded-2xl [&_img]:mx-auto [&_img]:my-6 [&_figure]:w-full [&_figure]:max-w-full [&_figure]:mx-auto [&_table]:w-full [&_table]:max-w-full [&_table]:overflow-x-auto [&_iframe]:max-w-full"
              dangerouslySetInnerHTML={{ __html: selectedPost.content || selectedPost.excerpt }}
            />

            {/* Application Callout Banner */}
            <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-black text-white">
                  {isVi ? `Nộp Hồ Sơ Visa Cho ${selectedCountryName || 'Quốc Gia Của Bạn'}` : `Apply Vietnam Visa Online for ${selectedCountryName || 'Your Country'}`}
                </h3>
                <p className="text-xs sm:text-sm text-indigo-200">
                  {isVi ? 'Xử lý trực tuyến nhanh chóng trong 1 giờ - 24 giờ. Đảm bảo đậu 99.9%.' : 'Fast 1-hour to 24-hour urgent approval. 99.9% approval guarantee.'}
                </p>
              </div>
              <a
                href="https://vietnamvisa.govt.vn/apply-online"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-6 py-3 rounded-xl transition-all cursor-pointer shadow-lg hover:shadow-xl shrink-0 flex items-center justify-center gap-2 text-sm"
              >
                <span>{isVi ? 'Xin Visa Ngay' : 'Apply Online Now'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* SEO Country Link Directory Grid */}
            <div className="pt-8 border-t border-slate-200 space-y-4">
              <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                <Globe className="w-5 h-5 text-indigo-600" />
                <span>{isVi ? 'Quy Định Visa Các Quốc Gia Khác (Headless App Index)' : 'Requirement Guides for Other Nationalities'}</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-2">
                {COUNTRIES_DATA.slice(0, 16).map((c) => {
                  const exactUrl = getExactCountryRequirementUrl(c.code, c.countryName);
                  const slug = exactUrl.split('/').filter(Boolean).pop() || '';
                  const href = `/vietnam-visa-requirements/${slug}`;
                  return (
                    <a
                      key={c.code}
                      href={href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleOpenCountryPost(c);
                      }}
                      className="p-3 rounded-xl bg-slate-50 hover:bg-indigo-50/80 border border-slate-200/80 hover:border-indigo-300 transition-all flex items-center gap-2.5 group cursor-pointer"
                    >
                      <img
                        src={`https://flagcdn.com/w40/${c.code.toLowerCase()}.png`}
                        alt={c.countryName}
                        className="w-6 h-4 object-cover rounded shadow-2xs"
                      />
                      <div className="overflow-hidden">
                        <p className="font-extrabold text-xs text-slate-800 group-hover:text-indigo-600 truncate">
                          {isVi ? c.countryNameVi : c.countryName}
                        </p>
                        <p className="text-[10px] text-slate-500 truncate">
                          {c.exemptionDays > 0 ? (isVi ? `Miễn ${c.exemptionDays}d` : `${c.exemptionDays}d Free`) : 'E-Visa Req'}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full space-y-4 sm:space-y-8">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-slate-200 p-3.5 sm:p-8 lg:p-10 space-y-4 sm:space-y-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-1.5 sm:space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full border border-indigo-200">
            {isHome ? <Sparkles className="w-3.5 h-3.5 text-indigo-600 shrink-0" /> : <Globe className="w-3.5 h-3.5 text-indigo-600 shrink-0" />}
            <span>
              {isHome
                ? (isVi ? 'Top Quốc Gia Đến Việt Nam Nhiều Nhất' : 'Top Travel Destinations to Vietnam')
                : 'Updated Immigration Rules 2026'}
            </span>
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900">{t.reqTitle}</h2>
          <p className="text-xs sm:text-sm text-slate-500">{t.reqSubtitle}</p>
        </div>

        {/* Search Input & Counter (Only on Full Requirements Page) */}
        {!isHome && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 max-w-2xl mx-auto">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder={t.searchCountryPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            <div className="text-xs sm:text-sm font-bold text-slate-600 bg-slate-100 px-3 py-2 rounded-xl border border-slate-200 shrink-0">
              {isVi
                ? `Hiển thị ${filteredCountries.length} / ${dynamicCountries.length} quốc gia`
                : `Showing ${filteredCountries.length} of ${dynamicCountries.length} countries`}
            </div>
          </div>
        )}

        {/* Country Cards Grid (4 items on mobile, 8 items on desktop when on Home page) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 pt-1 sm:pt-2">
          {countriesToDisplay.map((c, index) => {
            const isHiddenOnMobileForHome = isHome && index >= 4;
            const exactUrl = getExactCountryRequirementUrl(c.code, c.countryName);
            const slug = exactUrl.split('/').filter(Boolean).pop() || '';
            const href = `/vietnam-visa-requirements/${slug}`;

            return (
              <a
                key={c.code}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  handleOpenCountryPost(c);
                }}
                className={`${isHiddenOnMobileForHome ? 'hidden sm:flex' : 'flex'} bg-slate-50 hover:bg-white hover:border-indigo-300 hover:shadow-md cursor-pointer group rounded-xl sm:rounded-2xl p-2.5 sm:p-4 border border-slate-200/90 transition-all flex-col justify-between space-y-2.5 relative`}
              >
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-1.5 sm:pb-2 border-b border-slate-200/70 gap-1.5">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <img
                        src={c.code.startsWith('WP') ? 'https://flagcdn.com/w40/un.png' : `https://flagcdn.com/w40/${c.code.toLowerCase()}.png`}
                        alt={`${c.countryName} flag`}
                        className="w-4.5 h-3 sm:w-5 sm:h-3.5 object-cover rounded-[2px] border border-slate-200/80 shrink-0 shadow-2xs"
                        loading="lazy"
                      />
                      <span className="font-bold text-slate-900 text-xs sm:text-sm leading-tight line-clamp-2 sm:line-clamp-1 sm:truncate group-hover:text-indigo-600 transition-colors">
                        {getLocalizedCountryName(c, currentLang)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-1.5 shrink-0 pt-0.5 sm:pt-0">
                      {c.exemptionDays > 0 ? (
                        <span className="bg-emerald-100 text-emerald-800 text-[9px] sm:text-xs font-black px-1.5 sm:px-2 py-0.5 rounded border border-emerald-300/80 shrink-0">
                          {c.exemptionDays}{tMulti(currentLang, { en: 'D EXEMPT', vi: ' NGÀY MIỄN', fr: 'J EXEMPT', de: 'T BEFREIT', ja: '日免除', zh: '天免签', he: ' ימים פטור', ko: '일 면제', es: 'D EXENTO' })}
                        </span>
                      ) : (
                        <span className="bg-blue-100 text-blue-800 text-[9px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 rounded border border-blue-200 shrink-0">
                          E-VISA
                        </span>
                      )}

                      <span
                        className="p-0.5 sm:p-1 rounded-md text-indigo-600 group-hover:bg-indigo-50 group-hover:translate-x-0.5 transition-all flex items-center justify-center shrink-0"
                        title={tMulti(currentLang, {
                          en: `View visa guide for ${c.countryName}`,
                          vi: `Xem chi tiết quy định visa ${c.countryNameVi}`,
                          fr: `Voir le guide des visas pour ${c.countryName}`,
                          de: `Visabestimmungen für ${c.countryName} anzeigen`,
                          ja: `${c.countryName}のビザ要件ガイドを見る`,
                          zh: `查看 ${c.countryName} 签证指南`,
                          he: `צפה במדריך ויזה עבור ${c.countryName}`,
                          ko: `${c.countryName} 비자 규정 보기`,
                          es: `Ver guía de visados para ${c.countryName}`
                        })}
                      >
                        <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2 sm:mt-2.5 leading-relaxed line-clamp-2">
                    {getLocalizedCountryNotes(c, currentLang)}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Home Page Call to Action Banner to View All Countries */}
        {isHome && onViewAll && (
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between bg-gradient-to-r from-indigo-50 via-slate-50 to-blue-50 p-4 sm:p-5 rounded-2xl border border-indigo-100 gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <p className="font-bold text-slate-900 text-sm">
                {tMulti(currentLang, {
                  en: 'Looking for requirements of other countries?',
                  vi: 'Bạn muốn kiểm tra quốc gia khác trên thế giới?',
                  fr: 'Vous cherchez les exigences d\'autres pays ?',
                  de: 'Suchen Sie nach Bestimmungen anderer Länder?',
                  ja: '他の国のビザ要件をお探しですか？',
                  zh: '寻找其他国家的签证要求？',
                  he: 'מחפש דרישות עבור מדינות אחרות?',
                  ko: '다른 국가의 비자 요건을 찾고 계신가요?',
                  es: '¿Busca requisitos de otros países?'
                })}
              </p>
              <p className="text-xs text-slate-500">
                {tMulti(currentLang, {
                  en: `Search full directory of ${COUNTRIES_DATA.length}+ countries and 2026 exemption guidelines.`,
                  vi: `Tra cứu danh sách đầy đủ ${COUNTRIES_DATA.length}+ quốc gia & lịch miễn thị thực mới nhất 2026.`,
                  fr: `Recherchez le répertoire complet de plus de ${COUNTRIES_DATA.length} pays et les directives d'exemption 2026.`,
                  de: `Durchsuchen Sie das vollständige Verzeichnis von ${COUNTRIES_DATA.length}+ Ländern und die Richtlinien für 2026.`,
                  ja: `${COUNTRIES_DATA.length}か国以上の完全なディレクトリと2026年のビザ免除ガイドラインを検索。`,
                  zh: `查询 ${COUNTRIES_DATA.length}+ 个国家和地区的完整免签与电子签政策。`,
                  he: `חפש במדריך המלא של ${COUNTRIES_DATA.length}+ מדינות והנחיות פטור 2026.`,
                  ko: `${COUNTRIES_DATA.length}개국 이상의 전체 국가 목록 및 2026년 비자 면제 가이드라인 검색.`,
                  es: `Busque en el directorio completo de más de ${COUNTRIES_DATA.length} países y directrices de exención 2026.`
                })}
              </p>
            </div>

            <button
              onClick={onViewAll}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-indigo-200 hover:scale-[1.02] shrink-0 cursor-pointer"
            >
              <span>
                {tMulti(currentLang, {
                  en: 'View All 100+ Countries',
                  vi: 'Xem Tất Cả 100+ Quốc Gia',
                  fr: 'Voir tous les 100+ pays',
                  de: 'Alle 100+ Länder anzeigen',
                  ja: '100か国以上をすべて見る',
                  zh: '查看全部 100+ 国家',
                  he: 'צפה בכל 100+ המדינות',
                  ko: '전 세계 100개국+ 전체 보기',
                  es: 'Ver todos los 100+ países'
                })}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Vietnam Visa Exemption Summary List matching Government Resolutions (Only on full Requirements page) */}
      {!isHome && (
        <div className="bg-gradient-to-br from-emerald-50/70 via-white to-teal-50/40 text-slate-900 rounded-3xl p-6 sm:p-8 lg:p-10 space-y-6 shadow-xl border border-emerald-100">
          {/* Header */}
          <div className="border-b border-emerald-100 pb-4 space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>
                {tMulti(currentLang, {
                  en: 'VIETNAM VISA-FREE EXEMPTION SCHEDULE 2026',
                  vi: 'QUY ĐỊNH MIỄN THỊ THỰC VIỆT NAM 2026',
                  fr: 'CALENDRIER D\'EXEMPTION DE VISA POUR LE VIETNAM 2026',
                  de: 'VIETNAM VISUMBEFREIUNGSREGELUNG 2026',
                  ja: 'ベトナム ビザ免除規定 2026',
                  zh: '2026 年越南最新免签政策一览表',
                  he: 'לוח פטור מויזה לווייטנאם 2026',
                  ko: '2026년 베트남 비자 면제 규정 안내',
                  es: 'CALENDARIO DE EXENCIÓN DE VISADO PARA VIETNAM 2026'
                })}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {tMulti(currentLang, {
                en: 'Vietnam Visa-Free Exemption Categories & Eligible Countries',
                vi: 'Danh Sách Các Quốc Gia Được Miễn Visa Vào Việt Nam',
                fr: 'Catégories d\'exemption de visa pour le Vietnam et pays éligibles',
                de: 'Kategorien der Visumbefreiung für Vietnam & berechtigte Länder',
                ja: 'ベトナムビザ免除対象国および期間別一覧',
                zh: '免签入境越南的国家与停留天数分类表',
                he: 'קטגוריות פטור מויזה לווייטנאם ומדינות זכאיות',
                ko: '베트남 무비자 입국 가능 국가 및 유형별 목록',
                es: 'Categorías de exención de visado para Vietnam y países elegibles'
              })}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
              {tMulti(currentLang, {
                en: 'Citizens holding ordinary passports from the following countries are exempt from Vietnam visa requirements under Resolutions 44/NQ-CP, 229/NQ-CP, and ASEAN/bilateral agreements. Travelers staying longer than the visa-free period must apply for an E-Visa.',
                vi: 'Công dân thuộc các quốc gia dưới đây được miễn thị thực nhập cảnh Việt Nam theo Nghị định 44/NQ-CP, 229/NQ-CP và các Hiệp định song phương/ASEAN. Du khách lưu trú vượt quá thời gian miễn phí cần xin E-Visa trực tuyến.',
                fr: 'Les citoyens titulaires d\'un passeport ordinaire des pays suivants sont exemptés de visa pour le Vietnam en vertu des résolutions officielles et accords de l\'ASEAN.',
                de: 'Inhaber gewöhnlicher Reisepässe aus den folgenden Ländern sind gemäß den Regierungsbeschlüssen von der Visumpflicht für Vietnam befreit.',
                ja: '以下の国のパスポート所持者は、政府決議およびASEAN/二国間協定に基づきベトナムへの無査政入国が認められています。',
                zh: '持有以下国家普通护照的公民，根据越南政府决议及双边/东盟协议可享受免签入境待遇。超过免签停留期限者需申请电子签证。',
                he: 'אזרחים בעלי דרכון רגיל מהמדינות הבאות פטורים מדרישות ויזה לווייטנאם על פי החלטות הממשלה והסכמי ASEAN.',
                ko: '다음 국가의 일반 여권 소지자는 베트남 정부 결의안 및 ASEAN/양자 협정에 따라 비자 없이 입국할 수 있습니다.',
                es: 'Los ciudadanos con pasaporte ordinario de los siguientes países están exentos de visado para Vietnam según las resoluciones oficiales y acuerdos de la ASEAN.'
              })}
            </p>
          </div>

          {/* Compact Grid Layout */}
          <div className="space-y-4">
            {/* Top Main Section: 45 Days Visa-Free (24 Countries) */}
            <div className="bg-white/90 p-4 sm:p-5 rounded-2xl border border-emerald-100/80 shadow-2xs space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="bg-emerald-600 text-white text-xs font-black px-2.5 py-0.5 rounded-md shadow-2xs">
                    45 DAYS
                  </span>
                  <h4 className="text-sm font-extrabold text-slate-900">
                    {tMulti(currentLang, {
                      en: '45 Days Visa-Free',
                      vi: 'Miễn Visa 45 Ngày',
                      fr: 'Exemption 45 jours',
                      de: '45 Tage Visumfrei',
                      ja: '45日間 ビザ免除',
                      zh: '45 天免签',
                      he: '45 ימים פטור מויזה',
                      ko: '45일 무비자 입국',
                      es: '45 días sin visado'
                    })}
                  </h4>
                </div>
                <span className="text-xs font-medium text-slate-500">
                  24 {tMulti(currentLang, {
                    en: 'countries under Resolutions 44/NQ-CP & 229/NQ-CP',
                    vi: 'quốc gia theo NQ 44/NQ-CP & 229/NQ-CP',
                    fr: 'pays sous les résolutions 44/NQ-CP et 229/NQ-CP',
                    de: 'Länder gemäß Beschluss 44/NQ-CP & 229/NQ-CP',
                    ja: '政府決議44/NQ-CPおよび229/NQ-CP対象24か国',
                    zh: '个国家（依据 44/NQ-CP 和 229/NQ-CP 决议）',
                    he: 'מדינות על פי החלטות 44/NQ-CP ו-229/NQ-CP',
                    ko: '결의안 44/NQ-CP & 229/NQ-CP에 따른 24개국',
                    es: 'países según Resoluciones 44/NQ-CP y 229/NQ-CP'
                  })}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                {[
                  { name: 'United Kingdom', code: 'gb' },
                  { name: 'France', code: 'fr' },
                  { name: 'Germany', code: 'de' },
                  { name: 'Italy', code: 'it' },
                  { name: 'Spain', code: 'es' },
                  { name: 'Denmark', code: 'dk' },
                  { name: 'Finland', code: 'fi' },
                  { name: 'Sweden', code: 'se' },
                  { name: 'Norway', code: 'no' },
                  { name: 'Russia', code: 'ru' },
                  { name: 'Japan', code: 'jp' },
                  { name: 'South Korea', code: 'kr' },
                  { name: 'Belgium', code: 'be' },
                  { name: 'Netherlands', code: 'nl' },
                  { name: 'Switzerland', code: 'ch' },
                  { name: 'Poland', code: 'pl' },
                  { name: 'Czech Republic', code: 'cz' },
                  { name: 'Hungary', code: 'hu' },
                  { name: 'Bulgaria', code: 'bg' },
                  { name: 'Croatia', code: 'hr' },
                  { name: 'Luxembourg', code: 'lu' },
                  { name: 'Romania', code: 'ro' },
                  { name: 'Slovakia', code: 'sk' },
                  { name: 'Slovenia', code: 'si' }
                ].map((c) => (
                  <span
                    key={c.name}
                    className="inline-flex items-center gap-1.5 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-300 text-slate-800 text-xs font-medium px-2.5 py-1 rounded-lg border border-slate-200/80 transition-colors shadow-2xs"
                  >
                    <img
                      src={`https://flagcdn.com/w40/${c.code}.png`}
                      alt={`${c.name} flag`}
                      className="w-5 h-3.5 object-cover rounded-[2px] border border-slate-200/80 shrink-0 shadow-2xs"
                      loading="lazy"
                    />
                    <span>{c.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* 2-Column Grid for 30 Days, 90 Days, 21 Days & 14 Days */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Column 1: 30 Days Visa-Free */}
              <div className="bg-white/90 p-4 sm:p-5 rounded-2xl border border-blue-100 shadow-2xs space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-blue-600 text-white text-xs font-black px-2.5 py-0.5 rounded-md shadow-2xs">
                      30 DAYS
                    </span>
                    <h4 className="text-sm font-extrabold text-slate-900">
                      {tMulti(currentLang, {
                        en: '30 Days Visa-Free',
                        vi: 'Miễn Visa 30 Ngày',
                        fr: 'Exemption 30 jours',
                        de: '30 Tage Visumfrei',
                        ja: '30日間 ビザ免除',
                        zh: '30 天免签',
                        he: '30 ימים פטור מויזה',
                        ko: '30일 무비자 입국',
                        es: '30 días sin visado'
                      })}
                    </h4>
                  </div>
                  <span className="text-xs font-medium text-slate-500">ASEAN & Bilateral</span>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {[
                    { name: 'Singapore', code: 'sg' },
                    { name: 'Thailand', code: 'th' },
                    { name: 'Malaysia', code: 'my' },
                    { name: 'Indonesia', code: 'id' },
                    { name: 'Laos', code: 'la' },
                    { name: 'Cambodia', code: 'kh' },
                    { name: 'Belarus', code: 'by' },
                    { name: 'Kazakhstan', code: 'kz' },
                    { name: 'Kyrgyzstan', code: 'kg' },
                    { name: 'Mongolia', code: 'mn' }
                  ].map((c) => (
                    <span
                      key={c.name}
                      className="inline-flex items-center gap-1.5 bg-slate-50 hover:bg-blue-50 hover:border-blue-300 text-slate-800 text-xs font-medium px-2.5 py-1 rounded-lg border border-slate-200/80 transition-colors shadow-2xs"
                    >
                      <img
                        src={`https://flagcdn.com/w40/${c.code}.png`}
                        alt={`${c.name} flag`}
                        className="w-5 h-3.5 object-cover rounded-[2px] border border-slate-200/80 shrink-0 shadow-2xs"
                        loading="lazy"
                      />
                      <span>{c.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Column 2: 90 Days, 21 Days & 14 Days Combined */}
              <div className="space-y-4">
                {/* 90 Days */}
                <div className="bg-white/90 p-3.5 sm:p-4 rounded-2xl border border-indigo-100 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-1.5">
                    <span className="bg-indigo-600 text-white text-xs font-black px-2.5 py-0.5 rounded-md shadow-2xs">
                      90 DAYS
                    </span>
                    <h4 className="text-sm font-extrabold text-slate-900">
                      {tMulti(currentLang, {
                        en: '90 Days Visa-Free',
                        vi: 'Miễn Visa 90 Ngày',
                        fr: 'Exemption 90 jours',
                        de: '90 Tage Visumfrei',
                        ja: '90日間 ビザ免除',
                        zh: '90 天免签',
                        he: '90 ימים פטור מויזה',
                        ko: '90일 무비자 입국',
                        es: '90 días sin visado'
                      })}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { name: 'Chile', code: 'cl' },
                      { name: 'Panama', code: 'pa' }
                    ].map((c) => (
                      <span
                        key={c.name}
                        className="inline-flex items-center gap-1.5 bg-slate-50 hover:bg-indigo-50 hover:border-indigo-300 text-slate-800 text-xs font-medium px-2.5 py-1 rounded-lg border border-slate-200/80 transition-colors shadow-2xs"
                      >
                        <img
                          src={`https://flagcdn.com/w40/${c.code}.png`}
                          alt={`${c.name} flag`}
                          className="w-5 h-3.5 object-cover rounded-[2px] border border-slate-200/80 shrink-0 shadow-2xs"
                          loading="lazy"
                        />
                        <span>{c.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* 21 Days & 14 Days Side-by-Side */}
                <div className="grid grid-cols-2 gap-3">
                  {/* 21 Days */}
                  <div className="bg-white/90 p-3.5 rounded-2xl border border-amber-100 shadow-2xs space-y-2">
                    <div className="flex items-center gap-1.5 border-b border-slate-100 pb-1.5">
                      <span className="bg-amber-600 text-white text-[10px] font-black px-2 py-0.5 rounded shadow-2xs">
                        21 DAYS
                      </span>
                      <h4 className="text-xs font-bold text-slate-900">
                        {tMulti(currentLang, {
                          en: '21 Days',
                          vi: '21 Ngày',
                          fr: '21 jours',
                          de: '21 Tage',
                          ja: '21日間',
                          zh: '21 天',
                          he: '21 ימים',
                          ko: '21일',
                          es: '21 días'
                        })}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {[{ name: 'Philippines', code: 'ph' }].map((c) => (
                        <span
                          key={c.name}
                          className="inline-flex items-center gap-1.5 bg-slate-50 text-slate-800 text-xs font-medium px-2 py-1 rounded-lg border border-slate-200/80 shadow-2xs"
                        >
                          <img
                            src={`https://flagcdn.com/w40/${c.code}.png`}
                            alt={`${c.name} flag`}
                            className="w-5 h-3.5 object-cover rounded-[2px] border border-slate-200/80 shrink-0 shadow-2xs"
                            loading="lazy"
                          />
                          <span>{c.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 14 Days */}
                  <div className="bg-white/90 p-3.5 rounded-2xl border border-purple-100 shadow-2xs space-y-2">
                    <div className="flex items-center gap-1.5 border-b border-slate-100 pb-1.5">
                      <span className="bg-purple-600 text-white text-[10px] font-black px-2 py-0.5 rounded shadow-2xs">
                        14 DAYS
                      </span>
                      <h4 className="text-xs font-bold text-slate-900">
                        {tMulti(currentLang, {
                          en: '14 Days',
                          vi: '14 Ngày',
                          fr: '14 jours',
                          de: '14 Tage',
                          ja: '14日間',
                          zh: '14 天',
                          he: '14 ימים',
                          ko: '14일',
                          es: '14 días'
                        })}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {[
                        { name: 'Brunei', code: 'bn' },
                        { name: 'Myanmar', code: 'mm' }
                      ].map((c) => (
                        <span
                          key={c.name}
                          className="inline-flex items-center gap-1.5 bg-slate-50 text-slate-800 text-xs font-medium px-2 py-1 rounded-lg border border-slate-200/80 shadow-2xs"
                        >
                          <img
                            src={`https://flagcdn.com/w40/${c.code}.png`}
                            alt={`${c.name} flag`}
                            className="w-5 h-3.5 object-cover rounded-[2px] border border-slate-200/80 shrink-0 shadow-2xs"
                            loading="lazy"
                          />
                          <span>{c.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Passport General Requirements Footer Note */}
          <div className="pt-4 border-t border-emerald-100/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-700">
            <div className="flex items-start gap-2.5 bg-white/80 p-3 rounded-xl border border-slate-200/70">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-900 text-xs">
                  {tMulti(currentLang, {
                    en: 'Passport Validity',
                    vi: 'Thời Hạn Hộ Chiếu',
                    fr: 'Validité du passeport',
                    de: 'Gültigkeit des Reisepasses',
                    ja: 'パスポート有効期限',
                    zh: '护照有效期要求',
                    he: 'תוקף דרכון',
                    ko: '여권 유효 기간',
                    es: 'Validez del pasaporte'
                  })}
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {tMulti(currentLang, {
                    en: 'Must be valid for at least 6 months past entry date with 2 blank pages.',
                    vi: 'Hộ chiếu phải còn hạn ít nhất 6 tháng và có 2 trang trống.',
                    fr: 'Doit être valide au moins 6 mois après la date d\'entrée avec 2 pages vierges.',
                    de: 'Muss noch mindestens 6 Monate ab Einreisedatum gültig sein und 2 freie Seiten haben.',
                    ja: '入国日から6か月以上の有効期限と2ページの blank ページが必要です。',
                    zh: '护照自入境之日起须有至少 6 个月有效期，并留有 2 页空白页。',
                    he: 'חייב להיות בתוקף לפחות 6 חודשים מיום הכניסה עם 2 דפים ריקים.',
                    ko: '입국일 기준 최소 6개월 이상 유효하고 빈 페이지 2장이 있어야 합니다.',
                    es: 'Debe ser válido al menos 6 meses después de la fecha de entrada con 2 páginas en blanco.'
                  })}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 bg-white/80 p-3 rounded-xl border border-slate-200/70">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-900 text-xs">
                  {tMulti(currentLang, {
                    en: 'Overstay Caution',
                    vi: 'Lưu Ý Miễn Visa',
                    fr: 'Attention au dépassement',
                    de: 'Hinweis zu Überziehung',
                    ja: '滞在期限の注意事項',
                    zh: '免签停留注意',
                    he: 'אזהרת שהיית יתר',
                    ko: '무비자 체류 주의사항',
                    es: 'Precaución de estancia'
                  })}
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {tMulti(currentLang, {
                    en: 'Exemption applies to continuous stay; apply E-Visa for longer stays.',
                    vi: 'Áp dụng cho chuyến lưu trú liên tục. Muốn ở lâu hơn cần xin E-Visa.',
                    fr: 'L\'exemption s\'applique au séjour continu; demandez un e-Visa pour des séjours plus longs.',
                    de: 'Befreiung gilt für durchgehenden Aufenthalt; beantragen Sie ein e-Visum für längere Aufenthalte.',
                    ja: '連続滞在に適用されます。長期滞在の場合はe-Visaを申請してください。',
                    zh: '免签适用于连续停留。如需延长停留，请提前在线申请电子签证。',
                    he: 'הפטור חל על שהייה רצופה; הגישו בקשה לוויזה אלקטרונית לשהייה ארוכה יותר.',
                    ko: '무비자는 연속 체류에 적용됩니다. 더 길게 체류하려면 전자비자를 신청하세요.',
                    es: 'La exención se aplica a la estancia continua; solicite e-Visa para estancias más largas.'
                  })}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 bg-white/80 p-3 rounded-xl border border-slate-200/70">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-900 text-xs">
                  {tMulti(currentLang, {
                    en: 'E-Visa for All Nationalities',
                    vi: 'E-Visa Mọi Quốc Tịch',
                    fr: 'e-Visa pour toutes nationalités',
                    de: 'e-Visum für alle Nationalitäten',
                    ja: '全国籍対象 e-Visa',
                    zh: '全球所有国籍电子签',
                    he: 'ויזה אלקטרונית לכל הלאומים',
                    ko: '전 세계 모든 국적 전자비자',
                    es: 'e-Visa para todas las nacionalidades'
                  })}
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {tMulti(currentLang, {
                    en: 'Citizens of 190+ countries can apply for 30/90 days single/multiple E-Visa.',
                    vi: 'Công dân 190+ nước đều được cấp E-Visa 30/90 ngày 1 lần hoặc nhiều lần.',
                    fr: 'Les citoyens de plus de 190 pays peuvent demander un e-Visa de 30/90 jours à entrée simple/multiple.',
                    de: 'Bürger aus 190+ Ländern können ein e-Visum für 30/90 Tage (ein-/mehrmalig) beantragen.',
                    ja: '190か国以上の市民が30/90日間の一次/数次e-Visaを申請できます。',
                    zh: '全球 190+ 国家公民均可在线申请 30/90 天单次/多次入境电子签证。',
                    he: 'אזרחי 190+ מדינות יכולים להגיש בקשה לוויזה אלקטרונית ל-30/90 יום.',
                    ko: '190개국 이상의 공민이 30/90일 단수/복수 전자비자를 신청할 수 있습니다.',
                    es: 'Ciudadanos de más de 190 países pueden solicitar e-Visa de 30/90 días entrada única/múltiple.'
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Image Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-between p-3 sm:p-6 animate-fade-in select-none"
          onClick={() => setLightboxImage(null)}
        >
          {/* Lightbox Header Bar */}
          <div 
            className="w-full max-w-5xl flex flex-wrap items-center justify-between gap-3 text-white z-10 bg-slate-900/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold truncate max-w-sm sm:max-w-md">
              <ZoomIn className="w-4 h-4 text-indigo-400 shrink-0" />
              <span className="truncate">{lightboxImage.alt || (isVi ? 'Hình ảnh hướng dẫn' : 'Requirement Image')}</span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => setZoomLevel(prev => Math.max(0.5, prev - 0.25))}
                className="p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all cursor-pointer"
                title={isVi ? 'Thu nhỏ' : 'Zoom Out'}
              >
                <ZoomOut className="w-4 h-4" />
              </button>

              <span className="text-xs font-mono font-bold px-2 text-slate-300 min-w-[50px] text-center">
                {Math.round(zoomLevel * 100)}%
              </span>

              <button
                onClick={() => setZoomLevel(prev => Math.min(3, prev + 0.25))}
                className="p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all cursor-pointer"
                title={isVi ? 'Phóng to' : 'Zoom In'}
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              <button
                onClick={() => setZoomLevel(1)}
                className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-all cursor-pointer text-xs font-bold px-3 hidden sm:inline"
              >
                Reset
              </button>

              <button
                onClick={() => setLightboxImage(null)}
                className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-all cursor-pointer ml-1 sm:ml-2 flex items-center gap-1 text-xs font-bold"
              >
                <X className="w-4 h-4" />
                <span className="hidden sm:inline">{isVi ? 'Đóng' : 'Close'}</span>
              </button>
            </div>
          </div>

          {/* Lightbox Image Stage */}
          <div 
            className="flex-1 w-full max-w-5xl flex items-center justify-center overflow-auto py-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              style={{ transform: `scale(${zoomLevel})` }}
              className="max-w-full max-h-[78vh] object-contain rounded-xl shadow-2xl transition-transform duration-200 ease-out cursor-zoom-in"
            />
          </div>

          {/* Footer Instruction */}
          <div className="text-slate-400 text-xs text-center z-10 pb-1">
            {isVi ? 'Nhấp ngoài hoặc bấm nút Đóng để thoát xem ảnh' : 'Click outside or press Close to exit'}
          </div>
        </div>
      )}
    </div>
  );
};
