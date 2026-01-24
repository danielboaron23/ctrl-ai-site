"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

const faqs = [
  {
    question: "What's the ideal team size for a workshop?",
    answer:
      "Workshops work best with 5-30 participants. This allows for personalized attention while maintaining group dynamics for collaborative exercises. For larger teams, we recommend multiple sessions.",
  },
  {
    question: "Do we need any prior AI experience?",
    answer:
      "No. Workshops are designed for all skill levels. We start with fundamentals and progress to advanced workflows. Participants with more experience get challenged with advanced techniques.",
  },
  {
    question: "Can workshops be delivered remotely?",
    answer:
      "Yes. We offer both on-site and remote workshop options. Remote workshops use interactive tools like FigJam and breakout sessions to maintain engagement.",
  },
  {
    question: "What's included post-workshop?",
    answer:
      "All participants receive workshop materials, prompt libraries, and 30-day async support via Slack for questions and guidance as they implement new workflows.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono text-accent-500 uppercase tracking-widest mb-6">
              <span className="w-8 h-px bg-accent-500"></span>
              05 — FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-display text-white tracking-tight mb-4">
              Common
              <br />
              Questions
            </h2>
            <p className="text-sm text-neutral-500 max-w-xs leading-relaxed">
              Everything you need to know before booking a workshop.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="border-t border-white/[0.08]">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-white/[0.08]">
                  <button
                    className="flex justify-between items-center py-5 md:py-6 cursor-pointer w-full text-left"
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  >
                    <span className="text-white font-medium tracking-tight pr-4">
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-lg border flex items-center justify-center transition-all ${
                        openIndex === index
                          ? "bg-accent-500/10 border-accent-500/30 text-accent-400"
                          : "border-white/10 bg-white/5 text-neutral-400"
                      }`}
                    >
                      <Icon
                        icon="ph:plus"
                        className={`transition-transform duration-300 ${
                          openIndex === index ? "rotate-45" : ""
                        }`}
                        width={16}
                      />
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-40 pb-6" : "max-h-0"
                    }`}
                  >
                    <p className="text-neutral-400 text-sm leading-relaxed max-w-2xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
