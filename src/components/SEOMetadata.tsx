import React, { useEffect } from 'react';
import { Language } from '../types';
import { TabType, getRouteFromTab } from '../routes';

interface SEOMetadataProps {
  activeTab: TabType;
  currentLang: Language;
}

export const SEOMetadata: React.FC<SEOMetadataProps> = ({ activeTab, currentLang }) => {
  const route = getRouteFromTab(activeTab);
  const isVi = currentLang === 'vi';

  const title = isVi ? route.titleVi : route.titleEn;
  const description = isVi ? route.descVi : route.descEn;
  const keywords = isVi ? route.keywordsVi : route.keywordsEn;
  const canonicalUrl = `${window.location.origin}${route.path}`;

  useEffect(() => {
    // 1. Dynamic Document Title
    document.title = title;

    // Helper to update or create meta tags
    const setMetaTag = (selector: string, attrName: string, attrValue: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMetaTag('meta[name="description"]', 'name', 'description', description);
    setMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords);
    setMetaTag('meta[name="robots"]', 'name', 'robots', activeTab === 'not-found' ? 'noindex, nofollow' : 'index, follow, max-image-preview:large');

    // 3. Open Graph Social Tags
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'Vietnam E-Visa Agency Services');

    // 4. Canonical URL Link
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 5. Schema.org JSON-LD Structured Data Injection for Search Engine Rich Snippets
    let jsonLdScript = document.getElementById('seo-json-ld') as HTMLScriptElement | null;
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.id = 'seo-json-ld';
      jsonLdScript.type = 'application/ld+json';
      document.head.appendChild(jsonLdScript);
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'GovernmentService',
          '@id': `${canonicalUrl}#service`,
          'name': 'Vietnam E-Visa Facilitation & Fast-Track Agency Service',
          'serviceType': 'Immigration & Visa Processing',
          'provider': {
            '@type': 'Organization',
            'name': 'Vietnam Visa Online Services Portal',
            'url': window.location.origin,
            'logo': `${window.location.origin}/logo.png`,
            'telephone': '+84 988 888 888',
            'email': 'support@vietnamvisa.govt.vn'
          },
          'areaServed': {
            '@type': 'Country',
            'name': 'Vietnam'
          },
          'description': description
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${canonicalUrl}#breadcrumb`,
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': isVi ? 'Trang Chủ' : 'Home',
              'item': window.location.origin
            },
            ...(activeTab !== 'home'
              ? [
                  {
                    '@type': 'ListItem',
                    'position': 2,
                    'name': isVi ? route.breadcrumbVi : route.breadcrumbEn,
                    'item': canonicalUrl
                  }
                ]
              : [])
          ]
        },
        ...(activeTab === 'faqs'
          ? [
              {
                '@type': 'FAQPage',
                'mainEntity': [
                  {
                    '@type': 'Question',
                    'name': 'How long does a Vietnam e-Visa take to process?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'Standard processing takes 3-5 business days. Urgent processing options are available for 24-hour, 4-hour, and 1-hour emergency situations.'
                    }
                  },
                  {
                    '@type': 'Question',
                    'name': 'Which countries are exempt from Vietnam visa?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'Citizens of 24 countries including UK, Germany, France, Italy, Spain, Japan, South Korea, Russia, and ASEAN nations enjoy 14 to 45 days visa-free entry.'
                    }
                  }
                ]
              }
            ]
          : [])
      ]
    };

    jsonLdScript.textContent = JSON.stringify(structuredData);
  }, [activeTab, currentLang, title, description, keywords, canonicalUrl, isVi, route]);

  return null;
};
