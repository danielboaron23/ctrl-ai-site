"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t, isRTL } = useLanguage();

  return (
    <footer className="pt-20 md:pt-32 pb-8 md:pb-12 border-t border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 md:mb-20">
          <Link href="#" aria-label="Ctrl AI" className="group">
            <Image
              src="/assets/ctrl-ai-logo.svg"
              alt="Ctrl AI"
              width={64}
              height={64}
              className="h-12 md:h-16 w-auto transition-all duration-500 group-hover:opacity-80"
            />
          </Link>
          <div className={`flex flex-col gap-3 ${isRTL ? 'md:text-left' : 'md:text-right'}`}>
            <Link
              href="#contact"
              className={`text-base md:text-lg text-neutral-300 hover:text-accent-400 transition-colors flex items-center gap-2 ${isRTL ? 'md:justify-start' : 'md:justify-end'} group`}
            >
              {isRTL ? 'הזמינו סדנה' : 'Book a Workshop'}
              <Icon
                icon={isRTL ? "ph:arrow-left" : "ph:arrow-right"}
                className={`transition-transform ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
                width={18}
              />
            </Link>
            <div className="text-sm text-neutral-600">{t.footer.location}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-white/[0.06] pt-10 md:pt-12">
          <div>
            <h4 className="text-[10px] font-mono uppercase text-neutral-500 mb-4 tracking-wider">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  {t.footer.links.overview}
                </Link>
              </li>
              <li>
                <Link href="#workshops" className="hover:text-white transition-colors">
                  {t.footer.links.workshops}
                </Link>
              </li>
              <li>
                <Link href="#method" className="hover:text-white transition-colors">
                  {t.footer.links.method}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-mono uppercase text-neutral-500 mb-4 tracking-wider">
              {isRTL ? 'התחברו' : 'Connect'}
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Twitter / X
                </Link>
              </li>
              <li>
                <Link
                  href="https://designai.co.il"
                  className="hover:text-white transition-colors"
                >
                  Design AI
                </Link>
              </li>
            </ul>
          </div>
          <div className={`col-span-2 ${isRTL ? 'md:text-left' : 'md:text-right'} mt-4 md:mt-0`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/[0.06] rounded bg-white/[0.02] mb-3">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider">
                {isRTL ? 'המערכת פעילה' : 'System Online'}
              </span>
            </div>
            <p className="text-[11px] font-mono text-neutral-600">
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
