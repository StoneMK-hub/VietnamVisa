var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/data/countryUrls.ts
function getExactCountryRequirementUrl(countryCode, countryName) {
  const code = countryCode.toUpperCase();
  if (COUNTRY_REQUIREMENT_URLS[code]) {
    return COUNTRY_REQUIREMENT_URLS[code];
  }
  const slugName = countryName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return `https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-${slugName}-citizens/`;
}
var COUNTRY_REQUIREMENT_URLS;
var init_countryUrls = __esm({
  "src/data/countryUrls.ts"() {
    COUNTRY_REQUIREMENT_URLS = {
      // Major Destinations
      "US": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-us-citizens/",
      "IN": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-indian-citizens/",
      "CN": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-chinese-citizens/",
      "KR": "https://blog.vietnamevisaservice.com/vietnam-e-visa-for-south-korean-citizens/",
      "JP": "https://blog.vietnamevisaservice.com/vietnam-e-visa-for-japanese-citizens/",
      "CA": "https://blog.vietnamevisaservice.com/vietnam-e-visa-for-canadian-citizens/",
      "AU": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-australia/",
      "NZ": "https://blog.vietnamevisaservice.com/vietnam-e-visa-for-new-zealand-citizens/",
      "GB": "https://blog.vietnamevisaservice.com/vietnam-e-visa-for-united-kingdom-citizens/",
      "DE": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-german-citizens/",
      "GF": "https://blog.vietnamevisaservice.com/vietnam-e-visa-for-french-guiana-citizens/",
      "ES": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-spanish-citizens-a-complete-guide/",
      "IT": "https://blog.vietnamevisaservice.com/vietnam-e-visa-for-italian-citizens/",
      "NL": "https://blog.vietnamevisaservice.com/vietnam-e-visa-for-dutch-citizens/",
      "AE": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-uae-citizens/",
      "SA": "https://blog.vietnamevisaservice.com/vietnam-e-visa-for-saudi-arabian-citizens/",
      "QA": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-qatari-citizens/",
      "KW": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-kuwaiti-citizens/",
      "BH": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-bahraini-citizens/",
      "OM": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-omani-citizens/",
      "CH": "https://blog.vietnamevisaservice.com/vietnam-e-visa-for-swiss-citizens/",
      "AT": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-austrian-citizens/",
      "SE": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-swedish-citizens/",
      "NO": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-norwegian-citizens/",
      "DK": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-danish-citizens/",
      "FI": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-finnish-citizens/",
      "IE": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-irish-citizens/",
      "PT": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-portuguese-citizens/",
      "PL": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-polish-citizens/",
      "CZ": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-czech-citizens/",
      "HU": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-hungarian-citizens/",
      "RO": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-romanian-citizens/",
      "SK": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-slovak-citizens/",
      "SI": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-slovenian-citizens/",
      "GR": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-greek-citizens/",
      "IL": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-israeli-citizens/",
      "SG": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-singaporean-citizens/",
      "MY": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-malaysian-citizens/",
      "TH": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-thai-citizens/",
      "ID": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-indonesian-citizens/",
      "PH": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-philippine-citizens/",
      "HK": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-hong-kong-citizens/",
      "ZA": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-south-african-citizens/",
      "KZ": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-kazakh-citizens/",
      "AD": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-andorran-citizens/",
      "AR": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-argentine-citizens/",
      "AM": "https://blog.vietnamevisaservice.com/vietnam-e-visa-for-armenian-citizens/",
      "AZ": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-azerbaijani-citizens/",
      "BY": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-belarusian-citizens/",
      "BT": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-bhutanese-citizens/",
      "BO": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-bolivian-citizens/",
      "BA": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-bosnia-and-herzegovina-citizens/",
      "BR": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-brazilian-citizens/",
      "BN": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-bruneian-citizens/",
      "BG": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-bulgarian-citizens/",
      "KH": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-cambodian-citizens-a-complete-guide/",
      "CL": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-chilean-citizens/",
      "CO": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-colombian-citizens/",
      "HR": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-croatian-citizens/",
      "CU": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-cuban-citizens/",
      "CY": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-cypriot-citizens/",
      "EC": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-ecuadorian-citizens/",
      "EE": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-estonian-citizens/",
      "FJ": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-fijian-citizens/",
      "GE": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-georgian-citizens/",
      "GT": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-guatemalan-citizens/",
      "HN": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-honduran-citizens/",
      "IS": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-icelandic-citizens/",
      "KG": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-kyrgyz-citizens/",
      "LA": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-laotian-citizens/",
      "LV": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-latvian-citizens/",
      "LI": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-liechtenstein-citizens/",
      "LT": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-lithuanian-citizens/",
      "LU": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-luxembourg-citizens/",
      "MT": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-maltese-citizens/",
      "MX": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-mexican-citizens/",
      "MD": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-moldovan-citizens/",
      "MC": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-monacan-citizens/",
      "MN": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-mongolian-citizens/",
      "ME": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-montenegrin-citizens/",
      "MM": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-myanmar-citizens/",
      "NR": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-nauruan-citizens/",
      "NI": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-nicaraguan-citizens/",
      "MK": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-north-macedonian-citizens/",
      "PW": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-palauan-citizens/",
      "PA": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-panamanian-citizens/",
      "PG": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-papua-new-guinea-citizens/",
      "PY": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-paraguayan-citizens/",
      "PE": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-peruvian-citizens/",
      "RU": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-russian-citizens/",
      "WS": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-samoan-citizens/",
      "SM": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-san-marino-citizens/",
      "RS": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-serbian-citizens/",
      "SC": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-seychellois-citizens/",
      "SB": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-solomon-islands-citizens/",
      "TL": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-timor-leste-citizens/",
      "TT": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-trinidad-and-tobago-citizens/",
      "UY": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-uruguayan-citizens/",
      "UZ": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-uzbek-citizens/",
      "VU": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-vanuatu-citizens/",
      "VE": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-venezuelan-citizens/"
    };
  }
});

// src/services/wordpressApi.ts
var wordpressApi_exports = {};
__export(wordpressApi_exports, {
  FALLBACK_BLOG_POSTS: () => FALLBACK_BLOG_POSTS,
  FALLBACK_FAQS: () => FALLBACK_FAQS,
  FALLBACK_REQUIREMENT_POSTS: () => FALLBACK_REQUIREMENT_POSTS,
  fetchUrgentBlogPosts: () => fetchUrgentBlogPosts,
  fetchWpFaqPosts: () => fetchWpFaqPosts,
  fetchWpPostBySlug: () => fetchWpPostBySlug,
  fetchWpRequirementPosts: () => fetchWpRequirementPosts,
  getRequirementPostForCountry: () => getRequirementPostForCountry
});
function decodeHtmlEntities(str) {
  if (!str) return "";
  return str.replace(/&#8211;/g, "\u2013").replace(/&#8212;/g, "\u2014").replace(/&#8216;/g, "'").replace(/&#8217;/g, "'").replace(/&#8220;/g, '"').replace(/&#8221;/g, '"').replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#039;/g, "'");
}
async function fetchUrgentBlogPosts() {
  if (memoryBlogPosts && memoryBlogPosts.length > 0) {
    fetchUrgentBlogPostsNetwork().then((posts2) => {
      if (posts2 && posts2.length > 0) memoryBlogPosts = posts2;
    }).catch(() => {
    });
    return memoryBlogPosts;
  }
  try {
    const sessionStr = sessionStorage.getItem("wp_urgent_blog_posts_cache");
    if (sessionStr) {
      const parsed = JSON.parse(sessionStr);
      if (Array.isArray(parsed) && parsed.length > 0) {
        memoryBlogPosts = parsed;
        fetchUrgentBlogPostsNetwork().then((posts2) => {
          if (posts2 && posts2.length > 0) {
            memoryBlogPosts = posts2;
            sessionStorage.setItem("wp_urgent_blog_posts_cache", JSON.stringify(posts2));
          }
        }).catch(() => {
        });
        return memoryBlogPosts;
      }
    }
  } catch (e) {
  }
  const posts = await fetchUrgentBlogPostsNetwork();
  memoryBlogPosts = posts;
  try {
    sessionStorage.setItem("wp_urgent_blog_posts_cache", JSON.stringify(posts));
  } catch (e) {
  }
  return posts;
}
async function fetchUrgentBlogPostsNetwork() {
  try {
    const res = await fetch("/api/wordpress/posts", {
      headers: { "Accept": "application/json" }
    });
    if (res.ok) {
      const data = await res.json();
      if (data.success && Array.isArray(data.posts) && data.posts.length > 0) {
        return data.posts;
      }
    }
  } catch (err) {
    console.warn("Backend WordPress API fetch failed, trying direct REST API:", err);
  }
  try {
    const directRes = await fetch(`${DIRECT_WP_BASE}/wp-json/wp/v2/posts?per_page=100&_embed=true`);
    if (directRes.ok) {
      const posts = await directRes.json();
      if (Array.isArray(posts) && posts.length > 0) {
        return posts.map((p) => {
          let featuredImage = "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80";
          if (p._embedded && p._embedded["wp:featuredmedia"] && p._embedded["wp:featuredmedia"][0]) {
            featuredImage = p._embedded["wp:featuredmedia"][0].source_url || featuredImage;
          }
          return {
            id: p.id,
            title: decodeHtmlEntities(p.title?.rendered || ""),
            excerpt: decodeHtmlEntities((p.excerpt?.rendered || "").replace(/<[^>]+>/g, "").trim()),
            content: p.content?.rendered || "",
            date: p.date ? p.date.split("T")[0] : (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
            author: p._embedded?.author?.[0]?.name || "Immigration Advisory Team",
            featuredImage,
            category: "Urgent Vietnam Visa Blog New",
            readTime: "3 min read",
            link: p.link || `${DIRECT_WP_BASE}/${p.slug}/`,
            slug: p.slug || ""
          };
        });
      }
    }
  } catch (err) {
    console.warn("Direct WordPress REST API fetch failed:", err);
  }
  return FALLBACK_BLOG_POSTS;
}
async function fetchWpFaqPosts() {
  if (memoryFaqPosts && memoryFaqPosts.length > 0) {
    fetchWpFaqPostsNetwork().then((faqs2) => {
      if (faqs2 && faqs2.length > 0) memoryFaqPosts = faqs2;
    }).catch(() => {
    });
    return memoryFaqPosts;
  }
  try {
    const sessionStr = sessionStorage.getItem("wp_faq_posts_cache");
    if (sessionStr) {
      const parsed = JSON.parse(sessionStr);
      if (Array.isArray(parsed) && parsed.length > 0) {
        memoryFaqPosts = parsed;
        fetchWpFaqPostsNetwork().then((faqs2) => {
          if (faqs2 && faqs2.length > 0) {
            memoryFaqPosts = faqs2;
            sessionStorage.setItem("wp_faq_posts_cache", JSON.stringify(faqs2));
          }
        }).catch(() => {
        });
        return memoryFaqPosts;
      }
    }
  } catch (e) {
  }
  const faqs = await fetchWpFaqPostsNetwork();
  memoryFaqPosts = faqs;
  try {
    sessionStorage.setItem("wp_faq_posts_cache", JSON.stringify(faqs));
  } catch (e) {
  }
  return faqs;
}
async function fetchWpFaqPostsNetwork() {
  try {
    const res = await fetch("/api/wordpress/faqs", {
      headers: {
        "Accept": "application/json"
      }
    });
    if (res.ok) {
      const data = await res.json();
      if (data.success && Array.isArray(data.faqs) && data.faqs.length > 0) {
        return data.faqs;
      }
    }
  } catch (err) {
    console.warn("Backend WordPress FAQ fetch failed, falling back to cached FAQs:", err);
  }
  return FALLBACK_FAQS;
}
async function fetchWpRequirementPosts() {
  if (memoryRequirementPosts && memoryRequirementPosts.length > 0) {
    fetchWpRequirementPostsNetwork().then((posts2) => {
      if (posts2 && posts2.length > 0) memoryRequirementPosts = posts2;
    }).catch(() => {
    });
    return memoryRequirementPosts;
  }
  try {
    const sessionStr = sessionStorage.getItem("wp_requirement_posts_cache");
    if (sessionStr) {
      const parsed = JSON.parse(sessionStr);
      if (Array.isArray(parsed) && parsed.length > 0) {
        memoryRequirementPosts = parsed;
        fetchWpRequirementPostsNetwork().then((posts2) => {
          if (posts2 && posts2.length > 0) {
            memoryRequirementPosts = posts2;
            sessionStorage.setItem("wp_requirement_posts_cache", JSON.stringify(posts2));
          }
        }).catch(() => {
        });
        return memoryRequirementPosts;
      }
    }
  } catch (e) {
  }
  const posts = await fetchWpRequirementPostsNetwork();
  memoryRequirementPosts = posts;
  try {
    sessionStorage.setItem("wp_requirement_posts_cache", JSON.stringify(posts));
  } catch (e) {
  }
  return posts;
}
async function fetchWpRequirementPostsNetwork() {
  try {
    const res = await fetch("/api/wordpress/requirements", {
      headers: {
        "Accept": "application/json"
      }
    });
    if (res.ok) {
      const data = await res.json();
      if (data.success && Array.isArray(data.posts) && data.posts.length > 0) {
        return data.posts;
      }
    }
  } catch (err) {
    console.warn("Backend WordPress Requirement Posts fetch failed, trying direct REST API:", err);
  }
  try {
    const directRes = await fetch(`${DIRECT_WP_BASE}/wp-json/wp/v2/posts?per_page=100&_embed=true`);
    if (directRes.ok) {
      const posts = await directRes.json();
      if (Array.isArray(posts) && posts.length > 0) {
        return posts.map((p) => {
          let featuredImage = "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80";
          if (p._embedded && p._embedded["wp:featuredmedia"] && p._embedded["wp:featuredmedia"][0]) {
            featuredImage = p._embedded["wp:featuredmedia"][0].source_url || featuredImage;
          }
          return {
            id: p.id,
            title: decodeHtmlEntities(p.title?.rendered || ""),
            excerpt: decodeHtmlEntities((p.excerpt?.rendered || "").replace(/<[^>]+>/g, "").trim()),
            content: p.content?.rendered || "",
            date: p.date ? p.date.split("T")[0] : (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
            author: p._embedded?.author?.[0]?.name || "Immigration Advisory Team",
            featuredImage,
            category: "Visa Requirements",
            readTime: "4 min read",
            link: p.link || `${DIRECT_WP_BASE}/${p.slug}/`,
            slug: p.slug || ""
          };
        });
      }
    }
  } catch (err) {
    console.warn("Direct WordPress REST API requirement posts fetch failed:", err);
  }
  return FALLBACK_REQUIREMENT_POSTS;
}
function getRequirementPostForCountry(countryName, countryNameVi, countryCode, exemptionDays, notes, notesVi, lang, wpPosts = []) {
  const isVi = lang === "vi";
  const queryName = countryName.toLowerCase();
  const queryCode = countryCode.toLowerCase();
  const exactUrl = getExactCountryRequirementUrl(countryCode, countryName);
  const matchedPost = wpPosts.find((p) => {
    const t = p.title.toLowerCase();
    const s = p.slug.toLowerCase();
    const l = p.link ? p.link.toLowerCase() : "";
    return t.includes(queryName) || s.includes(queryName) || l.includes(queryName) || queryName === "united states" && (t.includes("us ") || t.includes("usa") || t.includes("american"));
  });
  if (matchedPost) {
    return {
      ...matchedPost,
      link: exactUrl || matchedPost.link
    };
  }
  const title = isVi ? `Quy \u0110\u1ECBnh & Th\u1EE7 T\u1EE5c Xin Visa Vi\u1EC7t Nam Cho C\xF4ng D\xE2n ${countryNameVi} (2026)` : `Vietnam Visa Requirements & Official Entry Guidelines for ${countryName} Citizens (2026)`;
  const excerpt = isVi ? `H\u01B0\u1EDBng d\u1EABn chi ti\u1EBFt quy \u0111\u1ECBnh th\u1ECB th\u1EF1c, th\u1EDDi h\u1EA1n h\u1ED9 chi\u1EBFu v\xE0 c\xE1c g\xF3i x\u1EED l\xFD e-Visa 1h - 24h cho c\xF4ng d\xE2n ${countryNameVi}.` : `Complete 2026 immigration breakdown for ${countryName} passport holders. Learn e-Visa validity, exemption rules, required documents, and express processing options.`;
  const exemptionNoticeHtml = exemptionDays > 0 ? `<div class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-emerald-900 font-medium mb-4">
        <strong>${isVi ? `\u0110\u01B0\u1EE3c Mi\u1EC5n Visa ${exemptionDays} Ng\xE0y:` : `Free ${exemptionDays}-Day Visa Exemption:`}</strong>
        ${isVi ? `C\xF4ng d\xE2n ${countryNameVi} mang h\u1ED9 chi\u1EBFu ph\u1ED5 th\xF4ng \u0111\u01B0\u1EE3c MI\u1EC4N VISA l\u01B0u tr\xFA t\u1ED1i \u0111a ${exemptionDays} ng\xE0y theo quy \u0111\u1ECBnh hi\u1EC7n h\xE0nh. N\u1EBFu mu\u1ED1n \u1EDF l\u1EA1i tr\xEAn ${exemptionDays} ng\xE0y ho\u1EB7c nh\u1EADp c\u1EA3nh nhi\u1EC1u l\u1EA7n, b\u1EA1n c\u1EA7n xin E-Visa 90 ng\xE0y.` : `Citizens of ${countryName} holding an ordinary passport enjoy a <strong>${exemptionDays}-Day Visa Exemption</strong> upon arrival in Vietnam. For stays longer than ${exemptionDays} days or multiple entries, apply for a 90-day e-Visa online.`}
       </div>` : `<div class="bg-blue-50 border border-blue-200 p-4 rounded-xl text-blue-900 font-medium mb-4">
        <strong>${isVi ? "Y\xEAu C\u1EA7u C\xF3 E-Visa Tr\u01B0\u1EDBc Khi Bay:" : "E-Visa Required Prior to Departure:"}</strong>
        ${isVi ? `C\xF4ng d\xE2n ${countryNameVi} c\u1EA7n c\xF3 E-Visa Vi\u1EC7t Nam h\u1EE3p l\u1EC7 (30 ng\xE0y ho\u1EB7c 90 ng\xE0y, 1 l\u1EA7n ho\u1EB7c nhi\u1EC1u l\u1EA7n) tr\u01B0\u1EDBc khi l\xEAn m\xE1y bay.` : `Citizens of ${countryName} are required to obtain a valid Vietnam e-Visa (30 or 90 days, single or multiple entry) before boarding their flight.`}
       </div>`;
  const content = `
    ${exemptionNoticeHtml}
    
    <h3>${isVi ? "\u0110i\u1EC1u Ki\u1EC7n H\u1ED9 Chi\u1EBFu & H\u1ED3 S\u01A1 B\u1EAFt Bu\u1ED9c:" : "Passport & Photo Compliance Checklist:"}</h3>
    <ul>
      <li><strong>${isVi ? "Th\u1EDDi h\u1EA1n h\u1ED9 chi\u1EBFu:" : "Passport Validity:"}</strong> ${isVi ? "C\xF2n h\u1EA1n \xEDt nh\u1EA5t 6 th\xE1ng t\xEDnh t\u1EEB ng\xE0y nh\u1EADp c\u1EA3nh Vi\u1EC7t Nam, c\xF3 \xEDt nh\u1EA5t 2 trang tr\u1ED1ng." : "Must have at least 6 months remaining validity from arrival date with 2 blank pages."}</li>
      <li><strong>${isVi ? "\u1EA2nh ch\xE2n dung:" : "Portrait Photo:"}</strong> ${isVi ? "M\u1EDBi ch\u1EE5p trong 6 th\xE1ng, ph\xF4ng n\u1EC1n tr\u1EAFng, r\xF5 m\u1EB7t, kh\xF4ng \u0111eo k\xEDnh r\xE2m." : "4x6cm digital photo, white background, no eyeglasses, clear face facing forward."}</li>
      <li><strong>${isVi ? "Trang th\xF4ng tin h\u1ED9 chi\u1EBFu:" : "Passport Bio-Page Scan:"}</strong> ${isVi ? "\u1EA2nh ch\u1EE5p ho\u1EB7c scan r\xF5 n\xE9t 4 g\xF3c, \u0111\u1EA7y \u0111\u1EE7 m\xE3 ICAO MRZ b\xEAn d\u01B0\u1EDBi." : "Clear high-resolution color scan showing full bio-page and MRZ code."}</li>
    </ul>

    <h3>${isVi ? "Lo\u1EA1i E-Visa & Th\u1EDDi Gian X\u1EED L\xFD:" : "E-Visa Categories & Speed Options:"}</h3>
    <p>${isVi ? notesVi : notes}</p>
    <ul>
      <li><strong>${isVi ? "Ti\xEAu chu\u1EA9n (Standard):" : "Standard Processing:"}</strong> 3 ${isVi ? "ng\xE0y l\xE0m vi\u1EC7c" : "working days"}.</li>
      <li><strong>${isVi ? "Kh\u1EA9n 24h (Urgent):" : "Urgent 24 Hours:"}</strong> ${isVi ? "Duy\u1EC7t trong 24 gi\u1EDD l\xE0m vi\u1EC7c." : "Approved within 24 working hours."}</li>
      <li><strong>${isVi ? "Kh\u1EA9n C\u1EA5p 1H - 4H (Super Urgent):" : "Super Urgent 1-4 Hours:"}</strong> ${isVi ? "X\u1EED l\xFD g\u1EA5p trong 1 \u0111\u1EBFn 4 gi\u1EDD l\xE0m vi\u1EC7c cho chuy\u1EBFn bay ch\xF3t." : "Emergency clearance in 1 to 4 hours for upcoming flights."}</li>
    </ul>

    <h3>${isVi ? "C\u1EEDa Kh\u1EA9u Cho Ph\xE9p Nh\u1EADp C\u1EA3nh:" : "Eligible Ports of Entry:"}</h3>
    <p>${isVi ? `E-Visa c\xF3 gi\xE1 tr\u1ECB t\u1EA1i 33 c\u1EEDa kh\u1EA9u qu\u1ED1c t\u1EBF bao g\u1ED3m c\xE1c s\xE2n bay l\u1EDBn: N\u1ED9i B\xE0i (H\xE0 N\u1ED9i), T\xE2n S\u01A1n Nh\u1EA5t (TP.HCM), \u0110\xE0 N\u1EB5ng, Cam Ranh (Nha Trang), Ph\xFA Qu\u1ED1c, C\xE1t Bi (H\u1EA3i Ph\xF2ng).` : `E-Visa is valid for entry across 33 international border checkpoints including major airports: Hanoi (Noi Bai), Ho Chi Minh City (Tan Son Nhat), Da Nang, Cam Ranh, and Phu Quoc.`}</p>
  `;
  return {
    id: `req-${countryCode.toLowerCase()}`,
    title,
    excerpt,
    content,
    date: "2026-07-28",
    author: "Vietnam Visa Advisory Team",
    featuredImage: `https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80`,
    category: "Visa Requirements",
    readTime: "3 min read",
    link: exactUrl,
    slug: exactUrl.split("/").filter(Boolean).pop() || `vietnam-visa-requirements-for-${countryName.toLowerCase().replace(/\s+/g, "-")}`
  };
}
async function fetchWpPostBySlug(slug) {
  try {
    const res = await fetch(`/api/wordpress/post-by-slug?slug=${encodeURIComponent(slug)}`, {
      headers: {
        "Accept": "application/json"
      }
    });
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.post) {
        return data.post;
      }
    }
  } catch (err) {
    console.warn("Backend fetch by slug failed, trying direct REST API:", err);
  }
  try {
    const directRes = await fetch(`${DIRECT_WP_BASE}/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed=true`);
    if (directRes.ok) {
      const posts = await directRes.json();
      if (Array.isArray(posts) && posts.length > 0) {
        const p = posts[0];
        let featuredImage = "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80";
        if (p._embedded && p._embedded["wp:featuredmedia"] && p._embedded["wp:featuredmedia"][0]) {
          featuredImage = p._embedded["wp:featuredmedia"][0].source_url || featuredImage;
        }
        return {
          id: p.id,
          title: decodeHtmlEntities(p.title?.rendered || ""),
          excerpt: decodeHtmlEntities((p.excerpt?.rendered || "").replace(/<[^>]+>/g, "").trim()),
          content: p.content?.rendered || "",
          date: p.date ? p.date.split("T")[0] : (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
          author: p._embedded?.author?.[0]?.name || "Immigration Advisory Team",
          featuredImage,
          category: "Visa Requirements",
          readTime: "4 min read",
          link: p.link || `${DIRECT_WP_BASE}/${slug}/`,
          slug: p.slug || slug
        };
      }
    }
  } catch (err) {
    console.warn("Direct WP fetch by slug failed:", err);
  }
  return null;
}
var FALLBACK_BLOG_POSTS, DIRECT_WP_BASE, memoryBlogPosts, memoryFaqPosts, memoryRequirementPosts, FALLBACK_FAQS, FALLBACK_REQUIREMENT_POSTS;
var init_wordpressApi = __esm({
  "src/services/wordpressApi.ts"() {
    init_countryUrls();
    FALLBACK_BLOG_POSTS = [
      {
        id: "wp-1",
        title: "Urgent 1-Hour Vietnam E-Visa Guide for Emergency Flights in 2026",
        excerpt: "Flight departing soon? Complete step-by-step breakdown of how our fast-track team processes emergency Vietnam e-visas within 60 to 120 minutes around the clock.",
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
        date: "2026-07-28",
        author: "Immigration Specialist Team",
        featuredImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
        category: "Urgent Vietnam Visa Blog New",
        readTime: "3 min read",
        link: "https://vietnamvisa.govt.vn/urgent-1-hour-vietnam-evisa-guide-2026",
        slug: "urgent-1-hour-vietnam-evisa-guide-2026"
      },
      {
        id: "wp-2",
        title: "Top 5 Common E-Visa Photo Errors That Cause Airport Delays",
        excerpt: "Avoid rejection and weekend delays by following official 2026 photo specifications for Vietnam e-visa applications.",
        content: `
      <p>Over 70% of delayed Vietnam e-visa applications are caused by non-compliant passport scan uploads or portrait photos. Immigration automated verification systems reject improper submissions immediately.</p>
      
      <h3>Photo Compliance Checklist:</h3>
      <ul>
        <li><strong>Plain White Background:</strong> No shadows, patterns, or tinted backgrounds.</li>
        <li><strong>Full Face Facing Camera:</strong> Both ears visible, neutral expression, no eyeglasses.</li>
        <li><strong>High Resolution:</strong> JPEG/PNG format with clear facial features.</li>
      </ul>
    `,
        date: "2026-07-25",
        author: "Nguyen Van Hai (Senior Advisory)",
        featuredImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
        category: "Urgent Vietnam Visa Blog New",
        readTime: "4 min read",
        link: "https://vietnamvisa.govt.vn/top-5-evisa-photo-errors-delays",
        slug: "top-5-evisa-photo-errors-delays"
      },
      {
        id: "wp-3",
        title: "How to Expedite Vietnam E-Visa Approval on Weekends & Public Holidays",
        excerpt: "Standard government immigration offices are closed on weekends. Learn how our 24/7 hotline gets weekend urgent visas approved.",
        content: `
      <p>Traveling on Saturday or Sunday? Standard government processing pauses over weekends. However, airport immigration advisory desks operate 24/7 for urgent entry support.</p>
      
      <p>By using our Fast-Track Emergency Service, our team coordinates with duty officers at major international entry ports to issue emergency landing approval letters even on public holidays.</p>
    `,
        date: "2026-07-20",
        author: "Elena Rostova (Travel Consultant)",
        featuredImage: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=800&q=80",
        category: "Urgent Vietnam Visa Blog New",
        readTime: "5 min read",
        link: "https://vietnamvisa.govt.vn/weekend-holiday-urgent-vietnam-visa",
        slug: "weekend-holiday-urgent-vietnam-visa"
      }
    ];
    DIRECT_WP_BASE = "https://blog.vietnamevisaservice.com";
    memoryBlogPosts = null;
    memoryFaqPosts = null;
    memoryRequirementPosts = null;
    FALLBACK_FAQS = [
      {
        id: "faq-1279",
        question: "Can I Leave and Re-enter Vietnam with an e-Visa?",
        answerSummary: "You can leave and re-enter Vietnam only if you applied for a Multiple-Entry Vietnam E-Visa. Single-entry e-visas expire immediately upon departure.",
        fullAnswerHtml: "<p>Planning a dynamic trip around Southeast Asia often leaves travelers asking one critical question: <b>Can I leave and re-enter Vietnam with an e-Visa?</b></p><p>If you have a <b>Multiple-Entry E-Visa</b> (valid up to 90 days), you may cross borders into neighboring countries like Cambodia, Laos, or Thailand and re-enter Vietnam freely during its validity period.</p><p>However, if your e-visa is a <b>Single-Entry E-Visa</b>, it becomes invalid the moment you pass outbound immigration, even if you still have remaining days left on your visa date range.</p>",
        date: "2026-07-28",
        author: "Vietnam Visa Advisory Team",
        featuredImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
        link: "https://blog.vietnamevisaservice.com/can-i-leave-and-re-enter-vietnam-with-an-e-visa/",
        slug: "can-i-leave-and-re-enter-vietnam-with-an-e-visa"
      },
      {
        id: "faq-1275",
        question: "Can I Study in Vietnam with a Tourist Visa?",
        answerSummary: "Short-term non-degree courses and language workshops are permissible on tourist e-visas, but full degree programs require a formal Student Visa (DH category).",
        fullAnswerHtml: "<p>Vietnam is rapidly becoming a popular destination for international students and digital nomads taking short cultural workshops or intensive language bootcamps.</p><p>For short-term classes (under 90 days), a tourist e-visa is acceptable. For enrolled university degree programs, students must obtain an official Student Visa sponsored by an accredited Vietnamese educational institution.</p>",
        date: "2026-07-27",
        author: "Vietnam Visa Advisory Team",
        featuredImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
        link: "https://blog.vietnamevisaservice.com/can-i-study-in-vietnam-with-a-tourist-visa/",
        slug: "can-i-study-in-vietnam-with-a-tourist-visa"
      },
      {
        id: "faq-1273",
        question: "Can I Work in Vietnam with a Tourist Visa?",
        answerSummary: "Working for a Vietnamese employer on a tourist e-visa is illegal. Foreign workers require a Work Permit (Gi\u1EA5y ph\xE9p lao \u0111\u1ED9ng) and Business/Work Visa (DN/LD).",
        fullAnswerHtml: "<p>It is strictly prohibited to engage in local employment or sign employment contracts with Vietnamese companies using a Tourist E-Visa.</p><p>Foreign professionals must be sponsored by a registered company in Vietnam to apply for a Business E-Visa (DN1/DN2) followed by a Work Permit and Temporary Residence Card (TRC).</p>",
        date: "2026-07-26",
        author: "Vietnam Visa Advisory Team",
        featuredImage: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=800&q=80",
        link: "https://blog.vietnamevisaservice.com/can-i-work-in-vietnam-with-a-tourist-visa/",
        slug: "can-i-work-in-vietnam-with-a-tourist-visa"
      },
      {
        id: "faq-1268",
        question: "Which Countries Need a Visa for Vietnam? Updated Policy & Exemptions",
        answerSummary: "Citizens of 25+ countries enjoy bilateral visa exemptions ranging from 14 to 45 days. All other nationalities can apply for a 90-day e-Visa online.",
        fullAnswerHtml: "<p>Vietnam offers visa-free entry for citizens of 25+ nations including Japan, South Korea, Germany, France, Italy, Spain, UK, Russia, and ASEAN members for stays between 14 to 45 days.</p><p>Passport holders from the US, Canada, Australia, India, and 170+ other countries must obtain a Vietnam E-Visa prior to boarding their flight.</p>",
        date: "2026-07-25",
        author: "Vietnam Visa Advisory Team",
        featuredImage: "",
        link: "https://blog.vietnamevisaservice.com/which-countries-need-a-visa-for-vietnam/",
        slug: "which-countries-need-a-visa-for-vietnam"
      }
    ];
    FALLBACK_REQUIREMENT_POSTS = [
      {
        id: "req-us",
        title: "Vietnam Visa Requirements for US Citizens (2026 Updated Guide)",
        excerpt: "US passport holders can apply for 30-day or 90-day single/multiple entry Vietnam e-Visas online. Learn key passport rules, photo requirements, and processing times.",
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
        date: "2026-07-28",
        author: "Vietnam Visa Advisory Team",
        featuredImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
        category: "Visa Requirements",
        readTime: "4 min read",
        link: "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-us-citizens/",
        slug: "vietnam-visa-requirements-for-us-citizens"
      },
      {
        id: "req-gb",
        title: "Vietnam Visa Requirements & 45-Day Exemption for UK Citizens",
        excerpt: "UK citizens enjoy 45 days visa-free entry to Vietnam! For stays over 45 days or multiple entries, apply for a 90-day e-Visa online.",
        content: `
      <p>British citizens (British Citizen passport holders) enjoy a <b>45-day Vietnam Visa Exemption</b> under government Resolution 44/NQ-CP.</p>
      
      <h3>UK Exemption & E-Visa Policy Breakdown:</h3>
      <ul>
        <li><strong>Stays Up to 45 Days:</strong> NO visa required upon entry. Simply present a passport with >6 months validity and proof of return/onward flight.</li>
        <li><strong>Stays Over 45 Days or Multiple Entries:</strong> Must apply for an electronic e-Visa valid for up to 90 days.</li>
        <li><strong>Emergency Processing:</strong> Fast-track 1h-24h approval available if your travel plans change last minute.</li>
      </ul>
    `,
        date: "2026-07-27",
        author: "Vietnam Visa Advisory Team",
        featuredImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
        category: "Visa Requirements",
        readTime: "3 min read",
        link: "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-uk-citizens/",
        slug: "vietnam-visa-requirements-for-uk-citizens"
      },
      {
        id: "req-au",
        title: "Vietnam Visa Requirements for Australian Citizens 2026",
        excerpt: "Australian passport holders are fully eligible for 30-day & 90-day Vietnam e-Visas. Complete breakdown of application steps, costs, and airport landing guidelines.",
        content: `
      <p>Australian citizens require a valid Vietnam e-Visa prior to boarding flights to Hanoi, Ho Chi Minh City, or Da Nang.</p>
      
      <h3>Australian Passport Guidelines:</h3>
      <ul>
        <li><strong>E-Visa Types:</strong> 30-day Single Entry, 30-day Multiple Entry, 90-day Single Entry, or 90-day Multiple Entry.</li>
        <li><strong>Passport Rules:</strong> At least 6 months validity remaining from date of arrival.</li>
        <li><strong>Rush Flight Support:</strong> Super-urgent 1-hour and 4-hour express options for tight flight departures.</li>
      </ul>
    `,
        date: "2026-07-26",
        author: "Vietnam Visa Advisory Team",
        featuredImage: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80",
        category: "Visa Requirements",
        readTime: "4 min read",
        link: "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-australian-citizens/",
        slug: "vietnam-visa-requirements-for-australian-citizens"
      }
    ];
  }
});

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
var app = (0, import_express.default)();
var PORT = Number(process.env.PORT) || 3e3;
app.use(import_express.default.json());
var applicationsStore = /* @__PURE__ */ new Map();
var demoApp = {
  referenceCode: "VNV-2026-883921",
  visaType: "tourist_30_single",
  purpose: "tourism",
  entryDate: "2026-08-15",
  exitDate: "2026-09-10",
  arrivalPort: "noi_bai",
  processingTime: "standard",
  extraServices: ["fast_track"],
  applicants: [
    {
      id: "app-1",
      fullName: "JOHN MICHAEL SMITH",
      gender: "male",
      dateOfBirth: "1988-05-14",
      nationality: "United States",
      passportNumber: "N98234101",
      passportExpiry: "2031-10-20"
    }
  ],
  contactEmail: "john.smith@example.com",
  contactPhone: "+1 415 555 0192",
  contactAddress: "InterContinental Westlake, Hanoi, Vietnam",
  specialNotes: "First time visiting Vietnam.",
  governmentFeePerPerson: 25,
  serviceFeePerPerson: 15,
  speedFeePerPerson: 0,
  extraServicesTotal: 20,
  totalAmountUsd: 60,
  totalAmountVnd: 1527e3,
  paymentStatus: "paid",
  paymentMethod: "card",
  paymentTransactionId: "TXN-99812401",
  applicationStatus: "approved",
  createdAt: (/* @__PURE__ */ new Date()).toISOString(),
  estimatedApprovalDate: "2026-08-10",
  approvalLetterUrl: "APPROVED"
};
applicationsStore.set(demoApp.referenceCode, demoApp);
app.post("/api/visa/apply", (req, res) => {
  try {
    const data = req.body;
    const randomNum = Math.floor(1e5 + Math.random() * 9e5);
    const referenceCode = `VNV-${(/* @__PURE__ */ new Date()).getFullYear()}-${randomNum}`;
    const now = /* @__PURE__ */ new Date();
    const estDate = /* @__PURE__ */ new Date();
    if (data.processingTime === "super_emergency_1h") {
      estDate.setHours(estDate.getHours() + 1);
    } else if (data.processingTime === "emergency_4h") {
      estDate.setHours(estDate.getHours() + 4);
    } else if (data.processingTime === "urgent_24h") {
      estDate.setDate(estDate.getDate() + 1);
    } else {
      estDate.setDate(estDate.getDate() + 3);
    }
    const newApp = {
      referenceCode,
      visaType: data.visaType || "tourist_30_single",
      purpose: data.purpose || "tourism",
      entryDate: data.entryDate || "",
      exitDate: data.exitDate || "",
      arrivalPort: data.arrivalPort || "noi_bai",
      processingTime: data.processingTime || "standard",
      extraServices: data.extraServices || [],
      applicants: data.applicants || [],
      contactEmail: data.contactEmail || "",
      contactPhone: data.contactPhone || "",
      contactAddress: data.contactAddress || "",
      specialNotes: data.specialNotes || "",
      governmentFeePerPerson: data.governmentFeePerPerson || 25,
      serviceFeePerPerson: data.serviceFeePerPerson || 15,
      speedFeePerPerson: data.speedFeePerPerson || 0,
      extraServicesTotal: data.extraServicesTotal || 0,
      totalAmountUsd: data.totalAmountUsd || 40,
      totalAmountVnd: data.totalAmountVnd || 1018e3,
      paymentStatus: "pending",
      applicationStatus: "payment_pending",
      createdAt: now.toISOString(),
      estimatedApprovalDate: estDate.toISOString().split("T")[0]
    };
    applicationsStore.set(referenceCode, newApp);
    return res.json({ success: true, application: newApp });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message || "Server error creating application" });
  }
});
app.get("/api/visa/track", (req, res) => {
  const code = (req.query.code || "").trim().toUpperCase();
  const email = (req.query.email || "").trim().toLowerCase();
  if (!code && !email) {
    return res.status(400).json({ success: false, message: "Please provide reference code or email." });
  }
  let found;
  if (code) {
    found = applicationsStore.get(code);
    if (!found) {
      for (const appItem of applicationsStore.values()) {
        const matchesPassport = appItem.applicants.some(
          (a) => a.passportNumber.toUpperCase() === code
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
  return res.status(404).json({ success: false, message: "Application not found with provided reference code." });
});
app.post("/api/visa/pay", (req, res) => {
  const { referenceCode, paymentMethod } = req.body;
  if (!referenceCode) {
    return res.status(400).json({ success: false, message: "Reference code is required" });
  }
  const appItem = applicationsStore.get(referenceCode);
  if (!appItem) {
    return res.status(404).json({ success: false, message: "Application not found" });
  }
  appItem.paymentStatus = "paid";
  appItem.paymentMethod = paymentMethod || "card";
  appItem.paymentTransactionId = `TXN-${Math.floor(1e7 + Math.random() * 9e7)}`;
  appItem.applicationStatus = "in_review";
  setTimeout(() => {
    appItem.applicationStatus = "approved";
    appItem.approvalLetterUrl = `APPROVED-${referenceCode}`;
  }, 1200);
  applicationsStore.set(referenceCode, appItem);
  return res.json({
    success: true,
    message: "Payment verified successfully.",
    application: appItem
  });
});
app.post("/api/contact", (req, res) => {
  try {
    const { firstName, lastName, email, phone, subject, message, nationality, timezone } = req.body;
    console.log(`Received contact message from ${firstName} ${lastName} (${email}): [${subject}] ${message}`);
    return res.json({
      success: true,
      message: "Contact inquiry received successfully. Support team will respond shortly."
    });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message || "Server error processing contact inquiry" });
  }
});
app.post("/api/ai-chat", async (req, res) => {
  try {
    const { prompt, language = "en" } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      const fallbackMsg = language === "vi" ? `T\xF4i l\xE0 Tr\u1EE3 l\xFD Visa Vi\u1EC7t Nam. Theo quy \u0111\u1ECBnh hi\u1EC7n h\xE0nh:
1. H\u1ED9 chi\u1EBFu c\u1EE7a b\u1EA1n ph\u1EA3i c\xF2n h\u1EA1n \xEDt nh\u1EA5t 6 th\xE1ng k\u1EC3 t\u1EEB ng\xE0y nh\u1EADp c\u1EA3nh.
2. e-Visa Vi\u1EC7t Nam c\xF3 gi\xE1 tr\u1ECB t\u1ED1i \u0111a 90 ng\xE0y (1 l\u1EA7n ho\u1EB7c nhi\u1EC1u l\u1EA7n).
3. C\xF4ng d\xE2n c\xE1c n\u01B0\u1EDBc nh\u01B0 Anh, \u0110\u1EE9c, Ph\xE1p, Nh\u1EADt B\u1EA3n, H\xE0n Qu\u1ED1c \u0111\u01B0\u1EE3c mi\u1EC5n th\u1ECB th\u1EF1c 45 ng\xE0y.
B\u1EA1n c\u1EA7n h\u1ED7 tr\u1EE3 th\xEAm th\xF4ng tin g\xEC v\u1EC1 th\u1EE7 t\u1EE5c ho\u1EB7c lo\u1EA1i visa c\u1EE5 th\u1EC3?` : `I am your Vietnam Visa Assistant. Key Vietnam visa regulations:
1. Passport must be valid for at least 6 months from arrival date.
2. Vietnam e-Visa is valid for up to 90 days (Single or Multiple entry).
3. Passport holders from UK, Germany, France, Japan, South Korea enjoy 45-day visa exemption.
How can I help you with your visa application today?`;
      return res.json({ text: fallbackMsg });
    }
    const ai = new import_genai.GoogleGenAI({ apiKey });
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
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7
      }
    });
    return res.json({ text: response.text || "Thank you for your inquiry. Please check official guidelines." });
  } catch (err) {
    console.error("Gemini API Error:", err);
    return res.status(500).json({
      text: "I am available to answer questions about Vietnam Visa rules, passport requirements, and processing times. Please try again or ask our 24/7 support line."
    });
  }
});
var CACHE_TTL_MS = 15 * 60 * 1e3;
var postsCacheStore = null;
var faqsCacheStore = null;
var requirementsCacheStore = null;
var slugPostsCacheMap = /* @__PURE__ */ new Map();
function decodeWpHtml(htmlStr) {
  if (!htmlStr) return "";
  return htmlStr.replace(/&#8211;/g, "\u2013").replace(/&#8212;/g, "\u2014").replace(/&#8216;/g, "'").replace(/&#8217;/g, "'").replace(/&#8220;/g, '"').replace(/&#8221;/g, '"').replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#039;/g, "'");
}
var getWpCredentials = () => {
  const wpBaseUrl = (process.env.WORDPRESS_URL || "https://blog.vietnamevisaservice.com").replace(/\/$/, "");
  const wpUser = process.env.WORDPRESS_USER || "admin";
  const wpPass = process.env.WORDPRESS_PASS || "PEFy lSSb 2cb2 vzKY ebYs twp2";
  const authHeader = "Basic " + Buffer.from(`${wpUser}:${wpPass}`).toString("base64");
  return { wpBaseUrl, authHeader };
};
async function fetchAndCachePosts() {
  try {
    const { wpBaseUrl, authHeader } = getWpCredentials();
    const postsUrl = `${wpBaseUrl}/wp-json/wp/v2/posts?categories=16&per_page=100&_embed=true`;
    const postsRes = await fetch(postsUrl, {
      headers: { "Authorization": authHeader, "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" },
      signal: AbortSignal.timeout(8e3)
    });
    if (postsRes.ok) {
      const wpPosts = await postsRes.json();
      if (Array.isArray(wpPosts) && wpPosts.length > 0) {
        const formatted = wpPosts.map((p) => {
          let featuredImage = "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80";
          if (p._embedded && p._embedded["wp:featuredmedia"] && p._embedded["wp:featuredmedia"][0]) {
            featuredImage = p._embedded["wp:featuredmedia"][0].source_url || featuredImage;
          }
          const rawTitle = p.title?.rendered || "Urgent Vietnam Visa Update";
          const cleanTitle = decodeWpHtml(rawTitle);
          const rawExcerpt = p.excerpt?.rendered || p.content?.rendered || "";
          const cleanExcerpt = decodeWpHtml(rawExcerpt.replace(/<[^>]+>/g, "").trim()).substring(0, 165) + "...";
          const postObj = {
            id: p.id,
            title: cleanTitle,
            excerpt: cleanExcerpt,
            content: p.content?.rendered || "",
            date: p.date ? p.date.split("T")[0] : (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
            author: p._embedded?.author?.[0]?.name || "Immigration Advisory Team",
            featuredImage,
            category: "Urgent Vietnam Visa Blog New",
            readTime: "3 min read",
            link: p.link || "https://blog.vietnamevisaservice.com",
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
    console.warn("[WordPress Cache] Warning fetching blog posts:", err);
  }
  if (!postsCacheStore) {
    const { FALLBACK_BLOG_POSTS: FALLBACK_BLOG_POSTS2 } = await Promise.resolve().then(() => (init_wordpressApi(), wordpressApi_exports));
    postsCacheStore = { data: FALLBACK_BLOG_POSTS2, timestamp: Date.now() };
  }
  return postsCacheStore.data;
}
async function fetchAndCacheFaqs() {
  try {
    const { wpBaseUrl, authHeader } = getWpCredentials();
    const faqsUrl = `${wpBaseUrl}/wp-json/wp/v2/posts?categories=71&per_page=100&_embed=true`;
    const faqsRes = await fetch(faqsUrl, {
      headers: { "Authorization": authHeader, "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" },
      signal: AbortSignal.timeout(8e3)
    });
    if (faqsRes.ok) {
      const wpFaqs = await faqsRes.json();
      if (Array.isArray(wpFaqs) && wpFaqs.length > 0) {
        const formatted = wpFaqs.map((p) => {
          let featuredImage = "";
          if (p._embedded && p._embedded["wp:featuredmedia"] && p._embedded["wp:featuredmedia"][0]) {
            featuredImage = p._embedded["wp:featuredmedia"][0].source_url || "";
          }
          const rawTitle = p.title?.rendered || "Vietnam Visa FAQ";
          const cleanTitle = decodeWpHtml(rawTitle);
          const rawExcerpt = p.excerpt?.rendered || p.content?.rendered || "";
          const cleanExcerpt = decodeWpHtml(rawExcerpt.replace(/<[^>]+>/g, "").trim());
          return {
            id: p.id,
            question: cleanTitle,
            answerSummary: cleanExcerpt.substring(0, 220) + (cleanExcerpt.length > 220 ? "..." : ""),
            fullAnswerHtml: p.content?.rendered || "",
            date: p.date ? p.date.split("T")[0] : (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
            author: p._embedded?.author?.[0]?.name || "Vietnam Visa Advisory Team",
            featuredImage,
            link: p.link || "https://blog.vietnamevisaservice.com",
            slug: p.slug || `faq-${p.id}`
          };
        });
        faqsCacheStore = { data: formatted, timestamp: Date.now() };
        console.log(`[WordPress Cache] Refreshed ${formatted.length} FAQs successfully.`);
        return formatted;
      }
    }
  } catch (err) {
    console.warn("[WordPress Cache] Warning fetching FAQs:", err);
  }
  if (!faqsCacheStore) {
    const { FALLBACK_FAQS: FALLBACK_FAQS2 } = await Promise.resolve().then(() => (init_wordpressApi(), wordpressApi_exports));
    faqsCacheStore = { data: FALLBACK_FAQS2, timestamp: Date.now() };
  }
  return faqsCacheStore.data;
}
async function fetchAndCacheRequirements() {
  try {
    const { wpBaseUrl, authHeader } = getWpCredentials();
    const page1Url = `${wpBaseUrl}/wp-json/wp/v2/posts?per_page=100&_embed=true&page=1`;
    const page2Url = `${wpBaseUrl}/wp-json/wp/v2/posts?per_page=100&_embed=true&page=2`;
    const [res1, res2] = await Promise.allSettled([
      fetch(page1Url, { headers: { "Authorization": authHeader, "User-Agent": "Mozilla/5.0" }, signal: AbortSignal.timeout(8e3) }),
      fetch(page2Url, { headers: { "Authorization": authHeader, "User-Agent": "Mozilla/5.0" }, signal: AbortSignal.timeout(8e3) })
    ]);
    let rawWpPosts = [];
    if (res1.status === "fulfilled" && res1.value.ok) {
      const p1 = await res1.value.json();
      if (Array.isArray(p1)) rawWpPosts.push(...p1);
    }
    if (res2.status === "fulfilled" && res2.value.ok) {
      const p2 = await res2.value.json();
      if (Array.isArray(p2)) rawWpPosts.push(...p2);
    }
    if (rawWpPosts.length > 0) {
      const formatted = rawWpPosts.map((p) => {
        let featuredImage = "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80";
        if (p._embedded && p._embedded["wp:featuredmedia"] && p._embedded["wp:featuredmedia"][0]) {
          featuredImage = p._embedded["wp:featuredmedia"][0].source_url || featuredImage;
        }
        const rawTitle = p.title?.rendered || "Vietnam Visa Requirements";
        const cleanTitle = decodeWpHtml(rawTitle);
        const rawExcerpt = p.excerpt?.rendered || p.content?.rendered || "";
        const cleanExcerpt = decodeWpHtml(rawExcerpt.replace(/<[^>]+>/g, "").trim());
        const reqObj = {
          id: p.id,
          title: cleanTitle,
          excerpt: cleanExcerpt.substring(0, 220) + (cleanExcerpt.length > 220 ? "..." : ""),
          content: p.content?.rendered || "",
          date: p.date ? p.date.split("T")[0] : (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
          author: p._embedded?.author?.[0]?.name || "Immigration Advisory Team",
          featuredImage,
          category: "Visa Requirements",
          readTime: "4 min read",
          link: p.link || "https://blog.vietnamevisaservice.com",
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
    console.warn("[WordPress Cache] Warning fetching requirement posts:", err);
  }
  if (!requirementsCacheStore) {
    const { FALLBACK_REQUIREMENT_POSTS: FALLBACK_REQUIREMENT_POSTS2 } = await Promise.resolve().then(() => (init_wordpressApi(), wordpressApi_exports));
    requirementsCacheStore = { data: FALLBACK_REQUIREMENT_POSTS2, timestamp: Date.now() };
  }
  return requirementsCacheStore.data;
}
function warmUpAllCaches() {
  Promise.allSettled([
    fetchAndCachePosts(),
    fetchAndCacheFaqs(),
    fetchAndCacheRequirements()
  ]).catch(console.error);
}
warmUpAllCaches();
setInterval(warmUpAllCaches, 10 * 60 * 1e3);
app.get("/api/wordpress/posts", async (req, res) => {
  if (postsCacheStore) {
    if (Date.now() - postsCacheStore.timestamp > CACHE_TTL_MS) {
      fetchAndCachePosts().catch(console.error);
    }
    return res.json({ success: true, posts: postsCacheStore.data, source: "cache" });
  }
  const posts = await fetchAndCachePosts();
  return res.json({ success: true, posts, source: "fresh" });
});
app.get("/api/wordpress/faqs", async (req, res) => {
  if (faqsCacheStore) {
    if (Date.now() - faqsCacheStore.timestamp > CACHE_TTL_MS) {
      fetchAndCacheFaqs().catch(console.error);
    }
    return res.json({ success: true, faqs: faqsCacheStore.data, source: "cache" });
  }
  const faqs = await fetchAndCacheFaqs();
  return res.json({ success: true, faqs, source: "fresh" });
});
app.get("/api/wordpress/requirements", async (req, res) => {
  if (requirementsCacheStore) {
    if (Date.now() - requirementsCacheStore.timestamp > CACHE_TTL_MS) {
      fetchAndCacheRequirements().catch(console.error);
    }
    return res.json({ success: true, posts: requirementsCacheStore.data, source: "cache" });
  }
  const posts = await fetchAndCacheRequirements();
  return res.json({ success: true, posts, source: "fresh" });
});
app.get("/api/wordpress/post-by-slug", async (req, res) => {
  const slug = (req.query.slug || "").trim().toLowerCase();
  if (!slug) {
    return res.status(400).json({ success: false, error: "Slug parameter is required" });
  }
  const cachedSlug = slugPostsCacheMap.get(slug);
  if (cachedSlug) {
    return res.json({ success: true, post: cachedSlug.data, source: "cache" });
  }
  if (postsCacheStore) {
    const found = postsCacheStore.data.find((p) => p.slug && p.slug.toLowerCase() === slug);
    if (found) {
      slugPostsCacheMap.set(slug, { data: found, timestamp: Date.now() });
      return res.json({ success: true, post: found, source: "posts_cache" });
    }
  }
  if (requirementsCacheStore) {
    const found = requirementsCacheStore.data.find((p) => p.slug && p.slug.toLowerCase() === slug);
    if (found) {
      slugPostsCacheMap.set(slug, { data: found, timestamp: Date.now() });
      return res.json({ success: true, post: found, source: "requirements_cache" });
    }
  }
  try {
    const { wpBaseUrl, authHeader } = getWpCredentials();
    const postRes = await fetch(`${wpBaseUrl}/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed=true`, {
      headers: { "Authorization": authHeader, "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" },
      signal: AbortSignal.timeout(5e3)
    });
    if (postRes.ok) {
      const posts = await postRes.json();
      if (Array.isArray(posts) && posts.length > 0) {
        const p = posts[0];
        let featuredImage = "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80";
        if (p._embedded && p._embedded["wp:featuredmedia"] && p._embedded["wp:featuredmedia"][0]) {
          featuredImage = p._embedded["wp:featuredmedia"][0].source_url || featuredImage;
        }
        const rawTitle = p.title?.rendered || "Vietnam Visa Requirements";
        const cleanTitle = decodeWpHtml(rawTitle);
        const rawExcerpt = p.excerpt?.rendered || "";
        const cleanExcerpt = decodeWpHtml(rawExcerpt.replace(/<[^>]+>/g, "").trim());
        const postObj = {
          id: p.id,
          title: cleanTitle,
          excerpt: cleanExcerpt,
          content: p.content?.rendered || "",
          date: p.date ? p.date.split("T")[0] : (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
          author: p._embedded?.author?.[0]?.name || "Immigration Advisory Team",
          featuredImage,
          category: "Visa Requirements",
          readTime: "4 min read",
          link: p.link || `https://blog.vietnamevisaservice.com/${slug}/`,
          slug: p.slug || slug
        };
        slugPostsCacheMap.set(slug, { data: postObj, timestamp: Date.now() });
        return res.json({ success: true, post: postObj, source: "wordpress_rest" });
      }
    }
  } catch (err) {
    console.error("Error fetching WP post by slug:", err);
  }
  return res.status(404).json({ success: false, message: "Post not found on WordPress" });
});
app.get("/sitemap.xml", (req, res) => {
  const baseUrl = `${req.protocol}://${req.get("host")}`;
  const now = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const pages = [
    { loc: "/", priority: "1.0", changefreq: "daily" },
    { loc: "/apply-online", priority: "0.9", changefreq: "daily" },
    { loc: "/fee-calculator", priority: "0.8", changefreq: "weekly" },
    { loc: "/visa-requirements", priority: "0.9", changefreq: "weekly" },
    { loc: "/track-application", priority: "0.8", changefreq: "always" },
    { loc: "/faqs", priority: "0.7", changefreq: "weekly" },
    { loc: "/contact-us", priority: "0.6", changefreq: "monthly" }
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(
    (page) => `  <url>
    <loc>${baseUrl}${page.loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  ).join("\n")}
</urlset>`;
  res.header("Content-Type", "application/xml");
  return res.send(xml);
});
app.get("/robots.txt", (req, res) => {
  const baseUrl = `${req.protocol}://${req.get("host")}`;
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
  res.header("Content-Type", "text/plain");
  return res.send(robots);
});
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
