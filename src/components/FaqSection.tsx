import React, { useState, useEffect } from 'react';
import { 
  HelpCircle, 
  Search, 
  RefreshCw, 
  ExternalLink, 
  BookOpen, 
  Sparkles, 
  X,
  PhoneCall,
  ShieldCheck,
  Calendar,
  User,
  ArrowRight,
  ShieldAlert,
  ChevronDown,
  LayoutGrid,
  List
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { WpFaqItem, fetchWpFaqPosts } from '../services/wordpressApi';

interface FaqSectionProps {
  currentLang: Language;
  variant?: 'accordion' | 'grid';
  onStartApplication?: () => void;
}

// Static FAQs for Home Page (Matching user screenshot design)
const STATIC_FAQS = [
  {
    id: 'static-1',
    questionEn: 'How long does it take to process a Vietnam e-Visa?',
    questionVi: 'Thời gian xử lý e-Visa Việt Nam mất bao lâu?',
    answerEn: 'Standard processing takes 3-5 working days. Urgent e-Visa processing is available for 1 to 24-hour turnaround (including weekends and holidays).',
    answerVi: 'Thời gian xử lý tiêu chuẩn là 3-5 ngày làm việc. Dịch vụ xin e-Visa khẩn hỗ trợ cấp nhanh từ 1h đến 24h (kể cả thứ 7, Chủ Nhật và ngày Lễ).'
  },
  {
    id: 'static-2',
    questionEn: 'What are the required passport validity rules for Vietnam entry?',
    questionVi: 'Quy định về thời hạn hộ chiếu khi nhập cảnh Việt Nam là gì?',
    answerEn: 'Your passport must be valid for at least 6 months beyond your planned entry date and have at least two blank pages for entry and exit stamps.',
    answerVi: 'Hộ chiếu của bạn phải còn thời hạn ít nhất 6 tháng kể từ ngày nhập cảnh dự kiến và còn tối thiểu 2 trang trống để đóng dấu xuất nhập cảnh.'
  },
  {
    id: 'static-3',
    questionEn: 'Which nationalities qualify for Vietnam e-Visa?',
    questionVi: 'Quốc tịch nào được cấp e-Visa Việt Nam?',
    answerEn: 'Citizens of all countries and territories worldwide are eligible to apply for Vietnam e-Visa (up to 90 days validity, single or multiple entry).',
    answerVi: 'Công dân tất cả các quốc gia và vùng lãnh thổ trên thế giới đều đủ điều kiện xin e-Visa Việt Nam (thời hạn lên tới 90 ngày, nhập cảnh 1 lần hoặc nhiều lần).'
  },
  {
    id: 'static-4',
    questionEn: 'What is the Airport Fast-Track Concierge Service?',
    questionVi: 'Dịch vụ Đón Nhanh tại Sân Bay (Airport Fast-Track) là gì?',
    answerEn: 'Our Fast-Track service provides a dedicated officer at the arrival airport to greet you at the gate, assist with immigration clearance, and expedite baggage handling.',
    answerVi: 'Dịch vụ Fast-Track hỗ trợ chuyên viên đón quý khách ngay tại cửa máy bay, phân luồng ưu tiên làm thủ tục nhập cảnh và hỗ trợ lấy hành lý nhanh chóng.'
  },
  {
    id: 'static-5',
    questionEn: 'What if my visa application is declined?',
    questionVi: 'Nếu đơn xin visa của tôi bị từ chối thì sao?',
    answerEn: 'If your application is declined due to document or information errors, our specialist team will review, rectify, and resubmit your application with a 100% money-back guarantee policy.',
    answerVi: 'Nếu hồ sơ bị từ chối do sai sót thông tin hoặc giấy tờ, đội ngũ chuyên gia của chúng tôi sẽ kiểm tra, điều chỉnh và nộp lại với chính sách hoàn tiền 100% nếu không thành công.'
  }
];

export const FaqSection: React.FC<FaqSectionProps> = ({ 
  currentLang, 
  variant = 'accordion',
  onStartApplication 
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const isVi = currentLang === 'vi';

  // WordPress state (used on dedicated FAQs page)
  const [wpFaqs, setWpFaqs] = useState<WpFaqItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [selectedFaq, setSelectedFaq] = useState<WpFaqItem | null>(null);
  
  // Accordion open state for both static and WP FAQs
  const [openStaticId, setOpenStaticId] = useState<string | null>(null);
  const [openWpId, setOpenWpId] = useState<number | string | null>(null);
  
  // View mode state initialized with prop
  const [viewMode, setViewMode] = useState<'accordion' | 'grid'>(variant);

  useEffect(() => {
    setViewMode(variant);
  }, [variant]);

  // Load WP FAQs only when in grid view or explicit user reload
  const loadWpFaqs = async () => {
    setLoading(true);
    try {
      const data = await fetchWpFaqPosts();
      setWpFaqs(data);
      if (data.length > 0) {
        setOpenWpId(data[0].id);
      }
    } catch (err) {
      console.error('Failed to load WP FAQs:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (viewMode === 'grid') {
      loadWpFaqs();
    }
  }, [viewMode]);

  // Topic Keyword Filter Helper for WP FAQs
  const topicFilterKeywords: Record<string, string[]> = {
    rules: ['visa', 'exemption', 're-enter', 'country', 'need', 'validity', 'legitimate', 'miễn'],
    photo: ['photo', 'passport', 'picture', 'upload', 'size', 'requirement', 'ảnh', 'hộ chiếu'],
    work: ['work', 'study', 'business', 'job', 'tourist', 'làm việc', 'học'],
    process: ['time', 'urgent', 'express', 'emergency', 'cost', 'fee', 'delay', 'khẩn']
  };

  const filteredWpFaqs = wpFaqs.filter((item) => {
    const matchesSearch = 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answerSummary.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    if (selectedTopic === 'all') return true;

    const keywords = topicFilterKeywords[selectedTopic] || [];
    const lowerQ = item.question.toLowerCase();
    return keywords.some(k => lowerQ.includes(k));
  });

  // HOME PAGE ACCORDION VIEW (STATIC CONTENT MATCHING USER SCREENSHOT EXACTLY)
  if (viewMode === 'accordion') {
    return (
      <div className="w-full space-y-6 sm:space-y-8 my-6 sm:my-10">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xs border border-slate-200/90 p-4 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
          
          {/* Header Section (Matching screenshot exactly) */}
          <div className="text-center space-y-2.5 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 bg-indigo-50/90 text-indigo-700 text-xs sm:text-sm font-semibold px-3.5 py-1 rounded-full border border-indigo-100/90 shadow-2xs">
              <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
              <span>{isVi ? 'Trung tâm hỗ trợ 24/7' : '24/7 Support Center'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {isVi ? 'Hỏi Đáp Thường Gặp (FAQs)' : 'FAQs'}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              {isVi 
                ? 'Giải đáp các thắc mắc thường gặp về thủ tục xin visa Việt Nam.' 
                : 'Find answers to common questions about Vietnam visa processing.'}
            </p>
          </div>

          {/* Static Accordion Items (Matching screenshot layout) */}
          <div className="space-y-3.5 max-w-4xl mx-auto pt-2">
            {STATIC_FAQS.map((faq) => {
              const isOpen = openStaticId === faq.id;
              const question = isVi ? faq.questionVi : faq.questionEn;
              const answer = isVi ? faq.answerVi : faq.answerEn;

              return (
                <div
                  key={faq.id}
                  className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                    isOpen 
                      ? 'border-indigo-300 bg-white ring-2 ring-indigo-500/10 shadow-2xs' 
                      : 'border-slate-200/90 bg-slate-50/60 hover:bg-slate-50'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenStaticId(isOpen ? null : faq.id)}
                    className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="leading-snug">{question}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-indigo-600' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 animate-fade-in">
                      <p>{answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* 24/7 Advisory & Assistance Callout Banner */}
          <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-5 sm:p-7 text-white flex flex-col md:flex-row items-center justify-between gap-5 border border-slate-800 shadow-xl max-w-4xl mx-auto">
            <div className="space-y-1 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-amber-400 font-extrabold text-xs sm:text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>{isVi ? 'Giải Đáp Trực Tiếp 24/7' : '24/7 Live Immigration Advisory'}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black">
                {isVi ? 'Cần Xử Lý Hồ Sơ Khẩn Hoặc Giải Đáp Trực Tiếp?' : 'Need Instant Clarification or Airport Emergency Support?'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                {isVi 
                  ? 'Đội ngũ chuyên viên sẵn sàng tiếp nhận thông tin và tư vấn nhập cảnh khẩn 1h-24h tại tất cả các sân bay quốc tế Việt Nam.' 
                  : 'Our dedicated advisory hotline operates 24/7 for emergency airport entry approval and custom e-visa guidance.'}
              </p>
            </div>

            <a
              href="https://wa.me/84832320320"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm sm:text-base px-5 py-3 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer shrink-0"
            >
              <PhoneCall className="w-4 h-4" />
              <span>WhatsApp Hotline 24/7</span>
            </a>
          </div>

        </div>
      </div>
    );
  }

  // DEDICATED FAQs PAGE VIEW (GRID / WORDPRESS BLOG KNOWLEDGEBASE)
  return (
    <div className="w-full space-y-6 sm:space-y-8 my-6 sm:my-10">
      {/* Container Card */}
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-md border border-slate-200/90 p-4 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
        
        {/* Full Knowledgebase Header for FAQs Tab */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-[11px] sm:text-xs font-black px-3.5 py-1 rounded-full shadow-xs tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              <span>FAQs Vietnam Visa Knowledgebase</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {isVi ? 'Hỏi Đáp & Cẩm Nang Visa Việt Nam 2026' : 'Vietnam Visa FAQs & Entry Knowledgebase'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
              {isVi 
                ? 'Tổng hợp giải đáp thắc mắc về quy định e-Visa, hình ảnh tiêu chuẩn, miễn thị thực, nhập cảnh lại và thủ tục visa khẩn 24/7 từ chuyên gia.' 
                : 'Comprehensive answers published directly from our official WordPress blog category covering e-Visa rules, photo requirements, exemptions, and emergency entry.'}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* View Mode Switch */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                type="button"
                onClick={() => setViewMode('accordion')}
                className={`flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'accordion' 
                    ? 'bg-white text-indigo-700 shadow-2xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <List className="w-3.5 h-3.5" />
                <span>{isVi ? 'Danh sách' : 'Accordion'}</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'grid' 
                    ? 'bg-white text-indigo-700 shadow-2xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>{isVi ? 'Lưới Grid' : 'Grid'}</span>
              </button>
            </div>

            <button
              onClick={loadWpFaqs}
              disabled={loading}
              className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-3.5 py-2 rounded-xl border border-slate-200 transition-colors cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>{isVi ? 'Làm mới' : 'Reload'}</span>
            </button>
          </div>
        </div>

        {/* Search Bar & Filter Pills */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={isVi ? 'Tìm kiếm câu hỏi (ví dụ: re-enter, photo, work, exemption...)' : 'Search questions (e.g., re-enter, photo size, work visa, passport validity...)'}
              className="w-full pl-10 pr-10 py-3 bg-slate-50 border border-slate-200/90 rounded-2xl text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-all shadow-2xs"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-extrabold text-slate-500 mr-1">{isVi ? 'Danh mục:' : 'Topics:'}</span>
            <button
              onClick={() => setSelectedTopic('all')}
              className={`text-xs font-bold px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                selectedTopic === 'all'
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
              }`}
            >
              {isVi ? 'Tất cả' : 'All FAQs'} ({wpFaqs.length})
            </button>
            <button
              onClick={() => setSelectedTopic('rules')}
              className={`text-xs font-bold px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                selectedTopic === 'rules'
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
              }`}
            >
              {isVi ? 'Quy định & Miễn Visa' : 'Visa Rules & Exemption'}
            </button>
            <button
              onClick={() => setSelectedTopic('photo')}
              className={`text-xs font-bold px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                selectedTopic === 'photo'
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
              }`}
            >
              {isVi ? 'Ảnh & Hộ Chiếu' : 'Photo & Passport'}
            </button>
            <button
              onClick={() => setSelectedTopic('work')}
              className={`text-xs font-bold px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                selectedTopic === 'work'
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
              }`}
            >
              {isVi ? 'Làm Việc & Học Tập' : 'Work & Study'}
            </button>
            <button
              onClick={() => setSelectedTopic('process')}
              className={`text-xs font-bold px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                selectedTopic === 'process'
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
              }`}
            >
              {isVi ? 'Xử Lý Khẩn & Chi Phí' : 'Urgent & Processing'}
            </button>
          </div>
        </div>

        {/* Loading State Skeleton */}
        {loading ? (
          <div className="space-y-3 pt-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-16 bg-slate-100 rounded-2xl animate-pulse border border-slate-200" />
            ))}
          </div>
        ) : filteredWpFaqs.length === 0 ? (
          <div className="bg-slate-50 border border-dashed border-slate-300 rounded-2xl p-10 text-center space-y-2">
            <p className="text-slate-600 text-sm font-bold">
              {isVi ? 'Không tìm thấy bài viết FAQ nào phù hợp.' : 'No FAQ items matched your search query.'}
            </p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedTopic('all'); loadWpFaqs(); }}
              className="text-xs font-extrabold text-indigo-600 hover:underline cursor-pointer"
            >
              {isVi ? 'Tải lại bài viết từ WordPress' : 'Reload articles from WordPress'}
            </button>
          </div>
        ) : (
          /* GRID LIST STYLE (BLOG CARDS STYLE) */
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {filteredWpFaqs.map((item) => (
              <article
                key={item.id}
                onClick={() => setSelectedFaq(item)}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-indigo-400 transition-all duration-200 flex flex-col overflow-hidden group cursor-pointer"
              >
                {/* Header Banner / Image */}
                <div className="relative h-36 sm:h-40 bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-950 overflow-hidden shrink-0">
                  {item.featuredImage ? (
                    <img
                      src={item.featuredImage}
                      alt={item.question}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center opacity-20 p-4">
                      <HelpCircle className="w-20 h-20 text-indigo-300" />
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    {/* Meta Info */}
                    <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                        {item.date}
                      </span>
                    </div>

                    {/* Question Title */}
                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base group-hover:text-indigo-600 transition-colors line-clamp-2 leading-snug">
                      {item.question}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed font-normal">
                      {item.answerSummary}
                    </p>
                  </div>

                  {/* Action Footer */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-bold text-indigo-600 group-hover:text-indigo-700 flex items-center gap-1">
                      <span>{isVi ? 'Xem chi tiết' : 'Read Full FAQ'}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-slate-400 hover:text-slate-700 p-1"
                        title={isVi ? 'Xem nguồn WordPress' : 'View WordPress Source'}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* 24/7 Advisory & Assistance Callout */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-5 sm:p-7 text-white flex flex-col md:flex-row items-center justify-between gap-5 border border-slate-800 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-amber-400 font-extrabold text-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>{isVi ? 'Giải Đáp Trực Tiếp 24/7' : '24/7 Live Immigration Advisory'}</span>
            </div>
            <h3 className="text-base sm:text-xl font-black">
              {isVi ? 'Cần Xử Lý Hồ Sơ Khẩn Hoặc Giải Đáp Trực Tiếp?' : 'Need Instant Clarification or Airport Emergency Support?'}
            </h3>
            <p className="text-xs text-slate-300 max-w-xl">
              {isVi 
                ? 'Đội ngũ chuyên viên sẵn sàng tiếp nhận thông tin và tư vấn nhập cảnh khẩn 1h-24h tại tất cả các sân bay quốc tế Việt Nam.' 
                : 'Our dedicated advisory hotline operates 24/7 for emergency airport entry approval and custom e-visa guidance.'}
            </p>
          </div>

          <a
            href="https://wa.me/84832320320"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            <span>WhatsApp Hotline 24/7</span>
          </a>
        </div>
      </div>

      {/* Full Modal Article Reader */}
      {selectedFaq && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative space-y-6">
            
            {/* Modal Image / Banner */}
            <div className="relative h-48 sm:h-60 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 overflow-hidden rounded-t-3xl">
              {selectedFaq.featuredImage ? (
                <img
                  src={selectedFaq.featuredImage}
                  alt={selectedFaq.question}
                  className="w-full h-full object-cover opacity-80"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center opacity-15">
                  <HelpCircle className="w-32 h-32 text-indigo-300" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent" />

              {/* Close Modal Button */}
              <button
                onClick={() => setSelectedFaq(null)}
                className="absolute top-4 right-4 bg-slate-900/80 hover:bg-slate-900 text-white p-2.5 rounded-full backdrop-blur-md transition-all cursor-pointer border border-white/20 shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-4 right-4 space-y-2 text-white">
                <h2 className="text-lg sm:text-2xl font-black text-white leading-tight">
                  {selectedFaq.question}
                </h2>
                <div className="flex items-center gap-4 text-xs text-slate-300 pt-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    {selectedFaq.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-emerald-400" />
                    {selectedFaq.author}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Highlighted Summary Box */}
              <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4 rounded-r-2xl text-slate-900 text-xs sm:text-sm font-semibold leading-relaxed">
                <span className="block text-[11px] font-black text-indigo-700 uppercase tracking-wider mb-1">
                  {isVi ? 'Tóm Tắt Giải Đáp:' : 'Quick Answer Summary:'}
                </span>
                {selectedFaq.answerSummary}
              </div>

              {/* HTML Content Body */}
              <div 
                className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed text-slate-700 space-y-4"
                dangerouslySetInnerHTML={{ __html: selectedFaq.fullAnswerHtml || selectedFaq.answerSummary }}
              />

              {/* Urgent Action CTA Box inside Modal */}
              <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-orange-600 text-white shrink-0 mt-0.5">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">
                      {isVi ? 'Bạn Cần Xin Visa Gấp 1h - 24h?' : 'Need Emergency 1-Hour Vietnam E-Visa?'}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">
                      {isVi 
                        ? 'Đội ngũ chuyên gia hỗ trợ nộp hồ sơ gấp trực tiếp với Cục XNC 24/7 kể cả cuối tuần.' 
                        : 'Our 24/7 fast-track team processes emergency visas directly with Vietnam Immigration.'}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedFaq(null);
                    if (onStartApplication) onStartApplication();
                  }}
                  className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs px-5 py-2.5 rounded-xl transition-all cursor-pointer shrink-0 shadow-md border border-orange-500"
                >
                  {isVi ? 'Xin Visa Khẩn Ngay' : 'Apply Urgent Visa'}
                </button>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedFaq(null)}
                  className="text-xs font-bold text-slate-700 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  {isVi ? 'Đóng' : 'Close'}
                </button>

                {selectedFaq.link && (
                  <a
                    href={selectedFaq.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:underline"
                  >
                    <span>{isVi ? 'Xem trên WordPress Blog' : 'View on WordPress Blog'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
