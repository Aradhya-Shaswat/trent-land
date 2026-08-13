"use client";

import { useEffect } from "react";
import Link from "next/link";
import GlassNav from "../components/GlassNav";
import Footer from "../components/Footer";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service if needed
    console.error(error);
  }, [error]);

  return (
    <div className="overflow-x-hidden max-w-full w-full min-h-screen flex flex-col pt-32 pb-16">
      <GlassNav alwaysLight={true} />
      <main className="flex-1 flex flex-col items-center justify-center section-inner mx-auto px-4 text-center">
        <h2 className="font-display text-4xl md:text-5xl text-[#1c1a18] mb-6">Something went wrong!</h2>
        <p className="font-sans text-lg text-[#1c1a18]/60 mb-8 max-w-md mx-auto">
          We apologize for the inconvenience. An unexpected error occurred while loading this page.
        </p>
        <div className="flex gap-4 items-center justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-[#1c1a18] text-[#f4f0ec] rounded-full font-sans text-sm font-medium hover:bg-[#1c1a18]/80 transition-colors"
          >
            Try again
          </button>
          <Link 
            href="/"
            className="px-6 py-3 border border-[#1c1a18]/20 text-[#1c1a18] rounded-full font-sans text-sm font-medium hover:bg-[#1c1a18]/5 transition-colors"
          >
            Go home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
