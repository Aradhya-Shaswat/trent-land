import Reveal from "./Reveal";
import DisplayCards from "./DisplayCards";
import { Globe } from "./Globe";

export default function LabsSection() {
  return (
    <section className="section" id="labs" style={{ paddingTop: 40 }}>
      <div className="section-inner">
        <Reveal>
          <p style={{ 
            fontFamily: "var(--font-sans)", 
            textTransform: "uppercase", 
            letterSpacing: "0.15em", 
            fontSize: "13px", 
            color: "rgba(28, 26, 24, 0.5)",
            fontWeight: 500,
            marginBottom: "16px"
          }}>
            AI LABS
          </p>
          <h2 style={{ 
            fontFamily: "var(--font-sans)", 
            fontWeight: 300, 
            fontSize: "48px", 
            lineHeight: "1.1",
            letterSpacing: "-0.03em",
            color: "#1c1a18",
            marginTop: 0
          }}>
            See what <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 400, letterSpacing: "0" }}>others</span> miss.
          </h2>

<div className="flex flex-col lg:flex-row items-center gap-32 md:gap-16 lg:gap-[180px] mt-16">
              <div className="flex-1 w-full pb-32 md:pb-0 pr-8 md:pr-0 mt-8 md:mt-0">
              <DisplayCards />
            </div>

            <div style={{
              flex: 1.5,
              position: "relative",
              backgroundImage: "url('/brand/background.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "32px",
              border: "1px solid rgba(28, 26, 24, 0.12)",
              padding: "48px",
              boxShadow: "0 18px 40px rgba(28, 26, 24, 0.06)",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "500px"
            }}>
              {/* Subtle glassy overlay so text is readable without hiding the image */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(12px)",
                zIndex: 0
              }} />
              
              <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "400px" }}>
                <Globe 
                   arcs={[
                     { id: "nyc-lon", from: [40.7128, -74.0060], to: [51.5074, -0.1278], label: "NYSE -> LSE" },
                     { id: "lon-fra", from: [51.5074, -0.1278], to: [50.1109, 8.6821], label: "LSE -> FSX" },
                     { id: "fra-mum", from: [50.1109, 8.6821], to: [18.9220, 72.8347], label: "FSX -> NSE/BSE" },
                     { id: "mum-hkg", from: [18.9220, 72.8347], to: [22.3193, 114.1694], label: "NSE/BSE -> HKEX" },
                     { id: "hkg-tyo", from: [22.3193, 114.1694], to: [35.6895, 139.6917], label: "HKEX -> TSE" },
                     { id: "tyo-syd", from: [35.6895, 139.6917], to: [-33.8688, 151.2093], label: "TSE -> ASX" },
                     { id: "syd-nyc", from: [-33.8688, 151.2093], to: [40.7128, -74.0060], label: "ASX -> NYSE" }
                   ]}
                   markers={[
                     { id: "nyc", location: [40.7128, -74.0060], label: "New York" },
                     { id: "lon", location: [51.5074, -0.1278], label: "London" },
                     { id: "fra", location: [50.1109, 8.6821], label: "Frankfurt" },
                     { id: "mum", location: [18.9220, 72.8347], label: "Mumbai (NSE/BSE)" },
                     { id: "hkg", location: [22.3193, 114.1694], label: "Hong Kong" },
                     { id: "tyo", location: [35.6895, 139.6917], label: "Tokyo" },
                     { id: "syd", location: [-33.8688, 151.2093], label: "Sydney" }
                   ]}
                   markerColor={[0.8, 0.6, 0.2]} // Subtle gold hue for Trentarev
                   baseColor={[1, 1, 1]}
                   arcColor={[0.1, 0.1, 0.1]}
                   glowColor={[1, 1, 1]}
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
