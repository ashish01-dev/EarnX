import { motion } from "framer-motion";
import { Trophy, Flame, Award, Shield, Star, Zap, Crown, Diamond, Medal, Sparkles } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

const allLeaders = Array.from({ length: 20 }, (_, i) => {
  const names = ["Alex Chen", "Priya Sharma", "James Park", "Sofia Torres", "Marcus W.", "Lena Kim", "Ryan O'Brien", "Aisha Patel", "Ethan Brooks", "Olivia Hart", "Noah Lee", "Emma Zhang", "Lucas Brown", "Mia Johnson", "Oliver Davis", "Charlotte Wilson", "Elijah Moore", "Amelia Taylor", "Benjamin Anderson", "Harper Thomas"];
  const locations = ["SF, US", "London, UK", "Seoul, KR", "Miami, US", "Austin, US", "Tokyo, JP", "Dublin, IE", "Mumbai, IN", "Berlin, DE", "Sydney, AU", "Toronto, CA", "Shanghai, CN", "Paris, FR", "Chicago, US", "Seattle, US", "Stockholm, SE", "Dubai, AE", "São Paulo, BR", "Amsterdam, NL", "Singapore, SG"];
  const titles = ["Wealth Architect", "Crypto Oracle", "Content Empire", "Passive Master", "Dev Freelancer", "AI Strategist", "Trading Pro", "Video Mogul", "Yield Hunter", "Portfolio Sage", "Token Analyst", "Stream King", "Code Artist", "Revenue Hacker", "Growth Engineer", "Data Alchemist", "NFT Curator", "DeFi Pioneer", "Automation Guru", "Scale Master"];
  const accentColors = ["#ffb780", "#ffb1c1", "#ff8906", "#ffb780", "#ffb1c1", "#ff8906", "#ffb780", "#ffb1c1", "#ff8906", "#ffb780", "#ffb1c1", "#ff8906", "#ffb780", "#ffb1c1", "#ff8906", "#ffb780", "#ffb1c1", "#ff8906", "#ffb780", "#ffb1c1"];
  const badges = [Trophy, Flame, Award, Shield, Star, Zap, Crown, Diamond, Medal, Sparkles, Trophy, Flame, Award, Shield, Star, Zap, Crown, Diamond, Medal, Sparkles];
  const earnings = [68420, 55100, 49800, 38500, 32900, 29800, 27400, 25100, 22800, 21000, 19500, 18100, 16800, 15500, 14200, 13100, 12000, 11000, 10100, 9300];
  const levels = [42, 38, 35, 31, 28, 26, 24, 22, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9];
  const xps = [92, 78, 65, 55, 44, 40, 36, 32, 28, 25, 22, 20, 18, 16, 14, 12, 10, 8, 6, 5];
  return { rank: i + 1, name: names[i], location: locations[i], earned: `$${earnings[i].toLocaleString()}`, level: levels[i], xp: xps[i], badge: badges[i], accent: accentColors[i], title: titles[i] };
});

export default function LeaderboardPage() {
  return (
    <PageLayout>
      <section className="relative py-32 px-6" style={{ paddingTop: 200 }}>
        <div className="absolute top-1/2 right-0 pointer-events-none rounded-full -translate-y-1/2" style={{ width: 500, height: 500, background: "rgba(255,183,128,0.07)", filter: "blur(140px)" }} />
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="uppercase mb-4" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.1em", color: "#ffb780" }}>Community</p>
            <h1 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(40px,6vw,72px)", letterSpacing: "-0.03em", color: "#fffffe", lineHeight: 1.1 }}>
              Full <span className="text-gradient-primary">Leaderboard</span>
            </h1>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 16, color: "#a7a9be", marginTop: 12 }}>
              Weekly rankings — real users, real results, verified payouts.
            </p>
          </motion.div>

          <div className="flex flex-col gap-3">
            {allLeaders.map((leader, i) => {
              const BadgeIcon = leader.badge;
              return (
                <motion.div key={leader.rank} initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.03 }} whileHover={{ x: 6, scale: 1.01 }}
                  className="relative flex items-center gap-4 rounded-[20px] cursor-default transition-all duration-300"
                  style={{ padding: "16px 22px", background: "rgba(32,30,40,0.6)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.07)", boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "rgba(42,41,51,0.75)"; (e.target as HTMLElement).style.borderColor = `${leader.accent}33`; (e.target as HTMLElement).style.boxShadow = `0 0 24px ${leader.accent}18`; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "rgba(32,30,40,0.6)"; (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"; (e.target as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)"; }}
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 14, background: leader.rank <= 3 ? `${leader.accent}22` : "rgba(255,255,255,0.05)", color: leader.rank <= 3 ? leader.accent : "#a7a9be", border: `1px solid ${leader.rank <= 3 ? leader.accent + "44" : "rgba(255,255,255,0.08)"}` }}>
                    {leader.rank}
                  </div>
                  <div className="relative shrink-0">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, color: "#fffffe", background: `linear-gradient(135deg, ${leader.accent}80, ${leader.accent}40)`, border: `2px solid ${leader.accent}55` }}>
                      {leader.name.charAt(0)}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: leader.accent }}>
                      <BadgeIcon size={9} style={{ color: "#13121b" }} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 15, color: "#fffffe" }}>{leader.name}</span>
                      <span className="rounded-full px-2 py-0.5" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.06em", color: leader.accent, background: `${leader.accent}18`, border: `1px solid ${leader.accent}33` }}>{leader.title}</span>
                    </div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, color: "#a7a9be", marginTop: 2 }}>{leader.location}</div>
                  </div>
                  <div className="hidden sm:flex flex-col gap-1 w-28 shrink-0">
                    <div className="flex justify-between">
                      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#a7a9be" }}>Lv. {leader.level}</span>
                      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: leader.accent }}>{leader.xp}%</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${leader.xp}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.03 + 0.2 }} className="h-full rounded-full" style={{ background: `linear-gradient(90deg, ${leader.accent}, ${leader.accent}88)` }} />
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 16, color: "#fffffe" }}>{leader.earned}</div>
                    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#a7a9be", letterSpacing: "0.05em" }}>this week</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
