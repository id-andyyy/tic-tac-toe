import type { Metadata } from "next";
import { Geist, Geist_Mono, Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MEGA ХОДЫ",
  description: "Сыграйте в крестики-нолики в новом формате",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={jost.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jost.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
