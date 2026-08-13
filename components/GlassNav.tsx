"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/#labs", label: "Labs" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/resources", label: "Resources" }
];

export default function GlassNav({ alwaysLight = false }: { alwaysLight?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(alwaysLight);
  const [isOverDark, setIsOverDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (alwaysLight) return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      
      const terminalSection = document.getElementById("terminal");
      if (terminalSection) {
        const rect = terminalSection.getBoundingClientRect();
        // 80 is roughly where the bottom of the nav bar sits
        if (rect.top <= 80 && rect.bottom >= 80) {
          setIsOverDark(true);
        } else {
          setIsOverDark(false);
        }
      } else {
        setIsOverDark(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [alwaysLight]);

  // When textIsDark is true, we show black text.
  // At the top of the page (not scrolled), we want white text (!isScrolled).
  // Over the dark Desktop Showcase section, we want white text (isOverDark).
const textIsDark = (isScrolled && !isOverDark) || isMobileMenuOpen;

  return (
    <header className="nav-wrap" style={{ position: "fixed", top: 0, width: "100%", zIndex: 50, display: "flex", justifyContent: "center", transition: "all 0.3s ease" }}>
      <div className="section-inner" style={{ paddingTop: "16px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{
          borderRadius: "999px",
          padding: "8px 8px 8px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          width: "min(620px, 100%)",
          background: textIsDark
            ? "linear-gradient(90deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)"
            : "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
          backdropFilter: "blur(40px) saturate(200%)",
          WebkitBackdropFilter: "blur(40px) saturate(200%)",
          border: textIsDark ? "1px solid rgba(255, 255, 255, 0.4)" : "1px solid rgba(255, 255, 255, 0.15)",
          transition: "all 0.3s ease",
          position: "relative",
          zIndex: 20
        }}>
          <a href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0, height: "24px", paddingLeft: "4px", position: "relative", width: "80px" }}>
            <div style={{ position: "absolute", left: 4, top: 0, bottom: 0, opacity: textIsDark ? 1 : 0, transition: "opacity 0.3s ease", display: "flex", alignItems: "center" }}>
              <Image
                src="/brand/logo-dark.png"
                alt="Trentarev"
                width={160}
                height={24}
                style={{ width: "auto", height: "100%", objectFit: "contain", transform: "scale(1.2)", transformOrigin: "left center" }}
                priority
              />
            </div>
            <div style={{ position: "absolute", left: 4, top: 0, bottom: 0, opacity: textIsDark ? 0 : 1, transition: "opacity 0.3s ease", display: "flex", alignItems: "center" }}>
              <Image
                src="/brand/logo.png"
                alt="Trentarev"
                width={160}
                height={24}
                style={{ width: "auto", height: "100%", objectFit: "contain", transform: "scale(1.2)", transformOrigin: "left center" }}
                priority
              />
            </div>
          </a>

          <nav className="nav-links" style={{ display: "flex", gap: "24px", fontSize: "12px", fontWeight: 300, color: textIsDark ? "#1c1a18" : "#fff", transition: "color 0.3s ease", marginLeft: "12px", fontFamily: "var(--font-sans)" }}>
            {links.map((link) => (
              <a key={link.href} href={link.href} style={{ transition: "opacity 0.2s ease" }} className="nav-link-hover">
                {link.label}
              </a>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button 
              className="menu-toggle"
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.2)",
                border: "1px solid rgba(0,0,0,0.1)",
                cursor: "pointer",
                zIndex: 30,
                position: "relative"
              }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span style={{
                display: "block", width: "16px", height: "1.5px", background: textIsDark ? "#000" : "#fff",
                transition: "all 0.3s ease",
                transform: isMobileMenuOpen ? "rotate(45deg) translate(2px, 2px)" : "translateY(-3px)"
              }}></span>
              <span style={{
                display: "block", width: "16px", height: "1.5px", background: textIsDark ? "#000" : "#fff",
                transition: "all 0.3s ease",
                transform: isMobileMenuOpen ? "rotate(-45deg) translate(2px, -2px)" : "translateY(3px)"
              }}></span>
            </button>
            <a href="/#download" style={{
              background: textIsDark ? "#1c1a18" : "#fff",
              color: textIsDark ? "#fff" : "#1c1a18",
              padding: "10px 24px",
              borderRadius: "999px",
              fontSize: "12px",
              fontWeight: 400,
              textDecoration: "none",
              fontFamily: "var(--font-sans)",
              transition: "all 0.3s ease"
            }}
            className="nav-cta nav-link-hover"
            >Download</a>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <div style={{
          position: "fixed",
          top: 0, left: 0, width: "100%", height: "100vh",
          background: "rgba(254, 252, 249, 0.95)",
          backdropFilter: "blur(24px)",
          zIndex: 10,
          transition: "all 0.5s ease",
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <nav style={{ display: "flex", flexDirection: "column", gap: "32px", width: "100%", textAlign: "center" }}>
            {links.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  color: "#1c1a18",
                  fontSize: "24px",
                  fontWeight: 300,
                  fontFamily: "var(--font-sans)",
                  textDecoration: "none"
                }}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="/#download" 
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                background: "#1c1a18",
                color: "#fff",
                padding: "16px 32px",
                borderRadius: "999px",
                width: "min(200px, 100%)",
                margin: "16px auto 0",
                fontSize: "16px",
                textDecoration: "none",
                fontFamily: "var(--font-sans)"
              }}
            >
              Download App
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
