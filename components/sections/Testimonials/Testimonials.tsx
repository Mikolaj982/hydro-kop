import { SectionLabel } from "@/components/ui/SectionLabel";

const testis = [
    { q: "Wykop pod fundament domu zrobili w dwa dni, tak jak się umawialiśmy. Wjechali sprzętem tam, gdzie inna firma odmawiała.", n: "Marek K.", r: "Inwestor prywatny, Starachowice" },
    { q: "Podjazd z kostki granitowej wygląda dokładnie tak, jak chciałem. Widać, że chłopaki robią to codziennie i wiedzą, co robią.", n: "Anna P.", r: "Klientka indywidualna, Kielce" },
    { q: "Rozbiórka stodoły z wywozem gruzu w jednym pakiecie. Zero mojego zaangażowania, tylko wskazałem co ma zniknąć.", n: "Tomasz L.", r: "Rolnik, powiat ostrowiecki" },
];

export const Testimonials = () => {
    return (
        <section className="py-28 md:py-40 bg-background">
            <div className="container-x">
                <div className="max-w-3xl mb-16">
                    {/* <Reveal> */}
                    <SectionLabel>Opinie klientów</SectionLabel>
                    {/* </Reveal> */}
                    {/* <Reveal delay={0.05}> */}
                    <h2 className="mt-6 text-4xl md:text-6xl font-display font-semibold leading-[1.02]">
                        Ludzie, którzy nas polecają dalej.
                    </h2>
                    {/* </Reveal> */}
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                    {testis.map((t, i) => (
                        // <Reveal key={i} delay={i * 0.08}>
                        <div key={i} className="h-full p-8 rounded-3xl bg-cream border border-border flex flex-col">
                            <div className="text-yellow text-4xl font-display leading-none">"</div>
                            <p className="mt-4 text-lg leading-relaxed">{t.q}</p>
                            <div className="mt-auto pt-8 border-t border-border/60">
                                <p className="font-semibold">{t.n}</p>
                                <p className="text-sm text-muted-foreground">{t.r}</p>
                            </div>
                        </div>
                        /* </Reveal> */
                    ))}
                </div>
            </div>
        </section>
    );
}