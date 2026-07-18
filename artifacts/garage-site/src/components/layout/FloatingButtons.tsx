import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { PHONE, WHATSAPP_NUMBER } from "@/lib/constants";

export function FloatingButtons() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20bd5a] transition-all transform hover:scale-110 relative group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-3 bg-surface border border-border px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          WhatsApp Us
        </span>
      </a>

      {/* Call Button */}
      <a
        href={`tel:${PHONE}`}
        aria-label="Call Us"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white shadow-[0_0_15px_rgba(230,57,70,0.4)] hover:bg-accent/90 hover:shadow-[0_0_20px_rgba(230,57,70,0.6)] transition-all transform hover:scale-110 animate-[pulse_3s_infinite] relative group"
      >
        <Phone className="w-5 h-5" />
        <span className="absolute right-full mr-3 bg-surface border border-border px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Call Now
        </span>
      </a>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`flex items-center justify-center w-12 h-12 rounded-full bg-surface-elevated text-muted-foreground border border-white/10 hover:text-foreground hover:bg-white/5 transition-all transform hover:-translate-y-1 ${
          showTopBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}