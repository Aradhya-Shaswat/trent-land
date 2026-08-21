---
trigger: model_decision
description: Apply when designing, developing, or modifying any Trentarev website or product interface, including pages, components, layouts, interactions, charts, dashboards, and visual systems.
---

Trentarev General Guide

Purpose

Rules for Trentarev product, engineering, UI/UX, and communication. Prefer existing code and patterns over invention.

Product

Trentarev is a financial intelligence and trading platform for market analysis, calls, AI decision support, portfolio context, and realistic paper trading.

Core surfaces: t-desk, t-server, t-cli, t-land-v2, t-app, t-releases.

Principles

Calm over noisy. Optimize for clarity, hierarchy, restraint, and useful density.

Intelligence over decoration. Effects must communicate state, context, risk, or hierarchy.

Fast paths matter. Quotes, charts, signals, trades, portfolios, and AI tools should be quick to reach.

Paper trading should feel credible, not toy-like.

Engineering

Use t-server for auth, capabilities, market data, AI signals, paper trading, persistence, rate limits, integrations, and background jobs.

Prefer typed contracts, Zod validation, existing auth/capability middleware, explicit errors, REST conventions, and cache-aware market data. Never trust client-side plan/capability claims. Keep financial state authoritative on the backend.

Production DB: Neon PostgreSQL. SQLite is the local fallback.

Paper Trading

Preserve existing execution behavior unless intentionally changing it:

RTH: 9:30 AM–4:00 PM ET, Mon–Fri.

Outside RTH market orders reject as MARKET_CLOSED.

Validate quote freshness before execution.

BUY uses ask; SELL uses bid; apply modeled slippage.

Default slippage: 5 bps for liquid S&P 500 stocks.

Account resets increment generation but retain history.

AI execution requires explicit opt-in plus market-hours, signal-age, duplicate-position, and sizing checks.

Desktop

t-desk is the primary high-attention surface. Reuse existing shell, providers, query/cache patterns, workspace, paper-trading, chart, modal, drawer, table, and command-palette patterns. Keep multi-panel rendering efficient. Do not create a one-off visual language.

Visual Language

Direction: quiet luxury, structural calm, premium, technical, restrained. Use the Trentarev Liquid/glassy aesthetic.

Glass / Liquid UI

Use glass as structure:

translucent surfaces

backdrop blur

soft layered backgrounds

low-opacity borders

subtle depth

restrained shadows

gentle highlights/gradients

Avoid heavy borders, excessive shadows, neon/cyberpunk styling, constant glow, oversized cards, and unnecessary glass everywhere. Glass should establish hierarchy without hiding information.

Typography

Libre Caslon Display: large display/hero headlines.

Cormorant Garamond: elegant subheads/accents.

Poppins: primary UI, controls, labels, buttons, functional copy.
For terminal UI, prioritize readability and density over personality.

Color

Primary brand accent: #BEAB80 (Trentarev Gold).

Favor off-blacks, soft whites, and translucent grays. Use gold sparingly for active, premium, selected, or important emphasis. Do not use gold as an automatic buy/profit/success color. Financial semantics must remain clear.

Components

Use a small surface hierarchy: background → primary glass → elevated glass → focused/selected → modal/overlay.

Borders separate planes, not decorate. Use moderate consistent radii; reserve pills for statuses, filters, badges, and tags.

Buttons need clear hierarchy. Tables are first-class: aligned numerics, concise columns, subtle separation, clear hover/selection, strong scanability.

Motion

Motion explains state, not theatre.

Good: panel/modal/drawer transitions, loading changes, quote/signal refresh feedback, workspace rearrangement, command-palette transitions, subtle hover/press feedback.

Avoid long entrances, continuous decorative motion behind data, delayed execution actions, and animation that harms chart readability.

Marketing may be more expressive/WebGL-heavy. Desktop should stay calmer.

Charts

Charts are functional, not artwork. Make symbol/timeframe clear, preserve price readability, minimize grids, use color intentionally, distinguish historical/projected/simulated values, show units, and handle loading/stale/unavailable states. Do not hide important data only on hover. Extend existing chart/heatmap/macro conventions.

AI

AI should feel analytical, not magical. When relevant, expose analysis scope, timeframe, directional bias, confidence, entry/target/stop, catalysts, invalidation/risk, and timestamp/signal age.

Avoid certainty or guaranteed-outcome language.

Copy

Voice: concise, confident, analytical, calm, specific, professional.

Prefer clear labels such as Paper Trading, Buying Power, Signal Age, Follow AI Signals, Execution History, Market Closed, Reset Paper Account.

Avoid hype, vague CTAs, and over-marketing inside the terminal.

Notifications

State the event first, benefit second.

Trentarev Desktop v2.1.0 is Live
Paper Trading is here. Test your calls without risking real money.

Keep push notifications compact. Emojis are not required.

Accessibility

Glass must not reduce usability. Check contrast, focus states, keyboard navigation, readable sizes, disabled states, status beyond color, non-hover alternatives, and non-blocking motion. Optimize for long viewing sessions.

Multi-Surface Consistency

Features do not need to exist everywhere, but terminology and concepts must stay consistent across desktop, web, CLI, notifications, and APIs.

Feature Checklist

Verify:

real user problem and clear surface

correct backend authority, persistence, auth, and capabilities

loading/empty/error/stale/disabled states

clear financial meaning and simulated-vs-real distinction

reuse of existing components/providers

brand, glass, typography, color, motion, accessibility, performance

concise professional copy

AI Coding Agent Rules

Before editing:

Identify the repository and owning page/component/service.

Inspect existing contracts and patterns.

Check whether financial state, auth, subscriptions, or AI are affected.

Reuse existing abstractions before adding new ones.

Then:

prefer incremental changes over rewrites

match existing naming

keep financial logic deterministic where possible

keep AI structured and explainable

keep permissions/backend state authoritative

preserve existing behavior unless explicitly changed

handle edge states and errors

inspect existing UI before inventing new components

North Star

Make Trentarev calmer, clearer, more capable, or more trustworthy.

Trentarev should feel like a serious financial instrument with a modern liquid interface, not a generic SaaS dashboard wearing a trading costume.

Reference: https://www.trentarev.com/docs/brand-guidelines