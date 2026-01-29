"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

const testimonialMeta = [
  { logo: "/assets/logos/rubrik.png", avatar: "/assets/avatars/oded-klimer.jpeg", invertLogo: true },
  { logo: "/assets/logos/cato.png", avatar: "/assets/avatars/gili-boker.jpeg", invertLogo: true },
  { logo: "/assets/logos/cellebrite.png", avatar: "/assets/avatars/yehuda-levy.jpeg", invertLogo: true },
  { logo: "/assets/logos/storeal.png", avatar: "/assets/avatars/tali-bar-david.jpeg", invertLogo: true },
  { logo: "/assets/logos/remitly.png", avatar: "/assets/avatars/shenhav-yehuda-goren.png", invertLogo: true },
  { logo: "/assets/logos/balance.webp", avatar: "/assets/avatars/nir-gazit.jpeg", invertLogo: true },
  { logo: "/assets/logos/siemens.svg", avatar: "/assets/avatars/varda-senerman.jpeg", invertLogo: true },
  { logo: "/assets/logos/anima.png", avatar: "/assets/avatars/michal-cohen.jpeg", invertLogo: true },
  { logo: "/assets/logos/nanit.png", avatar: "/assets/avatars/barak-alon.jpeg", invertLogo: true },
  { logo: "/assets/logos/myop.png", avatar: "/assets/avatars/keren-fanan.jpeg", invertLogo: true },
  { logo: "/assets/logos/radware.png", avatar: "/assets/avatars/liora-breitman.jpeg", invertLogo: true },
  { logo: "/assets/logos/natural-intelligence.png", avatar: "/assets/avatars/yaron-yativ.jpeg", invertLogo: true },
  { logo: "/assets/logos/optibus.svg", avatar: "/assets/avatars/yair-golan.png", invertLogo: true },
  { logo: "/assets/logos/intuit.png", avatar: "/assets/avatars/martin-friedmann.jpeg", invertLogo: true },
  { logo: "/assets/logos/travelbooster.png", avatar: "/assets/avatars/ben-ganon.jpeg", invertLogo: true },
  { logo: "/assets/logos/wsc-sports.svg", avatar: "/assets/avatars/einav-kivshany.jpeg", invertLogo: false, largerLogo: true },
];

function VerifiedBadge() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path d="M5.89 1.15c1.17-1.53 3.05-1.53 4.22 0l.33.43c.42.55.97.94 1.59 1.12l.53.16c1.88.56 2.6 2.3 1.59 3.85l-.28.43c-.36.55-.53 1.2-.49 1.85l.03.55c.13 1.95-1.36 3.35-3.3 3.1l-.54-.07a3.22 3.22 0 00-1.87.33l-.48.25c-1.72.89-3.53.1-4.01-1.76l-.13-.52c-.17-.66-.53-1.24-1.05-1.68l-.43-.37c-1.47-1.25-1.28-3.17.43-4.24l.47-.3c.61-.39 1.07-.93 1.33-1.56l.2-.5c.72-1.8 2.36-2.4 3.64-1.33" fill="#2E90FA"/>
      <path d="M5.75 8l1.5 1.5 3-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

type TestimonialData = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

type TestimonialMeta = {
  logo: string;
  avatar: string;
  invertLogo: boolean;
  largerLogo?: boolean;
};

type Testimonial = TestimonialData & TestimonialMeta;

const TestimonialsColumn = ({
  className,
  testimonials,
  duration = 10,
}: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map((testimonial, i) => (
              <div
                key={`${index}-${i}`}
                className="p-6 md:p-8 border border-white/[0.06] bg-[#0a0a0a]/60 backdrop-blur-sm rounded-2xl max-w-xs w-full hover:border-white/10 transition-all duration-300"
              >
                {/* Logo */}
                <div className="h-8 flex items-center mb-5">
                  <img
                    src={testimonial.logo}
                    alt={`${testimonial.company} logo`}
                    className={`${testimonial.largerLogo ? 'h-10' : 'h-8'} w-auto object-contain opacity-80 ${
                      testimonial.invertLogo ? 'brightness-0 invert' : ''
                    }`}
                  />
                </div>

                {/* Quote */}
                <p className="text-neutral-300 text-sm leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/[0.06]">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0 border border-white/10"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-white text-sm font-medium truncate">
                        {testimonial.name}
                      </span>
                      <VerifiedBadge />
                    </div>
                    <div className="text-[11px] text-neutral-500 font-mono tracking-wide truncate">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default function TestimonialsSection() {
  const { t, isRTL } = useLanguage();

  // Combine translation data with meta data
  const testimonials: Testimonial[] = t.testimonialsData.map((data, index) => ({
    ...data,
    ...testimonialMeta[index],
  }));

  // Split testimonials into columns
  const firstColumn = testimonials.slice(0, 6);
  const secondColumn = testimonials.slice(6, 11);
  const thirdColumn = testimonials.slice(11, 16);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-mono text-accent-500 uppercase tracking-widest mb-4">
              <span className="w-8 h-px bg-accent-500"></span>
              {isRTL ? 'המלצות' : 'Client Intel'}
            </div>
            <h2 className="text-3xl md:text-4xl font-display tracking-tight text-white">
              {t.testimonials.title}
            </h2>
          </div>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[700px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={30} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={22} />
        </div>
      </div>
    </section>
  );
}
