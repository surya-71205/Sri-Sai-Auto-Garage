import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ABOUT_STORY } from "@/lib/constants";
import { fadeInUp, scaleIn } from "@/lib/animations";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scaleIn}
            className="relative order-2 lg:order-1"
          >
            {/* Image Placeholder */}
            <div className="relative aspect-[4/5] md:aspect-square w-full rounded-2xl overflow-hidden shadow-2xl group border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1A1A1D] to-[#2A2A2E] z-0" />
              {/* Fake mechanics scene using CSS */}
              <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPHBhdGggZD0iTTAgMGg4djhIMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] z-0" />
              
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="text-center p-8 backdrop-blur-md bg-black/40 rounded-xl border border-white/10 m-6 transform group-hover:scale-105 transition-transform duration-500">
                  <p className="text-accent font-heading font-bold text-4xl mb-2">10+</p>
                  <p className="text-foreground font-medium uppercase tracking-wider text-sm">Years of Craftsmanship</p>
                </div>
              </div>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-80" />
            </div>

            {/* Floating Badges */}
            <div className="absolute -bottom-6 -right-6 bg-surface-elevated border border-white/10 p-6 rounded-2xl shadow-xl backdrop-blur-md hidden md:block">
              <p className="text-foreground font-heading font-bold text-xl uppercase tracking-wider">Certified</p>
              <p className="text-muted-foreground text-sm">Master Mechanics</p>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="order-1 lg:order-2"
          >
            <SectionHeading 
              title="The Story Behind The Wrench" 
              subtitle="Where grit meets precision."
            />
            
            <div className="space-y-6 mt-8">
              {ABOUT_STORY.map((paragraph, idx) => (
                <p key={idx} className="text-muted-foreground text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              {['Genuine Parts', 'Honest Pricing'].map((badge) => (
                <span key={badge} className="px-4 py-2 rounded-full bg-surface border border-white/5 text-sm font-medium text-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}