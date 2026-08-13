export default function Footer() {
  return (
    <div style={{ width: "100%", position: "relative", display: "flex", flexDirection: "column" }}>
      
      {/* Huge Background Typography container (on white) */}
      <div style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end", // so it sits flush at the bottom
        paddingTop: "60px",
        pointerEvents: "none",
        userSelect: "none",
        // No overflow hidden so descenders theoretically could drop, but we have none.
        backgroundColor: "transparent",
        paddingBottom: "10px" // Slight nudge down
      }}>
        <h2 style={{
          margin: "0 0 -5px 0", // negative bottom margin so the baseline sits exactly on the blue line
          fontSize: "clamp(80px, 25vw, 340px)",
          lineHeight: 0.72,
          fontWeight: 400,
          display: "flex",
          alignItems: "baseline",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}>
          <span style={{ 
            fontFamily: "var(--font-sans)", 
            letterSpacing: "-0.04em",
            fontWeight: 300,
            backgroundImage: "url('/brand/background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            paddingRight: "8px"
          }}>Tre</span>
          <span style={{ 
            fontFamily: "var(--font-sans)", 
            letterSpacing: "-0.04em", 
            marginLeft: "-0.04em", 
            fontWeight: 300,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.2'/%3E%3C/svg%3E"), linear-gradient(180deg, #d3e5ff 0%, #8abcf2 40%, #2b6be0 100%)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent"
          }}>ntarev</span>
        </h2>
      </div>

      <footer style={{
        position: "relative",
        backgroundColor: "#3a7df5",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E"), linear-gradient(135deg, #3f86f8 0%, #2b6be0 100%)`,
        padding: "80px 0 60px",
        fontFamily: "var(--font-sans)",
        color: "rgba(255, 255, 255, 0.8)",
        zIndex: 10
      }}>
        <div className="section-inner flex flex-col md:flex-row justify-between gap-12 px-6 md:px-12 max-w-[1200px] mx-auto">
          {/* Brand & Legal side */}
          <div className="flex flex-col gap-6 md:max-w-[300px]">
            <strong className="text-white text-[20px] font-semibold tracking-tight">Trentarev Corporation</strong>
            <p className="text-[12px] leading-relaxed text-white/70">
              Priska Tower, Sector 62 - Noida, Delhi NCR
            </p>
            <div className="mt-auto pt-8">
              <a href="mailto:cxo@trentarev.com" className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-[13px] font-medium transition-colors border border-white/20">
                Investors
              </a>
            </div>
          </div>

          {/* Footer grids */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-[60px] w-full md:w-auto">
            {/* Column 1: Contact */}
            <div className="flex flex-col gap-4">
              <strong className="text-[14px] font-semibold text-white mb-2">Contact</strong>
                <a href="mailto:info@trentarev.com" className="text-white/75 text-[13px] hover:text-white transition-colors">Enquiries</a>
                <a href="mailto:careers@trentarev.com" className="text-white/75 text-[13px] hover:text-white transition-colors">Careers</a>
                <a href="mailto:aaditya@trentarev.com" className="text-white/75 text-[13px] hover:text-white transition-colors">Team</a>
                <a href="mailto:beta@trentarev.com" className="text-white/75 text-[13px] hover:text-white transition-colors">Beta</a>            </div>            {/* Column 2: Social */}
            <div className="flex flex-col gap-4">
              <strong className="text-[14px] font-semibold text-white mb-2">Social</strong>
              <a href="https://x.com/trentarev" target="_blank" rel="noopener noreferrer" className="text-white/75 text-[13px] hover:text-white transition-colors">X (Twitter)</a>
              <a href="https://youtube.com/@trentarev" target="_blank" rel="noopener noreferrer" className="text-white/75 text-[13px] hover:text-white transition-colors">YouTube</a>
              <a href="https://linkedin.com/company/trentarev" target="_blank" rel="noopener noreferrer" className="text-white/75 text-[13px] hover:text-white transition-colors">LinkedIn</a>
              <a href="https://instagram.com/trytrentarev" target="_blank" rel="noopener noreferrer" className="text-white/75 text-[13px] hover:text-white transition-colors">Instagram</a>
            </div>

            {/* Column 3: Legal & Resources */}
            <div className="flex flex-col gap-4">
              <strong className="text-[14px] font-semibold text-white mb-2">Legal & Resources</strong>
              <a href="/privacy" className="text-white/75 text-[13px] hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-white/75 text-[13px] hover:text-white transition-colors">Terms of Service</a>
              <a href="/resources" className="text-white/75 text-[13px] hover:text-white transition-colors">Resources</a>
              <a href="/docs" className="text-white/75 text-[13px] hover:text-white transition-colors">Documentation</a>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="w-full border-t border-white/10 mt-16 pt-8 px-6 md:px-12 flex justify-center text-center">
          <p className="text-[11px] text-white/50 max-w-[800px]">
            Trentarev is not a brokerage firm or a financial advisory company. Past performance does not guarantee future results.
          </p>
        </div>
      </footer>
    </div>
  );
}
