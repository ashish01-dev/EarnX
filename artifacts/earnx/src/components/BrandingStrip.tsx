import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function BrandingStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.2, 0.9, 0.9, 0.2]);

  return (
    <section ref={ref} className="relative overflow-hidden flex items-center justify-center" style={{ paddingTop: 64, paddingBottom: 64, borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(90deg, #13121b 0%, transparent 15%, transparent 85%, #13121b 100%)", zIndex: 2 }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent 0%, rgba(255,137,6,0.04) 50%, transparent 100%)" }} />
      <motion.div style={{ x, opacity }} className="whitespace-nowrap relative z-1 select-none">
        <span className="font-display font-extrabold tracking-tighter uppercase animate-sweep" style={{
          fontFamily: "'Syne', sans-serif", fontSize: "clamp(80px, 14vw, 180px)", fontWeight: 800,
          letterSpacing: "-0.04em", lineHeight: 1,
          background: "linear-gradient(135deg, #ffb780 0%, #ffb1c1 40%, #ff8906 70%, #ffb780 100%)",
          backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          backgroundClip: "text", filter: "drop-shadow(0 0 40px rgba(255,183,128,0.25))",
        }}>
          EARNX&nbsp;&nbsp;EARNX&nbsp;&nbsp;EARNX&nbsp;&nbsp;EARNX
        </span>
      </motion.div>
    </section>
  );
}
