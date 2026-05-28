import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Zap, Video, BarChart3, Bitcoin, Brain, DollarSign, Code, ClipboardList, Bot, Briefcase, Youtube, Film, Tv, Camera } from "lucide-react";
import { useLocation } from "wouter";

const categories = [
  {
    id: "invest",
    label: "Invest",
    icon: TrendingUp,
    items: [
      { icon: BarChart3, label: "Stocks", desc: "Trade global markets", accent: "#ffb780" },
      { icon: Bitcoin, label: "Crypto", desc: "DeFi & spot trading", accent: "#ffb1c1" },
      { icon: Brain, label: "AI Investing", desc: "Algorithm-powered returns", accent: "#ff8906" },
      { icon: DollarSign, label: "Passive Income", desc: "Earn while you sleep", accent: "#ffb780" },
    ],
  },
  {
    id: "instant",
    label: "Instant",
    icon: Zap,
    items: [
      { icon: Code, label: "Freelancing", desc: "Sell your premium skills", accent: "#ffb780" },
      { icon: ClipboardList, label: "Surveys", desc: "Quick paid research", accent: "#ffb1c1" },
      { icon: Bot, label: "AI Tasks", desc: "Prompt & get paid", accent: "#ff8906" },
      { icon: Briefcase, label: "Micro Jobs", desc: "Complete & cash out", accent: "#ffb780" },
    ],
  },
  {
    id: "videos",
    label: "Videos",
    icon: Video,
    items: [
      { icon: Youtube, label: "YouTube Automation", desc: "Faceless channels", accent: "#ffb780" },
      { icon: Film, label: "Shorts Monetization", desc: "Viral short content", accent: "#ffb1c1" },
      { icon: Camera, label: "Content Creation", desc: "Build your audience", accent: "#ff8906" },
      { icon: Tv, label: "Streaming", desc: "Live & VOD income", accent: "#ffb780" },
    ],
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

export function CategoryTabs() {
  const [active, setActive] = useState("invest");
  const cat = categories.find((c) => c.id === active)!;
  const [, setLocation] = useLocation();

  return (
    <section className="relative py-32 px-6" id="methods">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p
            className="font-mono-label uppercase mb-4"
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.1em", color: "#ffb780" }}
          >
            Choose Your Path
          </p>
          <h2
            className="font-display"
            style={{
              fontFamily: "'Syne',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(32px,5vw,56px)",
              letterSpacing: "-0.03em",
              color: "#fffffe",
              lineHeight: 1.1,
            }}
          >
            How Do You Want to{" "}
            <span className="text-gradient-primary">Earn?</span>
          </h2>
        </motion.div>

        {/* Tab bar */}
        <div className="flex justify-center mb-12">
          <div
            className="flex gap-1 p-1.5 rounded-full"
            style={{ background: "rgba(32,30,40,0.7)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {categories.map((c) => {
              const Icon = c.icon;
              const isActive = c.id === active;
              return (
                <button
                  key={c.id}
                  onClick={() => setActive(c.id)}
                  className="relative flex items-center gap-2 rounded-full transition-all duration-300"
                  style={{
                    padding: "10px 24px",
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    fontWeight: 600,
                    fontSize: 14,
                    color: isActive ? "#13121b" : "#a7a9be",
                    position: "relative",
                    cursor: "pointer",
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="tab-pill"
                      className="absolute inset-0 rounded-full"
                      style={{ background: "linear-gradient(135deg, #ffb780, #ffb1c1)" }}
                      transition={{ type: "spring", bounce: 0.22, duration: 0.4 }}
                    />
                  )}
                  <Icon size={15} className="relative z-10" style={{ color: isActive ? "#13121b" : "#ffb780" }} />
                  <span className="relative z-10">{c.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={stagger}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {cat.items.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  variants={cardAnim}
                  whileHover={{ y: -6, scale: 1.025 }}
                  onClick={() => setLocation("/methods")}
                  className="hover-reflection relative rounded-[24px] p-7 flex flex-col gap-4 cursor-pointer"
                  style={{
                    background: "rgba(32,30,40,0.6)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid transparent",
                    backgroundClip: "padding-box",
                    boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
                    transition: "box-shadow 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 32px rgba(255,183,128,0.12)`;
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,183,128,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 30px rgba(0,0,0,0.5)";
                    (e.currentTarget as HTMLElement).style.borderColor = "transparent";
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(32,30,40,0.8)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <Icon size={20} style={{ color: item.accent }} />
                  </div>
                  <div>
                    <h3
                      className="font-display mb-1"
                      style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 18, color: "#fffffe" }}
                    >
                      {item.label}
                    </h3>
                    <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 14, color: "#a7a9be" }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
