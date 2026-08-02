import { motion } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import {
  HERO_HEADLINE,
  HERO_SUBTITLE,
  PHONE,
  WHATSAPP_NUMBER,
  PROPRIETOR,
} from "@/lib/constants";

const ownerImage = "/images/proprietor.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-start lg:items-center overflow-hidden bg-[#0A0A0B] pt-32 lg:pt-0"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(230,57,70,0.15),transparent_55%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,122,0,0.08),transparent_45%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent rotate-[-12deg]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs lg:text-sm font-medium mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              10+ Years of Trusted Service
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground uppercase tracking-[0.25em] text-sm mb-5"
            >
              Proprietor
              <span className="text-white ml-2 font-semibold">
                {PROPRIETOR}
              </span>
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-heading font-bold uppercase leading-[0.9] text-white"
            >
              {HERO_HEADLINE}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
            >
              {HERO_SUBTITLE}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-3 mt-8"
            >
              {["Cars", "Tata Ace", "Vans", "Commercial Vehicles"].map(
                (item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-muted-foreground"
                  >
                    {item}
                  </span>
                ),
              )}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 mt-10"
            >
              <a
                href={`tel:${PHONE}`}
                className="px-10 py-4 bg-accent rounded-full text-white font-bold uppercase tracking-wider hover:-translate-y-1 transition-all shadow-[0_0_25px_rgba(230,57,70,0.45)]"
              >
                Call Now
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 border border-white/20 rounded-full text-white font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:border-[#25D366] hover:text-[#25D366] transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Glow */}

            <div className="absolute w-[420px] h-[420px] rounded-full bg-accent/20 blur-[120px]" />

            {/* Frame */}

            <div className="relative rounded-[36px] overflow-hidden border border-white/10 bg-[#141416] shadow-2xl">
              <img
                src={ownerImage}
                alt={PROPRIETOR}
                className="w-[340px] md:w-[430px] xl:w-[500px] object-cover"
              />

              {/* Bottom Overlay */}

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-8">
                <h3 className="text-white text-2xl font-bold">{PROPRIETOR}</h3>

                <p className="text-accent mt-1">
                  Proprietor • Sri Sai Auto Garage
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
          Scroll
        </span>

        <ChevronDown className="w-5 h-5 animate-bounce text-muted-foreground" />
      </motion.div>
    </section>
  );
}
