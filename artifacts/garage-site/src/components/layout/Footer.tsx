import {
  GARAGE_NAME,
  BUSINESS_HOURS,
  PHONE,
  WHATSAPP_NUMBER,
  ADDRESS,
} from "@/lib/constants";
import { Wrench, Phone, MessageCircle, MapPin, Clock, Car } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050506] border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center">
                <Wrench className="w-6 h-6 text-accent" />
              </div>

              <span className="font-heading font-bold text-xl tracking-tight uppercase text-foreground">
                {GARAGE_NAME}
              </span>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Trusted automobile service workshop providing reliable repairs,
              diagnostics and maintenance with honest workmanship.
            </p>

            <div className="flex items-center gap-2 text-sm text-foreground">
              <Car className="w-4 h-4 text-accent" />
              <span>Cars • Tata Ace • Vans • Trucks</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-bold uppercase tracking-wider mb-6">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {[
                { name: "Home", id: "home" },
                { name: "About Us", id: "about" },
                { name: "Services", id: "services" },
                { name: "Reviews", id: "testimonials" },
                { name: "Location", id: "location" },
                { name: "Contact", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-muted-foreground text-sm hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-bold uppercase tracking-wider mb-6">
              Contact
            </h4>

            <ul className="space-y-5 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0" />

                <span>{ADDRESS}</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />

                <a
                  href={`tel:${PHONE}`}
                  className="hover:text-white transition-colors"
                >
                  {PHONE}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0" />

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-white font-heading font-bold uppercase tracking-wider mb-6">
              Working Hours
            </h4>

            <div className="p-5 rounded-2xl bg-surface border border-white/10">
              <div className="flex items-center gap-3 mb-5">
                <Clock className="w-5 h-5 text-accent" />

                <span className="text-foreground font-semibold">
                  Workshop Timing
                </span>
              </div>

              {BUSINESS_HOURS.map((schedule) => (
                <div
                  key={schedule.day}
                  className="flex justify-between text-sm py-3 border-b border-white/5 last:border-0"
                >
                  <span className="text-muted-foreground">{schedule.day}</span>

                  <span className="text-white font-medium">
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center w-full py-3 rounded-xl bg-[#25D366] text-white font-semibold hover:scale-[1.02] transition-transform"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs text-center">
            © {currentYear} {GARAGE_NAME}. All rights reserved.
          </p>

          <p className="text-muted-foreground text-xs">
            Honest Service • Quality Repairs • Customer Trust
          </p>
        </div>
      </div>
    </footer>
  );
}
