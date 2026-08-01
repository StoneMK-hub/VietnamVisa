import React, { useRef } from 'react';
import { Download, Printer, CheckCircle2, Shield, Calendar, MapPin, User, FileText, ArrowLeft, RefreshCw } from 'lucide-react';
import { VisaApplication, Language } from '../types';
import { VISA_TYPE_PRICING } from '../data/pricing';
import { AIRPORTS_AND_PORTS } from '../data/countries';
import { TRANSLATIONS } from '../data/translations';

interface VisaApprovalCertificateProps {
  currentLang: Language;
  application: VisaApplication;
  onBackToHome: () => void;
  onTrackStatus: () => void;
}

export const VisaApprovalCertificate: React.FC<VisaApprovalCertificateProps> = ({
  currentLang,
  application,
  onBackToHome,
  onTrackStatus
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const certificateRef = useRef<HTMLDivElement>(null);

  const portInfo = AIRPORTS_AND_PORTS.find(p => p.id === application.arrivalPort) || AIRPORTS_AND_PORTS[0];

  const handlePrint = () => {
    window.print();
  };

  const primaryApplicant = application.applicants[0] || {
    fullName: 'JOHN MICHAEL SMITH',
    nationality: 'United States',
    passportNumber: 'N98234101',
    dateOfBirth: '1988-05-14',
    gender: 'male',
    passportExpiry: '2031-10-20'
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Top Banner Notice */}
      <div className="bg-emerald-900 text-emerald-100 p-4 rounded-2xl border border-emerald-700 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-700 text-white flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6 text-emerald-300" />
          </div>
          <div>
            <h3 className="font-bold text-white text-sm sm:text-base">{t.successTitle}</h3>
            <p className="text-xs text-emerald-200">{t.successSub}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="bg-white text-emerald-950 font-bold text-xs px-4 py-2 rounded-xl hover:bg-emerald-100 transition-colors flex items-center gap-1.5 shadow"
          >
            <Printer className="w-4 h-4 text-emerald-900" />
            <span>Print Certificate</span>
          </button>
        </div>
      </div>

      {/* Certificate Sheet Container */}
      <div 
        ref={certificateRef}
        className="bg-white rounded-2xl shadow-2xl border-4 border-indigo-900 p-8 sm:p-12 relative overflow-hidden print:p-0 print:border-none print:shadow-none"
      >
        {/* Background Watermark Seal */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
          <span className="text-[350px] font-black text-indigo-900">★</span>
        </div>

        {/* Certificate Header */}
        <div className="text-center space-y-1.5 border-b-2 border-indigo-900/30 pb-6">
          <div className="text-xs font-bold uppercase tracking-widest text-indigo-900">
            CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
          </div>
          <div className="text-xs font-semibold text-slate-700 tracking-wider">
            Độc lập - Tự do - Hạnh phúc
          </div>
          <div className="w-24 h-0.5 bg-indigo-900 mx-auto my-1"></div>

          <div className="pt-2 text-xs font-bold uppercase text-slate-800">
            BỘ CÔNG AN - CỤC QUẢN LÝ XUẤT NHẬP CẢNH
          </div>
          <div className="text-[11px] text-slate-500 font-medium">
            IMMIGRATION DEPARTMENT - MINISTRY OF PUBLIC SECURITY
          </div>

          <div className="pt-4">
            <h1 className="text-xl sm:text-2xl font-black text-indigo-950 tracking-wide uppercase">
              THỊ THỰC ĐIỆN TỬ VIỆT NAM (VIETNAM E-VISA)
            </h1>
            <p className="text-xs text-slate-600 font-semibold mt-0.5">
              ELECTRONIC VISA APPROVAL CERTIFICATE
            </p>
          </div>
        </div>

        {/* Barcode & Reference Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-b border-slate-200">
          <div>
            <span className="text-[10px] text-slate-400 font-bold uppercase block">E-Visa Reference Code</span>
            <div className="text-lg font-mono font-black text-indigo-900 tracking-wider">
              {application.referenceCode}
            </div>
            <span className="text-[11px] text-slate-500">Issued Date: {new Date().toISOString().split('T')[0]}</span>
          </div>

          <div className="flex items-center justify-start sm:justify-end gap-3">
            {/* Fake QR Code */}
            <div className="w-16 h-16 bg-slate-900 text-white p-1.5 rounded border border-slate-700 flex flex-col items-center justify-center text-[8px] text-center font-mono">
              <span className="text-[10px] font-bold text-indigo-400">VN-VISA</span>
              <span>QR-VALID</span>
              <span className="text-[6px] text-slate-400">IMMIGRATION</span>
            </div>

            {/* Fake Barcode */}
            <div className="font-mono text-xs font-bold border-l pl-3 border-slate-300 space-y-1">
              <div className="tracking-[0.25em] text-slate-900 text-sm">||| |||| || |||||</div>
              <div className="text-[9px] text-slate-500">{application.referenceCode}</div>
            </div>
          </div>
        </div>

        {/* Primary Applicant Particulars */}
        <div className="py-6 space-y-4 border-b border-slate-200 text-xs">
          <h3 className="font-bold uppercase tracking-wider text-indigo-900 border-l-4 border-indigo-800 pl-2">
            1. Applicant Particulars / Thông tin cá nhân
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div>
              <span className="text-slate-400 font-medium block">Full Name:</span>
              <span className="font-extrabold text-slate-900 text-sm uppercase">{primaryApplicant.fullName}</span>
            </div>

            <div>
              <span className="text-slate-400 font-medium block">Nationality:</span>
              <span className="font-bold text-slate-900">{primaryApplicant.nationality}</span>
            </div>

            <div>
              <span className="text-slate-400 font-medium block">Passport Number:</span>
              <span className="font-mono font-bold text-slate-900 text-sm">{primaryApplicant.passportNumber}</span>
            </div>

            <div>
              <span className="text-slate-400 font-medium block">Date of Birth:</span>
              <span className="font-semibold text-slate-800">{primaryApplicant.dateOfBirth}</span>
            </div>

            <div>
              <span className="text-slate-400 font-medium block">Gender:</span>
              <span className="font-semibold text-slate-800 uppercase">{primaryApplicant.gender}</span>
            </div>

            <div>
              <span className="text-slate-400 font-medium block">Passport Expiry:</span>
              <span className="font-semibold text-slate-800">{primaryApplicant.passportExpiry}</span>
            </div>
          </div>

          {/* Group Applicants List if > 1 */}
          {application.applicants.length > 1 && (
            <div className="pt-2">
              <span className="font-bold text-slate-700 block mb-2">Accompanying Applicants ({application.applicants.length - 1}):</span>
              <div className="space-y-1.5">
                {application.applicants.slice(1).map((app, i) => (
                  <div key={app.id} className="bg-white p-2.5 rounded-lg border text-[11px] flex items-center justify-between">
                    <span className="font-bold text-slate-900">#{i + 2}. {app.fullName}</span>
                    <span className="text-slate-500">{app.nationality} • Passport: {app.passportNumber}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Visa Terms & Port Rules */}
        <div className="py-6 space-y-4 border-b border-slate-200 text-xs">
          <h3 className="font-bold uppercase tracking-wider text-indigo-900 border-l-4 border-indigo-800 pl-2">
            2. Visa Validity & Entry Conditions / Điều kiện thị thực
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between border-b pb-1">
                <span className="text-slate-500">Visa Type:</span>
                <span className="font-bold text-slate-900">{VISA_TYPE_PRICING[application.visaType]?.labelEn}</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span className="text-slate-500">Valid From:</span>
                <span className="font-bold text-emerald-700">{application.entryDate || new Date().toISOString().split('T')[0]}</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span className="text-slate-500">Valid Until:</span>
                <span className="font-bold text-slate-900">{application.exitDate || '2026-09-30'}</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between border-b pb-1">
                <span className="text-slate-500">Allowed Port of Entry:</span>
                <span className="font-bold text-slate-900">{portInfo.name}</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span className="text-slate-500">Purpose of Visit:</span>
                <span className="font-bold text-slate-900 uppercase">{application.purpose}</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span className="text-slate-500">Status:</span>
                <span className="font-extrabold text-emerald-600 uppercase">APPROVED & ISSUED</span>
              </div>
            </div>
          </div>
        </div>

        {/* Seal & Signature Stamp */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs">
          <div className="text-slate-500 max-w-xs space-y-1 text-center sm:text-left">
            <p className="font-bold text-slate-700">Important Instructions:</p>
            <p>1. Present this approval letter along with original passport at immigration counter upon arrival.</p>
            <p>2. Passport must remain valid for at least 6 months beyond entry date.</p>
          </div>

          <div className="text-center space-y-2">
            <div className="text-[11px] font-bold uppercase text-slate-700">
              TUQ. CỤC TRƯỞNG CỤC QUẢN LÝ XUẤT NHẬP CẢNH
            </div>
            <div className="text-[10px] text-slate-500">
              FOR THE DIRECTOR GENERAL OF IMMIGRATION
            </div>

            {/* Circular Stamp Graphic */}
            <div className="w-28 h-28 mx-auto rounded-full border-4 border-dashed border-indigo-700/80 flex flex-col items-center justify-center p-2 text-indigo-700 font-bold text-[9px] text-center transform -rotate-6 shadow-inner bg-indigo-50/50">
              <span className="text-xs font-black text-indigo-800">★ CỤC QLXNC ★</span>
              <span>ĐÃ PHÊ DUYỆT</span>
              <span className="text-[7px]">IMMIGRATION DEPT</span>
              <span className="text-[8px] font-mono mt-0.5">VERIFIED 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
        <button
          onClick={onBackToHome}
          className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-100 transition-colors flex items-center justify-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </button>

        <button
          onClick={onTrackStatus}
          className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-6 py-3 rounded-xl shadow transition-colors flex items-center justify-center gap-1.5 border border-indigo-500"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Track Progress Live</span>
        </button>
      </div>
    </div>
  );
};
