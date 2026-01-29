"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n";

interface StatProps {
  value: number;
  suffix: string;
  label: string;
}

function StatCard({ value, suffix, label }: StatProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const stepValue = value / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += stepValue;
            if (current >= value) {
              setCount(value);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div
      ref={ref}
      className="group p-6 md:p-8 bg-white/[0.02] border border-white/[0.05] rounded-lg hover:border-accent-500/20 hover:bg-white/[0.03] transition-all duration-300 card-lift"
    >
      <div className="text-3xl md:text-5xl font-display text-white tracking-tight mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-xs text-neutral-500 uppercase tracking-wider font-medium">{label}</div>
    </div>
  );
}

export default function ImpactStats() {
  const { t, isRTL } = useLanguage();

  const stats = [
    { value: 15, suffix: "+", label: t.stats.teamsTrainedLabel },
    { value: 500, suffix: "+", label: t.stats.designersSkilledLabel },
    { value: 40, suffix: "%", label: t.stats.timeSavedLabel },
    { value: 7, suffix: "", label: isRTL ? "כנסים אורגנו" : "Conferences Hosted" },
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
