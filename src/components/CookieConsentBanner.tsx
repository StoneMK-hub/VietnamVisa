import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { TabType } from '../routes';

interface CookieConsentProps {
  currentLang: Language;
  onNavigate: (tab: TabType) => void;
  forceOpen?: boolean;
  onCloseForceOpen?: () => void;
}

export const CookieConsentBanner: React.FC<CookieConsentProps> = ({
  currentLang,
  onNavigate,
  forceOpen,
  onCloseForceOpen,
}) => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem('vietnam_visa_cookie_consent');
    if (forceOpen) {
      setVisible(true);
    } else if (!savedConsent) {
      // Show after a brief delay for smooth appearance
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, [forceOpen]);

  const handleChoice = (choice: 'accept' | 'reject') => {
    localStorage.setItem('vietnam_visa_cookie_consent', choice);
    setVisible(false);
    if (onCloseForceOpen) {
      onCloseForceOpen();
    }
  };

  if (!visible) return null;

  const isVi = currentLang === 'vi';

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-5xl mx-auto transition-all duration-300 transform translate-y-0">
      <div className="bg-white border border-slate-200/90 shadow-2xl rounded-2xl p-4 sm:p-5 md:px-7 md:py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Cookie Disclaimer Text */}
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed max-w-3xl">
          {isVi ? (
            <>
              Chúng tôi sử dụng cookie để phân tích và cá nhân hóa trải nghiệm của bạn. Bạn có thể chấp nhận hoặc từ chối bên dưới, và có thể thay đổi lựa chọn bất kỳ lúc nào qua tùy chọn “Cookie preferences” ở chân trang. Xem thêm{' '}
              <button
                onClick={() => {
                  onNavigate('privacy-policy');
                  if (onCloseForceOpen) onCloseForceOpen();
                }}
                className="text-emerald-700 hover:text-emerald-800 font-semibold underline underline-offset-2 cursor-pointer"
              >
                Chính Sách Bảo Mật
              </button>
              .
            </>
          ) : (
            <>
              We use cookies for analytics and advertising to improve your experience. You can accept or reject below, and change your choice any time via “Cookie preferences” in the footer. See our{' '}
              <button
                onClick={() => {
                  onNavigate('privacy-policy');
                  if (onCloseForceOpen) onCloseForceOpen();
                }}
                className="text-emerald-700 hover:text-emerald-800 font-semibold underline underline-offset-2 cursor-pointer"
              >
                Privacy Policy
              </button>
              .
            </>
          )}
        </p>

        {/* Reject & Accept Buttons */}
        <div className="flex items-center gap-3 shrink-0 self-end md:self-center w-full md:w-auto justify-end">
          <button
            onClick={() => handleChoice('reject')}
            className="px-5 py-2 text-xs sm:text-sm font-bold text-slate-800 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 active:bg-slate-100 transition-all cursor-pointer shadow-2xs"
          >
            {isVi ? 'Từ Chối' : 'Reject'}
          </button>
          <button
            onClick={() => handleChoice('accept')}
            className="px-6 py-2 text-xs sm:text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700 rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
          >
            {isVi ? 'Chấp Nhận' : 'Accept'}
          </button>
        </div>
      </div>
    </div>
  );
};
