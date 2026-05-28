import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { ArrowRight, TrendingUp, Bot, PlayCircle } from "lucide-react";
import { useLocation } from "wouter";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const { left, top, width, height } = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${((e.clientX - left) / width) * 100}%`);
      el.style.setProperty("--my", `${((e.clientY - top) / height) * 100}%`);
    };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden" style={{ paddingTop: 160, paddingBottom: 80 }}>
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{ background: "radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(255,137,6,0.08), transparent 60%)" }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-start gap-7">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-gradient"
              style={{ background: "rgba(32,30,40,0.6)", backdropFilter: "blur(20px)" }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#ff8906" }} />
              <span className="font-mono-label uppercase" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: "0.1em", color: "#ffb780" }}>
                #1 AI Powered Money Platform
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 1.05, letterSpacing: "-0.03em", color: "#fffffe" }}
            >
              Turn Skills Into{" "}
              <span className="text-gradient-primary">Income.</span>
              <br />Earn Smarter.<br />Faster.<br />Limitlessly.
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 18, lineHeight: "28px", color: "#a7a9be", maxWidth: 520 }}
            >
              Deploy AI-driven strategies, leverage high-yield micro-investments, and monetize your digital presence. EarnX is the definitive terminal for the modern creator economy.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap items-center gap-4">
              <motion.button whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                onClick={() => setLocation("/get-started")}
                className="btn-magnetic rounded-full flex items-center gap-2 font-body font-bold cursor-pointer"
                style={{ padding: "14px 32px", fontSize: 16, color: "#fffffe", fontFamily: "'Plus Jakarta Sans',sans-serif" }}
              >
                Start Earning <ArrowRight size={18} />
              </motion.button>
              <motion.button whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}
                onClick={() => setLocation("/methods")}
                className="rounded-full flex items-center gap-2 font-body font-medium transition-all duration-300 cursor-pointer"
                style={{ padding: "13px 28px", fontSize: 16, color: "#fffffe", fontFamily: "'Plus Jakarta Sans',sans-serif", background: "rgba(32,30,40,0.6)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.12)" }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,183,128,0.4)"; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)"; }}
              >
                <PlayCircle size={18} style={{ color: "#ffb780" }} />
                View Methods
              </motion.button>
            </motion.div>
          </div>

          {/* Dashboard Mockup */}
          <motion.div initial={{ opacity: 0, scale: 0.92, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3 }} className="relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-full pointer-events-none" style={{ background: "rgba(255,137,6,0.18)", filter: "blur(100px)", transform: "scale(0.8)" }} />
            <div className="glass-panel-heavy border-gradient animate-float relative z-10 w-full max-w-md" style={{ borderRadius: 24, padding: 24, boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }}>
              <div className="flex items-center justify-between pb-5 mb-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(32,30,40,0.8)", border: "1px solid rgba(255,255,255,0.12)" }}>
                    <span style={{ fontSize: 18 }}>💳</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.1em", color: "#a7a9be", marginBottom: 2 }}>LIVE EARNINGS</div>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 24, color: "#fffffe", lineHeight: 1 }}>$12,450.00</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 rounded-full px-3 py-1" style={{ background: "rgba(255,137,6,0.2)", fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#ffb780", fontWeight: 700, letterSpacing: "0.05em" }}>
                  <TrendingUp size={12} /> +14.2%
                </div>
              </div>

              <div className="relative overflow-hidden mb-5" style={{ height: 160, borderRadius: 12, background: "#1c1a24", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="absolute bottom-0 left-0 w-full" style={{ height: "60%", background: "linear-gradient(to top, rgba(255,137,6,0.25), transparent)" }} />
                <svg className="absolute bottom-0 left-0 w-full" height="80%" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M0,100 L0,50 Q25,70 50,30 T100,10 L100,100 Z" fill="rgba(255,137,6,0.08)" stroke="#ff8906" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                </svg>
                <div className="absolute top-1/4 right-1/4 px-3 py-2 rounded-xl" style={{ background: "rgba(32,30,40,0.85)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.1)", fontSize: 13, color: "#fffffe" }}>
                  <span style={{ color: "#ffb780", fontWeight: 700 }}>$420</span> today
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.1em", color: "#a7a9be", marginBottom: 2 }}>RECENT ACTIVITY</div>
                {[
                  { icon: Bot, label: "AI Content Batch", amount: "+$85.00", color: "#ffb780" },
                  { icon: PlayCircle, label: "YouTube Shorts Ad Rev", amount: "+$12.40", color: "#ffb1c1" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center justify-between rounded-xl px-3 py-2.5 cursor-pointer transition-colors"
                      style={{ background: "rgba(32,30,40,0.6)", border: "1px solid transparent" }}
                      onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "rgba(42,41,51,0.7)"; (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
                      onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "rgba(32,30,40,0.6)"; (e.target as HTMLElement).style.borderColor = "transparent"; }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${item.color}22` }}>
                          <Icon size={16} style={{ color: item.color }} />
                        </div>
                        <span style={{ fontSize: 14, color: "#fffffe" }}>{item.label}</span>
                      </div>
                      <span style={{ fontWeight: 700, fontSize: 14, color: item.color }}>{item.amount}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
