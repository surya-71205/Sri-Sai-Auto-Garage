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

export function Lightbox({ images, currentIndex, isOpen, onClose, onNext, onPrev }: LightboxProps) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full bg-surface text-foreground hover:text-accent transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      <button
        onClick={onPrev}
        className="absolute left-6 p-3 rounded-full bg-surface text-foreground hover:text-accent transition-colors hidden md:block"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <div className="relative max-w-5xl w-full max-h-[80vh] px-4">
        {/* We use a placeholder div that mimics the image for the current task since we don't have real images */}
        <div className="w-full aspect-video rounded-lg bg-gradient-to-br from-surface to-background border border-white/10 flex items-center justify-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_70%)]" />
          <div className="absolute inset-0 bg-noise opacity-20" />
          <div className="text-center z-10">
             <p className="text-muted-foreground mb-2 font-mono text-sm">{currentImage.category}</p>
             <h3 className="text-2xl font-bold text-foreground">{currentImage.title}</h3>
             <p className="text-xs text-muted-foreground mt-4">Simulated Image View</p>
          </div>
        </div>
        <div className="absolute bottom-[-40px] left-0 right-0 text-center text-muted-foreground text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      <button
        onClick={onNext}
        className="absolute right-6 p-3 rounded-full bg-surface text-foreground hover:text-accent transition-colors hidden md:block"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}