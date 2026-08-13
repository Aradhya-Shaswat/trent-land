"use client";

import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="section hero" id="top">
      <div className="section-inner">
        <Reveal>
          <div className="hero-grid">
            <div>
              <h1 className="hero-title" style={{ color: "#fff", textShadow: "0 2px 12px rgba(0,0,0,0.15)" }}>
                Trade smarter,<br/>
                <span style={{ fontFamily: "var(--font-accent)", fontStyle: "italic", fontWeight: 400 }}>supercharged*</span> by AI.
              </h1>
              <p className="hero-subtitle hidden sm:block" style={{ color: "rgba(255,255,255,0.95)", textShadow: "0 1px 4px rgba(0,0,0,0.1)", fontWeight: 300, fontFamily: "var(--font-sans)" }}>
                A native Windows trading intelligence platform for calls, market signals, and portfolio performance. Built for clear decisions, with AI tools for risk sizing and prediction.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start", marginTop: "24px" }}>
                <a 
                  className="pill" 
                  href="https://releases.trentarev.com"
                  style={{ 
                    background: "#fff", 
                    color: "#1c1a18", 
                    padding: "16px 36px", 
                    borderRadius: "999px", 
                    fontSize: "15px", 
                    fontWeight: 500, 
                    textDecoration: "none",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease"
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(0,0,0,0.2)"; }}
                  onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)"; }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download for Windows
                </a>
                {/* <span style={{ 
                  color: "rgba(255,255,255,0.6)", 
                  fontSize: "12px", 
                  fontFamily: "var(--font-sans)", 
                  fontWeight: 300,
                  paddingLeft: "4px"
                }}>
                  v1.4.9 &bull; Windows 10 / 11 x64
                </span> */}
              </div>
              {/* <div className="hero-actions">
                <a className="pill explore-link" href="#capabilities" style={{ background: "transparent", border: "0", color: "#fff", padding: "0 4px", fontSize: "14px" }}>
                  Explore capabilities
                </a>
              </div> */}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
