import React from 'react';
import { Calendar, Plane, Clock, ShieldCheck, Check, Sparkles, AlertCircle } from 'lucide-react';
import { VisaType, ProcessingTime, ArrivalPort, ExtraService, Language, PurposeOfVisit } from '../../types';
import { VISA_TYPE_PRICING, PROCESSING_SPEED_PRICING, EXTRA_SERVICES_PRICING } from '../../data/pricing';
import { AIRPORTS_AND_PORTS } from '../../data/countries';
import { TRANSLATIONS } from '../../data/translations';

interface Step1OptionsProps {
  currentLang: Language;
  purpose: PurposeOfVisit;
  setPurpose: (p: PurposeOfVisit) => void;
  visaType: VisaType;
  setVisaType: (vt: VisaType) => void;
  entryDate: string;
  setEntryDate: (d: string) => void;
  exitDate: string;
  setExitDate: (d: string) => void;
  arrivalPort: ArrivalPort;
  setArrivalPort: (port: ArrivalPort) => void;
  processingTime: ProcessingTime;
  setProcessingTime: (pt: ProcessingTime) => void;
  extraServices: ExtraService[];
  setExtraServices: (services: ExtraService[]) => void;
  onNext: () => void;
}

export const Step1Options: React.FC<Step1OptionsProps> = ({
  currentLang,
  purpose,
  setPurpose,
  visaType,
  setVisaType,
  entryDate,
  setEntryDate,
  exitDate,
  setExitDate,
  arrivalPort,
  setArrivalPort,
  processingTime,
  setProcessingTime,
  extraServices,
  setExtraServices,
  onNext
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const toggleExtraService = (srv: ExtraService) => {
    if (extraServices.includes(srv)) {
      setExtraServices(extraServices.filter(s => s !== srv));
    } else {
      setExtraServices([...extraServices, srv]);
    }
  };

  // Auto calculate exit date when entry date changes if empty
  const handleEntryDateChange = (val: string) => {
    setEntryDate(val);
    if (val && !exitDate) {
      const d = new Date(val);
      d.setDate(d.getDate() + 29); // Default 30 days
      setExitDate(d.toISOString().split('T')[0]);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8 space-y-8">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{t.step1Title}</h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">Configure your entry type, processing timeline, and port of entry.</p>
      </div>

      {/* Purpose of Visit */}
      <div className="space-y-3">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
          Purpose of Visit
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
            { id: 'tourism', label: 'Tourism / Travel', desc: 'Sightseeing & Vacation' },
            { id: 'business', label: 'Business / Working', desc: 'Meetings & Conferences' },
            { id: 'family', label: 'Family / Visiting', desc: 'Relatives & Friends' },
            { id: 'transit', label: 'Transit', desc: 'Layover in Airport' }
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setPurpose(item.id as PurposeOfVisit)}
              className={`p-3.5 rounded-xl border text-left text-xs transition-all ${
                purpose === item.id
                  ? 'bg-indigo-50 border-indigo-600 ring-2 ring-indigo-600/20 font-bold text-indigo-950'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className="font-bold">{item.label}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">{item.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Visa Duration & Entry Type */}
      <div className="space-y-3">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
          Visa Category & Validity
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {(Object.keys(VISA_TYPE_PRICING) as VisaType[]).map((vt) => {
            const config = VISA_TYPE_PRICING[vt];
            const isSelected = visaType === vt;

            return (
              <button
                key={vt}
                type="button"
                onClick={() => setVisaType(vt)}
                className={`p-4 rounded-xl border text-left text-xs transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-indigo-50/80 border-indigo-600 ring-2 ring-indigo-600/20 text-slate-900 font-bold shadow-sm'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-slate-900">
                      {currentLang === 'vi' ? config.labelVi : config.labelEn}
                    </span>
                    {isSelected && <Check className="w-4 h-4 text-indigo-600 shrink-0" />}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Duration: {config.durationDays} Days | Gov Fee: ${config.govFeeUsd}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-indigo-700">
                  <span>Service Fee: ${config.serviceFeeUsd}</span>
                  <span className="font-extrabold text-sm">${config.govFeeUsd + config.serviceFeeUsd} USD</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Travel Dates & Arrival Port */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-slate-500" />
            <span>{t.entryDate}</span>
          </label>
          <input
            type="date"
            value={entryDate}
            onChange={(e) => handleEntryDateChange(e.target.value)}
            className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-slate-500" />
            <span>{t.exitDate}</span>
          </label>
          <input
            type="date"
            value={exitDate}
            onChange={(e) => setExitDate(e.target.value)}
            className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
            <Plane className="w-4 h-4 text-slate-500" />
            <span>{t.arrivalPort}</span>
          </label>
          <select
            value={arrivalPort}
            onChange={(e) => setArrivalPort(e.target.value as ArrivalPort)}
            className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            {AIRPORTS_AND_PORTS.map((port) => (
              <option key={port.id} value={port.id}>
                {currentLang === 'vi' ? port.nameVi : port.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Processing Speed Options */}
      <div className="space-y-3">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-indigo-600" />
            <span>Processing Time Speed</span>
          </span>
          <span className="text-emerald-700 text-[11px] font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            Emergency Processing Available 24/7
          </span>
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {(Object.keys(PROCESSING_SPEED_PRICING) as ProcessingTime[]).map((pt) => {
            const speedConfig = PROCESSING_SPEED_PRICING[pt];
            const isSelected = processingTime === pt;

            return (
              <button
                key={pt}
                type="button"
                onClick={() => setProcessingTime(pt)}
                className={`p-4 rounded-xl border text-left text-xs transition-all relative ${
                  isSelected
                    ? 'bg-indigo-600 text-white border-indigo-700 shadow-md font-bold'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {pt === 'super_emergency_1h' && (
                  <span className="absolute -top-2 -right-2 bg-amber-400 text-slate-950 text-[9px] font-extrabold px-2 py-0.5 rounded-full shadow">
                    1-HOUR ULTRA
                  </span>
                )}
                <div className="font-bold text-sm">{speedConfig.labelEn}</div>
                <div className={`text-[11px] mt-1 ${isSelected ? 'text-indigo-100' : 'text-slate-500'}`}>
                  {speedConfig.timeTextEn}
                </div>
                <div className={`mt-2 font-extrabold text-xs ${isSelected ? 'text-amber-300' : 'text-indigo-700'}`}>
                  {speedConfig.feePerApplicantUsd === 0 ? 'Standard Included' : `+$${speedConfig.feePerApplicantUsd} USD / pax`}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Extra Airport Concierge Services */}
      <div className="space-y-3 pt-2">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>{t.extraServices}</span>
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {(Object.keys(EXTRA_SERVICES_PRICING) as ExtraService[]).map((srv) => {
            const config = EXTRA_SERVICES_PRICING[srv];
            const isChecked = extraServices.includes(srv);

            return (
              <div
                key={srv}
                onClick={() => toggleExtraService(srv)}
                className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                  isChecked
                    ? 'bg-amber-50/80 border-amber-500 ring-2 ring-amber-400/30'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 border ${
                  isChecked ? 'bg-amber-500 border-amber-600 text-slate-950' : 'bg-slate-100 border-slate-300'
                }`}>
                  {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-slate-900">
                      {currentLang === 'vi' ? config.labelVi : config.labelEn}
                    </span>
                    <span className="text-xs font-extrabold text-amber-700 bg-amber-100/60 px-2 py-0.5 rounded">
                      +${config.feePerApplicantUsd} USD
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                    {currentLang === 'vi' ? config.descriptionVi : config.descriptionEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Navigation */}
      <div className="pt-6 border-t border-slate-200 flex justify-end">
        <button
          type="button"
          onClick={onNext}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-md transition-all flex items-center gap-2 border border-indigo-500"
        >
          <span>Continue to Applicant Details</span>
          <Check className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
