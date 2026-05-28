import { motion } from "framer-motion";
import { Brain, Bitcoin, Share2, Code, Video, ShoppingBag, Scissors, CandlestickChart } from "lucide-react";

const methods = [
  {
    icon: Brain,
    label: "AI Content Generation",
    desc: "Leverage LLMs to mass-produce high-quality blog posts, marketing copy, and SEO articles for immediate client delivery.",
    accent: "#ffb780",
    badge: "HIGH YIELD",
    badgeAccent: "#ff8906",
    span: "lg",
  },
  {
    icon: Bitcoin,
    label: "Micro-Crypto",
    desc: "Automated dollar-cost averaging into emerging Web3 assets.",
    accent: "#ffb1c1",
    span: "sm",
  },
  {
    icon: Video,
    label: "Short-Form Video",
    desc: "Monetize viral clips on YouTube Shorts and TikTok.",
    accent: "#a7a9be",
    span: "sm",
  },
  {
    icon: ShoppingBag,
    label: "Digital Product Arbitrage",
    desc: "Identify high-demand SaaS templates and notion dashboards, acquire resell rights, and distribute via automated funnels.",
    accent: "#ffb780",
    badge: "TRENDING",
    badgeAccent: "#ff8906",
    span: "lg",
  },
  {
    icon: Share2,
    label: "Affiliate Marketing",
    desc: "Build evergreen commission funnels with AI-generated content.",
    accent: "#ffb1c1",
    span: "sm",
  },
  {
    icon: Code,
    label: "Freelancing",
    desc: "Sell high-value technical skills to global clients.",
    accent: "#ffb780",
    span: "sm",
  },
  {
    icon: Scissors,
    label: "Video Editing",
    desc: "Premium editing packages for content creators.",
    accent: "#ffb1c1",
    span: "sm",
  },
  {
    icon: CandlestickChart,
    label: "Trading",
    desc: "Technical & algorithmic trading strategies.",
    accent: "#ff8906",
    span: "sm",
  },
];

export function EarningMethods() {
  return (
    <section className="relative py-32 px-6" id="methods-grid">
      <div
        className="absolute top-0 right-0 pointer-events-none rounded-full"
        style={{ width: 600, height: 400, background: "rgba(229,49,112,0.07)", filter: "blur(140px)" }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="uppercase mb-4"
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.1em", color: "#ffb780" }}
          >
            Earning Methods
          </p>
          <h2
            style={{
              fontFamily: "'Syne',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(32px,5vw,56px)",
              letterSpacing: "-0.03em",
              color: "#fffffe",
              lineHeight: 1.1,
            }}
          >
            Top Earning{" "}
            <span className="text-gradient-primary">Methods</span>
          </h2>
          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 16, color: "#a7a9be", marginTop: 12, maxWidth: 500, margin: "12px auto 0" }}>
            Curated, high-yield strategies actively working for the EarnX community right now.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {methods.map((m, i) => {
            const Icon = m.icon;
            const isLarge = m.span === "lg";
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className={`hover-reflection relative rounded-[24px] flex flex-col justify-between overflow-hidden cursor-default ${
                  isLarge ? "md:col-span-8" : "md:col-span-4"
                }`}
                style={{
                  padding: 32,
                  minHeight: 240,
                  background: "rgba(32,30,40,0.6)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.4)",
                  transition: "box-shadow 0.4s, border-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px rgba(255,137,6,0.12)`;
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,183,128,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 30px rgba(0,0,0,0.4)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                }}
              >
                {/* Subtle inner gradient */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: `linear-gradient(135deg, ${m.accent}08, transparent 60%)` }}
                />

                <div className="flex items-start justify-between z-10 relative">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(32,30,40,0.8)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <Icon size={22} style={{ color: m.accent }} />
                  </div>
                  {m.badge && (
                    <span
                      className="rounded-full px-3 py-1"
                      style={{
                        background: "rgba(32,30,40,0.8)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        fontFamily: "'JetBrains Mono',monospace",
                        fontSize: 11,
                        letterSpacing: "0.08em",
                        color: "#a7a9be",
                      }}
                    >
                      {m.badge}
                    </span>
                  )}
                </div>

                <div className="z-10 relative">
                  <h3
                    className="mb-2 transition-colors duration-200"
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      fontWeight: 700,
                      fontSize: 22,
                      letterSpacing: "-0.02em",
                      color: "#fffffe",
                    }}
                  >
                    {m.label}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans',sans-serif",
                      fontSize: 15,
                      color: "#a7a9be",
                      lineHeight: "22px",
                      display: "-webkit-box",
                      WebkitLineClamp: isLarge ? 3 : 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
