import React, { useState, useEffect, useMemo } from 'react';
import { 
  Network, 
  Search, 
  FileCode2, 
  ExternalLink, 
  Globe2, 
  BookOpen, 
  HelpCircle, 
  ShieldCheck, 
  Layers, 
  CheckCircle2, 
  ArrowUpRight,
  Download,
  Copy,
  Check,
  Building2,
  Calendar,
  Tag
} from 'lucide-react';
import { Language } from '../types';
import { TabType, ROUTES } from '../routes';
import { tMulti } from '../data/translations';
import { COUNTRIES_DATA } from '../data/countries';
import { fetchUrgentBlogPosts, fetchWpRequirementPosts, fetchWpFaqPosts, BlogPost, WpFaqItem } from '../services/wordpressApi';
import { SEOBreadcrumb } from './SEOBreadcrumb';
import { getLocalizedCountryName } from './RequirementsChecker';
import { getExactCountryRequirementUrl } from '../data/countryUrls';

interface HtmlSitemapViewProps {
  currentLang: Language;
  onNavigate: (tab: TabType) => void;
}

export const HtmlSitemapView: React.FC<HtmlSitemapViewProps> = ({ currentLang, onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedXml, setCopiedXml] = useState<boolean>(false);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [reqPosts, setReqPosts] = useState<BlogPost[]>([]);
  const [faqs, setFaqs] = useState<WpFaqItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        const [posts, reqs, faqList] = await Promise.all([
          fetchUrgentBlogPosts(),
          fetchWpRequirementPosts(),
          fetchWpFaqPosts()
        ]);
        if (isMounted) {
          setBlogPosts(posts || []);
          setReqPosts(reqs || []);
          setFaqs(faqList || []);
        }
      } catch (err) {
        console.warn('Error loading dynamic sitemap data:', err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }
    loadData();
    return () => { isMounted = false; };
  }, []);

  const handleCopyXmlUrl = () => {
    const sitemapUrl = `${window.location.origin}/sitemap.xml`;
    navigator.clipboard.writeText(sitemapUrl).then(() => {
      setCopiedXml(true);
      setTimeout(() => setCopiedXml(false), 2500);
    }).catch(() => {});
  };

  // Main Core Pages
  const mainPages = useMemo(() => [
    {
      tab: 'home' as TabType,
      path: '/',
      title: tMulti(currentLang, {
        en: 'Home | Official Vietnam Visa Agency Portal',
        vi: 'Trang Chủ | Cổng Dịch Vụ E-Visa Việt Nam'
      }),
      desc: tMulti(currentLang, {
        en: 'Online e-visa agency processing, 1-hour fast-track and 24/7 advisory.',
        vi: 'Cổng tiếp nhận hồ sơ visa điện tử Việt Nam khẩn và hỗ trợ 24/7.'
      }),
      changefreq: 'Daily',
      priority: '1.0'
    },
    {
      tab: 'overview' as TabType,
      path: '/overview',
      title: tMulti(currentLang, {
        en: 'Vietnam E-Visa Overview & Entry Policy',
        vi: 'Tổng Quan E-Visa & Quy Định Nhập Cảnh'
      }),
      desc: tMulti(currentLang, {
        en: 'Detailed overview of 83 international entry ports, duration and guidelines.',
        vi: 'Tổng quan chi tiết về 83 cửa khẩu nhập cảnh, thời hạn và chính sách.'
      }),
      changefreq: 'Weekly',
      priority: '0.9'
    },
    {
      tab: 'apply' as TabType,
      path: '/how-to-apply',
      title: tMulti(currentLang, {
        en: 'How to Apply Online | 3-Step Guide',
        vi: 'Hướng Dẫn Nộp Hồ Sơ Trực Tuyến 3 Bước'
      }),
      desc: tMulti(currentLang, {
        en: 'Step-by-step instructions for completing Vietnam electronic visa applications.',
        vi: 'Hướng dẫn cụ thể các bước đăng ký thị thực nhập cảnh nhanh chóng.'
      }),
      changefreq: 'Daily',
      priority: '0.9'
    },
    {
      tab: 'calculator' as TabType,
      path: '/visa-fee',
      title: tMulti(currentLang, {
        en: 'Visa Fee Calculator & Pricing Table',
        vi: 'Bảng Tính Phí & Báo Giá Dịch Vụ Visa'
      }),
      desc: tMulti(currentLang, {
        en: 'Transparent breakdown of government stamp fees and urgent service rates.',
        vi: 'Bảng tra cứu lệ phí nhà nước và phí dịch vụ làm khẩn minh bạch.'
      }),
      changefreq: 'Weekly',
      priority: '0.8'
    },
    {
      tab: 'requirements' as TabType,
      path: '/visa-requirements',
      title: tMulti(currentLang, {
        en: 'Visa Requirements & Exemption Rules',
        vi: 'Quy Định Visa & Danh Sách Miễn Thị Thực'
      }),
      desc: tMulti(currentLang, {
        en: 'Check eligibility, 45-day visa-free countries, and passport conditions.',
        vi: 'Tra cứu điều kiện nhập cảnh, danh sách 24+ nước miễn visa 45 ngày.'
      }),
      changefreq: 'Weekly',
      priority: '0.9'
    },
    {
      tab: 'blog' as TabType,
      path: '/blog',
      title: tMulti(currentLang, {
        en: 'Urgent Vietnam Visa Blog & News',
        vi: 'Tin Tức & Kinh Nghiệm Visa Khẩn'
      }),
      desc: tMulti(currentLang, {
        en: 'Latest immigration policies, travel advisories, and emergency processing tips.',
        vi: 'Cập nhật tin tức xuất nhập cảnh, kinh nghiệm du lịch và mẹo làm visa nhanh.'
      }),
      changefreq: 'Daily',
      priority: '0.8'
    },
    {
      tab: 'track' as TabType,
      path: '/track-application',
      title: tMulti(currentLang, {
        en: 'Track Visa Application Status',
        vi: 'Tra Cứu Tiến Độ Hồ Sơ Visa'
      }),
      desc: tMulti(currentLang, {
        en: 'Look up real-time visa status using VNV code or passport number.',
        vi: 'Tra cứu trạng thái xét duyệt visa tức thì bằng mã hồ sơ hoặc số hộ chiếu.'
      }),
      changefreq: 'Always',
      priority: '0.8'
    },
    {
      tab: 'faqs' as TabType,
      path: '/faqs',
      title: tMulti(currentLang, {
        en: 'Frequently Asked Questions (FAQ)',
        vi: 'Hỏi Đáp Thường Gặp (FAQs)'
      }),
      desc: tMulti(currentLang, {
        en: 'Answers to common questions regarding photo specs, ports, and emergency entries.',
        vi: 'Giải đáp mọi thắc mắc về tiêu chuẩn ảnh, đổi cửa khẩu và xử lý sự cố.'
      }),
      changefreq: 'Weekly',
      priority: '0.7'
    },
    {
      tab: 'about' as TabType,
      path: '/about',
      title: tMulti(currentLang, {
        en: 'About Us | BDA Tech & Media JSC',
        vi: 'Về Chúng Tôi | BDA Tech & Media JSC'
      }),
      desc: tMulti(currentLang, {
        en: 'Over 17+ years of experience facilitating seamless Vietnam entry solutions.',
        vi: 'Hơn 17 năm kinh nghiệm cung cấp giải pháp thị thực và đón sân bay uy tín.'
      }),
      changefreq: 'Monthly',
      priority: '0.6'
    },
    {
      tab: 'contact' as TabType,
      path: '/contact-us',
      title: tMulti(currentLang, {
        en: 'Contact 24/7 Support Hotline',
        vi: 'Liên Hệ Hỗ Trợ 24/7'
      }),
      desc: tMulti(currentLang, {
        en: 'Get 24/7 direct assistance via hotline, WhatsApp, and email.',
        vi: 'Tư vấn và giải đáp thắc mắc 24/7 qua đường dây nóng, WhatsApp và email.'
      }),
      changefreq: 'Monthly',
      priority: '0.6'
    }
  ], [currentLang]);

  // Legal & Policy Pages
  const legalPages = useMemo(() => [
    {
      tab: 'payment-guidelines' as TabType,
      path: '/payment-guidelines',
      title: tMulti(currentLang, {
        en: 'Payment Guidelines & Refund Terms',
        vi: 'Hướng Dẫn Thanh Toán & Hoàn Tiền'
      }),
      desc: tMulti(currentLang, {
        en: 'Supported payment gateways, card security, and transparent refund terms.',
        vi: 'Các cổng thanh toán an toàn, bảo mật thẻ và điều kiện hoàn tiền rõ ràng.'
      }),
      priority: '0.5'
    },
    {
      tab: 'terms-and-conditions' as TabType,
      path: '/terms-and-conditions',
      title: tMulti(currentLang, {
        en: 'Terms and Conditions of Service',
        vi: 'Điều Khoản & Điều Kiện Dịch Vụ'
      }),
      desc: tMulti(currentLang, {
        en: 'Commercial agency terms, customer responsibilities, and service commitments.',
        vi: 'Quy định sử dụng dịch vụ, quyền lợi và trách nhiệm của khách hàng.'
      }),
      priority: '0.5'
    },
    {
      tab: 'privacy-policy' as TabType,
      path: '/privacy-policy',
      title: tMulti(currentLang, {
        en: 'Privacy Policy & 256-Bit Data Protection',
        vi: 'Chính Sách Bảo Mật Dữ Liệu 256-Bit'
      }),
      desc: tMulti(currentLang, {
        en: 'How we protect and encrypt passport and personal application data.',
        vi: 'Cam kết bảo mật và mã hóa thông tin hộ chiếu của du khách tuyệt đối.'
      }),
      priority: '0.5'
    }
  ], [currentLang]);

  // Filtered Items based on search
  const q = searchQuery.toLowerCase().trim();

  const filteredMainPages = useMemo(() => {
    if (!q) return mainPages;
    return mainPages.filter(p => p.title.toLowerCase().includes(q) || p.path.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
  }, [mainPages, q]);

  const filteredLegalPages = useMemo(() => {
    if (!q) return legalPages;
    return legalPages.filter(p => p.title.toLowerCase().includes(q) || p.path.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
  }, [legalPages, q]);

  const filteredCountries = useMemo(() => {
    if (!q) return COUNTRIES_DATA;
    return COUNTRIES_DATA.filter(c => {
      const nameEn = c.countryName.toLowerCase();
      const nameVi = (c.countryNameVi || '').toLowerCase();
      const code = c.code.toLowerCase();
      return nameEn.includes(q) || nameVi.includes(q) || code.includes(q);
    });
  }, [q]);

  const filteredBlogPosts = useMemo(() => {
    if (!q) return blogPosts;
    return blogPosts.filter(p => p.title.toLowerCase().includes(q) || p.slug.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q));
  }, [blogPosts, q]);

  const filteredFaqs = useMemo(() => {
    if (!q) return faqs;
    return faqs.filter(f => f.question.toLowerCase().includes(q) || f.answerSummary.toLowerCase().includes(q));
  }, [faqs, q]);

  const totalCalculatedUrls = mainPages.length + legalPages.length + COUNTRIES_DATA.length + blogPosts.length + faqs.length + 1;

  return (
    <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-5 sm:py-10 space-y-6 sm:space-y-8">
      {/* Breadcrumb Navigation */}
      <SEOBreadcrumb activeTab="sitemap" currentLang={currentLang} />

      {/* Hero Header Section */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl border border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
              <Network className="w-3.5 h-3.5" />
              <span>
                {tMulti(currentLang, {
                  en: 'Structured Web Index & Search Engine Map',
                  vi: 'Sơ Đồ Cấu Trúc Website Chuẩn SEO'
                })}
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {tMulti(currentLang, {
                en: 'HTML Sitemap & Complete Website Architecture',
                vi: 'Sitemap HTML & Toàn Bộ Cấu Trúc Website'
              })}
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {tMulti(currentLang, {
                en: 'Explore every single published page, 195+ country visa requirement guides, latest WordPress blog articles, and official XML feeds for Google Search Console indexing.',
                vi: 'Khám phá tất cả các trang nội dung, 195+ hướng dẫn visa theo từng quốc gia, bài viết mới nhất đồng bộ tự động từ WordPress và sơ đồ XML chuẩn Google Search Console.'
              })}
            </p>
          </div>

          {/* Quick XML Sitemap GSC Action Card */}
          <div className="bg-slate-800/80 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-slate-700/80 shadow-lg space-y-3 shrink-0 md:w-80">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileCode2 className="w-5 h-5 text-emerald-400" />
                <span className="font-bold text-sm text-white">XML Sitemap (GSC)</span>
              </div>
              <span className="bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full">
                Auto-Synced
              </span>
            </div>
            <p className="text-xs text-slate-300">
              {tMulti(currentLang, {
                en: 'Auto-updated XML feed conforming to sitemaps.org 0.9 standard for Googlebot.',
                vi: 'Cung cấp đường dẫn XML chuẩn giao thức sitemaps.org 0.9 cho Googlebot lập chỉ mục.'
              })}
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold py-2 px-3.5 rounded-xl transition-all shadow-sm"
              >
                <span>/sitemap.xml</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={handleCopyXmlUrl}
                className="flex items-center justify-center gap-1.5 bg-slate-700/80 hover:bg-slate-600 text-slate-200 text-xs font-semibold py-1.5 px-3 rounded-xl transition-all border border-slate-600"
              >
                {copiedXml ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300">
                      {tMulti(currentLang, { en: 'Copied URL!', vi: 'Đã sao chép link!' })}
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-300" />
                    <span>
                      {tMulti(currentLang, { en: 'Copy XML Sitemap URL', vi: 'Sao chép link Sitemap XML' })}
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Metric Counters */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-xs sm:text-sm">
        <div className="bg-white p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200 shadow-2xs">
          <p className="text-slate-500 text-xs font-medium">
            {tMulti(currentLang, { en: 'Core Services & Portals', vi: 'Trang Dịch Vụ Chính' })}
          </p>
          <p className="text-xl sm:text-2xl font-black text-slate-900 mt-1">10</p>
        </div>
        <div className="bg-white p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200 shadow-2xs">
          <p className="text-slate-500 text-xs font-medium">
            {tMulti(currentLang, { en: 'Country Visa Guides', vi: 'Hướng Dẫn Quốc Gia' })}
          </p>
          <p className="text-xl sm:text-2xl font-black text-indigo-600 mt-1">{COUNTRIES_DATA.length}+</p>
        </div>
        <div className="bg-white p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200 shadow-2xs">
          <p className="text-slate-500 text-xs font-medium">
            {tMulti(currentLang, { en: 'Articles & Guides', vi: 'Bài Viết & Tin Tức' })}
          </p>
          <p className="text-xl sm:text-2xl font-black text-emerald-600 mt-1">{blogPosts.length}</p>
        </div>
        <div className="bg-white p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200 shadow-2xs">
          <p className="text-slate-500 text-xs font-medium">
            {tMulti(currentLang, { en: 'Total Indexed URLs', vi: 'Tổng Số URL Đã Đánh Chỉ Mục' })}
          </p>
          <p className="text-xl sm:text-2xl font-black text-amber-600 mt-1">{totalCalculatedUrls}</p>
        </div>
      </div>

      {/* Real-Time Search & Fast Navigation Toolbar */}
      <div className="bg-white p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200 shadow-2xs space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={tMulti(currentLang, {
              en: 'Search all sitemap URLs, country guides (e.g. United States, France, Urgent Blog, Fee)...',
              vi: 'Tìm nhanh URL, hướng dẫn quốc gia (Mỹ, Pháp, Nhật Bản, bảng phí, bài viết...)...'
            })}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold px-2 py-1 bg-slate-200 rounded-md"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Jump Anchors */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs">
          <span className="text-slate-400 font-semibold mr-1">
            {tMulti(currentLang, { en: 'Jump to:', vi: 'Chuyển đến:' })}
          </span>
          <a href="#core-services" className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 font-medium transition-colors">
            {tMulti(currentLang, { en: '1. Core Portals', vi: '1. Dịch Vụ Chính' })}
          </a>
          <a href="#country-guides" className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 font-medium transition-colors">
            {tMulti(currentLang, { en: '2. Country Guides (195+)', vi: '2. Hướng Dẫn Quốc Gia' })}
          </a>
          <a href="#blog-articles" className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 font-medium transition-colors">
            {tMulti(currentLang, { en: '3. Blog & News', vi: '3. Tin Tức & Blog' })}
          </a>
          <a href="#faq-section" className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 font-medium transition-colors">
            {tMulti(currentLang, { en: '4. FAQs Hub', vi: '4. Hỏi Đáp FAQs' })}
          </a>
          <a href="#legal-policies" className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 font-medium transition-colors">
            {tMulti(currentLang, { en: '5. Legal & Policies', vi: '5. Chính Sách & Pháp Lý' })}
          </a>
        </div>
      </div>

      {/* SECTION 1: CORE SERVICES & PORTALS */}
      <section id="core-services" className="bg-white rounded-2xl border border-slate-200 shadow-2xs p-4 sm:p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                {tMulti(currentLang, {
                  en: 'Core Services & Main Portals',
                  vi: 'Dịch Vụ Chính & Các Cổng Tra Cứu'
                })}
              </h2>
              <p className="text-xs text-slate-500">
                {tMulti(currentLang, {
                  en: 'Primary functional views and application gateways with highest crawl priority (0.8 - 1.0)',
                  vi: 'Các trang nghiệp vụ chính và cổng nộp hồ sơ ưu tiên cao nhất cho Googlebot (0.8 - 1.0)'
                })}
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
            {filteredMainPages.length} {tMulti(currentLang, { en: 'Pages', vi: 'Trang' })}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {filteredMainPages.map((item) => (
            <div
              key={item.path}
              className="group p-3.5 sm:p-4 rounded-xl border border-slate-200/80 hover:border-indigo-300 hover:bg-indigo-50/30 transition-all space-y-1.5 flex flex-col justify-between"
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.tab);
                    }}
                    className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{item.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full shrink-0">
                    P: {item.priority}
                  </span>
                </div>
                <p className="text-xs text-slate-600 line-clamp-2">
                  {item.desc}
                </p>
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-600 pt-1 border-t border-slate-100">
                <code className="text-indigo-700 bg-indigo-50/70 px-2 py-0.5 rounded font-mono font-medium">
                  {item.path}
                </code>
                <span>Freq: {item.changefreq}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: COUNTRY-SPECIFIC VISA GUIDES (195+ COUNTRIES) */}
      <section id="country-guides" className="bg-white rounded-2xl border border-slate-200 shadow-2xs p-4 sm:p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              2
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <span>
                  {tMulti(currentLang, {
                    en: 'Country-Specific Visa Eligibility & Guides (195+ Nations)',
                    vi: 'Hướng Dẫn Quy Định Visa Theo Từng Quốc Gia (195+ Quốc Tịch)'
                  })}
                </span>
                <Globe2 className="w-4 h-4 text-emerald-600" />
              </h2>
              <p className="text-xs text-slate-500">
                {tMulti(currentLang, {
                  en: 'Individual nationality guides with exemption policies (45 days) and e-Visa protocols',
                  vi: 'Danh mục hướng dẫn nhập cảnh chi tiết theo từng quốc tịch và quy định miễn thị thực'
                })}
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
            {filteredCountries.length} {tMulti(currentLang, { en: 'Countries', vi: 'Quốc gia' })}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
          {filteredCountries.map((c) => {
            const locName = getLocalizedCountryName(c, currentLang);
            const countrySlug = c.countryName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
            const targetUrl = `/vietnam-visa-requirements-for-${countrySlug}-citizens/`;

            return (
              <a
                key={c.code}
                href={targetUrl}
                onClick={(e) => {
                  e.preventDefault();
                  // Navigate to requirements checker tab
                  onNavigate('requirements');
                }}
                className="group p-2.5 rounded-xl border border-slate-200/80 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all flex flex-col justify-between text-left"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg">{c.flagEmoji}</span>
                    <p className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors truncate">
                      {locName}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {c.exemptionDays > 0 ? (
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/80 px-1.5 py-0.2 rounded">
                        {c.exemptionDays}d Free
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold text-indigo-700 bg-indigo-100/80 px-1.5 py-0.2 rounded">
                        e-Visa
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1 mt-1 border-t border-slate-100 text-[10px] text-slate-400">
                  <span className="font-mono">{c.code}</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-emerald-600" />
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: BLOG ARTICLES & NEWS (DYNAMIC WORDPRESS FEED) */}
      <section id="blog-articles" className="bg-white rounded-2xl border border-slate-200 shadow-2xs p-4 sm:p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              3
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <span>
                  {tMulti(currentLang, {
                    en: 'Urgent Blog Articles & Travel News (Auto-Synced)',
                    vi: 'Bài Viết Tin Tức & Hướng Dẫn Visa (Đồng Bộ Tự Động)'
                  })}
                </span>
                <BookOpen className="w-4 h-4 text-amber-600" />
              </h2>
              <p className="text-xs text-slate-500">
                {tMulti(currentLang, {
                  en: 'Latest published advisory posts from the WordPress REST API',
                  vi: 'Các bài viết mới nhất được tự động cập nhật từ hệ thống WordPress'
                })}
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg">
            {filteredBlogPosts.length} {tMulti(currentLang, { en: 'Articles', vi: 'Bài viết' })}
          </span>
        </div>

        {filteredBlogPosts.length === 0 ? (
          <p className="text-xs text-slate-500 italic py-4 text-center">
            {tMulti(currentLang, { en: 'No blog articles matching your search query.', vi: 'Không tìm thấy bài viết nào khớp với từ khóa.' })}
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {filteredBlogPosts.map((post) => (
              <div
                key={post.id}
                className="group p-3.5 sm:p-4 rounded-xl border border-slate-200/80 hover:border-amber-300 hover:bg-amber-50/30 transition-all space-y-2 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[11px] text-slate-500">
                    <Calendar className="w-3 h-3 text-amber-600" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="text-amber-700 font-medium">{post.author}</span>
                  </div>
                  <a
                    href={`/blog/${post.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('blog');
                    }}
                    className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors inline-flex items-start gap-1.5"
                  >
                    <span>{post.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-600 shrink-0 mt-0.5" />
                  </a>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-600 pt-1 border-t border-slate-100">
                  <code className="text-amber-800 bg-amber-50/80 px-2 py-0.5 rounded font-mono font-medium truncate max-w-[200px] sm:max-w-xs">
                    /blog/{post.slug}
                  </code>
                  <span className="shrink-0 text-slate-500">P: 0.8</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* SECTION 4: FREQUENTLY ASKED QUESTIONS (FAQS) */}
      <section id="faq-section" className="bg-white rounded-2xl border border-slate-200 shadow-2xs p-4 sm:p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              4
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <span>
                  {tMulti(currentLang, {
                    en: 'Frequently Asked Questions (FAQs)',
                    vi: 'Danh Mục Câu Hỏi Thường Gặp (FAQs)'
                  })}
                </span>
                <HelpCircle className="w-4 h-4 text-purple-600" />
              </h2>
              <p className="text-xs text-slate-500">
                {tMulti(currentLang, {
                  en: 'Direct questions covering urgent flight arrivals, photo requirements, and border checkpoints',
                  vi: 'Các câu hỏi trọng tâm về ảnh chân dung, đổi cửa khẩu và quy trình xử lý khẩn tại sân bay'
                })}
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-lg">
            {filteredFaqs.length} {tMulti(currentLang, { en: 'Questions', vi: 'Câu hỏi' })}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {filteredFaqs.map((faq, idx) => (
            <a
              key={faq.id || idx}
              href="/faqs"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('faqs');
              }}
              className="group p-3 rounded-xl border border-slate-200/80 hover:border-purple-300 hover:bg-purple-50/30 transition-all flex flex-col justify-between text-left space-y-1.5"
            >
              <p className="text-xs font-bold text-slate-900 group-hover:text-purple-700 transition-colors line-clamp-2">
                Q: {faq.question}
              </p>
              <p className="text-[11px] text-slate-600 line-clamp-2">
                {faq.answerSummary}
              </p>
              <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[10px] text-slate-500">
                <span>/faqs</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-purple-600" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SECTION 5: LEGAL, POLICIES & SECURITY */}
      <section id="legal-policies" className="bg-white rounded-2xl border border-slate-200 shadow-2xs p-4 sm:p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold">
              5
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <span>
                  {tMulti(currentLang, {
                    en: 'Legal Terms, Payment Guidelines & Data Privacy',
                    vi: 'Điều Khoản Pháp Lý, Thanh Toán & Bảo Mật Dữ Liệu'
                  })}
                </span>
                <ShieldCheck className="w-4 h-4 text-slate-600" />
              </h2>
              <p className="text-xs text-slate-500">
                {tMulti(currentLang, {
                  en: 'Important compliance documents, 256-bit SSL encryption specifications, and refund terms',
                  vi: 'Chính sách bảo mật, hướng dẫn thanh toán và quy định bảo vệ dữ liệu người dùng'
                })}
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg">
            {filteredLegalPages.length} {tMulti(currentLang, { en: 'Policies', vi: 'Chính sách' })}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          {filteredLegalPages.map((item) => (
            <div
              key={item.path}
              className="group p-3.5 rounded-xl border border-slate-200/80 hover:border-slate-400 hover:bg-slate-50 transition-all space-y-1.5 flex flex-col justify-between"
            >
              <div className="space-y-1">
                <a
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.tab);
                  }}
                  className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{item.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600" />
                </a>
                <p className="text-xs text-slate-600 line-clamp-2">
                  {item.desc}
                </p>
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-600 pt-1 border-t border-slate-100">
                <code className="text-slate-700 bg-slate-100 px-2 py-0.5 rounded font-mono font-medium">
                  {item.path}
                </code>
                <span>P: {item.priority}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
