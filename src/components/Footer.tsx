import React from 'react';
import { ShieldCheck, Lock, Award, MapPin, Phone, Mail, ArrowUpRight, MessageCircle, FileCheck } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Logo } from './Logo';

interface FooterProps {
  currentLang: Language;
  onNavigate: (tab: 'home' | 'apply' | 'calculator' | 'requirements' | 'track' | 'faq') => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onNavigate }) => {
  const isVi = currentLang === 'vi';

  return (
    <footer className="bg-slate-800 text-slate-200 border-t border-slate-700/80 pt-8 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        {/* Top Compact Trust Badges Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pb-6 border-b border-slate-700/60 text-xs">
          <div className="flex items-center gap-2.5 bg-slate-700/40 p-2.5 rounded-xl border border-slate-600/30">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <div>
              <p className="font-bold text-white text-[11px] leading-tight">100% Satisfaction</p>
              <p className="text-[10px] text-slate-400">Guaranteed approval</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 bg-slate-700/40 p-2.5 rounded-xl border border-slate-600/30">
            <Lock className="w-4 h-4 text-indigo-400 shrink-0" />
            <div>
              <p className="font-bold text-white text-[11px] leading-tight">256-Bit SSL Secure</p>
              <p className="text-[10px] text-slate-400">Encrypted application</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 bg-slate-700/40 p-2.5 rounded-xl border border-slate-600/30">
            <Award className="w-4 h-4 text-amber-400 shrink-0" />
            <div>
              <p className="font-bold text-white text-[11px] leading-tight">Verified Agency</p>
              <p className="text-[10px] text-slate-400">Professional visa support</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 bg-slate-700/40 p-2.5 rounded-xl border border-slate-600/30">
            <FileCheck className="w-4 h-4 text-blue-400 shrink-0" />
            <div>
              <p className="font-bold text-white text-[11px] leading-tight">Super Urgent</p>
              <p className="text-[10px] text-slate-400">Express 24h/48h service</p>
            </div>
          </div>
        </div>

        {/* Compact Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-xs border-b border-slate-700/60 pb-6">
          {/* Col 1: Brand & Brief Sapo (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <Logo variant="dark" size="sm" onClick={() => onNavigate('home')} />
            <p className="text-slate-300 leading-relaxed text-[11px]">
              {isVi
                ? 'Trung tâm hỗ trợ đăng ký Thị thực điện tử (e-Visa) Việt Nam & dịch vụ đón tiễn nhanh tại sân bay cho du khách quốc tế.'
                : 'Commercial visa agency facilitating e-Visa applications, urgent processing, and airport concierge for international travelers to Vietnam.'}
            </p>
            <div className="flex items-center gap-3 pt-1">
              <span className="bg-emerald-900/60 text-emerald-300 border border-emerald-700/50 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                ONLINE 24/7
              </span>
              <span className="text-slate-400 text-[10px]">All 190+ Nationalities</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider text-indigo-300">
              {isVi ? 'Liên Kết Nhanh' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <button
                  onClick={() => onNavigate('apply')}
                  className="hover:text-white text-slate-300 transition-colors inline-flex items-center gap-1"
                >
                  <span>{isVi ? 'Đăng ký E-Visa Trực Tuyến' : 'Apply E-Visa Online'}</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('calculator')}
                  className="hover:text-white text-slate-300 transition-colors inline-flex items-center gap-1"
                >
                  <span>{isVi ? 'Công Cụ Tính Phí Visa' : 'Visa Fee Calculator'}</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('requirements')}
                  className="hover:text-white text-slate-300 transition-colors inline-flex items-center gap-1"
                >
                  <span>{isVi ? 'Miễn Thị Thực & Điều Kiện' : 'Exemptions & Requirements'}</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-white text-slate-300 transition-colors inline-flex items-center gap-1"
                >
                  <span>{isVi ? 'Câu Hỏi Thường Gặp (FAQ)' : 'FAQ & Support'}</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Support Contact Information (5 cols) */}
          <div className="md:col-span-5 space-y-2.5">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider text-indigo-300">
              {isVi ? 'Thông Tin Hỗ Trợ Khách Hàng' : '24/7 Support & Contact'}
            </h4>
            <div className="space-y-2 text-[11px] text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Headquarters:</strong> BDA Building, Lô E50, Khu 3ha, Cầu Diễn, Bắc Từ Liêm, Hà Nội, Việt Nam
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-0.5">
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Hotline: +84 832 320 320</span>
                </div>

                <a
                  href="https://wa.me/84832320320"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200 font-semibold"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>WhatsApp: +84 832 320 320</span>
                </a>
              </div>

              <div className="flex items-center gap-1.5 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Email: support@vietnamvisaservice.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="text-center text-[10px] text-slate-400 space-y-1">
          <p className="max-w-3xl mx-auto leading-relaxed">
            <strong>Disclaimer:</strong> VietnamVisa is a commercial visa service facilitator. We assist international travelers with e-Visa applications and expedited airport concierge.
          </p>
          <p>© {new Date().getFullYear()} Vietnam Visa Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
