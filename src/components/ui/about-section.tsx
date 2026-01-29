"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export default function AboutSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={`order-2 ${isRTL ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="inline-flex items-center gap-2 text-[10px] font-mono text-accent-500 uppercase tracking-widest mb-6">
              <span className="w-8 h-px bg-accent-500"></span>
              {isRTL ? '04 — המדריך שלכם' : '04 — Your Instructor'}
            </div>
            <h2 className="text-4xl md:text-5xl font-display tracking-tight text-white mb-6">
              {t.about.name}
            </h2>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-8">
              {isRTL
                ? 'מעצב, מפתח ומייסד Design AI—הפלטפורמה המובילה בישראל לשילוב AI בתהליכי עיצוב. הדרכתי 500+ מעצבים ב-15+ חברות, ועזרתי לצוותים לעבור מסקרנות ל-AI לשליטה מלאה בו.'
                : "Designer, developer, and founder of Design AI—Israel's leading platform for AI integration in design workflows. I've trained 500+ designers across 15+ companies, helping teams transform from AI-curious to AI-native."}
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4 mb-8">
              <div className="px-5 py-3 border border-white/[0.08] rounded-lg bg-white/[0.02]">
                <div className="text-white text-xl font-display">7</div>
                <div className="text-[10px] text-neutral-500 uppercase tracking-wider">
                  {isRTL ? 'כנסי Design AI' : 'Design AI Conferences'}
                </div>
              </div>
              <div className="px-5 py-3 border border-white/[0.08] rounded-lg bg-white/[0.02]">
                <div className="text-white text-xl font-display">+500</div>
                <div className="text-[10px] text-neutral-500 uppercase tracking-wider">
                  {isRTL ? 'מעצבים הוכשרו' : 'Designers Trained'}
                </div>
              </div>
              <div className="px-5 py-3 border border-white/[0.08] rounded-lg bg-white/[0.02]">
                <div className="text-white text-xl font-display">+15</div>
                <div className="text-[10px] text-neutral-500 uppercase tracking-wider">
                  {isRTL ? 'סדנאות צוות' : 'Team Workshops'}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:border-accent-500/30 hover:bg-accent-500/5 transition-all"
                aria-label="LinkedIn"
              >
                <Icon icon="mdi:linkedin" width={20} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:border-accent-500/30 hover:bg-accent-500/5 transition-all"
                aria-label="Twitter"
              >
                <Icon icon="mdi:twitter" width={20} />
              </Link>
            </div>
          </div>
          <div className={`relative order-1 ${isRTL ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/assets/daniel.png"
                alt={t.about.name}
                width={600}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className={`absolute -bottom-4 ${isRTL ? '-left-4 md:-left-6' : '-right-4 md:-right-6'} md:-bottom-6 px-4 py-3 bg-[#030303]/90 border border-accent-500/30 rounded-lg backdrop-blur-xl shadow-lg`}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-mono text-accent-400 uppercase tracking-wide">
                  Design AI 7.0 — {isRTL ? 'מרץ 2026' : 'March 2026'}
                </span>
              </div>
            </div>
            {/* Decorative corner */}
            <div className={`absolute -top-3 ${isRTL ? '-right-3 border-r-2 border-t-2 rounded-tr-lg' : '-left-3 border-l-2 border-t-2 rounded-tl-lg'} w-6 h-6 border-accent-500/30`}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
