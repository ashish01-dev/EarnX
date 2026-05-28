import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { Users, DollarSign, Zap, TrendingUp } from "lucide-react";

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

function useCountUp(target: number, duration = 2000, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let v = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      v += step;
      if (v >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(v));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function StatCard({ icon: Icon, label, value, prefix = "", suffix = "", accent, delay }: {
  icon: typeof Users; label: string; value: number; prefix?: string; suffix?: string; accent: string; delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useCountUp(value, 2000, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="relative rounded-[24px] p-6 flex flex-col gap-3 cursor-default"
      style={{
        background: "rgba(32,30,40,0.6)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow: "0 4px 30px rgba(0,0,0,0.4)",
        transition: "box-shadow 0.3s, border-color 0.3s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 32px ${accent}20`;
        (e.currentTarget as HTMLElement).style.borderColor = `${accent}33`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 30px rgba(0,0,0,0.4)";
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
      }}
    >
      <div className="flex items-start justify-between">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{ background: `${accent}22`, border: `1px solid ${accent}44` }}
        >
          <Icon size={18} style={{ color: accent }} />
        </div>
        <TrendingUp size={14} style={{ color: "#4ade80", opacity: 0.6 }} />
      </div>
      <div>
        <div
          style={{
            fontFamily: "'Syne',sans-serif",
            fontWeight: 800,
            fontSize: 28,
            color: "#fffffe",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          {prefix}{count.toLocaleString()}{suffix}
        </div>
        <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 14, color: "#a7a9be", marginTop: 4 }}>
          {label}
        </div>
      </div>
    </motion.div>
  );
}

export function LiveDashboard() {
  return (
    <section className="relative py-32 px-6" id="dashboard">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full"
        style={{ width: 500, height: 300, background: "rgba(255,137,6,0.08)", filter: "blur(120px)" }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: "rgba(32,30,40,0.6)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(74,222,128,0.25)",
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#4ade80" }} />
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.08em", color: "#4ade80" }}>
              LIVE DATA
            </span>
          </div>
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
            Real{" "}
            <span className="text-gradient-primary">Earnings</span>, Real Time
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard icon={Users}       label="Active Users"    value={127849} suffix="+"  accent="#ffb780" delay={0}   />
          <StatCard icon={DollarSign}  label="Total Paid Out"  value={4820000} prefix="$" accent="#ffb1c1" delay={0.1} />
          <StatCard icon={Zap}         label="Active Methods"  value={38}    suffix="+"    accent="#ff8906" delay={0.2} />
          <StatCard icon={TrendingUp}  label="Success Rate"    value={94}    suffix="%"    accent="#ffb780" delay={0.3} />
        </div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="rounded-[24px] p-8"
          style={{
            background: "rgba(22,22,26,0.8)",
            backdropFilter: "blur(40px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderTop: "1px solid rgba(255,255,255,0.16)",
          }}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 20, color: "#fffffe" }}>
                Platform Revenue Growth
              </h3>
              <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 14, color: "#a7a9be", marginTop: 4 }}>
                Total user earnings — last 12 months
              </p>
            </div>
            <div
              className="px-3 py-1.5 rounded-full"
              style={{ background: "rgba(74,222,128,0.15)", border: "1px solid rgba(74,222,128,0.3)", color: "#4ade80", fontSize: 13, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace" }}
            >
              +462% YoY
            </div>
          </div>
          <div style={{ height: 240 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="earnGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ffb780" stopOpacity={0.45} />
                    <stop offset="95%" stopColor="#ffb780" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#a7a9be", fontSize: 12, fontFamily: "'Plus Jakarta Sans',sans-serif" }} />
                <YAxis hide />
                <Tooltip
                  contentStyle={{
                    background: "rgba(32,30,40,0.95)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 12,
                    color: "#fffffe",
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    fontSize: 13,
                  }}
                  formatter={(v: number) => [`$${v.toLocaleString()}`, "Earnings"]}
                />
                <Area type="monotone" dataKey="value" stroke="#ffb780" strokeWidth={2.5} fill="url(#earnGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
