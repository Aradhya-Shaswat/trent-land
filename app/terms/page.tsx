import GlassNav from "../../components/GlassNav";
import Footer from "../../components/Footer";

export default function TermsPage() {
  return (
    <main style={{ backgroundColor: "#f7f6f3", minHeight: "100vh" }}>
      <GlassNav alwaysLight />
      <section className="section" style={{ paddingTop: "180px", paddingBottom: "120px" }}>
        <div className="section-inner" style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 48px)", fontWeight: 400, letterSpacing: "-0.02em", color: "#1c1a18", marginBottom: "24px" }}>
            Terms of Service
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "14px", color: "var(--muted)", marginBottom: "64px" }}>
            Last updated: August 13, 2026
          </p>
          
          <div style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "15px", lineHeight: "1.8", color: "var(--muted-strong)", display: "flex", flexDirection: "column", gap: "32px" }}>
            <div>
              <h2 style={{ fontSize: "20px", fontWeight: 400, color: "#1c1a18", marginBottom: "16px", fontFamily: "var(--font-display)" }}>1. Agreement to Terms</h2>
              <p>By accessing or using the website (trentarev.com), the client portal (app.trentarev.com), or downloading the native Trentarev desktop application on Windows, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you are not granted permission to access or use our services.</p>
            </div>
            
            <div>
              <h2 style={{ fontSize: "20px", fontWeight: 400, color: "#1c1a18", marginBottom: "16px", fontFamily: "var(--font-display)" }}>2. Description of Services</h2>
              <p>Trentarev provides a native Windows desktop application and web endpoints delivering trading intelligence tools, including:</p>
              <ul style={{ paddingLeft: "20px", marginTop: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li>AI-powered market signals and stock predictions.</li>
                <li>Custom options strategy, pattern recognition, and risk sizing models.</li>
                <li>Real-time financial market data feeds, news impact evaluations, and portfolio trackers.</li>
                <li>Whale wallet watchlists and sector rotation analytics.</li>
                <li>Developer API controls (bot API keys) for integrating trading algorithms with Trentarev services.</li>
              </ul>
              <p style={{ marginTop: "16px" }}>All services are provided "as is" and "as available". We assume no responsibility for the deletion, timeliness, or delivery failures of any user portfolios, watchlist configurations, or trade data.</p>
            </div>
            
            <div>
              <h2 style={{ fontSize: "20px", fontWeight: 400, color: "#1c1a18", marginBottom: "16px", fontFamily: "var(--font-display)" }}>3. Financial Disclaimer (Non-Advisory)</h2>
              <p style={{ fontWeight: "400", color: "#1c1a18" }}>IMPORTANT: ALL SIGNALS, PREDICTIONS, ANALYSIS, AND AI GENERATIONS ARE FOR INFORMATIONAL AND EDUCATIONAL PURPOSES ONLY.</p>
              <p style={{ marginTop: "8px" }}>Trentarev is not a registered investment advisor, broker-dealer, or financial analyst. The AI predictions generated via OpenRouter models and Twelve Data/Finnhub indicators represent statistical inferences, not investment advice. You are solely responsible for evaluating the risks and merits associated with the use of our services. We strongly recommend consulting with a registered financial advisor before executing any transaction in financial markets.</p>
            </div>

            <div>
              <h2 style={{ fontSize: "20px", fontWeight: 400, color: "#1c1a18", marginBottom: "16px", fontFamily: "var(--font-display)" }}>4. Subscriptions, Payments, & Cancellations</h2>
              <p>We process payments and premium subscription tiers under the following conditions:</p>
              <ul style={{ paddingLeft: "20px", marginTop: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li><strong>Merchant of Record:</strong> All subscription processing, invoices, and billing collections are managed by <strong>Dodo Payments</strong>. By subscribing, you agree to Dodo Payments' customer terms.</li>
                <li><strong>Subscription Tiers:</strong> Access is divided into Free, Silver, Gold, and Enterprise tiers. Features are unlocked according to the active status of your plan.</li>
                <li><strong>Billing Cycle:</strong> Subscriptions are billed on a recurring monthly or annual basis. The active plan period, start dates, and end dates are recorded in your user profile.</li>
                <li><strong>Cancellations:</strong> You can cancel your subscription at any time. Upon receiving a cancellation event webhook from Dodo Payments, your plan status will be downgraded to the Free tier at the end of your current billing period.</li>
                <li><strong>Refunds:</strong> Refund requests are processed in accordance with Dodo Payments' merchant policies. Please contact support to initiate a dispute evaluation.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: "20px", fontWeight: 400, color: "#1c1a18", marginBottom: "16px", fontFamily: "var(--font-display)" }}>5. User Accounts & Security</h2>
              <p>To use our desktop application and synchronized features, you must maintain a secure account managed by Clerk Inc. You agree to:</p>
              <ul style={{ paddingLeft: "20px", marginTop: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li>Provide accurate, complete registration information.</li>
                <li>Keep your login credentials secure. Active desktop session tokens remain valid for 90 days. You are fully responsible for all activities that occur under your session token.</li>
                <li>Maintain the secrecy of your bot API keys (if generated). Any unauthorized request signature detected on our servers will result in the immediate revocation of the compromised token.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: "20px", fontWeight: 400, color: "#1c1a18", marginBottom: "16px", fontFamily: "var(--font-display)" }}>6. Prohibited Conduct</h2>
              <p>You agree not to engage in any of the following prohibited behaviors:</p>
              <ul style={{ paddingLeft: "20px", marginTop: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li>Decompiling, reverse engineering, or attempting to extract source code from the native Tauri Windows binary files.</li>
                <li>Scraping or harvesting market data, news articles, or financial indicators from the API servers.</li>
                <li>Using scripts or automated bots to request server endpoints in a manner that triggers rate-limiter restrictions (exceeding maximum requests per window limits).</li>
                <li>Circumventing licensing controls, trial periods, or subscription boundaries.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: "20px", fontWeight: 400, color: "#1c1a18", marginBottom: "16px", fontFamily: "var(--font-display)" }}>7. Intellectual Property</h2>
              <p>The service structures, brand assets (logos, styles), custom algorithms, indicators, prediction dataset fingerprints, and original codebase are the exclusive property of Trentarev Corporation and its licensors. You are granted a limited, personal, non-exclusive, non-transferable, and revocable license to execute the desktop client for personal or internal business operations.</p>
            </div>
            
            <div>
              <h2 style={{ fontSize: "20px", fontWeight: 400, color: "#1c1a18", marginBottom: "16px", fontFamily: "var(--font-display)" }}>8. Limitation of Liability</h2>
              <p>In no event shall Trentarev Corporation, its directors, employees, partners, suppliers, or subprocessors be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of investment capital, trading losses, loss of profits, data, use, goodwill, or other intangible losses. Our total liability for any claims under these terms is capped at the total fees paid by you to us in the twelve (12) months preceding the event giving rise to liability.</p>
            </div>

            <div>
              <h2 style={{ fontSize: "20px", fontWeight: 400, color: "#1c1a18", marginBottom: "16px", fontFamily: "var(--font-display)" }}>9. Changes to Terms</h2>
              <p>We reserve the right to modify or replace these terms at any time. We will provide notice on our website or within the application before new terms take effect. By continuing to access the service after modifications become effective, you agree to be bound by the revised terms.</p>
            </div>

            <div>
              <h2 style={{ fontSize: "20px", fontWeight: 400, color: "#1c1a18", marginBottom: "16px", fontFamily: "var(--font-display)" }}>10. Contact Us</h2>
              <p>If you have any questions or require clarification regarding these terms, please contact us at:</p>
              <p style={{ marginTop: "12px" }}><strong>Email:</strong> support@trentarev.com</p>
              <p><strong>Trentarev Corporation</strong></p>
            </div>
          </div>

          <div style={{ marginTop: "64px" }}>
            <a href="/" className="inline-flex items-center gap-2 font-sans text-sm font-normal text-[#1c1a18] no-underline border-b border-[#1c1a18]/20 pb-[2px] transition-colors duration-200 hover:border-[#1c1a18]">
              &larr; Back to Home
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
