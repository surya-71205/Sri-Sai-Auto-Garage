import { motion } from "framer-motion";
import { QUOTES } from "@/lib/constants";
import { Quote } from "lucide-react";

export function Quotes() {
  return (
    <section className="py-24 bg-[#0A0A0B] relative border-y border-white/5 overflow-hidden">
      {/* Cinematic gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(230,57,70,0.05),transparent_60%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {QUOTES.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4 p-8 rounded-2xl bg-surface/50 border border-white/5 hover:border-accent/30 transition-colors"
            >
              <Quote className="w-10 h-10 text-accent/40 shrink-0" />
              <div>
                <p className="text-xl md:text-2xl font-heading font-medium text-foreground leading-tight italic">
                  "{quote.text}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
