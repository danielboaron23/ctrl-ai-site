"use client";

import { Icon } from "@iconify/react";

const testimonials = [
  {
    quote:
      "Finally, a workshop that isn't just theory. Our team went from skeptical to shipping AI-assisted designs within a week.",
    role: "Design Lead",
    company: "Rubrik",
    initial: "R",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    quote:
      "The Figma Make guidelines session alone was worth the entire workshop. Game-changer for maintaining brand consistency.",
    role: "VP Design",
    company: "Cellebrite",
    initial: "C",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    quote:
      "Daniel has the rare ability to make complex AI concepts accessible. Our entire team of 30 designers is now AI-native.",
    role: "Head of UX",
    company: "WSC Sports",
    initial: "W",
    gradient: "from-violet-500 to-purple-600",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-mono text-accent-500 uppercase tracking-widest mb-4">
              <span className="w-8 h-px bg-accent-500"></span>
              Client Intel
            </div>
            <h2 className="text-3xl md:text-4xl font-display tracking-tight text-white">
              What Teams Say
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 spotlight-grid">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.company}
              className="spotlight-card group p-6 md:p-8 border border-white/[0.06] bg-[#0a0a0a]/40 backdrop-blur-sm rounded-xl hover:bg-[#0a0a0a]/60 hover:border-white/10 transition-all duration-300 relative card-lift"
            >
              <div className="absolute top-6 right-6 md:top-8 md:right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Icon icon="ph:quotes" width={40} className="text-white" />
              </div>
              <p className="text-neutral-300 text-sm mb-8 leading-relaxed relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-white/[0.06]">
                <div
                  className={`w-10 h-10 bg-gradient-to-br ${testimonial.gradient} rounded-lg flex items-center justify-center text-white text-sm font-semibold`}
                >
                  {testimonial.initial}
                </div>
                <div>
                  <div className="text-white text-sm font-medium">{testimonial.role}</div>
                  <div className="text-[11px] text-neutral-500 font-mono tracking-wide">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
