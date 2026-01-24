"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="relative z-10 w-full bg-[#0a0a0a]/50 border border-white/[0.08] rounded-2xl md:rounded-3xl overflow-hidden min-h-[500px] md:min-h-[600px] flex flex-col items-center justify-center group isolate">
          {/* Background */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-accent-600/15 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[80px]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(3,3,3,0.9)_100%)]"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center p-6 md:p-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 md:mb-10 border border-accent-500/30 rounded-sm bg-accent-500/10 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
              </span>
              <span className="text-[10px] font-mono text-accent-300 uppercase tracking-widest">
                Now Booking Q1 2026
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display tracking-tight text-white mb-6 md:mb-8 leading-[0.95]">
              Ready to
              <br />
              <span className="gradient-text-accent italic">transform?</span>
            </h2>
            <p className="text-neutral-400 text-base md:text-lg font-light leading-relaxed max-w-lg mb-10 md:mb-12">
              Book a 30-minute call to discuss your team&apos;s needs and get a customized workshop
              proposal.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button className="btn-primary text-sm px-8 py-4">
                <span>Book Discovery Call</span>
                <Icon icon="ph:arrow-right" width={18} />
              </button>

              <Link
                href="mailto:daniel@ctrlai.co"
                className="group text-xs font-mono text-neutral-500 hover:text-accent-400 uppercase tracking-widest transition-colors flex items-center gap-2"
              >
                daniel@ctrlai.co
                <Icon
                  icon="ph:arrow-up-right"
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  width={14}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
