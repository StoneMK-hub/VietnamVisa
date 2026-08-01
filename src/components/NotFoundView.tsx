import React, { useState } from 'react';
import { 
  Home, 
  Search, 
  FileText, 
  Calculator, 
  SearchCode, 
  HelpCircle, 
  PhoneCall, 
  Compass,
  AlertTriangle,
  Globe2,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { Language } from '../types';
import { TabType } from '../routes';

interface NotFoundViewProps {
  currentLang: Language;
  onNavigate: (tab: TabType) => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({ currentLang, onNavigate }) => {
  const isVi = currentLang === 'vi';
  const [searchQuery, setSearchQuery] = useState('');

  const quickLinks: {
    titleEn: string;
    titleVi: string;
    descEn: string;
    descVi: string;
    tab: TabType;
    icon: React.ReactNode;
    badgeEn?: string;
    badgeVi?: string;
    color: string;
  }[] = [
    {
      titleEn: 'How to Apply & E-Visa Guide',
      titleVi: 'Hướng Dẫn Xin E-Visa Trực Tuyến',
      descEn: '3 simple steps to submit your Vietnam e-visa application with 24/7 support.',
      descVi: 'Hướng dẫn 3 bước xin e-visa Việt Nam đơn giản với sự hỗ trợ 24/7.',
      tab: 'apply',
      icon: <FileText className="w-5 h-5 text-indigo-600" />,
      badgeEn: 'Popular',
      badgeVi: 'Phổ Biến',
      color: 'hover:border-indigo-300 hover:bg-indigo-50/50'
    },
    {
      titleEn: 'E-Visa Fee Calculator',
      titleVi: 'Công Cụ Tính Phí Visa Trọn Gói',
      descEn: 'Instant pricing transparency for 30/90-day visas & 1h-24h express options.',
      descVi: 'Tra cứu phí niêm yết visa 30/90 ngày và các gói xử lý khẩn 1h-24h.',
      tab: 'calculator',
      icon: <Calculator className="w-5 h-5 text-emerald-600" />,
      badgeEn: 'Transparent',
      badgeVi: 'Minh Bạch',
      color: 'hover:border-emerald-300 hover:bg-emerald-50/50'
    },
    {
      titleEn: 'Track VNV Application',
      titleVi: 'Tra Cứu Tiến Độ Mã Hồ Sơ VNV',
      descEn: 'Check real-time approval status or download your visa letter.',
      descVi: 'Theo dõi tiến độ duyệt visa hoặc tải công văn nhập cảnh nhanh chóng.',
      tab: 'track',
      icon: <SearchCode className="w-5 h-5 text-amber-600" />,
      color: 'hover:border-amber-300 hover:bg-amber-50/50'
    },
    {
      titleEn: 'Visa Requirements & Exemption',
      titleVi: 'Quy Định & Miễn Thị Thực 45 Ngày',
      descEn: 'Check passport rules (>6 months) and 24+ visa-exempt nationalities.',
      descVi: 'Xem điều kiện hộ chiếu và danh sách 24+ quốc gia được miễn thị thực.',
      tab: 'requirements',
      icon: <Compass className="w-5 h-5 text-blue-600" />,
      color: 'hover:border-blue-300 hover:bg-blue-50/50'
    },
    {
      titleEn: 'E-Visa Overview & 83 Ports',
      titleVi: 'Tổng Quan E-Visa & 83 Cửa Khẩu',
      descEn: 'Complete list of accepted airports, landports, and seaports.',
      descVi: 'Danh sách 83 cửa khẩu hàng không, đường bộ và đường biển chấp nhận.',
      tab: 'overview',
      icon: <Globe2 className="w-5 h-5 text-teal-600" />,
      color: 'hover:border-teal-300 hover:bg-teal-50/50'
    },
    {
      titleEn: 'FAQs & 24/7 Advisory',
      titleVi: 'Hỏi Đáp Thường Gặp & Hotline',
      descEn: 'Solutions for photo errors, passport typos, or flight delay emergency.',
      descVi: 'Giải đáp các lỗi ảnh hộ chiếu, trễ chuyến bay và hỗ trợ khẩn cấp.',
      tab: 'faqs',
      icon: <HelpCircle className="w-5 h-5 text-purple-600" />,
      color: 'hover:border-purple-300 hover:bg-purple-50/50'
    }
  ];

  const popularTags = [
    { labelEn: 'Apply Visa', labelVi: 'Xin Visa Online', tab: 'apply' as TabType },
    { labelEn: 'Visa Fee', labelVi: 'Tính Phí Visa', tab: 'calculator' as TabType },
    { labelEn: 'Track VNV', labelVi: 'Tra Cứu VNV', tab: 'track' as TabType },
    { labelEn: '45-Day Exemption', labelVi: 'Miễn Visa 45 Ngày', tab: 'requirements' as TabType },
    { labelEn: '24/7 Hotline', labelVi: 'Hotline 24/7', tab: 'contact' as TabType }
  ];

  // Filter links if search query exists
  const filteredLinks = searchQuery.trim() === ''
    ? quickLinks
    : quickLinks.filter(item => {
        const q = searchQuery.toLowerCase();
        const textEn = (item.titleEn + ' ' + item.descEn).toLowerCase();
        const textVi = (item.titleVi + ' ' + item.descVi).toLowerCase();
        return textEn.includes(q) || textVi.includes(q);
      });

  return (
    <div className="max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-8 sm:space-y-12">
      {/* Top 404 Hero Card */}
      <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden text-center border border-indigo-900/80">
        {/* Subtle Radial Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl mx-auto space-y-4 sm:space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide backdrop-blur-md">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{isVi ? 'Lỗi 404 - Trang Không Tồn Tại' : 'Error 404 - Page Not Found'}</span>
          </div>

          {/* 404 Large Display Heading */}
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-emerald-200 leading-none">
            404
          </h1>

          <h2 className="text-lg sm:text-2xl font-extrabold text-slate-100">
            {isVi 
              ? 'Đường Dẫn Không Tồn Tại Hoặc Đã Thay Đổi' 
              : 'The Page You Are Looking For Does Not Exist'}
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg mx-auto font-normal">
            {isVi 
              ? 'Địa chỉ URL bạn vừa truy cập có thể bị sai chính tả, đã được di chuyển sang đường dẫn mới hoặc không khả dụng trên hệ thống.' 
              : 'The URL you entered might be misspelled, has been moved to a new route, or is temporarily unavailable.'}
          </p>

          {/* Search Input Box */}
          <div className="pt-2 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isVi ? 'Nhập từ khóa tìm kiếm (lệ phí, tra cứu, miễn visa)...' : 'Search for visa fee, status, requirements...'}
                className="w-full bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs sm:text-sm rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-slate-900/90 transition-all"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
            </div>

            {/* Popular Tags */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 pt-3">
              <span className="text-[11px] text-slate-400 font-medium mr-1">
                {isVi ? 'Gợi ý:' : 'Popular:'}
              </span>
              {popularTags.map((tag, idx) => (
                <button
                  key={idx}
                  onClick={() => onNavigate(tag.tab)}
                  className="bg-white/10 hover:bg-white/20 text-slate-200 text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-white/10 transition-colors cursor-pointer"
                >
                  {isVi ? tag.labelVi : tag.labelEn}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('home')}
              className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 border border-orange-500 cursor-pointer"
            >
              <Home className="w-4 h-4" />
              <span>{isVi ? 'Trở Về Trang Chủ' : 'Back to Home Page'}</span>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>{isVi ? 'Liên Hệ Hỗ Trợ 24/7' : 'Contact 24/7 Support'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Suggested Services Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-600" />
            <span>{isVi ? 'Các Trang Dịch Vụ Quan Trọng' : 'Essential Pages & Helpful Links'}</span>
          </h3>
          <span className="text-xs text-slate-500 font-medium">
            {filteredLinks.length} {isVi ? 'mục phù hợp' : 'results'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {filteredLinks.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onNavigate(item.tab)}
              className={`bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs transition-all cursor-pointer group flex flex-col justify-between ${item.color}`}
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  {(isVi ? item.badgeVi : item.badgeEn) && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700">
                      {isVi ? item.badgeVi : item.badgeEn}
                    </span>
                  )}
                </div>

                <div>
                  <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm group-hover:text-indigo-600 transition-colors">
                    {isVi ? item.titleVi : item.titleEn}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 font-normal leading-relaxed mt-1">
                    {isVi ? item.descVi : item.descEn}
                  </p>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:translate-x-1 transition-transform">
                <span>{isVi ? 'Truy cập ngay' : 'Visit page'}</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
