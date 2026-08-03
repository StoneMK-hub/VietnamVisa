import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import { VisaApplication } from './src/types';

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// In-memory store for applications (initialized with sample demo application)
const applicationsStore: Map<string, VisaApplication> = new Map();

// Insert initial demo application
const demoApp: VisaApplication = {
  referenceCode: 'VNV-2026-883921',
  visaType: 'tourist_30_single',
  purpose: 'tourism',
  entryDate: '2026-08-15',
  exitDate: '2026-09-10',
  arrivalPort: 'noi_bai',
  processingTime: 'standard',
  extraServices: ['fast_track'],
  applicants: [
    {
      id: 'app-1',
      fullName: 'JOHN MICHAEL SMITH',
      gender: 'male',
      dateOfBirth: '1988-05-14',
      nationality: 'United States',
      passportNumber: 'N98234101',
      passportExpiry: '2031-10-20'
    }
  ],
  contactEmail: 'john.smith@example.com',
  contactPhone: '+1 415 555 0192',
  contactAddress: 'InterContinental Westlake, Hanoi, Vietnam',
  specialNotes: 'First time visiting Vietnam.',
  governmentFeePerPerson: 25,
  serviceFeePerPerson: 15,
  speedFeePerPerson: 0,
  extraServicesTotal: 20,
  totalAmountUsd: 60,
  totalAmountVnd: 1527000,
  paymentStatus: 'paid',
  paymentMethod: 'card',
  paymentTransactionId: 'TXN-99812401',
  applicationStatus: 'approved',
  createdAt: new Date().toISOString(),
  estimatedApprovalDate: '2026-08-10',
  approvalLetterUrl: 'APPROVED'
};
applicationsStore.set(demoApp.referenceCode, demoApp);

// API 1: Create Application
app.post('/api/visa/apply', (req, res) => {
  try {
    const data: Partial<VisaApplication> = req.body;
    
    // Generate unique reference code
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const referenceCode = `VNV-${new Date().getFullYear()}-${randomNum}`;
    
    const now = new Date();
    const estDate = new Date();
    if (data.processingTime === 'super_emergency_1h') {
      estDate.setHours(estDate.getHours() + 1);
    } else if (data.processingTime === 'emergency_4h') {
      estDate.setHours(estDate.getHours() + 4);
    } else if (data.processingTime === 'urgent_24h') {
      estDate.setDate(estDate.getDate() + 1);
    } else {
      estDate.setDate(estDate.getDate() + 3);
    }

    const newApp: VisaApplication = {
      referenceCode,
      visaType: data.visaType || 'tourist_30_single',
      purpose: data.purpose || 'tourism',
      entryDate: data.entryDate || '',
      exitDate: data.exitDate || '',
      arrivalPort: data.arrivalPort || 'noi_bai',
      processingTime: data.processingTime || 'standard',
      extraServices: data.extraServices || [],
      applicants: data.applicants || [],
      contactEmail: data.contactEmail || '',
      contactPhone: data.contactPhone || '',
      contactAddress: data.contactAddress || '',
      specialNotes: data.specialNotes || '',
      
      governmentFeePerPerson: data.governmentFeePerPerson || 25,
      serviceFeePerPerson: data.serviceFeePerPerson || 15,
      speedFeePerPerson: data.speedFeePerPerson || 0,
      extraServicesTotal: data.extraServicesTotal || 0,
      totalAmountUsd: data.totalAmountUsd || 40,
      totalAmountVnd: data.totalAmountVnd || 1018000,
      
      paymentStatus: 'pending',
      applicationStatus: 'payment_pending',
      createdAt: now.toISOString(),
      estimatedApprovalDate: estDate.toISOString().split('T')[0]
    };

    applicationsStore.set(referenceCode, newApp);
    return res.json({ success: true, application: newApp });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: err.message || 'Server error creating application' });
  }
});

// API 2: Track Application
app.get('/api/visa/track', (req, res) => {
  const code = (req.query.code as string || '').trim().toUpperCase();
  const email = (req.query.email as string || '').trim().toLowerCase();

  if (!code && !email) {
    return res.status(400).json({ success: false, message: 'Please provide reference code or email.' });
  }

  let found: VisaApplication | undefined;

  if (code) {
    found = applicationsStore.get(code);
    if (!found) {
      // Check if code matches applicant passport number
      for (const appItem of applicationsStore.values()) {
        const matchesPassport = appItem.applicants.some(
          a => a.passportNumber.toUpperCase() === code
        );
        if (matchesPassport) {
          found = appItem;
          break;
        }
      }
    }
  } else if (email) {
    for (const appItem of applicationsStore.values()) {
      if (appItem.contactEmail.toLowerCase() === email) {
        found = appItem;
        break;
      }
    }
  }

  if (found) {
    return res.json({ success: true, application: found });
  }

  return res.status(404).json({ success: false, message: 'Application not found with provided reference code.' });
});

// API 3: Simulate Payment Process
app.post('/api/visa/pay', (req, res) => {
  const { referenceCode, paymentMethod } = req.body;
  if (!referenceCode) {
    return res.status(400).json({ success: false, message: 'Reference code is required' });
  }

  const appItem = applicationsStore.get(referenceCode);
  if (!appItem) {
    return res.status(404).json({ success: false, message: 'Application not found' });
  }

  appItem.paymentStatus = 'paid';
  appItem.paymentMethod = paymentMethod || 'card';
  appItem.paymentTransactionId = `TXN-${Math.floor(10000000 + Math.random() * 90000000)}`;
  appItem.applicationStatus = 'in_review';

  // Automatically mark approved for demo experience
  setTimeout(() => {
    appItem.applicationStatus = 'approved';
    appItem.approvalLetterUrl = `APPROVED-${referenceCode}`;
  }, 1200);

  applicationsStore.set(referenceCode, appItem);

  return res.json({
    success: true,
    message: 'Payment verified successfully.',
    application: appItem
  });
});

// API 3.5: Contact Inquiry Submission
app.post('/api/contact', (req, res) => {
  try {
    const { firstName, lastName, email, phone, subject, message, nationality, timezone } = req.body;
    console.log(`Received contact message from ${firstName} ${lastName} (${email}): [${subject}] ${message}`);
    
    return res.json({
      success: true,
      message: 'Contact inquiry received successfully. Support team will respond shortly.'
    });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: err.message || 'Server error processing contact inquiry' });
  }
});

// API 4: Gemini AI Visa Assistant
app.post('/api/ai-chat', async (req, res) => {
  try {
    const { prompt, language = 'en' } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      // Fallback response if GEMINI_API_KEY is not configured
      const fallbackMsg = language === 'vi'
        ? `Tôi là Trợ lý Visa Việt Nam. Theo quy định hiện hành:\n1. Hộ chiếu của bạn phải còn hạn ít nhất 6 tháng kể từ ngày nhập cảnh.\n2. e-Visa Việt Nam có giá trị tối đa 90 ngày (1 lần hoặc nhiều lần).\n3. Công dân các nước như Anh, Đức, Pháp, Nhật Bản, Hàn Quốc được miễn thị thực 45 ngày.\nBạn cần hỗ trợ thêm thông tin gì về thủ tục hoặc loại visa cụ thể?`
        : `I am your Vietnam Visa Assistant. Key Vietnam visa regulations:\n1. Passport must be valid for at least 6 months from arrival date.\n2. Vietnam e-Visa is valid for up to 90 days (Single or Multiple entry).\n3. Passport holders from UK, Germany, France, Japan, South Korea enjoy 45-day visa exemption.\nHow can I help you with your visa application today?`;
      return res.json({ text: fallbackMsg });
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const systemInstruction = `You are the Official Vietnam Visa AI Expert & Legal Facilitator Consultant for the Vietnam Visa Online Portal (vietnamvisa.govt.vn).
You speak fluently in English, Vietnamese, French, German, Japanese, and Chinese based on the user's language request.
Your role:
- Answer questions accurately regarding Vietnam e-Visa policies (Law No. 23/2023/QH15 on Entry, Exit, Transit, and Residence of Foreigners in Vietnam).
- Explain passport validity requirements (> 6 months validity, at least 2 blank pages).
- Clarify 45-day Visa Exemptions for 13 countries (UK, Germany, France, Italy, Spain, Japan, South Korea, Russia, Denmark, Sweden, Norway, Finland, Belarus) and 30-day exemption for ASEAN nations.
- Explain 90-day e-Visa eligibility for all countries and territories.
- Detail urgent 1-hour/4-hour emergency processing options for missed flight situations.
- Explain airport fast-track procedures and landing ports (Noi Bai, Tan Son Nhat, Da Nang, Cam Ranh, Phu Quoc).
- Keep responses professional, clear, reassuring, structured with bullet points where necessary.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    return res.json({ text: response.text || 'Thank you for your inquiry. Please check official guidelines.' });
  } catch (err: any) {
    console.error('Gemini API Error:', err);
    return res.status(500).json({
      text: 'I am available to answer questions about Vietnam Visa rules, passport requirements, and processing times. Please try again or ask our 24/7 support line.'
    });
  }
});

// High Performance In-Memory Cache Store for WordPress APIs
interface WpCacheEntry<T> {
  data: T;
  timestamp: number;
}

const CACHE_TTL_MS = 15 * 60 * 1000; // 15 Minutes Cache TTL

let postsCacheStore: WpCacheEntry<any[]> | null = null;
let faqsCacheStore: WpCacheEntry<any[]> | null = null;
let requirementsCacheStore: WpCacheEntry<any[]> | null = null;
const slugPostsCacheMap = new Map<string, WpCacheEntry<any>>();

// Helper to decode HTML entities like &#8211; &amp; &#8217;
function decodeWpHtml(htmlStr: string): string {
  if (!htmlStr) return '';
  return htmlStr
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

const getWpCredentials = () => {
  const wpBaseUrl = (process.env.WORDPRESS_URL || 'https://blog.vietnamevisaservice.com').replace(/\/$/, '');
  const wpUser = process.env.WORDPRESS_USER || 'admin';
  const wpPass = process.env.WORDPRESS_PASS || 'PEFy lSSb 2cb2 vzKY ebYs twp2';
  const authHeader = 'Basic ' + Buffer.from(`${wpUser}:${wpPass}`).toString('base64');
  return { wpBaseUrl, authHeader };
};

// Async Background Fetchers
async function fetchAndCachePosts(): Promise<any[]> {
  try {
    const { wpBaseUrl, authHeader } = getWpCredentials();
    const postsUrl = `${wpBaseUrl}/wp-json/wp/v2/posts?categories=16&per_page=100&_embed=true`;
    const postsRes = await fetch(postsUrl, {
      headers: { 'Authorization': authHeader, 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
      signal: AbortSignal.timeout(8000)
    });

    if (postsRes.ok) {
      const wpPosts = await postsRes.json();
      if (Array.isArray(wpPosts) && wpPosts.length > 0) {
        const formatted = wpPosts.map((p: any) => {
          let featuredImage = 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80';
          if (p._embedded && p._embedded['wp:featuredmedia'] && p._embedded['wp:featuredmedia'][0]) {
            featuredImage = p._embedded['wp:featuredmedia'][0].source_url || featuredImage;
          }
          const rawTitle = p.title?.rendered || 'Urgent Vietnam Visa Update';
          const cleanTitle = decodeWpHtml(rawTitle);
          const rawExcerpt = p.excerpt?.rendered || p.content?.rendered || '';
          const cleanExcerpt = decodeWpHtml(rawExcerpt.replace(/<[^>]+>/g, '').trim()).substring(0, 165) + '...';

          const postObj = {
            id: p.id,
            title: cleanTitle,
            excerpt: cleanExcerpt,
            content: p.content?.rendered || '',
            date: p.date ? p.date.split('T')[0] : new Date().toISOString().split('T')[0],
            author: p._embedded?.author?.[0]?.name || 'Immigration Advisory Team',
            featuredImage,
            category: 'Urgent Vietnam Visa Blog New',
            readTime: '3 min read',
            link: p.link || 'https://blog.vietnamevisaservice.com',
            slug: p.slug || `post-${p.id}`
          };

          if (p.slug) {
            slugPostsCacheMap.set(p.slug.toLowerCase(), { data: postObj, timestamp: Date.now() });
          }

          return postObj;
        });

        postsCacheStore = { data: formatted, timestamp: Date.now() };
        console.log(`[WordPress Cache] Refreshed ${formatted.length} blog posts successfully.`);
        return formatted;
      }
    }
  } catch (err) {
    console.warn('[WordPress Cache] Warning fetching blog posts:', err);
  }

  if (!postsCacheStore) {
    const { FALLBACK_BLOG_POSTS } = await import('./src/services/wordpressApi');
    postsCacheStore = { data: FALLBACK_BLOG_POSTS, timestamp: Date.now() };
  }
  return postsCacheStore.data;
}

async function fetchAndCacheFaqs(): Promise<any[]> {
  try {
    const { wpBaseUrl, authHeader } = getWpCredentials();
    const faqsUrl = `${wpBaseUrl}/wp-json/wp/v2/posts?categories=71&per_page=100&_embed=true`;
    const faqsRes = await fetch(faqsUrl, {
      headers: { 'Authorization': authHeader, 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
      signal: AbortSignal.timeout(8000)
    });

    if (faqsRes.ok) {
      const wpFaqs = await faqsRes.json();
      if (Array.isArray(wpFaqs) && wpFaqs.length > 0) {
        const formatted = wpFaqs.map((p: any) => {
          let featuredImage = '';
          if (p._embedded && p._embedded['wp:featuredmedia'] && p._embedded['wp:featuredmedia'][0]) {
            featuredImage = p._embedded['wp:featuredmedia'][0].source_url || '';
          }
          const rawTitle = p.title?.rendered || 'Vietnam Visa FAQ';
          const cleanTitle = decodeWpHtml(rawTitle);
          const rawExcerpt = p.excerpt?.rendered || p.content?.rendered || '';
          const cleanExcerpt = decodeWpHtml(rawExcerpt.replace(/<[^>]+>/g, '').trim());

          return {
            id: p.id,
            question: cleanTitle,
            answerSummary: cleanExcerpt.substring(0, 220) + (cleanExcerpt.length > 220 ? '...' : ''),
            fullAnswerHtml: p.content?.rendered || '',
            date: p.date ? p.date.split('T')[0] : new Date().toISOString().split('T')[0],
            author: p._embedded?.author?.[0]?.name || 'Vietnam Visa Advisory Team',
            featuredImage,
            link: p.link || 'https://blog.vietnamevisaservice.com',
            slug: p.slug || `faq-${p.id}`
          };
        });

        faqsCacheStore = { data: formatted, timestamp: Date.now() };
        console.log(`[WordPress Cache] Refreshed ${formatted.length} FAQs successfully.`);
        return formatted;
      }
    }
  } catch (err) {
    console.warn('[WordPress Cache] Warning fetching FAQs:', err);
  }

  if (!faqsCacheStore) {
    const { FALLBACK_FAQS } = await import('./src/services/wordpressApi');
    faqsCacheStore = { data: FALLBACK_FAQS, timestamp: Date.now() };
  }
  return faqsCacheStore.data;
}

async function fetchAndCacheRequirements(): Promise<any[]> {
  try {
    const { wpBaseUrl, authHeader } = getWpCredentials();
    const page1Url = `${wpBaseUrl}/wp-json/wp/v2/posts?per_page=100&_embed=true&page=1`;
    const page2Url = `${wpBaseUrl}/wp-json/wp/v2/posts?per_page=100&_embed=true&page=2`;

    const [res1, res2] = await Promise.allSettled([
      fetch(page1Url, { headers: { 'Authorization': authHeader, 'User-Agent': 'Mozilla/5.0' }, signal: AbortSignal.timeout(8000) }),
      fetch(page2Url, { headers: { 'Authorization': authHeader, 'User-Agent': 'Mozilla/5.0' }, signal: AbortSignal.timeout(8000) })
    ]);

    let rawWpPosts: any[] = [];
    if (res1.status === 'fulfilled' && res1.value.ok) {
      const p1 = await res1.value.json();
      if (Array.isArray(p1)) rawWpPosts.push(...p1);
    }
    if (res2.status === 'fulfilled' && res2.value.ok) {
      const p2 = await res2.value.json();
      if (Array.isArray(p2)) rawWpPosts.push(...p2);
    }

    if (rawWpPosts.length > 0) {
      const formatted = rawWpPosts.map((p: any) => {
        let featuredImage = 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80';
        if (p._embedded && p._embedded['wp:featuredmedia'] && p._embedded['wp:featuredmedia'][0]) {
          featuredImage = p._embedded['wp:featuredmedia'][0].source_url || featuredImage;
        }
        const rawTitle = p.title?.rendered || 'Vietnam Visa Requirements';
        const cleanTitle = decodeWpHtml(rawTitle);
        const rawExcerpt = p.excerpt?.rendered || p.content?.rendered || '';
        const cleanExcerpt = decodeWpHtml(rawExcerpt.replace(/<[^>]+>/g, '').trim());

        const reqObj = {
          id: p.id,
          title: cleanTitle,
          excerpt: cleanExcerpt.substring(0, 220) + (cleanExcerpt.length > 220 ? '...' : ''),
          content: p.content?.rendered || '',
          date: p.date ? p.date.split('T')[0] : new Date().toISOString().split('T')[0],
          author: p._embedded?.author?.[0]?.name || 'Immigration Advisory Team',
          featuredImage,
          category: 'Visa Requirements',
          readTime: '4 min read',
          link: p.link || 'https://blog.vietnamevisaservice.com',
          slug: p.slug || `req-${p.id}`
        };

        if (p.slug) {
          slugPostsCacheMap.set(p.slug.toLowerCase(), { data: reqObj, timestamp: Date.now() });
        }

        return reqObj;
      });

      requirementsCacheStore = { data: formatted, timestamp: Date.now() };
      console.log(`[WordPress Cache] Refreshed ${formatted.length} visa requirement posts.`);
      return formatted;
    }
  } catch (err) {
    console.warn('[WordPress Cache] Warning fetching requirement posts:', err);
  }

  if (!requirementsCacheStore) {
    const { FALLBACK_REQUIREMENT_POSTS } = await import('./src/services/wordpressApi');
    requirementsCacheStore = { data: FALLBACK_REQUIREMENT_POSTS, timestamp: Date.now() };
  }
  return requirementsCacheStore.data;
}

// Background auto-refresh function
function warmUpAllCaches() {
  Promise.allSettled([
    fetchAndCachePosts(),
    fetchAndCacheFaqs(),
    fetchAndCacheRequirements()
  ]).catch(console.error);
}

// Trigger initial cache warmup immediately on server start
warmUpAllCaches();
// Schedule periodic cache refresh every 10 minutes in background
setInterval(warmUpAllCaches, 10 * 60 * 1000);

// API 5: WordPress REST API Posts Proxy for "Urgent Vietnam Visa Blog New" category
app.get('/api/wordpress/posts', async (req, res) => {
  if (postsCacheStore) {
    if (Date.now() - postsCacheStore.timestamp > CACHE_TTL_MS) {
      fetchAndCachePosts().catch(console.error);
    }
    return res.json({ success: true, posts: postsCacheStore.data, source: 'cache' });
  }

  const posts = await fetchAndCachePosts();
  return res.json({ success: true, posts, source: 'fresh' });
});

// API 6: WordPress REST API FAQs Proxy for "FAQ" category (ID 71)
app.get('/api/wordpress/faqs', async (req, res) => {
  if (faqsCacheStore) {
    if (Date.now() - faqsCacheStore.timestamp > CACHE_TTL_MS) {
      fetchAndCacheFaqs().catch(console.error);
    }
    return res.json({ success: true, faqs: faqsCacheStore.data, source: 'cache' });
  }

  const faqs = await fetchAndCacheFaqs();
  return res.json({ success: true, faqs, source: 'fresh' });
});

// API 7: WordPress REST API Requirements Proxy for "Visa Requirements" category
app.get('/api/wordpress/requirements', async (req, res) => {
  if (requirementsCacheStore) {
    if (Date.now() - requirementsCacheStore.timestamp > CACHE_TTL_MS) {
      fetchAndCacheRequirements().catch(console.error);
    }
    return res.json({ success: true, posts: requirementsCacheStore.data, source: 'cache' });
  }

  const posts = await fetchAndCacheRequirements();
  return res.json({ success: true, posts, source: 'fresh' });
});

// API 8: Fetch individual WordPress post by slug
app.get('/api/wordpress/post-by-slug', async (req, res) => {
  const slug = (req.query.slug as string || '').trim().toLowerCase();
  if (!slug) {
    return res.status(400).json({ success: false, error: 'Slug parameter is required' });
  }

  // 1. Check slug cache map
  const cachedSlug = slugPostsCacheMap.get(slug);
  if (cachedSlug) {
    return res.json({ success: true, post: cachedSlug.data, source: 'cache' });
  }

  // 2. Check in postsCacheStore / requirementsCacheStore
  if (postsCacheStore) {
    const found = postsCacheStore.data.find((p: any) => p.slug && p.slug.toLowerCase() === slug);
    if (found) {
      slugPostsCacheMap.set(slug, { data: found, timestamp: Date.now() });
      return res.json({ success: true, post: found, source: 'posts_cache' });
    }
  }
  if (requirementsCacheStore) {
    const found = requirementsCacheStore.data.find((p: any) => p.slug && p.slug.toLowerCase() === slug);
    if (found) {
      slugPostsCacheMap.set(slug, { data: found, timestamp: Date.now() });
      return res.json({ success: true, post: found, source: 'requirements_cache' });
    }
  }

  // 3. Direct WP fetch if not found in cache
  try {
    const { wpBaseUrl, authHeader } = getWpCredentials();
    const postRes = await fetch(`${wpBaseUrl}/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed=true`, {
      headers: { 'Authorization': authHeader, 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
      signal: AbortSignal.timeout(5000)
    });

    if (postRes.ok) {
      const posts = await postRes.json();
      if (Array.isArray(posts) && posts.length > 0) {
        const p = posts[0];
        let featuredImage = 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80';
        if (p._embedded && p._embedded['wp:featuredmedia'] && p._embedded['wp:featuredmedia'][0]) {
          featuredImage = p._embedded['wp:featuredmedia'][0].source_url || featuredImage;
        }

        const rawTitle = p.title?.rendered || 'Vietnam Visa Requirements';
        const cleanTitle = decodeWpHtml(rawTitle);
        const rawExcerpt = p.excerpt?.rendered || '';
        const cleanExcerpt = decodeWpHtml(rawExcerpt.replace(/<[^>]+>/g, '').trim());

        const postObj = {
          id: p.id,
          title: cleanTitle,
          excerpt: cleanExcerpt,
          content: p.content?.rendered || '',
          date: p.date ? p.date.split('T')[0] : new Date().toISOString().split('T')[0],
          author: p._embedded?.author?.[0]?.name || 'Immigration Advisory Team',
          featuredImage,
          category: 'Visa Requirements',
          readTime: '4 min read',
          link: p.link || `https://blog.vietnamevisaservice.com/${slug}/`,
          slug: p.slug || slug
        };

        slugPostsCacheMap.set(slug, { data: postObj, timestamp: Date.now() });
        return res.json({ success: true, post: postObj, source: 'wordpress_rest' });
      }
    }
  } catch (err: any) {
    console.error('Error fetching WP post by slug:', err);
  }

  return res.status(404).json({ success: false, message: 'Post not found on WordPress' });
});

// SEO Endpoint 1: Dynamic XML Sitemap for Search Engine Crawlers
app.get('/sitemap.xml', (req, res) => {
  const baseUrl = `${req.protocol}://${req.get('host')}`;
  const now = new Date().toISOString().split('T')[0];

  const pages = [
    { loc: '/', priority: '1.0', changefreq: 'daily' },
    { loc: '/apply-online', priority: '0.9', changefreq: 'daily' },
    { loc: '/fee-calculator', priority: '0.8', changefreq: 'weekly' },
    { loc: '/visa-requirements', priority: '0.9', changefreq: 'weekly' },
    { loc: '/track-application', priority: '0.8', changefreq: 'always' },
    { loc: '/faqs', priority: '0.7', changefreq: 'weekly' },
    { loc: '/contact-us', priority: '0.6', changefreq: 'monthly' }
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    page => `  <url>
    <loc>${baseUrl}${page.loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  res.header('Content-Type', 'application/xml');
  return res.send(xml);
});

// SEO Endpoint 2: Robots.txt Rules
app.get('/robots.txt', (req, res) => {
  const baseUrl = `${req.protocol}://${req.get('host')}`;
  const robots = `User-agent: *
Allow: /
Allow: /apply-online
Allow: /fee-calculator
Allow: /visa-requirements
Allow: /track-application
Allow: /faqs
Allow: /contact-us

Disallow: /api/

Sitemap: ${baseUrl}/sitemap.xml
`;

  res.header('Content-Type', 'text/plain');
  return res.send(robots);
});

async function startServer() {

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
