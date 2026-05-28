import { motion } from "framer-motion";
import { Twitter, Github, Instagram, Youtube, Send, Hexagon } from "lucide-react";
import { useState } from "react";

const links = {
  Platform: ["How It Works", "Earning Methods", "Tools", "Leaderboard", "Community"],
  Resources: ["Blog", "Guides", "Webinars", "Success Stories", "API Docs"],
  Company: ["About", "Careers", "Press", "Partners", "Contact"],
};

const socials = [
  { icon: Twitter, label: "Twitter", color: "#1da1f2" },
  { icon: Youtube, label: "YouTube", color: "#ff0000" },
  { icon: Instagram, label: "Instagram", color: "#e53170" },
  { icon: Github, label: "GitHub", color: "#a7a9be" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/5 pt-24 pb-12 px-4">
      {/* Huge faded background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span
          className="font-display font-black text-[20vw] leading-none select-none tracking-tighter"
          style={{ color: "rgba(255,255,255,0.02)" }}
        >
          CREATE WEALTH
        </span>
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-blob pointer-events-none"
          style={{
            width: `${40 + i * 20}px`,
            height: `${40 + i * 20}px`,
            background: ["#ff8906", "#f25f4c", "#e53170"][i % 3] + "20",
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 2) * 40}%`,
            filter: "blur(20px)",
            animationDelay: `${i * 0.8}s`,
          }}
        />
      ))}

      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Top — branding + newsletter */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Hexagon className="w-6 h-6 text-white" />
              </div>
              <span className="font-display font-black text-3xl text-white">EarnX</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The world's most advanced platform for modern income generation. Turn any skill into scalable revenue.
            </p>
            <div className="flex gap-4">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.label}
                    href="#"
                    whileHover={{ scale: 1.15, y: -2 }}
                    className="w-10 h-10 glass-panel rounded-xl border border-white/10 flex items-center justify-center transition-all duration-200 hover:border-white/30"
                    style={{ color: "#a7a9be" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = s.color)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#a7a9be")}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-sm"
          >
            <h3 className="font-display font-bold text-white text-xl mb-2">Stay ahead of the curve</h3>
            <p className="text-sm text-muted-foreground mb-5">Weekly alpha drops, new method guides, and exclusive earning tips.</p>
            {subscribed ? (
              <div className="px-6 py-4 rounded-2xl bg-primary/20 border border-primary/40 text-primary font-medium text-center">
                You're on the list. Welcome to EarnX.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-3 bg-primary text-black rounded-xl font-bold flex items-center gap-2 shrink-0 hover:bg-primary/90 transition-colors text-sm"
                >
                  <Send className="w-4 h-4" />
                  Join
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {Object.entries(links).map(([category, items], ci) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
            >
              <h4 className="font-display font-bold text-white mb-5">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group flex items-center gap-1">
                      {item}
                      <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 text-primary">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 EarnX. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a key={item} href="#" className="text-xs text-muted-foreground hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
