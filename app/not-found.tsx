import GlassNav from "../components/GlassNav";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <div className="overflow-x-hidden max-w-full w-full min-h-screen flex flex-col bg-[#fafafa]">
      <GlassNav alwaysLight />
      <main className="flex-1 flex items-center justify-center pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-[600px] text-center flex flex-col items-center">
          <p className="eyebrow" style={{ color: "var(--accent-blue)", textTransform: "uppercase", letterSpacing: "2px", fontSize: "12px", marginBottom: "16px", fontWeight: 600 }}>Error 404</p>
          <h1 className="section-title text-[40px] md:text-[64px] leading-tight" style={{ fontFamily: "var(--font-sans)", fontWeight: 300, letterSpacing: "-0.04em", color: "#111", margin: "0 0 24px 0" }}>
            Page <span style={{ fontFamily: "var(--font-accent)", fontStyle: "italic", fontWeight: 400 }}>not</span> found.
          </h1>
          <p className="section-subtitle text-[16px] md:text-[18px]" style={{ color: "rgba(0,0,0,0.6)", marginBottom: "40px", maxWidth: "400px" }}>
            We couldn't find the page you're looking for. It may have been moved or removed entirely.
          </p>
          <div className="flex flex-row items-center gap-4">
            <a href="/" className="btn btn-primary px-6 py-3 rounded-full bg-black text-white text-[14px] font-medium hover:scale-105 transition-transform">
              Return Home
            </a>
            <a href="/#pricing" className="px-6 py-3 rounded-full bg-transparent border border-black/10 text-black text-[14px] font-medium hover:bg-black/5 transition-colors">
              View Pricing
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
