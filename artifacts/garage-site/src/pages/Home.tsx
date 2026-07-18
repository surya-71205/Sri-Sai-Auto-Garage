import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/layout/FloatingButtons";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { WorkProcess } from "@/components/sections/WorkProcess";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Quotes } from "@/components/sections/Quotes";
import { Location } from "@/components/sections/Location";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] w-full bg-background dark">
      <Navbar />
      
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <WorkProcess />
        <Gallery />
        <Testimonials />
        <Quotes />
        <Location />
        <Contact />
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}