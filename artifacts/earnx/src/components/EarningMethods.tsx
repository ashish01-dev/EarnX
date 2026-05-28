import { motion } from "framer-motion";
import { Brain, Bitcoin, Share2, Code, Video, ShoppingBag, Scissors, CandlestickChart } from "lucide-react";

const methods = [
  { icon: Brain, label: "AI Content Creation", desc: "Generate & monetize with AI", color: "#ff8906", size: "large" },
  { icon: Bitcoin, label: "Crypto Investing", desc: "Spot, DeFi & staking", color: "#f25f4c", size: "small" },
  { icon: Share2, label: "Affiliate Marketing", desc: "Earn per referral", color: "#e53170", size: "small" },
  { icon: Code, label: "Freelancing", desc: "Sell high-value skills", color: "#ff8906", size: "small" },
  { icon: Video, label: "UGC Content", desc: "Brands pay creators", color: "#f25f4c", size: "large" },
  { icon: ShoppingBag, label: "Dropshipping", desc: "Zero-inventory stores", color: "#e53170", size: "small" },
  { icon: Scissors, label: "Video Editing", desc: "Premium editing income", color: "#ff8906", size: "small" },
  { icon: CandlestickChart, label: "Trading", desc: "Technical & quant", color: "#f25f4c", size: "small" },
];

export function EarningMethods() {
  return (
    <section className="py-24 px-4 relative" id="methods-grid">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">Earning Methods</p>
          <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter">
            8 Ways to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-sweep">
              Build Wealth
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-4 auto-rows-[160px]">
          {methods.map((method, i) => {
            const Icon = method.icon;
            const isLarge = method.size === "large";
            return (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ scale: 1.04, y: -4 }}
                className={`relative glass-panel rounded-3xl p-6 border border-white/10 group overflow-hidden cursor-default flex flex-col justify-between ${isLarge ? "md:col-span-2 md:row-span-1" : ""}`}
              >
                {/* Animated gradient glow border */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{
                    background: `radial-gradient(circle at 30% 20%, ${method.color}30 0%, transparent 60%)`,
                  }}
                />
                <div
                  className="absolute inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{
                    boxShadow: `inset 0 0 0 1px ${method.color}55`,
                  }}
                />

                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `${method.color}22`, border: `1px solid ${method.color}44` }}
                >
                  <Icon className="w-5 h-5" style={{ color: method.color }} />
                </div>

                <div className="relative z-10">
                  <h3 className="font-display font-bold text-white text-base leading-tight mb-1">{method.label}</h3>
                  <p className="text-xs text-muted-foreground">{method.desc}</p>
                </div>

                {/* Neon bottom line */}
                <div
                  className="absolute bottom-0 left-[20%] right-[20%] h-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full blur-[1px]"
                  style={{ background: method.color }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
