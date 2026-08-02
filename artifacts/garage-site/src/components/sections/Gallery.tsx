import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GALLERY_IMAGES } from "@/lib/constants";
import { Lightbox } from "@/components/ui/Lightbox";
import { Maximize2 } from "lucide-react";

export function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(GALLERY_IMAGES.map((img) => img.category))),
  ];

  const filteredImages =
    filter === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === filter);

  const openLightbox = (index: number) => {
    // Find the original index in GALLERY_IMAGES to keep sync simple,
    // or just pass the filtered array. We'll pass the filtered array to keep it simple.
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section
      id="gallery"
      className="py-24 md:py-32 bg-[#111113] border-t border-white/5"
    >
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Inside The Workshop"
          subtitle="Explore our workshop, expert technicians, satisfied customers, and the quality workmanship behind every service."
          centered
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mt-10 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-accent text-white"
                  : "bg-surface text-muted-foreground hover:bg-surface-elevated hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredImages.map((image, idx) => (
            <motion.div
              layout
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
                duration: 0.6,
                ease: "easeOut",
              }}
              key={image.title + idx}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-[#18181B] shadow-2xl hover:shadow-black/50 transition-shadow duration-300 border border-white/5"
              onClick={() => openLightbox(idx)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -left-40 top-0 h-full w-20 rotate-12 bg-white/20 blur-xl transition-all duration-700 group-hover:left-[120%]" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                <div className="translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/80 font-semibold">
                    {image.category}
                  </p>

                  <h3 className="text-white text-xl font-bold mt-2">
                    {image.title}
                  </h3>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 backdrop-blur-sm z-10">
                <Maximize2 className="w-8 h-8 text-white" />
                <span className="text-white font-bold tracking-wider uppercase text-sm">
                  View Image
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Lightbox
        images={filteredImages}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() =>
          setCurrentIndex((currentIndex + 1) % filteredImages.length)
        }
        onPrev={() =>
          setCurrentIndex(
            (currentIndex - 1 + filteredImages.length) % filteredImages.length,
          )
        }
      />
    </section>
  );
}
