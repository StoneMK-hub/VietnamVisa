import React, { useState, useEffect } from 'react';
import { CreditCard, QrCode, ShieldCheck, CheckCircle2, Lock, ArrowRight, Copy, Check, Clock, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { VisaApplication, Language } from '../../types';
import { TRANSLATIONS } from '../../data/translations';

interface Step4PaymentProps {
  currentLang: Language;
  application: VisaApplication;
  onPaymentSuccess: (updatedApp: VisaApplication) => void;
}

export const Step4Payment: React.FC<Step4PaymentProps> = ({
  currentLang,
  application,
  onPaymentSuccess
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'vietqr' | 'paypal' | 'momo'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState(false);

  // Card form mock state
  const [cardNumber, setCardNumber] = useState('4532 •••• •••• 8821');
  const [cardExpiry, setCardExpiry] = useState('12/28');
  const [cardCvc, setCardCvc] = useState('888');
  const [cardName, setCardName] = useState('JOHN MICHAEL SMITH');

  // Countdown timer for VietQR QR code
  const [timeLeft, setTimeLeft] = useState(900); // 15 mins

  useEffect(() => {
    if (paymentMethod === 'vietqr' && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [paymentMethod, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleCopyAccount = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 2000);
  };

  const processPayment = async () => {
    setIsProcessing(true);
    try {
      const res = await fetch('/api/visa/pay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          referenceCode: application.referenceCode,
          paymentMethod
        })
      });

      const data = await res.json();
      if (data.success) {
        // Trigger celebratory confetti
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });

        setTimeout(() => {
          setIsProcessing(false);
          onPaymentSuccess(data.application);
        }, 1500);
      } else {
        setIsProcessing(false);
        alert(data.message || 'Payment simulation failed.');
      }
    } catch (err) {
      setIsProcessing(false);
      alert('Network error connecting to payment gateway.');
    }
  };

  // Sample VietQR URL generator for demo bank transfer
  const vietQrUrl = `https://img.vietqr.io/image/MB-0988882345-compact.png?amount=${application.totalAmountVnd}&addInfo=VISA%20${application.referenceCode}&accountName=CONG%20TY%20VISA%20VIET%20NAM`;

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8 space-y-8">
      {/* Top Ref & Payment Header */}
      <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-slate-800">
        <div>
          <span className="text-xs uppercase font-bold text-indigo-400 tracking-wider">Application Reference Code</span>
          <div className="text-2xl font-black text-white tracking-widest mt-0.5">{application.referenceCode}</div>
          <p className="text-xs text-slate-300 mt-1">Please reference this code in all communications.</p>
        </div>

        <div className="text-left sm:text-right">
          <span className="text-xs text-slate-300 block">Total Amount Due</span>
          <div className="text-2xl font-black text-indigo-400">${application.totalAmountUsd} USD</div>
          <span className="text-xs text-slate-300">≈ {application.totalAmountVnd.toLocaleString('vi-VN')} VND</span>
        </div>
      </div>

      {/* Payment Method Selector */}
      <div className="space-y-4">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
          {t.paymentMethod}
        </label>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Card */}
          <button
            type="button"
            onClick={() => setPaymentMethod('card')}
            className={`p-4 rounded-xl border text-center transition-all ${
              paymentMethod === 'card'
                ? 'bg-indigo-50 border-indigo-600 ring-2 ring-indigo-600/20 font-bold text-indigo-950'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <CreditCard className="w-6 h-6 text-indigo-600 mx-auto mb-1.5" />
            <span className="text-xs font-bold block">Credit / Debit Card</span>
            <span className="text-[10px] text-slate-400">Visa, MC, Amex</span>
          </button>

          {/* VietQR */}
          <button
            type="button"
            onClick={() => setPaymentMethod('vietqr')}
            className={`p-4 rounded-xl border text-center transition-all ${
              paymentMethod === 'vietqr'
                ? 'bg-indigo-50 border-indigo-600 ring-2 ring-indigo-600/20 font-bold text-indigo-950'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <QrCode className="w-6 h-6 text-indigo-600 mx-auto mb-1.5" />
            <span className="text-xs font-bold block">VietQR Bank Transfer</span>
            <span className="text-[10px] text-slate-400">Instant QR scan</span>
          </button>

          {/* PayPal */}
          <button
            type="button"
            onClick={() => setPaymentMethod('paypal')}
            className={`p-4 rounded-xl border text-center transition-all ${
              paymentMethod === 'paypal'
                ? 'bg-indigo-50 border-indigo-600 ring-2 ring-indigo-600/20 font-bold text-indigo-950'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <div className="w-6 h-6 text-blue-700 font-black italic mx-auto mb-1.5 text-base">P</div>
            <span className="text-xs font-bold block">PayPal</span>
            <span className="text-[10px] text-slate-400">Worldwide</span>
          </button>

          {/* MoMo */}
          <button
            type="button"
            onClick={() => setPaymentMethod('momo')}
            className={`p-4 rounded-xl border text-center transition-all ${
              paymentMethod === 'momo'
                ? 'bg-indigo-50 border-indigo-600 ring-2 ring-indigo-600/20 font-bold text-indigo-950'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <div className="w-6 h-6 bg-pink-600 text-white font-bold rounded-lg flex items-center justify-center text-xs mx-auto mb-1.5">Mo</div>
            <span className="text-xs font-bold block">MoMo E-Wallet</span>
            <span className="text-[10px] text-slate-400">Vietnam Local</span>
          </button>
        </div>
      </div>

      {/* Selected Method Details Form */}
      {paymentMethod === 'card' && (
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4 max-w-xl mx-auto">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-emerald-600" />
              <span>256-Bit SSL Encrypted Card Terminal</span>
            </span>
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
              <span>VISA</span> • <span>MC</span> • <span>AMEX</span>
            </div>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <label className="block text-slate-700 font-bold mb-1">Cardholder Name</label>
              <input
                type="text"
                value={cardName}
                onChange={(e) => setCardName(e.target.value.toUpperCase())}
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 font-bold uppercase text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-1">Card Number</label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 font-mono text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-700 font-bold mb-1">Expiry Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={cardExpiry}
                  onChange={(e) => setCardExpiry(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 font-mono text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">CVV / CVC</label>
                <input
                  type="password"
                  placeholder="123"
                  maxLength={4}
                  value={cardCvc}
                  onChange={(e) => setCardCvc(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 font-mono text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {paymentMethod === 'vietqr' && (
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center space-y-4 max-w-lg mx-auto">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>QR Code Valid For:</span>
            </span>
            <span className="text-sm font-mono font-bold text-indigo-600">{formatTime(timeLeft)}</span>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 inline-block shadow-md">
            <img
              src={vietQrUrl}
              alt="VietQR Payment Code"
              className="w-48 h-48 mx-auto rounded-lg"
            />
            <p className="text-[10px] text-slate-400 mt-2">Open Vietcombank, MB, Techcombank, VPBank, etc. and scan QR</p>
          </div>

          <div className="bg-slate-100 rounded-xl p-3 text-left space-y-1.5 text-xs text-slate-700">
            <div className="flex justify-between items-center">
              <span className="text-slate-500">Bank:</span>
              <span className="font-bold">Military Commercial Bank (MB Bank)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500">Account Number:</span>
              <span className="font-bold font-mono text-slate-900">0988 88 2345</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500">Account Name:</span>
              <span className="font-bold uppercase">CONG TY VISA VIET NAM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500">Transfer Message:</span>
              <span className="font-mono font-bold text-indigo-700">VISA {application.referenceCode}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => handleCopyAccount(`0988882345`)}
            className="text-xs font-bold text-indigo-600 hover:underline flex items-center justify-center gap-1 mx-auto"
          >
            {copiedAccount ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedAccount ? 'Copied to Clipboard' : 'Copy Account Number'}</span>
          </button>
        </div>
      )}

      {/* Pay Action Button */}
      <div className="text-center pt-4">
        <button
          type="button"
          disabled={isProcessing}
          onClick={processPayment}
          className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 mx-auto border border-indigo-500"
        >
          {isProcessing ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>{t.processingPayment}</span>
            </>
          ) : (
            <>
              <ShieldCheck className="w-5 h-5 text-white" />
              <span>Pay ${application.totalAmountUsd} USD & Submit Application</span>
            </>
          )}
        </button>

        <p className="text-xs text-slate-400 mt-3 flex items-center justify-center gap-1">
          <Lock className="w-3.5 h-3.5 text-emerald-600" />
          <span>Payment is 100% risk-free. Full refund guaranteed if visa is rejected.</span>
        </p>
      </div>
    </div>
  );
};
