'use client'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact";
import { sendContactForm } from "@/app/actions/contact/sendContactForm";
import { Field } from "@/components/ui/Field";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { contactParts } from "@/data/content";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";

export const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormValues>({ resolver: zodResolver(contactFormSchema) });
    const email = `${contactParts.emailUser}@${contactParts.emailDomain}`;
    const phone = contactParts.phoneParts.join(" ");
    const phoneHref = contactParts.phoneParts.join("");

    const onSubmit = async (data: ContactFormValues) => {
        const result = await sendContactForm(data);
        if (result.success) {
            toast.success("Wiadomość została wysłana");
            reset();
        } else {
            toast.error("Nie udało się wysłać wiadomości");
        }
    };

    return (
        <section id="kontakt" className="py-28 md:py-40 bg-ink text-white">
            <div className="container-x">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                    <div className="lg:col-span-5">
                        <Reveal>
                            <SectionLabel>Kontakt</SectionLabel>
                        </Reveal>
                        <Reveal delay={0.05}>
                            <h2 className="mt-6 text-4xl md:text-6xl font-display font-semibold leading-[1.02]">
                                Porozmawiajmy o Twoim projekcie.
                            </h2>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <p className="mt-6 text-white/60 leading-relaxed max-w-md">
                                Odbieramy telefony osobiście — bez sekretariatu i bez przekierowań. Odpowiadamy najczęściej w ciągu kilku godzin.
                            </p>
                        </Reveal>

                        <Reveal delay={0.15}>
                            <div className="mt-10 space-y-5">
                                {[
                                    { i: Phone, l: "Telefon", v: phone, h: `tel:${phoneHref}` },
                                    { i: Mail, l: "E-mail", v: email, h: `mailto:${email}` },
                                    { i: MapPin, l: "Baza", v: "Dziurów, woj. świętokrzyskie" },
                                    { i: Clock, l: "Godziny", v: "Pon–Sob 7:00 – 18:00" },
                                ].map(c => {
                                    return (<div key={c.l} className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                                            <c.i className="w-4 h-4 text-yellow" strokeWidth={1.75} />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-wider text-white/40">{c.l}</p>
                                            {c.h ? (
                                                <a href={c.h} className="text-lg text-white hover:text-yellow transition-colors">{c.v}</a>
                                            ) : (
                                                <p className="text-lg text-white">{c.v}</p>
                                            )}
                                        </div>
                                    </div>)
                                })}
                            </div>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <div className="mt-10 aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                                <iframe
                                    title="Mapa lokalizacji Hydro-Kop, Dziurów"
                                    src="https://www.openstreetmap.org/export/embed.html?bbox=20.914548251524824%2C50.93506570965036%2C21.32928213824357%2C51.091232625690104&amp;layer=mapnik&amp;marker=51.01321490327826%2C21.121915194884195"
                                    className="w-full h-full grayscale invert opacity-70"
                                    loading="lazy"
                                />
                            </div>
                        </Reveal>
                    </div>

                    <Reveal delay={0.1} className="lg:col-span-7">
                        <div className="lg:col-span-7">
                            <form
                                noValidate
                                onSubmit={handleSubmit(onSubmit)}
                                className="p-8 md:p-10 rounded-3xl bg-ink-soft border border-white/10"
                            >
                                <h3 className="text-2xl font-display font-semibold">Bezpłatna wycena</h3>
                                <p className="mt-2 text-sm text-white/50">
                                    Opisz zakres w kilku zdaniach - oddzwonimy z konkretami.
                                </p>

                                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                                    <Field label="Imię i nazwisko" required {...register("name")} error={errors.name?.message} />
                                    <Field label="Telefon" type="tel" required {...register("phone")} error={errors.phone?.message} />
                                    <Field label="E-mail" type="email" className="sm:col-span-2" {...register("email")} error={errors.email?.message} />
                                    <Field label="Lokalizacja inwestycji" className="sm:col-span-2" {...register("loc")} />
                                    <div className="sm:col-span-2">
                                        <label className="text-xs uppercase tracking-wider text-white/50">Zakres prac</label>
                                        <textarea
                                            rows={5}
                                            {...register("message")}
                                            className="mt-2 w-full bg-transparent border-b border-white/20 focus:border-yellow focus:outline-none py-3 text-white resize-none"
                                        />
                                        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
                                    </div>

                                    <input
                                        {...register("website")}
                                        tabIndex={-1}
                                        autoComplete="off"
                                        className="absolute -left-[9999px]"
                                    />

                                    <div className="sm:col-span-2">
                                        <label className="flex items-start gap-2 text-xs text-white/60">
                                            <input type="checkbox" {...register("consent")} className="mt-0.5" />
                                            <span>
                                                Zapoznałem(-am) się z{" "}
                                                <Link
                                                    href="/polityka-prywatnosci"
                                                    target="_blank"
                                                    className="underline hover:text-yellow"
                                                >
                                                    Polityką Prywatności
                                                </Link>{" "}
                                                i wyrażam zgodę na przetwarzanie moich danych osobowych w celu udzielenia
                                                odpowiedzi na przesłane zapytanie oraz przygotowania wyceny.
                                            </span>
                                        </label>
                                        {errors.consent && <p className="mt-1 text-xs text-red-400">{errors.consent.message}</p>}
                                    </div>
                                </div>

                                <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                    <p className="text-xs text-white/40 max-w-sm">
                                        Pola oznaczone jako wymagane muszą zostać wypełnione, aby wysłać zapytanie.
                                    </p>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="inline-flex items-center gap-3 bg-yellow text-ink px-7 py-4 rounded-full font-semibold hover:bg-yellow-deep transition-colors disabled:opacity-70"
                                    >
                                        {isSubmitting ? "Wysyłanie..." : <>Wyślij zapytanie <Send className="w-4 h-4" /></>}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

