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
  FileText 
} from 'lucide-react';
import { Language } from '../types';
import { COUNTRIES_DATA } from '../data/countries';
import { TRANSLATIONS } from '../data/translations';
import { 
  BlogPost, 
  fetchWpRequirementPosts, 
  getRequirementPostForCountry,
  fetchWpPostBySlug 
} from '../services/wordpressApi';
import { getExactCountryRequirementUrl } from '../data/countryUrls';

import { CustomSEOData } from './SEOMetadata';
import { getRequirementSlugFromPath } from '../routes';

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
    window.history.pushState({}, '', '/vietnam-visa-requirements');
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
        {/* Top Breadcrumb & Navigation Bar */}
        <div className="sticky top-16 z-30 flex flex-wrap items-center justify-between gap-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-md border border-slate-200">
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
              className="prose prose-slate lg:prose-lg max-w-none text-slate-800 leading-relaxed space-y-5"
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
              <button
                onClick={() => {
                  if (onApplyForCountry && selectedCountryName) {
                    onApplyForCountry(selectedCountryName);
                  }
                }}
                className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-6 py-3 rounded-xl transition-all cursor-pointer shadow-lg hover:shadow-xl shrink-0 flex items-center justify-center gap-2 text-sm"
              >
                <span>{isVi ? 'Xin Visa Ngay' : 'Apply Online Now'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* SEO Country Link Directory Grid */}
            <div className="pt-8 border-t border-slate-200 space-y-4">
              <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                <Globe className="w-5 h-5 text-indigo-600" />
                <span>{isVi ? 'Quy Định Visa Các Quốc Gia Khác (Headless App Index)' : 'Requirement Guides for Other Nationalities'}</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-2">
                {COUNTRIES_DATA.slice(0, 16).map((c) => {
                  return (
                    <a
                      key={c.code}
                      href={`#req-${c.code.toLowerCase()}`}
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
            return (
              <div
                key={c.code}
                onClick={isHome ? undefined : () => handleOpenCountryPost(c)}
                className={`${isHiddenOnMobileForHome ? 'hidden sm:flex' : 'flex'} bg-slate-50 ${
                  isHome ? '' : 'hover:bg-white hover:border-indigo-300 hover:shadow-md cursor-pointer group'
                } rounded-xl sm:rounded-2xl p-2.5 sm:p-4 border border-slate-200/90 transition-all flex-col justify-between space-y-2.5 relative`}
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
                      <span className={`font-bold text-slate-900 text-xs sm:text-sm leading-tight line-clamp-2 sm:line-clamp-1 sm:truncate ${isHome ? '' : 'group-hover:text-indigo-600'} transition-colors`}>
                        {isVi ? c.countryNameVi : c.countryName}
                      </span>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-1.5 shrink-0 pt-0.5 sm:pt-0">
                      {c.exemptionDays > 0 ? (
                        <span className="bg-emerald-100 text-emerald-800 text-[9px] sm:text-xs font-black px-1.5 sm:px-2 py-0.5 rounded border border-emerald-300/80 shrink-0">
                          {c.exemptionDays}D EXEMPT
                        </span>
                      ) : (
                        <span className="bg-blue-100 text-blue-800 text-[9px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 rounded border border-blue-200 shrink-0">
                          E-VISA
                        </span>
                      )}

                      {!isHome && (
                        <a
                          href={`#req-${c.code.toLowerCase()}`}
                          className="p-0.5 sm:p-1 rounded-md text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 transition-colors flex items-center justify-center shrink-0"
                          title={isVi ? `Xem chi tiết quy định visa ${c.countryNameVi}` : `View visa guide for ${c.countryName}`}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleOpenCountryPost(c);
                          }}
                        >
                          <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2 sm:mt-2.5 leading-relaxed line-clamp-2">
                    {isVi ? c.notesVi : c.notes}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Home Page Call to Action Banner to View All Countries */}
        {isHome && onViewAll && (
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between bg-gradient-to-r from-indigo-50 via-slate-50 to-blue-50 p-4 sm:p-5 rounded-2xl border border-indigo-100 gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <p className="font-bold text-slate-900 text-sm">
                {currentLang === 'vi'
                  ? 'Bạn muốn kiểm tra quốc gia khác trên thế giới?'
                  : 'Looking for requirements of other countries?'}
              </p>
              <p className="text-xs text-slate-500">
                {currentLang === 'vi'
                  ? `Tra cứu danh sách đầy đủ ${COUNTRIES_DATA.length}+ quốc gia & lịch miễn thị thực mới nhất 2026.`
                  : `Search full directory of ${COUNTRIES_DATA.length}+ countries and 2026 exemption guidelines.`}
              </p>
            </div>

            <button
              onClick={onViewAll}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-indigo-200 hover:scale-[1.02] shrink-0 cursor-pointer"
            >
              <span>{currentLang === 'vi' ? 'Xem Tất Cả 100+ Quốc Gia' : 'View All 100+ Countries'}</span>
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
                {currentLang === 'vi'
                  ? 'QUY ĐỊNH MIỄN THỊ THỰC VIỆT NAM 2026'
                  : 'VIETNAM VISA-FREE EXEMPTION SCHEDULE 2026'}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {currentLang === 'vi'
                ? 'Danh Sách Các Quốc Gia Được Miễn Visa Vào Việt Nam'
                : 'Vietnam Visa-Free Exemption Categories & Eligible Countries'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
              {currentLang === 'vi'
                ? 'Công dân thuộc các quốc gia dưới đây được miễn thị thực nhập cảnh Việt Nam theo Nghị định 44/NQ-CP, 229/NQ-CP và các Hiệp định song phương/ASEAN. Du khách lưu trú vượt quá thời gian miễn phí cần xin E-Visa trực tuyến.'
                : 'Citizens holding ordinary passports from the following countries are exempt from Vietnam visa requirements under Resolutions 44/NQ-CP, 229/NQ-CP, and ASEAN/bilateral agreements. Travelers staying longer than the visa-free period must apply for an E-Visa.'}
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
                    {currentLang === 'vi' ? 'Miễn Visa 45 Ngày' : '45 Days Visa-Free'}
                  </h4>
                </div>
                <span className="text-xs font-medium text-slate-500">
                  24 {currentLang === 'vi' ? 'quốc gia theo NQ 44/NQ-CP & 229/NQ-CP' : 'countries under Resolutions 44/NQ-CP & 229/NQ-CP'}
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
                      {currentLang === 'vi' ? 'Miễn Visa 30 Ngày' : '30 Days Visa-Free'}
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
                      {currentLang === 'vi' ? 'Miễn Visa 90 Ngày' : '90 Days Visa-Free'}
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
                        21 Days
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
                        14 Days
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
                  {currentLang === 'vi' ? 'Thời Hạn Hộ Chiếu' : 'Passport Validity'}
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {currentLang === 'vi' ? 'Hộ chiếu phải còn hạn ít nhất 6 tháng và có 2 trang trống.' : 'Must be valid for at least 6 months past entry date with 2 blank pages.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 bg-white/80 p-3 rounded-xl border border-slate-200/70">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-900 text-xs">
                  {currentLang === 'vi' ? 'Lưu Ý Miễn Visa' : 'Overstay Caution'}
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {currentLang === 'vi' ? 'Áp dụng cho chuyến lưu trú liên tục. Muốn ở lâu hơn cần xin E-Visa.' : 'Exemption applies to continuous stay; apply E-Visa for longer stays.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 bg-white/80 p-3 rounded-xl border border-slate-200/70">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-900 text-xs">
                  {currentLang === 'vi' ? 'E-Visa Mọi Quốc Tịch' : 'E-Visa for All Nationalities'}
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {currentLang === 'vi' ? 'Công dân 190+ nước đều được cấp E-Visa 30/90 ngày 1 lần hoặc nhiều lần.' : 'Citizens of 190+ countries can apply for 30/90 days single/multiple E-Visa.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
