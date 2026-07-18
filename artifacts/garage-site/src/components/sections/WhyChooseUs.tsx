import { motion } from "framer-motion";
import { Counter } from "@/components/ui/Counter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { STATS } from "@/lib/constants";
import { CheckCircle2 } from "lucide-react";

export function WhyChooseUs() {
  const features = [
    "Quick Turnaround Time",
    "Affordable, Transparent Pricing",
    "Original Spare Parts Used",
    "State-of-the-Art Diagnostic Tools",
    "Honest Advice, No Upsells"
  ];

  return (
    <section className="py-24 md:py-32 bg-background relative border-t border-white/5 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading 
              title="Why Choose Us" 
              subtitle="We don't just fix cars; we build relationships. Here's why the neighborhood trusts us."
            />
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-12 p-6 rounded-2xl bg-surface-elevated border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
              <p className="text-lg font-heading text-white italic">
                "Our philosophy is simple: Treat every vehicle like it belongs to our own family."
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {STATS.map((stat, idx) => (
              <Counter 
                key={idx}
                target={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}