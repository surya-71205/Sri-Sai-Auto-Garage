import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarRating } from "@/components/ui/StarRating";
import { TESTIMONIALS } from "@/lib/constants";
import { ChevronLeft, ChevronRight, Quote, BadgeCheck } from "lucide-react";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovered]);

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const review = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 bg-[#111113] relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading
          title="Customer Reviews"
          subtitle="Real experiences from customers who trust Sri Sai Auto Garage."
          centered
        />

        <div
          className="max-w-4xl mx-auto mt-14 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.45 }}
              className="
              relative
              bg-surface
              border border-white/10
              rounded-3xl
              p-8 md:p-12
              shadow-2xl
              text-center
              "
            >
              <Quote className="absolute top-6 left-6 w-12 h-12 text-accent/20" />

              {/* Google badge */}
              <div
                className="
              inline-flex items-center gap-2
              px-4 py-2
              rounded-full
              bg-white/5
              border border-white/10
              text-sm
              text-muted-foreground
              mb-8
              "
              >
                <BadgeCheck className="w-4 h-4 text-success" />
                Google Verified Review
              </div>

              <p
                className="
              text-lg md:text-2xl
              text-foreground
              leading-relaxed
              italic
              mb-8
              "
              >
                "{review.text}"
              </p>

              <div className="flex flex-col items-center gap-4">
                <div
                  className="
                w-14 h-14
                rounded-full
                bg-surface-elevated
                border border-white/10
                flex items-center justify-center
                text-accent
                font-bold
                text-lg
                "
                >
                  {review.avatar}
                </div>

                <div>
                  <h4
                    className="
                  text-lg
                  font-bold
                  text-foreground
                  "
                  >
                    {review.name}
                  </h4>

                  <div className="flex justify-center mt-2">
                    <StarRating rating={review.rating} />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}

          <button
            onClick={handlePrev}
            aria-label="Previous review"
            className="
            absolute
            left-2 md:-left-16
            top-1/2
            -translate-y-1/2
            w-11 h-11
            rounded-full
            bg-surface
            border border-white/10
            hover:border-accent
            hover:text-accent
            flex items-center justify-center
            transition
            "
          >
            <ChevronLeft />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next review"
            className="
            absolute
            right-2 md:-right-16
            top-1/2
            -translate-y-1/2
            w-11 h-11
            rounded-full
            bg-surface
            border border-white/10
            hover:border-accent
            hover:text-accent
            flex items-center justify-center
            transition
            "
          >
            <ChevronRight />
          </button>

          {/* Dots */}

          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`
                h-2.5 rounded-full transition-all
                ${currentIndex === idx ? "w-8 bg-accent" : "w-2.5 bg-white/20"}
                `}
              />
            ))}
          </div>
        </div>

        {/* Trust text */}

        <div
          className="
        text-center
        mt-10
        text-muted-foreground
        text-sm
        "
        >
          Trusted by local car owners for honest repairs and reliable service.
        </div>
      </div>
    </section>
  );
}
