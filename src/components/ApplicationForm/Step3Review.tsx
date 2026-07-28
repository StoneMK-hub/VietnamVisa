import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckSquare, Square, ShieldCheck, ArrowRight, Edit3, UserCheck, CreditCard } from 'lucide-react';
import { VisaType, ProcessingTime, ArrivalPort, ExtraService, Applicant, Language, PurposeOfVisit } from '../../types';
import { VISA_TYPE_PRICING, PROCESSING_SPEED_PRICING, EXTRA_SERVICES_PRICING, calculateVisaFees } from '../../data/pricing';
import { AIRPORTS_AND_PORTS } from '../../data/countries';
import { TRANSLATIONS } from '../../data/translations';

interface Step3ReviewProps {
  currentLang: Language;
  purpose: PurposeOfVisit;
  visaType: VisaType;
  processingTime: ProcessingTime;
  arrivalPort: ArrivalPort;
  entryDate: string;
  exitDate: string;
  extraServices: ExtraService[];
  applicants: Applicant[];
  contactEmail: string;
  setContactEmail: (val: string) => void;
  contactPhone: string;
  setContactPhone: (val: string) => void;
  contactAddress: string;
  setContactAddress: (val: string) => void;
  specialNotes: string;
  setSpecialNotes: (val: string) => void;
  onNext: () => void;
  onBack: () => void;
  onEditStep: (step: number) => void;
}

export const Step3Review: React.FC<Step3ReviewProps> = ({
  currentLang,
  purpose,
  visaType,
  processingTime,
  arrivalPort,
  entryDate,
  exitDate,
  extraServices,
  applicants,
  contactEmail,
  setContactEmail,
  contactPhone,
  setContactPhone,
  contactAddress,
  setContactAddress,
  specialNotes,
  setSpecialNotes,
  onNext,
  onBack,
  onEditStep
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const [termsAgreed, setTermsAgreed] = useState(true);

  const pricing = calculateVisaFees(
    visaType,
    processingTime,
    extraServices,
    applicants.length
  );

  const portInfo = AIRPORTS_AND_PORTS.find(p => p.id === arrivalPort) || AIRPORTS_AND_PORTS[0];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8 space-y-8">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{t.step3Title}</h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Verify all information carefully before proceeding to secure payment.
        </p>
      </div>

      {/* Contact Person Form */}
      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
          <Mail className="w-4 h-4 text-indigo-600" />
          <span>{t.contactInfo}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block text-slate-700 font-bold mb-1">
              {t.email} <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              placeholder="e.g. traveler@example.com"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <span className="text-[10px] text-slate-400">Approval letter & receipts will be sent to this email.</span>
          </div>

          <div>
            <label className="block text-slate-700 font-bold mb-1">
              {t.phone} <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              placeholder="e.g. +1 415 555 0192"
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <span className="text-[10px] text-slate-400">WhatsApp / SMS for emergency delivery updates.</span>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-slate-700 font-bold mb-1">
              {t.address}
            </label>
            <input
              type="text"
              placeholder="e.g. Hotel Metropole Hanoi, 15 Ngo Quyen, Hoan Kiem, Hanoi"
              value={contactAddress}
              onChange={(e) => setContactAddress(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
        </div>
      </div>

      {/* Summary Section 1: Trip & Visa Options */}
      <div className="border border-slate-200 rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <h3 className="text-sm font-bold text-slate-900">Trip & Visa Details</h3>
          <button
            type="button"
            onClick={() => onEditStep(1)}
            className="text-xs font-bold text-indigo-600 hover:underline flex items-center gap-1"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Edit</span>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div>
            <span className="text-slate-400 font-medium block">Purpose</span>
            <span className="font-bold text-slate-800 uppercase">{purpose}</span>
          </div>
          <div>
            <span className="text-slate-400 font-medium block">Visa Category</span>
            <span className="font-bold text-slate-800">{VISA_TYPE_PRICING[visaType]?.labelEn}</span>
          </div>
          <div>
            <span className="text-slate-400 font-medium block">Dates</span>
            <span className="font-bold text-slate-800">{entryDate} to {exitDate}</span>
          </div>
          <div>
            <span className="text-slate-400 font-medium block">Port of Entry</span>
            <span className="font-bold text-slate-800">{portInfo.name.split('(')[0]}</span>
          </div>
        </div>

        <div className="pt-2 flex flex-wrap gap-2 text-xs">
          <span className="bg-indigo-100 text-indigo-800 font-bold px-2.5 py-1 rounded-lg">
            Speed: {PROCESSING_SPEED_PRICING[processingTime]?.labelEn}
          </span>
          {extraServices.map(srv => (
            <span key={srv} className="bg-amber-100 text-amber-900 font-semibold px-2.5 py-1 rounded-lg">
              + {EXTRA_SERVICES_PRICING[srv]?.labelEn}
            </span>
          ))}
        </div>
      </div>

      {/* Summary Section 2: Applicants List */}
      <div className="border border-slate-200 rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <h3 className="text-sm font-bold text-slate-900">Applicants ({applicants.length})</h3>
          <button
            type="button"
            onClick={() => onEditStep(2)}
            className="text-xs font-bold text-indigo-600 hover:underline flex items-center gap-1"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Edit</span>
          </button>
        </div>

        <div className="space-y-3">
          {applicants.map((a, i) => (
            <div key={a.id} className="bg-slate-50 p-3.5 rounded-xl text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border">
              <div>
                <span className="font-bold text-slate-900 mr-2">#{i + 1}. {a.fullName || 'UNNAMED APPLICANT'}</span>
                <span className="text-slate-500">({a.nationality} • Passport: {a.passportNumber || 'N/A'})</span>
              </div>
              <span className="text-slate-500 text-[11px]">DOB: {a.dateOfBirth} | Exp: {a.passportExpiry}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Section 3: Detailed Price Breakdown */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-4 border border-slate-800 shadow-xl">
        <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-400 pb-2 border-b border-slate-800">
          Final Payment Summary
        </h3>

        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-slate-300">Government Stamping & E-Visa Fee ({applicants.length} pax):</span>
            <span className="font-semibold text-white">${pricing.govFeeTotal} USD</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-300">Application Filing & Processing Fee:</span>
            <span className="font-semibold text-white">${pricing.serviceFeeTotal} USD</span>
          </div>

          {pricing.speedFeeTotal > 0 && (
            <div className="flex justify-between text-indigo-300 font-semibold">
              <span>Speed Surcharge ({PROCESSING_SPEED_PRICING[processingTime]?.labelEn}):</span>
              <span>+${pricing.speedFeeTotal} USD</span>
            </div>
          )}

          {pricing.extraServicesTotal > 0 && (
            <div className="flex justify-between text-amber-300 font-semibold">
              <span>Extra Airport Concierge Services:</span>
              <span>+${pricing.extraServicesTotal} USD</span>
            </div>
          )}

          {pricing.groupDiscount > 0 && (
            <div className="flex justify-between text-emerald-400 font-semibold">
              <span>Group Discount:</span>
              <span>-${pricing.groupDiscount} USD</span>
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-400 font-medium">Grand Total Payable</div>
            <div className="text-2xl font-black text-indigo-400">
              ${pricing.grandTotalUsd} USD
            </div>
          </div>
          <div className="text-right text-xs text-slate-300">
            <div>≈ {pricing.grandTotalVnd.toLocaleString('vi-VN')} VND</div>
            <div className="text-[10px] text-slate-400">Fixed rate $1 = 25,450 VND</div>
          </div>
        </div>
      </div>

      {/* Declaration & Terms */}
      <div className="space-y-3 pt-2">
        <label className="flex items-start gap-3 cursor-pointer text-xs text-slate-700 leading-normal">
          <input
            type="checkbox"
            checked={termsAgreed}
            onChange={(e) => setTermsAgreed(e.target.checked)}
            className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-600 mt-0.5"
          />
          <span>
            I declare that all personal and passport information provided in this form is 100% accurate and true. I understand that false statements may lead to visa rejection or entry denial by the Immigration Department.
          </span>
        </label>
      </div>

      {/* Actions */}
      <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-100 transition-colors"
        >
          Back
        </button>

        <button
          type="button"
          disabled={!termsAgreed || !contactEmail}
          onClick={onNext}
          className={`font-bold text-sm px-8 py-3.5 rounded-xl shadow-md transition-all flex items-center gap-2 ${
            termsAgreed && contactEmail
              ? 'bg-indigo-600 hover:bg-indigo-700 text-white border border-indigo-500'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          <CreditCard className="w-4 h-4" />
          <span>Proceed to Payment (${pricing.grandTotalUsd} USD)</span>
        </button>
      </div>
    </div>
  );
};
