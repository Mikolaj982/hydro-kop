'use client'
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
    { q: "Ile kosztują roboty ziemne?", a: "Wycena zależy od kubatury, dojazdu i typu gruntu. Przyjeżdżamy na miejsce, mierzymy zakres i podajemy konkretną kwotę — bez zaskoczeń w trakcie." },
    { q: "Czy wykonujecie wykopy pod fundamenty?", a: "Tak, to jedna z naszych podstawowych usług. Robimy wykopy pod ławy, płyty i piwnice, zgodnie z projektem i wytycznymi kierownika budowy." },
    { q: "Na jakim terenie działacie?", a: "Głównie powiat starachowicki, kielecki, ostrowiecki, skarżyski oraz Kielce i okolice Radomia. Przy większych zleceniach dojeżdżamy dalej — pytaj." },
    { q: "Czy zapewniacie transport materiałów?", a: "Tak. Dostarczamy kruszywa, piasek, ziemię ogrodową, a także wywozimy urobek i gruz z placu budowy." },
    { q: "Jak szybko można rozpocząć prace?", a: "Najczęściej w ciągu 5–10 dni od potwierdzenia zlecenia. W sezonie warto rezerwować termin z kilkutygodniowym wyprzedzeniem." },
    { q: "Czy wystawiacie fakturę VAT?", a: "Tak, pracujemy zarówno z klientami prywatnymi, jak i firmami. Wystawiamy standardową fakturę VAT." },
    { q: "Czy sprzątacie po zakończonych pracach?", a: "Zawsze zostawiamy plac uporządkowany — bez pryzm ziemi, luźnego gruzu czy zapomnianego sprzętu." },
    { q: "Czy podpisujecie umowę na wykonanie?", a: "Przy większych zleceniach — tak. Standardem jest pisemne potwierdzenie zakresu, ceny i terminu przed rozpoczęciem prac." },
    { q: "Czy pracujecie zimą?", a: "Przy sprzyjających warunkach i niezamarzniętym gruncie — tak. Zimą realizujemy też wyburzenia i drobniejsze prace." },
];

export const Faq = () => {
    const [open, setOpen] = useState<number | null>(0);
    return (
        <section id="faq" className="py-28 md:py-40 bg-cream">
            <div className="container-x">
                <div className="grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                        {/* <Reveal> */}
                        <SectionLabel>Częste pytania</SectionLabel>
                        {/* </Reveal> */}
                        {/* <Reveal delay={0.05}> */}
                        <h2 className="mt-6 text-4xl md:text-5xl font-display font-semibold leading-[1.02]">
                            Wiemy, o co zwykle pytają klienci.
                        </h2>
                        {/* </Reveal> */}
                        {/* <Reveal delay={0.1}> */}
                        <p className="mt-6 text-muted-foreground">Nie znalazłeś odpowiedzi? Napisz lub zadzwoń — najszybciej wyjaśnimy to na rozmowie.</p>
                        {/* </Reveal> */}
                    </div>
                    <div className="lg:col-span-8 divide-y divide-border/70 border-y border-border/70">
                        {faqs.map((f, i) => (
                            <div key={i}>
                                <button onClick={() => setOpen(open === i ? null : i)} className="w-full py-6 flex items-center justify-between gap-4 text-left">
                                    <span className="text-lg md:text-xl font-display font-medium">{f.q}</span>
                                    <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
                                </button>
                                {/* <AnimatePresence initial={false}> */}
                                {open === i && (
                                    /* <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} */
                                    /* className="overflow-hidden"> */
                                    <div className="overflow-hidden">
                                        <p className="pb-6 pr-10 text-muted-foreground leading-relaxed">{f.a}</p>
                                    </div>
                                    /* </motion.div> */
                                )}
                                {/* </AnimatePresence> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}