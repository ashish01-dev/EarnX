import { motion } from "framer-motion";
import { Trophy, Flame, Award, Shield, Star } from "lucide-react";

const leaders = [
  { rank: 1, name: "Alex Chen", location: "SF, US", earned: "$68,420", level: 42, xp: 92, badge: Trophy, badgeColor: "#ff8906", title: "Wealth Architect" },
  { rank: 2, name: "Priya Sharma", location: "London, UK", earned: "$55,100", level: 38, xp: 78, badge: Flame, badgeColor: "#f25f4c", title: "Crypto Oracle" },
  { rank: 3, name: "James Park", location: "Seoul, KR", earned: "$49,800", level: 35, xp: 65, badge: Award, badgeColor: "#e53170", title: "Content Empire" },
  { rank: 4, name: "Sofia Torres", location: "Miami, US", earned: "$38,500", level: 31, xp: 55, badge: Shield, badgeColor: "#ff8906", title: "Passive Master" },
  { rank: 5, name: "Marcus W.", location: "Austin, US", earned: "$32,900", level: 28, xp: 44, badge: Star, badgeColor: "#f25f4c", title: "Dev Freelancer" },
];

const rankColors: Record<number, string> = { 1: "#ff8906", 2: "#f25f4c", 3: "#e53170" };

export function Leaderboard() {
  return (
    <section className="py-24 px-4 relative" id="leaderboard">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-[140px] pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">Community</p>
          <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter">
            Top{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-sweep">
              Earners
            </span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Weekly rankings — real users, real results, verified payouts.
          </p>
        </motion.div>

        <div className="space-y-3">
          {leaders.map((leader, i) => {
            const BadgeIcon = leader.badge;
            const rankColor = rankColors[leader.rank] || "#a7a9be";
            return (
              <motion.div
                key={leader.rank}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ x: 6, scale: 1.01 }}
                className="glass-panel rounded-2xl p-5 border border-white/10 flex items-center gap-4 group relative overflow-hidden cursor-default"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"
                  style={{ background: `radial-gradient(circle at 0% 50%, ${rankColor}15 0%, transparent 60%)` }}
                />

                {/* Rank */}
                <div
                  className="w-10 h-10 rounded-xl font-display font-black text-lg flex items-center justify-center shrink-0 relative z-10"
                  style={{
                    background: leader.rank <= 3 ? `${rankColor}22` : "rgba(255,255,255,0.05)",
                    color: leader.rank <= 3 ? rankColor : "#a7a9be",
                    border: `1px solid ${leader.rank <= 3 ? rankColor + "55" : "rgba(255,255,255,0.1)"}`,
                  }}
                >
                  {leader.rank}
                </div>

                {/* Avatar + Badge */}
                <div className="relative shrink-0">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-white text-sm"
                    style={{
                      background: `linear-gradient(135deg, ${leader.badgeColor}88, ${leader.badgeColor}44)`,
                      border: `2px solid ${leader.badgeColor}66`,
                    }}
                  >
                    {leader.name.charAt(0)}
                  </div>
                  <div
                    className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: leader.badgeColor }}
                  >
                    <BadgeIcon className="w-3 h-3 text-white" />
                  </div>
                </div>

                {/* Name + title */}
                <div className="flex-1 min-w-0 relative z-10">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-display font-bold text-white">{leader.name}</span>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{ background: `${leader.badgeColor}22`, color: leader.badgeColor }}
                    >
                      {leader.title}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">{leader.location}</div>
                </div>

                {/* XP Bar */}
                <div className="hidden sm:flex flex-col gap-1 w-32 relative z-10">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Lv. {leader.level}</span>
                    <span style={{ color: leader.badgeColor }}>{leader.xp}%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${leader.xp}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 + 0.3 }}
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${leader.badgeColor}, ${leader.badgeColor}88)` }}
                    />
                  </div>
                </div>

                {/* Earnings */}
                <div className="text-right shrink-0 relative z-10">
                  <div className="font-display font-black text-lg text-white">{leader.earned}</div>
                  <div className="text-xs text-muted-foreground">this week</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <button className="px-8 py-4 glass-panel border border-primary/40 text-primary font-display font-bold rounded-full hover:bg-primary/10 transition-all duration-200 group">
            View Full Leaderboard
            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
