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
  ExternalLink,
  ShieldAlert,
  Search,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Filter,
  FileText
} from 'lucide-react';
import { Language } from '../types';
import { BlogPost, fetchUrgentBlogPosts, fetchWpPostBySlug } from '../services/wordpressApi';
import { CustomSEOData } from './SEOMetadata';
import { getBlogSlugFromPath } from '../routes';

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
  const isVi = currentLang === 'vi';
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
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
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (onSEOChange) {
      onSEOChange({
        title: post.title,
        description: post.excerpt,
        canonicalUrl: `${window.location.origin}/blog/${postSlug}`,
        ogImage: post.featuredImage,
        ogType: 'article',
        articleAuthor: post.author || 'Immigration Advisory Team'
      });
    }
  };

  const handleCloseArticle = () => {
    setSelectedPost(null);
    if (window.location.pathname.startsWith('/blog/')) {
      window.history.pushState({}, '', '/blog');
    }
    if (onSEOChange) {
      onSEOChange(null);
    }
  };

  const handleOpenFullBlogPage = (post: BlogPost) => {
    const postSlug = post.slug || String(post.id);
    window.history.pushState({}, '', `/blog/${postSlug}`);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const checkUrlRoute = async () => {
      const pathname = window.location.pathname;
      const slugFromPath = getBlogSlugFromPath(pathname);

      if (slugFromPath) {
        const matched = posts.find(p => p.slug === slugFromPath || String(p.id) === slugFromPath);
        if (matched) {
          handleOpenPost(matched, false);
          return;
        }

        const livePost = await fetchWpPostBySlug(slugFromPath);
        if (livePost) {
          handleOpenPost(livePost, false);
        }
      } else if (pathname === '/blog' && selectedPost) {
        setSelectedPost(null);
        if (onSEOChange) onSEOChange(null);
      }
    };

    checkUrlRoute();
    window.addEventListener('popstate', checkUrlRoute);
    return () => window.removeEventListener('popstate', checkUrlRoute);
  }, [posts]);

  // Categories list
  const categories = useMemo(() => {
    const cats = new Set<string>();
    posts.forEach(p => {
      if (p.category) cats.add(p.category);
    });
    return Array.from(cats);
  }, [posts]);

  // Filtered posts based on search and category
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = !searchQuery || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCat = selectedCategory === 'all' || post.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [posts, searchQuery, selectedCategory]);

  // Total Pages calculation
  const totalPages = useMemo(() => {
    if (isHome) return 1;
    return Math.max(1, Math.ceil(filteredPosts.length / pageSize));
  }, [isHome, filteredPosts.length, pageSize]);

  // Paginated articles for rendering
  const paginatedPosts = useMemo(() => {
    if (isHome) {
      return posts.slice(0, 4);
    }
    const startIndex = (currentPage - 1) * pageSize;
    return filteredPosts.slice(startIndex, startIndex + pageSize);
  }, [isHome, posts, filteredPosts, currentPage, pageSize]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      const topElement = document.getElementById('blog-grid-top');
      if (topElement) {
        topElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  // -------------------------------------------------------------
  // DEDICATED FULL ARTICLE PAGE VIEW (When in /blog route and article is selected)
  // -------------------------------------------------------------
  if (!isHome && selectedPost) {
    const relatedPosts = posts.filter(p => p.id !== selectedPost.id).slice(0, 3);

    return (
      <div className="space-y-6 sm:space-y-8 animate-fade-in pb-12">
        {/* Top Sticky Navigation Bar */}
        <div className="sticky top-16 z-30 flex flex-wrap items-center justify-between gap-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-md border border-slate-200">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
            <button
              onClick={handleCloseArticle}
              className="inline-flex items-center gap-1.5 font-bold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{isVi ? 'Tất Cả Bài Viết Blog' : 'All Blog Posts'}</span>
            </button>
            <ChevronRight className="w-4 h-4 text-slate-300 shrink-0" />
            <span className="font-semibold text-slate-800 truncate max-w-[180px] sm:max-w-md">
              {selectedPost.title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {onStartApplication && (
              <button
                onClick={onStartApplication}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-xl transition-all cursor-pointer shadow-sm"
              >
                <span>{isVi ? 'Xin Visa Khẩn' : 'Apply Visa'}</span>
              </button>
            )}

            <button
              onClick={handleCloseArticle}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-xl transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
              <span>{isVi ? 'Đóng' : 'Close'}</span>
            </button>
          </div>
        </div>

        {/* Full Article Reader Card */}
        <article className="bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden">
          {/* Header Banner Image */}
          <div className="relative h-64 sm:h-80 md:h-[420px] bg-slate-950 overflow-hidden">
            <img
              src={selectedPost.featuredImage}
              alt={selectedPost.title}
              className="w-full h-full object-cover opacity-85 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 space-y-3 text-white max-w-4xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-red-600 text-white text-[11px] font-black px-3 py-1 rounded-lg uppercase tracking-wider shadow-md">
                  {selectedPost.category || 'Visa News'}
                </span>
                <span className="bg-indigo-500/90 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-lg flex items-center gap-1 backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  {isVi ? 'Tin Cập Nhật 2026' : 'Latest 2026 News'}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
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
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  {selectedPost.readTime || '4 min read'}
                </span>
              </div>
            </div>
          </div>

          {/* Article Body Content */}
          <div className="p-6 sm:p-10 md:p-12 space-y-8">
            <div 
              className="prose prose-slate lg:prose-lg max-w-none text-slate-800 leading-relaxed space-y-5 overflow-hidden break-words [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-2xl [&_img]:mx-auto [&_img]:my-6 [&_table]:w-full [&_table]:max-w-full [&_table]:overflow-x-auto [&_iframe]:max-w-full"
              dangerouslySetInnerHTML={{ __html: selectedPost.content || selectedPost.excerpt }}
            />

            {/* Application Callout Banner */}
            <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-black text-white">
                  {isVi ? 'Cần Xử Lý E-Visa Việt Nam Khẩn?' : 'Need Urgent Vietnam E-Visa Approval?'}
                </h3>
                <p className="text-xs sm:text-sm text-indigo-200">
                  {isVi 
                    ? 'Nhận kết quả công văn nhập cảnh chỉ từ 1 giờ - 24 giờ làm việc. Cam kết 100% đúng hạn.' 
                    : 'Get official Vietnam visa approval in 1 to 24 hours. Guaranteed fast & secure service.'}
                </p>
              </div>

              {onStartApplication && (
                <button
                  onClick={onStartApplication}
                  className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all cursor-pointer shrink-0 shadow-lg flex items-center justify-center gap-2 border border-orange-400/30"
                >
                  <span>{isVi ? 'Nộp Hồ Sơ Khẩn Ngay' : 'Apply Urgent Visa Now'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </article>

        {/* Related / Other Blog Articles Section */}
        {relatedPosts.length > 0 && (
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-600" />
                <span>{isVi ? 'Các Bài Viết Blog Khác' : 'Other Blog Articles'}</span>
              </h3>
              <button
                onClick={handleCloseArticle}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
              >
                <span>{isVi ? 'Xem tất cả' : 'View all'}</span>
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
                    <span>{isVi ? 'Đọc bài viết' : 'Read Article'}</span>
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 text-white px-3 py-1 rounded-full text-xs font-extrabold tracking-wide shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-200 animate-pulse" />
            <span>Vietnam Visa Blog 2026</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            {isVi 
              ? 'Tin Tức & Kinh Nghiệm Visa Việt Nam' 
              : 'Vietnam Visa Blog & Travel Updates'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            {isVi 
              ? 'Tổng hợp bài viết hướng dẫn e-Visa, tin tức xuất nhập cảnh và kinh nghiệm xử lý visa khẩn cấp mới nhất.' 
              : 'Daily updated guides on Vietnam e-Visa policies, emergency processing tips, and official travel advisories.'}
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
              <span>{isVi ? 'Xem Tất Cả Bài Viết Blog' : 'View All Blog Articles'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={loadPosts}
            disabled={loading}
            className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-3.5 py-2 rounded-xl border border-slate-200 transition-colors cursor-pointer disabled:opacity-50"
            title={isVi ? 'Tải lại bài viết' : 'Reload articles'}
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>{isVi ? 'Làm mới' : 'Reload'}</span>
          </button>
        </div>
      </div>

      {/* Filter & Search Bar (Only shown on dedicated /blog page) */}
      {!isHome && (
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder={isVi ? 'Tìm kiếm bài viết blog...' : 'Search blog articles...'}
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
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {isVi ? 'Tất cả bài viết' : 'All Articles'}
              </button>

              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-slate-900 text-white shadow-sm'
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
            {isVi ? 'Không tìm thấy bài viết nào phù hợp với từ khóa.' : 'No blog posts matched your search filters.'}
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
            className="text-xs font-bold text-indigo-600 hover:underline cursor-pointer"
          >
            {isVi ? 'Xóa bộ lọc' : 'Clear search filters'}
          </button>
        </div>
      ) : (
        /* Blog Cards Grid: 2 columns on Mobile, 3 columns on Desktop (or 4 on Home preview) */
        <div className="space-y-8">
          <div className={isHome ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5" : "grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-6"}>
            {paginatedPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-indigo-300 transition-all duration-200 flex flex-col overflow-hidden group"
              >
                {/* Image Banner */}
                <div 
                  onClick={() => handleOpenPost(post)}
                  className="relative h-32 sm:h-44 md:h-48 overflow-hidden bg-slate-100 shrink-0 cursor-pointer"
                >
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />
                  
                  {/* Category & Read Time */}
                  <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-red-600 text-white text-[9px] sm:text-[10px] font-extrabold px-1.5 sm:px-2.5 py-0.5 rounded-md uppercase tracking-wider shadow-sm truncate max-w-[110px] sm:max-w-none">
                    {post.category || 'Blog'}
                  </span>

                  <span className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 bg-slate-900/80 text-slate-200 text-[9px] sm:text-xs font-semibold px-1.5 sm:px-2 py-0.5 rounded-md backdrop-blur-xs flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    {post.readTime}
                  </span>
                </div>

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
                    <h3 
                      onClick={() => handleOpenPost(post)}
                      className="font-extrabold text-slate-900 text-xs sm:text-base group-hover:text-indigo-600 transition-colors line-clamp-2 cursor-pointer leading-snug"
                    >
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-[11px] sm:text-sm text-slate-600 line-clamp-2 sm:line-clamp-3 leading-relaxed font-normal">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Action Footer */}
                  <div className="pt-2 sm:pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => handleOpenPost(post)}
                      className="w-full text-xs sm:text-sm font-bold text-indigo-600 group-hover:text-indigo-700 flex items-center justify-between cursor-pointer"
                    >
                      <span>{isVi ? 'Xem chi tiết' : 'Read Article'}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination Controls Bar (Only on dedicated /blog page with multiple pages) */}
          {!isHome && totalPages > 1 && (
            <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
              <div className="text-xs sm:text-sm text-slate-600 font-medium text-center sm:text-left">
                {isVi ? (
                  <span>
                    Hiển thị <b>{Math.min((currentPage - 1) * pageSize + 1, filteredPosts.length)}</b> - <b>{Math.min(currentPage * pageSize, filteredPosts.length)}</b> trong <b>{filteredPosts.length}</b> bài viết (Trang {currentPage}/{totalPages})
                  </span>
                ) : (
                  <span>
                    Showing <b>{Math.min((currentPage - 1) * pageSize + 1, filteredPosts.length)}</b> - <b>{Math.min(currentPage * pageSize, filteredPosts.length)}</b> of <b>{filteredPosts.length}</b> articles (Page {currentPage} of {totalPages})
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2">
                {/* Previous Page Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white transition-all cursor-pointer shadow-xs disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">{isVi ? 'Trang trước' : 'Previous'}</span>
                </button>

                {/* Page Number Buttons */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                    // Show numbers: page 1, current page +- 1, totalPages
                    if (
                      pageNum === 1 ||
                      pageNum === totalPages ||
                      Math.abs(pageNum - currentPage) <= 1
                    ) {
                      return (
                        <button
                          key={pageNum}
                          onClick={() => handlePageChange(pageNum)}
                          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                            currentPage === pageNum
                              ? 'bg-indigo-600 text-white shadow-md scale-105'
                              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    } else if (
                      (pageNum === 2 && currentPage > 3) ||
                      (pageNum === totalPages - 1 && currentPage < totalPages - 2)
                    ) {
                      return <span key={pageNum} className="px-1 text-slate-400 text-xs">...</span>;
                    }
                    return null;
                  })}
                </div>

                {/* Next Page Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage >= totalPages}
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white transition-all cursor-pointer shadow-xs disabled:cursor-not-allowed"
                >
                  <span className="hidden sm:inline">{isVi ? 'Trang sau' : 'Next'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* -------------------------------------------------------------
          QUICK VIEW OVERLAY MODAL WITH STICKY FLOATING CLOSE BUTTON
          (Used on Home or quick preview mode)
         ------------------------------------------------------------- */}
      {selectedPost && isHome && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 relative space-y-6 scrollbar-thin">
            
            {/* FLOATING STICKY CLOSE BUTTON BAR */}
            <div className="sticky top-2 right-2 z-50 flex justify-end pointer-events-none p-2 pr-3">
              <button
                onClick={handleCloseArticle}
                className="pointer-events-auto bg-slate-900/90 hover:bg-red-600 text-white p-2.5 rounded-full shadow-2xl border border-white/40 backdrop-blur-md transition-all hover:scale-105 cursor-pointer group flex items-center gap-1.5"
                title={isVi ? 'Đóng cửa sổ xem nhanh' : 'Close quick view'}
              >
                <X className="w-5 h-5" />
                <span className="text-xs font-bold pr-1 hidden sm:inline">{isVi ? 'Đóng' : 'Close'}</span>
              </button>
            </div>

            {/* Modal Header Image */}
            <div className="relative -mt-14 h-52 sm:h-64 bg-slate-900 overflow-hidden rounded-t-3xl">
              <img
                src={selectedPost.featuredImage}
                alt={selectedPost.title}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 space-y-1.5 text-white">
                <span className="bg-red-600 text-white text-[10px] font-black px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                  {selectedPost.category}
                </span>
                <h2 className="text-lg sm:text-2xl font-black text-white leading-tight">
                  {selectedPost.title}
                </h2>
                <div className="flex items-center gap-4 text-xs text-slate-300 pt-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    {selectedPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-emerald-400" />
                    {selectedPost.author}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div 
                className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed text-slate-700 space-y-4 overflow-hidden break-words [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-xl [&_img]:mx-auto [&_img]:my-4 [&_table]:w-full [&_table]:max-w-full [&_table]:overflow-x-auto [&_iframe]:max-w-full"
                dangerouslySetInnerHTML={{ __html: selectedPost.content || selectedPost.excerpt }}
              />

              {/* Urgent Callout Box inside Modal */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500 text-white shrink-0 mt-0.5">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">
                      {isVi ? 'Bạn Cần Dịch Vụ Visa Khẩn 1H - 24H?' : 'Need Emergency 1-Hour Vietnam E-Visa?'}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">
                      {isVi 
                        ? 'Đội ngũ chuyên gia sẵn sàng nộp hồ sơ trực tiếp với Cục XNC 24/7 kể cả cuối tuần.' 
                        : 'Our 24/7 team directly files with Vietnam Immigration for instant approval letters.'}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    handleCloseArticle();
                    if (onStartApplication) onStartApplication();
                  }}
                  className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs px-5 py-2.5 rounded-xl transition-all cursor-pointer shrink-0 shadow-md border border-orange-500"
                >
                  {isVi ? 'Xin Visa Khẩn Ngay' : 'Apply Urgent Visa'}
                </button>
              </div>

              {/* Modal Footer Controls */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => handleOpenFullBlogPage(selectedPost)}
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-sm cursor-pointer"
                >
                  <span>{isVi ? 'Xem Trang Chi Tiết Blog Full' : 'Open Full Article Page'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={handleCloseArticle}
                  className="text-xs font-bold text-slate-700 hover:text-slate-900 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  {isVi ? 'Đóng bài viết' : 'Close Article'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
