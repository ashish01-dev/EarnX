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

function useCountUp(target: number, duration: number = 2000, active: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function StatCard({ icon: Icon, label, value, suffix, color, delay }: {
  icon: typeof Users; label: string; value: number; suffix: string; color: string; delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useCountUp(value, 2000, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="glass-panel rounded-2xl p-6 border border-white/10 group relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"
        style={{ background: `radial-gradient(circle at 50% 50%, ${color}20 0%, transparent 70%)` }}
      />
      <div className="flex items-start justify-between mb-4 relative z-10">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: `${color}22`, border: `1px solid ${color}44` }}
        >
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
        <TrendingUp className="w-4 h-4 text-green-400 opacity-60" />
      </div>
      <div className="relative z-10">
        <div className="font-display font-black text-3xl text-white mb-1">
          {suffix === "$" ? "$" : ""}
          {count.toLocaleString()}
          {suffix !== "$" ? suffix : ""}
        </div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </div>
    </motion.div>
  );
}

export function LiveDashboard() {
  return (
    <section className="py-24 px-4 relative" id="dashboard">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-green-500/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium text-green-400">Live Data</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter">
            Real{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-sweep">
              Earnings
            </span>
            , Real Time
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <StatCard icon={Users} label="Active Users" value={127849} suffix="+" color="#ff8906" delay={0} />
          <StatCard icon={DollarSign} label="Total Paid Out" value={4820000} suffix="$" color="#f25f4c" delay={0.1} />
          <StatCard icon={Zap} label="Active Methods" value={38} suffix="+" color="#e53170" delay={0.2} />
          <StatCard icon={TrendingUp} label="Success Rate" value={94} suffix="%" color="#ff8906" delay={0.3} />
        </div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-panel rounded-3xl p-8 border border-white/10"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-display font-bold text-xl text-white">Platform Revenue Growth</h3>
              <p className="text-sm text-muted-foreground mt-1">Total user earnings — last 12 months</p>
            </div>
            <div className="px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-bold">
              +462% YoY
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="orangeGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ff8906" stopOpacity={0.5} />
                    <stop offset="95%" stopColor="#ff8906" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#a7a9be", fontSize: 12 }} />
                <YAxis hide />
                <Tooltip
                  contentStyle={{ background: "#1a1928", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, color: "#fffffe" }}
                  formatter={(v: number) => [`$${v.toLocaleString()}`, "Earnings"]}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#ff8906"
                  strokeWidth={2.5}
                  fill="url(#orangeGrad)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
