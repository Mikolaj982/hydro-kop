'use client'
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/data/content";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "@/components/animations/Reveal";

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
        },
    })),
};

export const Faq = () => {
    const [open, setOpen] = useState<number | null>(0);
    return (
        <section id="faq" className="py-28 md:py-40 bg-cream">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="container-x">
                <div className="grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                        <Reveal>
                            <SectionLabel>Częste pytania</SectionLabel>
                        </Reveal>
                        <Reveal delay={0.05}>
                            <h2 className="mt-6 text-4xl md:text-5xl font-display font-semibold leading-[1.02]">
                                Wiemy, o co zwykle pytają klienci.
                            </h2>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <p className="mt-6 text-muted-foreground">Nie znalazłeś odpowiedzi? Napisz lub zadzwoń — najszybciej wyjaśnimy to na rozmowie.</p>
                        </Reveal>
                    </div>
                    <div className="lg:col-span-8 divide-y divide-border/70 border-y border-border/70">
                        {faqs.map((f, i) => (
                            <div key={i}>
                                <button onClick={() => setOpen(open === i ? null : i)} className="w-full py-6 flex items-center justify-between gap-4 text-left">
                                    <span className="text-lg md:text-xl font-display font-medium">{f.q}</span>
                                    <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
                                </button>
                                <AnimatePresence initial={false}>
                                    {open === i && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden">
                                            <div className="overflow-hidden">
                                                <p className="pb-6 pr-10 text-muted-foreground leading-relaxed">{f.a}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}