import GlassNav from "../components/GlassNav";
import Hero from "../components/Hero";
import FeatureGrid from "../components/FeatureGrid";
import PricingSection from "../components/PricingSection";
import DownloadSection from "../components/DownloadSection";
import Footer from "../components/Footer";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const DesktopShowcase = dynamic(() => import("../components/DesktopShowcase"), { ssr: false });
const LabsSection = dynamic(() => import("../components/LabsSection"), { ssr: false });

export const metadata: Metadata = {
  alternates: {
    canonical: "https://trentarev.com",
  },
};

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Trentarev",
      "operatingSystem": "Windows 10, Windows 11",
      "applicationCategory": "BusinessApplication",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "A native Windows trading intelligence platform for calls, market signals, and portfolio performance.",
      "url": "https://trentarev.com"
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Trentarev",
      "url": "https://trentarev.com",
      "logo": "https://trentarev.com/brand/logo.png",
      "sameAs": [
        "https://twitter.com/trentarev"
      ],
      "founder": [
        {
          "@type": "Person",
          "name": "Aaditya Abhishek Singh",
          "jobTitle": "Co-Founder"
        },
        {
          "@type": "Person",
          "name": "Aradhya Shaswat",
          "jobTitle": "Co-Founder"
        }
      ]
    }
  ];

  return (
    <div className="overflow-x-hidden max-w-full w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GlassNav />
      <main>
        <Hero />
        <FeatureGrid />
        <DesktopShowcase />
        <LabsSection />
        <PricingSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
