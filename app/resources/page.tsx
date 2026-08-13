import GlassNav from "../../components/GlassNav";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";
import Link from "next/link";
import { resourcesData } from "./data";

export default function ResourcesPage() {
  return (
    <div>
      <GlassNav alwaysLight={true} />
      <main style={{ paddingTop: "160px", paddingBottom: "100px", minHeight: "100vh" }}>
        <div className="section-inner" style={{ maxWidth: "800px" }}>
          <Reveal>
            <p style={{
              fontFamily: "var(--font-sans)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              fontSize: "13px",
              color: "rgba(28, 26, 24, 0.5)",
              fontWeight: 500,
              marginBottom: "24px"
            }}>
              KNOWLEDGE BASE
            </p>
            <h1 style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
              fontSize: "56px",
              lineHeight: "1.1",
              letterSpacing: "-0.03em",
              color: "#1c1a18",
              marginTop: 0,
              marginBottom: "24px"
            }}>
              Refine your <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 400, letterSpacing: "0" }}>edge.</span>
            </h1>
            <p style={{ 
              fontSize: "18px", 
              color: "rgba(28, 26, 24, 0.7)", 
              fontFamily: "var(--font-sans)", 
              lineHeight: "1.6", 
              marginBottom: "80px",
              maxWidth: "600px"
            }}>
              Explore foundational concepts, technical guides, and psychological frameworks designed to build serious, disciplined traders.
            </p>
            
            <style dangerouslySetInnerHTML={{ __html: `
              .resource-card {
                text-decoration: none;
                display: block;
                padding: 32px;
                border-radius: 24px;
                border: 1px solid rgba(28, 26, 24, 0.08);
                transition: all 0.3s ease;
                background-color: rgba(255, 255, 255, 0.4);
                backdrop-filter: blur(12px);
              }
              .resource-card:hover {
                border-color: rgba(28, 26, 24, 0.25);
                background-color: rgba(255, 255, 255, 0.8);
                transform: translateY(-2px);
                box-shadow: 0 12px 40px rgba(0, 0, 0, 0.04);
              }
            `}} />

            <div style={{ marginBottom: "64px" }}>
              <h3 style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 400,
                fontSize: "20px",
                color: "#1c1a18",
                marginBottom: "32px",
                paddingBottom: "16px",
                borderBottom: "1px solid rgba(28, 26, 24, 0.1)"
              }}>
                Developer Hub
              </h3>
              <Link href="/docs" className="resource-card" style={{ backgroundColor: "#faf9f8" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "12px" }}>
                  <h4 style={{ margin: 0, fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "17px", color: "#1c1a18" }}>
                    Documentation & Architecture
                  </h4>
                  <span style={{ fontSize: "13px", color: "rgba(28, 26, 24, 0.5)", fontFamily: "var(--font-sans)", whiteSpace: "nowrap", marginLeft: "16px" }}>
                    API Reference
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: "15px", color: "rgba(28, 26, 24, 0.6)", fontFamily: "var(--font-sans)", lineHeight: "1.6" }}>
                  Explore Trentarev's technical architecture, backend integration, React/Tauri framework guidelines, and local development setup.
                </p>
              </Link>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
              {resourcesData.map((section) => (
                <div key={section.category}>
                  <h3 style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 400,
                    fontSize: "20px",
                    color: "#1c1a18",
                    marginBottom: "32px",
                    paddingBottom: "16px",
                    borderBottom: "1px solid rgba(28, 26, 24, 0.1)"
                  }}>
                    {section.category}
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    {section.items.map((item) => (
                      <Link href={`/resources/${item.slug}`} key={item.title} className="resource-card">
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "12px" }}>
                          <h4 style={{ margin: 0, fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "17px", color: "#1c1a18" }}>
                            {item.title}
                          </h4>
                          <span style={{ fontSize: "13px", color: "rgba(28, 26, 24, 0.5)", fontFamily: "var(--font-sans)", whiteSpace: "nowrap", marginLeft: "16px" }}>
                            {item.time}
                          </span>
                        </div>
                        <p style={{ margin: 0, fontSize: "15px", color: "rgba(28, 26, 24, 0.6)", fontFamily: "var(--font-sans)", lineHeight: "1.6" }}>
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}
