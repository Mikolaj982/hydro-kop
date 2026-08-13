'use client'
import { useRef } from 'react';
import { contactParts } from '@/data/content';
import { ArrowUpRight, Check, Phone } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { Reveal } from '@/components/animations/Reveal';

export const Hero = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const phoneHref = contactParts.phoneParts.join("");

    return (
        <section id="top" ref={ref} className="relative min-h-screen w-full overflow-hidden bg-ink text-white">
            <motion.div style={{ y }} className="absolute inset-0">
                <Image
                    src={'/images/hero.webp'}
                    alt="Koparka Hydro-Kop podczas prac ziemnych"
                    priority
                    className="w-full h-[120%] object-cover opacity-55"
                    fill
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />
                <div className="absolute inset-0 grid-lines opacity-40" />
            </motion.div>

            <div className="relative z-10 container-x pt-28 pb-24 min-h-screen flex flex-col justify-between">
                <div className="max-w-4xl">
                    <Reveal>
                        <SectionLabel>Roboty ziemne · Świętokrzyskie</SectionLabel>
                    </Reveal>
                    <h1 className="mt-6 text-white font-display font-semibold text-2xl sm:text-3xl md:text-6xl lg:text-7xl leading-[1.1] sm:leading-[0.95] tracking-tight">
                        Usługi koparką i roboty ziemne<br />
                        <span className="text-yellow">Starachowice</span> i woj. świętokrzyskie
                    </h1>
                    <p className="mt-8 text-md md:text-xl text-white/70 max-w-2xl leading-relaxed">
                        Od 2019 roku wykonujemy pełen zakres prac ziemnych: przyłącza wod-kan i gazowe, wykopy pod fundamenty, wyburzenia, korytowanie, utwardzanie terenu oraz roboty drogowe i brukarskie. Starachowice i okolice - solidnie oraz terminowo, bez wymówek.
                    </p>
                    <Reveal delay={0.3}>
                        <div className="mt-10 flex flex-wrap gap-3">
                            <a href={`tel:${phoneHref}`} className="group inline-flex items-center gap-3 bg-yellow text-ink px-7 py-4 rounded-full font-semibold hover:bg-yellow-deep transition-all">
                                <Phone className="w-5 h-5" /> Zadzwoń teraz
                            </a>
                            <a href="#kontakt" className="group inline-flex items-center gap-3 border border-white/20 text-white px-7 py-4 rounded-full font-semibold hover:bg-white hover:text-ink transition-all">
                                Darmowa wycena <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={0.5}>
                    <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 text-sm text-white/80">
                        {["Terminowe realizacje", "Nowoczesny sprzęt", "Kompleksowa obsługa", "Wycena w 24h"].map(t => (
                            <div key={t} className="flex items-center gap-2.5">
                                <div className="w-6 h-6 rounded-full bg-yellow/15 flex items-center justify-center">
                                    <Check className="w-3.5 h-3.5 text-yellow" strokeWidth={3} />
                                </div>
                                {t}
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>

            <div className="absolute bottom-8 right-8 z-10 hidden md:flex items-center gap-2 text-xs text-white/40 rotate-90 origin-bottom-right">
                <span className="tracking-[0.3em] uppercase">Przewiń</span>
                <div className="w-12 h-px bg-white/30" />
            </div>
        </section>
    );
}