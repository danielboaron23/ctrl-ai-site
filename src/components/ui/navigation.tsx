"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
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
          href="#"
          className="font-display text-4xl text-white opacity-70 hover:opacity-100 transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          Overview
        </Link>
        <Link
          href="#workshops"
          className="font-display text-4xl text-white opacity-70 hover:opacity-100 transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          Workshops
        </Link>
        <Link
          href="#method"
          className="font-display text-4xl text-white opacity-70 hover:opacity-100 transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          Method
        </Link>
        <Link
          href="#contact"
          className="font-display text-4xl text-white opacity-70 hover:opacity-100 transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          Contact
        </Link>
      </div>

      {/* Navigation */}
      <div className="fixed z-50 flex w-full top-0 px-4 md:px-6 pt-4 md:pt-6 justify-center">
        <nav className="flex w-full max-w-[1400px] mx-auto items-center justify-between py-3 px-4 md:px-6 backdrop-blur-xl bg-[#0a0a0a]/70 border border-white/[0.06] rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
          <Link href="#" className="flex items-center gap-3 group" aria-label="Ctrl AI">
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
              href="#"
              className="px-4 py-2 text-white text-xs font-medium tracking-wide transition-all relative group"
            >
              Overview
              <span className="absolute bottom-1 left-4 right-4 h-px bg-accent-500 scale-x-100"></span>
            </Link>
            <Link
              href="#workshops"
              className="px-4 py-2 text-neutral-400 hover:text-white text-xs font-medium transition-all relative group"
            >
              Workshops
              <span className="absolute bottom-1 left-4 right-4 h-px bg-accent-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <Link
              href="#method"
              className="px-4 py-2 text-neutral-400 hover:text-white text-xs font-medium transition-all relative group"
            >
              Method
              <span className="absolute bottom-1 left-4 right-4 h-px bg-accent-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <Link
              href="#contact"
              className="px-4 py-2 text-neutral-400 hover:text-white text-xs font-medium transition-all relative group"
            >
              Contact
              <span className="absolute bottom-1 left-4 right-4 h-px bg-accent-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="#contact" className="hidden md:inline-flex btn-primary text-xs py-2.5 px-5">
              <span>Book Now</span>
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
