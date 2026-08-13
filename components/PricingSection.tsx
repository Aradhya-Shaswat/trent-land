import Reveal from "./Reveal";

const plans = [
  {
    name: "Free",
    price: "$0",
    note: "Basic access to explore the platform.",
    cta: "Get Started",
    href: "#download",
    features: [
      "Market snapshot and news",
      "Delayed signals feed",
      "Basic portfolio view",
      "Community access"
    ]
  },
  {
    name: "Silver",
    price: "$29",
    note: "Essential tools for focused traders.",
    cta: "Get Silver",
    href: "#download",
    features: [
      "Everything in Free",
      "Calls tracking and lifecycle view",
      "Real-time signals feed access",
      "Basic AI risk summaries",
      "\u00A0" // Spacing element to match row counts
    ]
  },
  {
    name: "Gold",
    price: "$99",
    note: "Advanced intelligence for active capital.",
    cta: "Get Gold",
    href: "#download",
    features: [
      "AI risk sizing and predictor",
      "Alpha Terminal continuous stream",
      "Whale Watch insights",
      "Priority support"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    note: "Custom rollout for firms.",
    cta: "Contact Sales",
    href: "mailto:sales@Trentarev.com",
    features: [
      "Dedicated onboarding",
      "Custom data routing",
      "Portfolio workflows",
      "SLA-backed support"
    ]
  }
];

export default function PricingSection() {
  return (
    <section className="section" id="pricing">
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
            Pricing
          </p>
          <h2 style={{ 
            fontFamily: "var(--font-sans)", 
            fontWeight: 300, 
            fontSize: "48px", 
            lineHeight: "1.1",
            letterSpacing: "-0.03em",
            color: "#1c1a18",
            marginTop: 0,
            marginBottom: "24px"
          }}>
            Unlock <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 400, letterSpacing: "0" }}>deeper</span> signals.
          </h2>
          <p className="section-subtitle">
            Download the desktop client and activate or manage your subscription plan directly inside your account.
          </p>

          <div style={{ marginTop: "64px" }}>
            <div className="pricing-grid" style={{ gap: "48px 32px", marginTop: 0 }}>
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  style={{ 
                    padding: "32px", 
                    borderTop: "1px solid rgba(28, 26, 24, 0.1)", 
                    display: "flex", 
                    flexDirection: "column", 
                    gap: "16px" 
                  }}
                >
                  <strong style={{ 
                    textTransform: "uppercase", 
                    letterSpacing: "0.15em", 
                    fontSize: "12px", 
                    color: "rgba(28, 26, 24, 0.5)",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 500
                  }}>
                    {plan.name}
                  </strong>
                  <div className="price" style={{ 
                    fontFamily: "var(--font-sans)",
                    fontSize: "48px", 
                    fontWeight: 300, 
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                    color: "#1c1a18"
                  }}>
                    {plan.price}{plan.price !== "Custom" && <span style={{ fontSize: "16px", color: "rgba(28, 26, 24, 0.5)", fontWeight: 400 }}>/mo</span>}
                  </div>
                  <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.45, minHeight: "2.9em", color: "rgba(28, 26, 24, 0.7)", fontFamily: "var(--font-sans)" }}>{plan.note}</p>
                  <ul style={{ padding: 0, margin: "24px 0", listStyle: "none", display: "grid", gap: "16px", fontSize: "14px" }}>
                    {plan.features.map((feature, idx) => (
                      <li key={idx} style={{ 
                        display: "flex", 
                        alignItems: "flex-start", 
                        gap: "12px", 
                        color: feature === "\u00A0" ? "transparent" : "#1c1a18", 
                        fontFamily: "var(--font-sans)",
                        userSelect: feature === "\u00A0" ? "none" : "auto"
                      }}>
                        <span style={{ color: feature === "\u00A0" ? "transparent" : "rgba(28, 26, 24, 0.3)" }}>—</span> {feature}
                      </li>
                    ))}
                  </ul>
                  <a style={{ 
                    marginTop: "auto", 
                    alignSelf: "flex-start", 
                    padding: "12px 24px", 
                    background: "transparent", 
                    border: "1px solid rgba(28, 26, 24, 0.2)",
                    borderRadius: "999px",
                    color: "#1c1a18",
                    fontSize: "13px",
                    fontWeight: 400,
                    textDecoration: "none",
                    transition: "all 0.2s ease"
                  }} 
                  className="nav-link-hover"
                  href={plan.href}>
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
