import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GenX Build — Custom PC Builds in Bangalore | Gaming, Editing, WFH",
  description:
    "Handcrafted custom PCs for gamers, content creators, and professionals in Bangalore. Choose from prebuilt configs or build your own. 48-hour turnaround, 1-year warranty, transparent pricing.",
  keywords: [
    "custom PC build Bangalore",
    "gaming PC Bangalore",
    "custom built computer India",
    "PC builder near me",
    "custom gaming PC India",
    "workstation PC Bangalore",
    "video editing PC build",
    "GenX Build",
    "build custom PC online India",
    "PC assembler Bangalore",
  ],
  openGraph: {
    title: "GenX Build — Custom PCs, Built Around You",
    description:
      "Handcrafted custom PCs for gamers, creators, and professionals in Bangalore. 48hr turnaround. 1-year warranty. Transparent pricing.",
    type: "website",
    locale: "en_IN",
    siteName: "GenX Build",
  },
  twitter: {
    card: "summary_large_image",
    title: "GenX Build — Custom PCs, Built Around You",
    description:
      "Handcrafted custom PCs in Bangalore. Gaming, editing, WFH — built for your workflow.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white">{children}</body>
    </html>
  );
}
