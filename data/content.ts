import { Clock, Grid3x3, Hammer, Handshake, Package, PickaxeIcon, Sparkles, Truck, Users, Wallet, Waves, Wrench } from "lucide-react";
import p1 from '@/public/images/globe.svg';

export const PHONE = "+48 600 000 000";
export const PHONE_HREF = "tel:+48600000000";
export const EMAIL = "biuro@hydro-kop.pl";
export const links = [
    ["Usługi", "#uslugi"],
    ["Sprzęt", "#sprzet"],
    ["Realizacje", "#realizacje"],
    ["O nas", "#dlaczego"],
    ["FAQ", "#faq"],
    ["Kontakt", "#kontakt"],
];
export const SITE_URL = "https://example.com";
export const services = [
    { icon: PickaxeIcon, title: "Roboty ziemne", desc: "Kompleksowe prace ziemne, niwelacje i przygotowanie działek pod inwestycje." },
    { icon: Hammer, title: "Wyburzenia i rozbiórki", desc: "Rozbiórka budynków gospodarczych, stodół i obiektów murowanych z wywozem gruzu." },
    { icon: Grid3x3, title: "Wykopy pod fundamenty", desc: "Precyzyjne wykopy pod ławy, płyty i piwnice — zgodnie z projektem." },
    { icon: Waves, title: "Przyłącza wod-kan", desc: "Wykopy pod wodę, kanalizację, drenaże i szamba. Rzetelnie i szczelnie." },
    { icon: Package, title: "Brukarstwo", desc: "Podjazdy, tarasy i alejki z kostki brukowej oraz granitowej." },
    { icon: Truck, title: "Transport materiałów", desc: "Dostawa kruszyw, piasku, ziemi oraz wywóz gruzu i urobku." },
];
export const faqs = [
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
export const gallery = [
    { src: p1, alt: "Wykop pod fundamenty domu jednorodzinnego", tall: true },
    { src: p1, alt: "Podjazd z kostki granitowej" },
    { src: p1, alt: "Wykop pod przyłącze wod-kan minikoparką" },
    { src: p1, alt: "Wyburzenie starego budynku" },
    { src: p1, alt: "Wyrównanie i utwardzenie terenu" },
    { src: p1, alt: "Wykop pod oczko wodne w ogrodzie" },
];
export const steps = [
    { n: "01", t: "Kontakt", d: "Dzwonisz lub piszesz — opowiadasz o zakresie." },
    { n: "02", t: "Bezpłatna wycena", d: "Przyjeżdżamy na miejsce i podajemy konkretną cenę." },
    { n: "03", t: "Ustalamy termin", d: "Rezerwujemy sprzęt i wpisujemy Cię w grafik." },
    { n: "04", t: "Wykonanie prac", d: "Pracujemy sprawnie, informujemy o postępach." },
    { n: "05", t: "Odbiór", d: "Zamiatamy po sobie i oddajemy gotowy plac." },
];
export const stats = [
    { n: 6, s: "+", l: "Lat doświadczenia" },
    { n: 300, s: "+", l: "Zrealizowanych prac" },
    { n: 100, s: "%", l: "Zaangażowania" },
    { n: 24, s: "h", l: "Średni czas odpowiedzi" },
];
export const testis = [
    { q: "Wykop pod fundament domu zrobili w dwa dni, tak jak się umawialiśmy. Wjechali sprzętem tam, gdzie inna firma odmawiała.", n: "Marek K.", r: "Inwestor prywatny, Starachowice" },
    { q: "Podjazd z kostki granitowej wygląda dokładnie tak, jak chciałem. Widać, że chłopaki robią to codziennie i wiedzą, co robią.", n: "Anna P.", r: "Klientka indywidualna, Kielce" },
    { q: "Rozbiórka stodoły z wywozem gruzu w jednym pakiecie. Zero mojego zaangażowania, tylko wskazałem co ma zniknąć.", n: "Tomasz L.", r: "Rolnik, powiat ostrowiecki" },
];
export const whys = [
    { icon: Clock, t: "Terminowość", d: "Mówimy realne terminy i ich pilnujemy. Bez znikania z placu budowy." },
    { icon: Users, t: "Doświadczenie", d: "Od 2019 roku pracujemy dla klientów prywatnych i wykonawców. Ponad 300 zakończonych prac." },
    { icon: Wrench, t: "Nowoczesny park maszynowy", d: "Serwisowany sprzęt do 2020 roku — mniej przestojów, więcej wykopu w ciągu dnia." },
    { icon: Handshake, t: "Kompleksowa realizacja", d: "Wykopy, wywóz, brukarstwo, przyłącza — wszystko z jedną firmą, jedną fakturą." },
    { icon: Wallet, t: "Konkurencyjne ceny", d: "Wycena rozpisana pozycja po pozycji. Bez ukrytych kosztów pod koniec projektu." },
    { icon: Sparkles, t: "Indywidualne podejście", d: "Wchodzimy w projekt, dopytujemy, podpowiadamy tańsze rozwiązania. Ty decydujesz." },
];
