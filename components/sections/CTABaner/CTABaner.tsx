import { PHONE, PHONE_HREF } from "@/data/content"
import { ArrowRight, Phone } from "lucide-react"

export const CtaBanner = () => {
    return (
        <section className="py-16 bg-yellow">
            <div className="container-x flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                {/* <Reveal> */}
                <h2 className="text-3xl md:text-5xl font-display font-semibold text-ink leading-[1.05] max-w-2xl">
                    Planujesz budowę? Zadzwoń dziś, wycena jeszcze w tym tygodniu.
                </h2>
                {/* </Reveal> */}
                {/* <Reveal delay={0.1}> */}
                <div className="flex flex-wrap gap-3">
                    <a href={PHONE_HREF} className="inline-flex items-center gap-3 bg-ink text-white px-7 py-4 rounded-full font-semibold hover:bg-ink-soft transition-colors">
                        <Phone className="w-5 h-5" /> {PHONE}
                    </a>
                    <a href="#kontakt" className="inline-flex items-center gap-3 bg-white text-ink px-7 py-4 rounded-full font-semibold hover:bg-cream transition-colors">
                        Formularz <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
                {/* </Reveal> */}
            </div>
        </section>
    );
}
