import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = [
  { n: "01", t: "Kontakt", d: "Dzwonisz lub piszesz — opowiadasz o zakresie." },
  { n: "02", t: "Bezpłatna wycena", d: "Przyjeżdżamy na miejsce i podajemy konkretną cenę." },
  { n: "03", t: "Ustalamy termin", d: "Rezerwujemy sprzęt i wpisujemy Cię w grafik." },
  { n: "04", t: "Wykonanie prac", d: "Pracujemy sprawnie, informujemy o postępach." },
  { n: "05", t: "Odbiór", d: "Zamiatamy po sobie i oddajemy gotowy plac." },
];

export const Process = () => {
  return (
    <section className="py-28 md:py-40 bg-background">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-20">
          {/* <Reveal> */}
          <SectionLabel>Jak pracujemy</SectionLabel>
          {/* </Reveal> */}
          {/* <Reveal delay={0.05}> */}
          <h2 className="mt-6 text-4xl md:text-6xl font-display font-semibold leading-[1.02]">
            Pięć kroków od telefonu do gotowej pracy.
          </h2>
          {/* </Reveal> */}
        </div>
        <div className="grid md:grid-cols-5 gap-6 md:gap-4 relative">
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-border" />
          {steps.map((s, i) => (
            // <Reveal key={s.n} delay={i * 0.08} className="text-center relative">
            <div key={s.n}>
              <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-ink text-yellow font-display font-semibold text-sm mx-auto">
                {s.n}
              </div>
              <h3 className="mt-6 text-lg font-display font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              {/* </Reveal> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
