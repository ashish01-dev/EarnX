import { motion } from "framer-motion";
import { BookOpen, Hammer, BadgeDollarSign } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    step: "01",
    title: "Learn",
    desc: "Access expert-curated courses, guides, and AI-powered insights across every earning category.",
    color: "#ff8906",
  },
  {
    icon: Hammer,
    step: "02",
    title: "Build",
    desc: "Use our premium tools to create income streams — from automated portfolios to monetized content.",
    color: "#f25f4c",
  },
  {
    icon: BadgeDollarSign,
    step: "03",
    title: "Earn",
    desc: "Watch your earnings grow in real time. Scale what works. Unlock your next income level.",
    color: "#e53170",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 px-4 relative" id="how-it-works">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">The Process</p>
          <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter">
            How{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-sweep">
              EarnX Works
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Lines */}
          <div className="hidden md:block absolute top-16 left-[33%] w-[34%] h-px">
            <div className="w-full h-full bg-gradient-to-r from-primary/60 to-secondary/60 relative">
              <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-primary/40 to-secondary/40 blur-sm" />
            </div>
          </div>
          <div className="hidden md:block absolute top-16 left-[66%] w-[18%] h-px">
            <div className="w-full h-full bg-gradient-to-r from-secondary/60 to-accent/60 relative">
              <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-secondary/40 to-accent/40 blur-sm" />
            </div>
          </div>

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -8, rotateY: 3, rotateX: -3 }}
                className="relative glass-panel rounded-3xl p-8 border border-white/10 group overflow-hidden cursor-default"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Glow background */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${step.color}25 0%, transparent 70%)`,
                  }}
                />

                {/* Animated border gradient */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}33, transparent 60%)`,
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `${step.color}22`,
                        border: `1px solid ${step.color}55`,
                        boxShadow: `0 0 20px ${step.color}22`,
                      }}
                    >
                      <Icon className="w-8 h-8" style={{ color: step.color }} />
                    </div>
                    <span
                      className="font-display font-black text-5xl opacity-20 group-hover:opacity-40 transition-opacity"
                      style={{ color: step.color }}
                    >
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>

                {/* Bottom glow line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${step.color}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
