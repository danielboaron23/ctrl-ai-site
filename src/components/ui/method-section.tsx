"use client";

const steps = [
  {
    number: "01",
    title: "Audit",
    description:
      "We analyze your current workflow, tools, and team structure to identify AI integration opportunities.",
    hasIndicator: false,
  },
  {
    number: "02",
    title: "Configure",
    description:
      "Custom workshop content tailored to your design system, brand guidelines, and tech stack.",
    hasIndicator: false,
  },
  {
    number: "03",
    title: "Train",
    description:
      "Intensive hands-on sessions where your team practices with real projects and actual tools.",
    hasIndicator: false,
  },
  {
    number: "04",
    title: "Support",
    description:
      "30-day post-workshop support to ensure your team successfully integrates new workflows.",
    hasIndicator: true,
  },
];

export default function MethodSection() {
  return (
    <section id="method" className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="inline-flex items-center gap-2 text-[10px] font-mono text-accent-500 uppercase tracking-widest mb-6">
          <span className="w-8 h-px bg-accent-500"></span>
          03 — Our Method
        </div>

        <h2 className="text-3xl md:text-4xl font-display text-white tracking-tight mb-16 md:mb-20 max-w-xl">
          A proven process for <span className="italic gradient-text-accent">lasting change</span>
        </h2>

        <div className="relative">
          {/* Connection Line - hidden on mobile */}
          <div className="hidden md:block absolute top-[32px] left-0 w-full h-px bg-white/[0.06] z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 relative z-10">
            {steps.map((step) => (
              <div key={step.number} className="group cursor-default">
                <div className="w-16 h-16 bg-[#0a0a0a] border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:border-accent-500/50 group-hover:bg-accent-500/5 transition-all duration-300 relative">
                  <span className="text-lg font-mono text-white group-hover:text-accent-400 transition-colors">
                    {step.number}
                  </span>
                  {step.hasIndicator && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-500 rounded-full animate-pulse"></div>
                  )}
                </div>
                <h4 className="text-xl font-display text-white mb-3">{step.title}</h4>
                <p className="text-sm text-neutral-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
