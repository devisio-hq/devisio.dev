import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import NavigationObserver from "@/components/layout/navigation-observer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devisio.fr"),
  title: "Devisio — Ton devis en 2 minutes, à la voix",
  description:
    "Fini les tableaux Excel bricolés. Devisio génère tes devis à la voix en 2 minutes.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Devisio — Ton devis en 2 minutes, à la voix",
    description:
      "Fini les tableaux Excel bricolés. Devisio génère tes devis à la voix en 2 minutes.",
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
      <body className="min-h-full flex flex-col">
        <NavigationObserver />
        {children}
      </body>
    </html>
  );
}
