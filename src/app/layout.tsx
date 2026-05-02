import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({
  variable: "--font-sans-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Magic — Logiciel de caisse et gestion de magasin | Computer Associés",
    template: "%s | Magic — Computer Associés",
  },
  description:
    "Magic est le logiciel de caisse certifié NF525 et la solution complète de gestion de magasin développée par Computer Associés à Marseille. Mono ou multi-magasins, retail, bio, e-commerce.",
  metadataBase: new URL("https://magic-pos.example.com"),
  openGraph: {
    title: "Magic — Logiciel de caisse et gestion de magasin",
    description:
      "Logiciel de caisse certifié NF525 et solution complète de gestion de magasin.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
