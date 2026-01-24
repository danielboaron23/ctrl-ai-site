"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono text-accent-500 uppercase tracking-widest mb-6">
              <span className="w-8 h-px bg-accent-500"></span>
              04 — Your Instructor
            </div>
            <h2 className="text-4xl md:text-5xl font-display tracking-tight text-white mb-6">
              Daniel Boaron
            </h2>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-8">
              Designer, developer, and founder of Design AI—Israel&apos;s leading platform for AI
              integration in design workflows. I&apos;ve trained 500+ designers across 15+
              companies, helping teams transform from AI-curious to AI-native.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4 mb-8">
              <div className="px-5 py-3 border border-white/[0.08] rounded-lg bg-white/[0.02]">
                <div className="text-white text-xl font-display">7</div>
                <div className="text-[10px] text-neutral-500 uppercase tracking-wider">
                  Design AI Conferences
                </div>
              </div>
              <div className="px-5 py-3 border border-white/[0.08] rounded-lg bg-white/[0.02]">
                <div className="text-white text-xl font-display">500+</div>
                <div className="text-[10px] text-neutral-500 uppercase tracking-wider">
                  Designers Trained
                </div>
              </div>
              <div className="px-5 py-3 border border-white/[0.08] rounded-lg bg-white/[0.02]">
                <div className="text-white text-xl font-display">15+</div>
                <div className="text-[10px] text-neutral-500 uppercase tracking-wider">
                  Team Workshops
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
          <div className="relative order-1 lg:order-2">
            <div className="aspect-[4/5] md:aspect-square bg-[#0a0a0a] border border-white/[0.08] rounded-xl overflow-hidden">
              <Image
                src="/assets/daniel.jpg"
                alt="Daniel Boaron"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 px-4 py-3 bg-[#030303]/90 border border-accent-500/30 rounded-lg backdrop-blur-xl shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-mono text-accent-400 uppercase tracking-wide">
                  Design AI 7.0 — March 2026
                </span>
              </div>
            </div>
            {/* Decorative corner */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-l-2 border-t-2 border-accent-500/30 rounded-tl-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
