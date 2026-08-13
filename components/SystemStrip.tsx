import Reveal from "./Reveal";

const stats = [
  { label: "Windows beta", value: "April 2026" },
  { label: "Signals engine", value: "Alpha Terminal" },
  { label: "Portfolio workspace", value: "Local, live priced" }
];

export default function SystemStrip() {
  return (
    <section className="section" id="system" style={{ padding: "0 24px", marginTop: "-60px", marginBottom: "80px", position: "relative", zIndex: 10 }}>
      <div className="section-inner">
        <Reveal>
          <div style={{
            background: "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(24px)",
            borderRadius: "999px",
            padding: "24px 64px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.8)",
            flexWrap: "wrap",
            gap: "24px"
          }}>
            {stats.map((item) => (
              <div key={item.label} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--muted)", fontWeight: 500 }}>{item.label}</span>
                <strong style={{ fontSize: "16px", color: "var(--text)", fontWeight: 600 }}>{item.value}</strong>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
