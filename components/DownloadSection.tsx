"use client";

import Reveal from "./Reveal";
import GetForWindowsButton from "./GetForWindowsButton";

export default function DownloadSection() {
  const downloadUrl = "https://releases.trentarev.com";

  return (
    <section className="section py-16 md:py-[160px]" id="download">
      <div className="section-inner px-4 md:px-0">
        <Reveal>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "24px",
            maxWidth: "600px",
            margin: "0 auto",
          }}>
            <span style={{ 
              fontFamily: "var(--font-sans)",
              fontSize: "12px", 
              letterSpacing: "0.04em",
              color: "#1c1a18",
              background: "rgba(255,255,255,0.6)",
              backdropFilter: "blur(12px)",
              padding: "6px 14px",
              borderRadius: "999px",
              border: "1px solid rgba(28,26,24,0.08)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.02)"
            }}>
              Now Live &bull; Version 1.5.0
            </span>
            
            <h2 style={{ 
              fontFamily: "var(--font-sans)", 
              fontSize: "clamp(40px, 5vw, 64px)", 
              lineHeight: 1.1, 
              fontWeight: 300, 
              color: "#1c1a18",
              margin: 0
            }}>Get Trentarev Desktop</h2>
            


            <div className="glass" style={{
              width: "100%",
              padding: "32px",
              borderRadius: "28px",
              background: "rgba(255, 255, 255, 0.4)",
              border: "1px solid rgba(28, 26, 24, 0.08)",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.02)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              marginTop: "16px"
            }}>
              <GetForWindowsButton href={downloadUrl} size="large" />

              <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "24px",
                fontSize: "13px",
                color: "var(--muted-strong)",
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                borderTop: "1px solid rgba(28, 26, 24, 0.06)",
                paddingTop: "20px",
                width: "100%"
              }}>
                <span><strong></strong> Windows 10 / 11 (64-bit)</span>
                <span><strong>~3.1 MB</strong></span>
              </div>
            </div>


          </div>
        </Reveal>
      </div>
    </section>
  );
}
