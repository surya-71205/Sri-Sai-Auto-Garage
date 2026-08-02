import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  PHONE,
  WHATSAPP_NUMBER,
  ADDRESS,
  BUSINESS_HOURS,
} from "@/lib/constants";
import { Phone, MessageCircle, MapPin, Clock, Wrench } from "lucide-react";

export function Contact() {
  const services = [
    "Engine Problem",
    "AC Service",
    "Brake Issue",
    "General Service",
    "Diagnostics",
    "Vehicle Breakdown",
  ];

  return (
    <section
      id="contact"
      className="
      py-24 md:py-32
      bg-[#0A0A0B]
      border-t border-white/5
      relative
      overflow-hidden
      "
    >
      {/* Background glow */}

      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[600px]
        h-[300px]
        bg-accent/10
        blur-[120px]
        rounded-full
        "
      />

      <div
        className="
      container
      mx-auto
      px-4
      md:px-6
      relative
      z-10
      "
      >
        <SectionHeading
          title="Need Vehicle Assistance?"
          subtitle="
          Call us directly or WhatsApp your vehicle issue. 
          Our team will guide you with the right solution.
          "
          centered
        />

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
          mt-14
          max-w-5xl
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-6
          "
        >
          {/* Call Card */}

          <a
            href={`tel:${PHONE}`}
            className="
            group
            p-8
            rounded-3xl
            bg-surface
            border border-white/10
            hover:border-accent/50
            hover:-translate-y-2
            transition-all
            "
          >
            <div
              className="
              w-14
              h-14
              rounded-2xl
              bg-accent/10
              flex
              items-center
              justify-center
              mb-6
              group-hover:bg-accent
              transition
              "
            >
              <Phone
                className="
                text-accent
                group-hover:text-white
                "
              />
            </div>

            <p className="text-muted-foreground text-sm uppercase tracking-wider">
              Call Now
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-2">{PHONE}</h3>

            <p className="text-sm text-muted-foreground mt-3">
              Speak directly with our garage team
            </p>
          </a>

          {/* WhatsApp Card */}

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
            group
            p-8
            rounded-3xl
            bg-surface
            border border-white/10
            hover:border-[#25D366]/50
            hover:-translate-y-2
            transition-all
            "
          >
            <div
              className="
              w-14
              h-14
              rounded-2xl
              bg-[#25D366]/10
              flex
              items-center
              justify-center
              mb-6
              group-hover:bg-[#25D366]
              transition
              "
            >
              <MessageCircle
                className="
                text-[#25D366]
                group-hover:text-white
                "
              />
            </div>

            <p className="text-muted-foreground text-sm uppercase tracking-wider">
              WhatsApp
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-2">
              Send Vehicle Details
            </h3>

            <p className="text-sm text-muted-foreground mt-3">
              Share photos or explain your vehicle issue
            </p>
          </a>

          {/* Location Card */}

          <a
            href="#location"
            className="
            group
            p-8
            rounded-3xl
            bg-surface
            border border-white/10
            hover:border-accent/50
            hover:-translate-y-2
            transition-all
            "
          >
            <div
              className="
              w-14
              h-14
              rounded-2xl
              bg-accent/10
              flex
              items-center
              justify-center
              mb-6
              group-hover:bg-accent
              transition
              "
            >
              <MapPin
                className="
                text-accent
                group-hover:text-white
                "
              />
            </div>

            <p className="text-muted-foreground text-sm uppercase tracking-wider">
              Visit Workshop
            </p>

            <h3 className="text-lg font-bold text-foreground mt-2">
              Sri Sai Auto Garage
            </h3>

            <p className="text-sm text-muted-foreground mt-3">{ADDRESS}</p>
          </a>
        </motion.div>

        {/* Service enquiry */}

        <div
          className="
        mt-12
        max-w-4xl
        mx-auto
        p-8
        rounded-3xl
        bg-surface
        border border-white/10
        "
        >
          <div className="flex items-center gap-3 mb-6">
            <Wrench className="text-accent" />

            <h3
              className="
            text-xl
            font-bold
            text-foreground
            "
            >
              Common Services
            </h3>
          </div>

          <div
            className="
          flex
          flex-wrap
          gap-3
          "
          >
            {services.map((service) => (
              <span
                key={service}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-white/5
                  border border-white/10
                  text-sm
                  text-muted-foreground
                  "
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Timing */}

        <div
          className="
        mt-8
        flex
        justify-center
        items-center
        gap-3
        text-muted-foreground
        text-sm
        "
        >
          <Clock className="w-4 h-4 text-accent" />
          Open:
          <span className="text-foreground">{BUSINESS_HOURS[0].hours}</span>
        </div>
      </div>
    </section>
  );
}
