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
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-violet-600/20 to-transparent rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-600/10 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 relative">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-neutral-500 mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Icon icon="ph:caret-right" width={12} />
          <Link href="/#workshops" className="hover:text-white transition-colors">Workshops</Link>
          <Icon icon="ph:caret-right" width={12} />
          <span className="text-neutral-300">AI Design Workshop</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1.5 border border-violet-500/30 bg-violet-500/10 text-[10px] font-mono text-violet-400 uppercase rounded-sm">
                2 Sessions
              </span>
              <span className="px-3 py-1.5 border border-white/10 bg-white/5 text-[10px] font-mono text-neutral-400 uppercase rounded-sm">
                6 Hours Total
              </span>
              <span className="px-3 py-1.5 border border-emerald-500/30 bg-emerald-500/10 text-[10px] font-mono text-emerald-400 uppercase rounded-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                Now Booking
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-white tracking-tight mb-6 leading-[1.1]">
              AI Design
              <br />
              <span className="gradient-text-accent italic">Workshop</span>
            </h1>

            <p className="text-lg text-neutral-400 max-w-lg leading-relaxed mb-8">
              Enable your design team to take any screen → process with AI → convert to working code. 
              A comprehensive hands-on program that transforms how your team works.
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
                <div className="text-2xl font-display text-white mb-1">6h</div>
                <div className="text-xs text-neutral-500">Total Duration</div>
              </div>
              <div>
                <div className="text-2xl font-display text-white mb-1">5-30</div>
                <div className="text-xs text-neutral-500">Team Size</div>
              </div>
              <div>
                <div className="text-2xl font-display text-white mb-1">8+</div>
                <div className="text-xs text-neutral-500">Deliverables</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-[#0a0a0a]/50 border border-white/[0.06] rounded-2xl p-8 backdrop-blur-sm">
              {/* Session Cards Preview */}
              <div className="space-y-4">
                <div className="bg-[#030303]/80 border border-violet-500/20 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center">
                      <Icon icon="ph:paint-brush-broad" width={20} className="text-violet-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Session 1</div>
                      <div className="text-xs text-neutral-500">AI for Design</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white/5 rounded text-[10px] text-neutral-400">Figma Make</span>
                    <span className="px-2 py-1 bg-white/5 rounded text-[10px] text-neutral-400">Claude Skills</span>
                    <span className="px-2 py-1 bg-white/5 rounded text-[10px] text-neutral-400">3C Methodology</span>
                  </div>
                </div>

                <div className="bg-[#030303]/80 border border-sky-500/20 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-sky-500/20 flex items-center justify-center">
                      <Icon icon="ph:code" width={20} className="text-sky-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Session 2</div>
                      <div className="text-xs text-neutral-500">Design to Code</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white/5 rounded text-[10px] text-neutral-400">Cursor IDE</span>
                    <span className="px-2 py-1 bg-white/5 rounded text-[10px] text-neutral-400">Figma MCP</span>
                    <span className="px-2 py-1 bg-white/5 rounded text-[10px] text-neutral-400">Git Basics</span>
                  </div>
                </div>
              </div>

              {/* Decorative code snippet */}
              <div className="absolute -bottom-4 -right-4 bg-[#0a0a0a] border border-white/[0.06] rounded-lg p-4 shadow-2xl hidden lg:block">
                <div className="flex gap-1.5 mb-3">
                  <div className="w-2 h-2 rounded-full bg-red-500/60"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/60"></div>
                </div>
                <div className="font-mono text-[10px] text-neutral-500">
                  <div><span className="text-violet-400">const</span> design = <span className="text-emerald-400">&quot;Figma&quot;</span>;</div>
                  <div><span className="text-violet-400">const</span> code = <span className="text-sky-400">AI</span>(design);</div>
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
              Transform how your team <span className="italic gradient-text-accent">designs & ships</span>
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-6">
              This workshop is designed for design teams at tech companies who want to leverage AI 
              throughout their entire workflow—from initial ideation to production-ready code.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              Over two intensive sessions, your team will learn to use Figma Make for AI-powered design, 
              Claude Skills for custom AI assistants, and Cursor IDE for converting designs to code.
            </p>
          </div>

          <div className="space-y-6">
            {/* Goal Card */}
            <div className="bg-[#0a0a0a]/50 border border-white/[0.06] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                  <Icon icon="ph:target" width={20} className="text-violet-400" />
                </div>
                <h3 className="text-lg font-display text-white">Workshop Goal</h3>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Enable teams to take any screen → process with AI → convert to working code. 
                A complete transformation of the design-to-development pipeline.
              </p>
            </div>

            {/* Format Card */}
            <div className="bg-[#0a0a0a]/50 border border-white/[0.06] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                  <Icon icon="ph:calendar-check" width={20} className="text-sky-400" />
                </div>
                <h3 className="text-lg font-display text-white">Format</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-mono text-white mb-1">2</div>
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
                Design teams at tech companies looking to integrate AI into their daily workflows 
                and bridge the gap between design and development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Curriculum Section
function CurriculumSection() {
  const [activeSession, setActiveSession] = useState<1 | 2>(1);

  const session1Parts = [
    {
      id: "1a",
      title: "New Work Model",
      duration: "30 min",
      icon: "ph:lightbulb",
      color: "violet",
      objectives: [
        "Understand how AI changes the designer's role",
        "Map the new Design → AI → Code workflow",
        "Identify where AI adds value vs. human judgment"
      ],
      topics: [
        "The AI-Enhanced Design Process",
        "Tool Landscape Overview (Figma Make, Claude, Cursor)",
        "When to Use What - Decision Framework"
      ],
      activity: "Group discussion - identify 3 tasks in current workflow that could benefit from AI"
    },
    {
      id: "1b",
      title: "Figma Make - Prompt to Design",
      duration: "60 min",
      icon: "ph:figma-logo",
      color: "violet",
      objectives: [
        "Master the 3C methodology for effective prompts",
        "Create production-quality screens from text prompts",
        "Build Guidelines.md files for design consistency"
      ],
      topics: [
        "The 3C Methodology: Clarity, Context, Constraints",
        "Prompt Structure Templates",
        "Guidelines.md Structure & Best Practices"
      ],
      activity: "Write a prompt using 3C, generate in Figma Make, iterate and refine",
      deliverable: "First draft of team Guidelines.md"
    },
    {
      id: "1c",
      title: "Claude Skills & Specs",
      duration: "45 min",
      icon: "ph:robot",
      color: "violet",
      objectives: [
        "Understand what Claude Skills are and how to create them",
        "Build a custom Skill for the team's workflow",
        "Write PRDs and specs using AI with consistent structure"
      ],
      topics: [
        "What Are Claude Skills?",
        "Skill Structure Template",
        "PRD Skill Example",
        "Spec Types: Feature PRD, Component Spec, Flow Spec, API Spec"
      ],
      activity: "Create a PRD Skill customized for the team, generate a PRD for an upcoming feature",
      deliverable: "Custom PRD Skill saved to Claude"
    },
    {
      id: "1d",
      title: "Hands-On Practice",
      duration: "45 min",
      icon: "ph:hammer",
      color: "violet",
      objectives: [
        "Apply all learned concepts to a real product screen",
        "Experience the full prompt → design → iterate cycle",
        "Identify gaps in Guidelines.md"
      ],
      topics: [
        "Real screen selection from team's product",
        "Detailed prompt writing using 3C",
        "Comparison and iteration workflow"
      ],
      activity: "Select real screen → Write prompt → Generate → Compare → Refine → Generate again",
      deliverable: "One complete screen generated from prompt + refined Guidelines.md"
    }
  ];

  const session2Parts = [
    {
      id: "2a",
      title: "Environment Setup",
      duration: "30 min",
      icon: "ph:gear",
      color: "sky",
      objectives: [
        "Install and configure Cursor IDE",
        "Understand basic Git/GitHub workflow",
        "Connect to an existing project or create new one"
      ],
      topics: [
        "Cursor IDE Setup",
        "Essential Cursor Features (Composer, Chat, Inline Edit, @ mentions)",
        "Git Basics for Designers"
      ],
      activity: "Install Cursor, clone practice repository, make a small change and commit"
    },
    {
      id: "2b",
      title: "Design → Code Process",
      duration: "45 min",
      icon: "ph:arrows-left-right",
      color: "sky",
      objectives: [
        "Connect Figma to Cursor via MCP",
        "Use Rules and Docs to maintain code consistency",
        "Understand the AI-assisted coding workflow"
      ],
      topics: [
        "Figma MCP Connection Setup",
        "Using Figma Context in Cursor",
        "Cursor Rules File (.cursorrules)",
        "Docs Folder Structure"
      ],
      activity: "Connect Figma to Cursor, create .cursorrules file, test by generating a simple component",
      deliverable: ".cursorrules file for the project"
    },
    {
      id: "2c",
      title: "Hands-On Practice",
      duration: "60 min",
      icon: "ph:code",
      color: "sky",
      objectives: [
        "Analyze UI structure and identify components",
        "Build a complete screen/component in code",
        "Handle edge cases and states"
      ],
      topics: [
        "UI Analysis Framework (Layout, Components, States, Interactions, Data)",
        "Component Building Process (Scaffold → Structure → Style → Props → States → Polish)",
        "Prompt Patterns for Code Generation"
      ],
      activity: "Analyze target screen → Build layout → Build components → Connect and add data → Review and polish",
      deliverable: "Working code for one complete screen/component"
    },
    {
      id: "2d",
      title: "Q&A & Implementation",
      duration: "45 min",
      icon: "ph:chat-circle-dots",
      color: "sky",
      objectives: [
        "Address team-specific challenges",
        "Create an implementation plan for daily work",
        "Establish team conventions for AI-assisted workflow"
      ],
      topics: [
        "Workflow Integration Discussion",
        "Quality Control & Review Process",
        "Team Conventions",
        "Implementation Checklist (Week 1, Week 2-4, Month 2+)"
      ],
      activity: "Open Q&A, create 30-day implementation plan, assign owners for team artifacts",
      deliverable: "30-day implementation plan with owners"
    }
  ];

  const activeParts = activeSession === 1 ? session1Parts : session2Parts;

  return (
    <section id="curriculum" className="py-20 md:py-28 relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="inline-flex items-center gap-2 text-[10px] font-mono text-accent-500 uppercase tracking-widest mb-6">
          <span className="w-8 h-px bg-accent-500"></span>
          02 — Curriculum
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display text-white tracking-tight mb-4">
              Complete <span className="italic gradient-text-accent">Curriculum</span>
            </h2>
            <p className="text-neutral-400 max-w-lg">
              Two intensive sessions covering everything from AI-powered design to production code.
            </p>
          </div>

          {/* Session Toggle */}
          <div className="flex bg-[#0a0a0a]/50 border border-white/[0.06] rounded-lg p-1">
            <button
              onClick={() => setActiveSession(1)}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${
                activeSession === 1
                  ? "bg-violet-500/20 text-violet-300 border border-violet-500/30"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <span className="flex items-center gap-2">
                <Icon icon="ph:paint-brush-broad" width={16} />
                Session 1: AI for Design
              </span>
            </button>
            <button
              onClick={() => setActiveSession(2)}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${
                activeSession === 2
                  ? "bg-sky-500/20 text-sky-300 border border-sky-500/30"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <span className="flex items-center gap-2">
                <Icon icon="ph:code" width={16} />
                Session 2: Design to Code
              </span>
            </button>
          </div>
        </div>

        {/* Session Header */}
        <div className={`mb-8 p-6 rounded-xl border ${
          activeSession === 1 
            ? "bg-violet-500/5 border-violet-500/20" 
            : "bg-sky-500/5 border-sky-500/20"
        }`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-display text-white mb-2">
                {activeSession === 1 ? "Session 1: AI for Design" : "Session 2: Design to Code"}
              </h3>
              <p className="text-sm text-neutral-400">
                {activeSession === 1 
                  ? "Master AI-powered design workflows with Figma Make and Claude Skills"
                  : "Bridge the gap between design and development with Cursor IDE"
                }
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-xl font-mono text-white">3h</div>
                <div className="text-[10px] text-neutral-500 uppercase">Duration</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-mono text-white">4</div>
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
    violet: {
      bg: "bg-violet-500/10",
      border: "border-violet-500/20",
      text: "text-violet-400",
      dot: "bg-violet-400"
    },
    sky: {
      bg: "bg-sky-500/10",
      border: "border-sky-500/20",
      text: "text-sky-400",
      dot: "bg-sky-400"
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

// Methodology Section (3C)
function MethodologySection() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="inline-flex items-center gap-2 text-[10px] font-mono text-accent-500 uppercase tracking-widest mb-6">
          <span className="w-8 h-px bg-accent-500"></span>
          03 — Core Methodology
        </div>

        <h2 className="text-3xl md:text-4xl font-display text-white tracking-tight mb-4">
          The 3C <span className="italic gradient-text-accent">Methodology</span>
        </h2>
        <p className="text-neutral-400 max-w-2xl mb-12">
          Master our proven framework for crafting effective AI prompts that generate production-quality designs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Clarity */}
          <div className="group bg-[#0a0a0a]/50 border border-white/[0.06] rounded-xl p-8 hover:border-violet-500/30 transition-all duration-500 card-lift">
            <div className="w-16 h-16 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-3xl font-display text-violet-400">C</span>
            </div>
            <h3 className="text-2xl font-display text-white mb-3">Clarity</h3>
            <p className="text-sm text-neutral-500 leading-relaxed mb-6">
              What exactly do you want? Be specific about the screen type, purpose, and key elements.
            </p>
            <div className="bg-[#030303]/50 border border-white/[0.06] rounded-lg p-4">
              <div className="text-[10px] font-mono text-neutral-600 mb-2">EXAMPLE</div>
              <p className="text-xs text-neutral-400 italic">
                &quot;A dashboard showing monthly revenue metrics with a chart, KPI cards, and a transaction table&quot;
              </p>
            </div>
          </div>

          {/* Context */}
          <div className="group bg-[#0a0a0a]/50 border border-white/[0.06] rounded-xl p-8 hover:border-sky-500/30 transition-all duration-500 card-lift">
            <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-3xl font-display text-sky-400">C</span>
            </div>
            <h3 className="text-2xl font-display text-white mb-3">Context</h3>
            <p className="text-sm text-neutral-500 leading-relaxed mb-6">
              What&apos;s the environment? Platform, design system, user type, brand tone.
            </p>
            <div className="bg-[#030303]/50 border border-white/[0.06] rounded-lg p-4">
              <div className="text-[10px] font-mono text-neutral-600 mb-2">EXAMPLE</div>
              <p className="text-xs text-neutral-400 italic">
                &quot;For a B2B fintech SaaS, dark theme, professional tone, desktop-first&quot;
              </p>
            </div>
          </div>

          {/* Constraints */}
          <div className="group bg-[#0a0a0a]/50 border border-white/[0.06] rounded-xl p-8 hover:border-emerald-500/30 transition-all duration-500 card-lift">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-3xl font-display text-emerald-400">C</span>
            </div>
            <h3 className="text-2xl font-display text-white mb-3">Constraints</h3>
            <p className="text-sm text-neutral-500 leading-relaxed mb-6">
              What are the boundaries? Technical limits, must-have elements, things to avoid.
            </p>
            <div className="bg-[#030303]/50 border border-white/[0.06] rounded-lg p-4">
              <div className="text-[10px] font-mono text-neutral-600 mb-2">EXAMPLE</div>
              <p className="text-xs text-neutral-400 italic">
                &quot;Must include filter controls, max 4 KPI cards, no pie charts, follow 8px grid&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Tools Section
function ToolsSection() {
  const tools = [
    {
      name: "Figma Make",
      description: "AI-powered design generation directly in Figma. Create screens from prompts.",
      icon: "ph:figma-logo",
      color: "violet",
      features: ["Prompt to Design", "Guidelines.md", "Iteration Workflow"]
    },
    {
      name: "Claude",
      description: "Custom AI assistants (Skills) for specs, PRDs, and documentation.",
      icon: "ph:robot",
      color: "orange",
      features: ["Custom Skills", "PRD Generation", "Spec Writing"]
    },
    {
      name: "Cursor IDE",
      description: "AI-powered code editor that transforms designs into production code.",
      icon: "ph:terminal",
      color: "sky",
      features: ["Figma MCP", "AI Composer", ".cursorrules"]
    },
    {
      name: "Git & GitHub",
      description: "Version control basics for designers entering the code world.",
      icon: "ph:git-branch",
      color: "emerald",
      features: ["Clone & Branch", "Commit & Push", "Collaboration"]
    }
  ];

  const colorClasses = {
    violet: "bg-violet-500/10 border-violet-500/20 text-violet-400",
    orange: "bg-orange-500/10 border-orange-500/20 text-orange-400",
    sky: "bg-sky-500/10 border-sky-500/20 text-sky-400",
    emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
  };

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="inline-flex items-center gap-2 text-[10px] font-mono text-accent-500 uppercase tracking-widest mb-6">
          <span className="w-8 h-px bg-accent-500"></span>
          04 — Tools Covered
        </div>

        <h2 className="text-3xl md:text-4xl font-display text-white tracking-tight mb-4">
          Your AI <span className="italic gradient-text-accent">Toolkit</span>
        </h2>
        <p className="text-neutral-400 max-w-2xl mb-12">
          Master the essential tools that power modern AI-assisted design workflows.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((tool) => (
            <div key={tool.name} className="group bg-[#0a0a0a]/30 border border-white/[0.06] rounded-xl p-6 hover:border-white/[0.1] transition-all">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 ${colorClasses[tool.color as keyof typeof colorClasses]}`}>
                  <Icon icon={tool.icon} width={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-display text-white mb-2">{tool.name}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-4">{tool.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {tool.features.map((feature) => (
                      <span key={feature} className="px-2 py-1 bg-white/5 rounded text-[10px] text-neutral-400">
                        {feature}
                      </span>
                    ))}
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

// Deliverables Section
function DeliverablesSection() {
  const deliverables = [
    { session: "1A", item: "Identified AI opportunities in workflow", icon: "ph:lightbulb" },
    { session: "1B", item: "Team Guidelines.md (first draft)", icon: "ph:file-text" },
    { session: "1C", item: "Custom PRD Skill", icon: "ph:robot" },
    { session: "1D", item: "Generated screen from real product", icon: "ph:image" },
    { session: "2A", item: "Configured Cursor environment", icon: "ph:gear" },
    { session: "2B", item: ".cursorrules file for project", icon: "ph:file-code" },
    { session: "2C", item: "Working code for screen/component", icon: "ph:code" },
    { session: "2D", item: "30-day implementation plan", icon: "ph:calendar-check" }
  ];

  return (
    <section id="deliverables" className="py-20 md:py-28 relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="inline-flex items-center gap-2 text-[10px] font-mono text-accent-500 uppercase tracking-widest mb-6">
          <span className="w-8 h-px bg-accent-500"></span>
          05 — Deliverables
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-display text-white tracking-tight mb-4">
              What you&apos;ll <span className="italic gradient-text-accent">take home</span>
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-8">
              Every participant leaves with tangible artifacts they can immediately use in their daily work. 
              No theoretical concepts—just practical tools and templates.
            </p>

            <div className="bg-[#0a0a0a]/50 border border-white/[0.06] rounded-xl p-6">
              <h3 className="text-lg font-display text-white mb-4">Team Artifacts to Create</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon icon="ph:file-text" width={18} className="text-violet-400" />
                    <span className="text-sm text-neutral-300">Guidelines.md</span>
                  </div>
                  <span className="text-xs text-neutral-500">Design Lead</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon icon="ph:file-code" width={18} className="text-sky-400" />
                    <span className="text-sm text-neutral-300">.cursorrules</span>
                  </div>
                  <span className="text-xs text-neutral-500">Tech Lead</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon icon="ph:chat-text" width={18} className="text-emerald-400" />
                    <span className="text-sm text-neutral-300">Prompt Library</span>
                  </div>
                  <span className="text-xs text-neutral-500">Team</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon icon="ph:robot" width={18} className="text-orange-400" />
                    <span className="text-sm text-neutral-300">Claude Skills</span>
                  </div>
                  <span className="text-xs text-neutral-500">Team</span>
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
                      d.session.startsWith("1") ? "text-violet-400" : "text-sky-400"
                    }`}>
                      {d.session}
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

// Implementation Timeline
function ImplementationSection() {
  const timeline = [
    {
      period: "Week 1",
      title: "Setup & First Steps",
      items: [
        "All team members have Cursor installed",
        "Shared Guidelines.md created",
        ".cursorrules file in main repo",
        "First real task attempted with AI"
      ]
    },
    {
      period: "Week 2-4",
      title: "Refinement & Learning",
      items: [
        "Refine Guidelines.md based on results",
        "Create Claude Skills for common tasks",
        "Document prompt patterns that work",
        "Share learnings in team retro"
      ]
    },
    {
      period: "Month 2+",
      title: "Full Integration",
      items: [
        "AI workflow is default for new components",
        "Library of proven prompts",
        "Measurable time savings tracked"
      ]
    }
  ];

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="inline-flex items-center gap-2 text-[10px] font-mono text-accent-500 uppercase tracking-widest mb-6">
          <span className="w-8 h-px bg-accent-500"></span>
          06 — Post-Workshop
        </div>

        <h2 className="text-3xl md:text-4xl font-display text-white tracking-tight mb-4">
          Implementation <span className="italic gradient-text-accent">Timeline</span>
        </h2>
        <p className="text-neutral-400 max-w-2xl mb-12">
          A structured plan to ensure your team successfully integrates new workflows after the workshop.
        </p>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-[32px] left-0 w-full h-px bg-white/[0.06] z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative z-10">
            {timeline.map((phase, i) => (
              <div key={i} className="group">
                <div className="w-16 h-16 bg-[#0a0a0a] border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:border-accent-500/50 group-hover:bg-accent-500/5 transition-all duration-300">
                  <span className="text-sm font-mono text-white group-hover:text-accent-400 transition-colors">
                    {phase.period}
                  </span>
                </div>
                <h4 className="text-xl font-display text-white mb-4">{phase.title}</h4>
                <ul className="space-y-3">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-neutral-400">
                      <div className="w-1.5 h-1.5 bg-accent-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Add-On Sessions
function AddOnSection() {
  const addOns = [
    {
      title: "Claude Agents",
      duration: "3 hours",
      description: "Build multi-step AI agents for automation, research, code review, and documentation.",
      icon: "ph:robot",
      color: "violet",
      topics: ["What are AI agents vs. simple prompts", "Building multi-step agents in Claude", "Running agents in Cursor", "Design review & documentation agents"]
    },
    {
      title: "Deep Research with AI",
      duration: "3 hours",
      description: "AI-powered user research methods, persona creation, and interview simulation.",
      icon: "ph:magnifying-glass",
      color: "sky",
      topics: ["AI-powered user research methods", "Creating accurate fictional users", "Interview simulation and analysis", "Synthesizing research findings"]
    }
  ];

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="inline-flex items-center gap-2 text-[10px] font-mono text-accent-500 uppercase tracking-widest mb-6">
          <span className="w-8 h-px bg-accent-500"></span>
          07 — Optional Add-Ons
        </div>

        <h2 className="text-3xl md:text-4xl font-display text-white tracking-tight mb-4">
          Extend Your <span className="italic gradient-text-accent">Learning</span>
        </h2>
        <p className="text-neutral-400 max-w-2xl mb-12">
          Additional sessions to dive deeper into specific areas based on your team&apos;s needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {addOns.map((addon) => (
            <div key={addon.title} className="group bg-[#0a0a0a]/30 border border-white/[0.06] rounded-xl p-8 hover:border-white/[0.1] transition-all card-lift">
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 rounded-xl ${
                  addon.color === "violet" ? "bg-violet-500/10 border-violet-500/20" : "bg-sky-500/10 border-sky-500/20"
                } border flex items-center justify-center`}>
                  <Icon icon={addon.icon} width={24} className={addon.color === "violet" ? "text-violet-400" : "text-sky-400"} />
                </div>
                <span className="px-3 py-1.5 border border-white/10 bg-white/5 text-[10px] font-mono text-neutral-400 uppercase rounded-sm">
                  {addon.duration}
                </span>
              </div>
              <h3 className="text-2xl font-display text-white mb-3">{addon.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-6">{addon.description}</p>
              <div className="space-y-2">
                {addon.topics.map((topic, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-neutral-400">
                    <div className={`w-1.5 h-1.5 rounded-full ${addon.color === "violet" ? "bg-violet-400" : "bg-sky-400"}`}></div>
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
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-500/10 via-[#0a0a0a] to-sky-500/10 border border-white/[0.06] p-8 md:p-16">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-violet-600/20 to-transparent rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-sky-600/10 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-accent-500/30 bg-accent-500/10 rounded-full mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              <span className="text-xs font-mono text-accent-400 uppercase tracking-wider">Now Booking Q1 2026</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-display text-white tracking-tight mb-6">
              Ready to transform your team?
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-10">
              Book the AI Design Workshop and give your team the skills to work faster, 
              smarter, and ship better products with AI assistance.
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
export default function AIDesignWorkshopPage() {
  return (
    <>
      {/* Background Elements */}
      <div className="fixed inset-0 -z-30 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[#030303]"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-violet-600/10 to-transparent rounded-full blur-[120px]"></div>
        <div className="absolute top-[30%] left-[-15%] w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/[0.08] to-transparent rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-gradient-to-tl from-violet-700/[0.06] to-transparent rounded-full blur-[80px]"></div>
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

          <CurriculumSection />
          <Divider />

          <MethodologySection />
          <Divider />

          <ToolsSection />
          <Divider />

          <DeliverablesSection />
          <Divider />

          <ImplementationSection />
          <Divider />

          <AddOnSection />

          <WorkshopCTA />

          <WorkshopFooter />
        </div>
      </main>
    </>
  );
}
