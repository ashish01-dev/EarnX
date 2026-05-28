import { motion } from "framer-motion";
import { Lock, Eye, Key, Server, FileCheck, AlertTriangle, CheckCircle, Shield } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

const features = [
  { icon: Lock, title: "End-to-End Encryption", desc: "All data transmitted between your device and our servers is encrypted using TLS 1.3 protocol, ensuring no third party can intercept your information." },
  { icon: Eye, title: "Privacy First", desc: "We never sell your personal data. Your information is used solely to provide and improve our services, with strict access controls." },
  { icon: Key, title: "Two-Factor Authentication", desc: "Protect your account with 2FA support via authenticator apps, SMS, or hardware security keys for an additional layer of security." },
  { icon: Server, title: "Secure Infrastructure", desc: "Our infrastructure runs on AWS with SOC 2 compliance, regular penetration testing, and 24/7 security monitoring." },
  { icon: FileCheck, title: "Regular Audits", desc: "Independent third-party security audits are conducted quarterly to identify and address potential vulnerabilities." },
  { icon: AlertTriangle, title: "Fraud Detection", desc: "AI-powered fraud detection systems monitor transactions in real-time to prevent unauthorized activity and protect user funds." },
];

export default function Security() {
  return (
    <PageLayout>
      <section className="relative py-32 px-6" style={{ paddingTop: 200 }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full" style={{ width: 600, height: 400, background: "rgba(255,137,6,0.06)", filter: "blur(140px)" }} />

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(74,222,128,0.15)", border: "1px solid rgba(74,222,128,0.3)" }}>
              <Shield size={28} style={{ color: "#4ade80" }} />
            </div>
            <h1 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(36px,5vw,56px)", letterSpacing: "-0.03em", color: "#fffffe" }}>
              <span className="text-gradient-primary">Security</span> at EarnX
            </h1>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 16, color: "#a7a9be", marginTop: 12, maxWidth: 500, margin: "12px auto 0" }}>
              Your security is our foundation. We implement industry-leading measures to protect your data and earnings.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5 mb-16">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="rounded-[20px] p-6 flex gap-4"
                  style={{ background: "rgba(32,30,40,0.6)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(32,30,40,0.8)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <Icon size={22} style={{ color: "#ffb780" }} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 17, color: "#fffffe", marginBottom: 6 }}>{f.title}</h3>
                    <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 14, color: "#a7a9be", lineHeight: "22px" }}>{f.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[20px] p-8" style={{ background: "rgba(74,222,128,0.05)", border: "1px solid rgba(74,222,128,0.2)" }}>
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle size={20} style={{ color: "#4ade80" }} />
              <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 20, color: "#4ade80" }}>Our Commitment</h2>
            </div>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 15, color: "#a7a9be", lineHeight: "24px" }}>
              EarnX is committed to maintaining the highest standards of security. We continuously update our practices to stay ahead of emerging threats. If you discover a security vulnerability, please report it to security@earnx.io. We offer bug bounties for verified reports.
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
