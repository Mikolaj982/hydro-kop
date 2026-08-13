import type { Metadata } from "next";
import { Figtree, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SITE_URL, contactParts } from "@/data/content";
import { Toaster } from "sonner";

const figtree = Figtree({ subsets: ["latin", "latin-ext"], variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin", "latin-ext"], variable: "--font-display" });
const phoneNumber = contactParts.phoneParts.join("");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Roboty ziemne i usługi koparką Starachowice | Hydro-Kop",
    template: "%s | Hydro-Kop",
  },

  description:
    "Hydro-Kop wykonuje roboty ziemne, usługi koparką i minikoparką w Starachowicach oraz regionie świętokrzyskim: wykopy pod fundamenty, wyburzenia i rozbiórki, przyłącza wod-kan i gazowe, brukarstwo. Bezpłatna wycena.",

  keywords: [
    "usługi koparką Starachowice",
    "roboty ziemne Starachowice",
    "wyburzenia Kielce",
    "przyłącza wod-kan Ostrowiec Świętokrzyski",
    "brukarstwo Skarżysko-Kamienna",
    "minikoparka Starachowice",
    "usługi koparką",
    "roboty ziemne",
    "wykopy",
    "wyburzenia",
    "minikoparka",
    "brukarstwo",
    "przyłącza wod-kan",
    "Starachowice",
    "Kielce",
    "Ostrowiec Świętokrzyski",
    "Skarżysko-Kamienna",
  ],

  authors: [
    {
      name: "Hydro-Kop",
    },
  ],

  creator: "Hydro-Kop",

  publisher: "Hydro-Kop",

  category: "Construction",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: SITE_URL,
    siteName: "Hydro-Kop",
    title: "Roboty ziemne i usługi koparką - Starachowice",
    description:
      "Roboty ziemne, wykopy pod fundamenty, wyburzenia, brukarstwo oraz przyłącza wod-kan. Terminowe realizacje w Starachowicach i całym województwie świętokrzyskim.",
  },

  twitter: {
    card: "summary",
    title: "Hydro-Kop | Roboty ziemne Starachowice",
    description:
      "Wykopy, wyburzenia, brukarstwo i przyłącza wod-kan w Starachowicach i województwie świętokrzyskim.",
  },

  alternates: {
    canonical: SITE_URL,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE_URL}#business`,

  name: "Hydro-Kop",
  url: SITE_URL,
  telephone: phoneNumber,
  logo: `${SITE_URL}/images/logoHK.png`,
  image: `${SITE_URL}/images/logoHK.png`,

  description:
    "Hydro-Kop wykonuje usługi koparką, roboty ziemne, wykopy pod fundamenty, wyburzenia i rozbiórki, brukarstwo, przyłącza wod-kan i gazowe oraz transport materiałów.",

  address: {
    "@type": "PostalAddress",
    streetAddress: "Słoneczna 48",
    postalCode: "27-230",
    addressLocality: "Dziurów",
    addressCountry: "PL",
  },

  areaServed: [
    "Starachowice",
    "Adamów",
    "Kuczów",
    "Lubienia",
    "Wąchock",
    "Dziurów",
    "Brody",
    "Ostrowiec Świętokrzyski",
    "Skarżysko-Kamienna",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pl"
      className={cn("h-full", "antialiased", "font-sans", figtree.variable, spaceGrotesk.variable)}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}