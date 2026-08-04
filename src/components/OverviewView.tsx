import React, { useState } from 'react';
import {
  FileText,
  CheckCircle2,
  Globe,
  Clock,
  ShieldCheck,
  Plane,
  Building2,
  Ship,
  ArrowRight,
  ChevronDown,
  Info,
  Calendar,
  AlertCircle,
  HelpCircle,
  DollarSign,
  UserCheck,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';
import { TabType } from '../routes';
import { getOverviewTranslation } from '../data/contentTranslations';

interface OverviewViewProps {
  currentLang: Language;
  onNavigate: (tab: TabType) => void;
}

export const OverviewView: React.FC<OverviewViewProps> = ({ currentLang, onNavigate }) => {
  const tr = getOverviewTranslation(currentLang);
  const isVi = currentLang === 'vi';
  const [activePortTab, setActivePortTab] = useState<'airports' | 'land' | 'sea'>('airports');
  const [portSearch, setPortSearch] = useState('');

  const airports = [
    'Cam Ranh (Khanh Hoa)',
    'Can Tho',
    'Cat Bi (Hai Phong)',
    'Chu Lai (Quang Nam)',
    'Da Nang',
    'Dong Hoi (Quang Binh)',
    'Gia Binh (opening soon)',
    'Lien Khuong (Da Lat)',
    'Long Thanh (opening soon)',
    'Noi Bai (Hanoi)',
    'Phu Bai (Hue)',
    'Phu Cat (Binh Dinh)',
    'Phu Quoc',
    'Tan Son Nhat (Ho Chi Minh City)',
    'Tho Xuan (Thanh Hoa)',
    'Van Don (Quang Ninh)',
    'Vinh (Nghe An)'
  ];

  const landPorts = [
    'Binh Hiep',
    'Bo Y',
    'Cau Treo',
    'Cha Lo',
    'Dinh Ba',
    'Dong Dang',
    'Ha Tien',
    'Huu Nghi',
    'La Lay',
    'Lao Bao',
    'Lao Cai',
    'Le Thanh',
    'Long Sap',
    'Moc Bai',
    'Mong Cai',
    'Na Meo',
    'Nam Can',
    'Nam Giang',
    'Song Tien',
    'Tan Nam',
    'Tay Trang',
    'Thanh Thuy',
    'Thuong Phuoc',
    'Tinh Bien',
    'Tra Linh',
    'Vinh Xuong',
    'Xa Mat'
  ];

  const seaPorts = [
    'An Thoi',
    'Ben Luc',
    'Ca Na',
    'Cam Pha',
    'Chan May',
    'Cua Lo',
    'Cua Viet',
    'Da Nang',
    'Diem Dien',
    'Dong Thap',
    'Dung Quat',
    'Duong Dong (Phu Quoc)',
    'Gianh',
    'Giao Long',
    'Hai Phong',
    'Hai Thinh',
    'Hiep Phuoc',
    'Ho Chi Minh City',
    'Hon Chong',
    'Hon Gai',
    'Hon La',
    'Ky Ha',
    'Lien Huong',
    'My Thoi',
    'Nam Can',
    'Nam Du',
    'Nha Trang',
    'Ninh Binh',
    'Ninh Chu',
    'Phu Quy',
    'Quy Nhon',
    'Sa Ky',
    'Son Duong',
    'Thuan An',
    'Truong Long Hoa',
    'Van Gia',
    'Vung Ang',
    'Vung Ro',
    'Vung Tau'
  ];

  const filterList = (list: string[]) => {
    if (!portSearch.trim()) return list;
    return list.filter((item) => item.toLowerCase().includes(portSearch.toLowerCase()));
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 space-y-10 font-sans">
      {/* Article Header */}
      <header className="space-y-4 text-center border-b border-slate-200 pb-8">
        <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 text-indigo-700 text-sm font-bold px-4 py-1.5 rounded-full shadow-2xs">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>{tr.badge}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          {tr.title}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
          {tr.subtitle}
        </p>
      </header>

      {/* SECTION 1: What Is a Vietnam eVisa? */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-3 text-indigo-700">
          <FileText className="w-7 h-7 shrink-0" />
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            {tr.sec1Title}
          </h2>
        </div>
        <div className="space-y-3.5 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
          <p>{tr.sec1Body1}</p>
          <p className="bg-indigo-50/70 border border-indigo-100 rounded-xl p-4 sm:p-5 text-slate-800 text-base sm:text-lg">
            {tr.sec1Body2}
          </p>
        </div>
      </section>

      {/* SECTION 2: Who Needs a Vietnam eVisa? */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex items-center gap-3 text-indigo-700">
          <Globe className="w-7 h-7 shrink-0" />
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            {tr.sec2Title}
          </h2>
        </div>
        <div className="space-y-3.5 text-base sm:text-lg text-slate-700 leading-relaxed">
          <p>{tr.sec2Body1}</p>
          <p>{tr.sec2Body2}</p>
        </div>

        <div className="pt-2">
          <button
            onClick={() => onNavigate('requirements')}
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-sm transition-all border border-indigo-500 cursor-pointer"
          >
            <span>{isVi ? 'Kiểm tra điều kiện theo quốc tịch của bạn' : 'Check eligibility based on your nationality'}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* SECTION 3: What Does the eVisa Cover? */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex items-center gap-3 text-indigo-700">
          <CheckCircle2 className="w-7 h-7 shrink-0" />
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            {isVi ? 'E-Visa Áp Dụng Cho Mục Đích Nào?' : 'What Does the eVisa Cover?'}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-1.5">
            <h4 className="font-bold text-slate-900 text-base sm:text-lg flex items-center gap-2">
              <span className="text-lg">🌴</span> Tourism
            </h4>
            <p className="text-sm sm:text-base text-slate-600">Sightseeing, cultural travel, beach holidays.</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-1.5">
            <h4 className="font-bold text-slate-900 text-base sm:text-lg flex items-center gap-2">
              <span className="text-lg">👨‍👩‍👧‍👦</span> Family visits
            </h4>
            <p className="text-sm sm:text-base text-slate-600">Staying with relatives, attending weddings or funerals.</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-1.5">
            <h4 className="font-bold text-slate-900 text-base sm:text-lg flex items-center gap-2">
              <span className="text-lg">🏛️</span> Conferences and events
            </h4>
            <p className="text-sm sm:text-base text-slate-600">Including ones with paid registration fees.</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-1.5">
            <h4 className="font-bold text-slate-900 text-base sm:text-lg flex items-center gap-2">
              <span className="text-lg">💼</span> Short-term business activity
            </h4>
            <p className="text-sm sm:text-base text-slate-600">Meetings, contract signings, market visits, supplier inspections.</p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5 text-sm sm:text-base text-amber-900 leading-relaxed flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <p>
            It does not authorize employment in Vietnam. If you're being paid by a Vietnamese entity for work performed in the country, you'll need a work permit, a separate process handled with your employer's HR team. One eVisa covers all the permitted purposes above; there is no longer a separate "tourist eVisa" or "business eVisa" for short-stay travel.
          </p>
        </div>
      </section>

      {/* SECTION 4: eVisa Requirements */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex items-center gap-3 text-indigo-700">
          <UserCheck className="w-7 h-7 shrink-0" />
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            {isVi ? 'Yêu Cầu Hồ Sơ Xin E-Visa' : 'eVisa Requirements'}
          </h2>
        </div>

        <ul className="space-y-3.5 text-base sm:text-lg text-slate-700">
          <li className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
            <div>
              <strong>Passport:</strong> Valid for at least 6 months beyond your planned exit from Vietnam.
            </div>
          </li>
          <li className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
            <div>
              <strong>Passport Bio Page:</strong> A clear scan or photo of the passport bio page (the page with your photo and details).
            </div>
          </li>
          <li className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
            <div>
              <strong>Portrait Photo:</strong> A recent passport-style portrait photo: plain white background, taken in the last 6 months, no glasses, face visible from forehead to chin.
            </div>
          </li>
          <li className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
            <div>
              <strong>Travel details:</strong> Arrival and intended departure dates, plus intended entry point (airport, land border, or seaport).
            </div>
          </li>
        </ul>

        <p className="text-sm sm:text-base text-slate-600 italic bg-emerald-50/60 border border-emerald-100 rounded-xl p-4">
          Note: You don't need to provide proof of accommodation, return tickets, or financial statements. Vietnam's eVisa process is unusually streamlined compared to some neighboring countries.
        </p>
      </section>

      {/* SECTION 5: eVisa Duration and Entries */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex items-center gap-3 text-indigo-700">
          <Calendar className="w-7 h-7 shrink-0" />
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            {isVi ? 'Thời Han & Phí E-Visa' : 'eVisa Duration and Entries'}
          </h2>
        </div>

        {/* Mobile View: Cards (sm:hidden) */}
        <div className="grid grid-cols-1 gap-2.5 sm:hidden">
          {[
            { option: '1-month single', validity: '30 days from arrival', entries: '1 entry', fee: '$54' },
            { option: '1-month multiple', validity: '30 days from arrival', entries: 'Multiple entries', fee: '$84' },
            { option: '3-month single', validity: '90 days from arrival', entries: '1 entry', fee: '$94' },
            { option: '3-month multiple', validity: '90 days from arrival', entries: 'Multiple entries', fee: '$104' },
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-50/90 border border-slate-200 rounded-xl p-3 flex items-center justify-between gap-2 shadow-2xs">
              <div className="space-y-0.5 min-w-0">
                <div className="font-extrabold text-xs text-slate-900">{item.option}</div>
                <div className="text-[11px] text-slate-600 font-medium">
                  {item.validity} • <span className="text-slate-500">{item.entries}</span>
                </div>
              </div>
              <div className="text-right font-black text-indigo-700 text-sm shrink-0">
                {item.fee}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View: Table (hidden sm:block) */}
        <div className="hidden sm:block overflow-x-auto rounded-xl border border-slate-200/80">
          <table className="w-full text-left text-sm sm:text-base border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 uppercase tracking-wider text-xs sm:text-sm">
                <th className="py-3.5 px-4 font-bold">Option</th>
                <th className="py-3.5 px-4 font-bold">Validity</th>
                <th className="py-3.5 px-4 font-bold">Entries</th>
                <th className="py-3.5 px-4 font-bold">Our fee</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              <tr className="hover:bg-slate-50">
                <td className="py-4 px-4 font-bold text-slate-900">1-month single</td>
                <td className="py-4 px-4">30 days from arrival</td>
                <td className="py-4 px-4">1</td>
                <td className="py-4 px-4 font-black text-indigo-700 text-base sm:text-lg">$54</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-4 px-4 font-bold text-slate-900">1-month multiple</td>
                <td className="py-4 px-4">30 days from arrival</td>
                <td className="py-4 px-4">Unlimited</td>
                <td className="py-4 px-4 font-black text-indigo-700 text-base sm:text-lg">$84</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-4 px-4 font-bold text-slate-900">3-month single</td>
                <td className="py-4 px-4">90 days from arrival</td>
                <td className="py-4 px-4">1</td>
                <td className="py-4 px-4 font-black text-indigo-700 text-base sm:text-lg">$94</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-4 px-4 font-bold text-slate-900">3-month multiple</td>
                <td className="py-4 px-4">90 days from arrival</td>
                <td className="py-4 px-4">Unlimited</td>
                <td className="py-4 px-4 font-black text-indigo-700 text-base sm:text-lg">$104</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 6: Why Use Our Service */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex items-center gap-3 text-indigo-700">
          <ShieldCheck className="w-7 h-7 shrink-0" />
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            {isVi ? 'Tại Sao Nên Sử Dụng Dịch Vụ Của Chúng Tôi' : 'Why Use Our Service'}
          </h2>
        </div>

        <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
          The Vietnam eVisa can be applied for directly through the government portal at evisa.gov.vn. We're an independent service that takes the whole process off your plate for a small nominal fee. Here's what that covers:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm sm:text-base">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-1.5">
            <h4 className="font-bold text-slate-900 text-base">Application review before submission</h4>
            <p className="text-slate-600 text-sm">Our team checks every form against Immigration's requirements, including passport validity, photo specifications, name spellings, and entry-point validity, so a small mistake doesn't cost you a rejection.</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-1.5">
            <h4 className="font-bold text-slate-900 text-base">Error correction</h4>
            <p className="text-slate-600 text-sm">If we spot a typo or mismatch, we email you to fix it before submitting.</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-1.5">
            <h4 className="font-bold text-slate-900 text-base">Urgent and Super Urgent tiers</h4>
            <p className="text-slate-600 text-sm">Need it fast? We offer 2-day and 1-day processing options.</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-1.5">
            <h4 className="font-bold text-slate-900 text-base">English-language support</h4>
            <p className="text-slate-600 text-sm">A real person you can email or call when you have a question or something goes wrong.</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-1.5">
            <h4 className="font-bold text-slate-900 text-base">Follow-up on delays</h4>
            <p className="text-slate-600 text-sm">If Immigration is slow to respond, we chase it on your behalf.</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-1.5">
            <h4 className="font-bold text-slate-900 text-base">Clean refund process</h4>
            <p className="text-slate-600 text-sm">If we can't help you and anticipate that Vietnam Immigration would deny your application, we refund you without the runaround.</p>
          </div>
        </div>

        <p className="text-base font-semibold text-indigo-950 bg-indigo-50 border border-indigo-200 rounded-xl p-4 sm:p-5">
          In short: we make the process effortless so you can focus on your trip, not the paperwork.
        </p>
      </section>

      {/* SECTION 7: eVisa vs. Visa on Arrival */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex items-center gap-3 text-indigo-700">
          <Info className="w-7 h-7 shrink-0" />
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            {isVi ? 'So Sánh: eVisa vs. Visa On Arrival (VOA)' : 'eVisa vs. Visa on Arrival'}
          </h2>
        </div>

        <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
          "Visa on arrival" (VOA) was the legacy process before 2023. You'd get a pre-approval letter from an agency, fly to a Vietnamese airport, queue at the visa-on-arrival counter, pay a stamping fee in cash, and finally proceed through immigration. It was slow, airport-only, and cash-dependent.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm sm:text-base border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 uppercase tracking-wider text-xs sm:text-sm">
                <th className="py-3.5 px-4 font-bold">Feature</th>
                <th className="py-3.5 px-4 font-bold text-indigo-700">Modern eVisa</th>
                <th className="py-3.5 px-4 font-bold text-slate-500">Legacy VOA</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-bold text-slate-900">Entry points</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-700">83 locations (Airports + Land + Sea)</td>
                <td className="py-3.5 px-4 text-slate-500">Airport-only (Max 8 airports)</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-bold text-slate-900">Delivery</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-700">PDF by email before you fly</td>
                <td className="py-3.5 px-4 text-slate-500">Stamp collected on arrival counter</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-bold text-slate-900">Privacy</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-700">100% Individual document</td>
                <td className="py-3.5 px-4 text-slate-500">Often shared group letters with strangers</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm sm:text-base text-slate-600 bg-slate-50 border border-slate-200 rounded-xl p-4">
          We no longer process visa-on-arrival letters. We exclusively process eVisas because it's the right choice for almost every traveler.
        </p>
      </section>

      {/* SECTION 8: Processing Times */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex items-center gap-3 text-indigo-700">
          <Clock className="w-7 h-7 shrink-0" />
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            {isVi ? 'Thời Gian Xử Lý Hồ Sơ' : 'Processing Times'}
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm sm:text-base border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 uppercase tracking-wider text-xs sm:text-sm">
                <th className="py-3.5 px-4 font-bold">Tier</th>
                <th className="py-3.5 px-4 font-bold">Delivery</th>
                <th className="py-3.5 px-4 font-bold">Surcharge</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-bold text-slate-900">Normal</td>
                <td className="py-3.5 px-4">5 to 10 business days</td>
                <td className="py-3.5 px-4 font-bold text-emerald-700">Included</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-bold text-slate-900">Urgent</td>
                <td className="py-3.5 px-4">2 business days</td>
                <td className="py-3.5 px-4 font-bold text-indigo-700">+$45 per applicant</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3.5 px-4 font-bold text-slate-900">Super Urgent</td>
                <td className="py-3.5 px-4">1 business day</td>
                <td className="py-3.5 px-4 font-bold text-orange-600">+$85 per applicant</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed bg-slate-50 border border-slate-200 rounded-xl p-4">
          All processing times are measured from when our team submits your application to Vietnam Immigration, typically within 2 business hours of payment during office hours (08:00 to 21:00 (GMT+7), seven days a week). Vietnamese public holidays can extend timelines; we'll flag any holiday impact in your confirmation email.
        </p>
      </section>

      {/* SECTION 9: Entry Points That Accept the eVisa (83) */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-3 text-indigo-700">
          <Plane className="w-7 h-7 shrink-0" />
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            {isVi ? 'Danh Sách 83 Cửa Khẩu Nhập Cảnh' : 'Entry Points That Accept the eVisa'}
          </h2>
        </div>

        <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
          Since the December 2025 expansion under <strong>Resolution 389/NQ-CP</strong>, 83 entry points accept the eVisa: 17 international airports, 27 land border gates, and 39 seaports, spread the length of the country.
        </p>

        {/* Port Type Tabs & Search */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl w-full sm:w-auto">
              <button
                onClick={() => setActivePortTab('airports')}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  activePortTab === 'airports'
                    ? 'bg-white text-indigo-700 shadow-2xs border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Plane className="w-4 h-4" />
                <span>Airports ({airports.length})</span>
              </button>
              <button
                onClick={() => setActivePortTab('land')}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  activePortTab === 'land'
                    ? 'bg-white text-indigo-700 shadow-2xs border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Land Borders ({landPorts.length})</span>
              </button>
              <button
                onClick={() => setActivePortTab('sea')}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  activePortTab === 'sea'
                    ? 'bg-white text-indigo-700 shadow-2xs border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Ship className="w-4 h-4" />
                <span>Seaports ({seaPorts.length})</span>
              </button>
            </div>

            <input
              type="text"
              placeholder="Search entry point..."
              value={portSearch}
              onChange={(e) => setPortSearch(e.target.value)}
              className="w-full sm:w-64 bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          {/* List Display */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
            {activePortTab === 'airports' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {filterList(airports).map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-lg p-3 text-sm font-semibold text-slate-800 flex items-center gap-2.5">
                    <Plane className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}

            {activePortTab === 'land' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {filterList(landPorts).map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-lg p-3 text-sm font-semibold text-slate-800 flex items-center gap-2.5">
                    <Building2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}

            {activePortTab === 'sea' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {filterList(seaPorts).map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-lg p-3 text-sm font-semibold text-slate-800 flex items-center gap-2.5">
                    <Ship className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 10: What to Do at the Border */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex items-center gap-3 text-indigo-700">
          <ShieldCheck className="w-7 h-7 shrink-0" />
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            {isVi ? 'Quy Trình Tại Cửa Khẩu Nhập Cảnh' : 'What to Do at the Border'}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-2">
            <div className="w-7 h-7 rounded-full bg-indigo-600 text-white font-bold text-sm flex items-center justify-center">1</div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              Print your eVisa PDF or keep it on your phone (we recommend printing, since some airline check-in agents ask to see paper before boarding the Vietnam-bound flight).
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-2">
            <div className="w-7 h-7 rounded-full bg-indigo-600 text-white font-bold text-sm flex items-center justify-center">2</div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              At the immigration counter, hand over your passport and present the eVisa.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-2">
            <div className="w-7 h-7 rounded-full bg-indigo-600 text-white font-bold text-sm flex items-center justify-center">3</div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              The officer scans the QR/barcode, verifies your passport, and stamps you in. No separate visa fee, no queue at a different counter.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-2">
            <div className="w-7 h-7 rounded-full bg-indigo-600 text-white font-bold text-sm flex items-center justify-center">4</div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              Keep the printed eVisa with your passport for the duration of the trip. You may need to show it again when departing Vietnam.
            </p>
          </div>
        </div>

        {/* External Apply Button */}
        <div className="pt-4 text-center">
          <a
            href="https://vietnamvisa.govt.vn/apply-online"
            target="_blank"
            rel="nofollow"
            className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-base px-9 py-4 rounded-xl shadow-md transition-all border border-orange-500 cursor-pointer"
          >
            <span>{isVi ? 'Nộp Đơn Visa Trực Tuyến Ngay →' : 'Apply Online for Vietnam eVisa →'}</span>
          </a>
        </div>
      </section>

      {/* SECTION 11: Policy References Footer */}
      <footer className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-xs sm:text-sm text-slate-600 space-y-2">
        <p className="font-bold text-slate-800">Policy References:</p>
        <p className="leading-relaxed">
          <strong>Resolution 127/NQ-CP (15 August 2023)</strong> expanded eVisa eligibility to citizens of every country and territory worldwide (replacing the earlier 80-nation list); <strong>Resolution 229/NQ-CP (11 August 2025)</strong> extended 45-day visa-free entry to 12 additional European countries through 14 August 2028; <strong>Resolution 389/NQ-CP (2 December 2025)</strong> expanded accepted entry points from 42 to 83. We update this page whenever Vietnam's eVisa policy changes.
        </p>
      </footer>
    </div>
  );
};
