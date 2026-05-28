import { Hero } from "@/components/Hero";
import { BrandingStrip } from "@/components/BrandingStrip";
import { CategoryTabs } from "@/components/CategoryTabs";
import { HowItWorks } from "@/components/HowItWorks";
import { LiveDashboard } from "@/components/LiveDashboard";
import { EarningMethods } from "@/components/EarningMethods";
import { Testimonials } from "@/components/Testimonials";
import { Leaderboard } from "@/components/Leaderboard";
import { PageLayout } from "@/components/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      <div id="home" />
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
    </PageLayout>
  );
}
