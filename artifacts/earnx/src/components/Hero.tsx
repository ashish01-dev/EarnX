import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Zap } from "lucide-react";
import { useEffect, useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      containerRef.current.style.setProperty('--mouse-x', `${x * 100}%`);
      containerRef.current.style.setProperty('--mouse-y', `${y * 100}%`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-mesh"
    >
      {/* Interactive mouse glow */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsla(32, 100%, 51%, 0.4) 0%, transparent 40%)'
        }}
      />
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-primary/30 mb-8"
            >
              <Zap className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary-foreground tracking-wide">#1 AI Powered Money Platform</span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[1.1] mb-6 text-white tracking-tighter">
              Turn Skills <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-sweep">
                Into Income.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-lg font-light leading-relaxed">
              Earn smarter. Faster. Limitlessly. The ultimate ecosystem for creators, investors, and side-hustlers to build modern wealth.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-background font-display font-bold rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.3)]"
              >
                Start Earning <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass-panel text-white font-display font-bold rounded-full flex items-center gap-2 hover:bg-white/10 transition-colors border border-white/20"
              >
                <PlayCircle className="w-5 h-5 text-primary" /> Watch Demo
              </motion.button>
            </div>
          </motion.div>

          {/* Right Dashboard Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative lg:h-[600px] flex items-center justify-center perspective-[1000px]"
          >
            <div className="w-full max-w-md animate-float relative z-10 glass-panel rounded-2xl p-6 border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]">
              {/* Mockup Header */}
              <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent p-[2px]">
                    <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Live Revenue</div>
                    <div className="font-display font-bold text-xl text-white">$14,204.50</div>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold border border-primary/30">
                  +24.5%
                </div>
              </div>
              
              {/* Mockup Chart Area */}
              <div className="h-40 mb-6 flex items-end gap-2 px-2">
                {[40, 60, 45, 80, 55, 90, 75, 100].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                    className="flex-1 bg-gradient-to-t from-primary/20 to-primary rounded-t-sm opacity-80"
                  />
                ))}
              </div>

              {/* Mockup Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <div className="text-xs text-muted-foreground mb-1">Active Streams</div>
                  <div className="font-display font-bold text-lg text-white">4 Modules</div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full mt-3 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '70%' }}
                      transition={{ duration: 1.5, delay: 1 }}
                      className="h-full bg-secondary"
                    />
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <div className="text-xs text-muted-foreground mb-1">Next Payout</div>
                  <div className="font-display font-bold text-lg text-white">Tomorrow</div>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs text-green-500 font-medium">Processing</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Glow for Mockup */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 filter blur-[80px] -z-10 rounded-full animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
