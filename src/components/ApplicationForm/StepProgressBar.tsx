import React from 'react';
import { Check } from 'lucide-react';
import { Language } from '../../types';
import { TRANSLATIONS } from '../../data/translations';

interface StepProgressBarProps {
  currentStep: number;
  currentLang: Language;
  onStepClick: (step: number) => void;
}

export const StepProgressBar: React.FC<StepProgressBarProps> = ({
  currentStep,
  currentLang,
  onStepClick
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const steps = [
    { number: 1, title: t.step1Title },
    { number: 2, title: t.step2Title },
    { number: 3, title: t.step3Title },
    { number: 4, title: t.step4Title }
  ];

  return (
    <div className="w-full bg-white rounded-2xl p-4 sm:p-6 shadow-md border border-slate-200 mb-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {steps.map((step, idx) => {
          const isCompleted = currentStep > step.number;
          const isCurrent = currentStep === step.number;

          return (
            <React.Fragment key={step.number}>
              <div 
                onClick={() => {
                  if (step.number < currentStep) onStepClick(step.number);
                }}
                className={`flex items-center gap-3 w-full md:w-auto ${
                  step.number < currentStep ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-all ${
                    isCompleted
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : isCurrent
                      ? 'bg-indigo-600 text-white ring-4 ring-indigo-100 shadow-md'
                      : 'bg-slate-100 text-slate-400 border border-slate-200'
                  }`}
                >
                  {isCompleted ? <Check className="w-5 h-5 text-white" /> : step.number}
                </div>

                <div>
                  <div
                    className={`text-xs font-bold ${
                      isCurrent
                        ? 'text-indigo-700'
                        : isCompleted
                        ? 'text-emerald-700'
                        : 'text-slate-400'
                    }`}
                  >
                    STEP 0{step.number}
                  </div>
                  <div
                    className={`text-xs sm:text-sm font-semibold max-w-[150px] leading-snug ${
                      isCurrent ? 'text-slate-900 font-bold' : 'text-slate-600'
                    }`}
                  >
                    {step.title.split('. ')[1] || step.title}
                  </div>
                </div>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden md:block flex-1 h-0.5 bg-slate-200 relative mx-2">
                  <div
                    className="h-full bg-emerald-500 transition-all duration-300"
                    style={{ width: currentStep > step.number ? '100%' : '0%' }}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
