"use client";

import Reveal from "./Reveal";
import ShaderAnimation from "./ShaderAnimation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "motion/react";

interface SignalItem {
  id: string;
  label: string;
  detail: string;
  time: string;
}

interface CallItem {
  id: string;
  ticker: string;
  entry: number;
  current: number;
  target: number;
  status: "Active" | "Closed";
  tickDirection?: "up" | "down" | null;
}

const SIGNAL_POOL = [
  { label: "NVDA", detail: "AI bias: Bullish" },
  { label: "AAPL", detail: "Insider flow: steady" },
  { label: "MSFT", detail: "Risk model: Low" },
  { label: "TSLA", detail: "Volume breakout +18%" },
  { label: "AMZN", detail: "Support block test" },
  { label: "META", detail: "Earnings momentum: Bullish" },
  { label: "GOOGL", detail: "Options open interest: Call skew" },
  { label: "AMD", detail: "Sector rotation flow alert" },
  { label: "COIN", detail: "Volatility channel expansion" },
  { label: "MSTR", detail: "Whale transaction detected" }
];

const TICKER_POOL = ["NVDA", "AAPL", "MSFT", "TSLA", "AMZN", "META", "GOOGL", "AMD", "COIN", "MSTR"];

export default function DesktopShowcase() {
  const containerRef = useRef<HTMLElement>(null);

  // --- Live Signals Stream Simulator ---
  const [terminalSignals, setTerminalSignals] = useState<SignalItem[]>([
    { id: "s-1", label: "NVDA", detail: "AI bias: Bullish", time: "2m" },
    { id: "s-2", label: "AAPL", detail: "Insider flow: steady", time: "10m" },
    { id: "s-3", label: "MSFT", detail: "Risk model: Low", time: "23m" }
  ]);

  // --- Live Calls Ticker Simulator ---
  const [callsLifecycle, setCallsLifecycle] = useState<CallItem[]>([
    { id: "c-1", ticker: "NVDA", entry: 890, current: 914.50, target: 1050, status: "Active" },
    { id: "c-2", ticker: "AAPL", entry: 178, current: 181.20, target: 195, status: "Active" },
    { id: "c-3", ticker: "TSLA", entry: 245, current: 238.80, target: 280, status: "Active" }
  ]);

  // 1. Live Terminal Stream Loop
  useEffect(() => {
    const signalInterval = setInterval(() => {
      setTerminalSignals((prev) => {
        // Pick a random signal from the pool
        const randomIndex = Math.floor(Math.random() * SIGNAL_POOL.length);
        const selected = SIGNAL_POOL[randomIndex];

        // Increment relative times for existing signals
        const updatedPrev = prev.map((sig) => {
          let newTime = sig.time;
          if (sig.time === "Just now") newTime = "1m";
          else if (sig.time === "1m") newTime = "2m";
          else if (sig.time === "2m") newTime = "5m";
          else if (sig.time === "5m") newTime = "10m";
          else if (sig.time === "10m") newTime = "20m";
          else if (sig.time === "20m") newTime = "45m";
          else if (sig.time === "45m") newTime = "1h";
          return { ...sig, time: newTime };
        });

        // Insert new signal at the top, slice to maintain 3 items
        const newSignal: SignalItem = {
          id: `sig-${Date.now()}`,
          label: selected.label,
          detail: selected.detail,
          time: "Just now"
        };

        return [newSignal, ...updatedPrev].slice(0, 3);
      });
    }, 2800);

    return () => clearInterval(signalInterval);
  }, []);

  // 2. Live Price Ticker Loop
  useEffect(() => {
    const tickInterval = setInterval(() => {
      setCallsLifecycle((prev) => {
        // Randomly select one of the active calls to tick
        const randomIndex = Math.floor(Math.random() * prev.length);
        
        return prev.map((call, idx) => {
          if (idx !== randomIndex || call.status !== "Active") {
            return { ...call, tickDirection: null };
          }

          // Random percentage fluctuation (-0.3% to +0.4%)
          const changePct = (Math.random() * 0.7 - 0.3) / 100;
          const delta = call.current * changePct;
          const newPrice = Math.max(10, call.current + delta);
          const direction = delta > 0 ? "up" : "down";

          // Simulate random status updates (Target Hit -> Closed)
          let newStatus: CallItem["status"] = call.status;
          if (newPrice >= call.target) {
            newStatus = "Closed";
          }

          return {
            ...call,
            current: newPrice,
            status: newStatus,
            tickDirection: direction
          };
        });
      });

      // Clear the green/red highlight flash after 800ms
      setTimeout(() => {
        setCallsLifecycle((prev) => 
          prev.map((call) => ({ ...call, tickDirection: null }))
        );
      }, 800);

    }, 1400);

    return () => clearInterval(tickInterval);
  }, []);

  // 3. GSAP Pin ScrollTrigger Setup
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Only pin on desktop to avoid mobile viewport resize clipping in embedded browsers
    const isDesktop = window.innerWidth > 768;
    
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: isDesktop ? "+=100%" : "+=0%", // Pin longer on desktop
        pin: isDesktop,
        scrub: true,
        anticipatePin: 1
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // 4. Debounced Reload on Resize
  useEffect(() => {
    let initialWidth = window.innerWidth;
    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      // Reload on significant width changes to force Shader and ScrollTrigger refresh
      if (Math.abs(window.innerWidth - initialWidth) > 50) {
        window.location.reload();
      }
    };

    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 300);
    };

    window.addEventListener("resize", debouncedResize);
    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="terminal"
      style={{
        position: "relative",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#000"
      }}
      className="min-h-[100dvh] py-24 md:py-0"
    >
      <ShaderAnimation />
      <div className="section-inner relative z-10 px-4 py-6 md:p-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-black/10 backdrop-blur-[20px] saturate-[120%] text-white mx-auto w-[min(1160px,calc(100%-32px))]">
        <Reveal>
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-5 md:gap-[64px]">
            <div className="flex flex-col">
              <p className="eyebrow" style={{ color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "2px", fontSize: "11px", marginBottom: "8px" }}>Desktop Experience</p>
              <h2 className="section-title text-[24px] lg:text-[40px] leading-tight" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "-0.02em", color: "#fff", marginBottom: "12px", marginTop: 0 }}>
                A <span style={{ fontFamily: "var(--font-accent)", fontStyle: "italic", fontWeight: 400, fontSize: "1.1em" }}>focused</span> command center.
              </h2>
              <p className="section-subtitle text-[14px] md:text-[16px] leading-[1.4]" style={{ color: "rgba(255,255,255,0.8)", marginBottom: "16px", marginTop: 0 }}>
                Trentarev keeps your calls, market context, and AI insights aligned in one desktop workspace. Built for multi-monitor workflows.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="pill glass" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderColor: "rgba(255,255,255,0.2)", fontSize: "11px", padding: "4px 10px" }}>Alpha Terminal stream</span>
                <span className="pill glass" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderColor: "rgba(255,255,255,0.2)", fontSize: "11px", padding: "4px 10px" }}>Signals + news overview</span>
                <span className="pill glass" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderColor: "rgba(255,255,255,0.2)", fontSize: "11px", padding: "4px 10px" }}>AI risk summaries</span>
              </div>
            </div>

            <div className="p-4 md:p-8 w-full max-w-full overflow-hidden" style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%)",
              backdropFilter: "blur(40px)",
              borderRadius: "32px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 24px 80px rgba(0, 0, 0, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.2)",
              color: "#fff"
            }}>
              <div className="showcase w-full" style={{ background: "transparent", border: "0", boxShadow: "none", padding: "0", backdropFilter: "none" }}>
                
                {/* Alpha Terminal Header */}
                <div className="showcase-header" style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "12px", color: "rgba(255,255,255,0.9)", fontSize: "14px", fontWeight: "500" }}>
                  <span>Alpha Terminal</span>
                  <span style={{ color: "rgba(255,255,255,0.5)" }}>Live</span>
                </div>

                {/* Simulated Real-Time Signals List */}
                <div className="showcase-list relative overflow-hidden" style={{ paddingTop: "8px", minHeight: "102px" }}>
                  <AnimatePresence initial={false}>
                    {terminalSignals.map((signal) => (
                      <motion.div
                        key={signal.id}
                        layout
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10, position: "absolute", width: "100%" }}
                        transition={{
                          duration: 0.4,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                        className="flex flex-row items-center justify-between py-[6px] text-[12px] sm:text-[14px] border-b border-white/5 last:border-0 gap-2 sm:gap-0"
                      >
                        <span className="truncate">
                          <strong>{signal.label}</strong> 
                          <span style={{ color: "rgba(255,255,255,0.6)", paddingLeft: "6px" }}>{signal.detail}</span>
                        </span>
                        <span className="shrink-0" style={{ color: "rgba(255,255,255,0.6)" }}>{signal.time}</span>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
                
                <div style={{ height: "24px" }} />
                
                {/* Calls Lifecycle Header */}
                <div className="showcase-header" style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "8px", color: "rgba(255,255,255,0.9)", fontSize: "13px", fontWeight: "500" }}>
                  <span>Calls Lifecycle</span>
                  <span style={{ color: "rgba(255,255,255,0.5)"}}>Status</span>
                </div>

                {/* Simulated Ticking Calls List */}
                <div className="showcase-list" style={{ paddingTop: "6px" }}>
                  {callsLifecycle.map((call) => (
                    <div key={call.id} className="flex flex-row items-center justify-between py-[6px] text-[12px] sm:text-[14px] border-b border-white/5 last:border-0 gap-2 sm:gap-0">
                      <span className="truncate">
                        <strong>{call.ticker}</strong> 
                        <span style={{ color: "rgba(255,255,255,0.6)", paddingLeft: "8px" }}>
                          ${call.entry} &rarr;{" "}
                          <span style={{
                            color: call.tickDirection === "up" 
                              ? "#22c55e" 
                              : call.tickDirection === "down" 
                                ? "#ef4444" 
                                : "rgba(255,255,255,0.9)",
                            transition: "all 0.15s ease",
                            fontWeight: call.tickDirection ? 600 : 400,
                            background: call.tickDirection === "up" 
                              ? "rgba(34, 197, 94, 0.1)" 
                              : call.tickDirection === "down" 
                                ? "rgba(239, 68, 68, 0.1)" 
                                : "transparent",
                            padding: "2px 4px",
                            borderRadius: "4px"
                          }}>
                            ${call.current.toFixed(2)}
                          </span>{" "}
                          &rarr; ${call.target}
                        </span>
                      </span>
                      <span 
                        className="shrink-0 px-2 py-0.5 rounded-full text-[10px]" 
                        style={{ 
                          background: call.status === "Active" ? "rgba(34, 197, 94, 0.15)" : "rgba(255, 255, 255, 0.1)",
                          color: call.status === "Active" ? "#22c55e" : "rgba(255,255,255,0.6)",
                          border: call.status === "Active" ? "1px solid rgba(34,197,94,0.3)" : "1px solid rgba(255,255,255,0.15)"
                        }}
                      >
                        {call.status}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
