import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ABOUT_STORY, PROPRIETOR } from "@/lib/constants";
import { fadeInUp, scaleIn } from "@/lib/animations";
import { ShieldCheck, Wrench, Car } from "lucide-react";

// About section image
const aboutImage = "/images/working.png";

export function About() {
  const badges = [
    {
      text: "10+ Years Experience",
      icon: ShieldCheck,
    },
    {
      text: "Honest Vehicle Diagnosis",
      icon: Wrench,
    },
    {
      text: "Cars & Commercial Vehicles",
      icon: Car,
    },
  ];

  return (
    <section
      id="about"
      className="
      py-24 md:py-32
      bg-background
      relative
      overflow-hidden
      "
    >
      {/* Background Glow */}
      <div
        className="
        absolute
        top-0
        right-0
        w-[500px]
        h-[500px]
        bg-accent/10
        rounded-full
        blur-[120px]
        pointer-events-none
        "
      />

      <div
        className="
        absolute
        bottom-0
        left-0
        w-[400px]
        h-[400px]
        bg-blue-500/10
        rounded-full
        blur-[120px]
        pointer-events-none
        "
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12
          lg:gap-20
          items-center
          "
        >
          {/* IMAGE SIDE */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={scaleIn}
            className="
            relative
            order-2
            lg:order-1
            "
          >
            <div
              className="
              group
              relative
              h-[620px]
              rounded-[30px]
              overflow-hidden
              border
              border-white/10
              bg-surface
              shadow-[0_25px_60px_rgba(0,0,0,0.45)]
              "
            >
              <img
                src={aboutImage}
                alt="Sri Sai Auto Garage proprietor working on a vehicle"
                className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

              <div
                className="
                absolute
                left-6
                bottom-6
                bg-black/55
                backdrop-blur-md
                border
                border-white/20
                rounded-2xl
                px-5
                py-4
                "
              >
                <p className="text-3xl font-heading font-bold text-white">
                  10+
                </p>

                <p className="text-xs uppercase tracking-[0.25em] text-gray-300 mt-1">
                  YEARS SERVING CHIDAMBARAM
                </p>
              </div>
            </div>

            {/* Owner Badge */}

            <div
              className="
              absolute
              -bottom-6
              -right-6
              bg-black/75
              backdrop-blur-xl
              border
              border-white/10
              rounded-2xl
              px-6
              py-5
              shadow-2xl
              "
            >
              <p className="text-lg font-bold text-white">{PROPRIETOR}</p>

              <p className="text-sm text-gray-400">
                Founder • Sri Sai Auto Garage
              </p>
            </div>
          </motion.div>

          {/* TEXT SIDE */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={fadeInUp}
            className="
            order-1
            lg:order-2
            "
          >
            <SectionHeading
              title="Built On Trust & Experience"
              subtitle="Serving Chidambaram with trusted automotive repairs, accurate diagnosis and dependable workmanship."
            />

            <div className="space-y-6 mt-8">
              {ABOUT_STORY.map((paragraph, index) => (
                <p
                  key={index}
                  className="
                  text-muted-foreground
                  text-lg
                  leading-relaxed
                  "
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Trust Badges */}

            <div
              className="
              mt-10
              grid
              grid-cols-1
              sm:grid-cols-3
              gap-3
              "
            >
              {badges.map((badge, index) => {
                const Icon = badge.icon;

                return (
                  <div
                    key={index}
                    className="
                    flex
                    items-center
                    gap-2
                    px-4
                    py-3
                    rounded-xl
                    bg-card
                    border
                    border-border
                    shadow-sm
                    hover:shadow-md
                    hover:border-accent/40
                    transition-all
                    "
                  >
                    <Icon
                      className="
                      w-5
                      h-5
                      text-accent
                      "
                    />

                    <span
                      className="
                      text-sm
                      text-foreground
                      font-medium
                      "
                    >
                      {badge.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
