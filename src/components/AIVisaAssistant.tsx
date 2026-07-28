import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Sparkles, User, X, MessageSquare, Minimize2, Maximize2, RefreshCw } from 'lucide-react';
import { ChatMessage, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface AIVisaAssistantProps {
  currentLang: Language;
}

export const AIVisaAssistant: React.FC<AIVisaAssistantProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'assistant',
      text: currentLang === 'vi'
        ? 'Xin chào! Tôi là Trợ Lý AI Tư Vấn Visa Việt Nam. Bạn có câu hỏi nào về quy định e-Visa, thủ tục khẩn cấp hoặc điều kiện hộ chiếu không?'
        : 'Hello! I am your Vietnam Visa AI Expert. How can I assist you with e-Visa rules, emergency processing, or passport requirements today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (customPrompt?: string) => {
    const textToSend = customPrompt || inputValue;
    if (!textToSend.trim() || isTyping) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!customPrompt) setInputValue('');
    setIsTyping(true);

    try {
      const res = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: textToSend,
          language: currentLang
        })
      });

      const data = await res.json();
      setIsTyping(false);

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'assistant',
        text: data.text || 'Thank you for your question. Please verify official guidelines on our portal.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      setIsTyping(false);
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        sender: 'assistant',
        text: 'I am available to assist you with Vietnam visa policies, fees, and processing times. Please try again.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMsg]);
    }
  };

  const samplePrompts = [
    currentLang === 'vi' ? 'Hộ chiếu của tôi còn hạn dưới 6 tháng có nộp e-Visa được không?' : 'Can I apply for e-Visa if my passport has < 6 months validity?',
    currentLang === 'vi' ? 'Dịch vụ khẩn 1 giờ xử lý thế nào khi tôi đang ở sân bay?' : 'How does the 1-hour emergency service work at the airport?',
    currentLang === 'vi' ? 'Quốc tịch Anh, Đức, Nhật Bản được miễn visa bao nhiêu ngày?' : 'How many days visa exemption for UK, Germany, and Japan citizens?'
  ];

  return (
    <>
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 border border-indigo-400"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping"></span>
          </div>
          <span className="hidden sm:inline text-xs tracking-wider uppercase font-semibold">AI Visa Consultant</span>
        </button>
      )}

      {/* Floating Chat Window Modal */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[90vw] sm:w-[400px] h-[520px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-slate-900 text-white p-3.5 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-xs uppercase tracking-wide text-indigo-300">Vietnam Visa AI Expert</h3>
                <p className="text-[10px] text-slate-400">24/7 Gemini Assistant</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-1">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[80%] rounded-2xl p-3 shadow-sm leading-relaxed whitespace-pre-wrap ${
                    msg.sender === 'user'
                      ? 'bg-indigo-600 text-white font-medium rounded-tr-none'
                      : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                  <div className={`text-[9px] mt-1 text-right ${msg.sender === 'user' ? 'text-indigo-200' : 'text-slate-400'}`}>
                    {msg.timestamp}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs">
                <div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-[10px]">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-2.5 flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Sample Quick Questions */}
          <div className="p-2 bg-slate-100 border-t border-slate-200 flex flex-nowrap overflow-x-auto gap-1.5 no-scrollbar text-[10px]">
            {samplePrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(p)}
                className="bg-white hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 border border-slate-200 rounded-lg px-2.5 py-1 whitespace-nowrap shrink-0 transition-colors"
              >
                {p.slice(0, 32)}...
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder={t.aiAskPlaceholder}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className={`p-2 rounded-xl transition-all ${
                inputValue.trim() && !isTyping
                  ? 'bg-indigo-600 text-white shadow'
                  : 'bg-slate-200 text-slate-400'
              }`}
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
