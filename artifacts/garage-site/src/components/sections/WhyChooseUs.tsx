import { motion } from "framer-motion";
import { Counter } from "@/components/ui/Counter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { STATS } from "@/lib/constants";
import {
  Wrench,
  ShieldCheck,
  Car,
  IndianRupee,
  SearchCheck,
  Clock3,
} from "lucide-react";

export function WhyChooseUs() {
  const features = [
    {
      text: "Accurate Fault Detection & Diagnosis",
      icon: SearchCheck,
    },
    {
      text: "Honest Advice With Transparent Pricing",
      icon: ShieldCheck,
    },
    {
      text: "Cars, Tata Ace & Commercial Vehicle Service",
      icon: Car,
    },
    {
      text: "Affordable Repairs Without Unnecessary Work",
      icon: IndianRupee,
    },
    {
      text: "Experienced Mechanics With 10+ Years Of Expertise",
      icon: Wrench,
    },
    {
      text: "Quick Service & Reliable Vehicle Delivery",
      icon: Clock3,
    },
  ];

  return (
    <section
      className="
      py-24 md:py-32
      bg-background
      relative
      border-t border-white/5
      overflow-hidden
      "
    >
      {/* Background Glow */}
      <div
        className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-full
        max-w-4xl
        h-[600px]
        bg-accent/5
        rounded-full
        blur-[140px]
        pointer-events-none
        "
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-16
          items-center
        "
        >
          {/* LEFT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <SectionHeading
              title="Why Choose Sri Sai Auto Garage?"
              subtitle="Trusted automotive service built through years of experience, honest diagnosis and dependable repairs."
            />

            {/* Feature Cards */}

            <div
              className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-4
              mt-10
              "
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="
                    group
                    flex
                    items-center
                    gap-4
                    p-5
                    rounded-2xl
                    bg-surface/80
                    backdrop-blur-sm
                    border
                    border-white/5
                    hover:border-accent/40
                    hover:-translate-y-1
                    transition-all
                    duration-300
                    "
                  >
                    <div
                      className="
                      shrink-0
                      w-11
                      h-11
                      rounded-xl
                      bg-accent/10
                      flex
                      items-center
                      justify-center
                      group-hover:bg-accent
                      transition-colors
                      "
                    >
                      <Icon
                        className="
                        w-5
                        h-5
                        text-accent
                        group-hover:text-white
                        transition-colors
                        "
                      />
                    </div>

                    <p
                      className="
                      text-sm
                      md:text-base
                      text-foreground
                      font-medium
                      leading-snug
                      "
                    >
                      {feature.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Philosophy Quote */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.4,
              }}
              className="
              mt-10
              relative
              p-7
              rounded-2xl
              bg-surface-elevated
              border
              border-white/10
              overflow-hidden
              "
            >
              <div
                className="
                absolute
                left-0
                top-0
                h-full
                w-1
                bg-accent
                "
              />

              <p
                className="
                text-lg
                font-heading
                text-white
                italic
                leading-relaxed
                "
              >
                "Every vehicle has a problem. Our responsibility is to find the
                right solution with honest work and genuine care."
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE STATS */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
            grid
            grid-cols-2
            gap-5
            "
          >
            {STATS.map((stat, index) => (
              <Counter
                key={index}
                target={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
