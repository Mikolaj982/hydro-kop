import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowRight } from "lucide-react";
import { whys } from "@/data/content";

export const Why = () => {
    return (
        <section id="dlaczego" className="py-28 md:py-40 bg-cream">
            <div className="container-x">
                <div className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4">
                        {/* <Reveal> */}
                        <SectionLabel>Dlaczego my</SectionLabel>
                        {/* </Reveal> */}
                        {/* <Reveal delay={0.05}> */}
                        <h2 className="mt-6 text-4xl md:text-5xl font-display font-semibold leading-[1.02]">
                            Sześć powodów, dla których wracają do nas klienci.
                        </h2>
                        {/* </Reveal> */}
                        {/* <Reveal delay={0.1}> */}
                        <a href="#kontakt" className="mt-10 inline-flex items-center gap-2 text-ink font-medium border-b border-ink pb-1">
                            Umów rozmowę <ArrowRight className="w-4 h-4" />
                        </a>
                        {/* </Reveal> */}
                    </div>
                    <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-8 gap-y-10">
                        {whys.map((w, i) => (
                            //   <Reveal key={w.t} delay={i * 0.05}>
                            <div className="flex gap-5" key={w.t}>
                                <div className="shrink-0 w-12 h-12 rounded-xl bg-ink text-yellow flex items-center justify-center">
                                    <w.icon className="w-5 h-5" strokeWidth={1.75} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-display font-semibold">{w.t}</h3>
                                    <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{w.d}</p>
                                </div>
                            </div>
                            //   </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
