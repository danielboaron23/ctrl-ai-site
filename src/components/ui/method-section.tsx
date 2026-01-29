"use client";

import { useLanguage } from "@/lib/i18n";

export default function MethodSection() {
  const { t, isRTL } = useLanguage();

  const steps = t.method.steps;

  return (
    <section id="method" className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="inline-flex items-center gap-2 text-[10px] font-mono text-accent-500 uppercase tracking-widest mb-6">
          <span className="w-8 h-px bg-accent-500"></span>
          {isRTL ? '03 — המתודולוגיה שלנו' : '03 — Our Method'}
        </div>

        <h2 className="text-3xl md:text-4xl font-display text-white tracking-tight mb-16 md:mb-20 max-w-xl">
          {isRTL ? (
            <>תהליך מוכח ל<span className="italic gradient-text-accent">שינוי מתמשך</span></>
          ) : (
            <>A proven process for <span className="italic gradient-text-accent">lasting change</span></>
          )}
        </h2>

        <div className="relative">
          {/* Connection Line - hidden on mobile */}
          <div className={`hidden md:block absolute top-[32px] ${isRTL ? 'right-0' : 'left-0'} w-full h-px bg-white/[0.06] z-0`}></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 relative z-10">
            {steps.map((step, index) => (
              <div key={step.number} className="group cursor-default">
                <div className="w-16 h-16 bg-[#0a0a0a] border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:border-accent-500/50 group-hover:bg-accent-500/5 transition-all duration-300 relative">
                  <span className="text-lg font-mono text-white group-hover:text-accent-400 transition-colors">
                    {step.number}
                  </span>
                  {index === 3 && (
                    <div className={`absolute -top-1 ${isRTL ? '-left-1' : '-right-1'} w-3 h-3 bg-accent-500 rounded-full animate-pulse`}></div>
                  )}
                </div>
                <h4 className="text-xl font-display text-white mb-3">{step.title}</h4>
                <p className="text-sm text-neutral-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
