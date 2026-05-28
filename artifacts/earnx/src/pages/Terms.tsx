import { motion } from "framer-motion";
import { Scale } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

export default function Terms() {
  return (
    <PageLayout>
      <section className="relative py-32 px-6" style={{ paddingTop: 200 }}>
        <div className="container mx-auto max-w-3xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(255,183,128,0.15)", border: "1px solid rgba(255,183,128,0.3)" }}>
              <Scale size={28} style={{ color: "#ffb780" }} />
            </div>
            <h1 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(36px,5vw,56px)", letterSpacing: "-0.03em", color: "#fffffe" }}>
              Terms of <span className="text-gradient-primary">Service</span>
            </h1>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 14, color: "#a7a9be", marginTop: 8 }}>Last updated: January 2026</p>
          </motion.div>

          <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
            {[
              { title: "1. Acceptance of Terms", content: "By accessing or using EarnX, you agree to be bound by these Terms of Service. If you do not agree, do not use our services. We reserve the right to modify these terms at any time with notice to users." },
              { title: "2. Account Registration", content: "You must be at least 18 years old to create an account. You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account. Notify us immediately of any unauthorized use." },
              { title: "3. Platform Services", content: "EarnX provides a platform for users to discover and implement various earning methods. We do not guarantee specific earnings or outcomes. Results vary based on effort, skill, and market conditions." },
              { title: "4. User Conduct", content: "Users agree not to: engage in fraudulent activity, manipulate the platform, violate any applicable laws, infringe on intellectual property rights, or distribute harmful software. Violations may result in account termination." },
              { title: "5. Payments & Fees", content: "Earnings are processed through our secure payment system. Standard processing fees apply as disclosed during transactions. We reserve the right to adjust fees with 30 days notice." },
              { title: "6. Intellectual Property", content: "All content, trademarks, and intellectual property on the EarnX platform are owned by EarnX or licensed from third parties. Users retain ownership of their original content posted to the platform." },
              { title: "7. Limitation of Liability", content: "EarnX is provided 'as is' without warranties of any kind. We are not liable for indirect, incidental, or consequential damages arising from use of our platform. Our total liability is limited to the amount paid by you in the preceding 12 months." },
              { title: "8. Termination", content: "Either party may terminate this agreement at any time. Upon termination, your access to the platform will be revoked. Outstanding payments will be settled according to our standard processing schedule." },
              { title: "9. Governing Law", content: "These terms are governed by the laws of the State of Delaware. Any disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association." },
              { title: "10. Contact", content: "For questions about these terms, contact us at legal@earnx.io. We aim to respond to all inquiries within 5 business days." },
            ].map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="mb-10"
              >
                <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 22, color: "#ffb780", marginBottom: 12 }}>{section.title}</h2>
                <p style={{ fontSize: 15, lineHeight: "26px", color: "#a7a9be" }}>{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
