import { motion } from "framer-motion";
import { BookOpen, Hammer, BadgeDollarSign } from "lucide-react";

const steps = [
  { icon: BookOpen, step: "01", title: "Learn", desc: "Access expert-curated courses, AI-powered guides, and live insights across every earning category.", accent: "#ffb780" },
  { icon: Hammer, step: "02", title: "Build", desc: "Use our premium tools to create income streams — from automated portfolios to monetized content pipelines.", accent: "#ffb1c1" },
  { icon: BadgeDollarSign, step: "03", title: "Earn", desc: "Watch your earnings compound in real time. Scale what works. Unlock your next income level.", accent: "#ff8906" },
];

export function HowItWorks() {
  return (
    <section className="relative py-32 px-6" id="how-it-works">
      <div className="container mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="uppercase mb-4" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.1em", color: "#ffb780" }}>The Process</p>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(32px,5vw,56px)", letterSpacing: "-0.03em", color: "#fffffe", lineHeight: 1.1 }}>
            How <span className="text-gradient-primary">EarnX Works</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {[0, 1].map((i) => (
            <div key={i} className="hidden md:block absolute top-14" style={{
              left: `${33.3 * (i + 1)}%`, width: "16%", height: 1,
              background: "linear-gradient(90deg, rgba(255,183,128,0.5), rgba(255,177,193,0.5))",
              transform: "translateX(-50%)",
            }} />
          ))}

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.step}
                initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.14 }} whileHover={{ y: -8, scale: 1.02 }}
                className="hover-reflection relative rounded-[24px] p-8 flex flex-col gap-5 cursor-default"
                style={{
                  background: "rgba(22,22,26,0.8)", backdropFilter: "blur(40px)",
                  border: "1px solid transparent", backgroundImage: "linear-gradient(rgba(22,22,26,0.8), rgba(22,22,26,0.8))",
                  backgroundOrigin: "padding-box", boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
                  transition: "box-shadow 0.3s, border-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.boxShadow = `0 0 40px ${step.accent}22, 0 8px 40px rgba(0,0,0,0.5)`;
                  (e.target as HTMLElement).style.borderColor = `${step.accent}44`;
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.boxShadow = "0 8px 40px rgba(0,0,0,0.5)";
                  (e.target as HTMLElement).style.borderColor = "transparent";
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300" style={{ background: "rgba(32,30,40,0.8)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <Icon size={24} style={{ color: step.accent }} />
                  </div>
                  <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 40, color: step.accent, opacity: 0.18, lineHeight: 1 }}>{step.step}</span>
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 24, letterSpacing: "-0.02em", color: "#fffffe", marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 15, color: "#a7a9be", lineHeight: "24px" }}>{step.desc}</p>
                </div>
                <div className="absolute bottom-0 left-[20%] right-[20%] h-[2px] rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: `linear-gradient(90deg, transparent, ${step.accent}, transparent)` }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
