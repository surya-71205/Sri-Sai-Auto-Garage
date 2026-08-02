import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import * as Icons from "lucide-react";

export function Services() {
  return (
    <section
      id="services"
      className="
      py-24 md:py-32
      bg-[#111113]
      relative
      border-t border-white/5
      overflow-hidden
      "
    >
      {/* Background glow */}
      <div
        className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-full
        max-w-5xl
        h-[500px]
        bg-accent/5
        blur-[140px]
        rounded-full
        pointer-events-none
        "
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading
          title="Our Services"
          subtitle="Complete automotive solutions from accurate diagnosis to reliable repairs and maintenance."
          centered
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-5
          md:gap-6
          mt-16
          "
        >
          {SERVICES.map((service, index) => {
            const IconComponent =
              (Icons as Record<string, any>)[service.icon] || Icons.Wrench;

            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="
                group
                relative
                p-6
                rounded-2xl
                bg-surface
                border
                border-white/5
                hover:border-accent/50
                hover:-translate-y-2
                transition-all
                duration-300
                overflow-hidden
                "
              >
                {/* Hover glow */}
                <div
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-accent/0
                  via-transparent
                  to-accent/10
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                  "
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-surface-elevated
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    mb-6
                    group-hover:bg-accent/10
                    group-hover:border-accent/40
                    group-hover:scale-110
                    transition-all
                    duration-300
                    "
                  >
                    <IconComponent
                      className="
                      w-7
                      h-7
                      text-metallic-silver
                      group-hover:text-accent
                      transition-colors
                      "
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                    text-xl
                    font-heading
                    font-bold
                    text-foreground
                    mb-3
                    group-hover:text-white
                    transition-colors
                    "
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                    text-muted-foreground
                    text-sm
                    leading-relaxed
                    "
                  >
                    {service.description}
                  </p>

                  {/* Bottom accent */}
                  <div
                    className="
                    mt-6
                    w-0
                    h-[2px]
                    bg-accent
                    group-hover:w-full
                    transition-all
                    duration-500
                    "
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
