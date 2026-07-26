import type { Metadata } from "next";
import { Figtree, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SITE_URL } from "@/data/content";
import Nav from "@/components/layout/Nav/Nav";
import { Footer } from "@/components/layout/Footer/Footer";

const figtree = Figtree({ subsets: ["latin", "latin-ext"], variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin", "latin-ext"], variable: "--font-display" });
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Hydro-Kop | Roboty ziemne, wykopy i minikoparka | Świętokrzyskie",
    template: "%s | Hydro-Kop",
  },

  description:
    "Hydro-Kop wykonuje roboty ziemne, wykopy pod fundamenty i instalacje, wyburzenia, brukarstwo oraz przyłącza wod-kan. Działamy na terenie województwa świętokrzyskiego. Bezpłatna wycena.",

  keywords: [
    "roboty ziemne",
    "wykopy",
    "minikoparka",
    "wyburzenia",
    "rozbiórki",
    "brukarstwo",
    "przyłącza wod-kan",
    "wykopy pod fundamenty",
    "transport kruszywa",
    "Starachowice",
    "Kielce",
    "Ostrowiec Świętokrzyski",
    "Skarżysko-Kamienna",
    "Świętokrzyskie",
    "Hydro-Kop",
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
    title: "Hydro-Kop | Roboty ziemne i wykopy",
    description:
      "Roboty ziemne, wykopy pod fundamenty, wyburzenia, brukarstwo oraz przyłącza wod-kan. Terminowe realizacje na terenie województwa świętokrzyskiego.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Hydro-Kop",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hydro-Kop | Roboty ziemne",
    description:
      "Wykopy, wyburzenia, brukarstwo i przyłącza wod-kan w województwie świętokrzyskim.",
    images: ["/opengraph-image.png"],
  },

  alternates: {
    canonical: SITE_URL,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}