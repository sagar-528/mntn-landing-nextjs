import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import GSAPProvider from "@/components/GSAPProvider";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "MNTN – Be Prepared for the Mountains",
  description: "A hiking guide. Be prepared for the mountains and beyond.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body style={{ fontFamily: "var(--font-sans)" }}>
        <GSAPProvider>{children}</GSAPProvider>
      </body>
    </html>
  );
}
