import React from 'react';
import { ShieldCheck, Lock, Award, MapPin, Phone, Mail, ArrowUpRight, MessageCircle, FileCheck, Sliders } from 'lucide-react';
import { Language } from '../types';
import { TabType } from '../routes';
import { Logo } from './Logo';

interface FooterProps {
  currentLang: Language;
  onNavigate: (tab: TabType) => void;
  onOpenCookiePreferences?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onNavigate, onOpenCookiePreferences }) => {
  const isVi = currentLang === 'vi';

  return (
    <footer className="bg-slate-200/90 text-slate-800 border-t-2 border-slate-300/80 pt-6 sm:pt-8 pb-6">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-8 space-y-5 sm:space-y-6">
        {/* Top Compact Trust Badges Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3.5 pb-4 sm:pb-6 border-b border-slate-300/80 text-xs sm:text-sm">
          <div className="flex items-center gap-2 sm:gap-3 bg-white p-2.5 sm:p-3 rounded-xl border border-slate-300/70 shadow-2xs">
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
            <div>
              <p className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">100% Satisfaction</p>
              <p className="text-[10px] sm:text-xs text-slate-500 leading-none mt-0.5">Guaranteed approval</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200/80 shadow-2xs">
            <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 shrink-0" />
            <div>
              <p className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">256-Bit SSL Secure</p>
              <p className="text-[10px] sm:text-xs text-slate-500 leading-none mt-0.5">Encrypted portal</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200/80 shadow-2xs">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 shrink-0" />
            <div>
              <p className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">Verified Agency</p>
              <p className="text-[10px] sm:text-xs text-slate-500 leading-none mt-0.5">24/7 Support team</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200/80 shadow-2xs">
            <FileCheck className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 shrink-0" />
            <div>
              <p className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">Super Urgent</p>
              <p className="text-[10px] sm:text-xs text-slate-500 leading-none mt-0.5">Express 24h service</p>
            </div>
          </div>
        </div>

        {/* Main Footer 2-Column Mobile & 12-Column Desktop Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-4 gap-y-5 sm:gap-6 text-xs sm:text-sm border-b border-slate-300/80 pb-6">
          {/* Col 1: Brand & Brief Sapo (Full width on mobile, 4 cols on desktop) */}
          <div className="col-span-2 md:col-span-4 space-y-2.5">
            <Logo variant="light" size="sm" onClick={() => onNavigate('home')} />
            <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
              {isVi
                ? 'Trung tâm hỗ trợ đăng ký Thị thực điện tử (e-Visa) Việt Nam & dịch vụ đón tiễn nhanh tại sân bay cho du khách quốc tế.'
                : 'Commercial visa agency facilitating e-Visa applications, urgent processing, and airport concierge for international travelers to Vietnam.'}
            </p>
            <div className="flex items-center gap-2 pt-0.5">
              <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full">
                ONLINE 24/7
              </span>
              <span className="text-slate-600 text-[11px] sm:text-xs font-medium">All 190+ Nationalities</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (1 col on mobile, 3 cols on desktop) */}
          <div className="col-span-1 md:col-span-3 space-y-2 sm:space-y-3">
            <h4 className="text-slate-900 font-extrabold text-xs sm:text-sm uppercase tracking-wider">
              {isVi ? 'Liên Kết' : 'Navigation'}
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              <li>
                <a
                  href="/overview"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('overview');
                  }}
                  className="hover:text-indigo-600 text-slate-700 transition-colors inline-flex items-center gap-1 cursor-pointer font-medium"
                >
                  <span>{isVi ? 'Tổng Quan' : 'Overview'}</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="/how-to-apply"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('apply');
                  }}
                  className="hover:text-indigo-600 text-slate-700 transition-colors inline-flex items-center gap-1 cursor-pointer font-medium"
                >
                  <span>{isVi ? 'Xin Visa' : 'How to Apply'}</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="/visa-fee"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('calculator');
                  }}
                  className="hover:text-indigo-600 text-slate-700 transition-colors inline-flex items-center gap-1 cursor-pointer font-medium"
                >
                  <span>{isVi ? 'Bảng Phí' : 'Visa Fee'}</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="/visa-requirements"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('requirements');
                  }}
                  className="hover:text-indigo-600 text-slate-700 transition-colors inline-flex items-center gap-1 cursor-pointer font-medium"
                >
                  <span>{isVi ? 'Điều Kiện' : 'Requirements'}</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="/faqs"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('faqs');
                  }}
                  className="hover:text-indigo-600 text-slate-700 transition-colors inline-flex items-center gap-1 cursor-pointer font-medium"
                >
                  <span>{isVi ? 'Hỏi Đáp' : 'FAQs'}</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Policies & Legal (1 col on mobile, 2 cols on desktop) */}
          <div className="col-span-1 md:col-span-2 space-y-2 sm:space-y-3">
            <h4 className="text-slate-900 font-extrabold text-xs sm:text-sm uppercase tracking-wider">
              {isVi ? 'Chính Sách' : 'Legal'}
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              <li>
                <a
                  href="/payment-guidelines"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('payment-guidelines');
                  }}
                  className="hover:text-indigo-600 text-slate-700 transition-colors inline-flex items-center gap-1 cursor-pointer font-medium"
                >
                  <span>Payment</span>
                </a>
              </li>
              <li>
                <a
                  href="/terms-and-conditions"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('terms-and-conditions');
                  }}
                  className="hover:text-indigo-600 text-slate-700 transition-colors inline-flex items-center gap-1 cursor-pointer font-medium"
                >
                  <span>Terms</span>
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('privacy-policy');
                  }}
                  className="hover:text-indigo-600 text-slate-700 transition-colors inline-flex items-center gap-1 cursor-pointer font-medium"
                >
                  <span>Privacy</span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenCookiePreferences}
                  className="hover:text-indigo-600 text-slate-700 transition-colors inline-flex items-center gap-1 cursor-pointer font-medium text-left"
                >
                  <span>Cookies</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Support Contact Information (Full width col-span-2 on mobile, 3 cols on desktop) */}
          <div className="col-span-2 md:col-span-3 space-y-2 sm:space-y-3 bg-white/70 sm:bg-transparent p-3 sm:p-0 rounded-xl border border-slate-300/70 sm:border-0 shadow-2xs sm:shadow-none">
            <h4 className="text-slate-900 font-extrabold text-xs sm:text-sm uppercase tracking-wider">
              {isVi ? 'Hỗ Trợ Khách Hàng' : 'Support & Contact'}
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900">HQ:</strong> BDA Building, Cầu Diễn, Nam Từ Liêm, Hà Nội
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-0.5">
                <div className="flex items-center gap-1.5 text-emerald-800 font-bold">
                  <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Hotline: +84 832 320 320</span>
                </div>

                <a
                  href="https://wa.me/84832320320"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-emerald-800 hover:text-emerald-900 font-semibold"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>WhatsApp: +84 832 320 320</span>
                </a>
              </div>

              <div className="flex items-center gap-1.5 text-slate-800 font-medium truncate">
                <Mail className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span className="truncate">support@vietnamvisa.govt.vn</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="text-center text-xs text-slate-600 space-y-1">
          <p className="max-w-3xl mx-auto leading-relaxed text-[11px] sm:text-xs">
            <strong className="text-slate-800">Disclaimer:</strong> VietnamVisa is a commercial visa service facilitator. We assist international travelers with e-Visa applications and expedited airport concierge.
          </p>
          <p className="text-[11px] sm:text-xs">© {new Date().getFullYear()} Vietnam Visa Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
