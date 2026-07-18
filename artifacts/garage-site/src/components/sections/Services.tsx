import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import * as Icons from "lucide-react";

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#111113] relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="Our Services" 
          subtitle="From diagnostics to major overhauls, we handle it all with precision."
          centered
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16"
        >
          {SERVICES.map((service, index) => {
            // Dynamically get the icon component from lucide-react
            const IconComponent = (Icons as any)[service.icon] || Icons.Wrench;

            return (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="group relative p-6 bg-surface rounded-2xl border border-white/5 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-transparent group-hover:from-accent/5 transition-colors duration-300 z-0" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-surface-elevated border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-metallic-silver group-hover:text-accent transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mt-auto">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}