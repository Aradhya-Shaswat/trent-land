"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import WaitlistModal from "./WaitlistModal";
import Reveal from "./Reveal";

const WAITLIST_COUNT = 500;

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");

  const handleEmailSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setShowModal(true);
  };

  const handleWaitlistSubmit = async (data: {
    email: string;
    firstName: string;
    lastName: string;
    age: string;
    experienceLevel: string;
    country: string;
  }) => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Failed to join waitlist");
      setIsSubmitted(true);
      setShowModal(false);
      setEmail("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to join waitlist. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="section py-16 md:py-[160px]" id="waitlist">
      <div className="section-inner px-4 md:px-0">
        <Reveal>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "24px",
            maxWidth: "540px",
            margin: "0 auto",
          }}>
            <span style={{ 
              fontFamily: "var(--font-sans)",
              fontSize: "12px", 
              letterSpacing: "0.04em",
              textTransform: "",
              color: "#1c1a18",
              background: "rgba(255,255,255,0.6)",
              backdropFilter: "blur(12px)",
              padding: "6px 14px",
              borderRadius: "999px",
              border: "1px solid rgba(28,26,24,0.08)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.02)"
            }}>
              Get 1 month of Silver Plan free (worth $29)
            </span>
            
            <h2 style={{ 
              fontFamily: "var(--font-sans)", 
              fontSize: "clamp(40px, 5vw, 64px)", 
              lineHeight: 1.1, 
              fontWeight: 300, 
              color: "#1c1a18",
              margin: 0
            }}>Secure your spot</h2>
            
            <p style={{ 
              fontFamily: "var(--font-sans)", 
              fontWeight: 300, 
              fontSize: "16px", 
              color: "var(--muted-strong)",
              margin: 0,
              maxWidth: "400px"
            }}>
              Priority access to our private beta.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleEmailSubmit} style={{ 
                display: "flex", 
                alignItems: "center",
                gap: "8px", 
                width: "100%", 
                marginTop: "16px",
                background: "rgba(255, 255, 255, 0.6)",
                border: "1px solid rgba(28, 26, 24, 0.12)",
                padding: "8px 8px 8px 16px",
                borderRadius: "999px",
                backdropFilter: "blur(16px)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.03), inset 0 1px 1px rgba(255,255,255,0.8)"
              }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  style={{
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    flex: 1,
                    fontFamily: "var(--font-sans)",
                    fontWeight: 300,
                    fontSize: "14px",
                    color: "#1c1a18",
                    padding: "0"
                  }}
                />
                <button
                  type="submit"
                  disabled={isLoading || !email.trim()}
                  style={{
                    background: "#1c1a18",
                    color: "#fff",
                    border: "none",
                    borderRadius: "999px",
                    padding: "10px 24px",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 400,
                    fontSize: "14px",
                    cursor: isLoading || !email.trim() ? "not-allowed" : "pointer",
                    opacity: isLoading || !email.trim() ? 0.7 : 1,
                    transition: "transform 0.2s ease, opacity 0.2s ease",
                  }}
                  onMouseOver={(e) => { if (!isLoading && email.trim()) e.currentTarget.style.transform = "translateY(-1px)" }}
                  onMouseOut={(e) => { if (!isLoading && email.trim()) e.currentTarget.style.transform = "translateY(0)" }}
                >
                  {isLoading ? "Wait..." : "Join"}
                </button>
              </form>
            ) : (
              <div style={{ 
                padding: "16px 24px", 
                borderRadius: "16px", 
                background: "rgba(255,255,255,0.5)",
                border: "1px solid rgba(28,26,24,0.08)",
                marginTop: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "4px"
              }}>
                <strong style={{ fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: "16px", color: "#1c1a18" }}>
                  You&apos;re on the list.
                </strong>
                <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "14px", color: "var(--muted)", margin: 0 }}>
                  We will reach out as soon as access opens.
                </p>
              </div>
            )}
            
            {error && (
              <div style={{ color: "#b34c3d", fontSize: "13px", fontFamily: "var(--font-sans)", fontWeight: 300 }}>{error}</div>
            )}
          </div>
        </Reveal>
      </div>

      <WaitlistModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        email={email}
        onSubmit={handleWaitlistSubmit}
        isLoading={isLoading}
      />
    </section>
  );
}
