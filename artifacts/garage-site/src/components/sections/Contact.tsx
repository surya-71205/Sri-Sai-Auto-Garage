import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PHONE, WHATSAPP_NUMBER, EMAIL } from "@/lib/constants";
import { Phone, MessageCircle, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0A0A0B] relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Get in Touch"
          subtitle="Call us, WhatsApp us, or send an email — we're here to help."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <a
            href={`tel:${PHONE}`}
            className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-surface border border-white/5 hover:border-accent/50 transition-all hover:-translate-y-1 group"
          >
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
              <Phone className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
            </div>
            <div className="text-center">
              <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">Call Us</p>
              <p className="text-xl font-bold text-foreground">{PHONE}</p>
            </div>
          </a>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-surface border border-white/5 hover:border-[#25D366]/50 transition-all hover:-translate-y-1 group"
          >
            <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366] transition-colors">
              <MessageCircle className="w-7 h-7 text-[#25D366] group-hover:text-white transition-colors" />
            </div>
            <div className="text-center">
              <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">WhatsApp</p>
              <p className="text-xl font-bold text-foreground">Chat with Us</p>
            </div>
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-surface border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1 group"
          >
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <Mail className="w-7 h-7 text-muted-foreground group-hover:text-white transition-colors" />
            </div>
            <div className="text-center">
              <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">Email Us</p>
              <p className="text-lg font-medium text-foreground">{EMAIL}</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
