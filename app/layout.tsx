import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/Common/ScrollToTop";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ramniranjan Jhunjhunwala College (Empowered Autonomous) | RJ College Mumbai",
  description:
    "Hindi Vidya Prachar Samiti's Ramniranjan Jhunjhunwala College of Arts, Science & Commerce (Empowered Autonomous). NAAC Re-Accredited 'A' Grade, Affiliated to University of Mumbai. Estd. 1963.",
  keywords: [
    "RJ College",
    "Ramniranjan Jhunjhunwala College",
    "HVPS",
    "Ghatkopar College",
    "Autonomous College Mumbai",
    "University of Mumbai",
    "Admissions 2025-26",
    "B.Sc Data Science",
    "B.Com",
    "BMS",
    "BAF",
    "BAMMC",
  ],
  authors: [{ name: "Hindi Vidya Prachar Samiti" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${plusJakarta.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-[#781628] selection:text-white">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
