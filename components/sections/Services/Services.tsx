'use client'
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowUpRight } from "lucide-react";
import { services, serviceCoverage } from "@/data/content";
import { Reveal } from "@/components/animations/Reveal";
import { motion } from "motion/react";

export const Services = () => {
    return (
        <section id="uslugi" className="py-28 md:py-40 bg-background">
            <div className="container-x">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <Reveal>
                            <SectionLabel>
                                <h2>Zakres usług</h2>
                            </SectionLabel>
                        </Reveal>
                        <Reveal delay={0.05}>
                            <p className="mt-6 text-4xl md:text-6xl font-display font-semibold leading-[1.02] tracking-tight">
                                Wszystko, co potrzebne pod <span className="yellow-underline">budowę</span> i wokół niej.
                            </p>
                        </Reveal>
                    </div>
                    <Reveal delay={0.1}>
                        <p className="text-muted-foreground max-w-md">
                            Od pierwszego wjazdu koparki po ostatnią kostkę brukową - zajmujemy się całą pracą, żebyś nie musiał koordynować kilku ekip.
                        </p>
                    </Reveal>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((s, i) => (
                        <Reveal key={s.title} delay={i * 0.05}>
                            <motion.a
                                key={i}
                                href="#kontakt"
                                whileHover={{ y: -4 }}
                                className="group relative block h-full p-8 rounded-3xl border border-border bg-card overflow-hidden transition-colors hover:border-ink"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow/0 group-hover:bg-yellow/10 rounded-full blur-2xl transition-all duration-500" />
                                <div className="relative flex flex-col h-full min-h-[280px]">
                                    <div className="w-14 h-14 rounded-2xl bg-secondary group-hover:bg-yellow flex items-center justify-center transition-colors">
                                        <s.icon className="w-7 h-7" strokeWidth={1.75} />
                                    </div>
                                    <h3 className="mt-8 text-2xl font-display font-semibold">{s.title}</h3>
                                    <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
                                    <div className="mt-auto pt-8 flex items-center gap-2 text-sm font-medium">
                                        Zapytaj o wycenę
                                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </div>
                                </div>
                            </motion.a>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.15}>
                    <p className="mt-12 text-sm text-muted-foreground max-w-3xl">
                        {serviceCoverage}
                    </p>
                </Reveal>
            </div>
        </section>
    );
}