import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/lib/constants";
import {
  Search,
  Wrench,
  ClipboardCheck,
  Settings,
  ShieldCheck,
  Car,
} from "lucide-react";

const icons = [Search, ClipboardCheck, Settings, Wrench, ShieldCheck, Car];

export function WorkProcess() {
  return (
    <section
      className="
      py-24 md:py-32
      bg-background
      border-t border-white/5
      relative
      overflow-hidden
      "
    >
      {/* Ambient glow */}
      <div
        className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[700px]
        h-[500px]
        bg-accent/10
        blur-[140px]
        rounded-full
        pointer-events-none
        "
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading
          title="Our Work Process"
          subtitle="From inspection to delivery, every vehicle follows a structured process built around quality and reliability."
          centered
        />

        <div className="relative mt-16">
          {/* Desktop connecting line */}

          <div
            className="
            hidden
            lg:block
            absolute
            top-24
            left-0
            right-0
            h-[2px]
            bg-white/10
            "
          />

          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
            "
          >
            {PROCESS_STEPS.map((step, index) => {
              const Icon = icons[index];

              return (
                <motion.div
                  key={step.title}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  className="
                  group
                  relative
                  bg-surface
                  border border-white/10
                  rounded-3xl
                  p-8
                  overflow-hidden
                  hover:border-accent/50
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  "
                >
                  {/* Step number */}

                  <div
                    className="
                    absolute
                    -top-4
                    -right-2
                    text-[100px]
                    leading-none
                    font-heading
                    font-black
                    text-white/20
                    group-hover:text-accent/30
                    transition-colors
                    duration-300
                    "
                  >
                    0{index + 1}
                  </div>

                  {/* Icon */}

                  <div
                    className="
                    relative
                    z-10
                    w-16
                    h-16
                    rounded-2xl
                    bg-accent/10
                    border
                    border-accent/30
                    flex
                    items-center
                    justify-center
                    mb-7
                    group-hover:bg-accent
                    transition-all
                    duration-300
                    "
                  >
                    <Icon
                      className="
                      w-8
                      h-8
                      text-accent
                      group-hover:text-white
                      transition-colors
                      "
                    />
                  </div>

                  {/* Content */}

                  <div className="relative z-10">
                    <p
                      className="
                      text-accent
                      uppercase
                      tracking-[0.25em]
                      text-xs
                      font-bold
                      mb-2
                      "
                    >
                      Step {index + 1}
                    </p>

                    <h3
                      className="
                      text-2xl
                      font-heading
                      font-bold
                      text-foreground
                      mb-3
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                      text-muted-foreground
                      leading-relaxed
                      "
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom glow */}

                  <div
                    className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-1
                    bg-accent
                    scale-x-0
                    group-hover:scale-x-100
                    transition-transform
                    origin-left
                    "
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
