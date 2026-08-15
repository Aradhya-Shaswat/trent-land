"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import GetForWindowsButton from "./GetForWindowsButton";

export default function Hero() {
  return (
    <section className="section hero" id="top">
      <div className="section-inner">
        <Reveal>
          <div className="hero-grid">
            <div>
              <h1 className="hero-title" style={{ color: "#fff", textShadow: "0 2px 12px rgba(0,0,0,0.15)" }}>
                Trade smarter,<br />
                <span style={{ fontFamily: "var(--font-accent)", fontStyle: "italic", fontWeight: 400 }}>supercharged*</span> by AI.
              </h1>
              <p className="hero-subtitle hidden sm:block" style={{ color: "rgba(255,255,255,0.95)", textShadow: "0 1px 4px rgba(0,0,0,0.1)", fontWeight: 300, fontFamily: "var(--font-sans)" }}>
                A native Windows trading intelligence platform for calls, market signals, and portfolio performance. Built for clear decisions, with AI tools for risk sizing and prediction.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start", marginTop: "24px" }}>
                <GetForWindowsButton href="https://releases.trentarev.com" size="large" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
