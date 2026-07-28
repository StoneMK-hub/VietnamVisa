import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroBanner } from './components/HeroBanner';
import { QuickFeeCalculator } from './components/QuickFeeCalculator';
import { StepProgressBar } from './components/ApplicationForm/StepProgressBar';
import { Step1Options } from './components/ApplicationForm/Step1Options';
import { Step2Applicants } from './components/ApplicationForm/Step2Applicants';
import { Step3Review } from './components/ApplicationForm/Step3Review';
import { Step4Payment } from './components/ApplicationForm/Step4Payment';
import { VisaApprovalCertificate } from './components/VisaApprovalCertificate';
import { StatusTrackerView } from './components/StatusTrackerView';
import { RequirementsChecker } from './components/RequirementsChecker';
import { FaqSection } from './components/FaqSection';
import { ContactView } from './components/ContactView';
import { SeoContentSection } from './components/SeoContentSection';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { ApplyOnlineGuideView } from './components/ApplyOnlineGuideView';
import { AIVisaAssistant } from './components/AIVisaAssistant';

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
  const [activeTab, setActiveTab] = useState<'home' | 'apply' | 'calculator' | 'requirements' | 'track' | 'faq' | 'contact'>('home');

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

  // Quick action from Calculator -> Direct Apply Portal Guide
  const handleApplyWithOptions = (_options: {
    nationality: string;
    visaType: VisaType;
    processingTime: ProcessingTime;
    applicantCount: number;
  }) => {
    setActiveTab('apply');
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  // Step 3 -> Step 4 Create Application Call
  const handleProceedToPayment = async () => {
    try {
      const res = await fetch('/api/visa/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          visaType,
          purpose,
          entryDate,
          exitDate,
          arrivalPort,
          processingTime,
          extraServices,
          applicants,
          contactEmail,
          contactPhone,
          contactAddress,
          specialNotes
        })
      });

      const data = await res.json();
      if (data.success && data.application) {
        setCreatedApplication(data.application);
        setCurrentStep(4);
      } else {
        alert(data.error || 'Could not process application request.');
      }
    } catch (err) {
      alert('Error connecting to server.');
    }
  };

  const handlePaymentSuccess = (updatedApp: VisaApplication) => {
    setCreatedApplication(updatedApp);
    setViewingCertificate(true);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-800 antialiased selection:bg-indigo-600 selection:text-white">
      {/* Top Navigation */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        activeTab={activeTab}
        onNavigate={(tab) => {
          setActiveTab(tab);
          setViewingCertificate(false);
        }}
      />

      {/* Main Body */}
      <main className="flex-1">
        {/* Certificate View Override */}
        {viewingCertificate && createdApplication ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
            <VisaApprovalCertificate
              currentLang={currentLang}
              application={createdApplication}
              onBackToHome={() => {
                setViewingCertificate(false);
                setActiveTab('home');
              }}
              onTrackStatus={() => {
                setViewingCertificate(false);
                setActiveTab('track');
              }}
            />
          </div>
        ) : (
          <>
            {/* HOME VIEW */}
            {activeTab === 'home' && (
              <div className="space-y-12 pb-16">
                <HeroBanner
                  currentLang={currentLang}
                  onStartApplication={() => setActiveTab('apply')}
                  onOpenCalculator={() => {
                    setActiveTab('calculator');
                  }}
                  onOpenTrack={() => setActiveTab('track')}
                  onApplyWithOptions={handleApplyWithOptions}
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                  <SeoContentSection
                    currentLang={currentLang}
                    onStartApplication={() => setActiveTab('apply')}
                    onOpenRequirements={() => setActiveTab('requirements')}
                  />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                  <RequirementsChecker
                    currentLang={currentLang}
                    onApplyForCountry={(cName) => {
                      if (applicants.length > 0) {
                        setApplicants([{ ...applicants[0], nationality: cName }]);
                      }
                      setActiveTab('apply');
                    }}
                  />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                  <GoogleReviewsSection currentLang={currentLang} />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                  <FaqSection currentLang={currentLang} />
                </div>
              </div>
            )}

            {/* APPLY ONLINE GUIDE & DIRECT PORTAL LINK VIEW */}
            {activeTab === 'apply' && (
              <ApplyOnlineGuideView currentLang={currentLang} />
            )}

            {/* CALCULATOR TAB */}
            {activeTab === 'calculator' && (
              <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
                <QuickFeeCalculator
                  currentLang={currentLang}
                  onApplyWithOptions={handleApplyWithOptions}
                />
              </div>
            )}

            {/* REQUIREMENTS TAB */}
            {activeTab === 'requirements' && (
              <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
                <RequirementsChecker
                  currentLang={currentLang}
                  onApplyForCountry={(cName) => {
                    if (applicants.length > 0) {
                      setApplicants([{ ...applicants[0], nationality: cName }]);
                    }
                    setActiveTab('apply');
                  }}
                />
              </div>
            )}

            {/* TRACKING TAB */}
            {activeTab === 'track' && (
              <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
                <StatusTrackerView
                  currentLang={currentLang}
                  onViewCertificate={(app) => {
                    setCreatedApplication(app);
                    setViewingCertificate(true);
                  }}
                />
              </div>
            )}

            {/* FAQ TAB */}
            {activeTab === 'faq' && (
              <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
                <FaqSection currentLang={currentLang} />
              </div>
            )}

            {/* CONTACT TAB */}
            {activeTab === 'contact' && (
              <ContactView
                currentLang={currentLang}
                onStartApplication={() => {
                  setActiveTab('apply');
                  window.scrollTo({ top: 100, behavior: 'smooth' });
                }}
              />
            )}
          </>
        )}
      </main>

      {/* Floating Gemini AI Consultant */}
      <AIVisaAssistant currentLang={currentLang} />

      {/* Official Footer */}
      <Footer
        currentLang={currentLang}
        onNavigate={(tab) => {
          setActiveTab(tab);
          setViewingCertificate(false);
        }}
      />
    </div>
  );
}
