"use client";

const logos = [
  { name: "Rubrik", logo: "/assets/logos/rubrik.png" },
  { name: "CATO", logo: "/assets/logos/cato.png" },
  { name: "Cellebrite", logo: "/assets/logos/cellebrite.png" },
  { name: "Storeal", logo: "/assets/logos/storeal.png" },
  { name: "Remitly", logo: "/assets/logos/remitly.png" },
  { name: "Balance", logo: "/assets/logos/balance.webp" },
  { name: "Siemens", logo: "/assets/logos/siemens.svg" },
  { name: "Anima", logo: "/assets/logos/anima.png" },
  { name: "Nanit", logo: "/assets/logos/nanit.png" },
  { name: "Myop", logo: "/assets/logos/myop.png" },
  { name: "Radware", logo: "/assets/logos/radware.png" },
  { name: "Natural Intelligence", logo: "/assets/logos/natural-intelligence.png" },
  { name: "Optibus", logo: "/assets/logos/optibus.svg" },
  { name: "Intuit", logo: "/assets/logos/intuit.png" },
  { name: "TravelBooster", logo: "/assets/logos/travelbooster.png" },
  { name: "WSC Sports", logo: "/assets/logos/wsc-sports.png" },
];

export default function LogoStrip() {
  return (
    <div className="py-8 md:py-10">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest text-center mb-6">
          Trusted by leading teams
        </p>
        <div className="overflow-hidden marquee-wrapper">
          <div className="marquee-content opacity-60 hover:opacity-80 transition-all duration-500 items-center">
            {/* First set */}
            {logos.map((company) => (
              <div key={company.name} className="flex-shrink-0 px-6">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="h-6 w-auto object-contain brightness-0 invert"
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {logos.map((company) => (
              <div key={`dup-${company.name}`} className="flex-shrink-0 px-6">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="h-6 w-auto object-contain brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
