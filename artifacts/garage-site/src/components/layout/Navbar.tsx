import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { GARAGE_NAME, PHONE } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Location", href: "#location" },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 z-50">
          <span className="font-heading font-bold text-2xl tracking-tighter uppercase text-foreground">
            {GARAGE_NAME}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href} 
                  className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors uppercase tracking-wider"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          <a 
            href={`tel:${PHONE}`}
            className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-[0_0_15px_rgba(230,57,70,0.3)] hover:shadow-[0_0_20px_rgba(230,57,70,0.5)] transform hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4" />
            <span>Call Us</span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-foreground z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Drawer */}
        <div 
          className={`fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out lg:hidden ${
            mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col items-center gap-8 text-center">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href} 
                  onClick={handleNavClick}
                  className="text-2xl font-heading font-bold uppercase tracking-widest text-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a 
                href="#contact" 
                onClick={handleNavClick}
                className="text-2xl font-heading font-bold uppercase tracking-widest text-accent hover:text-accent/80 transition-colors mt-4 block"
              >
                Contact Us
              </a>
            </li>
          </ul>
          
          <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-4">
            <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <Phone className="w-5 h-5" />
              <span>{PHONE}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}