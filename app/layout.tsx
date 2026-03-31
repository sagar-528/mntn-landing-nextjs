import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import GSAPProvider from "@/components/GSAPProvider";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MNTN – Conquer Your Peaks",
  description: "Discover the best mountain trails worldwide. Push your limits. Live your adventure.",
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
