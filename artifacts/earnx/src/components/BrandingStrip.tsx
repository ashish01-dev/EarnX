import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function BrandingStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <section ref={ref} className="py-24 overflow-hidden bg-background relative flex items-center justify-center border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <motion.div style={{ x, opacity }} className="whitespace-nowrap flex items-center">
        <h2 className="text-[15vw] font-display font-black leading-none tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-sweep select-none opacity-80 mix-blend-lighten filter drop-shadow-[0_0_30px_rgba(255,137,6,0.3)]">
          EARNX EARNX EARNX EARNX EARNX
        </h2>
      </motion.div>
      
      {/* Overlay gradient to fade edges */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background pointer-events-none"></div>
    </section>
  );
}
