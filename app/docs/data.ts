export type DocItem = {
  title: string;
  slug: string;
  description: string;
  content: string;
  time?: string;
};

export type DocSection = {
  category: string;
  items: DocItem[];
};

export const docsData: DocSection[] = [
  {
    category: "Architecture & Integration",
    items: [
      { 
        title: "Trentarev API Reference", 
        slug: "api-reference",
        description: "Comprehensive guide to all endpoints, routing architecture, and domains across Trentarev.",
        content: `
# Trentarev API Reference

Trentarev operates across two primary domains: **t-server** (the heavy Node.js proxy and product API) and **t-land-v2** (the Next.js landing and marketing gateway).

## 1. t-server (api.trentarev.com)

Built on Node.js and TypeScript, the \`t-server\` handles large-scale desktop client concurrency and provides all trading intelligence and market aggregation. It separates logic into two explicit domains: Market (Read-Only) and Product (Write-Capable).

### Market Data Endpoints (Read-Only)
The Market domain is responsible for fetching, normalizing, and caching external market data.
- \`GET /api/market/snapshot\` — Fetches a lightweight overview of all tracked symbols.
- \`GET /api/market/stocks?symbols=AAPL,MSFT\` — Batch fetch live prices and basic quotes.
- \`GET /api/market/fundamentals/:symbol\` — Full financial fundamentals, PE ratios, and metadata.
- \`GET /api/market/candles/:symbol?timeframe=1D\` — Historical candle chart data.
- \`GET /api/market/news/:symbol\` — Fetches recent headlines and sentiment analysis for a specific asset.
- \`GET /api/market/fx\` — Live Forex rates against USD.
- \`GET /api/market/indices\` — Standard major indices (SPY, QQQ, etc).

### Product & State Endpoints (Write-Capable)
The Product domain persists user actions and derives app state, using a local SQLite database setup.
- \`GET /api/calls\` | \`POST /api/calls\` — Create and read user structural positions.
- \`GET /api/activity\` | \`POST /api/activity\` — Append-only immutable log for trade exits or adjustments.
- \`GET /api/profile/summary\` — Derived macro statistics (portfolio value, win rate).

### Utility Endpoints
- \`GET /api/health\` — Returns JSON status matrix spanning hit counts and latencies for all endpoints.

> **Note**: \`/api/admin/*\` endpoints exist but are protected and unlisted from public registries.

## 2. t-land-v2 (trentarev.com)

The \`t-land-v2\` Next.js application strictly serves marketing pages and lead generation API proxies.

### Waitlist Endpoints
- \`POST /api/waitlist\` — Submits lead information (Email, Name, Country, etc) securely to Google Sheets via Webhooks.
`
      },
      { 
        title: "Desktop Application (Tauri + React)", 
        slug: "desktop-app",
        description: "Deep dive into the Trentarev Windows native desktop experience and state architecture.",
        content: `
# Desktop Application

Our desktop client is built on Tauri and React, natively optimized for Windows to provide a seamless, low-latency trading intelligence environment. 

## Client Architecture

The client has **no direct third-party API exposure**. All data strictly flows through the Trentarev backend services. Network traffic is highly optimized. React Providers own all shared state across the application, rather than pages fetching individually.

## Data Truth & Synchronization

Within the application state, **"Calls"** represent the absolute source of truth. By aggregating and analyzing a user's calls, the system deterministically derives portfolio values, profile statistics, and dashboard metrics.
`
      },
      { 
        title: "Backend Data & Caching", 
        slug: "backend-data-caching",
        description: "Market Data Pipeline, Single-flight resolvers, and TTL caching strategies.",
        content: `
# Backend Data & Caching

External financial data APIs are notoriously volatile. The Trentarev API server buffers the frontend from this reality via an internal Market Data Pipeline and an aggressive caching strategy.

## Upstream Sources
- **Alpha Vantage**: Equity pricing & fundamentals.
- **NewsAPI**: Market sentiment & news.
- **ExchangeRate-API**: Forex parity values.

## Caching Strategy
The core scalability paradigm is an aggressive, in-memory caching system using **Single-Flight Resolvers**. If multiple clients request the same un-cached endpoint simultaneously, they wait for a singular upstream "flight" to return.

- **Snapshot Data:** Cached for up to 30 minutes (market open) or 24 hours (market close).
- **News Data:** 15-minute tumbling window.
- **Forex Translation:** Fixed 24 hour TTL.
`
      },
      { 
        title: "Database & Auth Roadmap", 
        slug: "database-auth",
        description: "SQLite deployment details, append-only paradigm, and multitenant future.",
        content: `
# Database & Auth Roadmap

Trentarev exclusively uses local SQLite (via \`better-sqlite3\`) for persistence, eliminating external database overhead.

## Write-Capable Tables
- **Calls:** Immutable events documenting structural positions.
- **Activity:** Append-only log defining changes or exits.
- **Derivatives:** Profile statistics are computationally aggregated from \`Calls\` + \`Activity\`.

## Looking Forward (v2 Auth)
Currently, the app assumes a single local user. To permit cloud syncing, we plan to adopt:
1. **Session Enforcement:** Asymmetric JWT validation.
2. **Row-Level Security:** Migrating \`user_id\` into the indexing strategy.
3. **Key-Exchange Integration:** GitHub OAuth for minimal friction.
`
      }
    ]
  },
  {
    category: "Guides",
    items: [
      {
        title: "Brand Guidelines",
        slug: "brand-guidelines",
        description: "Typography, color schemes, and the core Liquid UI design philosophy.",
        content: `
# Brand Guidelines

Trentarev's design language emphasizes quiet luxury, clarity, and structural calm. When building or extending features, adhere strictly to these visual foundations.

## Typography

We use a highly intentional three-font stack to create depth and hierarchy:

- **Libre Caslon Display**: Reserved strictly for grand, display-level hero headlines.
- **Cormorant Garamond**: Used for elegant subheadings, stylized typographic accents, and serif body pairings.
- **Poppins**: The core workhorse. Used for all modern UI elements, standard body copy, buttons, and functional text.

## Color Palette

Our colors are constrained and soft, avoiding aggressive contrast.

- **Trentarev Gold**: \`#BEAB80\` — The primary accent color. Used sparingly for highlights, active states, and premium visual anchors.
- **Base Tones**: We prefer off-blacks, soft whites (\`#faf9f8\`), and translucent grays over harsh \`#000\` or \`#fff\`.

## UI Philosophy (Liquid / Glassy)

The core of Trentarev's interface is the "Liquid" glassy UI.

- **Transparency & Blur**: Use structural \`backdrop-blur\` to create depth without visual noise.
- **Subtle Borders**: Define edges with incredibly low-opacity borders (e.g., \`border-[#1c1a18]/5\`) rather than solid, heavy lines.
- **Deliberate Whitespace**: Elements must have room to breathe, feeling spacious and intentional.
`
      },
      {
        title: "Extending Trentarev", 
        slug: "extending",
        description: "Principles for contributing and extending functionality within the ecosystem.",
        content: `
# Extending Trentarev

When building new functionality or contributing to the desktop or server ecosystems, our number one rule is simplicity and restraint.

## Server Guidelines

- **Domain Separation:** Never mix Market and Product domain logic in the same router namespace.
- **Error Handling:** All HTTP responses must return strictly valid JSON. Avoid stack traces printing in a production runtime environment.
- **Migrations:** Do not use migration frameworks. Schema schemas are initialized linearly on server start if tables don't exist.

## Client Guidelines

- **Simplicity:** Build exclusively within established Shadcn-style components.
- **Animations:** Limit Framer Motion to deliberate state changes, not decoration.
`
      },
      {
        title: "Local Development & Build", 
        slug: "local-dev-build",
        description: "Step-by-step instructions for running the t-server API and Tauri desktop app.",
        content: `
# Local Development & Build

Setting up the local environment requires spinning up both the Node.js API and the Rust/React Tauri client.

## 1. Running the Backend (\`t-server\`)
Ensure Node.js v20+ is installed and use \`npm\`:
\`\`\`bash
cd t-server
npm install
cp .env.example .env # Add your Alpha Vantage & NewsAPI keys
npm run dev
\`\`\`
The server initializes \`trentarev.sqlite\` in the \`./data\` folder on port \`3000\`.

## 2. Building the Desktop Client (\`t-desk\`)
Ensure the Rust toolchain is installed (\`rustc --version\`).
\`\`\`bash
cd t-desk
bun run tauri dev # Run in Dev Mode (HMR enabled)
bun run tauri build # Compile optimized production MSI/EXE
\`\`\`
`
      },
      {
        title: "Adding a Market Provider", 
        slug: "adding-market-provider",
        description: "Extending t-server to pull in alternative financial market APIs.",
        content: `
# Adding a Market Provider

When injecting a new data source into the system, strictly follow the provider abstraction structure.

1. **Create the Service File:** Navigating to \`src/market/providers/\` and establish a new class implementing the \`IMarketProvider\` interface.
2. **Wrap in Cache:** Instantiate your class exclusively through the \`CacheService\` rather than calling it directly within an Express handler.
3. **Error Propagation:** The provider *must* trap its own HTTP 400/500 errors and map them to internal structural defaults. If an upstream source fails, it shouldn't crash the server.

\`\`\`typescript
export class ExampleProvider {
  async fetchIndex() {
    try {
      const res = await fetch("...");
      return await res.json();
    } catch {
      return { _fallback: true, data: [] };
    }
  }
}
\`\`\`
`
      },
      {
        title: "Database Mgt. & Rate Limits", 
        slug: "db-rate-limits",
        description: "Inspecting SQLite, handling API 429s, and utilizing MOCK environments.",
        content: `
# Database Mgt. & Rate Limits

## Working with SQLite
Locate the \`data/trentarev.sqlite\` generated by the server. Because we use WAL (Write-Ahead Logging) mode, \`-shm\` and \`-wal\` files will appear. Ensure the server is shut down to prevent locking during rigid structure alterations. Automated backups (\`.bak\`) are periodically created.

## Handling API Rate Limits
Hitting external Alpha Vantage limits triggers 429 faults. 
- **Diagnosis:** The API prefixes \`X-RateLimit-Exceeded: true\` inside response headers when fallbacks are used. The UI shows a gentle toast notification.
- **Dev Circumvention:** Set \`MOCK_MARKET_ENVIRONMENT=true\` in \`.env\` to inject hardcoded JSON objects, simulating an active pipeline without pinging endpoints.
`
      }
    ]
  }
];

const getReadTime = (content: string) => Math.max(1, Math.ceil(content.split(/\s+/).length / 200)) + ' min read';

docsData.forEach(section => {
  section.items.forEach(item => {
    (item as any).time = getReadTime(item.content);
  });
});

export const allDocs = docsData.flatMap(section => section.items);
