import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

const sections = [
  { title: "1. Information We Collect", content: "We collect information you provide directly to us, including your name, email address, and payment information when you create an account or use our services. We also automatically collect certain technical information about your device and usage patterns to improve our platform." },
  { title: "2. How We Use Your Information", content: "Your information is used to provide, maintain, and improve our services; process transactions; send you technical notices and support messages; and communicate with you about our products and features. We never sell your personal information to third parties." },
  { title: "3. Data Security", content: "We implement industry-standard encryption protocols (AES-256, TLS 1.3) to protect your data in transit and at rest. Our systems are regularly audited and penetration tested by independent security firms." },
  { title: "4. Data Retention", content: "We retain your personal data for as long as your account is active or as needed to provide you services. You may request deletion of your data at any time by contacting our support team." },
  { title: "5. Third-Party Services", content: "We may integrate with trusted third-party services for payment processing and analytics. These partners are contractually bound to protect your data and comply with applicable privacy laws." },
  { title: "6. Your Rights", content: "You have the right to access, correct, update, or delete your personal information. You may also object to or restrict certain processing of your data. Contact us at privacy@earnx.io to exercise these rights." },
  { title: "7. Cookies", content: "We use essential cookies to operate our platform and optional analytics cookies to improve user experience. You can manage cookie preferences in your browser settings." },
  { title: "8. Changes to This Policy", content: "We may update this privacy policy from time to time. We will notify you of material changes via email or through our platform. Continued use of our services after changes constitutes acceptance of the updated policy." },
];

export default function Privacy() {
  return (
    <PageLayout>
      <section className="relative py-32 px-6" style={{ paddingTop: 200 }}>
        <div className="container mx-auto max-w-3xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(255,183,128,0.15)", border: "1px solid rgba(255,183,128,0.3)" }}>
              <Shield size={28} style={{ color: "#ffb780" }} />
            </div>
            <h1 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(36px,5vw,56px)", letterSpacing: "-0.03em", color: "#fffffe" }}>
              Privacy <span className="text-gradient-primary">Policy</span>
            </h1>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 14, color: "#a7a9be", marginTop: 8 }}>Last updated: January 2026</p>
          </motion.div>

          <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
            {sections.map((section, i) => (
              <motion.div key={section.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="mb-10">
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
