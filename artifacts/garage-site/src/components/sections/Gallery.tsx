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

  const categories = ["All", ...Array.from(new Set(GALLERY_IMAGES.map(img => img.category)))];

  const filteredImages = filter === "All" 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  const openLightbox = (index: number) => {
    // Find the original index in GALLERY_IMAGES to keep sync simple,
    // or just pass the filtered array. We'll pass the filtered array to keep it simple.
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#111113] border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Inside The Workshop" 
          subtitle="Take a look at our facility, our team, and the vehicles we've restored to peak condition."
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
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={image.title + idx}
              className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer bg-surface"
              onClick={() => openLightbox(idx)}
            >
              {/* Simulated Image Content */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1F1F22] to-[#0A0A0B]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_70%)]" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-30 group-hover:opacity-10 transition-opacity">
                <span className="font-mono text-xs uppercase tracking-widest">{image.category}</span>
                <span className="font-heading font-bold text-xl mt-2">{image.title}</span>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 backdrop-blur-sm z-10">
                <Maximize2 className="w-8 h-8 text-white" />
                <span className="text-white font-bold tracking-wider uppercase text-sm">View Image</span>
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
        onNext={() => setCurrentIndex((currentIndex + 1) % filteredImages.length)}
        onPrev={() => setCurrentIndex((currentIndex - 1 + filteredImages.length) % filteredImages.length)}
      />
    </section>
  );
}