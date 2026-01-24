"use client";

const companies = [
  "Rubrik",
  "Cato Networks",
  "Cellebrite",
  "WSC Sports",
  "Lightricks",
  "Natural Intelligence",
  "Remitly",
  "Guidde",
  "Balance",
  "Optibus",
];

export default function LogoStrip() {
  return (
    <div className="py-8 md:py-10">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest text-center mb-6">
          Trusted by leading teams
        </p>
        <div className="overflow-hidden marquee-wrapper">
          <div className="marquee-content opacity-50 hover:opacity-70 transition-all duration-500 items-center">
            {/* First set */}
            {companies.map((company) => (
              <span
                key={company}
                className="text-sm font-medium text-white/80 whitespace-nowrap tracking-wide"
              >
                {company}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {companies.map((company) => (
              <span
                key={`dup-${company}`}
                className="text-sm font-medium text-white/80 whitespace-nowrap tracking-wide"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
