import { motion } from "framer-motion";
import { Users, MessageCircle, Globe, Heart, ArrowRight, Sparkles, Github, Twitter, Youtube } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Link } from "wouter";

const stats = [
  { icon: Users, value: "127,849+", label: "Active Members", accent: "#ffb780" },
  { icon: Globe, value: "85+", label: "Countries", accent: "#ffb1c1" },
  { icon: MessageCircle, value: "12,450+", label: "Daily Conversations", accent: "#ff8906" },
  { icon: Heart, value: "98%", label: "Satisfaction Rate", accent: "#ffb780" },
];

const channels = [
  { name: "#general", desc: "General discussion and introductions", members: "24,320" },
  { name: "#trading-signals", desc: "Real-time trading and signal analysis", members: "18,450" },
  { name: "#ai-content", desc: "AI content creation strategies", members: "15,200" },
  { name: "#video-monetization", desc: "YouTube, TikTok, and Shorts tips", members: "12,800" },
  { name: "#beginner-help", desc: "Get started with your first method", members: "22,100" },
  { name: "#success-stories", desc: "Share your wins and milestones", members: "10,600" },
];

export default function Community() {
  return (
    <PageLayout>
      <section className="relative py-32 px-6" style={{ paddingTop: 200 }}>
        <div className="absolute top-1/3 left-0 pointer-events-none rounded-full" style={{ width: 500, height: 500, background: "rgba(255,177,193,0.07)", filter: "blur(130px)" }} />

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="uppercase mb-4" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.1em", color: "#ffb780" }}>
              Community
            </p>
            <h1 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(40px,6vw,72px)", letterSpacing: "-0.03em", color: "#fffffe", lineHeight: 1.1 }}>
              Join the{" "}<span className="text-gradient-primary">EarnX</span> Community
            </h1>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 16, color: "#a7a9be", marginTop: 12, maxWidth: 600, margin: "12px auto 0" }}>
              Connect with thousands of creators, investors, and earners. Share strategies, get support, and grow together.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="rounded-[20px] p-6 text-center"
                  style={{ background: "rgba(32,30,40,0.6)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: `${s.accent}22`, border: `1px solid ${s.accent}44` }}>
                    <Icon size={18} style={{ color: s.accent }} />
                  </div>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 26, color: "#fffffe", marginBottom: 4 }}>{s.value}</div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 14, color: "#a7a9be" }}>{s.label}</div>
                </motion.div>
              );
            })}
          </div>

          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 28, color: "#fffffe", marginBottom: 24, textAlign: "center" }}>
              Active <span className="text-gradient-primary">Channels</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {channels.map((ch, i) => (
                <motion.div
                  key={ch.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-[16px] p-5 cursor-pointer transition-all duration-200"
                  style={{ background: "rgba(32,30,40,0.6)", border: "1px solid rgba(255,255,255,0.07)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,183,128,0.3)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"; }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 14, color: "#ffb780", fontWeight: 500 }}>{ch.name}</h3>
                    <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, color: "#a7a9be" }}>{ch.members} online</span>
                  </div>
                  <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 14, color: "#a7a9be" }}>{ch.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[24px] p-10 text-center" style={{ background: "rgba(22,22,26,0.8)", backdropFilter: "blur(40px)", border: "1px solid rgba(255,255,255,0.09)" }}>
            <Sparkles size={32} style={{ color: "#ffb780", margin: "0 auto 16px" }} />
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 24, color: "#fffffe", marginBottom: 8 }}>Ready to Join?</h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 15, color: "#a7a9be", marginBottom: 24, maxWidth: 500, margin: "0 auto 24px" }}>
              Sign up free and get instant access to our entire community, premium channels, and expert mentors.
            </p>
            <Link href="/get-started">
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="btn-magnetic rounded-full font-body font-bold" style={{ padding: "14px 36px", fontSize: 15, color: "#fffffe", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                Join the Community <ArrowRight size={16} className="inline" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
