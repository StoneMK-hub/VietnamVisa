import React, { useState, useEffect } from 'react';
import { Search, Clock, CheckCircle2, AlertCircle, FileText, Download, ShieldCheck, ArrowRight } from 'lucide-react';
import { VisaApplication, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface StatusTrackerViewProps {
  currentLang: Language;
  initialCode?: string;
  onViewCertificate: (app: VisaApplication) => void;
}

export const StatusTrackerView: React.FC<StatusTrackerViewProps> = ({
  currentLang,
  initialCode = '',
  onViewCertificate
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const [searchCode, setSearchCode] = useState(initialCode || 'VNV-2026-883921');
  const [loading, setLoading] = useState(false);
  const [application, setApplication] = useState<VisaApplication | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!searchCode.trim()) return;

    setLoading(true);
    setErrorMsg('');
    try {
      const res = await fetch(`/api/visa/track?code=${encodeURIComponent(searchCode.trim())}`);
      const data = await res.json();
      setLoading(false);
      if (data.success && data.application) {
        setApplication(data.application);
      } else {
        setApplication(null);
        setErrorMsg(data.message || 'No application found with this reference code or passport number.');
      }
    } catch (err) {
      setLoading(false);
      setErrorMsg('Failed to connect to tracking server.');
    }
  };

  useEffect(() => {
    if (initialCode) {
      handleSearch();
    } else {
      // Auto fetch demo application on load
      handleSearch();
    }
  }, []);

  const getTimelineSteps = (app: VisaApplication) => {
    const isPaid = app.paymentStatus === 'paid';
    const isApproved = app.applicationStatus === 'approved' || app.applicationStatus === 'issued';

    return [
      {
        title: 'Application Submitted',
        date: app.createdAt ? app.createdAt.split('T')[0] : 'Completed',
        completed: true,
        current: false,
        desc: 'Reference code generated and saved.'
      },
      {
        title: 'Payment Verification',
        date: isPaid ? 'Verified' : 'Pending',
        completed: isPaid,
        current: !isPaid,
        desc: isPaid ? 'Payment received successfully.' : 'Awaiting payment confirmation.'
      },
      {
        title: 'Immigration Department Review',
        date: isPaid ? 'In Progress' : 'Queued',
        completed: isApproved,
        current: isPaid && !isApproved,
        desc: 'Security clearance & passport verification.'
      },
      {
        title: 'E-Visa Approval Issued',
        date: isApproved ? 'Ready' : `Est: ${app.estimatedApprovalDate}`,
        completed: isApproved,
        current: isApproved,
        desc: isApproved ? 'Approval letter issued.' : 'Document generation pending.'
      }
    ];
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Track Search Card */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-6">
          <h2 className="text-2xl font-bold text-slate-900">{t.trackTitle}</h2>
          <p className="text-xs sm:text-sm text-slate-500">{t.trackSubtitle}</p>
        </div>

        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder={t.enterRefCode}
              value={searchCode}
              onChange={(e) => setSearchCode(e.target.value.toUpperCase())}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-xs font-bold uppercase text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-6 py-3 rounded-xl shadow transition-all flex items-center justify-center gap-2 border border-indigo-500 shrink-0"
          >
            {loading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <>
                <Search className="w-4 h-4" />
                <span>{t.checkStatusBtn}</span>
              </>
            )}
          </button>
        </form>

        <p className="text-[11px] text-slate-400 text-center mt-3">
          Demo Reference Code: <button onClick={() => { setSearchCode('VNV-2026-883921'); }} className="text-indigo-600 underline font-bold">VNV-2026-883921</button>
        </p>
      </div>

      {/* Error Message */}
      {errorMsg && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-4 text-center text-red-700 text-xs font-semibold">
          <AlertCircle className="w-5 h-5 text-red-600 mx-auto mb-1" />
          <p>{errorMsg}</p>
        </div>
      )}

      {/* Results View */}
      {application && (
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8 space-y-8 animate-in fade-in">
          {/* Header Summary */}
          <div className="bg-slate-900 text-white p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Application Details</span>
              <h3 className="text-xl font-black text-white font-mono tracking-wider mt-0.5">{application.referenceCode}</h3>
              <p className="text-xs text-slate-300 mt-1">
                Primary Applicant: <strong className="text-white">{application.applicants[0]?.fullName || 'JOHN MICHAEL SMITH'}</strong>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase border ${
                application.applicationStatus === 'approved'
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                  : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
              }`}>
                {application.applicationStatus === 'approved' ? 'APPROVAL ISSUED' : 'IN PROCESSING'}
              </span>

              {application.applicationStatus === 'approved' && (
                <button
                  onClick={() => onViewCertificate(application)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-4 py-2 rounded-xl shadow transition-all flex items-center gap-1.5 border border-indigo-500"
                >
                  <FileText className="w-4 h-4 text-white" />
                  <span>View E-Visa Letter</span>
                </button>
              )}
            </div>
          </div>

          {/* Timeline Process */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Real-Time Progress Timeline</h4>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {getTimelineSteps(application).map((step, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border text-xs relative flex flex-col justify-between space-y-2 ${
                    step.completed
                      ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                      : step.current
                      ? 'bg-indigo-50 border-indigo-300 ring-2 ring-indigo-100 text-indigo-950 font-bold'
                      : 'bg-slate-50 border-slate-200 text-slate-400'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-[10px] uppercase">Step 0{idx + 1}</span>
                      {step.completed ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Clock className="w-4 h-4 text-slate-400" />
                      )}
                    </div>
                    <div className="font-bold text-slate-900">{step.title}</div>
                    <p className="text-[11px] text-slate-500 mt-1 leading-normal">{step.desc}</p>
                  </div>

                  <div className="pt-2 border-t border-slate-200/50 text-[10px] font-mono text-slate-400">
                    {step.date}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Application Details Summary */}
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div>
              <span className="text-slate-400 font-medium block">Entry Date</span>
              <span className="font-bold text-slate-800">{application.entryDate}</span>
            </div>
            <div>
              <span className="text-slate-400 font-medium block">Port of Arrival</span>
              <span className="font-bold text-slate-800 uppercase">{application.arrivalPort}</span>
            </div>
            <div>
              <span className="text-slate-400 font-medium block">Payment Status</span>
              <span className="font-bold text-emerald-700 uppercase">{application.paymentStatus}</span>
            </div>
            <div>
              <span className="text-slate-400 font-medium block">Est. Completion</span>
              <span className="font-bold text-indigo-700">{application.estimatedApprovalDate}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
