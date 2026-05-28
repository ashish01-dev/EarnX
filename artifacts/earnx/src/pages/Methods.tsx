import { motion } from "framer-motion";
import { ArrowRight, Brain, Bitcoin, Share2, Code, Video, ShoppingBag, Scissors, CandlestickChart, BarChart3, Zap, Youtube, Film, Camera, Bot, Briefcase, ClipboardList, Tv, DollarSign } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Link } from "wouter";

const methods = [
  { icon: Brain, label: "AI Content Generation", desc: "Leverage LLMs to mass-produce high-quality blog posts, marketing copy, and SEO articles for immediate client delivery.", accent: "#ffb780", badge: "HIGH YIELD", yield: "12-18% monthly" },
  { icon: Bitcoin, label: "Micro-Crypto", desc: "Automated dollar-cost averaging into emerging Web3 assets with AI-driven entry points.", accent: "#ffb1c1", badge: "STABLE", yield: "8-15% monthly" },
  { icon: Video, label: "Short-Form Video", desc: "Monetize viral clips on YouTube Shorts and TikTok with automated publishing pipelines.", accent: "#ff8906", badge: "TRENDING", yield: "5-20% monthly" },
  { icon: ShoppingBag, label: "Digital Product Arbitrage", desc: "Identify high-demand SaaS templates and notion dashboards, acquire resell rights, and distribute via automated funnels.", accent: "#ffb780", badge: "HIGH YIELD", yield: "15-25% monthly" },
  { icon: Share2, label: "Affiliate Marketing", desc: "Build evergreen commission funnels with AI-generated content and smart targeting.", accent: "#ffb1c1", badge: "PASSIVE", yield: "6-12% monthly" },
  { icon: Code, label: "Freelancing", desc: "Sell high-value technical skills to global clients through our premium marketplace.", accent: "#ff8906", badge: "INSTANT", yield: "varies" },
  { icon: Scissors, label: "Video Editing", desc: "Premium editing packages for content creators with recurring subscription models.", accent: "#ffb780", badge: "RECURRING", yield: "10-18% monthly" },
  { icon: CandlestickChart, label: "Algorithmic Trading", desc: "Technical & algorithmic trading strategies powered by machine learning models.", accent: "#ffb1c1", badge: "ADVANCED", yield: "10-30% monthly" },
  { icon: BarChart3, label: "Stock Trading", desc: "Trade global markets with AI-powered signals and risk management.", accent: "#ff8906", badge: "STABLE", yield: "5-12% monthly" },
  { icon: Bot, label: "AI Task Automation", desc: "Build and sell AI automation workflows for businesses.", accent: "#ffb780", badge: "HIGH DEMAND", yield: "10-20% monthly" },
  { icon: Youtube, label: "YouTube Automation", desc: "Run faceless channels with AI-generated scripts, voiceovers, and editing.", accent: "#ffb1c1", badge: "PASSIVE", yield: "8-15% monthly" },
  { icon: Camera, label: "Content Creation", desc: "Build your audience and monetize through multiple revenue streams.", accent: "#ff8906", badge: "SCALABLE", yield: "varies" },
  { icon: Film, label: "Shorts Monetization", desc: "Viral short content optimized for maximum ad revenue and sponsorships.", accent: "#ffb780", badge: "TRENDING", yield: "5-15% monthly" },
  { icon: Tv, label: "Live Streaming", desc: "Live & VOD income through subscriptions, tips, and brand deals.", accent: "#ffb1c1", badge: "SOCIAL", yield: "varies" },
  { icon: Briefcase, label: "Micro Jobs", desc: "Complete small tasks and cash out instantly. Perfect for beginners.", accent: "#ff8906", badge: "BEGINNER", yield: "immediate" },
  { icon: ClipboardList, label: "Paid Surveys", desc: "Quick paid research studies with instant payouts.", accent: "#ffb780", badge: "QUICK", yield: "immediate" },
];

export default function Methods() {
  return (
    <PageLayout>
      <section className="relative py-32 px-6" style={{ paddingTop: 200 }}>
        <div className="absolute top-0 right-0 pointer-events-none rounded-full" style={{ width: 600, height: 400, background: "rgba(229,49,112,0.07)", filter: "blur(140px)" }} />
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="uppercase mb-4" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.1em", color: "#ffb780" }}>Earning Methods</p>
            <h1 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(40px,6vw,72px)", letterSpacing: "-0.03em", color: "#fffffe", lineHeight: 1.1 }}>
              All <span className="text-gradient-primary">Earning</span> Methods
            </h1>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 16, color: "#a7a9be", marginTop: 12, maxWidth: 600, margin: "12px auto 0" }}>
              Explore every strategy available on EarnX. Each method includes estimated yields, difficulty level, and step-by-step guides.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {methods.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div key={m.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }} whileHover={{ y: -4, scale: 1.01 }}
                  className="rounded-[20px] p-6 flex flex-col gap-4 cursor-pointer card-base"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: "rgba(32,30,40,0.8)", border: "1px solid rgba(255,255,255,0.1)" }}>
                      <Icon size={20} style={{ color: m.accent }} />
                    </div>
                    {m.badge && (
                      <span className="rounded-full px-2.5 py-0.5" style={{ background: `${m.accent}18`, border: `1px solid ${m.accent}33`, fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.08em", color: m.accent }}>
                        {m.badge}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 18, color: "#fffffe", marginBottom: 6 }}>{m.label}</h3>
                    <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 14, color: "#a7a9be", lineHeight: "22px" }}>{m.desc}</p>
                  </div>
                  <div className="flex items-center justify-between pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: m.accent }}>Yield: {m.yield}</span>
                    <ArrowRight size={14} style={{ color: "#a7a9be" }} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-16">
            <Link href="/get-started">
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="btn-magnetic rounded-full font-body font-bold" style={{ padding: "16px 40px", fontSize: 16, color: "#fffffe", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                Start Your First Method <ArrowRight size={18} className="inline" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
