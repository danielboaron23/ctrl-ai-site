"use client";

import { Icon } from "@iconify/react";

const tools = [
  { name: "Figma", subtitle: "+ Make AI", icon: "simple-icons:figma", color: "#F24E1E" },
  { name: "Claude", subtitle: "Anthropic", icon: "simple-icons:anthropic", color: "#D97757" },
  { name: "Cursor", subtitle: "AI IDE", icon: "ph:cursor-click-fill", color: "white" },
  { name: "ChatGPT", subtitle: "OpenAI", icon: "simple-icons:openai", color: "white" },
];

const tools2 = [
  { name: "React", subtitle: "Framework", icon: "simple-icons:react", color: "#61DAFB" },
  { name: "v0", subtitle: "Vercel AI", icon: "simple-icons:v", color: "white" },
  { name: "Framer", subtitle: "No-Code", icon: "simple-icons:framer", color: "white" },
  { name: "Midjourney", subtitle: "Image Gen", icon: "simple-icons:midjourney", color: "white" },
];

const tools3 = [
  { name: "Notion", subtitle: "Docs + AI", icon: "simple-icons:notion", color: "white" },
  { name: "Tailwind", subtitle: "CSS", icon: "simple-icons:tailwindcss", color: "#06B6D4" },
  { name: "GitHub", subtitle: "Copilot", icon: "simple-icons:github", color: "white" },
];

function WallCard({ name, subtitle, icon, color }: { name: string; subtitle: string; icon: string; color: string }) {
  return (
    <div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <Icon icon={icon} width={32} style={{ color }} />
        <div className="w-1.5 h-1.5 rounded-full bg-accent-400 shadow-[0_0_10px_rgba(167,139,250,0.6)]"></div>
      </div>
      <div>
        <div className="text-sm font-mono text-white/80">{name}</div>
        <div className="text-[9px] font-mono text-neutral-500">{subtitle}</div>
      </div>
    </div>
  );
}

export default function StackSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-0">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-600/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row min-h-[700px] md:min-h-[900px]">
        <div className="w-full md:w-[45%] px-4 md:px-6 py-12 md:py-32 flex flex-col justify-center relative z-20 bg-gradient-to-r from-[#030303] via-[#030303] to-transparent">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono text-accent-500 uppercase tracking-widest mb-6">
            <span className="w-8 h-px bg-accent-500"></span>
            The Stack
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display tracking-tight text-white mb-8 leading-[0.95]">
            Tools We
            <br />
            <span className="gradient-text-accent italic">Master.</span>
          </h2>

          <div className="space-y-8 max-w-md">
            <p className="text-neutral-400 text-base md:text-lg font-light leading-relaxed">
              We don&apos;t teach theory. We train on the exact tools your team will use every day.
              Each workshop is customized to your stack.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 group cursor-pointer p-3 -ml-3 rounded-lg hover:bg-white/[0.03] transition-colors">
                <div className="w-11 h-11 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:border-accent-500/30 transition-all">
                  <Icon icon="simple-icons:figma" width={20} style={{ color: "#F24E1E" }} />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Figma + Make</div>
                  <div className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">
                    AI-Powered Design
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer p-3 -ml-3 rounded-lg hover:bg-white/[0.03] transition-colors">
                <div className="w-11 h-11 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:border-accent-500/30 transition-all">
                  <Icon icon="ph:cursor-click-fill" width={20} className="text-white" />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Cursor IDE</div>
                  <div className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">
                    AI-Native Coding
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer p-3 -ml-3 rounded-lg hover:bg-white/[0.03] transition-colors">
                <div className="w-11 h-11 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:border-accent-500/30 transition-all">
                  <Icon icon="simple-icons:anthropic" width={20} style={{ color: "#D97757" }} />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Claude + Skills</div>
                  <div className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">
                    Custom AI Workflows
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button className="shiny-cta">
                <span>View Full Stack</span>
              </button>
            </div>
          </div>
        </div>

        {/* The 3D Wall */}
        <div className="hidden md:block absolute right-[-5%] top-[-10%] bottom-[-10%] w-[60%] lg:w-[65%] wall-container overflow-hidden pointer-events-none">
          <div className="wall-grid h-full w-full flex gap-6 px-10">
            {/* Column 1 (Up) */}
            <div className="wall-column wall-column-up flex flex-col gap-6 w-full">
              {tools.map((tool) => (
                <WallCard key={tool.name} {...tool} />
              ))}
              {tools.map((tool) => (
                <WallCard key={`dup-${tool.name}`} {...tool} />
              ))}
            </div>

            {/* Column 2 (Down) */}
            <div className="wall-column wall-column-down flex flex-col gap-6 w-full pt-12">
              {tools2.map((tool) => (
                <WallCard key={tool.name} {...tool} />
              ))}
              {tools2.map((tool) => (
                <WallCard key={`dup-${tool.name}`} {...tool} />
              ))}
            </div>

            {/* Column 3 (Up) - Hidden on smaller screens */}
            <div className="wall-column wall-column-up flex flex-col gap-6 w-full pt-24 hidden lg:flex">
              {tools3.map((tool) => (
                <WallCard key={tool.name} {...tool} />
              ))}
              {tools3.map((tool) => (
                <WallCard key={`dup-${tool.name}`} {...tool} />
              ))}
            </div>
          </div>

          {/* Masking gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10 pointer-events-none opacity-50"></div>
        </div>
      </div>
    </section>
  );
}
