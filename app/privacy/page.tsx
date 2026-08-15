import GlassNav from "../../components/GlassNav";
import Footer from "../../components/Footer";

export default function PrivacyPage() {
  return (
    <main style={{ backgroundColor: "#f7f6f3", minHeight: "100vh" }}>
      <GlassNav alwaysLight />
      <section className="section" style={{ paddingTop: "180px", paddingBottom: "120px" }}>
        <div className="section-inner" style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 48px)", fontWeight: 400, letterSpacing: "-0.02em", color: "#1c1a18", marginBottom: "24px" }}>
            Privacy Policy
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "14px", color: "var(--muted)", marginBottom: "64px" }}>
            Last updated: August 15, 2026
          </p>
          
          <div style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "15px", lineHeight: "1.8", color: "var(--muted-strong)", display: "flex", flexDirection: "column", gap: "32px" }}>
            <div>
              <h2 style={{ fontSize: "20px", fontWeight: 400, color: "#1c1a18", marginBottom: "16px", fontFamily: "var(--font-display)" }}>1. Introduction</h2>
              <p>Welcome to Trentarev Corporation ("we", "our", or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy informs you how we look after your personal data when you visit our website (trentarev.com), access the client portal (app.trentarev.com), use the native Trentarev desktop application on Windows, or interact with our command-line interface (<code>@trentarev/cli</code>). It also outlines your privacy rights and how data protection laws protect you.</p>
            </div>
            
            <div>
              <h2 style={{ fontSize: "20px", fontWeight: 400, color: "#1c1a18", marginBottom: "16px", fontFamily: "var(--font-display)" }}>2. Data We Collect</h2>
              <p>We may collect, use, store, and transfer different kinds of personal data about you to deliver and optimize our trading intelligence platform. This includes:</p>
              <ul style={{ paddingLeft: "20px", marginTop: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li><strong>Identity Data:</strong> Username, display name, avatar image URL, and unique Clerk authentication identifiers.</li>
                <li><strong>Contact Data:</strong> Your email address associated with your profile.</li>
                <li><strong>Billing & Transaction Data:</strong> Subscription tier level (Free, Silver, Gold, Enterprise), payment processing reference identifiers from our payment gateway, billing periods, and transaction dates. We do not store credit card details directly on our servers.</li>
                <li><strong>Trading & Portfolio Data:</strong> Entry points, price targets, stop losses, time horizons, custom stock symbols, trade call status (Active, Closed), and trade rationale that you manually document or generate through our platform.</li>
                <li><strong>Workspace & Customization Data:</strong> User interface layouts, saved custom workspaces, and configurations stored in JSONB formats on our database servers.</li>
                <li><strong>Technical & Diagnostics Data:</strong> Diagnostic network logs, request identifiers (X-Request-Id), client log levels (Debug, Info, Warn, Error), and stack traces from execution failures to assist in performance optimization.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: "20px", fontWeight: 400, color: "#1c1a18", marginBottom: "16px", fontFamily: "var(--font-display)" }}>3. Cookies & Local Storage</h2>
              <p>We utilize client-side local caching and state persistence variables on your device to keep you authenticated and improve app loading speeds. These include:</p>
              <ul style={{ paddingLeft: "20px", marginTop: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li><code>trentarev_session_token</code>: Stored securely in your local browser state to maintain active handoffs and desktop application sessions.</li>
                <li><code>trentarev:induction_status</code>: A temporary variable tracking the user setup status.</li>
                <li><code>user:id:v1</code>: An anonymous client identifier used to distinguish sessions.</li>
                <li><code>@tanstack</code> Persisted Cache: Local query caches that speed up the rendering of financial metrics and historical stock candle charts, stored in session storage.</li>
                <li><code>~/.trentarev/credentials.json</code>: A secure local JSON file containing your active Clerk session token used by the command-line interface.</li>
              </ul>
            </div>
            
            <div>
              <h2 style={{ fontSize: "20px", fontWeight: 400, color: "#1c1a18", marginBottom: "16px", fontFamily: "var(--font-display)" }}>4. How We Use Your Data</h2>
              <p>We only use your personal data to support your operations and deliver premium trading intelligence. Most commonly, we process data to:</p>
              <ul style={{ paddingLeft: "20px", marginTop: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li>Authorize and maintain your login sessions across our desktop application and backend API.</li>
                <li>Verify your active subscription tier and process upgrades or cancellations.</li>
                <li>Generate and deliver AI-driven market signals, stock pattern predictions, and options strategies.</li>
                <li>Persist your portfolios, workspace layouts, and custom watchlist settings.</li>
                <li>Optimize performance and debug client errors.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: "20px", fontWeight: 400, color: "#1c1a18", marginBottom: "16px", fontFamily: "var(--font-display)" }}>5. Third-Party Subprocessors</h2>
              <p>To provide our services, we share data with selected third-party subprocessors. Each subprocessor is bound by strict confidentiality and data protection agreements:</p>
              
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", margin: "24px 0", fontSize: "14px", textAlign: "left" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(28, 26, 24, 0.15)" }}>
                      <th style={{ padding: "12px 8px", fontWeight: "500", color: "#1c1a18" }}>Subprocessor</th>
                      <th style={{ padding: "12px 8px", fontWeight: "500", color: "#1c1a18" }}>Service Description</th>
                      <th style={{ padding: "12px 8px", fontWeight: "500", color: "#1c1a18" }}>Data Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid rgba(28, 26, 24, 0.08)" }}>
                      <td style={{ padding: "12px 8px", color: "#1c1a18", fontWeight: "400" }}>Clerk, Inc.</td>
                      <td style={{ padding: "12px 8px" }}>User profile databases, secure sign-in handling, and authentication tokens.</td>
                      <td style={{ padding: "12px 8px" }}>United States</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(28, 26, 24, 0.08)" }}>
                      <td style={{ padding: "12px 8px", color: "#1c1a18", fontWeight: "400" }}>Neon, Inc.</td>
                      <td style={{ padding: "12px 8px" }}>PostgreSQL cloud database hosting where portfolios, signals, settings, and sessions are stored.</td>
                      <td style={{ padding: "12px 8px" }}>United States</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(28, 26, 24, 0.08)" }}>
                      <td style={{ padding: "12px 8px", color: "#1c1a18", fontWeight: "400" }}>Railway Corp.</td>
                      <td style={{ padding: "12px 8px" }}>Cloud hosting infrastructure for the Trentarev backend API server and quantitative backtesting worker engines.</td>
                      <td style={{ padding: "12px 8px" }}>United States</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(28, 26, 24, 0.08)" }}>
                      <td style={{ padding: "12px 8px", color: "#1c1a18", fontWeight: "400" }}>Dodo Payments</td>
                      <td style={{ padding: "12px 8px" }}>Billing processing, payment compliance, tax collection, checkout sessions, and subscription webhooks.</td>
                      <td style={{ padding: "12px 8px" }}>Global</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(28, 26, 24, 0.08)" }}>
                      <td style={{ padding: "12px 8px", color: "#1c1a18", fontWeight: "400" }}>OpenRouter</td>
                      <td style={{ padding: "12px 8px" }}>API gateway routing to LLM prediction hosts for generating custom stock signals and predictions.</td>
                      <td style={{ padding: "12px 8px" }}>United States</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(28, 26, 24, 0.08)" }}>
                      <td style={{ padding: "12px 8px", color: "#1c1a18", fontWeight: "400" }}>Vercel Inc.</td>
                      <td style={{ padding: "12px 8px" }}>Serverless edge hosting for backend endpoints, release update dashboard, and handoff page.</td>
                      <td style={{ padding: "12px 8px" }}>United States</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(28, 26, 24, 0.08)" }}>
                      <td style={{ padding: "12px 8px", color: "#1c1a18", fontWeight: "400" }}>Financial Market Feeds</td>
                      <td style={{ padding: "12px 8px" }}>Twelve Data, Finnhub, Alpha Vantage, NewsAPI, and ExchangeRate-API feeds that process requests for stock quotes, news impact metrics, currency exchange, and whale monitoring logs.</td>
                      <td style={{ padding: "12px 8px" }}>United States / Global</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p style={{ fontSize: "14px" }}>Additionally, if enabled, the Trentarev desktop client integrates locally with <strong>Discord Inc.</strong>'s client software via system IPC sockets to update your Discord Rich Presence activity, indicating that you are analyzing markets on Trentarev.</p>
            </div>

            <div>
              <h2 style={{ fontSize: "20px", fontWeight: 400, color: "#1c1a18", marginBottom: "16px", fontFamily: "var(--font-display)" }}>6. Data Retention & Expiry</h2>
              <p>We only retain your personal data for as long as necessary to fulfill the purposes we collected it for. The default lifetimes for active session tokens are:</p>
              <ul style={{ paddingLeft: "20px", marginTop: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li><strong>Desktop & CLI Sessions:</strong> Long-lived desktop and command-line interface session tokens expire after 90 days.</li>
                <li><strong>Transient Auth Tokens:</strong> Pending login handoff tokens expire after 5 minutes and are deleted immediately upon consumption.</li>
                <li><strong>Portfolio & Workspace Data:</strong> Persisted inside your database profile until you request account deletion.</li>
              </ul>
            </div>
            
            <div>
              <h2 style={{ fontSize: "20px", fontWeight: 400, color: "#1c1a18", marginBottom: "16px", fontFamily: "var(--font-display)" }}>7. Data Security</h2>
              <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. All database queries use secure TLS connections. Portfolios, credentials, and settings transmitted between the Trentarev desktop client, command-line interface (<code>@trentarev/cli</code>), and the backend server are protected via HTTPS. The custom <code>trentarev://</code> protocol scheme registered in the Windows registry restricts inputs to prevent execution injection.</p>
            </div>

            <div>
              <h2 style={{ fontSize: "20px", fontWeight: 400, color: "#1c1a18", marginBottom: "16px", fontFamily: "var(--font-display)" }}>8. Your Legal Rights</h2>
              <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including:</p>
              <ul style={{ paddingLeft: "20px", marginTop: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li>The right to request access to your personal data.</li>
                <li>The right to request correction of inaccurate data.</li>
                <li>The right to request erasure of your personal data (the "right to be forgotten").</li>
                <li>The right to object to or request restriction of the processing of your personal data.</li>
                <li>The right to request the transfer of your personal data to you or a third party (data portability).</li>
              </ul>
              <p style={{ marginTop: "16px" }}>To exercise any of these rights, please contact our support team at the email below.</p>
            </div>

            <div>
              <h2 style={{ fontSize: "20px", fontWeight: 400, color: "#1c1a18", marginBottom: "16px", fontFamily: "var(--font-display)" }}>9. Contact Us</h2>
              <p>If you have any questions about this privacy policy, including any requests to exercise your legal rights, please contact us at:</p>
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
