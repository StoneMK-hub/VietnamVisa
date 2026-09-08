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
      "AU": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-australian-citizens/",
      "NZ": "https://blog.vietnamevisaservice.com/vietnam-e-visa-for-new-zealand-citizens/",
      "GB": "https://blog.vietnamevisaservice.com/vietnam-e-visa-for-british-citizens/",
      "DE": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-german-citizens/",
      "FR": "https://blog.vietnamevisaservice.com/vietnam-e-visa-for-french-guiana-citizens/",
      "GF": "https://blog.vietnamevisaservice.com/vietnam-e-visa-for-french-guiana-citizens/",
      "ES": "https://blog.vietnamevisaservice.com/vietnam-visa-requirements-for-spanish-citizens/",
      "IT": "https://blog.vietnamevisaservice.com/vietnam-e-visa-for-italian-citizens/",
      "NL": "https://blog.vietnamevisaservice.com/vietnam-e-visa-for-dutch-citizens/",
      "BE": "https://blog.vietnamevisaservice.com/vietnam-e-visa-for-qatari-citizens/",
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

// src/data/translations.ts
function tMulti(lang, translations) {
  return translations[lang] || translations.fr || translations.de || translations.es || translations.en;
}
var init_translations = __esm({
  "src/data/translations.ts"() {
  }
});

// src/data/blogTranslations.ts
function getLocalizedBlogPost(post, lang) {
  if (!post) return post;
  if (lang === "en") return post;
  const slug = (post.slug || "").toLowerCase();
  if (BLOG_POST_TRANSLATIONS[slug]) {
    const t = BLOG_POST_TRANSLATIONS[slug];
    return {
      ...post,
      title: t.title[lang] || post.title,
      excerpt: t.excerpt[lang] || post.excerpt,
      content: t.content[lang] || post.content,
      category: t.category ? t.category[lang] : getLocalizedCategory(post.category, lang),
      readTime: getLocalizedReadTime(post.readTime, lang)
    };
  }
  let localizedTitle = post.title;
  let localizedExcerpt = post.excerpt;
  if (post.title.includes("Vietnam Visa Requirements") || slug.includes("requirements-for")) {
    const countryMatch = post.title.match(/for\s+([A-Za-z\s]+?)\s+(Citizens|Passport|202\d|$)/i);
    const country = countryMatch ? countryMatch[1].trim() : "";
    if (lang === "vi") {
      localizedTitle = `Quy \u0110\u1ECBnh & Th\u1EE7 T\u1EE5c Visa Vi\u1EC7t Nam Cho C\xF4ng D\xE2n ${country || "Qu\u1ED1c T\u1EBF"} (2026)`;
      localizedExcerpt = `H\u01B0\u1EDBng d\u1EABn xin E-Visa 30-90 ng\xE0y, th\u1EDDi h\u1EA1n h\u1ED9 chi\u1EBFu v\xE0 c\xE1c g\xF3i duy\u1EC7t visa kh\u1EA9n cho c\xF4ng d\xE2n ${country || "n\u01B0\u1EDBc ngo\xE0i"}.`;
    } else if (lang === "fr") {
      localizedTitle = `Exigences de visa pour le Vietnam pour les citoyens de ${country || "l'\xE9tranger"} (2026)`;
      localizedExcerpt = `Guide officiel 2026 sur les e-visas, exemptions et exigences pour les titulaires de passeport.`;
    } else if (lang === "de") {
      localizedTitle = `Vietnam Visum Bestimmungen f\xFCr Staatsb\xFCrger von ${country || "ausl\xE4ndischen Staaten"} (2026)`;
      localizedExcerpt = `Vollst\xE4ndiger Leitfaden zu E-Visum Richtlinien, G\xFCltigkeit und Notfalloptionen.`;
    } else if (lang === "ja") {
      localizedTitle = `${country || "\u6D77\u5916"}\u5E02\u6C11\u5411\u3051\u30D9\u30C8\u30CA\u30E0\u30D3\u30B6\u7533\u8ACB\u8981\u4EF6\u3068\u6E21\u822A\u30AC\u30A4\u30C9 (2026\u5E74)`;
      localizedExcerpt = `e-Visa\u7533\u8ACB\u624B\u9806\u3001\u30D1\u30B9\u30DD\u30FC\u30C8\u6709\u52B9\u671F\u9650\u3001\u7DCA\u6025\u767A\u7D66\u30AA\u30D7\u30B7\u30E7\u30F3\u306B\u95A2\u3059\u308B\u6700\u65B0\u30AC\u30A4\u30C9\u3002`;
    } else if (lang === "zh") {
      localizedTitle = `${country || "\u5916\u7C4D"}\u516C\u6C11 2026 \u8D8A\u5357\u7B7E\u8BC1\u7533\u8BF7\u8981\u6C42\u4E0E\u5165\u5883\u6307\u5357`;
      localizedExcerpt = `\u5173\u4E8E\u7535\u5B50\u7B7E\u8BC1\u7533\u8BF7\u6B65\u9AA4\u3001\u62A4\u7167\u6709\u6548\u671F\u53CA\u7D27\u6025\u52A0\u6025\u51FA\u7B7E\u670D\u52A1\u7684\u5B8C\u6574\u8BF4\u660E\u3002`;
    } else if (lang === "he") {
      localizedTitle = `\u05D3\u05E8\u05D9\u05E9\u05D5\u05EA \u05D5\u05D9\u05D6\u05D4 \u05DC\u05D5\u05D5\u05D9\u05D9\u05D8\u05E0\u05D0\u05DD \u05DC\u05D0\u05D6\u05E8\u05D7\u05D9 ${country || "\u05D6\u05E8\u05D9\u05DD"} (\u05E2\u05D3\u05DB\u05D5\u05DF 2026)`;
      localizedExcerpt = `\u05DE\u05D3\u05E8\u05D9\u05DA \u05E8\u05E9\u05DE\u05D9 \u05DC\u05D4\u05E0\u05E4\u05E7\u05EA \u05D5\u05D9\u05D6\u05D4 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9\u05EA, \u05EA\u05D5\u05E7\u05E3 \u05D3\u05E8\u05DB\u05D5\u05DF \u05D5\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05E0\u05E4\u05E7\u05D4 \u05D3\u05D7\u05D5\u05E4\u05D4.`;
    } else if (lang === "ko") {
      localizedTitle = `${country || "\uC678\uAD6D"} \uC2DC\uBBFC\uC744 \uC704\uD55C \uBCA0\uD2B8\uB0A8 \uBE44\uC790 \uC2E0\uCCAD \uC694\uAC74 \uBC0F \uAC00\uC774\uB4DC (2026\uB144)`;
      localizedExcerpt = `\uC804\uC790\uBE44\uC790 \uBC1C\uAE09 \uC808\uCC28, \uC5EC\uAD8C \uC720\uD6A8\uAE30\uAC04 \uBC0F \uAE34\uAE09 \uBC1C\uAE09 \uD328\uC2A4\uD2B8\uD2B8\uB799 \uC548\uB0B4.`;
    } else if (lang === "es") {
      localizedTitle = `Requisitos de Visa para Vietnam para ciudadanos de ${country || "extranjeros"} (2026)`;
      localizedExcerpt = `Gu\xEDa oficial 2026 sobre e-visas, exenciones y opciones de tr\xE1mite urgente.`;
    }
  }
  return {
    ...post,
    title: localizedTitle,
    excerpt: localizedExcerpt,
    category: getLocalizedCategory(post.category, lang),
    readTime: getLocalizedReadTime(post.readTime, lang)
  };
}
function getLocalizedCategory(cat, lang) {
  if (lang === "en") return cat || "Visa News";
  const c = (cat || "").toLowerCase();
  if (c.includes("urgent") || c.includes("blog")) {
    const map = {
      en: "Urgent Visa News",
      vi: "Tin Visa Kh\u1EA9n",
      fr: "Actualit\xE9s Visa Urgent",
      de: "Eilvisum Nachrichten",
      ja: "\u7DCA\u6025\u30D3\u30B6\u30CB\u30E5\u30FC\u30B9",
      zh: "\u52A0\u6025\u7B7E\u8BC1\u8D44\u8BAF",
      he: "\u05D7\u05D3\u05E9\u05D5\u05EA \u05D5\u05D9\u05D6\u05D4 \u05D3\u05D7\u05D5\u05E4\u05D4",
      ko: "\uAE34\uAE09 \uBE44\uC790 \uC18C\uC2DD",
      es: "Noticias Visa Urgente"
    };
    return map[lang] || cat;
  }
  if (c.includes("requirement")) {
    const map = {
      en: "Visa Requirements",
      vi: "Quy \u0110\u1ECBnh Visa",
      fr: "Exigences de Visa",
      de: "Visabestimmungen",
      ja: "\u30D3\u30B6\u7533\u8ACB\u8981\u4EF6",
      zh: "\u7B7E\u8BC1\u7533\u8BF7\u8981\u6C42",
      he: "\u05D3\u05E8\u05D9\u05E9\u05D5\u05EA \u05D5\u05D9\u05D6\u05D4",
      ko: "\uBE44\uC790 \uC694\uAC74",
      es: "Requisitos de Visa"
    };
    return map[lang] || cat;
  }
  return cat;
}
function getLocalizedReadTime(readTime, lang) {
  const mins = readTime.replace(/\D/g, "") || "4";
  const map = {
    en: `${mins} min read`,
    vi: `${mins} ph\xFAt \u0111\u1ECDc`,
    fr: `${mins} min de lecture`,
    de: `${mins} Min. Lesezeit`,
    ja: `\u8AAD\u4E86\u6642\u9593: ${mins}\u5206`,
    zh: `\u9605\u8BFB\u65F6\u95F4 ${mins} \u5206\u949F`,
    he: `\u05E7\u05E8\u05D9\u05D0\u05D4 \u05D1-${mins} \u05D3\u05E7\u05D5\u05EA`,
    ko: `${mins}\uBD84 \uC18C\uC694`,
    es: `${mins} min de lectura`
  };
  return map[lang] || readTime;
}
var BLOG_POST_TRANSLATIONS;
var init_blogTranslations = __esm({
  "src/data/blogTranslations.ts"() {
    BLOG_POST_TRANSLATIONS = {
      "urgent-1-hour-vietnam-evisa-guide-2026": {
        title: {
          en: "Urgent 1-Hour Vietnam E-Visa Guide for Emergency Flights in 2026",
          vi: "H\u01B0\u1EDBng D\u1EABn Xin E-Visa Vi\u1EC7t Nam Kh\u1EA9n 1 Gi\u1EDD Cho Chuy\u1EBFn Bay G\u1EA5p 2026",
          fr: "Guide e-Visa d'urgence Vietnam 1 heure pour vols urgents en 2026",
          de: "Anleitung f\xFCr Notfall-Vietnam-E-Visum in 1 Stunde f\xFCr dringende Fl\xFCge 2026",
          ja: "2026\u5E74 \u7DCA\u6025\u30D5\u30E9\u30A4\u30C8\u5411\u30511\u6642\u9593\u30D9\u30C8\u30CA\u30E0e-Visa\u767A\u7D66\u30AC\u30A4\u30C9",
          zh: "2026 \u7D27\u6025\u822A\u73ED 1 \u5C0F\u65F6\u52A0\u6025\u8D8A\u5357\u7535\u5B50\u7B7E\u8BC1\u5B8C\u5168\u6307\u5357",
          he: "\u05DE\u05D3\u05E8\u05D9\u05DA \u05DC\u05D4\u05E0\u05E4\u05E7\u05EA \u05D5\u05D9\u05D6\u05D4 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9\u05EA \u05D3\u05D7\u05D5\u05E4\u05D4 \u05DC\u05D5\u05D9\u05D9\u05D8\u05E0\u05D0\u05DD \u05EA\u05D5\u05DA \u05E9\u05E2\u05D4 \u05DC\u05D8\u05D9\u05E1\u05D5\u05EA \u05D7\u05D9\u05E8\u05D5\u05DD 2026",
          ko: "2026\uB144 \uAE34\uAE09 \uD56D\uACF5\uD3B8\uC744 \uC704\uD55C 1\uC2DC\uAC04 \uBCA0\uD2B8\uB0A8 \uC804\uC790\uBE44\uC790 \uBC1C\uAE09 \uAC00\uC774\uB4DC",
          es: "Gu\xEDa e-Visa de emergencia para Vietnam en 1 hora para vuelos urgentes 2026"
        },
        excerpt: {
          en: "Flight departing soon? Step-by-step breakdown of how our fast-track team processes emergency Vietnam e-visas within 60 to 120 minutes around the clock.",
          vi: "Chuy\u1EBFn bay s\u1EAFp kh\u1EDFi h\xE0nh? H\u01B0\u1EDBng d\u1EABn chi ti\u1EBFt quy tr\xECnh x\u1EED l\xFD c\xF4ng v\u0103n E-Visa kh\u1EA9n c\u1EA5p trong 60 \u0111\u1EBFn 120 ph\xFAt 24/7.",
          fr: "Vol imminent ? D\xE9couvrez comment notre \xE9quipe traite les e-visas d'urgence pour le Vietnam en 60 \xE0 120 minutes 24h/24.",
          de: "Flug steht bevor? Wie unser Express-Team Notfall-Visumsantr\xE4ge innerhalb von 60 bis 120 Minuten rund um die Uhr bearbeitet.",
          ja: "\u30D5\u30E9\u30A4\u30C8\u304C\u76EE\u524D\u306B\uFF1F\u5F53\u793E\u306E\u7279\u6025\u30C1\u30FC\u30E0\u304C24\u6642\u9593\u4F53\u5236\u306760\u5206\u301C120\u5206\u4EE5\u5185\u306B\u7DCA\u6025\u30D9\u30C8\u30CA\u30E0\u30D3\u30B6\u3092\u767A\u7D66\u3059\u308B\u624B\u9806\u3002",
          zh: "\u822A\u73ED\u5373\u5C06\u5728\u6570\u5C0F\u65F6\u5185\u8D77\u98DE\uFF1F\u4E86\u89E3\u6211\u4EEC 24/7 \u5168\u5929\u5019\u56E2\u961F\u5982\u4F55\u5728 60 \u81F3 120 \u5206\u949F\u5185\u5904\u7406\u7D27\u6025\u8D8A\u5357\u7535\u5B50\u7B7E\u8BC1\u3002",
          he: "\u05D4\u05D8\u05D9\u05E1\u05D4 \u05D9\u05D5\u05E6\u05D0\u05EA \u05D1\u05E7\u05E8\u05D5\u05D1? \u05DB\u05D9\u05E6\u05D3 \u05D4\u05E6\u05D5\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5 \u05DE\u05E0\u05E4\u05D9\u05E7 \u05D5\u05D9\u05D6\u05D4 \u05D3\u05D7\u05D5\u05E4\u05D4 \u05DC\u05D5\u05D9\u05D9\u05D8\u05E0\u05D0\u05DD \u05EA\u05D5\u05DA 60 \u05E2\u05D3 120 \u05D3\u05E7\u05D5\u05EA \u05E1\u05D1\u05D9\u05D1 \u05D4\u05E9\u05E2\u05D5\u05DF.",
          ko: "\uCD9C\uAD6D \uC9C1\uC804\uC774\uC2E0\uAC00\uC694? 24\uC2DC\uAC04 \uB2F9\uC0AC \uAE34\uAE09 \uC804\uB2F4\uD300\uC774 60\uBD84~120\uBD84 \uC774\uB0B4\uC5D0 \uBCA0\uD2B8\uB0A8 \uC804\uC790\uBE44\uC790\uB97C \uBC1C\uAE09\uD558\uB294 \uBC29\uBC95.",
          es: "\xBFSu vuelo sale pronto? Conozca c\xF3mo nuestro equipo procesa e-visas de emergencia para Vietnam en 60 a 120 minutos las 24 horas."
        },
        content: {
          en: `
        <p>Boarding a flight to Vietnam only to discover your e-visa is pending or expired can be overwhelming. Fortunately, Vietnam Immigration enables expedited 1-hour and 4-hour emergency processing under official regulations.</p>
        <h3>Key Steps for Emergency Processing:</h3>
        <ul>
          <li><strong>Verify Passport Validity:</strong> Ensure your passport has at least 6 months validity from arrival date.</li>
          <li><strong>Provide Flight Ticket Details:</strong> Submit your flight booking confirmation with the airline PNR code.</li>
          <li><strong>Clear Portrait & Passport Photo:</strong> Upload high-resolution scans without glass reflections.</li>
        </ul>
        <p>Our team directly liaises with Vietnam Immigration Officers at Hanoi (Noi Bai), Ho Chi Minh City (Tan Son Nhat), and Da Nang international airports to ensure approval letters are issued before departure.</p>
      `,
          vi: `
        <p>Chu\u1EA9n b\u1ECB l\xEAn m\xE1y bay \u0111i Vi\u1EC7t Nam m\u1EDBi ph\xE1t hi\u1EC7n e-visa ch\u01B0a ra ho\u1EB7c b\u1ECB sai th\xF4ng tin l\xE0 t\xECnh hu\u1ED1ng v\xF4 c\xF9ng c\u0103ng th\u1EB3ng. R\u1EA5t may m\u1EAFn, C\u1EE5c Qu\u1EA3n l\xFD Xu\u1EA5t nh\u1EADp c\u1EA3nh Vi\u1EC7t Nam cho ph\xE9p x\u1EED l\xFD c\xF4ng v\u0103n kh\u1EA9n 1 gi\u1EDD v\xE0 4 gi\u1EDD theo quy \u0111\u1ECBnh hi\u1EC7n h\xE0nh.</p>
        <h3>C\xE1c B\u01B0\u1EDBc X\u1EED L\xFD E-Visa Kh\u1EA9n C\u1EA5p:</h3>
        <ul>
          <li><strong>Ki\u1EC3m tra th\u1EDDi h\u1EA1n h\u1ED9 chi\u1EBFu:</strong> \u0110\u1EA3m b\u1EA3o h\u1ED9 chi\u1EBFu c\xF2n h\u1EA1n \xEDt nh\u1EA5t 6 th\xE1ng k\u1EC3 t\u1EEB ng\xE0y nh\u1EADp c\u1EA3nh.</li>
          <li><strong>Cung c\u1EA5p th\xF4ng tin v\xE9 m\xE1y bay:</strong> G\u1EEDi x\xE1c nh\u1EADn \u0111\u1EB7t v\xE9 c\xF3 m\xE3 PNR chuy\u1EBFn bay.</li>
          <li><strong>\u1EA2nh ch\xE2n dung & h\u1ED9 chi\u1EBFu chu\u1EA9n:</strong> T\u1EA3i l\xEAn b\u1EA3n scan h\u1ED9 chi\u1EBFu r\xF5 n\xE9t v\xE0 \u1EA3nh ph\xF4ng tr\u1EAFng kh\xF4ng l\xF3a.</li>
        </ul>
        <p>\u0110\u1ED9i ng\u0169 chuy\xEAn vi\xEAn h\u1ED7 tr\u1EE3 l\xE0m vi\u1EC7c tr\u1EF1c ti\u1EBFp v\u1EDBi C\xE1n b\u1ED9 Xu\u1EA5t Nh\u1EADp C\u1EA3nh t\u1EA1i c\xE1c s\xE2n bay qu\u1ED1c t\u1EBF N\u1ED9i B\xE0i (H\xE0 N\u1ED9i), T\xE2n S\u01A1n Nh\u1EA5t (TP.HCM) v\xE0 \u0110\xE0 N\u1EB5ng \u0111\u1EC3 \u0111\u1EA3m b\u1EA3o c\u1EA5p ph\xE9p k\u1ECBp gi\u1EDD bay.</p>
      `,
          fr: `
        <p>D\xE9couvrir que votre e-visa est en attente juste avant d'embarquer pour le Vietnam peut \xEAtre stressant. Heureusement, l'Immigration vietnamienne permet le traitement d'urgence en 1h et 4h.</p>
        <h3>\xC9tapes cl\xE9s pour le traitement d'urgence :</h3>
        <ul>
          <li><strong>V\xE9rifier la validit\xE9 du passeport :</strong> Au moins 6 mois de validit\xE9 apr\xE8s la date d'arriv\xE9e.</li>
          <li><strong>Fournir le billet d'avion :</strong> Confirmation de r\xE9servation avec code PNR.</li>
          <li><strong>Photos conformes :</strong> Scans haute r\xE9solution sans reflet.</li>
        </ul>
        <p>Notre \xE9quipe communique directement avec les officiels aux a\xE9roports de Hano\xEF, Ho Chi Minh-Ville et Da Nang pour garantir l'approbation avant le d\xE9collage.</p>
      `,
          de: `
        <p>Kurz vor dem Abflug nach Vietnam festzustellen, dass das E-Visum noch aussteht, ist extrem stressig. Gl\xFCcklicherweise bietet die vietnamesische Einwanderungsbeh\xF6rde einen 1-Stunden- und 4-Stunden-Notfall-Express-Service an.</p>
        <h3>Wichtige Schritte f\xFCr die Eilbearbeitung:</h3>
        <ul>
          <li><strong>Passg\xFCltigkeit pr\xFCfen:</strong> Mindestens 6 Monate Restg\xFCltigkeit ab Einreisedatum.</li>
          <li><strong>Flugticket vorlegen:</strong> Buchungsbest\xE4tigung mit PNR-Code einreichen.</li>
          <li><strong>Keine spiegelnden Fotos:</strong> Hohe Aufl\xF6sung ohne Brillenreflexionen.</li>
        </ul>
      `,
          ja: `
        <p>\u30D9\u30C8\u30CA\u30E0\u884C\u304D\u306E\u642D\u4E57\u76F4\u524D\u306Be-Visa\u304C\u672A\u767A\u7D66\u3067\u3042\u308B\u3053\u3068\u306B\u6C17\u3065\u304F\u306E\u306F\u975E\u5E38\u306B\u6DF1\u523B\u3067\u3059\u3002\u30D9\u30C8\u30CA\u30E0\u51FA\u5165\u56FD\u7BA1\u7406\u5C40\u3067\u306F\u898F\u5B9A\u306B\u57FA\u3065\u304D\u30011\u6642\u9593\u304A\u3088\u30734\u6642\u9593\u306E\u7DCA\u6025\u7279\u6025\u767A\u7D66\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u3059\u3002</p>
        <h3>\u7DCA\u6025\u7533\u8ACB\u306E\u91CD\u8981\u30B9\u30C6\u30C3\u30D7:</h3>
        <ul>
          <li><strong>\u30D1\u30B9\u30DD\u30FC\u30C8\u6709\u52B9\u671F\u9650\u306E\u78BA\u8A8D:</strong> \u5165\u56FD\u4E88\u5B9A\u65E5\u304B\u30896\u30F6\u6708\u4EE5\u4E0A\u306E\u6B8B\u5B58\u671F\u9593\u304C\u5FC5\u8981\u3067\u3059\u3002</li>
          <li><strong>\u822A\u7A7A\u5238\u60C5\u5831\u306E\u63D0\u793A:</strong> PNR\u30B3\u30FC\u30C9\u4ED8\u304D\u306E\u4E88\u7D04\u78BA\u8A8D\u66F8\u3092\u63D0\u51FA\u3057\u3066\u304F\u3060\u3055\u3044\u3002</li>
          <li><strong>\u9BAE\u660E\u306A\u9854\u5199\u771F\u30FB\u30D1\u30B9\u30DD\u30FC\u30C8\u30B9\u30AD\u30E3\u30F3:</strong> \u53CD\u5C04\u306E\u306A\u3044\u9AD8\u89E3\u50CF\u5EA6\u753B\u50CF\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3002</li>
        </ul>
      `,
          zh: `
        <p>\u767B\u673A\u524D\u7A81\u7136\u53D1\u73B0\u8D8A\u5357\u7535\u5B50\u7B7E\u8BC1\u5C1A\u672A\u51FA\u7B7E\u6216\u586B\u5199\u9519\u8BEF\uFF1F\u5E78\u8FD0\u7684\u662F\uFF0C\u6839\u636E\u8D8A\u5357\u51FA\u5165\u5883\u7BA1\u7406\u5C40\u89C4\u5B9A\uFF0C\u652F\u6301 1 \u5C0F\u65F6\u4E0E 4 \u5C0F\u65F6\u52A0\u6025\u7279\u6279\u6D41\u7A0B\u3002</p>
        <h3>\u52A0\u6025\u51FA\u7B7E\u6838\u5FC3\u6B65\u9AA4\uFF1A</h3>
        <ul>
          <li><strong>\u6838\u5BF9\u62A4\u7167\u6709\u6548\u671F\uFF1A</strong> \u786E\u4FDD\u5165\u5883\u65E5\u8D77\u7B97\u5269\u4F59\u6709\u6548\u671F 6 \u4E2A\u6708\u4EE5\u4E0A\u3002</li>
          <li><strong>\u63D0\u4F9B\u822A\u73ED\u673A\u7968\uFF1A</strong> \u63D0\u4EA4\u5E26\u6709 PNR \u7F16\u53F7\u7684\u822A\u73ED\u884C\u7A0B\u786E\u8BA4\u5355\u3002</li>
          <li><strong>\u5408\u89C4\u7167\u7247\u4E0E\u62A4\u7167\u626B\u63CF\u4EF6\uFF1A</strong> \u4E0A\u4F20\u6E05\u6670\u65E0\u53CD\u5149\u7684\u767D\u5E95\u8BC1\u4EF6\u7167\u4E0E\u62A4\u7167\u9996\u9875\u3002</li>
        </ul>
      `,
          he: `
        <p>\u05D2\u05D9\u05DC\u05D5\u05D9 \u05E9\u05D5\u05D5\u05D9\u05D6\u05D4 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9\u05EA \u05DE\u05E2\u05D5\u05DB\u05D1\u05EA \u05E8\u05D2\u05E2 \u05DC\u05E4\u05E0\u05D9 \u05D4\u05E2\u05DC\u05D9\u05D9\u05D4 \u05DC\u05DE\u05D8\u05D5\u05E1 \u05E2\u05DC\u05D5\u05DC \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05DC\u05D7\u05D9\u05E5. \u05DC\u05DE\u05E8\u05D1\u05D4 \u05D4\u05DE\u05D6\u05DC, \u05E8\u05E9\u05D5\u05D9\u05D5\u05EA \u05D4\u05D4\u05D2\u05D9\u05E8\u05D4 \u05D1\u05D5\u05D5\u05D9\u05D9\u05D8\u05E0\u05D0\u05DD \u05DE\u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05D8\u05D9\u05E4\u05D5\u05DC \u05D7\u05D9\u05E8\u05D5\u05DD \u05EA\u05D5\u05DA \u05E9\u05E2\u05D4 \u05D5-4 \u05E9\u05E2\u05D5\u05EA.</p>
        <h3>\u05E9\u05DC\u05D1\u05D9\u05DD \u05E7\u05E8\u05D9\u05D8\u05D9\u05D9\u05DD \u05DC\u05D8\u05D9\u05E4\u05D5\u05DC \u05D3\u05D7\u05D5\u05E3:</h3>
        <ul>
          <li><strong>\u05D1\u05D3\u05D9\u05E7\u05EA \u05EA\u05D5\u05E7\u05E3 \u05D3\u05E8\u05DB\u05D5\u05DF:</strong> \u05EA\u05D5\u05E7\u05E3 \u05E9\u05DC 6 \u05D7\u05D5\u05D3\u05E9\u05D9\u05DD \u05DC\u05E4\u05D7\u05D5\u05EA \u05DE\u05D9\u05D5\u05DD \u05D4\u05D4\u05D2\u05E2\u05D4.</li>
          <li><strong>\u05E4\u05E8\u05D8\u05D9 \u05DB\u05E8\u05D8\u05D9\u05E1 \u05D8\u05D9\u05E1\u05D4:</strong> \u05D4\u05D2\u05E9\u05EA \u05D0\u05D9\u05E9\u05D5\u05E8 \u05D4\u05D6\u05DE\u05E0\u05D4 \u05E2\u05DD \u05E7\u05D5\u05D3 PNR.</li>
          <li><strong>\u05EA\u05DE\u05D5\u05E0\u05D4 \u05D5\u05D3\u05E8\u05DB\u05D5\u05DF \u05D1\u05E8\u05D5\u05E8\u05D9\u05DD:</strong> \u05D4\u05E2\u05DC\u05D0\u05EA \u05E1\u05E8\u05D9\u05E7\u05D4 \u05D1\u05D0\u05D9\u05DB\u05D5\u05EA \u05D2\u05D1\u05D5\u05D4\u05D4 \u05DC\u05DC\u05D0 \u05D4\u05D7\u05D6\u05E8\u05D9 \u05D0\u05D5\u05E8.</li>
        </ul>
      `,
          ko: `
        <p>\uBCA0\uD2B8\uB0A8 \uD0D1\uC2B9 \uC9C1\uC804 \uC804\uC790\uBE44\uC790\uAC00 \uBC1C\uAE09\uB418\uC9C0 \uC54A\uC740 \uAC83\uC744 \uD655\uC778\uD558\uC168\uB098\uC694? \uBCA0\uD2B8\uB0A8 \uCD9C\uC785\uAD6D\uAD00\uB9AC\uAD6D\uC740 \uAE34\uAE09 1\uC2DC\uAC04 \uBC0F 4\uC2DC\uAC04 \uD328\uC2A4\uD2B8\uD2B8\uB799 \uC2B9\uC778 \uC808\uCC28\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4.</p>
        <h3>\uAE34\uAE09 \uBC1C\uAE09 \uD544\uC218 \uB2E8\uACC4:</h3>
        <ul>
          <li><strong>\uC5EC\uAD8C \uC720\uD6A8\uAE30\uAC04 \uD655\uC778:</strong> \uC785\uAD6D\uC77C \uAE30\uC900 6\uAC1C\uC6D4 \uC774\uC0C1 \uC794\uC5EC \uC720\uD6A8\uAE30\uAC04 \uD544\uC694.</li>
          <li><strong>\uD56D\uACF5\uAD8C \uC815\uBCF4 \uC81C\uCD9C:</strong> PNR \uCF54\uB4DC\uAC00 \uD3EC\uD568\uB41C E-\uD2F0\uCF13 \uC81C\uCD9C.</li>
          <li><strong>\uC5EC\uAD8C \uBC0F \uC120\uBA85\uD55C \uC0AC\uC9C4:</strong> \uBC18\uC0AC \uC5C6\uB294 \uACE0\u05D4\uC0C1\uB3C4 \uBC31\uC0C9 \uBC30\uACBD \uC0AC\uC9C4 \uC81C\uCD9C.</li>
        </ul>
      `,
          es: `
        <p>Descubrir que su e-visa est\xE1 pendiente justo antes de abordar su vuelo a Vietnam puede ser estresante. Afortunadamente, la Inmigraci\xF3n de Vietnam permite el procesamiento de emergencia en 1 y 4 horas.</p>
        <h3>Pasos clave para el tr\xE1mite de emergencia:</h3>
        <ul>
          <li><strong>Verificar validez del pasaporte:</strong> Al menos 6 meses de vigencia a la llegada.</li>
          <li><strong>Presentar boleto de avi\xF3n:</strong> Confirmaci\xF3n con c\xF3digo PNR de la aerol\xEDnea.</li>
          <li><strong>Foto de pasaporte clara:</strong> Subir escaneos de alta resoluci\xF3n sin reflejos.</li>
        </ul>
      `
        }
      },
      "top-5-evisa-photo-errors-delays": {
        title: {
          en: "Top 5 Common E-Visa Photo Errors That Cause Airport Delays",
          vi: "Top 5 L\u1ED7i \u1EA2nh H\u1ED9 Chi\u1EBFu Khi\u1EBFn E-Visa Vi\u1EC7t Nam B\u1ECB T\u1EEB Ch\u1ED1i Ho\u1EB7c Ch\u1EADm Tr\u1EC5",
          fr: "Top 5 des erreurs de photo e-Visa causant des retards \xE0 l'a\xE9roport",
          de: "Top 5 Foto-Fehler beim Vietnam E-Visum und wie man sie vermeidet",
          ja: "\u30D9\u30C8\u30CA\u30E0e-Visa\u5199\u771F\u3067\u3088\u304F\u3042\u308B5\u3064\u306E rejection \u30A8\u30E9\u30FC\u3068\u5BFE\u7B56",
          zh: "\u5BFC\u81F4\u8D8A\u5357\u7535\u5B50\u7B7E\u8BC1\u5EF6\u8FDF\u4E0E\u9000\u4EF6\u7684 5 \u5927\u7167\u7247\u5E38\u89C1\u9519\u8BEF",
          he: "5 \u05E9\u05D2\u05D9\u05D0\u05D5\u05EA \u05D4\u05EA\u05DE\u05D5\u05E0\u05D4 \u05D4\u05E9\u05DB\u05D9\u05D7\u05D5\u05EA \u05D1\u05D9\u05D5\u05EA\u05E8 \u05D4\u05D2\u05D5\u05E8\u05DE\u05D5\u05EA \u05DC\u05E2\u05D9\u05DB\u05D5\u05D1\u05D9\u05DD \u05D1\u05D5\u05D9\u05D6\u05D4 \u05DC\u05D5\u05D5\u05D9\u05D9\u05D8\u05E0\u05D0\u05DD",
          ko: "\uBCA0\uD2B8\uB0A8 \uC804\uC790\uBE44\uC790 \uBC1C\uAE09 \uC9C0\uC5F0\uC744 \uC720\uBC1C\uD558\uB294 5\uAC00\uC9C0 \uC5EC\uAD8C \uC0AC\uC9C4 \uC2E4\uC218",
          es: "Top 5 errores en fotos de e-Visa que causan retrasos en el aeropuerto"
        },
        excerpt: {
          en: "Avoid rejection and weekend delays by following official 2026 photo specifications for Vietnam e-visa applications.",
          vi: "Tr\xE1nh b\u1ECB tr\u1EA3 l\u1EA1i h\u1ED3 s\u01A1 v\xE0 tr\u1EC5 chuy\u1EBFn bay b\u1EB1ng c\xE1ch tu\xE2n th\u1EE7 chu\u1EA9n \u1EA3nh h\u1ED9 chi\u1EBFu xu\u1EA5t nh\u1EADp c\u1EA3nh 2026.",
          fr: "\xC9vitez le rejet de votre dossier en suivant les sp\xE9cifications officielles de photo 2026.",
          de: "Vermeiden Sie Ablehnungen durch die Einhaltung der offiziellen Fotovorschriften 2026.",
          ja: "\u516C\u5F0F\u306E2026\u5E74\u30D9\u30C8\u30CA\u30E0\u30D3\u30B6\u5199\u771F\u898F\u683C\u306B\u5F93\u3063\u3066\u3001\u5BE9\u67FB\u306E\u9045\u5EF6\u3084\u811A\u4E0B\u3092\u9632\u304E\u307E\u3057\u3087\u3046\u3002",
          zh: "\u9075\u5FAA 2026 \u5E74\u5B98\u65B9\u89C4\u8303\u7167\u7247\u8981\u6C42\uFF0C\u907F\u514D\u7B7E\u8BC1\u7533\u8BF7\u88AB\u9000\u56DE\u6216\u5EF6\u8BEF\u3002",
          he: "\u05DE\u05E0\u05E2 \u05D3\u05D7\u05D9\u05D9\u05D4 \u05E9\u05DC \u05D4\u05D1\u05E7\u05E9\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05D4\u05E7\u05E4\u05D3\u05D4 \u05E2\u05DC \u05D3\u05E8\u05D9\u05E9\u05D5\u05EA \u05D4\u05EA\u05DE\u05D5\u05E0\u05D4 \u05D4\u05E8\u05E9\u05DE\u05D9\u05D5\u05EA \u05DC\u05E9\u05E0\u05EA 2026.",
          ko: "2026\uB144 \uACF5\uC2DD \uBCA0\uD2B8\uB0A8 \uC5EC\uAD8C \uADDC\uACA9\uC744 \uC900\uC218\uD558\uC5EC \uC804\uC790\uBE44\uC790 \uAC70\uC808 \uBC0F \uC9C0\uC5F0\uC744 \uC608\uBC29\uD558\uC138\uC694.",
          es: "Evite rechazos siguiendo las especificaciones oficiales de fotograf\xEDa para 2026."
        },
        content: {
          en: `
        <p>Over 70% of delayed Vietnam e-visa applications are caused by non-compliant passport scan uploads or portrait photos. Immigration automated verification systems reject improper submissions immediately.</p>
        <h3>Photo Compliance Checklist:</h3>
        <ul>
          <li><strong>Plain White Background:</strong> No shadows, patterns, or tinted backgrounds.</li>
          <li><strong>Full Face Facing Camera:</strong> Both ears visible, neutral expression, no eyeglasses.</li>
          <li><strong>High Resolution:</strong> JPEG/PNG format with clear facial features.</li>
        </ul>
      `,
          vi: `
        <p>H\u01A1n 70% h\u1ED3 s\u01A1 xin e-Visa Vi\u1EC7t Nam b\u1ECB ch\u1EADm tr\u1EC5 l\xE0 do t\u1EA3i l\xEAn \u1EA3nh scan h\u1ED9 chi\u1EBFu ho\u1EB7c \u1EA3nh ch\xE2n dung kh\xF4ng \u0111\u1EA1t chu\u1EA9n. H\u1EC7 th\u1ED1ng ki\u1EC3m duy\u1EC7t t\u1EF1 \u0111\u1ED9ng c\u1EE7a C\u1EE5c Xu\u1EA5t nh\u1EADp c\u1EA3nh s\u1EBD t\u1EEB ch\u1ED1i ngay l\u1EADp t\u1EE9c.</p>
        <h3>Checklist \u1EA2nh H\u1EE3p L\u1EC7:</h3>
        <ul>
          <li><strong>Ph\xF4ng n\u1EC1n tr\u1EAFng phau:</strong> Kh\xF4ng c\xF3 b\xF3ng, hoa v\u0103n hay ph\xF4ng m\xE0u.</li>
          <li><strong>Nh\xECn th\u1EB3ng v\xE0o \u1ED1ng k\xEDnh:</strong> R\xF5 2 tai, bi\u1EC3u c\u1EA3m t\u1EF1 nhi\xEAn, kh\xF4ng \u0111eo k\xEDnh r\xE2m.</li>
          <li><strong>\u0110\u1ED9 ph\xE2n gi\u1EA3i cao:</strong> \u0110\u1ECBnh d\u1EA1ng JPEG/PNG s\u1EAFc n\xE9t.</li>
        </ul>
      `,
          fr: `
        <p>Plus de 70% des demandes d'e-visa retard\xE9es sont dues \xE0 des photos non conformes. Le syst\xE8me d'inspection rejette automatiquement les images incorrectes.</p>
        <h3>Liste de v\xE9rification photo :</h3>
        <ul>
          <li><strong>Fond blanc uni :</strong> Sans ombres ni motifs.</li>
          <li><strong>Visage de face :</strong> Oreilles visibles, expression neutre.</li>
          <li><strong>Haute r\xE9solution :</strong> Format JPEG/PNG clair.</li>
        </ul>
      `,
          de: `
        <p>\xDCber 70% der verz\xF6gerten E-Visa-Antr\xE4ge f\xFCr Vietnam sind auf fehlerhafte Fotos zur\xFCckzuf\xFChren.</p>
        <h3>Checkliste f\xFCr das Foto:</h3>
        <ul>
          <li><strong>Reiner wei\xDFer Hintergrund:</strong> Keine Schatten oder Farben.</li>
          <li><strong>Gesicht gerade:</strong> Beide Ohren sichtbar, ohne Sonnenbrille.</li>
          <li><strong>Hohe Aufl\xF6sung:</strong> Scharfes JPEG/PNG.</li>
        </ul>
      `,
          ja: `
        <p>\u30D9\u30C8\u30CA\u30E0e-Visa\u5BE9\u67FB\u9045\u5EF6\u306E70%\u4EE5\u4E0A\u304C\u3001\u898F\u683C\u5916\u306E\u9854\u5199\u771F\u3084\u30D1\u30B9\u30DD\u30FC\u30C8\u30B9\u30AD\u30E3\u30F3\u304C\u539F\u56E0\u3067\u3059\u3002</p>
        <h3>\u5199\u771F\u30C1\u30A7\u30C3\u30AF\u30EA\u30B9\u30C8:</h3>
        <ul>
          <li><strong>\u7121\u5730\u306E\u767D\u80CC\u666F:</strong> \u5F71\u3084\u67C4\u3001\u80CC\u666F\u8272\u304C\u306A\u3044\u3053\u3068\u3002</li>
          <li><strong>\u6B63\u9762\u3092\u5411\u3044\u305F\u9854:</strong> \u4E21\u8033\u304C\u898B\u3048\u3001\u30E1\u30AC\u30CD\u306A\u3057\u3002</li>
          <li><strong>\u9AD8\u89E3\u50CF\u5EA6:</strong> \u9BAE\u660E\u306AJPEG/PNG\u753B\u50CF\u3002</li>
        </ul>
      `,
          zh: `
        <p>\u8D85\u8FC7 70% \u7684\u8D8A\u5357\u7535\u5B50\u7B7E\u8BC1\u5EF6\u8BEF\u90FD\u662F\u7531\u4E8E\u4E0A\u4F20\u7684\u7167\u7247\u6216\u62A4\u7167\u626B\u63CF\u4EF6\u4E0D\u7B26\u5408\u8981\u6C42\u9020\u6210\u7684\u3002</p>
        <h3>\u5408\u89C4\u7167\u7247 Checklist\uFF1A</h3>
        <ul>
          <li><strong>\u7EAF\u767D\u80CC\u666F\uFF1A</strong> \u65E0\u9634\u5F71\u3001\u65E0\u56FE\u6848\u6216\u5E26\u8272\u80CC\u666F\u3002</li>
          <li><strong>\u9762\u90E8\u6B63\u5BF9\u955C\u5934\uFF1A</strong> \u53CC\u8033\u53EF\u89C1\u3001\u8868\u60C5\u81EA\u7136\u3001\u4E0D\u6234\u773C\u955C\u3002</li>
          <li><strong>\u9AD8\u6E05\u5206\u8FA8\u7387\uFF1A</strong> \u6E05\u6670\u7684 JPEG/PNG \u683C\u5F0F\u3002</li>
        </ul>
      `,
          he: `
        <p>\u05DC\u05DE\u05E2\u05DC\u05D4 \u05DE-70% \u05DE\u05D4\u05D1\u05E7\u05E9\u05D5\u05EA \u05D4\u05DE\u05E2\u05D5\u05DB\u05D1\u05D5\u05EA \u05E0\u05D2\u05E8\u05DE\u05D5\u05EA \u05D1\u05E9\u05DC \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05E9\u05D0\u05D9\u05E0\u05DF \u05E2\u05D5\u05DE\u05D3\u05D5\u05EA \u05D1\u05EA\u05E7\u05DF.</p>
        <h3>\u05E8\u05E9\u05D9\u05DE\u05EA \u05EA\u05D9\u05D5\u05D2 \u05DC\u05EA\u05DE\u05D5\u05E0\u05D4:</h3>
        <ul>
          <li><strong>\u05E8\u05E7\u05E2 \u05DC\u05D1\u05DF \u05D7\u05DC\u05E7:</strong> \u05DC\u05DC\u05D0 \u05E6\u05DC\u05DC\u05D9\u05DD \u05D0\u05D5 \u05D3\u05D5\u05D2\u05DE\u05D0\u05D5\u05EA.</li>
          <li><strong>\u05E4\u05E0\u05D9\u05DD \u05DE\u05D5\u05DC \u05D4\u05DE\u05E6\u05DC\u05DE\u05D4:</strong> \u05E9\u05EA\u05D9 \u05D0\u05D5\u05D6\u05E0\u05D9\u05D9\u05DD \u05D2\u05DC\u05D5\u05D9\u05D5\u05EA, \u05DC\u05DC\u05D0 \u05DE\u05E9\u05E7\u05E4\u05D9\u05D9\u05DD.</li>
          <li><strong>\u05E8\u05D6\u05D5\u05DC\u05D5\u05E6\u05D9\u05D4 \u05D2\u05D1\u05D5\u05D4\u05D4:</strong> \u05E7\u05D5\u05D1\u05E5 JPEG/PNG \u05D1\u05E8\u05D5\u05E8.</li>
        </ul>
      `,
          ko: `
        <p>\uBCA0\uD2B8\uB0A8 \uC804\uC790\uBE44\uC790 \uC2B9\uC778 \uC9C0\uC5F0 \uC0AC\uC720\uC758 70% \uC774\uC0C1\uC774 \uC5EC\uAD8C \uC2A4\uCE94\uBCF8 \uBC0F \uC99D\uBA85\uC0AC\uC9C4 \uADDC\uACA9 \uBBF8\uB2EC \uB54C\uBB38\uC785\uB2C8\uB2E4.</p>
        <h3>\uC0AC\uC9C4 \uADDC\uACA9 \uCCB4\uD06C\uB9AC\uC2A4\uD2B8:</h3>
        <ul>
          <li><strong>\uC21C\uBC31\uC0C9 \uBC30\uACBD:</strong> \uADF8\uB9BC\uC790, \uD328\uD134, \uC0C9\uC0C1 \uBC30\uACBD \uBD88\uAC00.</li>
          <li><strong>\uC815\uBA74 \uC8FC\uC2DC:</strong> \uC591\uCABD \uADC0 \uB178\uCD9C, \uC548\uACBD \uBBF8\uCC29\uC6A9.</li>
          <li><strong>\uACE0\uD654\uC9C8:</strong> \uC120\uBA85\uD55C JPEG/PNG \uD3EC\uB9F7.</li>
        </ul>
      `,
          es: `
        <p>M\xE1s del 70% de las solicitudes con retraso se deben a fotos de pasaporte que no cumplen con los requisitos.</p>
        <h3>Lista de verificaci\xF3n:</h3>
        <ul>
          <li><strong>Fondo blanco puro:</strong> Sin sombras ni estampados.</li>
          <li><strong>Rostro de frente:</strong> Orejas visibles, sin gafas de sol.</li>
          <li><strong>Alta resoluci\xF3n:</strong> Formato JPEG/PNG n\xEDtido.</li>
        </ul>
      `
        }
      },
      "weekend-holiday-urgent-vietnam-visa": {
        title: {
          en: "How to Expedite Vietnam E-Visa Approval on Weekends & Public Holidays",
          vi: "C\xE1ch L\xE0m E-Visa Vi\u1EC7t Nam Kh\u1EA9n V\xE0o Th\u1EE9 7, Ch\u1EE7 Nh\u1EADt & Ng\xE0y L\u1EC5 Qu\u1ED1c Kh\xE1nh",
          fr: "Comment obtenir un e-Visa Vietnam d'urgence les week-ends et jours f\xE9ri\xE9s",
          de: "Notfall-Visum f\xFCr Vietnam am Wochenende & an Feiertagen beantragen",
          ja: "\u571F\u65E5\u30FB\u795D\u65E5\u306B\u30D9\u30C8\u30CA\u30E0\u7DCA\u6025\u30D3\u30B6\u3092\u767A\u7D66\u7533\u8ACB\u3059\u308B\u65B9\u6CD5",
          zh: "\u5468\u672B\u4E0E\u8282\u5047\u65E5\u5982\u4F55\u7533\u8BF7\u8D8A\u5357\u7535\u5B50\u7B7E\u8BC1\u7D27\u6025\u52A0\u6025\u51FA\u7B7E",
          he: "\u05D0\u05D9\u05DA \u05DC\u05D4\u05E0\u05E4\u05D9\u05E7 \u05D5\u05D9\u05D6\u05D4 \u05D3\u05D7\u05D5\u05E4\u05D4 \u05DC\u05D5\u05D9\u05D9\u05D8\u05E0\u05D0\u05DD \u05D1\u05E1\u05D5\u05E4\u05D9 \u05E9\u05D1\u05D5\u05E2 \u05D5\u05D1\u05D7\u05D2\u05D9\u05DD \u05E8\u05E9\u05DE\u05D9\u05D9\u05DD",
          ko: "\uC8FC\uB9D0 \uBC0F \uACF5\uD734\uC77C\uC5D0 \uBCA0\uD2B8\uB0A8 \uAE34\uAE09 \uBE44\uC790\uB97C \uBC1C\uAE09\uBC1B\uB294 \uBC29\uBC95",
          es: "C\xF3mo solicitar e-Visa urgente para Vietnam en fines de semana y festivos"
        },
        excerpt: {
          en: "Standard government immigration offices are closed on weekends. Learn how our 24/7 hotline gets weekend urgent visas approved.",
          vi: "C\u01A1 quan h\xE0nh ch\xEDnh ngh\u1EC9 l\xE0m vi\u1EC7c th\u1EE9 7, CN. T\xECm hi\u1EC3u gi\u1EA3i ph\xE1p duy\u1EC7t visa kh\u1EA9n 24/7 \xE1p \u0111\u1EA3o gi\u1EDD bay cu\u1ED1i tu\u1EA7n.",
          fr: "Les bureaux d'immigration sont ferm\xE9s le week-end. D\xE9couvrez notre assistance 24/7 pour les urgences du week-end.",
          de: "Beh\xF6rden sind am Wochenende geschlossen. Unser 24/7-Service hilft Ihnen bei Wochenendnotf\xE4llen.",
          ja: "\u653F\u5E9C\u6A5F\u95A2\u306F\u571F\u65E5\u306B\u9589\u9396\u3055\u308C\u307E\u3059\u304C\u3001\u5F53\u793E\u306E24\u6642\u9593\u30B5\u30DD\u30FC\u30C8\u3067\u9031\u672B\u7DCA\u6025\u767A\u7D66\u304C\u53EF\u80FD\u3067\u3059\u3002",
          zh: "\u5E38\u89C4\u79FB\u6C11\u5C40\u529E\u516C\u5BA4\u5728\u5468\u672B\u4F11\u606F\u3002\u4E86\u89E3\u6211\u4EEC 24/7 \u670D\u52A1\u5982\u4F55\u5728\u5468\u672B\u5B8C\u6210\u52A0\u6025\u6838\u51C6\u3002",
          he: "\u05DE\u05E9\u05E8\u05D3\u05D9 \u05D4\u05D4\u05D2\u05D9\u05E8\u05D4 \u05E1\u05D2\u05D5\u05E8\u05D9\u05DD \u05D1\u05E1\u05D5\u05E4\u05D9 \u05E9\u05D1\u05D5\u05E2. \u05DC\u05DE\u05D3 \u05DB\u05D9\u05E6\u05D3 \u05E9\u05D9\u05E8\u05D5\u05EA \u05D4-24/7 \u05E9\u05DC\u05E0\u05D5 \u05DE\u05D0\u05E9\u05E8 \u05D5\u05D9\u05D6\u05D5\u05EA \u05D1\u05E1\u05D5\u05E3 \u05D4\u05E9\u05D1\u05D5\u05E2.",
          ko: "\uC815\uBD80 \uCD9C\uC785\uAD6D \uAD00\uACF5\uC11C\uB294 \uC8FC\uB9D0\uC5D0 \uD734\uBB34\uC785\uB2C8\uB2E4. \uB2F9\uC0AC\uC758 24/7 \uAE34\uAE09 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD574 \uBCF4\uC138\uC694.",
          es: "Las oficinas de inmigraci\xF3n cierran los fines de semana. Conozca nuestro servicio 24/7."
        },
        content: {
          en: `
        <p>Traveling on Saturday or Sunday? Standard government processing pauses over weekends. However, airport immigration advisory desks operate 24/7 for urgent entry support.</p>
        <p>By using our Fast-Track Emergency Service, our team coordinates with duty officers at major international entry ports to issue emergency landing approval letters even on public holidays.</p>
      `,
          vi: `
        <p>Bay v\xE0o Th\u1EE9 7 ho\u1EB7c Ch\u1EE7 Nh\u1EADt? Quy tr\xECnh duy\u1EC7t th\u01B0\u1EDDng c\u1EE7a nh\xE0 n\u01B0\u1EDBc t\u1EA1m d\u1EEBng v\xE0o cu\u1ED1i tu\u1EA7n. Tuy nhi\xEAn, b\u1ED9 ph\u1EADn tr\u1EF1c xu\u1EA5t nh\u1EADp c\u1EA3nh s\xE2n bay ho\u1EA1t \u0111\u1ED9ng 24/7 h\u1ED7 tr\u1EE3 du kh\xE1ch kh\u1EA9n c\u1EA5p.</p>
        <p>Th\xF4ng qua d\u1ECBch v\u1EE5 L\xE0m E-Visa Kh\u1EA9n C\u1EA5p, \u0111\u1ED9i ng\u0169 chuy\xEAn vi\xEAn ph\u1ED1i h\u1EE3p c\xF9ng c\xE1n b\u1ED9 tr\u1EF1c ca t\u1EA1i c\xE1c c\u1EEDa kh\u1EA9u s\xE2n bay qu\u1ED1c t\u1EBF \u0111\u1EC3 c\u1EA5p c\xF4ng v\u0103n nh\u1EADp c\u1EA3nh ngay c\u1EA3 trong ng\xE0y l\u1EC5.</p>
      `,
          fr: `
        <p>Voyagez-vous le samedi ou le dimanche ? Le traitement standard s'arr\xEAte le week-end. Cependant, les bureaux d'urgence des a\xE9roports fonctionnent 24h/24.</p>
        <p>Gr\xE2ce \xE0 notre service d'urgence, notre \xE9quipe se coordonne avec les agents de garde aux a\xE9roports pour d\xE9livrer des autorisations m\xEAme les jours f\xE9ri\xE9s.</p>
      `,
          de: `
        <p>Reisen Sie am Samstag oder Sonntag? Die normale Bearbeitung ruht am Wochenende. Unsere Notfalldienste an den Flugh\xE4fen sind jedoch rund um die Uhr besetzt.</p>
      `,
          ja: `
        <p>\u571F\u66DC\u65E5\u3084\u65E5\u66DC\u65E5\u306E\u3054\u6E21\u822A\u3067\u3059\u304B\uFF1F\u6A19\u6E96\u306E\u653F\u5E9C\u5BE9\u67FB\u306F\u9031\u672B\u306B\u505C\u6B62\u3057\u307E\u3059\u304C\u3001\u7A7A\u6E2F\u306E\u7DCA\u6025\u7A93\u53E3\u306F24\u6642\u9593\u4F53\u5236\u3067\u7A3C\u50CD\u3057\u3066\u3044\u307E\u3059\u3002</p>
      `,
          zh: `
        <p>\u5468\u516D\u6216\u5468\u65E5\u51FA\u884C\uFF1F\u6807\u51C6\u653F\u5E9C\u5BA1\u6279\u5728\u5468\u672B\u6682\u505C\u3002\u7136\u800C\uFF0C\u4E3B\u8981\u56FD\u9645\u673A\u573A\u7684\u51FA\u5165\u5883\u503C\u73ED\u90E8\u95E8 24/7 \u4FDD\u6301\u8FD0\u8F6C\u3002</p>
      `,
          he: `
        <p>\u05D8\u05E1\u05D9\u05DD \u05D1\u05E9\u05D1\u05EA \u05D0\u05D5 \u05D1\u05E8\u05D0\u05E9\u05D5\u05DF? \u05D4\u05D8\u05D9\u05E4\u05D5\u05DC \u05D4\u05E8\u05D2\u05D9\u05DC \u05DE\u05D5\u05E7\u05E4\u05D0 \u05D1\u05E1\u05D5\u05E3 \u05D4\u05E9\u05D1\u05D5\u05E2. \u05E2\u05DD \u05D6\u05D0\u05EA, \u05D3\u05DC\u05E4\u05E7\u05D9 \u05D4\u05D7\u05D9\u05E8\u05D5\u05DD \u05D1\u05E9\u05D3\u05D5\u05EA \u05D4\u05EA\u05E2\u05D5\u05E4\u05D4 \u05E4\u05E2\u05D9\u05DC\u05D9\u05DD 24/7.</p>
      `,
          ko: `
        <p>\uD1A0\uC694\uC77C\uC774\uB098 \uC77C\uC694\uC77C\uC5D0 \uCD9C\uAD6D\uD558\uC2DC\uB098\uC694? \uC815\uBD80 \uC77C\uBC18 \uC2B9\uC778\uC740 \uC8FC\uB9D0\uC5D0 \uC911\uB2E8\uB418\uC9C0\uB9CC \uACF5\uD56D \uAE34\uAE09 \uC9C0\uC6D0 \uB370\uC2A4\uD06C\uB294 24\uC2DC\uAC04 \uC6B4\uC601\uB429\uB2C8\uB2E4.</p>
      `,
          es: `
        <p>\xBFViaja en s\xE1bado o domingo? El procesamiento est\xE1ndar se pausa los fines de semana. Sin embargo, nuestros servicios de aeropuerto operan 24/7.</p>
      `
        }
      }
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
    const directRes = await fetch(`${DIRECT_WP_BASE}/wp-json/wp/v2/posts?categories=70&per_page=100&_embed=true`);
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
    const localized = getLocalizedBlogPost(matchedPost, lang);
    return {
      ...localized,
      link: exactUrl || matchedPost.link
    };
  }
  const cName = lang === "vi" ? countryNameVi : countryName;
  const title = tMulti(lang, {
    en: `Vietnam Visa Requirements & Official Entry Guidelines for ${countryName} Citizens (2026)`,
    vi: `Quy \u0110\u1ECBnh & Th\u1EE7 T\u1EE5c Xin Visa Vi\u1EC7t Nam Cho C\xF4ng D\xE2n ${countryNameVi} (2026)`,
    fr: `Exigences de visa pour le Vietnam pour les citoyens de ${countryName} (2026)`,
    de: `Vietnam Visabestimmungen f\xFCr Staatsb\xFCrger von ${countryName} (2026)`,
    ja: `${countryName}\u5E02\u6C11\u5411\u3051\u30D9\u30C8\u30CA\u30E0\u30D3\u30B6\u7533\u8ACB\u8981\u4EF6\u3068\u5165\u56FD\u30AC\u30A4\u30C9 (2026\u5E74)`,
    zh: `${countryName}\u516C\u6C11 2026 \u8D8A\u5357\u7B7E\u8BC1\u7533\u8BF7\u8981\u6C42\u4E0E\u5165\u5883\u6307\u5357`,
    he: `\u05D3\u05E8\u05D9\u05E9\u05D5\u05EA \u05D5\u05D9\u05D6\u05D4 \u05DC\u05D5\u05D5\u05D9\u05D9\u05D8\u05E0\u05D0\u05DD \u05DC\u05D0\u05D6\u05E8\u05D7\u05D9 ${countryName} (2026)`,
    ko: `${countryName} \uC2DC\uBBFC\uC744 \uC704\uD55C \uBCA0\uD2B8\uB0A8 \uBE44\uC790 \uC2E0\uCCAD \uC694\uAC74 (2026\uB144)`,
    es: `Requisitos de visado para Vietnam para ciudadanos de ${countryName} (2026)`
  });
  const excerpt = tMulti(lang, {
    en: `Complete 2026 immigration breakdown for ${countryName} passport holders. Learn e-Visa validity, exemption rules, required documents, and express processing options.`,
    vi: `H\u01B0\u1EDBng d\u1EABn chi ti\u1EBFt quy \u0111\u1ECBnh th\u1ECB th\u1EF1c, th\u1EDDi h\u1EA1n h\u1ED9 chi\u1EBFu v\xE0 c\xE1c g\xF3i x\u1EED l\xFD e-Visa 1h - 24h cho c\xF4ng d\xE2n ${countryNameVi}.`,
    fr: `Guide officiel 2026 sur les e-visas, exemptions et exigences pour les titulaires de passeport de ${countryName}.`,
    de: `Vollst\xE4ndiger Leitfaden 2026 zu E-Visum Richtlinien und Notfalloptionen f\xFCr ${countryName}.`,
    ja: `e-Visa\u7533\u8ACB\u624B\u9806\u3001\u30D1\u30B9\u30DD\u30FC\u30C8\u6709\u52B9\u671F\u9650\u3001\u7DCA\u6025\u767A\u7D66\u30AA\u30D7\u30B7\u30E7\u30F3\u306B\u95A2\u3059\u308B${countryName}\u5411\u3051\u30AC\u30A4\u30C9\u3002`,
    zh: `\u5173\u4E8E ${countryName} \u516C\u6C11\u7535\u5B50\u7B7E\u8BC1\u7533\u8BF7\u6B65\u9AA4\u3001\u62A4\u7167\u6709\u6548\u671F\u53CA\u7D27\u6025\u52A0\u6025\u51FA\u7B7E\u670D\u52A1\u7684\u5B8C\u6574\u8BF4\u660E\u3002`,
    he: `\u05DE\u05D3\u05E8\u05D9\u05DA \u05E8\u05E9\u05DE\u05D9 \u05DC\u05D4\u05E0\u05E4\u05E7\u05EA \u05D5\u05D9\u05D6\u05D4 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9\u05EA, \u05EA\u05D5\u05E7\u05E3 \u05D3\u05E8\u05DB\u05D5\u05DF \u05D5\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05E0\u05E4\u05E7\u05D4 \u05D3\u05D7\u05D5\u05E4\u05D4 \u05DC\u05D0\u05D6\u05E8\u05D7\u05D9 ${countryName}.`,
    ko: `${countryName} \uC5EC\uAD8C \uC18C\uC9C0\uC790\uB97C \uC704\uD55C \uBCA0\uD2B8\uB0A8 \uC804\uC790\uBE44\uC790 \uBC1C\uAE09 \uC808\uCC28 \uBC0F \uAE34\uAE09 \uD328\uC2A4\uD2B8\uD2B8\uB799 \uC548\uB0B4.`,
    es: `Gu\xEDa oficial 2026 sobre e-visas, exenciones y opciones de tr\xE1mite urgente para ciudadanos de ${countryName}.`
  });
  const exemptionTitle = exemptionDays > 0 ? tMulti(lang, {
    en: `Free ${exemptionDays}-Day Visa Exemption:`,
    vi: `\u0110\u01B0\u1EE3c Mi\u1EC5n Visa ${exemptionDays} Ng\xE0y:`,
    fr: `Exemption de visa gratuite de ${exemptionDays} jours:`,
    de: `Kostenlose ${exemptionDays}-Tage Visumbefreiung:`,
    ja: `${exemptionDays}\u65E5\u9593\u306E\u30D3\u30B6\u514D\u9664\u5BFE\u8C61:`,
    zh: `${exemptionDays} \u5929\u514D\u7B7E\u505C\u7559:`,
    he: `\u05E4\u05D8\u05D5\u05E8 \u05DE\u05D5\u05D9\u05D6\u05D4 \u05DC-${exemptionDays} \u05D9\u05DE\u05D9\u05DD:`,
    ko: `${exemptionDays}\uC77C \uBB34\uBE44\uC790 \uBA74\uC81C:`,
    es: `Exenci\xF3n de visado gratuita de ${exemptionDays} d\xEDas:`
  }) : tMulti(lang, {
    en: "E-Visa Required Prior to Departure:",
    vi: "Y\xEAu C\u1EA7u C\xF3 E-Visa Tr\u01B0\u1EDBc Khi Bay:",
    fr: "e-Visa requis avant le d\xE9part:",
    de: "E-Visum vor dem Abflug erforderlich:",
    ja: "\u6E21\u822A\u524D\u306Be-Visa\u306E\u53D6\u5F97\u304C\u5FC5\u8981\u3067\u3059:",
    zh: "\u767B\u673A\u524D\u987B\u6301\u6709\u6548\u7535\u5B50\u7B7E\u8BC1:",
    he: "\u05E0\u05D3\u05E8\u05E9\u05EA \u05D5\u05D9\u05D6\u05D4 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9\u05EA \u05DC\u05E4\u05E0\u05D9 \u05D4\u05D4\u05DE\u05E8\u05D0\u05D4:",
    ko: "\uCD9C\uAD6D \uC804 \uC804\uC790\uBE44\uC790 \uBC1C\uAE09 \uD544\uC218:",
    es: "Requisito de e-Visa previo a la salida:"
  });
  const exemptionDetail = exemptionDays > 0 ? tMulti(lang, {
    en: `Citizens of ${countryName} holding an ordinary passport enjoy a <strong>${exemptionDays}-Day Visa Exemption</strong> upon arrival in Vietnam. For stays longer than ${exemptionDays} days or multiple entries, apply for a 90-day e-Visa online.`,
    vi: `C\xF4ng d\xE2n ${countryNameVi} mang h\u1ED9 chi\u1EBFu ph\u1ED5 th\xF4ng \u0111\u01B0\u1EE3c MI\u1EC4N VISA l\u01B0u tr\xFA t\u1ED1i \u0111a ${exemptionDays} ng\xE0y theo quy \u0111\u1ECBnh hi\u1EC7n h\xE0nh. N\u1EBFu mu\u1ED1n \u1EDF l\u1EA1i tr\xEAn ${exemptionDays} ng\xE0y ho\u1EB7c nh\u1EADp c\u1EA3nh nhi\u1EC1u l\u1EA7n, b\u1EA1n c\u1EA7n xin E-Visa 90 ng\xE0y.`,
    fr: `Les citoyens de ${countryName} b\xE9n\xE9ficient d'une exemption de visa de ${exemptionDays} jours \xE0 l'arriv\xE9e. Pour un s\xE9jour plus long, demandez un e-Visa de 90 jours.`,
    de: `Staatsb\xFCrger von ${countryName} genie\xDFen bei der Ankunft eine ${exemptionDays}-t\xE4gige Visumbefreiung. F\xFCr l\xE4ngere Aufenthalte beantragen Sie ein 90-Tage-e-Visum.`,
    ja: `${countryName}\u30D1\u30B9\u30DD\u30FC\u30C8\u6240\u6301\u8005\u306F\u6700\u9577${exemptionDays}\u65E5\u9593\u306E\u30D3\u30B6\u514D\u9664\u3092\u53D7\u3051\u3089\u308C\u307E\u3059\u3002${exemptionDays}\u65E5\u3092\u8D85\u3048\u308B\u6EDE\u5728\u306B\u306F90\u65E5\u9593\u306Ee-Visa\u3092\u7533\u8ACB\u3057\u3066\u304F\u3060\u3055\u3044\u3002`,
    zh: `${countryName} \u666E\u901A\u62A4\u7167\u6301\u6709\u4EBA\u53EF\u4EAB\u6709\u957F\u8FBE ${exemptionDays} \u5929\u7684\u514D\u7B7E\u5F85\u9047\u3002\u5982\u9700\u505C\u7559\u8D85\u8FC7 ${exemptionDays} \u5929\u6216\u591A\u6B21\u5165\u5883\uFF0C\u8BF7\u5728\u7EBF\u7533\u8BF7 90 \u5929\u7535\u5B50\u7B7E\u8BC1\u3002`,
    he: `\u05D0\u05D6\u05E8\u05D7\u05D9 ${countryName} \u05E0\u05D4\u05E0\u05D9\u05DD \u05DE\u05E4\u05D8\u05D5\u05E8 \u05DE\u05D5\u05D9\u05D6\u05D4 \u05E2\u05D3 ${exemptionDays} \u05D9\u05DE\u05D9\u05DD. \u05DC\u05E9\u05D4\u05D9\u05D9\u05D4 \u05D0\u05E8\u05D5\u05DB\u05D4 \u05D9\u05D5\u05EA\u05E8, \u05D9\u05E9 \u05DC\u05D4\u05D2\u05D9\u05E9 \u05D1\u05E7\u05E9\u05D4 \u05DC\u05D5\u05D5\u05D9\u05D6\u05D4 \u05DC-90 \u05D9\u05D5\u05DD.`,
    ko: `${countryName} \uC5EC\uAD8C \uC18C\uC9C0\uC790\uB294 \uCD5C\uB300 ${exemptionDays}\uC77C\uAC04 \uBB34\uBE44\uC790 \uC785\uAD6D\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4. ${exemptionDays}\uC77C \uCD08\uACFC \uCCB4\uB958 \uC2DC 90\uC77C \uC804\uC790\uBE44\uC790\uB97C \uC2E0\uCCAD\uD558\uC138\uC694.`,
    es: `Los ciudadanos de ${countryName} disfrutan de exenci\xF3n de visado de hasta ${exemptionDays} d\xEDas. Para estancias superiores, solicite e-Visa de 90 d\xEDas.`
  }) : tMulti(lang, {
    en: `Citizens of ${countryName} are required to obtain a valid Vietnam e-Visa (30 or 90 days, single or multiple entry) before boarding their flight.`,
    vi: `C\xF4ng d\xE2n ${countryNameVi} c\u1EA7n c\xF3 E-Visa Vi\u1EC7t Nam h\u1EE3p l\u1EC7 (30 ng\xE0y ho\u1EB7c 90 ng\xE0y, 1 l\u1EA7n ho\u1EB7c nhi\u1EC1u l\u1EA7n) tr\u01B0\u1EDBc khi l\xEAn m\xE1y bay.`,
    fr: `Les citoyens de ${countryName} doivent obtenir un e-Visa valide pour le Vietnam avant d'embarquer.`,
    de: `Staatsb\xFCrger von ${countryName} m\xFCssen vor dem Boarding ein g\xFCltiges Vietnam E-Visum vorweisen.`,
    ja: `${countryName}\u5E02\u6C11\u306F\u642D\u4E57\u524D\u306B\u6709\u52B9\u306A\u30D9\u30C8\u30CA\u30E0e-Visa\uFF0830\u65E5\u307E\u305F\u306F90\u65E5\uFF09\u3092\u53D6\u5F97\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`,
    zh: `${countryName} \u516C\u6C11\u5728\u767B\u673A\u524D\u5FC5\u987B\u53D6\u5F97\u6709\u6548\u7684\u8D8A\u5357\u7535\u5B50\u7B7E\u8BC1\uFF0830 \u5929\u6216 90 \u5929\uFF0C\u5355\u6B21\u6216\u591A\u6B21\uFF09\u3002`,
    he: `\u05D0\u05D6\u05E8\u05D7\u05D9 ${countryName} \u05D7\u05D9\u05D9\u05D1\u05D9\u05DD \u05DC\u05D4\u05E0\u05E4\u05D9\u05E7 \u05D5\u05D9\u05D6\u05D4 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9\u05EA \u05D1\u05EA\u05D5\u05E7\u05E3 \u05DC\u05E4\u05E0\u05D9 \u05D4\u05E2\u05DC\u05D9\u05D9\u05D4 \u05DC\u05DE\u05D8\u05D5\u05E1.`,
    ko: `${countryName} \uC2DC\uBBFC\uC740 \uD0D1\uC2B9 \uC804 \uC720\uD6A8\uD55C \uBCA0\uD2B8\uB0A8 \uC804\uC790\uBE44\uC790(30\uC77C \uB610\uB294 90\uC77C)\uB97C \uCDE8\uB4DD\uD574\uC57C \uD569\uB2C8\uB2E4.`,
    es: `Los ciudadanos de ${countryName} deben obtener una e-Visa v\xE1lida antes de abordar su vuelo.`
  });
  const exemptionBoxClass = exemptionDays > 0 ? "bg-emerald-50 border-emerald-200 text-emerald-900" : "bg-blue-50 border-blue-200 text-blue-900";
  const exemptionNoticeHtml = `<div class="${exemptionBoxClass} border p-4 rounded-xl font-medium mb-4">
    <strong>${exemptionTitle}</strong> ${exemptionDetail}
  </div>`;
  const h3Checklist = tMulti(lang, {
    en: "Passport & Photo Compliance Checklist:",
    vi: "\u0110i\u1EC1u Ki\u1EC7n H\u1ED9 Chi\u1EBFu & H\u1ED3 S\u01A1 B\u1EAFt Bu\u1ED9c:",
    fr: "Exigences relatives au passeport et aux photos:",
    de: "Pass- und Fotoanforderungen:",
    ja: "\u30D1\u30B9\u30DD\u30FC\u30C8\u304A\u3088\u3073\u8A3C\u660E\u5199\u771F\u306E\u57FA\u6E96:",
    zh: "\u62A4\u7167\u4E0E\u7167\u7247\u7B26\u5408\u8981\u6C42 Checklist:",
    he: "\u05D3\u05E8\u05D9\u05E9\u05D5\u05EA \u05D3\u05E8\u05DB\u05D5\u05DF \u05D5\u05EA\u05DE\u05D5\u05E0\u05D4:",
    ko: "\uC5EC\uAD8C \uBC0F \uC0AC\uC9C4 \uADDC\uACA9 \uCCB4\uD06C\uB9AC\uC2A4\uD2B8:",
    es: "Lista de verificaci\xF3n de pasaporte y foto:"
  });
  const liValidity = tMulti(lang, {
    en: "<strong>Passport Validity:</strong> Must have at least 6 months remaining validity from arrival date with 2 blank pages.",
    vi: "<strong>Th\u1EDDi h\u1EA1n h\u1ED9 chi\u1EBFu:</strong> C\xF2n h\u1EA1n \xEDt nh\u1EA5t 6 th\xE1ng t\xEDnh t\u1EEB ng\xE0y nh\u1EADp c\u1EA3nh Vi\u1EC7t Nam, c\xF3 \xEDt nh\u1EA5t 2 trang tr\u1ED1ng.",
    fr: "<strong>Validit\xE9 du passeport:</strong> Au moins 6 mois de validit\xE9 restante \xE0 compter de l'arriv\xE9e avec 2 pages vierges.",
    de: "<strong>Passg\xFCltigkeit:</strong> Mindestens 6 Monate Restg\xFCltigkeit ab Einreisedatum und 2 freie Seiten.",
    ja: "<strong>\u30D1\u30B9\u30DD\u30FC\u30C8\u6709\u52B9\u671F\u9650:</strong> \u5165\u56FD\u4E88\u5B9A\u65E5\u304B\u30896\u30F6\u6708\u4EE5\u4E0A\u306E\u6B8B\u5B58\u671F\u9593\u30682\u30DA\u30FC\u30B8\u4EE5\u4E0A\u306E\u672A\u4F7F\u7528\u30DA\u30FC\u30B8\u304C\u5FC5\u8981\u3002",
    zh: "<strong>\u62A4\u7167\u6709\u6548\u671F\uFF1A</strong> \u81EA\u5165\u5883\u65E5\u8D77\u7B97\u5269\u4F59\u6709\u6548\u671F\u987B\u5728 6 \u4E2A\u6708\u4EE5\u4E0A\uFF0C\u4E14\u81F3\u5C11\u6709 2 \u9875\u7A7A\u767D\u9875\u3002",
    he: "<strong>\u05EA\u05D5\u05E7\u05E3 \u05D3\u05E8\u05DB\u05D5\u05DF:</strong> \u05EA\u05D5\u05E7\u05E3 \u05E9\u05DC 6 \u05D7\u05D5\u05D3\u05E9\u05D9\u05DD \u05DC\u05E4\u05D7\u05D5\u05EA \u05DE\u05D9\u05D5\u05DD \u05D4\u05D4\u05D2\u05E2\u05D4 \u05E2\u05DD 2 \u05D3\u05E4\u05D9\u05DD \u05E8\u05D9\u05E7\u05D9\u05DD.",
    ko: "<strong>\uC5EC\uAD8C \uC720\uD6A8\uAE30\uAC04:</strong> \uC785\uAD6D\uC77C \uAE30\uC900 \uCD5C\uC18C 6\uAC1C\uC6D4 \uC774\uC0C1 \uC794\uC5EC \uC720\uD6A8\uAE30\uAC04 \uBC0F 2\uBA74 \uC774\uC0C1\uC758 \uBE48 \uD398\uC774\uC9C0 \uD544\uC694.",
    es: "<strong>Validez del pasaporte:</strong> Al menos 6 meses de vigencia a la llegada y 2 p\xE1ginas en blanco."
  });
  const liPhoto = tMulti(lang, {
    en: "<strong>Portrait Photo:</strong> 4x6cm digital photo, white background, no eyeglasses, clear face facing forward.",
    vi: "<strong>\u1EA2nh ch\xE2n dung:</strong> M\u1EDBi ch\u1EE5p trong 6 th\xE1ng, ph\xF4ng n\u1EC1n tr\u1EAFng, r\xF5 m\u1EB7t, kh\xF4ng \u0111eo k\xEDnh r\xE2m.",
    fr: "<strong>Photo de portrait:</strong> Photo num\xE9rique fond blanc, visage d\xE9gag\xE9, sans lunettes de soleil.",
    de: "<strong>Passfoto:</strong> Digitales Foto auf wei\xDFem Hintergrund, ohne Sonnenbrille, Gesicht gerade.",
    ja: "<strong>\u8A3C\u660E\u5199\u771F:</strong> \u767D\u80CC\u666F\u306E\u30C7\u30B8\u30BF\u30EB\u5199\u771F\u3001\u30B5\u30F3\u30B0\u30E9\u30B9\u4E0D\u53EF\u3001\u6B63\u9762\u3092\u5411\u3044\u305F\u9BAE\u660E\u306A\u753B\u50CF\u3002",
    zh: "<strong>\u8BC1\u4EF6\u7167\uFF1A</strong> \u8FD1 6 \u4E2A\u6708\u5185\u62CD\u6444\u7684\u767D\u5E95\u6570\u5B57\u7167\u7247\uFF0C\u9762\u90E8\u6E05\u6670\uFF0C\u4E0D\u5F97\u4F69\u6234\u58A8\u955C\u3002",
    he: "<strong>\u05EA\u05DE\u05D5\u05E0\u05EA \u05E4\u05E1\u05E4\u05D5\u05E8\u05D8:</strong> \u05EA\u05DE\u05D5\u05E0\u05D4 \u05D3\u05D9\u05D2\u05D9\u05D8\u05DC\u05D9\u05EA \u05E2\u05DC \u05E8\u05E7\u05E2 \u05DC\u05D1\u05DF, \u05DC\u05DC\u05D0 \u05DE\u05E9\u05E7\u05E4\u05D9 \u05E9\u05DE\u05E9, \u05E4\u05E0\u05D9\u05DD \u05D2\u05DC\u05D5\u05D9\u05D5\u05EA.",
    ko: "<strong>\uC99D\uBA85\uC0AC\uC9C4:</strong> 6\uAC1C\uC6D4 \uC774\uB0B4 \uCD2C\uC601\uD55C \uD770\uC0C9 \uBC30\uACBD \uB514\uC9C0\uD138 \uC0AC\uC9C4, \uC548\uACBD \uBBF8\uCC29\uC6A9.",
    es: "<strong>Fotograf\xEDa de retrato:</strong> Foto digital fondo blanco, rostro despejado, sin gafas de sol."
  });
  const h3Options = tMulti(lang, {
    en: "E-Visa Categories & Speed Options:",
    vi: "Lo\u1EA1i E-Visa & Th\u1EDDi Gian X\u1EED L\xFD:",
    fr: "Types d'e-Visa et options de traitement:",
    de: "E-Visum Kategorien und Eiloptionen:",
    ja: "e-Visa\u306E\u7A2E\u985E\u3068\u51E6\u7406\u30B9\u30D4\u30FC\u30C9:",
    zh: "\u7535\u5B50\u7B7E\u8BC1\u79CD\u7C7B\u4E0E\u52A0\u6025\u529E\u7406\u9009\u9879:",
    he: "\u05E1\u05D5\u05D2\u05D9 \u05D5\u05D9\u05D6\u05D4 \u05D5\u05D6\u05DE\u05E0\u05D9 \u05E2\u05D9\u05D1\u05D5\u05D3:",
    ko: "\uC804\uC790\uBE44\uC790 \uC885\uB958 \uBC0F \uAE34\uAE09 \uBC1C\uAE09 \uC635\uC158:",
    es: "Tipos de e-Visa y opciones de velocidad:"
  });
  const h3Ports = tMulti(lang, {
    en: "Eligible Ports of Entry:",
    vi: "C\u1EEDa Kh\u1EA9u Cho Ph\xE9p Nh\u1EADp C\u1EA3nh:",
    fr: "Points d'entr\xE9e autoris\xE9s:",
    de: "Zugelassene Einreiseh\xE4fen:",
    ja: "\u5229\u7528\u53EF\u80FD\u306A\u5165\u56FDImmigration\u30B2\u30FC\u30C8:",
    zh: "\u5141\u8BB8\u5165\u5883\u7684\u8FB9\u5883\u53E3\u5CB8:",
    he: "\u05DE\u05E2\u05D1\u05E8\u05D9 \u05D2\u05D1\u05D5\u05DC \u05DE\u05D5\u05E8\u05E9\u05D9\u05DD:",
    ko: "\uC785\uAD6D \uD5C8\uC6A9 \uACF5\uD56D \uBC0F \uACBD\uACC4 \uAD6C\uC5ED:",
    es: "Puertos de entrada autorizados:"
  });
  const portsText = tMulti(lang, {
    en: "E-Visa is valid for entry across 33 international border checkpoints including major airports: Hanoi (Noi Bai), Ho Chi Minh City (Tan Son Nhat), Da Nang, Cam Ranh, and Phu Quoc.",
    vi: "E-Visa c\xF3 gi\xE1 tr\u1ECB t\u1EA1i 33 c\u1EEDa kh\u1EA9u qu\u1ED1c t\u1EBF bao g\u1ED3m c\xE1c s\xE2n bay l\u1EDBn: N\u1ED9i B\xE0i (H\xE0 N\u1ED9i), T\xE2n S\u01A1n Nh\u1EA5t (TP.HCM), \u0110\xE0 N\u1EB5ng, Cam Ranh (Nha Trang), Ph\xFA Qu\u1ED1c, C\xE1t Bi (H\u1EA3i Ph\xF2ng).",
    fr: "L'e-Visa est valable dans 33 points de contr\xF4le frontaliers internationaux, y compris les grands a\xE9roports : Hano\xEF, Ho Chi Minh-Ville, Da Nang, Cam Ranh et Phu Quoc.",
    de: "Das E-Visum gilt an 33 internationalen Grenz\xFCberg\xE4ngen, darunter den wichtigsten Flugh\xE4fen: Hanoi, Ho-Chi-Minh-Stadt, Da Nang, Cam Ranh und Phu Quoc.",
    ja: "e-Visa\u306F\u3001\u30CF\u30CE\u30A4\u3001\u30DB\u30FC\u30C1\u30DF\u30F3\u3001\u30C0\u30CA\u30F3\u3001\u30AB\u30E0\u30E9\u30F3\u3001\u30D5\u30FC\u30B3\u30C3\u30AF\u3092\u542B\u308033\u306E\u56FD\u969B\u51FA\u5165\u56FD\u30B2\u30FC\u30C8\u3067\u5229\u7528\u53EF\u80FD\u3067\u3059\u3002",
    zh: "\u7535\u5B50\u7B7E\u8BC1\u9002\u7528\u4E8E 33 \u4E2A\u56FD\u9645\u51FA\u5165\u5883\u53E3\u5CB8\uFF0C\u5305\u62EC\u5404\u5927\u4E3B\u8981\u673A\u573A\uFF1A\u6CB3\u5185\uFF08\u5185\u6392\uFF09\u3001\u80E1\u5FD7\u660E\u5E02\uFF08\u65B0\u5C71\u4E00\uFF09\u3001\u5C98\u6E2F\u3001\u91D1\u5170\u53CA\u5BCC\u56FD\u5C9B\u3002",
    he: "\u05D4\u05D5\u05D9\u05D6\u05D4 \u05D1\u05EA\u05D5\u05E7\u05E3 \u05D1-33 \u05DE\u05E2\u05D1\u05E8\u05D9 \u05D2\u05D1\u05D5\u05DC \u05D1\u05D9\u05E0\u05DC\u05D0\u05D5\u05DE\u05D9\u05D9\u05DD \u05DB\u05D5\u05DC\u05DC \u05E9\u05D3\u05D5\u05EA \u05D4\u05EA\u05E2\u05D5\u05E4\u05D4 \u05D4\u05DE\u05E8\u05DB\u05D6\u05D9\u05D9\u05DD: \u05D4\u05D0\u05E0\u05D5\u05D9, \u05D4\u05D5 \u05E6'\u05D9 \u05DE\u05D9\u05DF \u05E1\u05D9\u05D8\u05D9, \u05D3\u05D4 \u05E0\u05D0\u05E0\u05D2 \u05D5\u05E4\u05D5\u05E7\u05D5\u05E7.",
    ko: "\uC804\uC790\uBE44\uC790\uB294 \uD558\uB178\uC774(\uB178\uC774\uBC14\uC774), \uD638\uCE58\uBBFC(\uD0C4\uC190\uB204\uD2B8), \uB2E4\uB0AD, \uAE5C\uB77C\uC778, \uD478\uAFB8\uC625 \uB4F1 33\uAC1C \uAD6D\uC81C \uACF5\uD56D \uBC0F \uACBD\uACC4 \uAD6C\uC5ED\uC5D0\uC11C \uC0AC\uC6A9 \uAC00\uB2A5\uD569\uB2C8\uB2E4.",
    es: "La e-Visa es v\xE1lida en 33 puestos fronterizos internacionales, incluidos los principales aeropuertos: Han\xF3i, Ho Chi Minh, Da Nang, Cam Ranh y Phu Quoc."
  });
  const content = `
    ${exemptionNoticeHtml}
    
    <h3>${h3Checklist}</h3>
    <ul>
      <li>${liValidity}</li>
      <li>${liPhoto}</li>
    </ul>

    <h3>${h3Options}</h3>
    <p>${lang === "vi" ? notesVi : notes}</p>

    <h3>${h3Ports}</h3>
    <p>${portsText}</p>
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
    init_translations();
    init_blogTranslations();
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
var articleTranslationCache = /* @__PURE__ */ new Map();
async function translateWithGoogleGTX(text, targetLang) {
  if (!text || !text.trim()) return text;
  const langMap = {
    zh: "zh-CN",
    he: "iw",
    ja: "ja",
    ko: "ko",
    vi: "vi",
    fr: "fr",
    de: "de",
    es: "es"
  };
  const tl = langMap[targetLang] || targetLang;
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${tl}&dt=t&q=${encodeURIComponent(text)}`;
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      }
    });
    if (!response.ok) return text;
    const data = await response.json();
    if (Array.isArray(data) && Array.isArray(data[0])) {
      return data[0].map((item) => item && item[0] ? item[0] : "").join("");
    }
  } catch (err) {
    console.warn("GTX translation error:", err);
  }
  return text;
}
async function translateHtmlContentGTX(html, targetLang) {
  if (!html || !html.trim()) return html;
  const parts = html.split(/(<[^>]+>)/g);
  const textIndices = [];
  const textPromises = [];
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (!part || part.startsWith("<") || !part.trim()) {
      continue;
    }
    if (/^[\d\s\p{P}]+$/u.test(part.trim())) {
      continue;
    }
    textIndices.push(i);
    textPromises.push(translateWithGoogleGTX(part, targetLang));
  }
  if (textPromises.length === 0) return html;
  const translatedTexts = await Promise.all(textPromises);
  for (let k = 0; k < textIndices.length; k++) {
    const origIdx = textIndices[k];
    parts[origIdx] = translatedTexts[k];
  }
  return parts.join("");
}
app.post("/api/translate-article", async (req, res) => {
  try {
    const { title = "", excerpt = "", content = "", targetLang = "vi", id = "", slug = "", skipContent = false } = req.body;
    if (targetLang === "en" || !targetLang) {
      return res.json({ success: true, title, excerpt, content });
    }
    const cacheKey = `${id || slug || title.substring(0, 30)}_${targetLang}`;
    const isFullContentRequested = !skipContent && content && content.trim().length > 30;
    if (articleTranslationCache.has(cacheKey)) {
      const cached = articleTranslationCache.get(cacheKey);
      const hasCachedContent = cached.content && cached.content.trim().length > 30;
      if (!isFullContentRequested || hasCachedContent) {
        return res.json({
          success: true,
          title: cached.title,
          excerpt: cached.excerpt,
          content: isFullContentRequested ? cached.content : "",
          source: "cache"
        });
      }
    }
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey) {
      try {
        const ai = new import_genai.GoogleGenAI({ apiKey });
        const langNames = {
          vi: "Vietnamese",
          fr: "French",
          de: "German",
          ja: "Japanese",
          zh: "Chinese (Simplified)",
          he: "Hebrew",
          ko: "Korean",
          es: "Spanish"
        };
        const targetLangName = langNames[targetLang] || "Vietnamese";
        const prompt = `You are a professional travel & visa translator. Translate the following article content into ${targetLangName}.
CRITICAL INSTRUCTIONS:
1. Keep all HTML tags (<p>, <h3>, <ul>, <li>, <strong>, <b>, <div>, <span>, <a>, etc.) intact without modifying HTML tags or class attributes.
2. Only translate the human-readable text inside the tags.
3. Translate clearly and naturally for travel advisory context.

Article Title: ${title}
Article Excerpt: ${excerpt}
Article Content HTML:
${content}

Return ONLY a valid JSON object with keys: "title", "excerpt", "content"`;
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: prompt,
          config: {
            responseMimeType: "application/json",
            temperature: 0.2
          }
        });
        let resultText = response.text || "";
        if (resultText) {
          let cleanText = resultText.trim();
          if (cleanText.startsWith("```json")) {
            cleanText = cleanText.replace(/^```json\s*/i, "").replace(/\s*```$/i, "");
          } else if (cleanText.startsWith("```")) {
            cleanText = cleanText.replace(/^```\s*/i, "").replace(/\s*```$/i, "");
          }
          let parsed = {};
          try {
            parsed = JSON.parse(cleanText);
          } catch (pErr) {
            const sanitized = cleanText.replace(/[\r\n]+/g, "\\n").replace(/\t/g, "\\t");
            parsed = JSON.parse(sanitized);
          }
          if (parsed.title || parsed.content) {
            const existing2 = articleTranslationCache.get(cacheKey);
            const translatedObj2 = {
              title: parsed.title || title,
              excerpt: parsed.excerpt || excerpt,
              content: parsed.content || existing2?.content || ""
            };
            articleTranslationCache.set(cacheKey, translatedObj2);
            return res.json({ success: true, ...translatedObj2, source: "gemini" });
          }
        }
      } catch (gErr) {
        console.warn("Gemini translation failed, switching to Google GTX engine:", gErr);
      }
    }
    const existing = articleTranslationCache.get(cacheKey);
    const [translatedTitle, translatedExcerpt, translatedContent] = await Promise.all([
      translateWithGoogleGTX(title, targetLang),
      translateWithGoogleGTX(excerpt, targetLang),
      isFullContentRequested ? translateHtmlContentGTX(content, targetLang) : Promise.resolve(existing?.content || "")
    ]);
    const translatedObj = {
      title: translatedTitle || title,
      excerpt: translatedExcerpt || excerpt,
      content: translatedContent || existing?.content || ""
    };
    articleTranslationCache.set(cacheKey, translatedObj);
    return res.json({ success: true, ...translatedObj, source: "gtx" });
  } catch (err) {
    console.error("Translation error:", err);
    return res.status(500).json({ success: false, error: err.message, title: req.body.title, excerpt: req.body.excerpt, content: req.body.content });
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
    let postsUrl = `${wpBaseUrl}/wp-json/wp/v2/posts?categories=16&per_page=100&_embed=true`;
    let postsRes = await fetch(postsUrl, {
      headers: { "Authorization": authHeader, "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" },
      signal: AbortSignal.timeout(8e3)
    });
    let wpPosts = postsRes.ok ? await postsRes.json() : [];
    if (!Array.isArray(wpPosts) || wpPosts.length === 0) {
      postsUrl = `${wpBaseUrl}/wp-json/wp/v2/posts?per_page=100&_embed=true`;
      postsRes = await fetch(postsUrl, {
        headers: { "Authorization": authHeader, "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" },
        signal: AbortSignal.timeout(8e3)
      });
      if (postsRes.ok) {
        wpPosts = await postsRes.json();
      }
    }
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
    const page1Url = `${wpBaseUrl}/wp-json/wp/v2/posts?categories=70&per_page=100&_embed=true&page=1`;
    const page2Url = `${wpBaseUrl}/wp-json/wp/v2/posts?categories=70&per_page=100&_embed=true&page=2`;
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
app.get("/sitemap.xml", async (req, res) => {
  const host = req.get("host") || "vietnamvisa.govt.vn";
  const protocol = req.protocol === "http" && host.includes("localhost") ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;
  const now = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const corePages = [
    { loc: "/", priority: "1.0", changefreq: "daily", lastmod: now },
    { loc: "/overview", priority: "0.9", changefreq: "weekly", lastmod: now },
    { loc: "/how-to-apply", priority: "0.9", changefreq: "daily", lastmod: now },
    { loc: "/visa-fee", priority: "0.8", changefreq: "weekly", lastmod: now },
    { loc: "/visa-requirements", priority: "0.9", changefreq: "weekly", lastmod: now },
    { loc: "/blog", priority: "0.8", changefreq: "daily", lastmod: now },
    { loc: "/track-application", priority: "0.8", changefreq: "always", lastmod: now },
    { loc: "/faqs", priority: "0.7", changefreq: "weekly", lastmod: now },
    { loc: "/about", priority: "0.6", changefreq: "monthly", lastmod: now },
    { loc: "/contact-us", priority: "0.6", changefreq: "monthly", lastmod: now },
    { loc: "/sitemap", priority: "0.7", changefreq: "weekly", lastmod: now },
    { loc: "/payment-guidelines", priority: "0.5", changefreq: "monthly", lastmod: now },
    { loc: "/terms-and-conditions", priority: "0.5", changefreq: "monthly", lastmod: now },
    { loc: "/privacy-policy", priority: "0.5", changefreq: "monthly", lastmod: now }
  ];
  let blogList = [];
  let reqList = [];
  try {
    if (postsCacheStore && postsCacheStore.data?.length > 0) {
      blogList = postsCacheStore.data;
    } else {
      blogList = await fetchAndCachePosts();
    }
  } catch (e) {
    console.warn("Error obtaining blog posts for sitemap.xml:", e);
  }
  try {
    if (requirementsCacheStore && requirementsCacheStore.data?.length > 0) {
      reqList = requirementsCacheStore.data;
    } else {
      reqList = await fetchAndCacheRequirements();
    }
  } catch (e) {
    console.warn("Error obtaining requirement posts for sitemap.xml:", e);
  }
  const escapeXml = (unsafe) => {
    return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  };
  const dynamicUrls = [
    ...corePages
  ];
  if (Array.isArray(blogList)) {
    blogList.forEach((post) => {
      if (post.slug) {
        const postDate = post.date && /^\d{4}-\d{2}-\d{2}/.test(post.date) ? post.date : now;
        dynamicUrls.push({
          loc: `/blog/${post.slug}`,
          priority: "0.8",
          changefreq: "weekly",
          lastmod: postDate
        });
      }
    });
  }
  if (Array.isArray(reqList)) {
    reqList.forEach((post) => {
      if (post.slug) {
        const postDate = post.date && /^\d{4}-\d{2}-\d{2}/.test(post.date) ? post.date : now;
        dynamicUrls.push({
          loc: `/visa-requirements/${post.slug}`,
          priority: "0.8",
          changefreq: "weekly",
          lastmod: postDate
        });
      }
    });
  }
  const seenLocs = /* @__PURE__ */ new Set();
  const uniqueUrls = dynamicUrls.filter((u) => {
    if (seenLocs.has(u.loc)) return false;
    seenLocs.add(u.loc);
    return true;
  });
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${uniqueUrls.map(
    (item) => `  <url>
    <loc>${escapeXml(`${baseUrl}${item.loc}`)}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  ).join("\n")}
</urlset>`;
  res.header("Content-Type", "application/xml; charset=utf-8");
  res.header("Cache-Control", "public, max-age=1800, s-maxage=3600");
  return res.send(xmlContent);
});
app.get("/robots.txt", (req, res) => {
  const host = req.get("host") || "vietnamvisa.govt.vn";
  const protocol = req.protocol === "http" && host.includes("localhost") ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;
  const robots = `User-agent: *
Allow: /
Allow: /overview
Allow: /how-to-apply
Allow: /visa-fee
Allow: /visa-requirements
Allow: /blog
Allow: /track-application
Allow: /faqs
Allow: /about
Allow: /contact-us
Allow: /sitemap
Allow: /payment-guidelines
Allow: /terms-and-conditions
Allow: /privacy-policy

Disallow: /api/

Sitemap: ${baseUrl}/sitemap.xml
`;
  res.header("Content-Type", "text/plain; charset=utf-8");
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
