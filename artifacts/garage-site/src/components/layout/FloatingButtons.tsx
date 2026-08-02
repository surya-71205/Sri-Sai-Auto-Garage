import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const buttonAnimation = {
    initial: {
      opacity: 0,
      scale: 0.5,
      x: 50,
    },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
    },
    transition: {
      duration: 0.4,
    },
  };

  return (
    <div className="fixed bottom-6 right-5 md:right-6 flex flex-col gap-3 z-50">

      {/* WhatsApp */}
      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Sri Sai Auto Garage on WhatsApp"
        {...buttonAnimation}
        className="
          relative flex items-center justify-center
          w-14 h-14 rounded-full
          bg-[#25D366] text-white
          shadow-lg
          hover:scale-110
          transition-transform
          group
        "
      >
        <MessageCircle className="w-7 h-7" />

        <span
          className="
          absolute right-full mr-3
          bg-surface text-foreground
          border border-white/10
          px-3 py-2 rounded-lg
          text-sm font-medium
          whitespace-nowrap
          opacity-0
          group-hover:opacity-100
          transition-opacity
          "
        >
          WhatsApp Us
        </span>

        {/* Soft pulse ring */}
        <span className="
          absolute inset-0 rounded-full
          bg-[#25D366]
          opacity-30
          animate-ping
        "/>
      </motion.a>


      {/* Call */}
      <motion.a
        href={`tel:${PHONE}`}
        aria-label="Call Sri Sai Auto Garage"
        {...buttonAnimation}
        className="
          flex items-center justify-center
          w-14 h-14 rounded-full
          bg-accent text-white
          shadow-[0_0_20px_rgba(230,57,70,0.5)]
          hover:scale-110
          transition-transform
        "
      >
        <Phone className="w-6 h-6" />

        <span
          className="
          absolute right-full mr-3
          bg-surface text-foreground
          border border-white/10
          px-3 py-2 rounded-lg
          text-sm font-medium
          whitespace-nowrap
          opacity-0
          group-hover:opacity-100
          transition-opacity
          "
        >
          Call Now
        </span>
      </motion.a>


      {/* Back to top */}
      <motion.button
        onClick={scrollToTop}
        aria-label="Back to top"
        initial={{ opacity: 0 }}
        animate={{
          opacity: showTopBtn ? 1 : 0,
          y: showTopBtn ? 0 : 20,
        }}
        className="
          flex items-center justify-center
          w-14 h-14 rounded-full
          bg-surface-elevated
          text-muted-foreground
          border border-white/10
          hover:text-white
          hover:border-accent
          transition-all
        "
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>

    </div>
  );
}