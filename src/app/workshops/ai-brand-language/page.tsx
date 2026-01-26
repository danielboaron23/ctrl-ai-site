"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

// Workshop Navigation Component
function WorkshopNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-[#030303]/98 backdrop-blur-xl transition-opacity duration-400 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          className="absolute top-8 right-8 text-white"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <Icon icon="ph:x" width={32} />
        </button>
        <Link
          href="/"
          className="font-display text-4xl text-white opacity-70 hover:opacity-100 transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          href="#overview"
          className="font-display text-4xl text-white opacity-70 hover:opacity-100 transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          Overview
        </Link>
        <Link
          href="#process"
          className="font-display text-4xl text-white opacity-70 hover:opacity-100 transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          Process
        </Link>
        <Link
          href="#curriculum"
          className="font-display text-4xl text-white opacity-70 hover:opacity-100 transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          Curriculum
        </Link>
        <Link
          href="#deliverables"
          className="font-display text-4xl text-white opacity-70 hover:opacity-100 transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          Deliverables
        </Link>
      </div>

      {/* Navigation */}
      <div className="fixed z-50 flex w-full top-0 px-4 md:px-6 pt-4 md:pt-6 justify-center">
        <nav className="flex w-full max-w-[1400px] mx-auto items-center justify-between py-3 px-4 md:px-6 backdrop-blur-xl bg-[#0a0a0a]/70 border border-white/[0.06] rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
          <Link href="/" className="flex items-center gap-3 group" aria-label="Ctrl AI">
            <Image
              src="/assets/ctrl-ai-logo.svg"
              alt="Ctrl AI"
              width={32}
              height={32}
              className="h-7 md:h-8 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-neutral-400 hover:text-white text-xs font-medium transition-all relative group flex items-center gap-2"
            >
              <Icon icon="ph:arrow-left" width={14} />
              Home
            </Link>
            <Link
              href="#overview"
              className="px-4 py-2 text-neutral-400 hover:text-white text-xs font-medium transition-all relative group"
            >
              Overview
              <span className="absolute bottom-1 left-4 right-4 h-px bg-accent-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <Link
              href="#process"
              className="px-4 py-2 text-neutral-400 hover:text-white text-xs font-medium transition-all relative group"
            >
              Process
              <span className="absolute bottom-1 left-4 right-4 h-px bg-accent-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <Link
              href="#curriculum"
              className="px-4 py-2 text-neutral-400 hover:text-white text-xs font-medium transition-all relative group"
            >
              Curriculum
              <span className="absolute bottom-1 left-4 right-4 h-px bg-accent-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <Link
              href="#deliverables"
              className="px-4 py-2 text-neutral-400 hover:text-white text-xs font-medium transition-all relative group"
            >
              Deliverables
              <span className="absolute bottom-1 left-4 right-4 h-px bg-accent-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/#contact" className="hidden md:inline-flex btn-primary text-xs py-2.5 px-5">
              <span>Book This Workshop</span>
            </Link>
            <button
              className="flex items-center gap-2 text-xs font-medium text-white uppercase tracking-wider hover:text-accent-400 transition-colors md:hidden"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Icon icon="ph:list" width={24} />
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

// Hero Section
function WorkshopHero() {
  return (
    <section className="pt-32 md:pt-40 pb-16 md:pb-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-sky-600/20 to-transparent rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-600/10 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 relative">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-neutral-500 mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Icon icon="ph:caret-right" width={12} />
          <Link href="/#workshops" className="hover:text-white transition-colors">Workshops</Link>
          <Icon icon="ph:caret-right" width={12} />
          <span className="text-neutral-300">Brand Language Infrastructure</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1.5 border border-sky-500/30 bg-sky-500/10 text-[10px] font-mono text-sky-400 uppercase rounded-sm">
                4 Sessions
              </span>
              <span className="px-3 py-1.5 border border-white/10 bg-white/5 text-[10px] font-mono text-neutral-400 uppercase rounded-sm">
                12 Hours Total
              </span>
              <span className="px-3 py-1.5 border border-emerald-500/30 bg-emerald-500/10 text-[10px] font-mono text-emerald-400 uppercase rounded-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                Now Booking
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-white tracking-tight mb-6 leading-[1.1]">
              AI Brand Language
              <br />
              <span className="gradient-text-brand italic">Infrastructure</span>
            </h1>

            <p className="text-lg text-neutral-400 max-w-lg leading-relaxed mb-8">
              Build a complete AI-powered brand infrastructure — from brand definition → model training → 
              workflow integration → dedicated application. Make AI speak your brand.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/#contact" className="btn-primary">
                <span>Book This Workshop</span>
                <Icon icon="ph:arrow-right" width={18} />
              </Link>
              <Link href="#curriculum" className="btn-secondary justify-center">
                <span>View Curriculum</span>
                <Icon icon="ph:caret-down" width={16} />
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 border-t border-white/[0.06] pt-8">
              <div>
                <div className="text-2xl font-display text-white mb-1">12h</div>
                <div className="text-xs text-neutral-500">Total Duration</div>
              </div>
              <div>
                <div className="text-2xl font-display text-white mb-1">4</div>
                <div className="text-xs text-neutral-500">Key Deliverables</div>
              </div>
              <div>
                <div className="text-2xl font-display text-white mb-1">1</div>
                <div className="text-xs text-neutral-500">Custom App</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-[#0a0a0a]/50 border border-white/[0.06] rounded-2xl p-8 backdrop-blur-sm">
              {/* Process Flow Preview */}
              <div className="space-y-4">
                <div className="bg-[#030303]/80 border border-sky-500/20 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-sky-500/20 flex items-center justify-center">
                      <Icon icon="ph:palette" width={20} className="text-sky-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Step 1-2</div>
                      <div className="text-xs text-neutral-500">Brand → Training</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white/5 rounded text-[10px] text-neutral-400">Brand Values</span>
                    <span className="px-2 py-1 bg-white/5 rounded text-[10px] text-neutral-400">Visual DNA</span>
                    <span className="px-2 py-1 bg-white/5 rounded text-[10px] text-neutral-400">Model Training</span>
                  </div>
                </div>

                <div className="bg-[#030303]/80 border border-cyan-500/20 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                      <Icon icon="ph:app-window" width={20} className="text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Step 3-4</div>
                      <div className="text-xs text-neutral-500">Workflow → Application</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white/5 rounded text-[10px] text-neutral-400">Pipelines</span>
                    <span className="px-2 py-1 bg-white/5 rounded text-[10px] text-neutral-400">Prompt Library</span>
                    <span className="px-2 py-1 bg-white/5 rounded text-[10px] text-neutral-400">Custom App</span>
                  </div>
                </div>
              </div>

              {/* Decorative brand element */}
              <div className="absolute -bottom-4 -right-4 bg-[#0a0a0a] border border-white/[0.06] rounded-lg p-4 shadow-2xl hidden lg:block">
                <div className="flex gap-1.5 mb-3">
                  <div className="w-2 h-2 rounded-full bg-red-500/60"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/60"></div>
                </div>
                <div className="font-mono text-[10px] text-neutral-500">
                  <div><span className="text-sky-400">brand</span>.voice = <span className="text-emerald-400">&quot;trained&quot;</span>;</div>
                  <div><span className="text-sky-400">content</span> = <span className="text-cyan-400">AI</span>(brand);</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Overview Section
function OverviewSection() {
  return (
    <section id="overview" className="py-20 md:py-28 relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="inline-flex items-center gap-2 text-[10px] font-mono text-accent-500 uppercase tracking-widest mb-6">
          <span className="w-8 h-px bg-accent-500"></span>
          01 — Workshop Overview
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-display text-white tracking-tight mb-6">
              Make AI speak your <span className="italic gradient-text-brand">brand&apos;s language</span>
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-6">
              This workshop is designed for brand teams, design teams, and marketing teams at companies 
              who want to systematize their brand language with AI — ensuring every piece of content 
              is perfectly on-brand, at scale.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              Over four intensive sessions, your team will define brand values, train AI on your unique 
              style and voice, build smart workflows, and deploy a dedicated application for generating 
              on-brand content.
            </p>
          </div>

          <div className="space-y-6">
            {/* Goal Card */}
            <div className="bg-[#0a0a0a]/50 border border-white/[0.06] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                  <Icon icon="ph:target" width={20} className="text-sky-400" />
                </div>
                <h3 className="text-lg font-display text-white">Workshop Goal</h3>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Build a complete AI-powered brand infrastructure: from brand definition → model training → 
                workflow integration → dedicated application for generating on-brand content at scale.
              </p>
            </div>

            {/* Format Card */}
            <div className="bg-[#0a0a0a]/50 border border-white/[0.06] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <Icon icon="ph:calendar-check" width={20} className="text-cyan-400" />
                </div>
                <h3 className="text-lg font-display text-white">Format</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-mono text-white mb-1">4</div>
                  <div className="text-xs text-neutral-500">Sessions</div>
                </div>
                <div>
                  <div className="text-2xl font-mono text-white mb-1">3h</div>
                  <div className="text-xs text-neutral-500">Per Session</div>
                </div>
              </div>
            </div>

            {/* Audience Card */}
            <div className="bg-[#0a0a0a]/50 border border-white/[0.06] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Icon icon="ph:users-three" width={20} className="text-emerald-400" />
                </div>
                <h3 className="text-lg font-display text-white">Audience</h3>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Brand teams, design teams, and marketing teams at companies who want to systematize 
                their brand language with AI and generate consistent content at scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// The 4-Step Process Section (Sakura Method)
function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Brand Creation",
      subtitle: "Define Your DNA",
      description: "Document brand values, voice characteristics, and visual language. Create the foundation for AI to understand your brand.",
      icon: "ph:palette",
      color: "sky",
      outputs: ["Brand Values Document", "Voice & Tone Matrix", "Visual DNA Guide", "Content Style Guide"]
    },
    {
      number: "02",
      title: "Model Training",
      subtitle: "Teach the AI",
      description: "Train AI on your brand's unique style and voice using system prompts, few-shot learning, and custom configurations.",
      icon: "ph:brain",
      color: "cyan",
      outputs: ["Training Data Package", "System Prompts", "Brand AI Configuration", "Alignment Scorecard"]
    },
    {
      number: "03",
      title: "Workflow Design",
      subtitle: "Build the Pipelines",
      description: "Design smart workflows that integrate the trained model into your content creation process.",
      icon: "ph:git-branch",
      color: "violet",
      outputs: ["AI Workflow Diagram", "Prompt Template Library", "Pipeline Design Doc", "Team Conventions"]
    },
    {
      number: "04",
      title: "Application Build",
      subtitle: "Deploy the Tool",
      description: "Package everything into a dedicated application for generating on-brand content at scale.",
      icon: "ph:app-window",
      color: "emerald",
      outputs: ["Application Architecture", "Working MVP", "Deployed Tool", "Team Training"]
    }
  ];

  const colorClasses = {
    sky: {
      bg: "bg-sky-500/10",
      border: "border-sky-500/20",
      text: "text-sky-400",
      dot: "bg-sky-400"
    },
    cyan: {
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      text: "text-cyan-400",
      dot: "bg-cyan-400"
    },
    violet: {
      bg: "bg-violet-500/10",
      border: "border-violet-500/20",
      text: "text-violet-400",
      dot: "bg-violet-400"
    },
    emerald: {
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      text: "text-emerald-400",
      dot: "bg-emerald-400"
    }
  };

  return (
    <section id="process" className="py-20 md:py-28 relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="inline-flex items-center gap-2 text-[10px] font-mono text-accent-500 uppercase tracking-widest mb-6">
          <span className="w-8 h-px bg-accent-500"></span>
          02 — The 4-Step Process
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display text-white tracking-tight mb-4">
              The <span className="italic gradient-text-brand">Sakura Method</span>
            </h2>
            <p className="text-neutral-400 max-w-lg">
              A proven 4-step process to build your complete AI-powered brand infrastructure.
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step) => {
            const colors = colorClasses[step.color as keyof typeof colorClasses];
            return (
              <div key={step.number} className="group bg-[#0a0a0a]/30 border border-white/[0.06] rounded-xl p-8 hover:border-white/[0.1] transition-all duration-500 card-lift">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center`}>
                    <Icon icon={step.icon} width={28} className={colors.text} />
                  </div>
                  <span className={`text-3xl font-mono ${colors.text} opacity-30`}>{step.number}</span>
                </div>
                
                <div className="mb-6">
                  <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mb-2">{step.subtitle}</div>
                  <h3 className="text-2xl font-display text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{step.description}</p>
                </div>

                <div className="border-t border-white/[0.06] pt-6">
                  <div className="text-[10px] font-mono text-neutral-600 uppercase tracking-wider mb-3">Outputs</div>
                  <div className="flex flex-wrap gap-2">
                    {step.outputs.map((output, i) => (
                      <span key={i} className="px-2 py-1 bg-white/5 rounded text-[10px] text-neutral-400">
                        {output}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Curriculum Section
function CurriculumSection() {
  const [activeSession, setActiveSession] = useState<1 | 2 | 3 | 4>(1);

  const session1Parts = [
    {
      id: "1a",
      title: "Brand Audit & Discovery",
      duration: "60 min",
      icon: "ph:magnifying-glass",
      color: "sky",
      objectives: [
        "Identify and articulate brand core values",
        "Define brand voice and tone characteristics",
        "Map visual language elements"
      ],
      topics: [
        "Brand Values Framework",
        "Voice & Tone Matrix",
        "Visual DNA Mapping",
        "This is Us / This is NOT Us Exercise"
      ],
      activity: "Workshop exercise: Define 3-5 core brand values, complete voice & tone matrix, create brand examples",
      deliverable: "Brand Values & Voice Document (Draft 1)"
    },
    {
      id: "1b",
      title: "Visual Language Documentation",
      duration: "60 min",
      icon: "ph:palette",
      color: "sky",
      objectives: [
        "Document visual elements that define the brand",
        "Create reference materials for AI training",
        "Establish visual do's and don'ts"
      ],
      topics: [
        "Color System Documentation",
        "Typography Guidelines",
        "Imagery Style Guide",
        "Graphic Elements & Patterns"
      ],
      activity: "Collect existing brand assets, document visual elements systematically, create visual do's and don'ts",
      deliverable: "Visual DNA Document"
    },
    {
      id: "1c",
      title: "Content Style Guide",
      duration: "60 min",
      icon: "ph:text-aa",
      color: "sky",
      objectives: [
        "Define writing rules and patterns",
        "Create example content in brand voice",
        "Build a reference library for AI training"
      ],
      topics: [
        "Writing Principles",
        "Brand Vocabulary",
        "Sentence Structure Guidelines",
        "Content Types Templates"
      ],
      activity: "Define writing principles, create vocabulary guide, write sample content in brand voice",
      deliverable: "Content Style Guide with Examples"
    }
  ];

  const session2Parts = [
    {
      id: "2a",
      title: "Training Data Preparation",
      duration: "60 min",
      icon: "ph:database",
      color: "cyan",
      objectives: [
        "Understand what makes good training data",
        "Organize brand materials for AI consumption",
        "Create structured input for model training"
      ],
      topics: [
        "Training Data Categories",
        "Data Structure & Organization",
        "Quality Checklist for Training Data",
        "Positive & Negative Examples"
      ],
      activity: "Audit existing content for training suitability, organize into training data structure, identify gaps",
      deliverable: "Organized Training Data Package"
    },
    {
      id: "2b",
      title: "Model Training Techniques",
      duration: "60 min",
      icon: "ph:brain",
      color: "cyan",
      objectives: [
        "Understand different approaches to 'training' AI on brand",
        "Create effective system prompts and instructions",
        "Build brand-specific AI configurations"
      ],
      topics: [
        "System Prompt Engineering",
        "Few-Shot Learning Templates",
        "Claude Projects / Custom GPTs",
        "Fine-tuning Options"
      ],
      activity: "Create master system prompt for brand, build few-shot template with 5+ examples, test with sample generation",
      deliverable: "Brand AI Configuration (System Prompt + Templates)"
    },
    {
      id: "2c",
      title: "Testing & Refinement",
      duration: "60 min",
      icon: "ph:check-square",
      color: "cyan",
      objectives: [
        "Evaluate AI output against brand standards",
        "Identify and fix common issues",
        "Iterate on training approach"
      ],
      topics: [
        "Brand Alignment Scorecard",
        "Common Issues & Fixes",
        "Iteration Process",
        "Quality Benchmarks"
      ],
      activity: "Generate 5 test pieces, score each on alignment scorecard, identify issues and update training materials",
      deliverable: "Validated Brand AI Configuration"
    }
  ];

  const session3Parts = [
    {
      id: "3a",
      title: "Workflow Mapping",
      duration: "45 min",
      icon: "ph:flow-arrow",
      color: "violet",
      objectives: [
        "Map current content creation workflows",
        "Identify AI integration points",
        "Design optimized AI-assisted workflows"
      ],
      topics: [
        "Current vs. Future Workflow Analysis",
        "AI Integration Opportunities",
        "Workflow Diagram Templates",
        "Human-AI Handoff Points"
      ],
      activity: "Map current content workflow, identify AI integration opportunities, design new AI-enhanced workflow",
      deliverable: "AI-Enhanced Workflow Diagram"
    },
    {
      id: "3b",
      title: "Prompt Templates",
      duration: "60 min",
      icon: "ph:chat-text",
      color: "violet",
      objectives: [
        "Create reusable prompt templates for common tasks",
        "Build a prompt library for the team",
        "Ensure consistency across team members"
      ],
      topics: [
        "Prompt Template Structure",
        "Headlines & Body Copy Templates",
        "Social Media & Long-form Templates",
        "Visual Brief Templates"
      ],
      activity: "Create 3 essential prompt templates, test templates with real briefs, document in team prompt library",
      deliverable: "Initial Prompt Template Library (3-5 templates)"
    },
    {
      id: "3c",
      title: "Pipeline Design",
      duration: "75 min",
      icon: "ph:git-branch",
      color: "violet",
      objectives: [
        "Understand pipeline architecture for AI workflows",
        "Design multi-step content generation pipelines",
        "Connect different AI capabilities in sequence"
      ],
      topics: [
        "What is a Pipeline?",
        "Pipeline Architecture Patterns",
        "Campaign Content Pipeline Example",
        "Pipeline Tools (n8n, Make.com, LangChain)"
      ],
      activity: "Design a pipeline for one content workflow, document each step with inputs/outputs, identify automation opportunities",
      deliverable: "Content Pipeline Design Document"
    }
  ];

  const session4Parts = [
    {
      id: "4a",
      title: "Application Architecture",
      duration: "45 min",
      icon: "ph:blueprint",
      color: "emerald",
      objectives: [
        "Understand components of a brand AI application",
        "Choose the right platform/approach for the team",
        "Design the application structure"
      ],
      topics: [
        "Application Components Overview",
        "Platform Options (Claude Projects, Streamlit, Custom)",
        "Architecture Diagram Design",
        "Technical Requirements Assessment"
      ],
      activity: "Assess team technical capabilities, choose platform approach, sketch application architecture",
      deliverable: "Application Architecture Plan"
    },
    {
      id: "4b",
      title: "Building the Application",
      duration: "90 min",
      icon: "ph:code",
      color: "emerald",
      objectives: [
        "Build a functional brand content generator",
        "Implement the pipeline designed in Session 3",
        "Create a usable interface for the team"
      ],
      topics: [
        "No-Code Approach (Claude Projects)",
        "Low-Code Approach (Streamlit + API)",
        "Custom Web Application Options",
        "Integration with Brand Context"
      ],
      activity: "Set up chosen platform, implement basic content generation, add brand context and templates",
      deliverable: "Working Brand Content Generator (MVP)"
    },
    {
      id: "4c",
      title: "Testing & Deployment",
      duration: "45 min",
      icon: "ph:rocket-launch",
      color: "emerald",
      objectives: [
        "Test application with real use cases",
        "Gather feedback and iterate",
        "Deploy for team use"
      ],
      topics: [
        "Testing Checklist",
        "User Testing & Feedback Collection",
        "Deployment Checklist",
        "Team Training & Documentation"
      ],
      activity: "Team testing session, collect and prioritize feedback, quick fixes and deployment",
      deliverable: "Deployed Brand AI Application"
    }
  ];

  const sessions = [
    { id: 1, title: "Brand Foundation", parts: session1Parts, icon: "ph:palette", color: "sky" },
    { id: 2, title: "Model Training", parts: session2Parts, icon: "ph:brain", color: "cyan" },
    { id: 3, title: "Workflow Integration", parts: session3Parts, icon: "ph:git-branch", color: "violet" },
    { id: 4, title: "Application Building", parts: session4Parts, icon: "ph:app-window", color: "emerald" }
  ];

  const activeSessionData = sessions.find(s => s.id === activeSession)!;
  const activeParts = activeSessionData.parts;

  return (
    <section id="curriculum" className="py-20 md:py-28 relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="inline-flex items-center gap-2 text-[10px] font-mono text-accent-500 uppercase tracking-widest mb-6">
          <span className="w-8 h-px bg-accent-500"></span>
          03 — Curriculum
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display text-white tracking-tight mb-4">
              Complete <span className="italic gradient-text-brand">Curriculum</span>
            </h2>
            <p className="text-neutral-400 max-w-lg">
              Four intensive sessions covering brand definition, AI training, workflow design, and application building.
            </p>
          </div>
        </div>

        {/* Session Toggle */}
        <div className="flex flex-wrap bg-[#0a0a0a]/50 border border-white/[0.06] rounded-lg p-1 mb-8 gap-1">
          {sessions.map((session) => {
            const isActive = activeSession === session.id;
            const colorClasses = {
              sky: isActive ? "bg-sky-500/20 text-sky-300 border border-sky-500/30" : "",
              cyan: isActive ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30" : "",
              violet: isActive ? "bg-violet-500/20 text-violet-300 border border-violet-500/30" : "",
              emerald: isActive ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" : ""
            };
            return (
              <button
                key={session.id}
                onClick={() => setActiveSession(session.id as 1 | 2 | 3 | 4)}
                className={`px-4 py-3 rounded-md text-xs font-medium transition-all flex-1 min-w-[140px] ${
                  isActive
                    ? colorClasses[session.color as keyof typeof colorClasses]
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <Icon icon={session.icon} width={14} />
                  <span className="hidden sm:inline">Session {session.id}:</span> {session.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Session Header */}
        <div className={`mb-8 p-6 rounded-xl border ${
          activeSession === 1 ? "bg-sky-500/5 border-sky-500/20" :
          activeSession === 2 ? "bg-cyan-500/5 border-cyan-500/20" :
          activeSession === 3 ? "bg-violet-500/5 border-violet-500/20" :
          "bg-emerald-500/5 border-emerald-500/20"
        }`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-display text-white mb-2">
                Session {activeSession}: {activeSessionData.title}
              </h3>
              <p className="text-sm text-neutral-400">
                {activeSession === 1 && "Define brand values, voice, visual language, and content style"}
                {activeSession === 2 && "Prepare training data and configure AI to speak your brand"}
                {activeSession === 3 && "Design workflows, prompt templates, and content pipelines"}
                {activeSession === 4 && "Build and deploy a dedicated brand content application"}
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-xl font-mono text-white">3h</div>
                <div className="text-[10px] text-neutral-500 uppercase">Duration</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-mono text-white">{activeParts.length}</div>
                <div className="text-[10px] text-neutral-500 uppercase">Parts</div>
              </div>
            </div>
          </div>
        </div>

        {/* Curriculum Parts */}
        <div className="space-y-6">
          {activeParts.map((part, index) => (
            <CurriculumPart key={part.id} part={part} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Curriculum Part Component
function CurriculumPart({ part, index }: { 
  part: {
    id: string;
    title: string;
    duration: string;
    icon: string;
    color: string;
    objectives: string[];
    topics: string[];
    activity: string;
    deliverable?: string;
  };
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(index === 0);

  const colorClasses = {
    sky: {
      bg: "bg-sky-500/10",
      border: "border-sky-500/20",
      text: "text-sky-400",
      dot: "bg-sky-400"
    },
    cyan: {
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      text: "text-cyan-400",
      dot: "bg-cyan-400"
    },
    violet: {
      bg: "bg-violet-500/10",
      border: "border-violet-500/20",
      text: "text-violet-400",
      dot: "bg-violet-400"
    },
    emerald: {
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      text: "text-emerald-400",
      dot: "bg-emerald-400"
    }
  };

  const colors = colorClasses[part.color as keyof typeof colorClasses];

  return (
    <div className="bg-[#0a0a0a]/30 border border-white/[0.06] rounded-xl overflow-hidden hover:border-white/[0.1] transition-colors">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center`}>
            <Icon icon={part.icon} width={24} className={colors.text} />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-[10px] font-mono text-neutral-500 uppercase">Part {String.fromCharCode(65 + index)}</span>
              <span className="text-[10px] font-mono text-neutral-600">•</span>
              <span className="text-[10px] font-mono text-neutral-500">{part.duration}</span>
            </div>
            <h4 className="text-lg font-display text-white">{part.title}</h4>
          </div>
        </div>
        <div className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all ${
          isExpanded 
            ? `${colors.bg} ${colors.border} ${colors.text}` 
            : "border-white/10 bg-white/5 text-neutral-400"
        }`}>
          <Icon 
            icon="ph:caret-down" 
            width={16} 
            className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ${
        isExpanded ? "max-h-[800px]" : "max-h-0"
      }`}>
        <div className="px-6 pb-6 space-y-6">
          {/* Learning Objectives */}
          <div>
            <h5 className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-3">Learning Objectives</h5>
            <ul className="space-y-2">
              {part.objectives.map((objective, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                  <Icon icon="ph:check-circle" width={18} className={`${colors.text} flex-shrink-0 mt-0.5`} />
                  {objective}
                </li>
              ))}
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h5 className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-3">Topics Covered</h5>
            <div className="flex flex-wrap gap-2">
              {part.topics.map((topic, i) => (
                <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/[0.06] rounded text-xs text-neutral-400">
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Activity */}
          <div className="bg-[#030303]/50 border border-white/[0.06] rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Icon icon="ph:lightning" width={16} className={colors.text} />
              <span className="text-xs font-mono text-neutral-500 uppercase">Hands-On Activity</span>
            </div>
            <p className="text-sm text-neutral-300">{part.activity}</p>
          </div>

          {/* Deliverable */}
          {part.deliverable && (
            <div className={`${colors.bg} border ${colors.border} rounded-lg p-4`}>
              <div className="flex items-center gap-2 mb-2">
                <Icon icon="ph:package" width={16} className={colors.text} />
                <span className="text-xs font-mono text-neutral-500 uppercase">Deliverable</span>
              </div>
              <p className={`text-sm ${colors.text}`}>{part.deliverable}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Deliverables Section
function DeliverablesSection() {
  const deliverables = [
    { session: "1", item: "Brand Values & Voice Document", icon: "ph:file-text" },
    { session: "1", item: "Visual DNA Document", icon: "ph:palette" },
    { session: "1", item: "Content Style Guide", icon: "ph:text-aa" },
    { session: "2", item: "Training Data Package", icon: "ph:database" },
    { session: "2", item: "Brand AI Configuration", icon: "ph:brain" },
    { session: "2", item: "Validated System Prompts", icon: "ph:check-square" },
    { session: "3", item: "AI Workflow Diagram", icon: "ph:flow-arrow" },
    { session: "3", item: "Prompt Template Library", icon: "ph:chat-text" },
    { session: "3", item: "Pipeline Design Document", icon: "ph:git-branch" },
    { session: "4", item: "Application Architecture Plan", icon: "ph:blueprint" },
    { session: "4", item: "Working Brand AI MVP", icon: "ph:app-window" },
    { session: "4", item: "Deployed Tool + Training", icon: "ph:rocket-launch" }
  ];

  return (
    <section id="deliverables" className="py-20 md:py-28 relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="inline-flex items-center gap-2 text-[10px] font-mono text-accent-500 uppercase tracking-widest mb-6">
          <span className="w-8 h-px bg-accent-500"></span>
          04 — Deliverables
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-display text-white tracking-tight mb-4">
              What you&apos;ll <span className="italic gradient-text-brand">take home</span>
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-8">
              Every participant leaves with a complete AI-powered brand infrastructure — 
              documented, trained, integrated, and deployed. Not just theory, but working tools.
            </p>

            <div className="bg-[#0a0a0a]/50 border border-white/[0.06] rounded-xl p-6">
              <h3 className="text-lg font-display text-white mb-4">The Complete Package</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon icon="ph:file-text" width={18} className="text-sky-400" />
                    <span className="text-sm text-neutral-300">Brand Documentation</span>
                  </div>
                  <span className="text-xs text-neutral-500">Session 1</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon icon="ph:brain" width={18} className="text-cyan-400" />
                    <span className="text-sm text-neutral-300">Trained AI Model</span>
                  </div>
                  <span className="text-xs text-neutral-500">Session 2</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon icon="ph:git-branch" width={18} className="text-violet-400" />
                    <span className="text-sm text-neutral-300">Content Workflows</span>
                  </div>
                  <span className="text-xs text-neutral-500">Session 3</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon icon="ph:app-window" width={18} className="text-emerald-400" />
                    <span className="text-sm text-neutral-300">Deployed Application</span>
                  </div>
                  <span className="text-xs text-neutral-500">Session 4</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {deliverables.map((d, i) => (
                <div key={i} className="bg-[#0a0a0a]/30 border border-white/[0.06] rounded-lg p-4 hover:border-white/[0.1] transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-[10px] font-mono uppercase ${
                      d.session === "1" ? "text-sky-400" : 
                      d.session === "2" ? "text-cyan-400" :
                      d.session === "3" ? "text-violet-400" : "text-emerald-400"
                    }`}>
                      S{d.session}
                    </span>
                    <Icon icon={d.icon} width={16} className="text-neutral-500" />
                  </div>
                  <p className="text-sm text-neutral-300">{d.item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Success Metrics Section
function MetricsSection() {
  const metrics = [
    {
      metric: "50%",
      label: "Faster Content Creation",
      description: "Track before/after timing"
    },
    {
      metric: "90%",
      label: "On-Brand First Drafts",
      description: "Score samples monthly"
    },
    {
      metric: "80%",
      label: "Team Adoption",
      description: "Usage analytics"
    },
    {
      metric: "<20%",
      label: "Edit Ratio",
      description: "Track revision cycles"
    }
  ];

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="inline-flex items-center gap-2 text-[10px] font-mono text-accent-500 uppercase tracking-widest mb-6">
          <span className="w-8 h-px bg-accent-500"></span>
          05 — Success Metrics
        </div>

        <h2 className="text-3xl md:text-4xl font-display text-white tracking-tight mb-4">
          Measurable <span className="italic gradient-text-brand">Results</span>
        </h2>
        <p className="text-neutral-400 max-w-2xl mb-12">
          Track the impact of your AI brand infrastructure with these key performance indicators.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((item, i) => (
            <div key={i} className="group bg-[#0a0a0a]/30 border border-white/[0.06] rounded-xl p-6 hover:border-white/[0.1] transition-all text-center">
              <div className="text-4xl md:text-5xl font-display text-white mb-2 group-hover:text-sky-400 transition-colors">
                {item.metric}
              </div>
              <div className="text-sm text-neutral-300 mb-2">{item.label}</div>
              <div className="text-xs text-neutral-500">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Add-On Sessions
function AddOnSection() {
  const addOns = [
    {
      title: "Visual Content Generation",
      duration: "3 hours",
      description: "Train AI on brand imagery style, generate visual concepts, and build image-to-text workflows.",
      icon: "ph:image",
      color: "sky",
      topics: ["Training AI on brand imagery", "Visual concept generation", "Image-to-text workflows", "Text-to-image prompts"]
    },
    {
      title: "Multi-Language Support",
      duration: "3 hours",
      description: "Adapt brand voice across languages while maintaining consistency and regional tone variations.",
      icon: "ph:translate",
      color: "cyan",
      topics: ["Cross-language brand voice", "Translation workflows", "Regional tone variations", "Consistency checks"]
    },
    {
      title: "Advanced Automation",
      duration: "3 hours",
      description: "CMS integration, approval workflow automation, and performance feedback loops.",
      icon: "ph:gear-six",
      color: "violet",
      topics: ["CMS integration", "Approval automation", "Performance feedback loops", "A/B testing workflows"]
    }
  ];

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="inline-flex items-center gap-2 text-[10px] font-mono text-accent-500 uppercase tracking-widest mb-6">
          <span className="w-8 h-px bg-accent-500"></span>
          06 — Optional Add-Ons
        </div>

        <h2 className="text-3xl md:text-4xl font-display text-white tracking-tight mb-4">
          Extend Your <span className="italic gradient-text-brand">Capabilities</span>
        </h2>
        <p className="text-neutral-400 max-w-2xl mb-12">
          Additional sessions to expand your AI brand infrastructure based on specific needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {addOns.map((addon) => (
            <div key={addon.title} className="group bg-[#0a0a0a]/30 border border-white/[0.06] rounded-xl p-8 hover:border-white/[0.1] transition-all card-lift">
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 rounded-xl ${
                  addon.color === "sky" ? "bg-sky-500/10 border-sky-500/20" : 
                  addon.color === "cyan" ? "bg-cyan-500/10 border-cyan-500/20" :
                  "bg-violet-500/10 border-violet-500/20"
                } border flex items-center justify-center`}>
                  <Icon icon={addon.icon} width={24} className={
                    addon.color === "sky" ? "text-sky-400" : 
                    addon.color === "cyan" ? "text-cyan-400" : "text-violet-400"
                  } />
                </div>
                <span className="px-3 py-1.5 border border-white/10 bg-white/5 text-[10px] font-mono text-neutral-400 uppercase rounded-sm">
                  {addon.duration}
                </span>
              </div>
              <h3 className="text-xl font-display text-white mb-3">{addon.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-6">{addon.description}</p>
              <div className="space-y-2">
                {addon.topics.map((topic, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-neutral-400">
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      addon.color === "sky" ? "bg-sky-400" : 
                      addon.color === "cyan" ? "bg-cyan-400" : "bg-violet-400"
                    }`}></div>
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function WorkshopCTA() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-500/10 via-[#0a0a0a] to-cyan-500/10 border border-white/[0.06] p-8 md:p-16">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-sky-600/20 to-transparent rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-cyan-600/10 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-accent-500/30 bg-accent-500/10 rounded-full mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              <span className="text-xs font-mono text-accent-400 uppercase tracking-wider">Now Booking Q1 2026</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-display text-white tracking-tight mb-6">
              Ready to make AI speak your brand?
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-10">
              Book the Brand Language Infrastructure Workshop and build a complete AI system 
              that generates perfectly on-brand content at scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="btn-primary">
                <span>Book This Workshop</span>
                <Icon icon="ph:arrow-right" width={18} />
              </Link>
              <Link href="/" className="btn-secondary justify-center">
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function WorkshopFooter() {
  return (
    <footer className="pt-20 md:pt-32 pb-8 md:pb-12 border-t border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 md:mb-20">
          <Link href="/" aria-label="Ctrl AI" className="group">
            <Image
              src="/assets/ctrl-ai-logo.svg"
              alt="Ctrl AI"
              width={64}
              height={64}
              className="h-12 md:h-16 w-auto transition-all duration-500 group-hover:opacity-80"
            />
          </Link>
          <div className="flex flex-col gap-3 md:text-right">
            <Link
              href="/#contact"
              className="text-base md:text-lg text-neutral-300 hover:text-accent-400 transition-colors flex items-center gap-2 md:justify-end group"
            >
              Book a Workshop
              <Icon
                icon="ph:arrow-right"
                className="group-hover:translate-x-1 transition-transform"
                width={18}
              />
            </Link>
            <div className="text-sm text-neutral-600">Tel Aviv, Israel</div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-white/[0.06] pt-10 md:pt-12">
          <div>
            <h4 className="text-[10px] font-mono uppercase text-neutral-500 mb-4 tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#workshops" className="hover:text-white transition-colors">
                  Workshops
                </Link>
              </li>
              <li>
                <Link href="/#method" className="hover:text-white transition-colors">
                  Method
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-mono uppercase text-neutral-500 mb-4 tracking-wider">
              This Workshop
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <Link href="#overview" className="hover:text-white transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-white transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link href="#curriculum" className="hover:text-white transition-colors">
                  Curriculum
                </Link>
              </li>
              <li>
                <Link href="#deliverables" className="hover:text-white transition-colors">
                  Deliverables
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:text-right mt-4 md:mt-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/[0.06] rounded bg-white/[0.02] mb-3">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider">
                System Online
              </span>
            </div>
            <p className="text-[11px] font-mono text-neutral-600">
              © 2026 Ctrl AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Divider Component
function Divider() {
  return <div className="divider-gradient max-w-[1400px] mx-auto"></div>;
}

// Main Page Component
export default function AIBrandLanguageWorkshopPage() {
  return (
    <>
      {/* Background Elements */}
      <div className="fixed inset-0 -z-30 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[#030303]"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-sky-600/10 to-transparent rounded-full blur-[120px]"></div>
        <div className="absolute top-[30%] left-[-15%] w-[600px] h-[600px] bg-gradient-to-tr from-cyan-600/[0.08] to-transparent rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-gradient-to-tl from-sky-700/[0.06] to-transparent rounded-full blur-[80px]"></div>
      </div>

      {/* Technical Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 technical-grid opacity-40"></div>

      {/* Vertical Structure Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 max-w-[1400px] mx-auto hidden lg:block">
        <div className="absolute left-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent"></div>
        <div className="absolute right-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent"></div>
        <div className="absolute left-1/3 h-full w-px bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"></div>
        <div className="absolute left-2/3 h-full w-px bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"></div>
      </div>

      <WorkshopNavigation />

      <main className="relative z-10">
        <WorkshopHero />

        <div className="relative z-10 bg-[#030303]">
          <OverviewSection />
          <Divider />

          <ProcessSection />
          <Divider />

          <CurriculumSection />
          <Divider />

          <DeliverablesSection />
          <Divider />

          <MetricsSection />
          <Divider />

          <AddOnSection />

          <WorkshopCTA />

          <WorkshopFooter />
        </div>
      </main>

      <style jsx>{`
        .gradient-text-brand {
          background: linear-gradient(135deg, #ffffff 20%, #7dd3fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </>
  );
}
