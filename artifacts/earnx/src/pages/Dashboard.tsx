import { motion } from "framer-motion";
import { Users, DollarSign, Zap, TrendingUp, ArrowRight, Activity, Wallet, Target, Clock, Bot, PlayCircle } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { PageLayout } from "@/components/PageLayout";
import { Link } from "wouter";

const chartData = [
  { month: "Jan", value: 12000 },
  { month: "Feb", value: 18500 },
  { month: "Mar", value: 15000 },
  { month: "Apr", value: 24000 },
  { month: "May", value: 21000 },
  { month: "Jun", value: 31000 },
  { month: "Jul", value: 28000 },
  { month: "Aug", value: 42000 },
  { month: "Sep", value: 38000 },
  { month: "Oct", value: 52000 },
  { month: "Nov", value: 47000 },
  { month: "Dec", value: 68000 },
];

const quickActions = [
  { icon: Wallet, label: "Deposit Funds", desc: "Add funds to your wallet", accent: "#ffb780" },
  { icon: Target, label: "Start Method", desc: "Choose your first earning method", accent: "#ffb1c1" },
  { icon: Activity, label: "View Analytics", desc: "Deep dive into your earnings", accent: "#ff8906" },
  { icon: Bot, label: "AI Assistant", desc: "Get personalized recommendations", accent: "#ffb780" },
];

const recentActivity = [
  { icon: Bot, label: "AI Content Batch", amount: "+$85.00", color: "#ffb780", time: "2 min ago" },
  { icon: PlayCircle, label: "YouTube Shorts Ad Rev", amount: "+$12.40", color: "#ffb1c1", time: "15 min ago" },
  { icon: TrendingUp, label: "Crypto Portfolio Gain", amount: "+$320.00", color: "#4ade80", time: "1 hour ago" },
  { icon: DollarSign, label: "Affiliate Commission", amount: "+$45.00", color: "#ffb780", time: "3 hours ago" },
];

export default function Dashboard() {
  return (
    <PageLayout>
      <section className="relative py-32 px-6" style={{ paddingTop: 200 }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full" style={{ width: 500, height: 300, background: "rgba(255,137,6,0.08)", filter: "blur(120px)" }} />

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center justify-between mb-16">
            <div>
              <p className="uppercase mb-2" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.1em", color: "#ffb780" }}>Dashboard</p>
              <h1 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(32px,5vw,56px)", letterSpacing: "-0.03em", color: "#fffffe", lineHeight: 1.1 }}>
                Your <span className="text-gradient-primary">Earnings</span>
              </h1>
            </div>
            <Link href="/get-started">
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="btn-magnetic rounded-full font-body font-bold hidden md:flex items-center gap-2" style={{ padding: "12px 28px", fontSize: 14, color: "#fffffe", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                Start New Method <ArrowRight size={16} />
              </motion.button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { icon: DollarSign, value: "$12,450.00", label: "Total Balance", accent: "#ffb780", trend: "+14.2%" },
              { icon: TrendingUp, value: "$3,240.00", label: "This Month", accent: "#ffb1c1", trend: "+8.5%" },
              { icon: Users, value: "12", label: "Active Methods", accent: "#ff8906", trend: "+2 this week" },
              { icon: Clock, value: "4.2 hrs", label: "Daily Avg. Time", accent: "#ffb780", trend: "-12%" },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="rounded-[20px] p-5"
                  style={{ background: "rgba(32,30,40,0.6)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: `${s.accent}22`, border: `1px solid ${s.accent}44` }}>
                      <Icon size={18} style={{ color: s.accent }} />
                    </div>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: s.trend.startsWith("+") ? "#4ade80" : "#a7a9be" }}>{s.trend}</span>
                  </div>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 22, color: "#fffffe", marginBottom: 2 }}>{s.value}</div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, color: "#a7a9be" }}>{s.label}</div>
                </motion.div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 rounded-[20px] p-6"
              style={{ background: "rgba(22,22,26,0.8)", backdropFilter: "blur(40px)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 18, color: "#fffffe" }}>Revenue Growth</h3>
                <div className="px-3 py-1 rounded-full" style={{ background: "rgba(74,222,128,0.15)", border: "1px solid rgba(74,222,128,0.3)", color: "#4ade80", fontSize: 12, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace" }}>
                  +462% YoY
                </div>
              </div>
              <div style={{ height: 200 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="dashGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ffb780" stopOpacity={0.45} />
                        <stop offset="95%" stopColor="#ffb780" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#a7a9be", fontSize: 11, fontFamily: "'Plus Jakarta Sans',sans-serif" }} />
                    <YAxis hide />
                    <Tooltip contentStyle={{ background: "rgba(32,30,40,0.95)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, color: "#fffffe", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12 }} formatter={(v: number) => [`$${v.toLocaleString()}`, "Earnings"]} />
                    <Area type="monotone" dataKey="value" stroke="#ffb780" strokeWidth={2} fill="url(#dashGrad)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-[20px] p-6"
              style={{ background: "rgba(22,22,26,0.8)", backdropFilter: "blur(40px)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 16, color: "#fffffe", marginBottom: 16 }}>Recent Activity</h3>
              <div className="flex flex-col gap-3">
                {recentActivity.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center justify-between py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${item.color}22` }}>
                          <Icon size={14} style={{ color: item.color }} />
                        </div>
                        <div>
                          <div style={{ fontSize: 13, color: "#fffffe", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{item.label}</div>
                          <div style={{ fontSize: 11, color: "#a7a9be", fontFamily: "'JetBrains Mono',monospace" }}>{item.time}</div>
                        </div>
                      </div>
                      <span style={{ fontWeight: 700, fontSize: 13, color: item.color }}>{item.amount}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, i) => {
              const Icon = action.icon;
              return (
                <motion.div
                  key={action.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="rounded-[16px] p-5 cursor-pointer transition-all duration-200"
                  style={{ background: "rgba(32,30,40,0.6)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.07)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${action.accent}44`; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"; }}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3" style={{ background: `${action.accent}22`, border: `1px solid ${action.accent}44` }}>
                    <Icon size={18} style={{ color: action.accent }} />
                  </div>
                  <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 15, color: "#fffffe", marginBottom: 4 }}>{action.label}</h3>
                  <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, color: "#a7a9be" }}>{action.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
