import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Hexagon, Sparkles } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Methods", "Tools", "Success Stories", "Leaderboard", "Community"];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4" : "py-6"}`}
    >
      <div className="container mx-auto px-4">
        <div className={`mx-auto max-w-6xl glass-panel rounded-full px-6 py-3 flex items-center justify-between transition-all duration-500 border relative overflow-hidden ${scrolled ? "bg-background/80 shadow-2xl shadow-primary/10 border-primary/20" : "border-white/10"}`}>
          {/* Animated glow on edge */}
          <div className="absolute inset-0 rounded-full opacity-20 bg-gradient-to-r from-primary via-secondary to-accent animate-sweep"></div>
          
          <div className="relative flex items-center gap-2 z-10">
            <div className="relative w-8 h-8 flex items-center justify-center bg-gradient-to-br from-primary to-accent rounded-lg">
              <Hexagon className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">EarnX</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 z-10">
            {links.map((link) => (
              <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-sm font-medium text-muted-foreground hover:text-white transition-colors duration-200">
                {link}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4 z-10">
            <button className="text-sm font-medium text-white hover:text-primary transition-colors">Sign In</button>
            <button className="relative group px-6 py-2 rounded-full overflow-hidden">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-secondary to-accent group-hover:scale-105 transition-transform duration-300"></span>
              <span className="relative text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Get Started
              </span>
            </button>
          </div>

          <button className="md:hidden relative z-10 text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 glass-panel rounded-2xl p-6 flex flex-col gap-4 border border-white/10 shadow-2xl md:hidden z-40"
          >
            {links.map((link) => (
              <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-lg font-medium text-white" onClick={() => setMobileOpen(false)}>
                {link}
              </a>
            ))}
            <div className="h-px w-full bg-white/10 my-2"></div>
            <button className="w-full text-left text-lg font-medium text-white">Sign In</button>
            <button className="w-full bg-primary text-white font-bold py-3 rounded-xl mt-2">Get Started</button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
