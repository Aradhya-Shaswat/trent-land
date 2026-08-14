"use client";

import Reveal from "./Reveal";
import { useState } from "react";

export default function CliSection() {
  const [activeTab, setActiveTab] = useState<"npm" | "mac" | "win">("npm");
  const [isCopied, setIsCopied] = useState(false);

  const installCommands = {
    npm: "npm install -g @trentarev/cli",
    mac: "curl -fsSL https://api.trentarev.com/install.sh | sh",
    win: "iwr -useb https://api.trentarev.com/install.ps1 | iex",
  };

  return (
    <section className="section" id="cli" style={{ paddingTop: 40, paddingBottom: 80 }}>
      <div className="section-inner">
        <Reveal>
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-[120px] items-center">
            {/* Left Content */}
            <div className="flex flex-col">
              <p style={{
                fontFamily: "var(--font-sans)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                fontSize: "13px",
                color: "rgba(28, 26, 24, 0.5)",
                fontWeight: 500,
                marginBottom: "16px"
              }}>
                Developer First
              </p>
              <h2 style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: "clamp(36px, 4vw, 48px)",
                lineHeight: "1.1",
                letterSpacing: "-0.03em",
                color: "#1c1a18",
                marginTop: 0,
                marginBottom: "24px"
              }}>
                Markets at your <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 400, letterSpacing: "0" }}>terminal.</span>
              </h2>
              <p style={{
                fontSize: "16px",
                lineHeight: "1.6",
                color: "var(--muted)",
                marginBottom: "36px",
                maxWidth: "480px"
              }}>
                Access real-time signals, AI predictions, and institutional whale flows directly from your command line.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", gap: "8px" }}>
                  {(["npm", "mac", "win"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      style={{
                        padding: "6px 14px",
                        borderRadius: "999px",
                        fontSize: "12px",
                        fontWeight: 500,
                        cursor: "pointer",
                        border: "1px solid",
                        borderColor: activeTab === tab ? "rgba(28, 26, 24, 0.2)" : "transparent",
                        background: activeTab === tab ? "rgba(28, 26, 24, 0.05)" : "transparent",
                        color: activeTab === tab ? "var(--text)" : "var(--muted)",
                        transition: "all 0.2s ease"
                      }}
                    >
                      {tab === "npm" ? "npm" : tab === "mac" ? "macOS/Linux" : "Windows"}
                    </button>
                  ))}
                </div>
                
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "rgba(28, 26, 24, 0.86)",
                  color: "#fefcf9",
                  padding: "16px 20px",
                  borderRadius: "16px",
                  fontSize: "14px",
                  fontFamily: "var(--font-sans)",
                  boxShadow: "var(--shadow-sm)"
                }}>
                  <span style={{ opacity: 0.9, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{installCommands[activeTab]}</span>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(installCommands[activeTab]);
                      setIsCopied(true);
                      setTimeout(() => setIsCopied(false), 2000);
                    }}
                    style={{
                      background: isCopied ? "rgba(34, 197, 94, 0.2)" : "rgba(255, 255, 255, 0.1)",
                      border: "none",
                      color: isCopied ? "#4ade80" : "#fff",
                      padding: "6px 12px",
                      borderRadius: "8px",
                      fontSize: "12px",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      width: "64px"
                    }}
                    onMouseEnter={(e) => {
                      if (!isCopied) e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      if (!isCopied) e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                    }}
                  >
                    {isCopied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Content - Mock Terminal */}
            <div className="glass-strong" style={{
              borderRadius: "24px",
              padding: "8px",
              width: "100%",
              overflow: "hidden"
            }}>
              <div style={{
                background: "rgba(255, 255, 255, 0.7)",
                borderRadius: "16px",
                padding: "24px",
                color: "#1c1a18",
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                lineHeight: "1.7",
                boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 4px 20px rgba(0, 0, 0, 0.05)",
                minHeight: "340px",
                border: "1px solid rgba(28, 26, 24, 0.08)"
              }}>
                <div style={{ display: "flex", gap: "6px", marginBottom: "20px" }}>
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f56", border: "1px solid rgba(0,0,0,0.1)" }} />
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ffbd2e", border: "1px solid rgba(0,0,0,0.1)" }} />
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#27c93f", border: "1px solid rgba(0,0,0,0.1)" }} />
                </div>
                
                <div>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <span style={{ color: "#16a34a" }}>➜</span>
                    <span style={{ color: "#0284c7" }}>~</span>
                    <span style={{ color: "#1c1a18", fontWeight: 500 }}>trentarev predict NVDA</span>
                  </div>
                  
                  <div style={{ marginTop: "16px", opacity: 0.9 }}>
                    <div style={{ color: "#6d6760", marginBottom: "8px" }}>Analyzing Neural & Flow data for NVDA (NVIDIA Corp)</div>
                    
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <div><span style={{ color: "#6d6760" }}>AI Outlook:</span> <span style={{ color: "#16a34a", fontWeight: 600 }}>Strong Bullish</span></div>
                      <div><span style={{ color: "#6d6760" }}>Timeframe:</span> Medium (14-30D)</div>
                      <div><span style={{ color: "#6d6760" }}>Confidence:</span> 91%</div>
                    </div>
                    
                    <div style={{ marginTop: "16px", borderTop: "1px dashed rgba(28, 26, 24, 0.15)", paddingTop: "12px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", maxWidth: "240px" }}>
                        <span style={{ color: "#6d6760" }}>Target Price:</span>
                        <span style={{ color: "#0284c7", fontWeight: 500 }}>$142.50</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", maxWidth: "240px", margin: "4px 0" }}>
                        <span style={{ color: "#6d6760" }}>Stop Loss:</span>
                        <span style={{ color: "#e11d48", fontWeight: 500 }}>$118.00</span>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ display: "flex", gap: "8px", marginTop: "24px" }}>
                    <span style={{ color: "#16a34a" }}>➜</span>
                    <span style={{ color: "#0284c7" }}>~</span>
                    <span style={{ display: "inline-block", width: "8px", height: "16px", background: "#1c1a18", animation: "blink 1s step-end infinite", opacity: 0.8 }}></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}} />
      </div>
    </section>
  );
}
