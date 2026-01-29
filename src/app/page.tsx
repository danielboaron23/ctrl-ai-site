"use client";

import NeuralNetworkHero from "@/components/ui/neural-network-hero";
import Navigation from "@/components/ui/navigation";
import ImpactStats from "@/components/ui/impact-stats";
import WorkshopsSection from "@/components/ui/workshops-section";
import StackSection from "@/components/ui/stack-section";
import MethodSection from "@/components/ui/method-section";
import TestimonialsSection from "@/components/ui/testimonials-section";
import AboutSection from "@/components/ui/about-section";
import FAQSection from "@/components/ui/faq-section";
import CTASection from "@/components/ui/cta-section";
import Footer from "@/components/ui/footer";
import { useLanguage } from "@/lib/i18n";

function Divider() {
  return <div className="divider-gradient max-w-[1400px] mx-auto"></div>;
}

export default function Home() {
  const { t, isRTL } = useLanguage();

  return (
    <>
      {/* Background Elements */}
      <div className="fixed inset-0 -z-30 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[#030303]"></div>
        {/* Warm gradient orbs */}
        <div className={`absolute top-[-20%] ${isRTL ? 'left-[-10%]' : 'right-[-10%]'} w-[800px] h-[800px] bg-gradient-to-br from-violet-600/10 to-transparent rounded-full blur-[120px]`}></div>
        <div className={`absolute top-[30%] ${isRTL ? 'right-[-15%]' : 'left-[-15%]'} w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/[0.08] to-transparent rounded-full blur-[100px]`}></div>
        <div className={`absolute bottom-[10%] ${isRTL ? 'left-[10%]' : 'right-[10%]'} w-[500px] h-[500px] bg-gradient-to-tl from-violet-700/[0.06] to-transparent rounded-full blur-[80px]`}></div>
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

      <Navigation />

      <main className="relative z-10">
        <NeuralNetworkHero
          title={isRTL ? `מבאזוורד\nלפרקטיקה.` : `From Buzzword\nto Workflow.`}
          description={t.hero.description}
          badgeText={isRTL ? "מקבלים הזמנות לQ1 2026" : "Now Booking Q1 2026"}
          badgeLabel={isRTL ? "חדש" : "Live"}
          ctaButtons={[
            { text: t.hero.cta, href: "#contact", primary: true },
            { text: t.hero.secondary, href: "#workshops" },
          ]}
          microDetails={
            isRTL
              ? ["+15 צוותים הוכשרו", "+500 מעצבים", "40% חיסכון בזמן"]
              : ["15+ Teams Trained", "500+ Designers", "40% Time Saved"]
          }
        />

        <div className="relative z-10 bg-[#030303]">
          <ImpactStats />
          <Divider />

          <WorkshopsSection />
          <Divider />

          <StackSection />
          <Divider />

          <MethodSection />
          <Divider />

          <TestimonialsSection />
          <Divider />

          <AboutSection />
          <Divider />

          <FAQSection />

          <CTASection />

          <Footer />
        </div>
      </main>
    </>
  );
}
