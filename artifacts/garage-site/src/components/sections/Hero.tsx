import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { HERO_HEADLINE, HERO_SUBTITLE, PHONE } from "@/lib/constants";

export function Hero() {
  return (
    <section id="home" className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden bg-[#0A0A0B]">
      {/* CSS Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(230,57,70,0.15),transparent_50%)] top-[-20%]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,122,0,0.1),transparent_40%)]" />
        
        {/* Animated grid texture */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        
        {/* Abstract shapes / streaks */}
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent transform -rotate-12 opacity-50 blur-[1px] animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute top-1/3 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent/20 to-transparent transform -rotate-12 opacity-30 blur-[2px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Premium Workshop
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-foreground uppercase tracking-tight leading-[0.9] mb-6 drop-shadow-xl"
          >
            {HERO_HEADLINE}
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {HERO_SUBTITLE}
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 bg-accent text-white rounded-full font-bold uppercase tracking-wider text-sm transition-all shadow-[0_0_20px_rgba(230,57,70,0.4)] hover:shadow-[0_0_30px_rgba(230,57,70,0.6)] hover:-translate-y-1"
            >
              Book Service
            </a>
            <a 
              href={`tel:${PHONE}`} 
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-foreground border border-white/20 rounded-full font-bold uppercase tracking-wider text-sm transition-all hover:bg-white/5 hover:border-white/40 hover:-translate-y-1"
            >
              Call Now
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">Scroll</span>
        <ChevronDown className="w-5 h-5 text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  );
}