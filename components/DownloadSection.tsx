"use client";

import Reveal from "./Reveal";

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
              Now Live &bull; Version 1.4.9
            </span>
            
            <h2 style={{ 
              fontFamily: "var(--font-sans)", 
              fontSize: "clamp(40px, 5vw, 64px)", 
              lineHeight: 1.1, 
              fontWeight: 300, 
              color: "#1c1a18",
              margin: 0
            }}>Get Trentarev Desktop</h2>
            
            <p style={{ 
              fontFamily: "var(--font-sans)", 
              fontWeight: 300, 
              fontSize: "16px", 
              color: "var(--muted-strong)",
              margin: 0,
              maxWidth: "450px"
            }}>
              Experience instant AI-powered trading signals, whale wallets monitor, and advanced risk sizing models natively on Windows.
            </p>

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
              <a
                href={downloadUrl}
                style={{
                  background: "#1c1a18",
                  color: "#fff",
                  border: "none",
                  borderRadius: "999px",
                  padding: "16px 40px",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 500,
                  fontSize: "15px",
                  cursor: "pointer",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "0 10px 20px rgba(28, 26, 24, 0.15)",
                  transition: "all 0.2s ease",
                }}
                onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 12px 24px rgba(28, 26, 24, 0.2)"; }}
                onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 10px 20px rgba(28, 26, 24, 0.15)"; }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download for Windows
              </a>

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

            <p style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
              fontSize: "13px",
              color: "var(--muted-strong)",
              margin: 0,
              maxWidth: "400px"
            }}>
              *Paid subscriptions (Silver & Gold) can be managed directly in the desktop settings after installation.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
