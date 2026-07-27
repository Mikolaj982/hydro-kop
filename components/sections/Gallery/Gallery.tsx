'use client'
import { X } from "lucide-react";
import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Image from "next/image";
import { gallery } from "@/data/content";

export const Gallery = () => {
    const [lb, setLb] = useState<number | null>(null);
    return (
        <section id="realizacje" className="py-28 md:py-40 bg-background">
            <div className="container-x">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
                    <div>
                        {/* <Reveal> */}
                        <SectionLabel>Zrealizowane prace</SectionLabel>
                        {/* </Reveal> */}
                        {/* <Reveal delay={0.05}> */}
                        <h2 className="mt-6 text-4xl md:text-6xl font-display font-semibold leading-[1.02]">
                            Zdjęcia z placu budowy.
                        </h2>
                        {/* </Reveal> */}
                    </div>
                    {/* <Reveal delay={0.1}> */}
                    <p className="text-muted-foreground max-w-sm">
                        Krótki wybór z ponad trzystu prac wykonanych w regionie świętokrzyskim.
                    </p>
                    {/* </Reveal> */}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[240px]">
                    {gallery.map((g, i) => (
                        // <Reveal key={i} delay={(i % 3) * 0.06}
                        <div key={i}
                            className={`${i === 0 ? "row-span-2" : ""} ${i === 3 ? "row-span-2" : ""} ${i === 4 ? "col-span-2 md:col-span-1" : ""}`}>
                            <button onClick={() => setLb(i)} className="group relative w-full h-full overflow-hidden rounded-2xl bg-secondary block">
                                <Image src={g.src} alt={g.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" fill />
                                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-4 left-4 right-4 text-left text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                    {g.alt}
                                </div>
                            </button>
                        </div>
                        /* </Reveal> */
                    ))}
                </div>
            </div>

            {/* <AnimatePresence> */}
            {lb !== null && (
                //   <motion.div
                <div
                    // initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-md flex items-center justify-center p-4"
                    onClick={() => setLb(null)}
                >
                    <button className="absolute top-6 right-6 text-white p-2" onClick={() => setLb(null)}><X className="w-8 h-8" /></button>
                    {/* <motion.img */}
                    {/* <Image
            //   initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            //   src={gallery[lb].src} alt={gallery[lb].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            /> */}
                </div>
                /* </motion.div> */
            )}
            {/* </AnimatePresence> */}
        </section>
    );
}
