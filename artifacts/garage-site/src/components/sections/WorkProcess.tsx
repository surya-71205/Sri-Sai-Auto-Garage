import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function WorkProcess() {
  return (
    <section className="py-24 md:py-32 bg-[#0A0A0B] relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="How We Work" 
          subtitle="A transparent, step-by-step process so you never have to guess what's happening to your car."
          centered
        />

        <div className="relative mt-20">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-white/10">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-0 left-0 h-full bg-accent origin-left"
            />
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4 relative z-10"
          >
            {PROCESS_STEPS.map((step, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="relative flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-4 group"
              >
                {/* Connecting Line (Mobile) */}
                {index !== PROCESS_STEPS.length - 1 && (
                  <div className="md:hidden absolute top-[45px] bottom-[-32px] left-[23px] w-[2px] bg-white/10 z-0">
                    <div className="w-full h-full bg-accent/50" />
                  </div>
                )}

                {/* Step Number Circle */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-surface border-2 border-white/20 flex items-center justify-center text-xl font-heading font-bold text-muted-foreground group-hover:border-accent group-hover:text-accent group-hover:bg-accent/10 transition-all duration-300">
                  {index + 1}
                </div>
                
                {/* Content */}
                <div className="md:text-center pt-2 md:pt-4">
                  <h4 className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-white transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}