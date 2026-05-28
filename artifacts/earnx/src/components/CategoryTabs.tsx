import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Zap, Video, BarChart3, Bitcoin, Brain, DollarSign, Code, ClipboardList, Bot, Briefcase, Youtube, Film, Tv, Camera } from "lucide-react";

const categories = [
  {
    id: "invest",
    label: "Invest",
    icon: TrendingUp,
    color: "#ff8906",
    items: [
      { icon: BarChart3, label: "Stocks", desc: "Trade global markets", color: "#ff8906" },
      { icon: Bitcoin, label: "Crypto", desc: "DeFi & spot trading", color: "#f25f4c" },
      { icon: Brain, label: "AI Investing", desc: "Algorithm-powered", color: "#e53170" },
      { icon: DollarSign, label: "Passive Income", desc: "Earn while you sleep", color: "#ff8906" },
    ],
  },
  {
    id: "instant",
    label: "Instant",
    icon: Zap,
    color: "#f25f4c",
    items: [
      { icon: Code, label: "Freelancing", desc: "Sell your skills", color: "#ff8906" },
      { icon: ClipboardList, label: "Surveys", desc: "Quick paid tasks", color: "#f25f4c" },
      { icon: Bot, label: "AI Tasks", desc: "Prompt & earn", color: "#e53170" },
      { icon: Briefcase, label: "Micro Jobs", desc: "Complete & cash out", color: "#ff8906" },
    ],
  },
  {
    id: "videos",
    label: "Videos",
    icon: Video,
    color: "#e53170",
    items: [
      { icon: Youtube, label: "YouTube Automation", desc: "Faceless channels", color: "#ff8906" },
      { icon: Film, label: "Shorts Monetization", desc: "Viral short content", color: "#f25f4c" },
      { icon: Camera, label: "Content Creation", desc: "Build your audience", color: "#e53170" },
      { icon: Tv, label: "Streaming", desc: "Live & VOD income", color: "#ff8906" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export function CategoryTabs() {
  const [active, setActive] = useState("invest");
  const current = categories.find((c) => c.id === active)!;

  return (
    <section className="py-24 px-4 relative" id="methods">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">Choose Your Path</p>
          <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter">
            How Do You Want{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-sweep">
              to Earn?
            </span>
          </h2>
        </motion.div>

        {/* Tab Bar */}
        <div className="flex justify-center mb-12">
          <div className="glass-panel rounded-full p-1.5 flex gap-1 border border-white/10">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = cat.id === active;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className="relative px-7 py-3 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 group overflow-hidden"
                  style={{ color: isActive ? "#0f0e17" : "#a7a9be" }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-tab"
                      className="absolute inset-0 rounded-full"
                      style={{ background: cat.color }}
                      transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                    />
                  )}
                  <Icon
                    className="w-4 h-4 relative z-10 transition-transform duration-200 group-hover:scale-110"
                    style={{ color: isActive ? "#0f0e17" : cat.color }}
                  />
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {current.items.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  variants={cardVariants}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="relative glass-panel rounded-2xl p-6 border border-white/10 cursor-pointer group overflow-hidden"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${item.color}30 0%, transparent 60%)`,
                    }}
                  />
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 relative z-10"
                    style={{ background: `${item.color}22`, border: `1px solid ${item.color}44` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-1 relative z-10">{item.label}</h3>
                  <p className="text-sm text-muted-foreground relative z-10">{item.desc}</p>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
