import { motion } from "framer-motion";
import { Twitter, Github, Instagram, Youtube, Send } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

const footerLinks = {
  Platform: [
    { label: "Invest", path: "/methods" },
    { label: "Instant Earn", path: "/methods" },
    { label: "Video Monetization", path: "/methods" },
    { label: "Leaderboard", path: "/leaderboard" },
    { label: "Community", path: "/community" },
  ],
  Resources: [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Earning Methods", path: "/methods" },
    { label: "Success Stories", path: "/" },
    { label: "Get Started", path: "/get-started" },
    { label: "Security", path: "/security" },
  ],
  Legal: [
    { label: "Privacy", path: "/privacy" },
    { label: "Terms", path: "/terms" },
    { label: "Security", path: "/security" },
    { label: "Contact", path: "mailto:hello@earnx.io" },
  ],
};

const socials = [
  { icon: Twitter,   label: "Twitter",   hover: "#1da1f2", url: "https://twitter.com/earnx" },
  { icon: Youtube,   label: "YouTube",   hover: "#ff4444", url: "https://youtube.com/@earnx" },
  { icon: Instagram, label: "Instagram", hover: "#ffb1c1", url: "https://instagram.com/earnx" },
  { icon: Github,    label: "GitHub",    hover: "#a7a9be", url: "https://github.com/earnx" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [, setLocation] = useLocation();

  const handleNav = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    if (path.startsWith("mailto:")) { window.location.href = path; return; }
    setLocation(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden pt-32 pb-12 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.07)", background: "rgba(16,15,22,0.95)" }}>
      <div className="absolute bottom-0 left-0 w-full text-center pointer-events-none select-none overflow-hidden" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(60px,15vw,200px)", letterSpacing: "-0.04em", color: "rgba(255,255,255,0.025)", lineHeight: 1, whiteSpace: "nowrap", zIndex: 0 }}>
        CREATE WEALTH
      </div>
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="absolute rounded-full animate-blob pointer-events-none" style={{
          width: 40 + i * 18, height: 40 + i * 18,
          background: ["#ffb780", "#ffb1c1", "#ff8906"][i % 3],
          left: `${8 + i * 18}%`, top: `${15 + (i % 3) * 25}%`,
          opacity: 0.06, filter: "blur(16px)", animationDelay: `${i * 0.7}s`,
        }} />
      ))}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,183,128,0.4), transparent)" }} />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-20">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-sm">
            <div onClick={(e) => handleNav(e, "/")} className="cursor-pointer" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 32, letterSpacing: "-0.03em", background: "linear-gradient(to right, #ffb780, #ffb1c1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: 12 }}>
              EarnX
            </div>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 15, color: "#a7a9be", lineHeight: "24px", marginBottom: 20 }}>
              Engineering Wealth for the Creator Economy. The ultimate terminal to turn your digital presence into a tangible asset.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.12, y: -2 }}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                    style={{ background: "rgba(32,30,40,0.7)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.08)", color: "#a7a9be" }}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.color = s.hover; (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.18)"; }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#a7a9be"; (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="w-full max-w-sm">
            <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 20, color: "#fffffe", marginBottom: 6 }}>Stay ahead of the curve</h3>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 14, color: "#a7a9be", marginBottom: 16, lineHeight: "22px" }}>
              Weekly alpha drops, new method guides, and exclusive earning tips.
            </p>
            {subscribed ? (
              <div className="rounded-2xl px-5 py-4 text-center" style={{ background: "rgba(255,183,128,0.1)", border: "1px solid rgba(255,183,128,0.3)", color: "#ffb780", fontSize: 14, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                You're on the list. Welcome to EarnX.
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); if (email) { setSubscribed(true); setEmail(""); } }} className="flex gap-2">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required
                  className="flex-1 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                  style={{ background: "rgba(32,30,40,0.7)", border: "1px solid rgba(255,255,255,0.1)", color: "#fffffe", fontFamily: "'Plus Jakarta Sans',sans-serif" }}
                  onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,183,128,0.5)"; }}
                  onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
                />
                <motion.button type="submit" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="btn-magnetic rounded-xl flex items-center gap-1.5 shrink-0 cursor-pointer"
                  style={{ padding: "10px 18px", color: "#fffffe", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 14, fontWeight: 600 }}
                >
                  <Send size={14} /> Join
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {Object.entries(footerLinks).map(([cat, items], ci) => (
            <motion.div key={cat} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: ci * 0.08 }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.1em", color: "#fffffe", fontWeight: 500, marginBottom: 16, textTransform: "uppercase" }}>
                {cat}
              </div>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a href={item.path} onClick={(e) => handleNav(e, item.path)}
                      style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 15, color: "#a7a9be", transition: "color 0.2s", cursor: "pointer" }}
                      onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#ffb780"; }}
                      onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#a7a9be"; }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, color: "#a7a9be" }}>
            &copy; {new Date().getFullYear()} EarnX. Engineering Wealth for the Creator Economy.
          </p>
          <div className="flex gap-6">
            {[{ label: "Privacy Policy", path: "/privacy" }, { label: "Terms", path: "/terms" }, { label: "Security", path: "/security" }].map((item) => (
              <a key={item.label} href={item.path} onClick={(e) => handleNav(e, item.path)}
                style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, color: "#a7a9be", transition: "color 0.2s", cursor: "pointer" }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#ffb780"; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#a7a9be"; }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
