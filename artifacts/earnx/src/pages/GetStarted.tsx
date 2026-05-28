import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, BookOpen, Hammer, BadgeDollarSign, Mail, Lock, User, Sparkles } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { useState } from "react";

const steps = [
  { icon: BookOpen, title: "Learn", desc: "Access expert-curated courses and AI-powered guides across every earning category." },
  { icon: Hammer, title: "Build", desc: "Use our premium tools to create income streams and automated portfolios." },
  { icon: BadgeDollarSign, title: "Earn", desc: "Watch your earnings compound in real time. Scale what works." },
];

export default function GetStarted() {
  const [step, setStep] = useState(1);

  return (
    <PageLayout>
      <section className="relative py-32 px-6" style={{ paddingTop: 200 }}>
        <div className="absolute top-1/3 left-0 pointer-events-none rounded-full" style={{ width: 500, height: 500, background: "rgba(255,183,128,0.07)", filter: "blur(130px)" }} />
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="uppercase mb-4" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.1em", color: "#ffb780" }}>Get Started</p>
            <h1 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(36px,5vw,56px)", letterSpacing: "-0.03em", color: "#fffffe", lineHeight: 1.1 }}>
              Start Your <span className="text-gradient-primary">Earning</span> Journey
            </h1>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 16, color: "#a7a9be", marginTop: 12, maxWidth: 500, margin: "12px auto 0" }}>
              Join thousands already earning with EarnX. Create your free account in under 2 minutes.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-2" style={{ background: "rgba(32,30,40,0.6)", border: "1px solid rgba(255,255,255,0.1)", fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.1em", color: "#ffb780" }}>
                  <Sparkles size={14} /> FREE TO JOIN
                </div>
                <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 28, color: "#fffffe", marginBottom: 16 }}>Why Join EarnX?</h2>
                <ul className="flex flex-col gap-4">
                  {["Zero upfront cost — start with as little as $10", "AI-powered tools automate your earnings", "Real-time analytics dashboard", "Active community of 127K+ members", "Expert support and weekly training"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={18} style={{ color: "#4ade80", marginTop: 2 }} />
                      <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 15, color: "#a7a9be" }}>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 20, color: "#fffffe", marginBottom: 16 }}>How It Works</h3>
                  <div className="flex flex-col gap-4">
                    {steps.map((s, i) => {
                      const Icon = s.icon;
                      return (
                        <div key={s.title} className="flex items-start gap-4 p-4 rounded-[16px]" style={{ background: "rgba(32,30,40,0.6)", border: "1px solid rgba(255,255,255,0.07)" }}>
                          <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(32,30,40,0.8)", border: "1px solid rgba(255,255,255,0.1)" }}>
                            <Icon size={18} style={{ color: "#ffb780" }} />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#ffb780" }}>STEP 0{i + 1}</span>
                              <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 16, color: "#fffffe" }}>{s.title}</span>
                            </div>
                            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 14, color: "#a7a9be", marginTop: 4 }}>{s.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="rounded-[24px] p-8" style={{ background: "rgba(22,22,26,0.8)", backdropFilter: "blur(40px)", border: "1px solid rgba(255,255,255,0.09)" }}>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 22, color: "#fffffe", marginBottom: 24, textAlign: "center" }}>Create Your Account</h3>
                <div className="flex gap-2 mb-8">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex-1 h-1 rounded-full" style={{ background: s <= step ? "#ffb780" : "rgba(255,255,255,0.1)" }} />
                  ))}
                </div>

                {step === 1 && (
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <label style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, color: "#a7a9be" }}>Full Name</label>
                      <div className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "rgba(32,30,40,0.7)", border: "1px solid rgba(255,255,255,0.1)" }}>
                        <User size={16} style={{ color: "#a7a9be" }} />
                        <input type="text" placeholder="John Doe" className="flex-1 bg-transparent outline-none text-sm" style={{ color: "#fffffe", fontFamily: "'Plus Jakarta Sans',sans-serif" }} />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, color: "#a7a9be" }}>Email Address</label>
                      <div className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "rgba(32,30,40,0.7)", border: "1px solid rgba(255,255,255,0.1)" }}>
                        <Mail size={16} style={{ color: "#a7a9be" }} />
                        <input type="email" placeholder="you@example.com" className="flex-1 bg-transparent outline-none text-sm" style={{ color: "#fffffe", fontFamily: "'Plus Jakarta Sans',sans-serif" }} />
                      </div>
                    </div>
                    <motion.button onClick={() => setStep(2)} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="btn-magnetic rounded-xl font-body font-bold py-3 mt-2" style={{ color: "#fffffe", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 15 }}>
                      Next Step <ArrowRight size={16} className="inline" />
                    </motion.button>
                  </div>
                )}

                {step === 2 && (
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <label style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, color: "#a7a9be" }}>Create Password</label>
                      <div className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "rgba(32,30,40,0.7)", border: "1px solid rgba(255,255,255,0.1)" }}>
                        <Lock size={16} style={{ color: "#a7a9be" }} />
                        <input type="password" placeholder="••••••••" className="flex-1 bg-transparent outline-none text-sm" style={{ color: "#fffffe", fontFamily: "'Plus Jakarta Sans',sans-serif" }} />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, color: "#a7a9be" }}>Confirm Password</label>
                      <div className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "rgba(32,30,40,0.7)", border: "1px solid rgba(255,255,255,0.1)" }}>
                        <Lock size={16} style={{ color: "#a7a9be" }} />
                        <input type="password" placeholder="••••••••" className="flex-1 bg-transparent outline-none text-sm" style={{ color: "#fffffe", fontFamily: "'Plus Jakarta Sans',sans-serif" }} />
                      </div>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <motion.button onClick={() => setStep(1)} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                        className="flex-1 rounded-xl py-3 font-body font-bold text-sm" style={{ background: "rgba(255,255,255,0.08)", color: "#a7a9be", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                        Back
                      </motion.button>
                      <motion.button onClick={() => setStep(3)} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                        className="flex-1 btn-magnetic rounded-xl font-body font-bold py-3 text-sm" style={{ color: "#fffffe", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                        Continue <ArrowRight size={16} className="inline" />
                      </motion.button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(74,222,128,0.15)", border: "1px solid rgba(74,222,128,0.3)" }}>
                      <CheckCircle size={32} style={{ color: "#4ade80" }} />
                    </div>
                    <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 22, color: "#fffffe", marginBottom: 8 }}>Almost Done!</h3>
                    <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 14, color: "#a7a9be", marginBottom: 24 }}>
                      Check your email to verify your account and set your preferences.
                    </p>
                    <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                      className="btn-magnetic rounded-xl font-body font-bold py-3 px-8" style={{ color: "#fffffe", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 15 }}>
                      Complete Setup <ArrowRight size={16} className="inline" />
                    </motion.button>
                  </div>
                )}

                <p className="text-center mt-6" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, color: "#a7a9be" }}>
                  By signing up, you agree to our{" "}
                  <a href="/terms" style={{ color: "#ffb780" }}>Terms</a>{" "}and{" "}
                  <a href="/privacy" style={{ color: "#ffb780" }}>Privacy Policy</a>.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
