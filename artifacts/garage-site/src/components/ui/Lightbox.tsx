import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: { src: string; title: string; category?: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-in fade-in duration-300">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-3 rounded-full bg-black/70 backdrop-blur-md text-white hover:bg-accent transition-all"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      <button
        onClick={onPrev}
        className="absolute left-6 z-50 p-3 rounded-full bg-black/70 backdrop-blur-md text-white hover:bg-accent transition-all hidden md:block"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <div className="relative max-w-6xl w-full max-h-[80vh] px-4">
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={currentImage.src}
            alt={currentImage.title}
            className="max-h-[80vh] w-full object-contain rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,0.7)]"
          />

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-accent font-semibold">
              {currentImage.category}
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              {currentImage.title}
            </h3>
          </div>
        </div>
        <div className="absolute bottom-[-40px] left-0 right-0 text-center text-muted-foreground text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      <button
        onClick={onNext}
        className="absolute right-6 z-50 p-3 rounded-full bg-black/70 backdrop-blur-md text-white hover:bg-accent transition-all hidden md:block"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
