import { Language } from './types';

export type TabType = 'home' | 'apply' | 'calculator' | 'requirements' | 'track' | 'faqs' | 'contact';

export interface RouteConfig {
  tab: TabType;
  path: string;
  titleEn: string;
  titleVi: string;
  descEn: string;
  descVi: string;
  keywordsEn: string;
  keywordsVi: string;
  breadcrumbEn: string;
  breadcrumbVi: string;
}

export const ROUTES: Record<TabType, RouteConfig> = {
  home: {
    tab: 'home',
    path: '/',
    titleEn: 'Vietnam Visa Online 2026 | Official Fast-Track E-Visa Portal',
    titleVi: 'Cổng Thông Tin E-Visa Việt Nam 2026 | Xin Visa Trực Tuyến Nhanh',
    descEn: 'Apply for official Vietnam E-Visa online in 2026. Fast 1-hour to 24-hour urgent processing, 99.9% approval guarantee, 24/7 immigration advisory.',
    descVi: 'Xin visa điện tử Việt Nam trực tuyến 2026. Xử lý khẩn từ 1 giờ đến 24 giờ, tỷ lệ đậu 99.9%, hỗ trợ tư vấn nhập cảnh 24/7.',
    keywordsEn: 'vietnam visa, vietnam evisa online, apply vietnam visa, urgent vietnam visa, vietnam visa 2026, vietnam visa exemption, vietnam airport fast track',
    keywordsVi: 'visa viet nam, evisa viet nam, xin visa viet nam online, visa khan viet nam, mien thi thuc viet nam 2026, dich vu lam visa nhanh',
    breadcrumbEn: 'Home',
    breadcrumbVi: 'Trang Chủ'
  },
  apply: {
    tab: 'apply',
    path: '/apply-online',
    titleEn: 'Apply for Vietnam E-Visa Online 2026 | Official Application Form',
    titleVi: 'Tờ Khai Xin E-Visa Việt Nam Trực Tuyến 2026 | Đăng Ký Fast-Track',
    descEn: 'Complete your official Vietnam e-Visa application form in 3 simple steps. Instant price transparency, express 1-hour emergency options, and secure submission.',
    descVi: 'Hoàn tất tờ khai xin e-Visa Việt Nam chính thức qua 3 bước đơn giản. Minh bạch chi phí, xử lý khẩn 1 giờ và bảo mật thông tin.',
    keywordsEn: 'vietnam visa application, apply vietnam evisa online, vietnam visa form 2026, 90 day vietnam evisa, urgent visa application',
    keywordsVi: 'to khai visa viet nam, xin evisa online, dang ky visa 90 ngay, visa khan 1 gio, thu tuc nhap canh viet nam',
    breadcrumbEn: 'Apply Online',
    breadcrumbVi: 'Nộp Hồ Sơ Online'
  },
  calculator: {
    tab: 'calculator',
    path: '/fee-calculator',
    titleEn: 'Vietnam Visa Fee Calculator 2026 | E-Visa & Speed Pricing',
    titleVi: 'Bảng Tính Phí Visa Việt Nam 2026 | Tính Phí E-Visa & Nhanh',
    descEn: 'Calculate official government stamp fees, service fees, and urgent processing rates for 30-day and 90-day single or multiple entry Vietnam visas.',
    descVi: 'Tra cứu bảng phí chính thức gồm phí nhà nước, phí dịch vụ và phí làm khẩn cho các loại e-Visa 30 ngày, 90 ngày 1 lần hoặc nhiều lần.',
    keywordsEn: 'vietnam visa fee calculator, how much is vietnam visa, vietnam evisa price 2026, urgent visa cost, fast track price',
    keywordsVi: 'bang gia visa viet nam, le phi evisa viet nam 2026, tinh phi visa viet nam, gia visa khan',
    breadcrumbEn: 'Fee Calculator',
    breadcrumbVi: 'Tính Phí Visa'
  },
  requirements: {
    tab: 'requirements',
    path: '/visa-requirements',
    titleEn: 'Vietnam Visa Requirements & 2026 Exemption Rules by Country',
    titleVi: 'Quy Định Visa Việt Nam & Danh Sách Miễn Thị Thực 2026',
    descEn: 'Check Vietnam visa requirements, 45-day exemption countries list, passport validity policies (>6 months), and eligible nationalities for 2026.',
    descVi: 'Tra cứu quy định visa Việt Nam, danh sách 24+ quốc gia miễn thị thực 45 ngày, thời hạn hộ chiếu và điều kiện nhập cảnh mới nhất 2026.',
    keywordsEn: 'vietnam visa requirements, vietnam visa exemption list 2026, 45 days visa free vietnam, passport validity vietnam, who needs visa for vietnam',
    keywordsVi: 'quy dinh visa viet nam, mien visa viet nam 45 ngay, danh sach mien thi thuc 2026, ho chieu nhap canh viet nam',
    breadcrumbEn: 'Visa Requirements',
    breadcrumbVi: 'Quy Định Visa'
  },
  track: {
    tab: 'track',
    path: '/track-application',
    titleEn: 'Track Vietnam Visa Status Online | Real-Time Reference Checker',
    titleVi: 'Tra Cứu Tình Trạng Hồ Sơ Visa Việt Nam | Theo Dõi Mã VNV',
    descEn: 'Check your Vietnam e-Visa status instantly using your VNV reference code or passport number. View approval progress and download official letters.',
    descVi: 'Tra cứu tiến độ hồ sơ e-Visa Việt Nam tức thì bằng mã tham chiếu VNV hoặc số hộ chiếu. Tải công văn nhập cảnh chính thức online.',
    keywordsEn: 'track vietnam visa, check vietnam evisa status, vnv visa tracker, check visa application status, download vietnam approval letter',
    keywordsVi: 'tra cuu visa viet nam, kiem tra tinh trang evisa, theo doi ho so vnv, tai cong van nhap canh',
    breadcrumbEn: 'Track Application',
    breadcrumbVi: 'Tra Cứu Hồ Sơ'
  },
  faqs: {
    tab: 'faqs',
    path: '/faqs',
    titleEn: 'Vietnam E-Visa FAQs & Entry Guidelines 2026',
    titleVi: 'Hỏi Đáp E-Visa Việt Nam & Hướng Dẫn Nhập Cảnh 2026',
    descEn: 'Frequently asked questions regarding Vietnam e-Visa passport photo specs, arrival ports, entry date rules, and emergency airport procedures.',
    descVi: 'Giải đáp thắc mắc thường gặp về ảnh hộ chiếu e-Visa Việt Nam, cửa khẩu nhập cảnh, quy định ngày bay và quy trình xử lý khẩn tại sân bay.',
    keywordsEn: 'vietnam visa faqs, evisa photo guidelines, vietnam entry ports, can I change entry port vietnam evisa, emergency visa questions',
    keywordsVi: 'hoi dap visa viet nam, quy dinh anh evisa, cac cua khau nhap canh, huong dan lam visa',
    breadcrumbEn: 'FAQs & Guidelines',
    breadcrumbVi: 'Hỏi Đáp & Hướng Dẫn'
  },
  contact: {
    tab: 'contact',
    path: '/contact-us',
    titleEn: 'Contact Vietnam Visa Online Support | 24/7 Advisory Hotline',
    titleVi: 'Liên Hệ Hỗ Trợ Visa Việt Nam 24/7 | Hotline Nhập Cảnh',
    descEn: 'Get 24/7 expert assistance for Vietnam e-Visa applications, emergency flight delays, passport issues, and airport fast-track escort.',
    descVi: 'Liên hệ đội ngũ chuyên gia tư vấn e-Visa Việt Nam 24/7, xử lý khẩn khi trễ chuyến bay, sự cố hộ chiếu và dịch vụ đón tại sân bay.',
    keywordsEn: 'contact vietnam visa support, vietnam evisa customer service, 24/7 visa helpline, emergency visa support hanoi saigon',
    keywordsVi: 'lien he visa viet nam, tong dai ho tro evisa 24/7, hotline nhap canh viet nam',
    breadcrumbEn: 'Contact Us',
    breadcrumbVi: 'Liên Hệ'
  }
};

/** Get TabType from URL pathname */
export function getTabFromPath(pathname: string): TabType {
  const normalized = pathname.toLowerCase().replace(/\/$/, '');
  if (!normalized || normalized === '' || normalized === '/home') return 'home';

  for (const config of Object.values(ROUTES)) {
    if (config.path === normalized) return config.tab;
  }

  return 'home';
}

/** Get RouteConfig from TabType */
export function getRouteFromTab(tab: TabType): RouteConfig {
  return ROUTES[tab] || ROUTES.home;
}
