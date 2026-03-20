import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Artizen — Ton devis en 2 minutes, à la voix",
  description:
    "Fini les tableaux Excel bricolés. Artizen génère tes devis à la voix en 2 minutes.",
  openGraph: {
    title: "Artizen — Ton devis en 2 minutes, à la voix",
    description:
      "Fini les tableaux Excel bricolés. Artizen génère tes devis à la voix en 2 minutes.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
