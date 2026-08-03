import { Language } from './types';

export type TabType = 
  | 'home' 
  | 'overview'
  | 'apply' 
  | 'calculator' 
  | 'requirements' 
  | 'blog'
  | 'track' 
  | 'faqs' 
  | 'contact'
  | 'about'
  | 'payment-guidelines'
  | 'terms-and-conditions'
  | 'privacy-policy'
  | 'not-found';

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
    titleEn: 'Vietnam Visa Online 2026 | Fast-Track E-Visa Agency Portal',
    titleVi: 'Cổng Thông Tin E-Visa Việt Nam 2026 | Xin Visa Trực Tuyến Nhanh',
    descEn: 'Apply for Vietnam E-Visa online in 2026. Fast 1-hour to 24-hour urgent processing, 99.9% approval guarantee, 24/7 immigration advisory.',
    descVi: 'Xin visa điện tử Việt Nam trực tuyến 2026. Xử lý khẩn từ 1 giờ đến 24 giờ, tỷ lệ đậu 99.9%, hỗ trợ tư vấn nhập cảnh 24/7.',
    keywordsEn: 'vietnam visa, vietnam evisa online, apply vietnam visa, urgent vietnam visa, vietnam visa 2026, vietnam visa exemption, vietnam airport fast track',
    keywordsVi: 'visa viet nam, evisa viet nam, xin visa viet nam online, visa khan viet nam, mien thi thuc viet nam 2026, dich vu lam visa nhanh',
    breadcrumbEn: 'Home',
    breadcrumbVi: 'Trang Chủ'
  },
  overview: {
    tab: 'overview',
    path: '/overview',
    titleEn: 'Vietnam E-Visa Overview 2026 | Comprehensive Entry Guide',
    titleVi: 'Tổng Quan E-Visa Việt Nam 2026 | Hướng Dẫn Nhập Cảnh Chi Tiết',
    descEn: 'Complete overview of Vietnam electronic visa requirements, 83 accepted entry points, duration, pricing, and border guidelines.',
    descVi: 'Tổng quan chi tiết về e-Visa Việt Nam, 83 cửa khẩu nhập cảnh, thời hạn, chi phí và quy trình nhập cảnh mới nhất.',
    keywordsEn: 'vietnam evisa overview, vietnam visa guide, 83 entry points vietnam, evisa requirements, vietnam visa duration',
    keywordsVi: 'tong quan evisa viet nam, huong dan visa viet nam, 83 cua khau nhap canh, dieu kien xin visa',
    breadcrumbEn: 'Overview',
    breadcrumbVi: 'Tổng Quan'
  },
  apply: {
    tab: 'apply',
    path: '/how-to-apply',
    titleEn: 'How to Apply for Vietnam E-Visa Online 2026 | Application Guide',
    titleVi: 'Hướng Dẫn Xin E-Visa Việt Nam Trực Tuyến 2026 | Đăng Ký Nhanh',
    descEn: 'Complete guide on how to apply for Vietnam e-Visa in 3 simple steps. Instant price transparency, express options, and application portal.',
    descVi: 'Hướng dẫn chi tiết cách xin e-Visa Việt Nam qua 3 bước đơn giản. Minh bạch chi phí và xử lý khẩn tại sân bay.',
    keywordsEn: 'how to apply vietnam visa, vietnam visa application guide, apply vietnam evisa online 2026, 90 day vietnam evisa',
    keywordsVi: 'huong dan xin visa viet nam, cach dang ky evisa, huong dan lam visa nhap canh',
    breadcrumbEn: 'How to Apply',
    breadcrumbVi: 'Hướng Dẫn Xin Visa'
  },
  calculator: {
    tab: 'calculator',
    path: '/visa-fee',
    titleEn: 'Vietnam Visa Fee Calculator 2026 | E-Visa & Speed Pricing',
    titleVi: 'Bảng Tính Phí Visa Việt Nam 2026 | Tính Phí E-Visa & Nhanh',
    descEn: 'Calculate government stamp fees, service fees, and urgent processing rates for 30-day and 90-day single or multiple entry Vietnam visas.',
    descVi: 'Tra cứu bảng phí niêm yết gồm phí nhà nước, phí dịch vụ và phí làm khẩn cho các loại e-Visa 30 ngày, 90 ngày 1 lần hoặc nhiều lần.',
    keywordsEn: 'vietnam visa fee calculator, how much is vietnam visa, vietnam evisa price 2026, urgent visa cost, fast track price',
    keywordsVi: 'bang gia visa viet nam, le phi evisa viet nam 2026, tinh phi visa viet nam, gia visa khan',
    breadcrumbEn: 'Visa Fee',
    breadcrumbVi: 'Phí Visa'
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
  blog: {
    tab: 'blog',
    path: '/blog',
    titleEn: 'Vietnam Visa Blog 2026 | Daily Travel News & Entry Updates',
    titleVi: 'Blog Visa Việt Nam 2026 | Tin Tức Du Lịch & Hướng Dẫn Nhập Cảnh',
    descEn: 'Read the latest updates on Vietnam e-Visa regulations, urgent processing tips, travel advice, and official immigration announcements.',
    descVi: 'Cập nhật tin tức mới nhất về quy định e-Visa Việt Nam, bí quyết xin visa khẩn, lời khuyên du lịch và thông báo xuất nhập cảnh chính thức.',
    keywordsEn: 'vietnam visa blog, vietnam travel news, urgent visa tips, vietnam evisa updates 2026',
    keywordsVi: 'blog visa viet nam, tin tuc du lich viet nam, kinh nghiem xin evisa, tin tuc xuat nhap canh',
    breadcrumbEn: 'Blog',
    breadcrumbVi: 'Blog Visa'
  },
  track: {
    tab: 'track',
    path: '/track-application',
    titleEn: 'Track Vietnam Visa Status Online | Real-Time Reference Checker',
    titleVi: 'Tra Cứu Tình Trạng Hồ Sơ Visa Việt Nam | Theo Dõi Mã VNV',
    descEn: 'Check your Vietnam e-Visa status instantly using your VNV reference code or passport number. View approval progress and download approval letters.',
    descVi: 'Tra cứu tiến độ hồ sơ e-Visa Việt Nam tức thì bằng mã tham chiếu VNV hoặc số hộ chiếu. Tải công văn nhập cảnh online.',
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
    breadcrumbEn: 'FAQ',
    breadcrumbVi: 'Hỏi Đáp'
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
  },
  'payment-guidelines': {
    tab: 'payment-guidelines',
    path: '/payment-guidelines',
    titleEn: 'Payment Guidelines & Fee Transparency | Vietnam E-Visa Services',
    titleVi: 'Hướng Dẫn Thanh Toán & Minh Bạch Lệ Phí | Visa Việt Nam',
    descEn: 'Payment terms, accepted payment methods (Credit/Debit, Wire, PayPal), refund policies, and fee breakdown for Vietnam e-Visa processing.',
    descVi: 'Quy định thanh toán, các phương thức thanh toán hợp lệ (Thẻ Visa/Master, Chuyển khoản), chính sách hoàn tiền và bảng kê chi phí visa.',
    keywordsEn: 'vietnam visa payment guidelines, visa payment methods, refund policy, vietnam evisa fee breakdown',
    keywordsVi: 'huong dan thanh toan visa, phuong thuc thanh toan, chinh sach hoan tien evisa, le phi nhap canh',
    breadcrumbEn: 'Payment Guidelines',
    breadcrumbVi: 'Hướng Dẫn Thanh Toán'
  },
  'terms-and-conditions': {
    tab: 'terms-and-conditions',
    path: '/terms-and-conditions',
    titleEn: 'Terms and Conditions | Vietnam E-Visa Service Facilitator',
    titleVi: 'Điều Khoản & Điều Kiện Sử Dụng | Dịch Vụ Visa Việt Nam',
    descEn: 'Read our commercial terms and conditions, service scope, user obligations, urgent processing guarantees, and limitation of liability.',
    descVi: 'Quy định và điều khoản dịch vụ, phạm vi trách nhiệm, nghĩa vụ người đăng ký, quy định làm khẩn và cam kết dịch vụ visa Việt Nam.',
    keywordsEn: 'vietnam visa terms and conditions, service agreement, commercial visa agency terms',
    keywordsVi: 'dieu khoan su dung, quy dinh dich vu visa, hop dong va cam ket dich vu',
    breadcrumbEn: 'Terms and Conditions',
    breadcrumbVi: 'Điều Khoản & Điều Kiện'
  },
  'privacy-policy': {
    tab: 'privacy-policy',
    path: '/privacy-policy',
    titleEn: 'Privacy Policy & Data Security | Vietnam Visa Agency Services',
    titleVi: 'Chính Sách Bảo Mật & An Toàn Dữ Liệu | Visa Việt Nam',
    descEn: 'Learn how we collect, protect, and encrypt your passport and personal data for Vietnam e-Visa submission under 256-Bit SSL standards.',
    descVi: 'Cam kết bảo mật thông tin cá nhân, mã hóa dữ liệu hộ chiếu theo chuẩn 256-Bit SSL và quy định lưu trữ dữ liệu người dùng.',
    keywordsEn: 'vietnam visa privacy policy, data security, ssl encryption passport data, GDPR compliance',
    keywordsVi: 'chinh sach bao mat, an toan du lieu ho chieu, bao mat thong tin ca nhan',
    breadcrumbEn: 'Privacy Policy',
    breadcrumbVi: 'Chính Sách Bảo Mật'
  },
  about: {
    tab: 'about',
    path: '/about',
    titleEn: 'About Us | Vietnam Visa by BDA Tech & Media JSC',
    titleVi: 'Về Chúng Tôi | Vietnam Visa by BDA Tech & Media JSC',
    descEn: 'Learn about Vietnam Visa by BDA Tech & Media JSC - operating since 2007 in Hanoi with over 100 dedicated travel & visa technology specialists.',
    descVi: 'Giới thiệu về dịch vụ Vietnam Visa vận hành bởi BDA Tech & Media JSC từ năm 2007 tại Hà Nội với đội ngũ hơn 100 chuyên viên hỗ trợ visa.',
    keywordsEn: 'about vietnam visa bda, bda tech & media jsc, vietnam visa team hanoi, visa service agency',
    keywordsVi: 'gioi thieu vietnam visa bda, bda tech and media, doi ngu ho tro visa ha noi',
    breadcrumbEn: 'About Us',
    breadcrumbVi: 'Giới Thệu'
  },
  'not-found': {
    tab: 'not-found',
    path: '/404',
    titleEn: '404 Page Not Found | Vietnam E-Visa Agency Services',
    titleVi: '404 Không Tìm Thấy Trang | Dịch Vụ E-Visa Việt Nam',
    descEn: 'The page you requested does not exist or has been moved. Explore our Vietnam e-visa application, pricing, and tracking services.',
    descVi: 'Trang bạn tìm kiếm không tồn tại hoặc đã được chuyển dời. Khám phá dịch vụ xin visa, bảng tính phí và tra cứu tiến độ hồ sơ.',
    keywordsEn: '404 not found, vietnam visa 404',
    keywordsVi: '404 khong tim thay trang, visa viet nam 404',
    breadcrumbEn: '404 Not Found',
    breadcrumbVi: '404 Không Tìm Thấy Trang'
  }
};

/** Get TabType from URL pathname */
export function getTabFromPath(pathname: string): TabType {
  const normalized = pathname.toLowerCase().replace(/\/$/, '');
  if (!normalized || normalized === '' || normalized === '/home') return 'home';

  for (const config of Object.values(ROUTES)) {
    if (config.path === normalized) return config.tab;
  }

  // Handle /vietnam-visa-requirements or sub-slugs or legacy country post URLs
  if (
    normalized === '/vietnam-visa-requirements' ||
    normalized.startsWith('/vietnam-visa-requirements/') ||
    normalized.startsWith('/visa-requirements/') ||
    normalized.startsWith('/vietnam-visa-requirements-for-') ||
    normalized.startsWith('/vietnam-e-visa-for-')
  ) {
    return 'requirements';
  }

  // Handle /blog or sub-slugs
  if (
    normalized === '/blog' ||
    normalized.startsWith('/blog/') ||
    normalized.startsWith('/blog-posts/')
  ) {
    return 'blog';
  }

  return 'not-found';
}

/** Extract requirement post slug from pathname if present */
export function getRequirementSlugFromPath(pathname: string): string | null {
  const normalized = pathname.toLowerCase().replace(/\/$/, '');
  if (!normalized) return null;

  if (normalized.startsWith('/vietnam-visa-requirements/')) {
    return normalized.replace('/vietnam-visa-requirements/', '');
  }
  if (normalized.startsWith('/visa-requirements/')) {
    return normalized.replace('/visa-requirements/', '');
  }
  if (normalized.startsWith('/vietnam-visa-requirements-for-') || normalized.startsWith('/vietnam-e-visa-for-')) {
    return normalized.replace(/^\//, '');
  }

  return null;
}

/** Extract blog post slug from pathname if present */
export function getBlogSlugFromPath(pathname: string): string | null {
  const normalized = pathname.toLowerCase().replace(/\/$/, '');
  if (!normalized) return null;

  if (normalized.startsWith('/blog/')) {
    return normalized.replace('/blog/', '');
  }
  if (normalized.startsWith('/blog-posts/')) {
    return normalized.replace('/blog-posts/', '');
  }

  return null;
}

/** Get RouteConfig from TabType */
export function getRouteFromTab(tab: TabType): RouteConfig {
  return ROUTES[tab] || ROUTES.home;
}
