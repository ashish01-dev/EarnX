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
    <div className="relative min-h-screen bg-background dark text-foreground w-full overflow-hidden">
      {/* Noise overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZmlsdGVyIGlkPSJuIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZmZmIiBmaWx0ZXI9InVybCgjbikiIG9wYWNpdHk9IjEiLz48L3N2Zz4=')" }}></div>
      
      <Navbar />
      <Hero />
      <BrandingStrip />
      <div className="relative z-10 space-y-32 pb-32">
        <CategoryTabs />
        <HowItWorks />
        <LiveDashboard />
        <EarningMethods />
        <Testimonials />
        <Leaderboard />
      </div>
      <Footer />
    </div>
  );
}
