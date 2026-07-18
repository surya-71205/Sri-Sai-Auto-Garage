import { GARAGE_NAME, BUSINESS_HOURS, PHONE, EMAIL, ADDRESS } from "@/lib/constants";
import { Wrench, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050506] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Wrench className="w-6 h-6 text-accent" />
              <span className="font-heading font-bold text-2xl tracking-tighter uppercase text-foreground">
                {GARAGE_NAME}
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs leading-relaxed">
              Precision automotive care you can trust. Expert mechanics, honest pricing, and dedicated service for every vehicle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-bold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-muted-foreground hover:text-accent transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-bold uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href={`tel:${PHONE}`} className="hover:text-white transition-colors">{PHONE}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">{EMAIL}</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-heading font-bold uppercase tracking-wider mb-6">Hours</h4>
            <ul className="space-y-3 text-sm">
              {BUSINESS_HOURS.map((schedule) => (
                <li key={schedule.day} className="flex justify-between border-b border-white/5 pb-2 last:border-0">
                  <span className="text-muted-foreground">{schedule.day}</span>
                  <span className="text-white">{schedule.hours}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © {currentYear} {GARAGE_NAME}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-muted-foreground hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}