"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export default function WorkshopsSection() {
  const { t, isRTL } = useLanguage();

  return (
    <>
      {/* Featured Workshop */}
      <section id="workshops" className="py-20 md:py-32 relative">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
            <div>
              <div className="inline-flex items-center gap-2 text-[10px] font-mono text-accent-500 uppercase tracking-widest mb-4">
                <span className="w-8 h-px bg-accent-500"></span>
                {isRTL ? '01 — סדנה מובילה' : '01 — Flagship Workshop'}
              </div>
              <h2 className="text-3xl md:text-4xl font-display text-white tracking-tight">
                {isRTL ? 'מעיצוב לקוד' : 'Design to Code'}
              </h2>
            </div>
            <p className="text-sm text-neutral-500 max-w-md leading-relaxed">
              {isRTL ? 'גשר על הפער בין עיצוב לפיתוח עם תהליכי עבודה מונחי AI.' : 'Bridge the gap between design and development with AI-powered workflows.'}
            </p>
          </div>

          {/* Featured Workshop Large Card */}
          <div className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#0a0a0a]/50 backdrop-blur-sm hover:border-accent-500/20 transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:min-h-[600px]">
              {/* Visual Side */}
              <div className="relative h-64 lg:h-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000 ease-out"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2574&auto=format&fit=crop')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/50 to-transparent lg:bg-gradient-to-r"></div>

                {/* Floating UI Element */}
                <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10">
                  <div className="bg-[#030303]/80 backdrop-blur-xl border border-white/10 rounded-lg p-5 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                      </div>
                      <div className="text-[10px] font-mono text-neutral-500">
                        Component.tsx
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-1.5 bg-violet-500/40 rounded w-3/4"></div>
                      <div className="h-1.5 bg-white/10 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-between relative">
                <div className={`absolute top-4 ${isRTL ? 'left-4 lg:left-6' : 'right-4 lg:right-6'} lg:top-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                  <Icon icon={isRTL ? "ph:arrow-up-left" : "ph:arrow-up-right"} width={28} className="text-violet-400" />
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1.5 border border-violet-500/30 bg-violet-500/10 text-[10px] font-mono text-violet-400 uppercase rounded-sm">
                      {isRTL ? 'סדנה ליום אחד' : '1-Day Workshop'}
                    </span>
                    <span className="px-3 py-1.5 border border-white/10 bg-white/5 text-[10px] font-mono text-neutral-400 uppercase rounded-sm">
                      {isRTL ? 'הכי פופולרי' : 'Most Popular'}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-display text-white tracking-tight mb-4 leading-[1.1]">
                    {isRTL ? (
                      <>
                        מ-Figma
                        <br />
                        להפקה
                      </>
                    ) : (
                      <>
                        From Figma
                        <br />
                        to Production
                      </>
                    )}
                  </h3>
                  <p className="text-neutral-400 max-w-md leading-relaxed mb-6">
                    {isRTL
                      ? 'שלטו בתהליך המלא מעיצוב לקוד עם סיוע AI. למדו לייצא קומפוננטות React מוכנות להפקה ישירות מהעיצובים שלכם ב-Figma.'
                      : 'Master the full design-to-code pipeline with AI assistance. Learn to export production-ready React components directly from your Figma designs.'}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-sm text-neutral-300 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-violet-400 rounded-full"></div>
                      {isRTL ? 'שליטה ב-Cursor IDE' : 'Cursor IDE Mastery'}
                    </div>
                    <div className="text-sm text-neutral-300 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-violet-400 rounded-full"></div>
                      {isRTL ? 'Figma ל-React/HTML' : 'Figma to React/HTML'}
                    </div>
                    <div className="text-sm text-neutral-300 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-violet-400 rounded-full"></div>
                      {isRTL ? 'כישורי Claude' : 'Claude Skills'}
                    </div>
                    <div className="text-sm text-neutral-300 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-violet-400 rounded-full"></div>
                      {isRTL ? 'תהליכי הפקה' : 'Production Workflows'}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 md:gap-8 border-t border-white/[0.06] pt-6 md:pt-8 mt-8 md:mt-12">
                  <div>
                    <div className="text-[10px] text-neutral-600 uppercase mb-2 tracking-wider">
                      {isRTL ? 'כלים שנלמד' : 'Tools Covered'}
                    </div>
                    <div className="text-sm text-white font-mono mb-1">{isRTL ? '+4 כלי AI' : '4+ AI Tools'}</div>
                    <div className="text-xs text-neutral-500">Cursor, Claude, Figma...</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-600 uppercase mb-2 tracking-wider">
                      {isRTL ? 'פורמט' : 'Format'}
                    </div>
                    <div className="text-sm text-white font-mono mb-1">{isRTL ? 'מעשי' : 'Hands-On'}</div>
                    <div className="text-xs text-neutral-500">{isRTL ? 'פרונטלי או מרחוק' : 'On-site or Remote'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Workshops Grid */}
      <section className="py-20 md:py-24 relative">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono text-accent-500 uppercase tracking-widest mb-10 md:mb-12">
            <span className="w-8 h-px bg-accent-500"></span>
            {isRTL ? '02 — תוכניות מתמחות' : '02 — Specialized Programs'}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 spotlight-grid">
            {/* Workshop Card 1 */}
            <div className="group spotlight-card border border-white/[0.06] p-8 md:p-10 bg-[#0a0a0a]/30 hover:bg-[#0a0a0a]/50 rounded-xl transition-all duration-500 relative overflow-hidden card-lift">
              <div className={`absolute top-6 ${isRTL ? 'left-6 md:left-8' : 'right-6 md:right-8'} md:top-8`}>
                <div className="w-12 h-12 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center group-hover:bg-accent-500/20 transition-colors">
                  <Icon icon="ph:users-three" width={24} className="text-accent-400" />
                </div>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-display text-white mb-3">{isRTL ? 'AI לצוותי עיצוב' : 'AI for Design Teams'}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {isRTL ? 'שנו את צוות העיצוב שלכם עם תהליכי עבודה מונחי AI.' : 'Transform your design org with AI-native workflows.'}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="text-sm text-neutral-300 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-accent-400 rounded-full"></div>
                  {isRTL ? 'שליטה ב-Figma Make' : 'Figma Make Mastery'}
                </div>
                <div className="text-sm text-neutral-300 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-accent-400 rounded-full"></div>
                  {isRTL ? 'אינטגרציית Claude' : 'Claude Integration'}
                </div>
                <div className="text-sm text-neutral-300 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-accent-400 rounded-full"></div>
                  {isRTL ? 'תהליכי צוות' : 'Team Workflows'}
                </div>
                <div className="text-sm text-neutral-300 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-accent-400 rounded-full"></div>
                  {isRTL ? '40% אספקה מהירה יותר' : '40% Faster Shipping'}
                </div>
              </div>
              <Link href="/workshops/ai-design" className="btn-secondary w-full justify-center">
                <span>{t.workshops.learnMore}</span>
                <Icon icon={isRTL ? "ph:arrow-left" : "ph:arrow-right"} width={16} />
              </Link>
            </div>

            {/* Workshop Card 2 */}
            <div className="group spotlight-card border border-white/[0.06] p-8 md:p-10 bg-[#0a0a0a]/30 hover:bg-[#0a0a0a]/50 rounded-xl transition-all duration-500 relative overflow-hidden card-lift">
              <div className={`absolute top-6 ${isRTL ? 'left-6 md:left-8' : 'right-6 md:right-8'} md:top-8`}>
                <div className="w-12 h-12 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center group-hover:bg-sky-500/20 transition-colors">
                  <Icon icon="ph:paint-brush" width={24} className="text-sky-400" />
                </div>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-display text-white mb-3">{isRTL ? 'הגדרת שפת מותג' : 'Brand Language Setup'}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {isRTL ? 'הגדירו AI לדבר בשפה הויזואלית של המותג שלכם.' : "Configure AI to speak your brand's visual language."}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="text-sm text-neutral-300 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-sky-400 rounded-full"></div>
                  {isRTL ? 'מערכת עיצוב מוכנה ל-AI' : 'AI-Ready Design System'}
                </div>
                <div className="text-sm text-neutral-300 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-sky-400 rounded-full"></div>
                  {isRTL ? 'ספריות פרומפטים מותאמות' : 'Custom Prompt Libraries'}
                </div>
                <div className="text-sm text-neutral-300 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-sky-400 rounded-full"></div>
                  {isRTL ? 'הנחיות Figma Make' : 'Figma Make Guidelines'}
                </div>
                <div className="text-sm text-neutral-300 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-sky-400 rounded-full"></div>
                  {isRTL ? 'עקביות מותגית' : 'Brand Consistency'}
                </div>
              </div>
              <Link href="/workshops/ai-brand-language" className="btn-secondary w-full justify-center">
                <span>{t.workshops.learnMore}</span>
                <Icon icon={isRTL ? "ph:arrow-left" : "ph:arrow-right"} width={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
