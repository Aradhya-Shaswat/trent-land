import type { Metadata } from "next";
import { Poppins, Libre_Caslon_Display, Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import DeveloperConsoleEasterEgg from "../components/DeveloperConsoleEasterEgg";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans"
});

const libre = Libre_Caslon_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic"],
  variable: "--font-accent"
});

import SmoothScroll from "../components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL('https://trentarev.com'),
  title: "Trentarev | AI Trading Intelligence Platform",
  description: "Trentarev keeps your calls, market context, and AI insights aligned in one desktop workspace. Built for multi-monitor workflows.",
  openGraph: {
    title: "Trentarev | AI Trading Intelligence Platform",
    description: "Trentarev keeps your calls, market context, and AI insights aligned in one desktop workspace. Built for multi-monitor workflows.",
    url: "https://trentarev.com",
    siteName: "Trentarev",
    images: [
      {
        url: "/brand/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Trentarev Trading Intelligence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trentarev | AI Trading Intelligence Platform",
    description: "Trentarev keeps your calls, market context, and AI insights aligned in one desktop workspace. Built for multi-monitor workflows.",
    images: ["/brand/og-image.jpg"],
    creator: "@trentarev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/brand/logo.png',
    shortcut: '/brand/logo.png',
    apple: '/brand/apple-icon.png',
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden max-w-full">
      <body className={`${poppins.variable} ${libre.variable} ${cormorant.variable} overflow-x-hidden max-w-full`}>
        <DeveloperConsoleEasterEgg />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
