import { motion } from "framer-motion";
import { Trophy, Flame, Award, Shield, Star } from "lucide-react";

const leaders = [
  { rank: 1, name: "Alex Chen",      location: "SF, US",     earned: "$68,420", level: 42, xp: 92, badge: Trophy, accent: "#ffb780", title: "Wealth Architect" },
  { rank: 2, name: "Priya Sharma",   location: "London, UK", earned: "$55,100", level: 38, xp: 78, badge: Flame,  accent: "#ffb1c1", title: "Crypto Oracle" },
  { rank: 3, name: "James Park",     location: "Seoul, KR",  earned: "$49,800", level: 35, xp: 65, badge: Award,  accent: "#ff8906", title: "Content Empire" },
  { rank: 4, name: "Sofia Torres",   location: "Miami, US",  earned: "$38,500", level: 31, xp: 55, badge: Shield, accent: "#ffb780", title: "Passive Master" },
  { rank: 5, name: "Marcus W.",      location: "Austin, US", earned: "$32,900", level: 28, xp: 44, badge: Star,   accent: "#ffb1c1", title: "Dev Freelancer" },
];

export function Leaderboard() {
  return (
    <section className="relative py-32 px-6" id="leaderboard">
      <div
        className="absolute top-1/2 right-0 pointer-events-none rounded-full -translate-y-1/2"
        style={{ width: 500, height: 500, background: "rgba(255,183,128,0.07)", filter: "blur(140px)" }}
      />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="uppercase mb-4"
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.1em", color: "#ffb780" }}
          >
            Community
          </p>
          <h2
            style={{
              fontFamily: "'Syne',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(32px,5vw,56px)",
              letterSpacing: "-0.03em",
              color: "#fffffe",
              lineHeight: 1.1,
            }}
          >
            Top{" "}
            <span className="text-gradient-primary">Earners</span>
          </h2>
          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 16, color: "#a7a9be", marginTop: 12 }}>
            Weekly rankings — real users, real results, verified payouts.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {leaders.map((leader, i) => {
            const BadgeIcon = leader.badge;
            return (
              <motion.div
                key={leader.rank}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                whileHover={{ x: 6, scale: 1.01 }}
                className="relative flex items-center gap-4 rounded-[20px] cursor-default transition-all duration-300"
                style={{
                  padding: "18px 24px",
                  background: "rgba(32,30,40,0.6)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(42,41,51,0.75)";
                  (e.currentTarget as HTMLElement).style.borderColor = `${leader.accent}33`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 24px ${leader.accent}18`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(32,30,40,0.6)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
                }}
              >
                {/* Rank */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontWeight: 800,
                    fontSize: 16,
                    background: leader.rank <= 3 ? `${leader.accent}22` : "rgba(255,255,255,0.05)",
                    color: leader.rank <= 3 ? leader.accent : "#a7a9be",
                    border: `1px solid ${leader.rank <= 3 ? leader.accent + "44" : "rgba(255,255,255,0.08)"}`,
                  }}
                >
                  {leader.rank}
                </div>

                {/* Avatar */}
                <div className="relative shrink-0">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      fontWeight: 700,
                      color: "#fffffe",
                      background: `linear-gradient(135deg, ${leader.accent}80, ${leader.accent}40)`,
                      border: `2px solid ${leader.accent}55`,
                    }}
                  >
                    {leader.name.charAt(0)}
                  </div>
                  <div
                    className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: leader.accent }}
                  >
                    <BadgeIcon size={11} style={{ color: "#13121b" }} />
                  </div>
                </div>

                {/* Name + title */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 15, color: "#fffffe" }}>
                      {leader.name}
                    </span>
                    <span
                      className="rounded-full px-2 py-0.5"
                      style={{
                        fontFamily: "'JetBrains Mono',monospace",
                        fontSize: 10,
                        letterSpacing: "0.06em",
                        color: leader.accent,
                        background: `${leader.accent}18`,
                        border: `1px solid ${leader.accent}33`,
                      }}
                    >
                      {leader.title}
                    </span>
                  </div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, color: "#a7a9be", marginTop: 2 }}>
                    {leader.location}
                  </div>
                </div>

                {/* XP bar */}
                <div className="hidden sm:flex flex-col gap-1.5 w-32 shrink-0">
                  <div className="flex justify-between">
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#a7a9be" }}>Lv. {leader.level}</span>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: leader.accent }}>{leader.xp}%</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${leader.xp}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 + 0.3 }}
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${leader.accent}, ${leader.accent}88)` }}
                    />
                  </div>
                </div>

                {/* Earnings */}
                <div className="text-right shrink-0">
                  <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, color: "#fffffe" }}>{leader.earned}</div>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#a7a9be", letterSpacing: "0.05em" }}>this week</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <button
            className="rounded-full font-body font-bold transition-all duration-200 group"
            style={{
              padding: "14px 32px",
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              fontSize: 15,
              color: "#ffb780",
              background: "rgba(32,30,40,0.6)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,183,128,0.3)",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,183,128,0.6)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,183,128,0.08)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,183,128,0.3)"; (e.currentTarget as HTMLElement).style.background = "rgba(32,30,40,0.6)"; }}
          >
            View Full Leaderboard →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
