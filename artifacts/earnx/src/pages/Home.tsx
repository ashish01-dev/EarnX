import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { BrandingStrip } from "@/components/BrandingStrip";
import { CategoryTabs } from "@/components/CategoryTabs";
import { HowItWorks } from "@/components/HowItWorks";
import { LiveDashboard } from "@/components/LiveDashboard";
import { EarningMethods } from "@/components/EarningMethods";
import { Testimonials } from "@/components/Testimonials";
import { Leaderboard } from "@/components/Leaderboard";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden" style={{ background: "#13121b", color: "#fffffe" }}>
      {/* Animated mesh background */}
      <div className="mesh-bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* Film grain noise */}
      <div className="noise-overlay" />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <BrandingStrip />
        <div className="flex flex-col gap-0">
          <CategoryTabs />
          <HowItWorks />
          <LiveDashboard />
          <EarningMethods />
          <Testimonials />
          <Leaderboard />
        </div>
      </main>

      <Footer />
    </div>
  );
}
