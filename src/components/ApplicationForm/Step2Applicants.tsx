import React from 'react';
import { User, Plus, Trash2, Upload, AlertTriangle, CheckCircle2, ShieldAlert, FileText, Camera } from 'lucide-react';
import { Applicant, Language } from '../../types';
import { COUNTRIES_DATA } from '../../data/countries';
import { TRANSLATIONS } from '../../data/translations';

interface Step2ApplicantsProps {
  currentLang: Language;
  applicants: Applicant[];
  setApplicants: (applicants: Applicant[]) => void;
  entryDate: string;
  onNext: () => void;
  onBack: () => void;
}

export const Step2Applicants: React.FC<Step2ApplicantsProps> = ({
  currentLang,
  applicants,
  setApplicants,
  entryDate,
  onNext,
  onBack
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const addApplicant = () => {
    const newApplicant: Applicant = {
      id: `app-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      fullName: '',
      gender: 'male',
      dateOfBirth: '1990-01-01',
      nationality: 'United States',
      passportNumber: '',
      passportExpiry: '2030-01-01'
    };
    setApplicants([...applicants, newApplicant]);
  };

  const removeApplicant = (id: string) => {
    if (applicants.length <= 1) return;
    setApplicants(applicants.filter(a => a.id !== id));
  };

  const updateApplicant = (id: string, field: keyof Applicant, value: any) => {
    setApplicants(applicants.map(a => a.id === id ? { ...a, [field]: value } : a));
  };

  // Check if passport expiry date is < 6 months from entry date
  const checkPassportValidity = (expiryStr: string) => {
    if (!expiryStr || !entryDate) return { isOk: true, monthsDiff: 12 };
    const exp = new Date(expiryStr);
    const ent = new Date(entryDate);
    const diffTime = exp.getTime() - ent.getTime();
    const diffDays = diffTime / (1000 * 3600 * 24);
    const months = diffDays / 30;
    return { isOk: months >= 6, monthsDiff: Math.round(months) };
  };

  // Simulate Photo Upload
  const handlePhotoUpload = (id: string, type: 'passportPhotoUrl' | 'portraitPhotoUrl') => {
    const samplePhotos = {
      passportPhotoUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&q=80',
      portraitPhotoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
    };
    updateApplicant(id, type, samplePhotos[type]);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8 space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{t.step2Title}</h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Provide passport particulars exactly as printed on your passport document.
          </p>
        </div>

        <button
          type="button"
          onClick={addApplicant}
          className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 font-bold text-xs px-4 py-2.5 rounded-xl border border-indigo-200 transition-all flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4 text-indigo-700" />
          <span>Add Another Applicant</span>
        </button>
      </div>

      {/* Applicants Form List */}
      <div className="space-y-8">
        {applicants.map((app, idx) => {
          const validity = checkPassportValidity(app.passportExpiry);

          return (
            <div
              key={app.id}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 relative space-y-6"
            >
              {/* Header inside applicant card */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">
                    0{idx + 1}
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    Applicant #{idx + 1} {app.fullName ? `- ${app.fullName}` : ''}
                  </h3>
                </div>

                {applicants.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeApplicant(app.id)}
                    className="text-slate-400 hover:text-red-600 transition-colors p-1"
                    title="Remove applicant"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Input Fields Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Full Name */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.fullName} <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. SMITH JOHN MICHAEL"
                    value={app.fullName}
                    onChange={(e) => updateApplicant(app.id, 'fullName', e.target.value.toUpperCase())}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs font-bold text-slate-800 uppercase focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                  <span className="text-[10px] text-slate-400">Match MRZ lines at bottom of passport page</span>
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.gender} <span className="text-red-600">*</span>
                  </label>
                  <select
                    value={app.gender}
                    onChange={(e) => updateApplicant(app.id, 'gender', e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  >
                    <option value="male">Male (Nam)</option>
                    <option value="female">Female (Nữ)</option>
                    <option value="other">Other (Khác)</option>
                  </select>
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.dob} <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="date"
                    value={app.dateOfBirth}
                    onChange={(e) => updateApplicant(app.id, 'dateOfBirth', e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>

                {/* Nationality */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.nationality} <span className="text-red-600">*</span>
                  </label>
                  <select
                    value={app.nationality}
                    onChange={(e) => updateApplicant(app.id, 'nationality', e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  >
                    {COUNTRIES_DATA.map((c) => (
                      <option key={c.code} value={c.countryName}>
                        {c.flagEmoji} {c.countryName}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Passport Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.passportNumber} <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. N98234101"
                    value={app.passportNumber}
                    onChange={(e) => updateApplicant(app.id, 'passportNumber', e.target.value.toUpperCase())}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs font-bold text-slate-800 uppercase focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>

                {/* Passport Expiry Date */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.passportExpiry} <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="date"
                    value={app.passportExpiry}
                    onChange={(e) => updateApplicant(app.id, 'passportExpiry', e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>
              </div>

              {/* Passport Validity Warning */}
              {!validity.isOk && (
                <div className="bg-amber-50 border border-amber-300 rounded-xl p-3 text-amber-900 text-xs flex items-center gap-2.5">
                  <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
                  <div>
                    <p className="font-bold">Passport Expiry Alert ({validity.monthsDiff} months remaining)</p>
                    <p className="text-[11px] text-amber-800">
                      Vietnam Immigration requires passports to be valid for at least 6 months past entry date. Please renew passport if possible or request emergency override clearance.
                    </p>
                  </div>
                </div>
              )}

              {/* Passport Bio Photo & Portrait Photo Upload Simulation */}
              <div className="pt-2 border-t border-slate-200">
                <label className="block text-xs font-bold text-slate-800 mb-2">
                  Document Photos Upload & Quality Scan
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Passport Page Upload */}
                  <div className="bg-white border-2 border-dashed border-slate-300 hover:border-indigo-500 rounded-xl p-4 text-center transition-colors">
                    {app.passportPhotoUrl ? (
                      <div className="space-y-2">
                        <img
                          src={app.passportPhotoUrl}
                          alt="Passport Bio Page"
                          className="w-full h-24 object-cover rounded-lg border"
                        />
                        <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Passport MRZ Validated</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handlePhotoUpload(app.id, 'passportPhotoUrl')}
                          className="text-[11px] text-indigo-600 hover:underline"
                        >
                          Change Passport Photo
                        </button>
                      </div>
                    ) : (
                      <div
                        onClick={() => handlePhotoUpload(app.id, 'passportPhotoUrl')}
                        className="cursor-pointer space-y-2 py-2"
                      >
                        <FileText className="w-8 h-8 text-slate-400 mx-auto" />
                        <div className="text-xs font-semibold text-slate-700">{t.uploadPassportPhoto}</div>
                        <p className="text-[10px] text-slate-400">Clear scan of bio page including MRZ lines</p>
                        <span className="inline-block bg-slate-100 text-slate-700 text-[11px] font-bold px-3 py-1 rounded-lg border border-slate-200">
                          Click to Upload
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Portrait 4x6 Upload */}
                  <div className="bg-white border-2 border-dashed border-slate-300 hover:border-indigo-500 rounded-xl p-4 text-center transition-colors">
                    {app.portraitPhotoUrl ? (
                      <div className="space-y-2">
                        <img
                          src={app.portraitPhotoUrl}
                          alt="4x6 Portrait"
                          className="w-20 h-24 object-cover rounded-lg border mx-auto"
                        />
                        <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>4x6 Photo Accepted</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handlePhotoUpload(app.id, 'portraitPhotoUrl')}
                          className="text-[11px] text-indigo-600 hover:underline"
                        >
                          Change Portrait Photo
                        </button>
                      </div>
                    ) : (
                      <div
                        onClick={() => handlePhotoUpload(app.id, 'portraitPhotoUrl')}
                        className="cursor-pointer space-y-2 py-2"
                      >
                        <Camera className="w-8 h-8 text-slate-400 mx-auto" />
                        <div className="text-xs font-semibold text-slate-700">{t.uploadPortraitPhoto}</div>
                        <p className="text-[10px] text-slate-400">White background, front facing, no glasses</p>
                        <span className="inline-block bg-slate-100 text-slate-700 text-[11px] font-bold px-3 py-1 rounded-lg border border-slate-200">
                          Click to Upload
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-100 transition-colors"
        >
          Back to Options
        </button>

        <button
          type="button"
          onClick={onNext}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-md transition-all flex items-center gap-2 border border-indigo-500"
        >
          <span>Continue to Review</span>
        </button>
      </div>
    </div>
  );
};
