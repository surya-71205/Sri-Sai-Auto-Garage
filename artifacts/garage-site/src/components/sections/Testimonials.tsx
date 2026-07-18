import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarRating } from "@/components/ui/StarRating";
import { TESTIMONIALS } from "@/lib/constants";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

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
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="What Drivers Say" 
          subtitle="Don't just take our word for it. Hear from the people who trust us with their vehicles."
          centered
        />

        <div 
          className="max-w-4xl mx-auto mt-16 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative h-[300px] md:h-[250px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center text-center px-4 md:px-16"
              >
                <Quote className="w-12 h-12 text-accent/20 mb-6" />
                <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed italic mb-8">
                  "{TESTIMONIALS[currentIndex].text}"
                </p>
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-surface-elevated flex items-center justify-center text-muted-foreground font-bold border border-white/10">
                      {TESTIMONIALS[currentIndex].avatar}
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-foreground">{TESTIMONIALS[currentIndex].name}</h4>
                      <StarRating rating={TESTIMONIALS[currentIndex].rating} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-2 md:px-0">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center text-foreground hover:text-accent hover:border-accent pointer-events-auto transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center text-foreground hover:text-accent hover:border-accent pointer-events-auto transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentIndex === idx ? "bg-accent w-8" : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}