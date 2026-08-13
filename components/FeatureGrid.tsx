"use client";

import Reveal from "./Reveal";
import MagnifiedBento from "./ui/magnified-bento";

export default function FeatureGrid() {
  return (
    <section className="section py-16 md:py-[120px]" id="capabilities">
      <div className="section-inner px-4 md:px-0">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col gap-6 text-left">
              <div>
                <p className="eyebrow" style={{ 
                  fontFamily: "var(--font-sans)", 
                  textTransform: "uppercase", 
                  letterSpacing: "0.15em", 
                  fontSize: "13px", 
                  color: "rgba(28, 26, 24, 0.5)",
                  fontWeight: 500,
                  marginBottom: "12px"
                }}>
                  Capabilities
                </p>
                <h2 className="section-title" style={{ 
                  fontFamily: "var(--font-sans)", 
                  fontWeight: 300, 
                  fontSize: "clamp(36px, 4.5vw, 54px)", 
                  lineHeight: "1.15",
                  letterSpacing: "-0.03em", 
                  color: "#1c1a18",
                  margin: 0
                }}>
                  Calm, Clear, <span style={{ fontFamily: "var(--font-accent)", fontStyle: "italic", fontWeight: 400 }}>Serious</span>.
                </h2>
              </div>
              
              {/* <p style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: "16px",
                lineHeight: "1.6",
                color: "var(--muted-strong)",
                margin: 0
              }}>
                Follow your calls from entry to exit with market context, live signals, and synchronized portfolio pricing.
              </p> */}

              {/* Minimal feature points */}
              <ul style={{ 
                listStyle: "none", 
                padding: 0, 
                margin: "12px 0 0 0", 
                display: "flex", 
                flexDirection: "column", 
                gap: "14px",
                fontFamily: "var(--font-sans)",
                fontSize: "15px",
                color: "var(--muted-strong)",
                fontWeight: 300
              }}>
                <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ color: "rgba(28, 26, 24, 0.3)", fontWeight: 400 }}>—</span> Lifecycle trade tracking
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ color: "rgba(28, 26, 24, 0.3)", fontWeight: 400 }}>—</span> AI predictor & options strategy
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ color: "rgba(28, 26, 24, 0.3)", fontWeight: 400 }}>—</span> Native Windows multi-monitor workspace
                </li>
              </ul>
            </div>

            {/* Right Interactive Mockup Column */}
            <div className="lg:col-span-6 flex justify-center w-full">
              <MagnifiedBento showFooter={false} />
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
