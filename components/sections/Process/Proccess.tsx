'use client'
import { Reveal } from "@/components/animations/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { steps } from "@/data/content";

export const Process = () => {
  return (
    <section className="py-28 md:py-40 bg-background">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <Reveal>
            <SectionLabel>Jak pracujemy</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-4xl md:text-6xl font-display font-semibold leading-[1.02]">
              Jak realizujemy roboty ziemne i usługi koparką?
            </h2>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-5 gap-6 md:gap-4 relative">
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-border" />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08} className="text-center relative">
              <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-ink text-yellow font-display font-semibold text-sm mx-auto">
                {s.n}
              </div>
              <h3 className="mt-6 text-lg font-display font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
