import { SectionLabel } from "@/components/ui/SectionLabel"
import eqMini from '@/public/images/globe.svg'
import { Hammer, Shield, Sparkles, Wrench } from "lucide-react";
import Image from "next/image";

export const Equipment = () => {
    return (
        <section id="sprzet" className="py-28 md:py-40 bg-ink text-white relative overflow-hidden">
            <div className="absolute inset-0 grid-lines opacity-30" />
            <div className="container-x relative">
                <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
                    <div className="lg:col-span-7">
                        {/* <Reveal> */}
                        <SectionLabel>Park maszynowy</SectionLabel>
                        {/* </Reveal> */}
                        {/* <Reveal delay={0.05}> */}
                        <h2 className="mt-6 text-4xl md:text-6xl font-display font-semibold leading-[1.02]">
                            Sprzęt, który skraca prace<br />o <span className="text-yellow">dni, nie godziny.</span>
                        </h2>
                        {/* </Reveal> */}
                    </div>
                    {/* <Reveal delay={0.1} className="lg:col-span-5"> */}
                    <p className="text-white/60 leading-relaxed">
                        Regularnie serwisowane maszyny minimalizują przestoje na budowie. Do wąskich przejazdów mamy minikoparki, do dużych zleceń — sprzęt gąsienicowy i wywrotki. Wybieramy maszynę pod zakres, nie odwrotnie.
                    </p>
                    {/* </Reveal> */}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { img: eqMini, name: "Minikoparka", specs: ["Szerokość od 90 cm", "Wąskie przejazdy", "Precyzyjne wykopy"] },
                        { img: eqMini, name: "Wywrotka i transport", specs: ["Wywóz ziemi i gruzu", "Dostawa kruszyw", "Ładowność do 15 t"] },
                    ].map((e, i) => (
                        // <Reveal key={e.name} delay={i * 0.1}>
                        <div key={e.name} className="group rounded-3xl overflow-hidden bg-ink-soft border border-white/5">
                            <div className="aspect-[4/3] overflow-hidden bg-black">
                                <Image src={e.img} alt={e.name} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" fill />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-display font-semibold">{e.name}</h3>
                                <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
                                    {e.specs.map(s => <li key={s} className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-yellow" />{s}</li>)}
                                </ul>
                            </div>
                        </div>
                        // {/* </Reveal> */}
                    ))}
                </div>

                {/* <Reveal delay={0.2}> */}
                <div className="mt-10 grid md:grid-cols-4 gap-4">
                    {[
                        { icon: Wrench, t: "Zagęszczarki i płyty wibracyjne" },
                        { icon: Hammer, t: "Młot hydrauliczny" },
                        { icon: Shield, t: "Regularne przeglądy" },
                        { icon: Sparkles, t: "Sprzęt do 2020 r." },
                    ].map(it => (
                        <div key={it.t} className="p-6 rounded-2xl border border-white/10 flex items-start gap-4">
                            <it.icon className="w-5 h-5 text-yellow shrink-0 mt-0.5" strokeWidth={1.75} />
                            <p className="text-sm text-white/80">{it.t}</p>
                        </div>
                    ))}
                </div>
                {/* </Reveal> */}
            </div>
        </section>
    );
}
