"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Thanks for this amazing workshop! It truly opened our eyes and inspired the team to explore new ideas. Daniel's approach made complex AI concepts accessible and immediately applicable to our daily work.",
    name: "Oded Klimer",
    role: "Chief of Design",
    company: "Rubrik",
    logo: "/assets/logos/rubrik.png",
    avatar: "/assets/avatars/oded-klimer.jpeg",
    invertLogo: true,
  },
  {
    quote:
      "A huge shoutout to Daniel Boaron for his insightful guidance! He crafted a workshop perfectly suited to our team's needs, showcasing the future of design with AI. His deep expertise made it both inspiring and actionable for everyone.",
    name: "Gili Boker",
    role: "Director of Product Design",
    company: "CATO",
    logo: "/assets/logos/cato.png",
    avatar: "/assets/avatars/gili-boker.jpeg",
    invertLogo: true,
  },
  {
    quote:
      "A big thank you to Daniel Boaron for his expertise and inspiring facilitation. He designed the experience from the ground up, filled it with creativity, and guided us with positivity. A true expert!",
    name: "Yehuda Levy",
    role: "UI/UX Director",
    company: "Cellebrite",
    logo: "/assets/logos/cellebrite.png",
    avatar: "/assets/avatars/yehuda-levy.jpeg",
    invertLogo: true,
  },
  {
    quote:
      "Working with Daniel was exceptional. He created a focused, practical workshop tailored to our company's needs, addressing our workflows and real challenges. His approach helped the entire organization aiming to enhance its design and AI capabilities.",
    name: "Tali Bar David",
    role: "VP Product",
    company: "Storeal",
    logo: "/assets/logos/storeal.png",
    avatar: "/assets/avatars/tali-bar-david.jpeg",
    invertLogo: true,
  },
  {
    quote:
      "I highly recommend Daniel for anyone wanting to boost their AI skills. He conducted an impactful workshop for our marketing team, showcasing new tools and practical applications. His approach left a lasting impression.",
    name: "Shenhav Yehuda Goren",
    role: "Director of Marketing",
    company: "Remitly",
    logo: "/assets/logos/remitly.png",
    avatar: "/assets/avatars/shenhav-yehuda-goren.png",
    invertLogo: true,
  },
  {
    quote:
      "Daniel's preparation was exceptional. He delivered deep expertise that translated into actionable insights our team uses daily. His meticulous attention to detail and strategic approach left us equipped with practical tools we implemented immediately.",
    name: "Nir Gazit",
    role: "VP of Product",
    company: "Balance",
    logo: "/assets/logos/balance.webp",
    avatar: "/assets/avatars/nir-gazit.jpeg",
    invertLogo: true,
  },
  {
    quote:
      "An enlightening workshop that transforms AI from a buzzword into practical use. Daniel simplifies complex tools, making them relevant and immediately beneficial for every designer.",
    name: "Varda Senerman",
    role: "Lead UX Designer",
    company: "Siemens",
    logo: "/assets/logos/siemens.svg",
    avatar: "/assets/avatars/varda-senerman.jpeg",
    invertLogo: true,
  },
  {
    quote:
      "We had a fantastic workshop with Daniel. His expertise in market dynamics and the interplay between product, design, and code made it truly valuable. The session was tailored to each organization's needs, and I highly recommend it!",
    name: "Michal Cohen",
    role: "Co-founder",
    company: "Anima",
    logo: "/assets/logos/anima.png",
    avatar: "/assets/avatars/michal-cohen.jpeg",
    invertLogo: true,
  },
  {
    quote:
      "Daniel customized the workshop to meet our needs perfectly it helped us create new designs that align with our brand and significantly enhanced our workflow.",
    name: "Barak Alon",
    role: "Director of Product",
    company: "Nanit",
    logo: "/assets/logos/nanit.png",
    avatar: "/assets/avatars/barak-alon.jpeg",
    invertLogo: true,
  },
  {
    quote:
      "We had a workshop with Daniel that was concise and impactful, bridging design, product, and AI. His sharp insights and hands-on approach made it incredibly valuable for our team.",
    name: "Keren Fanan",
    role: "Co-Founder & CEO",
    company: "Myop",
    logo: "/assets/logos/myop.png",
    avatar: "/assets/avatars/keren-fanan.jpeg",
    invertLogo: true,
  },
  {
    quote:
      "Daniel delivered the workshop with comprehensive preparation that met our real-world needs. His strategic approach and hands-on methods left our team empowered and ready to implement.",
    name: "Liora Breitman",
    role: "Director of Product Design",
    company: "Radware",
    logo: "/assets/logos/radware.png",
    avatar: "/assets/avatars/liora-breitman.jpeg",
    invertLogo: true,
  },
  {
    quote:
      "Daniel tailored the workshop perfectly to our needs. His strategic thinking combined with hands-on execution made it incredibly valuable. We left with clear next steps and actionable insights.",
    name: "Yaron Yativ",
    role: "Product Design Director",
    company: "Natural Intelligence",
    logo: "/assets/logos/natural-intelligence.png",
    avatar: "/assets/avatars/yaron-yativ.jpeg",
    invertLogo: true,
  },
  {
    quote:
      "Daniel Boaron brought exceptional energy and deep expertise in AI for design. His ability to bridge design, product, and technology turned the workshop into a real catalyst helping our team adopt AI not to work faster, but to work smarter.",
    name: "Yair Golan",
    role: "UX Director",
    company: "Optibus",
    logo: "/assets/logos/optibus.svg",
    avatar: "/assets/avatars/yair-golan.png",
    invertLogo: true,
  },
  {
    quote:
      "Daniel helped our designers move from experimenting with AI to using it with intention. The workshop created clarity, focus, and a shared language across design, product, and tech with immediate impact on how we work.",
    name: "Martin Friedmann",
    role: "Senior Staff Product Designer",
    company: "Intuit",
    logo: "/assets/logos/intuit.png",
    avatar: "/assets/avatars/martin-friedmann.jpeg",
    invertLogo: true,
  },
  {
    quote:
      "Daniel's workshop gave our team clear, usable methods for integrating AI into everyday design work. Instead of abstract concepts, we walked away with practical workflows that improved focus and collaboration.",
    name: "Ben Ganon",
    role: "Product Designer",
    company: "TravelBooster",
    logo: "/assets/logos/travelbooster.png",
    avatar: "/assets/avatars/ben-ganon.jpeg",
    invertLogo: true,
  },
  {
    quote:
      "The workshop with Daniel was eye-opening. He brought fresh perspectives on how AI can enhance our design process, making it more efficient and creative at the same time.",
    name: "Einav Kivshany",
    role: "Product Designer",
    company: "WSC Sports",
    logo: "/assets/logos/wsc-sports.svg",
    avatar: "/assets/avatars/einav-kivshany.jpeg",
    invertLogo: false,
    largerLogo: true,
  },
];

function VerifiedBadge() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path d="M5.89 1.15c1.17-1.53 3.05-1.53 4.22 0l.33.43c.42.55.97.94 1.59 1.12l.53.16c1.88.56 2.6 2.3 1.59 3.85l-.28.43c-.36.55-.53 1.2-.49 1.85l.03.55c.13 1.95-1.36 3.35-3.3 3.1l-.54-.07a3.22 3.22 0 00-1.87.33l-.48.25c-1.72.89-3.53.1-4.01-1.76l-.13-.52c-.17-.66-.53-1.24-1.05-1.68l-.43-.37c-1.47-1.25-1.28-3.17.43-4.24l.47-.3c.61-.39 1.07-.93 1.33-1.56l.2-.5c.72-1.8 2.36-2.4 3.64-1.33" fill="#2E90FA"/>
      <path d="M5.75 8l1.5 1.5 3-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

type Testimonial = typeof testimonials[number];

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

// Split testimonials into columns
const firstColumn = testimonials.slice(0, 6);
const secondColumn = testimonials.slice(6, 11);
const thirdColumn = testimonials.slice(11, 16);

export default function TestimonialsSection() {
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
              Client Intel
            </div>
            <h2 className="text-3xl md:text-4xl font-display tracking-tight text-white">
              What Teams Say
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
