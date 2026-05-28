import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Chen",
    role: "Content Creator",
    location: "San Francisco, CA",
    income: "$12,000",
    period: "in 4 months",
    quote: "EarnX completely changed how I think about income. I went from making $800/month to over $3k consistently within my first 90 days.",
    avatar: "AC",
    color: "#ff8906",
    stars: 5,
  },
  {
    name: "Priya Sharma",
    role: "Crypto Investor",
    location: "London, UK",
    income: "$31,500",
    period: "in 6 months",
    quote: "The AI investing tools on EarnX are unlike anything I've used. Portfolio grew 240% using the algorithmic signals combined with my own research.",
    avatar: "PS",
    color: "#f25f4c",
    stars: 5,
  },
  {
    name: "Marcus Williams",
    role: "Freelance Developer",
    location: "Austin, TX",
    income: "$8,200",
    period: "in 2 months",
    quote: "The freelancing modules helped me position my services 3x higher. Clients are coming to me now instead of the other way around.",
    avatar: "MW",
    color: "#e53170",
    stars: 5,
  },
  {
    name: "Sofia Torres",
    role: "YouTube Automator",
    location: "Miami, FL",
    income: "$22,700",
    period: "in 5 months",
    quote: "I run 4 faceless YouTube channels now. EarnX gave me the exact system. Pure passive income while I sleep.",
    avatar: "ST",
    color: "#ff8906",
    stars: 5,
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const t = testimonials[current];

  return (
    <section className="py-24 px-4 relative" id="success-stories">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full filter blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">Real Results</p>
          <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-sweep">
              Success
            </span>{" "}
            Stories
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -40, scale: 0.97 }}
              transition={{ duration: 0.4 }}
              className="glass-panel rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden"
            >
              {/* Background glow */}
              <div
                className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full filter blur-[100px] opacity-20"
                style={{ background: t.color }}
              />

              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                {/* Left — Avatar + info */}
                <div className="flex flex-col items-center md:items-start gap-4 shrink-0">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center font-display font-black text-2xl text-white"
                    style={{
                      background: `linear-gradient(135deg, ${t.color}88, ${t.color}44)`,
                      border: `2px solid ${t.color}66`,
                      boxShadow: `0 0 30px ${t.color}44`,
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div className="text-center md:text-left">
                    <div className="font-display font-bold text-white text-lg">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{t.location}</div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" style={{ color: t.color }} />
                    ))}
                  </div>
                </div>

                {/* Right — Quote + income */}
                <div className="flex-1">
                  <div
                    className="inline-flex items-baseline gap-2 px-5 py-3 rounded-2xl mb-6"
                    style={{ background: `${t.color}22`, border: `1px solid ${t.color}44` }}
                  >
                    <span className="font-display font-black text-3xl" style={{ color: t.color }}>
                      {t.income}
                    </span>
                    <span className="text-sm text-muted-foreground">{t.period}</span>
                  </div>
                  <blockquote className="text-lg md:text-xl text-white/90 leading-relaxed font-light italic">
                    "{t.quote}"
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 glass-panel rounded-full border border-white/10 flex items-center justify-center text-white hover:border-primary/50 hover:text-primary transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    background: i === current ? t.color : "rgba(255,255,255,0.2)",
                    width: i === current ? "24px" : "8px",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 glass-panel rounded-full border border-white/10 flex items-center justify-center text-white hover:border-primary/50 hover:text-primary transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
