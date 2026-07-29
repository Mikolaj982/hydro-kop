import { Contact } from "@/components/sections/Contact/Contact";
import { CtaBanner } from "@/components/sections/CTABaner/CTABaner";
import { Equipment } from "@/components/sections/Equipment/Equipment";
import { Faq } from "@/components/sections/FAQ/Faq";
import { Gallery } from "@/components/sections/Gallery/Gallery";
import { Hero } from "@/components/sections/Hero/Hero";
import { Process } from "@/components/sections/Process/Proccess";
import { Services } from "@/components/sections/Services/Services";
import { Stats } from "@/components/sections/Stats/Stats";
import { Testimonials } from "@/components/sections/Testimonials/Testimonials";
import { Why } from "@/components/sections/Why/Why";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Services />
      <Equipment />
      <Gallery />
      <Why />
      <Process />
      <Stats />
      <Testimonials />
      <Faq />
      <CtaBanner />
      <Contact />
    </main>
  )
}
