import React, { useState, useEffect, useMemo } from 'react';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Sparkles, 
  X, 
  RefreshCw,
  Search,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  FileText,
  ZoomIn,
  ZoomOut,
  Maximize2
} from 'lucide-react';
import { Language } from '../types';
import { BlogPost, fetchUrgentBlogPosts, fetchWpPostBySlug } from '../services/wordpressApi';
import { CustomSEOData } from './SEOMetadata';
import { getBlogSlugFromPath } from '../routes';
import { tMulti } from '../data/translations';
import { getLocalizedBlogPost } from '../data/blogTranslations';

interface BlogSectionProps {
  currentLang: Language;
  onStartApplication?: () => void;
  onSEOChange?: (seoData: CustomSEOData | null) => void;
  isHome?: boolean;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ 
  currentLang, 
  onStartApplication, 
  onSEOChange,
  isHome = false 
}) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
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
  
  // Pagination State & Responsive Layout
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Desktop: 9 articles/page (3 columns x 3 rows). Mobile: 6 articles/page (2 columns x 3 rows).
  const pageSize = isMobile ? 6 : 9;

  const loadPosts = async () => {
    setLoading(true);
    try {
      const fetched = await fetchUrgentBlogPosts();
      setPosts(fetched);
    } catch (e) {
      console.error('Error loading blog posts:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  // Reset pagination to page 1 whenever search query or category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const handleOpenPost = (post: BlogPost, updateUrl = true) => {
    setSelectedPost(post);
    const postSlug = post.slug || String(post.id);
    if (updateUrl) {
      const targetPath = `/blog/${postSlug}`;
      if (window.location.pathname !== targetPath) {
        window.history.pushState({}, '', targetPath);
        window.dispatchEvent(new Event('popstate'));
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (onSEOChange) {
      onSEOChange({
        title: post.title,
        description: post.excerpt,
        canonicalUrl: `${window.location.origin}/blog/${postSlug}`,
        ogImage: post.featuredImage,
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          image: [post.featuredImage],
          datePublished: post.date,
          author: {
            '@type': 'Person',
            name: post.author || 'Vietnam Visa Advisory Team'
          }
        }
      });
    }
  };

  const handleCloseArticle = () => {
    setSelectedPost(null);
    if (window.location.pathname.startsWith('/blog/')) {
      window.history.pushState({}, '', '/blog');
      window.dispatchEvent(new Event('popstate'));
    }
    if (onSEOChange) {
      onSEOChange(null);
    }
  };

  // Check URL pathname on mount or popstate to render specific blog article if present
  useEffect(() => {
    const syncPostFromPath = async () => {
      const pathname = window.location.pathname;
      const slug = getBlogSlugFromPath(pathname);
      if (slug) {
        const found = posts.find(p => p.slug === slug || String(p.id) === slug);
        if (found) {
          handleOpenPost(found, false);
        } else {
          setLoading(true);
          const fetchedPost = await fetchWpPostBySlug(slug);
          setLoading(false);
          if (fetchedPost) {
            handleOpenPost(fetchedPost, false);
          }
        }
      } else if (!pathname.startsWith('/blog/')) {
        setSelectedPost(null);
      }
    };

    syncPostFromPath();

    const handlePopState = () => {
      syncPostFromPath();
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [posts]);

  // Localize all posts based on current language
  const localizedPosts = useMemo(() => {
    return posts.map(p => getLocalizedBlogPost(p, currentLang));
  }, [posts, currentLang]);

  const activeArticle = useMemo(() => {
    return selectedPost ? getLocalizedBlogPost(selectedPost, currentLang) : null;
  }, [selectedPost, currentLang]);

  // Extract unique categories for filter
  const categories = useMemo(() => {
    const set = new Set<string>();
    localizedPosts.forEach(p => {
      if (p.category) set.add(p.category);
    });
    return Array.from(set);
  }, [localizedPosts]);

  // Filter posts by search query & category
  const filteredPosts = useMemo(() => {
    return localizedPosts.filter(post => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === 'all' || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [localizedPosts, searchQuery, selectedCategory]);

  // Calculate pagination slice
  const totalPages = Math.ceil(filteredPosts.length / pageSize);
  const paginatedPosts = useMemo(() => {
    if (isHome) {
      return filteredPosts.slice(0, 4); // Display max 4 cards on home preview
    }
    const startIndex = (currentPage - 1) * pageSize;
    return filteredPosts.slice(startIndex, startIndex + pageSize);
  }, [filteredPosts, currentPage, pageSize, isHome]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      const topElem = document.getElementById('blog-grid-top');
      if (topElem) {
        topElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Get related posts for single post reader view
  const relatedPosts = useMemo(() => {
    if (!activeArticle) return [];
    return localizedPosts
      .filter(p => p.id !== activeArticle.id)
      .slice(0, 3);
  }, [localizedPosts, activeArticle]);

  // -------------------------------------------------------------
  // SINGLE BLOG POST FULL READER VIEW
  // -------------------------------------------------------------
  if (activeArticle) {
    return (
      <div className="max-w-4xl mx-auto py-4 sm:py-8 space-y-6 sm:space-y-8 animate-fadeIn font-sans">
        {/* Navigation Breadcrumb Bar */}
        <div className="flex items-center justify-between gap-4 bg-slate-50 border border-slate-200 p-3 sm:p-4 rounded-2xl">
          <button
            onClick={handleCloseArticle}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-indigo-700 hover:text-indigo-900 bg-white border border-indigo-200 hover:bg-indigo-50 px-3.5 py-2 rounded-xl transition-all cursor-pointer shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>
              {tMulti(currentLang, {
                en: 'Back to Blog List',
                vi: 'Quay lại danh sách bài viết',
                fr: 'Retour à la liste des blogs',
                de: 'Zurück zur Blogübersicht',
                ja: 'ブログ一覧に戻る',
                zh: '返回博客列表',
                he: 'חזרה לרשימת הבלוג',
                ko: '블로그 목록으로 돌아가기',
                es: 'Volver a la lista del blog'
              })}
            </span>
          </button>

          <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500 font-medium truncate max-w-xs md:max-w-md">
            <span>
              {tMulti(currentLang, {
                en: 'Blog',
                vi: 'Blog',
                fr: 'Blog',
                de: 'Blog',
                ja: 'ブログ',
                zh: '博客',
                he: 'בלוג',
                ko: '블로그',
                es: 'Blog'
              })}
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate text-slate-900 font-bold">
              {activeArticle.title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://vietnamvisa.govt.vn/apply-online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-xl transition-all cursor-pointer shadow-2xs"
            >
              <span>
                {tMulti(currentLang, {
                  en: 'Apply Visa',
                  vi: 'Xin Visa Khẩn',
                  fr: 'Postuler Visa',
                  de: 'Visum Beantragen',
                  ja: 'ビザ申請',
                  zh: '立即申请签证',
                  he: 'הגש בקשת ויזה',
                  ko: '비자 신청',
                  es: 'Solicitar Visa'
                })}
              </span>
            </a>

            <button
              onClick={handleCloseArticle}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-xl transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
              <span>
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
              </span>
            </button>
          </div>
        </div>

        {/* Full Article Reader Card */}
        <article className="bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden">
          {/* Header Banner Image */}
          <div className="relative h-64 sm:h-80 md:h-[420px] bg-slate-950 overflow-hidden">
            <img
              src={activeArticle.featuredImage}
              alt={activeArticle.title}
              className="w-full h-full object-cover opacity-85 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 space-y-3 text-white max-w-4xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-red-600 text-white text-[11px] font-black px-3 py-1 rounded-lg uppercase tracking-wider shadow-md">
                  {activeArticle.category || 'Visa News'}
                </span>
                <span className="bg-indigo-500/90 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-lg flex items-center gap-1 backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  {tMulti(currentLang, {
                    en: 'Latest 2026 News',
                    vi: 'Tin Cập Nhật 2026',
                    fr: 'Dernières Nouvelles 2026',
                    de: 'Neueste Nachrichten 2026',
                    ja: '2026年最新ニュース',
                    zh: '2026 最新动态',
                    he: 'חדשות 2026 העדכניות',
                    ko: '2026 최신 소식',
                    es: 'Últimas noticias 2026'
                  })}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
                {activeArticle.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-1">
                <span className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-md px-2.5 py-1 rounded-lg">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  {activeArticle.date}
                </span>
                <span className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-md px-2.5 py-1 rounded-lg">
                  <User className="w-3.5 h-3.5 text-emerald-400" />
                  {activeArticle.author}
                </span>
                <span className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-md px-2.5 py-1 rounded-lg">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  {activeArticle.readTime || '4 min read'}
                </span>
              </div>
            </div>
          </div>

          {/* Article Body Content */}
          <div className="p-6 sm:p-10 md:p-12 space-y-8">
            <div 
              onClick={handleContentClick}
              className="prose prose-slate lg:prose-lg max-w-none text-slate-800 leading-relaxed space-y-5 break-words cursor-pointer title-hover [&_img]:w-full [&_img]:max-w-full [&_img]:h-auto [&_img]:max-h-none [&_img]:object-contain [&_img]:rounded-2xl [&_img]:mx-auto [&_img]:my-6 [&_figure]:w-full [&_figure]:max-w-full [&_figure]:mx-auto [&_table]:w-full [&_table]:max-w-full [&_table]:overflow-x-auto [&_iframe]:max-w-full"
              dangerouslySetInnerHTML={{ __html: activeArticle.content || activeArticle.excerpt }}
            />

            {/* Application Callout Banner */}
            <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-black text-white">
                  {tMulti(currentLang, {
                    en: 'Need Urgent Vietnam E-Visa Approval?',
                    vi: 'Cần Xử Lý E-Visa Việt Nam Khẩn?',
                    fr: 'Besoin d\'un e-Visa d\'urgence pour le Vietnam ?',
                    de: 'Benötigen Sie ein Eilvisum für Vietnam?',
                    ja: 'ベトナムe-Visaの緊急発給が必要ですか？',
                    zh: '需要紧急加急办理越南电子签证吗？',
                    he: 'צריך אישור ויזה דחוף לווייטנאם?',
                    ko: '베트남 긴급 비자 발급이 필요하신가요?',
                    es: '¿Necesita aprobación urgente de e-Visa para Vietnam?'
                  })}
                </h3>
                <p className="text-xs sm:text-sm text-indigo-200">
                  {tMulti(currentLang, {
                    en: 'Get official Vietnam visa approval in 1 to 24 hours. Guaranteed fast & secure service.',
                    vi: 'Nhận kết quả công văn nhập cảnh chỉ từ 1 giờ - 24 giờ làm việc. Cam kết 100% đúng hạn.',
                    fr: 'Obtenez votre e-visa officiel en 1 à 24 heures. Service rapide et sécurisé.',
                    de: 'Erhalten Sie Ihr Visum innerhalb von 1 bis 24 Stunden. Schnell und sicher.',
                    ja: '1〜24時間以内に公式ビザ承認を取得。迅速で安全な保証付きサービス。',
                    zh: '1 至 24 小时内获得官方核准文件。保质保时，安全快捷。',
                    he: 'קבל אישור ויזה רשמי תוך 1 עד 24 שעות. שירות מהיר ומאובטח בהתחייבות.',
                    ko: '1시간~24시간 이내 공식 비자 승인. 신속하고 안전한 발급 보장.',
                    es: 'Obtenga la aprobación oficial de visa en 1 a 24 horas. Servicio rápido y seguro.'
                  })}
                </p>
              </div>

              <a
                href="https://vietnamvisa.govt.vn/apply-online"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all cursor-pointer shrink-0 shadow-lg flex items-center justify-center gap-2 border border-orange-400/30"
              >
                <span>
                  {tMulti(currentLang, {
                    en: 'Apply Urgent Visa Now',
                    vi: 'Nộp Hồ Sơ Khẩn Ngay',
                    fr: 'Demander un visa d\'urgence',
                    de: 'Jetzt Eilvisum beantragen',
                    ja: '今すぐ緊急ビザを申請',
                    zh: '立即申请加急签证',
                    he: 'הגש ויזה דחופה עכשיו',
                    ko: '지금 긴급 비자 신청하기',
                    es: 'Solicitar visa urgente ahora'
                  })}
                </span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </article>

        {/* Related / Other Blog Articles Section */}
        {relatedPosts.length > 0 && (
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-600" />
                <span>
                  {tMulti(currentLang, {
                    en: 'Other Blog Articles',
                    vi: 'Các Bài Viết Blog Khác',
                    fr: 'Autres articles du blog',
                    de: 'Weitere Blogartikel',
                    ja: 'その他のブログ記事',
                    zh: '其他相关文章',
                    he: 'מאמרים נוספים בבלוג',
                    ko: '기타 블로그 글',
                    es: 'Otros artículos del blog'
                  })}
                </span>
              </h3>
              <button
                onClick={handleCloseArticle}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
              >
                <span>
                  {tMulti(currentLang, {
                    en: 'View all',
                    vi: 'Xem tất cả',
                    fr: 'Voir tout',
                    de: 'Alle ansehen',
                    ja: 'すべて見る',
                    zh: '查看全部',
                    he: 'הצג הכל',
                    ko: '전체 보기',
                    es: 'Ver todo'
                  })}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-5">
              {relatedPosts.map(p => (
                <article
                  key={p.id}
                  onClick={() => handleOpenPost(p)}
                  className="bg-white rounded-2xl border border-slate-200 p-3 sm:p-4 shadow-2xs hover:shadow-md hover:border-indigo-300 transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div className="space-y-2.5">
                    <div className="relative h-28 sm:h-36 rounded-xl overflow-hidden bg-slate-100">
                      <img src={p.featuredImage} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                      <span className="absolute bottom-2 right-2 bg-slate-900/80 text-white text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded-md">
                        {p.readTime}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-slate-500 font-medium">
                      <Calendar className="w-3 h-3 text-indigo-500" />
                      <span>{p.date}</span>
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm line-clamp-2 group-hover:text-indigo-600 transition-colors">
                      {p.title}
                    </h4>
                  </div>
                  <div className="pt-2.5 border-t border-slate-100 mt-2.5 flex items-center justify-between text-xs font-bold text-indigo-600">
                    <span>
                      {tMulti(currentLang, {
                        en: 'Read Article',
                        vi: 'Đọc bài viết',
                        fr: 'Lire l\'article',
                        de: 'Artikel lesen',
                        ja: '記事を読む',
                        zh: '阅读全文',
                        he: 'קרא את המאמר',
                        ko: '기사 읽기',
                        es: 'Leer artículo'
                      })}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // -------------------------------------------------------------
  // DEDICATED BLOG HUB PAGE VIEW (/blog listing) OR HOME PREVIEW SECTION
  // -------------------------------------------------------------
  return (
    <section className={`w-full space-y-6 sm:space-y-8 ${isHome ? 'my-8 sm:my-14' : 'py-4'}`}>
      {/* Scroll Anchor */}
      <div id="blog-grid-top" className="scroll-mt-20" />

      {/* Section / Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200/80 pb-6">
        <div className="space-y-2 max-w-2xl">
          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 text-white px-3 py-1 rounded-full text-xs font-extrabold tracking-wide shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-200 animate-pulse" />
            <span>Vietnam Visa Blog 2026</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            {tMulti(currentLang, {
              en: 'Vietnam Visa Blog & Travel Updates',
              vi: 'Tin Tức & Kinh Nghiệm Visa Việt Nam',
              fr: 'Blog Visa Vietnam & Actualités Voyage',
              de: 'Vietnam Visum Blog & Reiseaktualisierungen',
              ja: 'ベトナムビザブログ＆渡航最新情報',
              zh: '越南签证资讯与入境指南博客',
              he: 'בלוג ויזה לווייטנאם ועדכוני טיולים',
              ko: '베트남 비자 블로그 및 여행 소식',
              es: 'Blog de Visa de Vietnam y Novedades de Viaje'
            })}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            {tMulti(currentLang, {
              en: 'Daily updated guides on Vietnam e-Visa policies, emergency processing tips, and official travel advisories.',
              vi: 'Tổng hợp bài viết hướng dẫn e-Visa, tin tức xuất nhập cảnh và kinh nghiệm xử lý visa khẩn cấp mới nhất.',
              fr: 'Mises à jour quotidiennes sur les politiques e-Visa, conseils pour les urgences et avis officiels.',
              de: 'Täglich aktualisierte Leitfäden zu e-Visum Bestimmungen, Notfalltipps und Reisehinweisen.',
              ja: 'ベトナムe-Visaポリシー、特急発給のコツ、公式渡航情報を毎日更新中。',
              zh: '每日更新越南电子签证最新政策、紧急出签技巧与官方入境警示。',
              he: 'מדריכים מעודכנים על מדיניות הויזה, טיפים להנפקה דחופה ואזהרות מסע רשמיות.',
              ko: '베트남 전자비자 정책, 긴급 비자 발급 팁 및 공식 여행 안내를 매일 업데이트합니다.',
              es: 'Guías actualizadas sobre e-Visa de Vietnam, consejos para trámites urgentes y avisos oficiales.'
            })}
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3 shrink-0">
          {isHome && (
            <button
              onClick={() => {
                window.history.pushState({}, '', '/blog');
                window.dispatchEvent(new PopStateEvent('popstate'));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-extrabold px-4 py-2.5 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <span>
                {tMulti(currentLang, {
                  en: 'View All Blog Articles',
                  vi: 'Xem Tất Cả Bài Viết Blog',
                  fr: 'Voir tous les articles',
                  de: 'Alle Blogartikel ansehen',
                  ja: 'すべてのブログ記事を見る',
                  zh: '查看所有博客文章',
                  he: 'צפה בכל מאמרי הבלוג',
                  ko: '모든 블로그 글 보기',
                  es: 'Ver todos los artículos del blog'
                })}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={loadPosts}
            disabled={loading}
            className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-3.5 py-2 rounded-xl border border-slate-200 transition-colors cursor-pointer disabled:opacity-50"
            title={
              tMulti(currentLang, {
                en: 'Reload articles',
                vi: 'Tải lại bài viết',
                fr: 'Recharger les articles',
                de: 'Artikel neu laden',
                ja: '記事を再読み込み',
                zh: '重新加载文章',
                he: 'טען מאמרים מחדש',
                ko: '기사 새로고침',
                es: 'Recargar artículos'
              })
            }
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

      {/* Filter & Search Bar (Only shown on dedicated /blog page) */}
      {!isHome && (
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder={
                  tMulti(currentLang, {
                    en: 'Search blog articles...',
                    vi: 'Tìm kiếm bài viết blog...',
                    fr: 'Rechercher des articles...',
                    de: 'Blogartikel suchen...',
                    ja: 'ブログ記事を検索...',
                    zh: '搜索博客文章...',
                    he: 'חפש מאמרים בבלוג...',
                    ko: '블로그 기사 검색...',
                    es: 'Buscar artículos del blog...'
                  })
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm focus:outline-none transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-slate-900 text-white shadow-2xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {tMulti(currentLang, {
                  en: 'All Articles',
                  vi: 'Tất cả bài viết',
                  fr: 'Tous les articles',
                  de: 'Alle Artikel',
                  ja: 'すべての記事',
                  zh: '所有文章',
                  he: 'כל המאמרים',
                  ko: '전체 글',
                  es: 'Todos los artículos'
                })}
              </button>

              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-slate-900 text-white shadow-2xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Loading Skeleton */}
      {loading ? (
        <div className={isHome ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5" : "grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-6"}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-slate-100 rounded-2xl h-80 animate-pulse border border-slate-200" />
          ))}
        </div>
      ) : filteredPosts.length === 0 ? (
        <div className="bg-slate-50 border border-dashed border-slate-300 rounded-2xl p-10 text-center space-y-3">
          <FileText className="w-10 h-10 text-slate-400 mx-auto" />
          <p className="text-sm font-semibold text-slate-600">
            {tMulti(currentLang, {
              en: 'No blog posts matched your search filters.',
              vi: 'Không tìm thấy bài viết nào phù hợp với từ khóa.',
              fr: 'Aucun article ne correspond à vos filtres de recherche.',
              de: 'Keine Blogartikel entsprechen Ihren Suchfiltern.',
              ja: '検索条件に一致するブログ記事が見つかりませんでした。',
              zh: '没有找到匹配搜索条件的文章。',
              he: 'לא נמצאו מאמרים התואמים את המסננים שלך.',
              ko: '검색 조건과 일치하는 글이 없습니다.',
              es: 'No se encontraron artículos que coincidan con los filtros.'
            })}
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
            className="text-xs font-bold text-indigo-600 hover:underline cursor-pointer"
          >
            {tMulti(currentLang, {
              en: 'Clear search filters',
              vi: 'Xóa bộ lọc',
              fr: 'Effacer les filtres',
              de: 'Filter zurücksetzen',
              ja: 'フィルターをクリア',
              zh: '清除搜索条件',
              he: 'נקה מסננים',
              ko: '필터 초기화',
              es: 'Limpiar filtros de búsqueda'
            })}
          </button>
        </div>
      ) : (
        /* Blog Cards Grid */
        <div className="space-y-8">
          <div className={isHome ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5" : "grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-6"}>
            {paginatedPosts.map((post) => {
              const postHref = `/blog/${post.slug || post.id}`;
              return (
                <article
                  key={post.id}
                  className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-indigo-300 transition-all duration-200 flex flex-col overflow-hidden group"
                >
                  {/* Image Banner */}
                  <a 
                    href={postHref}
                    onClick={(e) => {
                      e.preventDefault();
                      handleOpenPost(post);
                    }}
                    className="relative h-36 sm:h-44 md:h-48 overflow-hidden bg-slate-100 shrink-0 cursor-pointer block"
                  >
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />
                    
                    {/* Read Time badge */}
                    <span className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 bg-slate-900/80 text-slate-200 text-[9px] sm:text-xs font-semibold px-1.5 sm:px-2 py-0.5 rounded-md backdrop-blur-xs flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-400" />
                      {post.readTime}
                    </span>
                  </a>

                  {/* Card Body */}
                  <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between space-y-2.5 sm:space-y-3">
                    <div className="space-y-1.5 sm:space-y-2">
                      {/* Meta Date & Author */}
                      <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-slate-500 font-medium">
                        <span className="flex items-center gap-1 shrink-0">
                          <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-indigo-500" />
                          {post.date}
                        </span>
                        <span className="hidden sm:flex items-center gap-1 truncate max-w-[130px]">
                          <User className="w-3.5 h-3.5 text-emerald-500" />
                          {post.author}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-extrabold text-slate-900 text-xs sm:text-base group-hover:text-indigo-600 transition-colors line-clamp-2 cursor-pointer leading-snug">
                        <a 
                          href={postHref}
                          onClick={(e) => {
                            e.preventDefault();
                            handleOpenPost(post);
                          }}
                        >
                          {post.title}
                        </a>
                      </h3>

                      {/* Excerpt */}
                      <p className="text-[11px] sm:text-sm text-slate-600 line-clamp-2 sm:line-clamp-3 leading-relaxed font-normal">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Action Footer */}
                    <div className="pt-2 sm:pt-3 border-t border-slate-100 flex items-center justify-between">
                      <a
                        href={postHref}
                        onClick={(e) => {
                          e.preventDefault();
                          handleOpenPost(post);
                        }}
                        className="w-full text-xs sm:text-sm font-bold text-indigo-600 group-hover:text-indigo-700 flex items-center justify-between cursor-pointer"
                      >
                        <span>
                          {tMulti(currentLang, {
                            en: 'Read Article',
                            vi: 'Xem chi tiết',
                            fr: 'Lire l\'article',
                            de: 'Artikel lesen',
                            ja: '詳細を見る',
                            zh: '阅读全文',
                            he: 'קרא מאמר',
                            ko: '자세히 보기',
                            es: 'Leer artículo'
                          })}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Pagination Controls Bar */}
          {!isHome && totalPages > 1 && (
            <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
              <div className="text-xs sm:text-sm text-slate-600 font-medium text-center sm:text-left">
                <span>
                  {tMulti(currentLang, {
                    en: `Showing ${Math.min((currentPage - 1) * pageSize + 1, filteredPosts.length)} - ${Math.min(currentPage * pageSize, filteredPosts.length)} of ${filteredPosts.length} articles (Page ${currentPage} of ${totalPages})`,
                    vi: `Hiển thị ${Math.min((currentPage - 1) * pageSize + 1, filteredPosts.length)} - ${Math.min(currentPage * pageSize, filteredPosts.length)} trong ${filteredPosts.length} bài viết (Trang ${currentPage}/${totalPages})`,
                    fr: `Affichage de ${Math.min((currentPage - 1) * pageSize + 1, filteredPosts.length)} à ${Math.min(currentPage * pageSize, filteredPosts.length)} sur ${filteredPosts.length} articles (Page ${currentPage} sur ${totalPages})`,
                    de: `Anzeige von ${Math.min((currentPage - 1) * pageSize + 1, filteredPosts.length)} - ${Math.min(currentPage * pageSize, filteredPosts.length)} von ${filteredPosts.length} Artikeln (Seite ${currentPage} von ${totalPages})`,
                    ja: `${filteredPosts.length}件中 ${Math.min((currentPage - 1) * pageSize + 1, filteredPosts.length)}〜${Math.min(currentPage * pageSize, filteredPosts.length)}件を表示 (${totalPages}ページ中${currentPage}ページ目)`,
                    zh: `显示第 ${Math.min((currentPage - 1) * pageSize + 1, filteredPosts.length)} - ${Math.min(currentPage * pageSize, filteredPosts.length)} 条，共 ${filteredPosts.length} 条文章 (第 ${currentPage} / ${totalPages} 页)`,
                    he: `מציג ${Math.min((currentPage - 1) * pageSize + 1, filteredPosts.length)} - ${Math.min(currentPage * pageSize, filteredPosts.length)} מתוך ${filteredPosts.length} מאמרים (עמוד ${currentPage} מתוך ${totalPages})`,
                    ko: `총 ${filteredPosts.length}개 기사 중 ${Math.min((currentPage - 1) * pageSize + 1, filteredPosts.length)} - ${Math.min(currentPage * pageSize, filteredPosts.length)} 표시 (페이지 ${currentPage} / ${totalPages})`,
                    es: `Mostrando ${Math.min((currentPage - 1) * pageSize + 1, filteredPosts.length)} - ${Math.min(currentPage * pageSize, filteredPosts.length)} de ${filteredPosts.length} artículos (Página ${currentPage} de ${totalPages})`
                  })}
                </span>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2">
                {/* Previous Page Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white transition-all cursor-pointer shadow-2xs disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">
                    {tMulti(currentLang, {
                      en: 'Previous',
                      vi: 'Trang trước',
                      fr: 'Précédent',
                      de: 'Zurück',
                      ja: '前へ',
                      zh: '上一页',
                      he: 'הקודם',
                      ko: '이전',
                      es: 'Anterior'
                    })}
                  </span>
                </button>

                {/* Page Number Buttons */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                      currentPage === pageNum
                        ? 'bg-indigo-600 text-white shadow-2xs'
                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}

                {/* Next Page Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white transition-all cursor-pointer shadow-2xs disabled:cursor-not-allowed"
                >
                  <span className="hidden sm:inline">
                    {tMulti(currentLang, {
                      en: 'Next',
                      vi: 'Trang sau',
                      fr: 'Suivant',
                      de: 'Weiter',
                      ja: '次へ',
                      zh: '下一页',
                      he: 'הבא',
                      ko: '다음',
                      es: 'Siguiente'
                    })}
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Lightbox Modal for Article Images */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div 
            className="relative max-w-5xl max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Controls Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950/60 text-white">
              <span className="text-xs font-semibold text-slate-300 truncate max-w-md">
                {lightboxImage.alt}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setZoomLevel(prev => Math.max(0.5, prev - 0.25))}
                  className="p-2 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono px-1">{Math.round(zoomLevel * 100)}%</span>
                <button
                  onClick={() => setZoomLevel(prev => Math.min(3, prev + 0.25))}
                  className="p-2 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomLevel(1)}
                  className="p-2 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors ml-1"
                  title="Reset Zoom"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setLightboxImage(null)}
                  className="p-2 text-slate-300 hover:text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors ml-3"
                  title="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Lightbox Image Container */}
            <div className="p-4 overflow-auto flex items-center justify-center max-h-[calc(90vh-60px)]">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
                className="max-w-full max-h-full object-contain transition-transform duration-200 rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
