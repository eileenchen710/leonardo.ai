import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "AIKO — AI Kitchen Operations | Food Processing & Central Kitchen",
  description:
    "AIKO is an AI-driven food processing and central kitchen operator producing ready meals, sauces, portioned proteins and prepared produce for restaurant groups, retailers and institutions. Smarter Kitchens, Better Operations.",
  keywords: [
    "central kitchen",
    "food processing",
    "ready meals manufacturer",
    "AI kitchen operations",
    "HACCP",
    "BRCGS",
    "private label food",
  ],
  openGraph: {
    title: "AIKO — Smarter Kitchens, Better Operations.",
    description:
      "AI-driven food processing and central kitchen operations, certified and audited end-to-end.",
    type: "website",
  },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#0a0a09",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
