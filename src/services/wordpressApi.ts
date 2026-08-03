import { Language } from '../types';
import { getExactCountryRequirementUrl } from '../data/countryUrls';

export interface BlogPost {
  id: number | string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  featuredImage: string;
  category: string;
  readTime: string;
  link: string;
  slug: string;
}

// Fallback high-quality curated posts for "Urgent Vietnam Visa Blog New"
// Used when WordPress REST API is unreachable or offline
export const FALLBACK_BLOG_POSTS: BlogPost[] = [
  {
    id: 'wp-1',
    title: 'Urgent 1-Hour Vietnam E-Visa Guide for Emergency Flights in 2026',
    excerpt: 'Flight departing soon? Complete step-by-step breakdown of how our fast-track team processes emergency Vietnam e-visas within 60 to 120 minutes around the clock.',
    content: `
      <p>Boarding a flight to Vietnam only to discover your e-visa is pending or expired can be overwhelming. Fortunately, Vietnam Immigration enables expedited 1-hour and 4-hour emergency processing under Law No. 23/2023/QH15.</p>
      
      <h3>Key Steps for Emergency Processing:</h3>
      <ul>
        <li><strong>Verify Passport Validity:</strong> Ensure your passport has at least 6 months validity from arrival date.</li>
        <li><strong>Provide Flight Ticket Details:</strong> Submit your flight booking confirmation with the airline PNR code.</li>
        <li><strong>Clear Portrait & Passport Photo:</strong> Upload high-resolution scans without glass reflections.</li>
      </ul>
      
      <p>Our team directly liaises with Vietnam Immigration Officers at Hanoi (Noi Bai), Ho Chi Minh City (Tan Son Nhat), and Da Nang international airports to ensure approval letters are issued before departure.</p>
    `,
    date: '2026-07-28',
    author: 'Immigration Specialist Team',
    featuredImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    category: 'Urgent Vietnam Visa Blog New',
    readTime: '3 min read',
    link: 'https://vietnamvisa.govt.vn/urgent-1-hour-vietnam-evisa-guide-2026',
    slug: 'urgent-1-hour-vietnam-evisa-guide-2026'
  },
  {
    id: 'wp-2',
    title: 'Top 5 Common E-Visa Photo Errors That Cause Airport Delays',
    excerpt: 'Avoid rejection and weekend delays by following official 2026 photo specifications for Vietnam e-visa applications.',
    content: `
      <p>Over 70% of delayed Vietnam e-visa applications are caused by non-compliant passport scan uploads or portrait photos. Immigration automated verification systems reject improper submissions immediately.</p>
      
      <h3>Photo Compliance Checklist:</h3>
      <ul>
        <li><strong>Plain White Background:</strong> No shadows, patterns, or tinted backgrounds.</li>
        <li><strong>Full Face Facing Camera:</strong> Both ears visible, neutral expression, no eyeglasses.</li>
        <li><strong>High Resolution:</strong> JPEG/PNG format with clear facial features.</li>
      </ul>
    `,
    date: '2026-07-25',
    author: 'Nguyen Van Hai (Senior Advisory)',
    featuredImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    category: 'Urgent Vietnam Visa Blog New',
    readTime: '4 min read',
    link: 'https://vietnamvisa.govt.vn/top-5-evisa-photo-errors-delays',
    slug: 'top-5-evisa-photo-errors-delays'
  },
  {
    id: 'wp-3',
    title: 'How to Expedite Vietnam E-Visa Approval on Weekends & Public Holidays',
    excerpt: 'Standard government immigration offices are closed on weekends. Learn how our 24/7 hotline gets weekend urgent visas approved.',
    content: `
      <p>Traveling on Saturday or Sunday? Standard government processing pauses over weekends. However, airport immigration advisory desks operate 24/7 for urgent entry support.</p>
      
      <p>By using our Fast-Track Emergency Service, our team coordinates with duty officers at major international entry ports to issue emergency landing approval letters even on public holidays.</p>
    `,
    date: '2026-07-20',
    author: 'Elena Rostova (Travel Consultant)',
    featuredImage: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=800&q=80',
    category: 'Urgent Vietnam Visa Blog New',
    readTime: '5 min read',
    link: 'https://vietnamvisa.govt.vn/weekend-holiday-urgent-vietnam-visa',
    slug: 'weekend-holiday-urgent-vietnam-visa'
  }
];

function decodeHtmlEntities(str: string): string {
  if (!str) return '';
  return str
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&#8216;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
}

const DIRECT_WP_BASE = 'https://blog.vietnamevisaservice.com';

// Client-side Memory Cache
let memoryBlogPosts: BlogPost[] | null = null;
let memoryFaqPosts: WpFaqItem[] | null = null;
let memoryRequirementPosts: BlogPost[] | null = null;
const memorySlugPostsMap = new Map<string, BlogPost>();

/**
 * Fetch Blog Posts from backend API or direct WordPress REST API with client caching
 */
export async function fetchUrgentBlogPosts(): Promise<BlogPost[]> {
  if (memoryBlogPosts && memoryBlogPosts.length > 0) {
    fetchUrgentBlogPostsNetwork().then(posts => {
      if (posts && posts.length > 0) memoryBlogPosts = posts;
    }).catch(() => {});
    return memoryBlogPosts;
  }

  try {
    const sessionStr = sessionStorage.getItem('wp_urgent_blog_posts_cache');
    if (sessionStr) {
      const parsed = JSON.parse(sessionStr);
      if (Array.isArray(parsed) && parsed.length > 0) {
        memoryBlogPosts = parsed;
        fetchUrgentBlogPostsNetwork().then(posts => {
          if (posts && posts.length > 0) {
            memoryBlogPosts = posts;
            sessionStorage.setItem('wp_urgent_blog_posts_cache', JSON.stringify(posts));
          }
        }).catch(() => {});
        return memoryBlogPosts;
      }
    }
  } catch (e) {}

  const posts = await fetchUrgentBlogPostsNetwork();
  memoryBlogPosts = posts;
  try {
    sessionStorage.setItem('wp_urgent_blog_posts_cache', JSON.stringify(posts));
  } catch (e) {}
  return posts;
}

async function fetchUrgentBlogPostsNetwork(): Promise<BlogPost[]> {
  try {
    const res = await fetch('/api/wordpress/posts', {
      headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
      const data = await res.json();
      if (data.success && Array.isArray(data.posts) && data.posts.length > 0) {
        return data.posts;
      }
    }
  } catch (err) {
    console.warn('Backend WordPress API fetch failed, trying direct REST API:', err);
  }

  try {
    const directRes = await fetch(`${DIRECT_WP_BASE}/wp-json/wp/v2/posts?per_page=100&_embed=true`);
    if (directRes.ok) {
      const posts = await directRes.json();
      if (Array.isArray(posts) && posts.length > 0) {
        return posts.map((p: any) => {
          let featuredImage = 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80';
          if (p._embedded && p._embedded['wp:featuredmedia'] && p._embedded['wp:featuredmedia'][0]) {
            featuredImage = p._embedded['wp:featuredmedia'][0].source_url || featuredImage;
          }
          return {
            id: p.id,
            title: decodeHtmlEntities(p.title?.rendered || ''),
            excerpt: decodeHtmlEntities((p.excerpt?.rendered || '').replace(/<[^>]+>/g, '').trim()),
            content: p.content?.rendered || '',
            date: p.date ? p.date.split('T')[0] : new Date().toISOString().split('T')[0],
            author: p._embedded?.author?.[0]?.name || 'Immigration Advisory Team',
            featuredImage,
            category: 'Urgent Vietnam Visa Blog New',
            readTime: '3 min read',
            link: p.link || `${DIRECT_WP_BASE}/${p.slug}/`,
            slug: p.slug || ''
          };
        });
      }
    }
  } catch (err) {
    console.warn('Direct WordPress REST API fetch failed:', err);
  }

  return FALLBACK_BLOG_POSTS;
}

export interface WpFaqItem {
  id: number | string;
  question: string;
  answerSummary: string;
  fullAnswerHtml: string;
  date: string;
  author: string;
  featuredImage: string;
  link: string;
  slug: string;
}

export const FALLBACK_FAQS: WpFaqItem[] = [
  {
    id: 'faq-1279',
    question: 'Can I Leave and Re-enter Vietnam with an e-Visa?',
    answerSummary: 'You can leave and re-enter Vietnam only if you applied for a Multiple-Entry Vietnam E-Visa. Single-entry e-visas expire immediately upon departure.',
    fullAnswerHtml: '<p>Planning a dynamic trip around Southeast Asia often leaves travelers asking one critical question: <b>Can I leave and re-enter Vietnam with an e-Visa?</b></p><p>If you have a <b>Multiple-Entry E-Visa</b> (valid up to 90 days), you may cross borders into neighboring countries like Cambodia, Laos, or Thailand and re-enter Vietnam freely during its validity period.</p><p>However, if your e-visa is a <b>Single-Entry E-Visa</b>, it becomes invalid the moment you pass outbound immigration, even if you still have remaining days left on your visa date range.</p>',
    date: '2026-07-28',
    author: 'Vietnam Visa Advisory Team',
    featuredImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    link: 'https://blog.vietnamevisaservice.com/can-i-leave-and-re-enter-vietnam-with-an-e-visa/',
    slug: 'can-i-leave-and-re-enter-vietnam-with-an-e-visa'
  },
  {
    id: 'faq-1275',
    question: 'Can I Study in Vietnam with a Tourist Visa?',
    answerSummary: 'Short-term non-degree courses and language workshops are permissible on tourist e-visas, but full degree programs require a formal Student Visa (DH category).',
    fullAnswerHtml: '<p>Vietnam is rapidly becoming a popular destination for international students and digital nomads taking short cultural workshops or intensive language bootcamps.</p><p>For short-term classes (under 90 days), a tourist e-visa is acceptable. For enrolled university degree programs, students must obtain an official Student Visa sponsored by an accredited Vietnamese educational institution.</p>',
    date: '2026-07-27',
    author: 'Vietnam Visa Advisory Team',
    featuredImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    link: 'https://blog.vietnamevisaservice.com/can-i-study-in-vietnam-with-a-tourist-visa/',
    slug: 'can-i-study-in-vietnam-with-a-tourist-visa'
  },
  {
    id: 'faq-1273',
    question: 'Can I Work in Vietnam with a Tourist Visa?',
    answerSummary: 'Working for a Vietnamese employer on a tourist e-visa is illegal. Foreign workers require a Work Permit (Giấy phép lao động) and Business/Work Visa (DN/LD).',
    fullAnswerHtml: '<p>It is strictly prohibited to engage in local employment or sign employment contracts with Vietnamese companies using a Tourist E-Visa.</p><p>Foreign professionals must be sponsored by a registered company in Vietnam to apply for a Business E-Visa (DN1/DN2) followed by a Work Permit and Temporary Residence Card (TRC).</p>',
    date: '2026-07-26',
    author: 'Vietnam Visa Advisory Team',
    featuredImage: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=800&q=80',
    link: 'https://blog.vietnamevisaservice.com/can-i-work-in-vietnam-with-a-tourist-visa/',
    slug: 'can-i-work-in-vietnam-with-a-tourist-visa'
  },
  {
    id: 'faq-1268',
    question: 'Which Countries Need a Visa for Vietnam? Updated Policy & Exemptions',
    answerSummary: 'Citizens of 25+ countries enjoy bilateral visa exemptions ranging from 14 to 45 days. All other nationalities can apply for a 90-day e-Visa online.',
    fullAnswerHtml: '<p>Vietnam offers visa-free entry for citizens of 25+ nations including Japan, South Korea, Germany, France, Italy, Spain, UK, Russia, and ASEAN members for stays between 14 to 45 days.</p><p>Passport holders from the US, Canada, Australia, India, and 170+ other countries must obtain a Vietnam E-Visa prior to boarding their flight.</p>',
    date: '2026-07-25',
    author: 'Vietnam Visa Advisory Team',
    featuredImage: '',
    link: 'https://blog.vietnamevisaservice.com/which-countries-need-a-visa-for-vietnam/',
    slug: 'which-countries-need-a-visa-for-vietnam'
  }
];

/**
 * Fetch FAQ Category Posts from WordPress API
 */
export async function fetchWpFaqPosts(): Promise<WpFaqItem[]> {
  if (memoryFaqPosts && memoryFaqPosts.length > 0) {
    fetchWpFaqPostsNetwork().then(faqs => {
      if (faqs && faqs.length > 0) memoryFaqPosts = faqs;
    }).catch(() => {});
    return memoryFaqPosts;
  }

  try {
    const sessionStr = sessionStorage.getItem('wp_faq_posts_cache');
    if (sessionStr) {
      const parsed = JSON.parse(sessionStr);
      if (Array.isArray(parsed) && parsed.length > 0) {
        memoryFaqPosts = parsed;
        fetchWpFaqPostsNetwork().then(faqs => {
          if (faqs && faqs.length > 0) {
            memoryFaqPosts = faqs;
            sessionStorage.setItem('wp_faq_posts_cache', JSON.stringify(faqs));
          }
        }).catch(() => {});
        return memoryFaqPosts;
      }
    }
  } catch (e) {}

  const faqs = await fetchWpFaqPostsNetwork();
  memoryFaqPosts = faqs;
  try {
    sessionStorage.setItem('wp_faq_posts_cache', JSON.stringify(faqs));
  } catch (e) {}
  return faqs;
}

async function fetchWpFaqPostsNetwork(): Promise<WpFaqItem[]> {
  try {
    const res = await fetch('/api/wordpress/faqs', {
      headers: {
        'Accept': 'application/json'
      }
    });

    if (res.ok) {
      const data = await res.json();
      if (data.success && Array.isArray(data.faqs) && data.faqs.length > 0) {
        return data.faqs;
      }
    }
  } catch (err) {
    console.warn('Backend WordPress FAQ fetch failed, falling back to cached FAQs:', err);
  }

  return FALLBACK_FAQS;
}

export const FALLBACK_REQUIREMENT_POSTS: BlogPost[] = [
  {
    id: 'req-us',
    title: 'Vietnam Visa Requirements for US Citizens (2026 Updated Guide)',
    excerpt: 'US passport holders can apply for 30-day or 90-day single/multiple entry Vietnam e-Visas online. Learn key passport rules, photo requirements, and processing times.',
    content: `
      <p>Citizens of the <b>United States</b> holding an ordinary passport require a valid visa to enter Vietnam for tourism, business, or family visits.</p>
      
      <h3>Key Entry Requirements for US Passport Holders:</h3>
      <ul>
        <li><strong>Passport Validity:</strong> Must be valid for at least 6 months beyond your scheduled arrival date with at least 2 blank pages.</li>
        <li><strong>Visa Options:</strong> Eligible for 30-day or 90-day e-Visa (Single or Multiple Entry).</li>
        <li><strong>Processing Time:</strong> Standard (3 working days), Urgent (24 hours), or Emergency Express (1 - 4 hours).</li>
        <li><strong>Required Documents:</strong> Color scan of passport bio-page and a 4x6cm digital portrait photo (plain white background).</li>
      </ul>

      <h3>Permitted Entry Ports:</h3>
      <p>US citizens with an approved e-Visa can enter via 33 international border checkpoints including Hanoi (Noi Bai), Ho Chi Minh City (Tan Son Nhat), Da Nang, Cam Ranh, and Phu Quoc airports.</p>
    `,
    date: '2026-07-28',
    author: 'Vietnam Visa Advisory Team',
    featuredImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    category: 'Visa Requirements',
    readTime: '4 min read',
    link: 'https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-us-citizens/',
    slug: 'vietnam-visa-requirements-for-us-citizens'
  },
  {
    id: 'req-gb',
    title: 'Vietnam Visa Requirements & 45-Day Exemption for UK Citizens',
    excerpt: 'UK citizens enjoy 45 days visa-free entry to Vietnam! For stays over 45 days or multiple entries, apply for a 90-day e-Visa online.',
    content: `
      <p>British citizens (British Citizen passport holders) enjoy a <b>45-day Vietnam Visa Exemption</b> under government Resolution 44/NQ-CP.</p>
      
      <h3>UK Exemption & E-Visa Policy Breakdown:</h3>
      <ul>
        <li><strong>Stays Up to 45 Days:</strong> NO visa required upon entry. Simply present a passport with >6 months validity and proof of return/onward flight.</li>
        <li><strong>Stays Over 45 Days or Multiple Entries:</strong> Must apply for an electronic e-Visa valid for up to 90 days.</li>
        <li><strong>Emergency Processing:</strong> Fast-track 1h-24h approval available if your travel plans change last minute.</li>
      </ul>
    `,
    date: '2026-07-27',
    author: 'Vietnam Visa Advisory Team',
    featuredImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
    category: 'Visa Requirements',
    readTime: '3 min read',
    link: 'https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-uk-citizens/',
    slug: 'vietnam-visa-requirements-for-uk-citizens'
  },
  {
    id: 'req-au',
    title: 'Vietnam Visa Requirements for Australian Citizens 2026',
    excerpt: 'Australian passport holders are fully eligible for 30-day & 90-day Vietnam e-Visas. Complete breakdown of application steps, costs, and airport landing guidelines.',
    content: `
      <p>Australian citizens require a valid Vietnam e-Visa prior to boarding flights to Hanoi, Ho Chi Minh City, or Da Nang.</p>
      
      <h3>Australian Passport Guidelines:</h3>
      <ul>
        <li><strong>E-Visa Types:</strong> 30-day Single Entry, 30-day Multiple Entry, 90-day Single Entry, or 90-day Multiple Entry.</li>
        <li><strong>Passport Rules:</strong> At least 6 months validity remaining from date of arrival.</li>
        <li><strong>Rush Flight Support:</strong> Super-urgent 1-hour and 4-hour express options for tight flight departures.</li>
      </ul>
    `,
    date: '2026-07-26',
    author: 'Vietnam Visa Advisory Team',
    featuredImage: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80',
    category: 'Visa Requirements',
    readTime: '4 min read',
    link: 'https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-australian-citizens/',
    slug: 'vietnam-visa-requirements-for-australian-citizens'
  }
];

/**
 * Fetch Requirement Posts from WordPress REST API (Category "Visa Requirements")
 */
export async function fetchWpRequirementPosts(): Promise<BlogPost[]> {
  if (memoryRequirementPosts && memoryRequirementPosts.length > 0) {
    fetchWpRequirementPostsNetwork().then(posts => {
      if (posts && posts.length > 0) memoryRequirementPosts = posts;
    }).catch(() => {});
    return memoryRequirementPosts;
  }

  try {
    const sessionStr = sessionStorage.getItem('wp_requirement_posts_cache');
    if (sessionStr) {
      const parsed = JSON.parse(sessionStr);
      if (Array.isArray(parsed) && parsed.length > 0) {
        memoryRequirementPosts = parsed;
        fetchWpRequirementPostsNetwork().then(posts => {
          if (posts && posts.length > 0) {
            memoryRequirementPosts = posts;
            sessionStorage.setItem('wp_requirement_posts_cache', JSON.stringify(posts));
          }
        }).catch(() => {});
        return memoryRequirementPosts;
      }
    }
  } catch (e) {}

  const posts = await fetchWpRequirementPostsNetwork();
  memoryRequirementPosts = posts;
  try {
    sessionStorage.setItem('wp_requirement_posts_cache', JSON.stringify(posts));
  } catch (e) {}
  return posts;
}

async function fetchWpRequirementPostsNetwork(): Promise<BlogPost[]> {
  try {
    const res = await fetch('/api/wordpress/requirements', {
      headers: {
        'Accept': 'application/json'
      }
    });

    if (res.ok) {
      const data = await res.json();
      if (data.success && Array.isArray(data.posts) && data.posts.length > 0) {
        return data.posts;
      }
    }
  } catch (err) {
    console.warn('Backend WordPress Requirement Posts fetch failed, trying direct REST API:', err);
  }

  // Direct WP REST API fallback for static hosts
  try {
    const directRes = await fetch(`${DIRECT_WP_BASE}/wp-json/wp/v2/posts?per_page=100&_embed=true`);
    if (directRes.ok) {
      const posts = await directRes.json();
      if (Array.isArray(posts) && posts.length > 0) {
        return posts.map((p: any) => {
          let featuredImage = 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80';
          if (p._embedded && p._embedded['wp:featuredmedia'] && p._embedded['wp:featuredmedia'][0]) {
            featuredImage = p._embedded['wp:featuredmedia'][0].source_url || featuredImage;
          }
          return {
            id: p.id,
            title: decodeHtmlEntities(p.title?.rendered || ''),
            excerpt: decodeHtmlEntities((p.excerpt?.rendered || '').replace(/<[^>]+>/g, '').trim()),
            content: p.content?.rendered || '',
            date: p.date ? p.date.split('T')[0] : new Date().toISOString().split('T')[0],
            author: p._embedded?.author?.[0]?.name || 'Immigration Advisory Team',
            featuredImage,
            category: 'Visa Requirements',
            readTime: '4 min read',
            link: p.link || `${DIRECT_WP_BASE}/${p.slug}/`,
            slug: p.slug || ''
          };
        });
      }
    }
  } catch (err) {
    console.warn('Direct WordPress REST API requirement posts fetch failed:', err);
  }

  return FALLBACK_REQUIREMENT_POSTS;
}

/**
 * Helper to match or generate a Requirement Post for a specific country
 */
export function getRequirementPostForCountry(
  countryName: string,
  countryNameVi: string,
  countryCode: string,
  exemptionDays: number,
  notes: string,
  notesVi: string,
  lang: Language,
  wpPosts: BlogPost[] = []
): BlogPost {
  const isVi = lang === 'vi';
  const queryName = countryName.toLowerCase();
  const queryCode = countryCode.toLowerCase();
  const exactUrl = getExactCountryRequirementUrl(countryCode, countryName);

  // 1. Try to find an exact or partial match from WordPress API fetched posts
  const matchedPost = wpPosts.find((p) => {
    const t = p.title.toLowerCase();
    const s = p.slug.toLowerCase();
    const l = p.link ? p.link.toLowerCase() : '';
    return t.includes(queryName) || s.includes(queryName) || l.includes(queryName) || (queryName === 'united states' && (t.includes('us ') || t.includes('usa') || t.includes('american')));
  });

  if (matchedPost) {
    return {
      ...matchedPost,
      link: exactUrl || matchedPost.link
    };
  }

  // 2. Generate a structured, detailed country requirement article if WP API has no specific post yet
  const title = isVi
    ? `Quy Định & Thủ Tục Xin Visa Việt Nam Cho Công Dân ${countryNameVi} (2026)`
    : `Vietnam Visa Requirements & Official Entry Guidelines for ${countryName} Citizens (2026)`;

  const excerpt = isVi
    ? `Hướng dẫn chi tiết quy định thị thực, thời hạn hộ chiếu và các gói xử lý e-Visa 1h - 24h cho công dân ${countryNameVi}.`
    : `Complete 2026 immigration breakdown for ${countryName} passport holders. Learn e-Visa validity, exemption rules, required documents, and express processing options.`;

  const exemptionNoticeHtml = exemptionDays > 0
    ? `<div class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-emerald-900 font-medium mb-4">
        <strong>${isVi ? `Được Miễn Visa ${exemptionDays} Ngày:` : `Free ${exemptionDays}-Day Visa Exemption:`}</strong>
        ${isVi 
          ? `Công dân ${countryNameVi} mang hộ chiếu phổ thông được MIỄN VISA lưu trú tối đa ${exemptionDays} ngày theo quy định hiện hành. Nếu muốn ở lại trên ${exemptionDays} ngày hoặc nhập cảnh nhiều lần, bạn cần xin E-Visa 90 ngày.` 
          : `Citizens of ${countryName} holding an ordinary passport enjoy a <strong>${exemptionDays}-Day Visa Exemption</strong> upon arrival in Vietnam. For stays longer than ${exemptionDays} days or multiple entries, apply for a 90-day e-Visa online.`}
       </div>`
    : `<div class="bg-blue-50 border border-blue-200 p-4 rounded-xl text-blue-900 font-medium mb-4">
        <strong>${isVi ? 'Yêu Cầu Có E-Visa Trước Khi Bay:' : 'E-Visa Required Prior to Departure:'}</strong>
        ${isVi 
          ? `Công dân ${countryNameVi} cần có E-Visa Việt Nam hợp lệ (30 ngày hoặc 90 ngày, 1 lần hoặc nhiều lần) trước khi lên máy bay.` 
          : `Citizens of ${countryName} are required to obtain a valid Vietnam e-Visa (30 or 90 days, single or multiple entry) before boarding their flight.`}
       </div>`;

  const content = `
    ${exemptionNoticeHtml}
    
    <h3>${isVi ? 'Điều Kiện Hộ Chiếu & Hồ Sơ Bắt Buộc:' : 'Passport & Photo Compliance Checklist:'}</h3>
    <ul>
      <li><strong>${isVi ? 'Thời hạn hộ chiếu:' : 'Passport Validity:'}</strong> ${isVi ? 'Còn hạn ít nhất 6 tháng tính từ ngày nhập cảnh Việt Nam, có ít nhất 2 trang trống.' : 'Must have at least 6 months remaining validity from arrival date with 2 blank pages.'}</li>
      <li><strong>${isVi ? 'Ảnh chân dung:' : 'Portrait Photo:'}</strong> ${isVi ? 'Mới chụp trong 6 tháng, phông nền trắng, rõ mặt, không đeo kính râm.' : '4x6cm digital photo, white background, no eyeglasses, clear face facing forward.'}</li>
      <li><strong>${isVi ? 'Trang thông tin hộ chiếu:' : 'Passport Bio-Page Scan:'}</strong> ${isVi ? 'Ảnh chụp hoặc scan rõ nét 4 góc, đầy đủ mã ICAO MRZ bên dưới.' : 'Clear high-resolution color scan showing full bio-page and MRZ code.'}</li>
    </ul>

    <h3>${isVi ? 'Loại E-Visa & Thời Gian Xử Lý:' : 'E-Visa Categories & Speed Options:'}</h3>
    <p>${isVi ? notesVi : notes}</p>
    <ul>
      <li><strong>${isVi ? 'Tiêu chuẩn (Standard):' : 'Standard Processing:'}</strong> 3 ${isVi ? 'ngày làm việc' : 'working days'}.</li>
      <li><strong>${isVi ? 'Khẩn 24h (Urgent):' : 'Urgent 24 Hours:'}</strong> ${isVi ? 'Duyệt trong 24 giờ làm việc.' : 'Approved within 24 working hours.'}</li>
      <li><strong>${isVi ? 'Khẩn Cấp 1H - 4H (Super Urgent):' : 'Super Urgent 1-4 Hours:'}</strong> ${isVi ? 'Xử lý gấp trong 1 đến 4 giờ làm việc cho chuyến bay chót.' : 'Emergency clearance in 1 to 4 hours for upcoming flights.'}</li>
    </ul>

    <h3>${isVi ? 'Cửa Khẩu Cho Phép Nhập Cảnh:' : 'Eligible Ports of Entry:'}</h3>
    <p>${isVi ? `E-Visa có giá trị tại 33 cửa khẩu quốc tế bao gồm các sân bay lớn: Nội Bài (Hà Nội), Tân Sơn Nhất (TP.HCM), Đà Nẵng, Cam Ranh (Nha Trang), Phú Quốc, Cát Bi (Hải Phòng).` : `E-Visa is valid for entry across 33 international border checkpoints including major airports: Hanoi (Noi Bai), Ho Chi Minh City (Tan Son Nhat), Da Nang, Cam Ranh, and Phu Quoc.`}</p>
  `;

  return {
    id: `req-${countryCode.toLowerCase()}`,
    title,
    excerpt,
    content,
    date: '2026-07-28',
    author: 'Vietnam Visa Advisory Team',
    featuredImage: `https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80`,
    category: 'Visa Requirements',
    readTime: '3 min read',
    link: exactUrl,
    slug: exactUrl.split('/').filter(Boolean).pop() || `vietnam-visa-requirements-for-${countryName.toLowerCase().replace(/\s+/g, '-')}`
  };
}

/**
 * Fetch a single post by slug directly from the backend proxy or direct WP REST API
 */
export async function fetchWpPostBySlug(slug: string): Promise<BlogPost | null> {
  // 1. Try backend API proxy
  try {
    const res = await fetch(`/api/wordpress/post-by-slug?slug=${encodeURIComponent(slug)}`, {
      headers: {
        'Accept': 'application/json'
      }
    });

    if (res.ok) {
      const data = await res.json();
      if (data.success && data.post) {
        return data.post;
      }
    }
  } catch (err) {
    console.warn('Backend fetch by slug failed, trying direct REST API:', err);
  }

  // 2. Direct fetch from WordPress REST API (for static hosts like cPanel, Netlify, Vercel)
  try {
    const directRes = await fetch(`${DIRECT_WP_BASE}/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed=true`);
    if (directRes.ok) {
      const posts = await directRes.json();
      if (Array.isArray(posts) && posts.length > 0) {
        const p = posts[0];
        let featuredImage = 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80';
        if (p._embedded && p._embedded['wp:featuredmedia'] && p._embedded['wp:featuredmedia'][0]) {
          featuredImage = p._embedded['wp:featuredmedia'][0].source_url || featuredImage;
        }

        return {
          id: p.id,
          title: decodeHtmlEntities(p.title?.rendered || ''),
          excerpt: decodeHtmlEntities((p.excerpt?.rendered || '').replace(/<[^>]+>/g, '').trim()),
          content: p.content?.rendered || '',
          date: p.date ? p.date.split('T')[0] : new Date().toISOString().split('T')[0],
          author: p._embedded?.author?.[0]?.name || 'Immigration Advisory Team',
          featuredImage,
          category: 'Visa Requirements',
          readTime: '4 min read',
          link: p.link || `${DIRECT_WP_BASE}/${slug}/`,
          slug: p.slug || slug
        };
      }
    }
  } catch (err) {
    console.warn('Direct WP fetch by slug failed:', err);
  }

  return null;
}


