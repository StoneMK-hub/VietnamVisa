import React, { useState, useEffect } from 'react';
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
  FileText
} from 'lucide-react';
import { Language } from '../types';
import { BlogPost, fetchUrgentBlogPosts } from '../services/wordpressApi';

interface BlogSectionProps {
  currentLang: Language;
  onStartApplication?: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ currentLang, onStartApplication }) => {
  const isVi = currentLang === 'vi';
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

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

  return (
    <section className="w-full my-8 sm:my-14 space-y-6 sm:space-y-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/80 pb-4">
        <div className="space-y-2">
          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 text-white px-3 py-1 rounded-full text-xs font-extrabold tracking-wide shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-200 animate-pulse" />
            <span>Visa Blog</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {isVi 
              ? 'Blog Visa' 
              : 'Visa Blog'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl font-normal leading-relaxed">
            {isVi 
              ? 'Cập nhật bài viết Blog Visa Việt Nam hàng ngày' 
              : 'Vietnam Visa Blog Update Daily new'}
          </p>
        </div>

        {/* Refresh / Source Status */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={loadPosts}
            disabled={loading}
            className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-200 transition-colors cursor-pointer disabled:opacity-50"
            title={isVi ? 'Tải lại bài viết WordPress' : 'Reload WordPress posts'}
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>{isVi ? 'Làm mới' : 'Reload'}</span>
          </button>
        </div>
      </div>

      {/* Loading Skeleton */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-slate-100 rounded-2xl h-80 animate-pulse border border-slate-200" />
          ))}
        </div>
      ) : posts.length === 0 ? (
        <div className="bg-slate-50 border border-dashed border-slate-300 rounded-2xl p-8 text-center text-slate-500 text-xs font-semibold">
          {isVi ? 'Chưa tìm thấy bài viết nào trong danh mục này.' : 'No blog posts found in this category.'}
        </div>
      ) : (
        /* Blog Cards Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {posts.slice(0, 4).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-indigo-300 transition-all duration-200 flex flex-col overflow-hidden group"
            >
              {/* Image Banner */}
              <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-100 shrink-0">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />
                
                {/* Read Time */}
                <span className="absolute bottom-3 right-3 bg-slate-900/80 text-slate-200 text-xs font-semibold px-2.5 py-1 rounded-md backdrop-blur-xs flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  {post.readTime}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  {/* Meta Date & Author */}
                  <div className="flex items-center gap-3 text-xs text-slate-600 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1 truncate max-w-[140px]">
                      <User className="w-3.5 h-3.5 text-emerald-500" />
                      {post.author}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 
                    onClick={() => setSelectedPost(post)}
                    className="font-extrabold text-slate-900 text-sm sm:text-base group-hover:text-indigo-600 transition-colors line-clamp-2 cursor-pointer leading-snug"
                  >
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed font-normal">
                    {post.excerpt}
                  </p>
                </div>

                {/* Action Footer */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="w-full text-xs sm:text-sm font-bold text-indigo-600 group-hover:text-indigo-700 flex items-center justify-between cursor-pointer"
                  >
                    <span>{isVi ? 'Xem bài viết chi tiết' : 'Read Full Article'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Article Reader Overlay Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative space-y-6">
            {/* Modal Header Image */}
            <div className="relative h-48 sm:h-64 bg-slate-900 overflow-hidden rounded-t-3xl">
              <img
                src={selectedPost.featuredImage}
                alt={selectedPost.title}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 bg-slate-900/80 hover:bg-slate-900 text-white p-2 rounded-full backdrop-blur-md transition-all cursor-pointer border border-white/20"
              >
                <X className="w-5 h-5" />
              </button>

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

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div 
                className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed text-slate-700 space-y-4"
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
                    setSelectedPost(null);
                    if (onStartApplication) onStartApplication();
                  }}
                  className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs px-5 py-2.5 rounded-xl transition-all cursor-pointer shrink-0 shadow-md border border-orange-500"
                >
                  {isVi ? 'Xin Visa Khẩn Ngay' : 'Apply Urgent Visa'}
                </button>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
                <button
                  onClick={() => setSelectedPost(null)}
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
