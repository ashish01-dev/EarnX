import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  { name: "Alex Chen", role: "Content Creator", location: "San Francisco, CA", income: "$12,000", period: "in 4 months",
    quote: "EarnX completely changed how I think about income. I went from making $800/month to over $3k consistently within my first 90 days.",
    avatar: "AC", accent: "#ffb780", stars: 5 },
  { name: "Priya Sharma", role: "Crypto Investor", location: "London, UK", income: "$31,500", period: "in 6 months",
    quote: "The AI investing tools on EarnX are unlike anything I've used. My portfolio grew 240% using the algorithmic signals combined with my own research.",
    avatar: "PS", accent: "#ffb1c1", stars: 5 },
  { name: "Marcus Williams", role: "Freelance Developer", location: "Austin, TX", income: "$8,200", period: "in 2 months",
    quote: "The freelancing modules helped me position my services 3x higher. Clients are coming to me now instead of the other way around.",
    avatar: "MW", accent: "#ff8906", stars: 5 },
  { name: "Sofia Torres", role: "YouTube Automator", location: "Miami, FL", income: "$22,700", period: "in 5 months",
    quote: "I run 4 faceless YouTube channels now. EarnX gave me the exact system. Pure passive income while I sleep.",
    avatar: "ST", accent: "#ffb780", stars: 5 },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  return (
    <section className="relative py-32 px-6" id="success-stories">
      <div className="absolute top-1/2 left-0 pointer-events-none rounded-full -translate-y-1/2" style={{ width: 500, height: 400, background: "rgba(255,177,193,0.07)", filter: "blur(130px)" }} />
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="uppercase mb-4" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.1em", color: "#ffb780" }}>Real Results</p>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(32px,5vw,56px)", letterSpacing: "-0.03em", color: "#fffffe", lineHeight: 1.1 }}>
            <span className="text-gradient-primary">Success</span> Stories
          </h2>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={current} initial={{ opacity: 0, x: 40, scale: 0.97 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: -40, scale: 0.97 }} transition={{ duration: 0.38 }}
            className="relative rounded-[24px] overflow-hidden" style={{ background: "rgba(22,22,26,0.8)", backdropFilter: "blur(40px)", border: "1px solid rgba(255,255,255,0.09)", borderTop: "1px solid rgba(255,255,255,0.18)", padding: "40px 48px" }}
          >
            <div className="absolute top-0 right-0 pointer-events-none rounded-full" style={{ width: 300, height: 300, background: t.accent, opacity: 0.06, filter: "blur(80px)", transform: "translate(30%, -30%)" }} />
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="flex flex-col items-center md:items-start gap-4 shrink-0">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center font-display font-black text-2xl" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, color: "#fffffe", background: `linear-gradient(135deg, ${t.accent}80, ${t.accent}40)`, border: `2px solid ${t.accent}66`, boxShadow: `0 0 30px ${t.accent}33` }}>
                  {t.avatar}
                </div>
                <div className="text-center md:text-left">
                  <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 17, color: "#fffffe" }}>{t.name}</div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 14, color: "#a7a9be" }}>{t.role}</div>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#a7a9be", marginTop: 2, letterSpacing: "0.05em" }}>{t.location}</div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, i) => (<Star key={i} size={14} className="fill-current" style={{ color: t.accent }} />))}
                </div>
              </div>
              <div className="flex-1">
                <div className="inline-flex items-baseline gap-2 px-5 py-3 rounded-2xl mb-6" style={{ background: `${t.accent}18`, border: `1px solid ${t.accent}35` }}>
                  <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 28, color: t.accent, letterSpacing: "-0.02em" }}>{t.income}</span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 14, color: "#a7a9be" }}>{t.period}</span>
                </div>
                <blockquote style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 17, lineHeight: "28px", color: "rgba(255,255,255,0.85)", fontStyle: "italic" }}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-6 mt-8">
          <button onClick={() => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length)}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200"
            style={{ background: "rgba(32,30,40,0.6)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.1)", color: "#fffffe" }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,183,128,0.4)"; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; }}>
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className="h-2 rounded-full transition-all duration-300"
                style={{ width: i === current ? 24 : 8, background: i === current ? t.accent : "rgba(255,255,255,0.2)" }} />
            ))}
          </div>
          <button onClick={() => setCurrent(c => (c + 1) % testimonials.length)}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200"
            style={{ background: "rgba(32,30,40,0.6)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.1)", color: "#fffffe" }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,183,128,0.4)"; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; }}>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
