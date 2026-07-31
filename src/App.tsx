import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroBanner } from './components/HeroBanner';
import { QuickFeeCalculator } from './components/QuickFeeCalculator';
import { StatusTrackerView } from './components/StatusTrackerView';
import { RequirementsChecker } from './components/RequirementsChecker';
import { FaqSection } from './components/FaqSection';
import { ContactView } from './components/ContactView';
import { SeoContentSection } from './components/SeoContentSection';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { ApplyOnlineGuideView } from './components/ApplyOnlineGuideView';
import { SEOMetadata } from './components/SEOMetadata';
import { SEOBreadcrumb } from './components/SEOBreadcrumb';
import { TabType, getTabFromPath, getRouteFromTab } from './routes';
import { VisaApprovalCertificate } from './components/VisaApprovalCertificate';
import { PaymentGuidelinesView, TermsAndConditionsView, PrivacyPolicyView } from './components/PolicyViews';
import { CookieConsentBanner } from './components/CookieConsentBanner';
import { AboutView } from './components/AboutView';
import { OverviewView } from './components/OverviewView';

import {
  Language,
  VisaType,
  PurposeOfVisit,
  ProcessingTime,
  ArrivalPort,
  ExtraService,
  Applicant,
  VisaApplication
} from './types';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [activeTab, setActiveTab] = useState<TabType>(() => getTabFromPath(window.location.pathname));

  // Handle URL changes & Browser Back/Forward buttons (SEO Routing)
  useEffect(() => {
    const initialTab = getTabFromPath(window.location.pathname);
    setActiveTab(initialTab);

    const handlePopState = () => {
      const tabFromUrl = getTabFromPath(window.location.pathname);
      setActiveTab(tabFromUrl);
      setViewingCertificate(false);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (tab: TabType | 'faq') => {
    const targetTab: TabType = tab === 'faq' ? 'faqs' : (tab as TabType);
    setActiveTab(targetTab);
    setViewingCertificate(false);

    const route = getRouteFromTab(targetTab);
    if (window.location.pathname !== route.path) {
      window.history.pushState({}, '', route.path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Application Wizard State
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [purpose, setPurpose] = useState<PurposeOfVisit>('tourism');
  const [visaType, setVisaType] = useState<VisaType>('tourist_30_single');
  const [entryDate, setEntryDate] = useState<string>('2026-08-15');
  const [exitDate, setExitDate] = useState<string>('2026-09-10');
  const [arrivalPort, setArrivalPort] = useState<ArrivalPort>('noi_bai');
  const [processingTime, setProcessingTime] = useState<ProcessingTime>('standard');
  const [extraServices, setExtraServices] = useState<ExtraService[]>(['fast_track']);

  const [applicants, setApplicants] = useState<Applicant[]>([
    {
      id: 'app-default-1',
      fullName: 'JOHN MICHAEL SMITH',
      gender: 'male',
      dateOfBirth: '1988-05-14',
      nationality: 'United States',
      passportNumber: 'N98234101',
      passportExpiry: '2031-10-20'
    }
  ]);

  const [contactEmail, setContactEmail] = useState<string>('john.smith@example.com');
  const [contactPhone, setContactPhone] = useState<string>('+1 415 555 0192');
  const [contactAddress, setContactAddress] = useState<string>('Hanoi Hotel, Vietnam');
  const [specialNotes, setSpecialNotes] = useState<string>('');

  // Submitted Application for Certificate View
  const [createdApplication, setCreatedApplication] = useState<VisaApplication | null>(null);
  const [viewingCertificate, setViewingCertificate] = useState<boolean>(false);
  const [forceOpenCookieBanner, setForceOpenCookieBanner] = useState<boolean>(false);

  // Quick action from Calculator -> Direct Apply Portal Guide
  const handleApplyWithOptions = (_options: {
    nationality: string;
    visaType: VisaType;
    processingTime: ProcessingTime;
    applicantCount: number;
  }) => {
    handleNavigate('apply');
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-800 antialiased selection:bg-indigo-600 selection:text-white">
      {/* SEO Head Metadata & OpenGraph/JSON-LD Dynamic Tags */}
      <SEOMetadata activeTab={activeTab} currentLang={currentLang} />

      {/* Top Navigation */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        activeTab={activeTab === 'faqs' ? 'faq' : activeTab}
        onNavigate={handleNavigate}
      />

      {/* Main Body */}
      <main className="flex-1">
        {/* Certificate View Override */}
        {viewingCertificate && createdApplication ? (
          <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 py-4 sm:py-10">
            <VisaApprovalCertificate
              currentLang={currentLang}
              application={createdApplication}
              onBackToHome={() => handleNavigate('home')}
              onTrackStatus={() => handleNavigate('track')}
            />
          </div>
        ) : (
          <>
            {/* HOME VIEW (Path: /) */}
            {activeTab === 'home' && (
              <div className="space-y-5 sm:space-y-10 pb-8 sm:pb-16">
                <HeroBanner
                  currentLang={currentLang}
                  onStartApplication={() => handleNavigate('apply')}
                  onOpenCalculator={() => handleNavigate('calculator')}
                  onOpenTrack={() => handleNavigate('track')}
                  onApplyWithOptions={handleApplyWithOptions}
                />

                <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8">
                  <SeoContentSection
                    currentLang={currentLang}
                    onStartApplication={() => handleNavigate('apply')}
                    onOpenRequirements={() => handleNavigate('requirements')}
                    onOpenOverview={() => handleNavigate('overview')}
                  />
                </div>

                <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8">
                  <RequirementsChecker
                    currentLang={currentLang}
                    isHome={true}
                    onViewAll={() => handleNavigate('requirements')}
                    onApplyForCountry={(cName) => {
                      if (applicants.length > 0) {
                        setApplicants([{ ...applicants[0], nationality: cName }]);
                      }
                      handleNavigate('apply');
                    }}
                  />
                </div>

                <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8">
                  <GoogleReviewsSection currentLang={currentLang} />
                </div>

                <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8">
                  <FaqSection currentLang={currentLang} />
                </div>
              </div>
            )}

            {/* OVERVIEW VIEW (Path: /overview) */}
            {activeTab === 'overview' && (
              <OverviewView currentLang={currentLang} onNavigate={handleNavigate} />
            )}

            {/* APPLY ONLINE GUIDE & DIRECT PORTAL VIEW (Path: /how-to-apply) */}
            {activeTab === 'apply' && (
              <ApplyOnlineGuideView currentLang={currentLang} />
            )}

            {/* CALCULATOR TAB (Path: /visa-fee) */}
            {activeTab === 'calculator' && (
              <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 py-4 sm:py-10">
                <QuickFeeCalculator
                  currentLang={currentLang}
                  onApplyWithOptions={handleApplyWithOptions}
                />
              </div>
            )}

            {/* REQUIREMENTS TAB (Path: /visa-requirements) */}
            {activeTab === 'requirements' && (
              <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 py-4 sm:py-10">
                <RequirementsChecker
                  currentLang={currentLang}
                  onApplyForCountry={(cName) => {
                    if (applicants.length > 0) {
                      setApplicants([{ ...applicants[0], nationality: cName }]);
                    }
                    handleNavigate('apply');
                  }}
                />
              </div>
            )}

            {/* TRACKING TAB (Path: /track-application) */}
            {activeTab === 'track' && (
              <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 py-4 sm:py-10">
                <StatusTrackerView
                  currentLang={currentLang}
                  onViewCertificate={(app) => {
                    setCreatedApplication(app);
                    setViewingCertificate(true);
                  }}
                />
              </div>
            )}

            {/* FAQ TAB (Path: /faqs) */}
            {activeTab === 'faqs' && (
              <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 py-4 sm:py-10">
                <FaqSection currentLang={currentLang} />
              </div>
            )}

            {/* CONTACT TAB (Path: /contact-us) */}
            {activeTab === 'contact' && (
              <ContactView
                currentLang={currentLang}
                onStartApplication={() => handleNavigate('apply')}
              />
            )}

            {/* ABOUT US TAB (Path: /about) */}
            {activeTab === 'about' && (
              <AboutView
                currentLang={currentLang}
                onNavigate={handleNavigate}
              />
            )}

            {/* PAYMENT GUIDELINES TAB (Path: /payment-guidelines) */}
            {activeTab === 'payment-guidelines' && (
              <PaymentGuidelinesView
                currentLang={currentLang}
                onNavigate={handleNavigate}
              />
            )}

            {/* TERMS & CONDITIONS TAB (Path: /terms-and-conditions) */}
            {activeTab === 'terms-and-conditions' && (
              <TermsAndConditionsView
                currentLang={currentLang}
                onNavigate={handleNavigate}
              />
            )}

            {/* PRIVACY POLICY TAB (Path: /privacy-policy) */}
            {activeTab === 'privacy-policy' && (
              <PrivacyPolicyView
                currentLang={currentLang}
                onNavigate={handleNavigate}
              />
            )}
          </>
        )}
      </main>

      {/* Cookie Consent Banner */}
      <CookieConsentBanner
        currentLang={currentLang}
        onNavigate={handleNavigate}
        forceOpen={forceOpenCookieBanner}
        onCloseForceOpen={() => setForceOpenCookieBanner(false)}
      />

      {/* Official Footer */}
      <Footer
        currentLang={currentLang}
        onNavigate={handleNavigate}
        onOpenCookiePreferences={() => setForceOpenCookieBanner(true)}
      />
    </div>
  );
}

