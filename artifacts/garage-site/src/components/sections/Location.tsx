import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Car,
  Navigation,
} from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export function Location() {
  const businessHours = [
    {
      day: "Monday - Saturday",
      hours: "8:00 AM - 8:00 PM",
    },
    {
      day: "Sunday",
      hours: "Emergency Support Only",
    },
  ];

  return (
    <section
      id="location"
      className="py-24 md:py-32 bg-background relative border-t border-white/5 overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="
      absolute
      top-1/2
      left-1/2
      -translate-x-1/2
      -translate-y-1/2
      w-[600px]
      h-[400px]
      bg-accent/5
      blur-[120px]
      rounded-full
      pointer-events-none
      "
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading
          title="Visit Our Workshop"
          subtitle="Located in Vandigate, Thillainayakapuram. Drive in for reliable automotive service."
          centered
        />

        <div
          className="
        grid
        grid-cols-1
        lg:grid-cols-3
        gap-8
        mt-14
        "
        >
          {/* MAP */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
            lg:col-span-2
            rounded-3xl
            overflow-hidden
            border
            border-white/10
            bg-surface
            shadow-2xl
            "
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d244.42405335778693!2d79.6952584!3d11.423156!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54c3d2b3f53cc7%3A0xa368c8d98ecdda5d!2sSri%20Sai%20Auto%20Garrage!5e0!3m2!1sen!2sin!4v1785516277538!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{
                border: 0,
              }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              title="Sri Sai Auto Garage Location"
              className="w-full"
            />
          </motion.div>

          {/* DETAILS */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
            flex
            flex-col
            gap-6
            "
          >
            {/* Address Card */}

            <div
              className="
            p-7
            rounded-3xl
            bg-surface
            border
            border-white/10
            backdrop-blur
            "
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="
                w-11
                h-11
                rounded-xl
                bg-accent/10
                flex
                items-center
                justify-center
                "
                >
                  <MapPin className="w-6 h-6 text-accent" />
                </div>

                <h3
                  className="
                text-xl
                font-heading
                font-bold
                text-white
                "
                >
                  Sri Sai Auto Garage
                </h3>
              </div>

              <p
                className="
              text-muted-foreground
              leading-relaxed
              "
              >
                No. 1, Pari Nagar,
                <br />
                Thillainayakapuram,
                <br />
                Vandigate,
                <br />
                Tamil Nadu - 608102
              </p>

              <div
                className="
              mt-6
              flex
              items-center
              gap-3
              text-foreground
              "
              >
                <Phone className="w-5 h-5 text-accent" />

                <a
                  href="tel:+919445579892"
                  className="hover:text-accent transition-colors"
                >
                  +91 94455 79892
                </a>
              </div>

              {/* Vehicle Types */}

              <div
                className="
              mt-6
              flex
              items-center
              gap-2
              text-sm
              text-muted-foreground
              "
              >
                <Car className="w-5 h-5 text-accent" />
                Cars • Tata Ace • Vans • Trucks
              </div>

              <div
                className="
              mt-7
              flex
              flex-col
              gap-3
              "
              >
                <a
                  href="https://maps.google.com/?q=Sri+Sai+Autogarage+Thillainayakapuram+Vandigate+Tamil+Nadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  py-3
                  rounded-xl
                  bg-surface-elevated
                  border
                  border-white/10
                  hover:border-accent
                  hover:text-accent
                  transition-all
                  "
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  py-3
                  rounded-xl
                  bg-[#25D366]
                  text-white
                  font-semibold
                  hover:scale-[1.02]
                  transition-transform
                  "
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Hours */}

            <div
              className="
            p-7
            rounded-3xl
            bg-surface
            border
            border-white/10
            "
            >
              <div className="flex items-center gap-3 mb-5">
                <Clock className="w-6 h-6 text-accent" />

                <h3
                  className="
                text-xl
                font-heading
                font-bold
                text-white
                "
                >
                  Working Hours
                </h3>
              </div>

              {businessHours.map((item) => (
                <div
                  key={item.day}
                  className="
                  flex
                  justify-between
                  py-3
                  border-b
                  border-white/5
                  last:border-none
                  text-sm
                  "
                >
                  <span className="text-muted-foreground">{item.day}</span>

                  <span className="text-white font-medium">{item.hours}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
