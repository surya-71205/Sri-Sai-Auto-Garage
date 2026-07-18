import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ADDRESS, BUSINESS_HOURS, MAP_EMBED_URL } from "@/lib/constants";
import { MapPin, Clock } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="py-24 md:py-32 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Find Us" 
          subtitle="Drive in for a consultation. Our workshop is centrally located and easy to find."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative aspect-square lg:aspect-auto lg:h-full rounded-2xl overflow-hidden border border-white/10 bg-surface flex items-center justify-center group"
          >
            {/* The real map iframe */}
            <iframe 
              src={MAP_EMBED_URL} 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%) opacity(0.8)' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 z-0 transition-all duration-500 group-hover:filter-none"
              title="Garage Location"
            ></iframe>
            
            {/* Overlay hint when not hovered */}
            <div className="absolute inset-0 bg-background/20 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="p-8 rounded-2xl bg-surface border border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-heading font-bold text-foreground">Location</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {ADDRESS}
              </p>
              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-3 bg-surface-elevated text-foreground font-medium rounded-xl border border-white/10 hover:border-accent hover:text-accent transition-colors"
              >
                Get Directions
              </a>
            </div>

            <div className="p-8 rounded-2xl bg-surface border border-white/5 flex-1">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-heading font-bold text-foreground">Hours</h3>
              </div>
              <ul className="space-y-4">
                {BUSINESS_HOURS.map((schedule, idx) => (
                  <li key={idx} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <span className="text-muted-foreground">{schedule.day}</span>
                    <span className="text-foreground font-medium">{schedule.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}