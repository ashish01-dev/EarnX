import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";

interface NavLink {
  label: string;
  path: string;
  sectionId?: string;
}

const links: NavLink[] = [
  { label: "Home", path: "/", sectionId: "home" },
  { label: "Methods", path: "/methods", sectionId: "methods" },
  { label: "Tools", path: "/methods" },
  { label: "Success Stories", path: "/", sectionId: "success-stories" },
  { label: "Leaderboard", path: "/leaderboard", sectionId: "leaderboard" },
  { label: "Community", path: "/community" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const handleNavClick = (e: React.MouseEvent, link: NavLink) => {
    e.preventDefault();
    setMobileOpen(false);

    if (location === "/" && link.sectionId) {
      const el = document.getElementById(link.sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    setLocation(link.path);
  };

  const isActive = (link: NavLink) => {
    if (link.path === "/") return location === "/";
    return location.startsWith(link.path);
  };

  return (
    <>
      {/* Desktop */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="hidden md:flex fixed top-6 left-1/2 z-[100] items-center gap-8 -translate-x-1/2"
        style={{
          minWidth: 820,
          justifyContent: "space-between",
          background: scrolled ? "rgba(19,18,27,0.85)" : "rgba(32,30,40,0.6)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: 9999,
          padding: "12px 28px",
          border: "1px solid rgba(255,255,255,0.10)",
          boxShadow: "0 0 24px rgba(255,137,6,0.12)",
          transition: "background 0.3s",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); setLocation("/"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="font-display font-bold tracking-tight cursor-pointer"
          style={{
            fontSize: 24,
            lineHeight: 1,
            background: "linear-gradient(to right, #ffb780, #ffb1c1)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          EarnX
        </a>

        {/* Links */}
        <div className="flex items-center gap-7">
          {links.map((link, i) => {
            const active = isActive(link);
            return (
              <a
                key={link.label}
                href={link.path}
                onClick={(e) => handleNavClick(e, link)}
                className="font-body text-sm transition-colors duration-200 cursor-pointer"
                style={{
                  color: active ? "#ffb780" : "#a7a9be",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: active ? 600 : 400,
                  borderBottom: active ? "2px solid #ffb780" : "none",
                  paddingBottom: active ? 2 : 0,
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#ffb780"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = active ? "#ffb780" : "#a7a9be"; }}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setLocation("/get-started")}
          className="btn-magnetic rounded-full font-body font-bold text-sm cursor-pointer"
          style={{ padding: "10px 24px", color: "#fffffe", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Get Started
        </motion.button>
      </motion.nav>

      {/* Mobile */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="md:hidden fixed top-4 left-4 right-4 z-[100] flex items-center justify-between"
        style={{
          background: "rgba(32,30,40,0.75)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: 9999,
          padding: "14px 24px",
          border: "1px solid rgba(255,255,255,0.10)",
        }}
      >
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); setLocation("/"); setMobileOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="font-display font-bold cursor-pointer"
          style={{
            fontSize: 22,
            background: "linear-gradient(to right, #ffb780, #ffb1c1)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          EarnX
        </a>
        <button onClick={() => setMobileOpen((v) => !v)} style={{ color: "#fffffe", cursor: "pointer" }}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="md:hidden fixed top-20 left-4 right-4 z-[99] flex flex-col gap-1 rounded-2xl p-5"
            style={{
              background: "rgba(22,22,26,0.95)",
              backdropFilter: "blur(40px)",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.path}
                onClick={(e) => handleNavClick(e, link)}
                className="py-3 px-4 rounded-xl text-base font-medium transition-colors cursor-pointer"
                style={{
                  color: isActive(link) ? "#ffb780" : "#a7a9be",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#ffb780"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#a7a9be"; }}
              >
                {link.label}
              </a>
            ))}
            <div className="h-px w-full my-2" style={{ background: "rgba(255,255,255,0.07)" }} />
            <button
              onClick={() => { setLocation("/get-started"); setMobileOpen(false); }}
              className="btn-magnetic w-full rounded-full py-3 font-bold text-base cursor-pointer"
              style={{ color: "#fffffe", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
