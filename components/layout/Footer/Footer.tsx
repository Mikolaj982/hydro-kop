import { EMAIL, PHONE, PHONE_HREF } from "@/data/content";
import Image from "next/image";
import logoMark from '@/public/images/logoHK.png';
import Link from "next/link";

export const Footer = () => (
    <footer className="bg-ink text-white/60 border-t border-white/5">
        <div className="container-x py-16 grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
                <div className="flex items-center gap-2.5">
                    <Image src={logoMark} alt="Hydro-Kop" className="h-10 w-10" width={40} height={40} />
                    <span className="text-white font-display font-semibold tracking-tight text-lg">Hydro-Kop</span>
                </div>
                <p className="mt-5 max-w-sm text-sm leading-relaxed">
                    Roboty ziemne, wykopy, wyburzenia i brukarstwo w regionie świętokrzyskim. Firma rodzinna z Dziurowa, działamy od 2019 roku.
                </p>
            </div>
            <div>
                <p className="text-white text-sm font-semibold mb-4">Nawigacja</p>
                <ul className="space-y-2 text-sm">
                    {[["Usługi", "#uslugi"], ["Sprzęt", "#sprzet"], ["Realizacje", "#realizacje"], ["FAQ", "#faq"], ["Kontakt", "#kontakt"]].map(([l, h]) => (
                        <li key={h}><a href={h} className="hover:text-yellow transition-colors">{l}</a></li>
                    ))}
                </ul>
            </div>
            <div>
                <p className="text-white text-sm font-semibold mb-4">Kontakt</p>
                <ul className="space-y-2 text-sm">
                    <li><a href={PHONE_HREF} className="hover:text-yellow">{PHONE}</a></li>
                    <li><a href={`mailto:${EMAIL}`} className="hover:text-yellow">{EMAIL}</a></li>
                    <li>Dziurów, świętokrzyskie</li>
                    <li>Pon–Sob 7:00 – 19:00</li>
                </ul>
            </div>
            <div>
                <p className="text-white text-sm font-semibold mb-4">Informacje</p>
                <ul className="space-y-2 text-sm">
                    <li>
                        <Link
                            href="/polityka-prywatnosci"
                            className="hover:text-yellow transition-colors"
                        >
                            Polityka prywatności
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="border-t border-white/5">
            <div className="container-x py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/40">
                <p>© {new Date().getFullYear()} Hydro-Kop. Wszelkie prawa zastrzeżone.</p>
                <p>Roboty ziemne · Wykopy · Wyburzenia · Brukarstwo</p>
            </div>
        </div>
    </footer>
);