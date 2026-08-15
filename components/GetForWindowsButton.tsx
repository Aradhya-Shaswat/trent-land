"use client";

import React, { useState } from "react";

interface GetForWindowsButtonProps {
  href?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  size?: "default" | "large";
}

export default function GetForWindowsButton({
  href = "https://releases.trentarev.com",
  className = "",
  style = {},
  onClick,
  size = "default",
}: GetForWindowsButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const isLarge = size === "large";

  return (
    <a
      href={href}
      onClick={onClick}
      className={`get-for-windows-btn ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsActive(false);
      }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: isLarge ? "12px" : "10px",
        padding: isLarge ? "14px 34px" : "11px 26px",
        borderRadius: "9999px",
        background: "linear-gradient(180deg, #3b82f6 0%, #1d4ed8 100%)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        color: "#ffffff",
        fontFamily: "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        fontWeight: 600,
        fontSize: isLarge ? "16px" : "14.5px",
        letterSpacing: "-0.01em",
        textDecoration: "none",
        cursor: "pointer",
        userSelect: "none",
        boxShadow: isActive
          ? "inset 0 2px 4px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(37, 99, 235, 0.35)"
          : isHovered
          ? "inset 0 1px 1.5px rgba(255, 255, 255, 0.65), inset 0 -1.5px 2px rgba(0, 0, 0, 0.2), 0 14px 32px -4px rgba(37, 99, 235, 0.6), 0 6px 14px -2px rgba(0, 0, 0, 0.15)"
          : "inset 0 1px 1.5px rgba(255, 255, 255, 0.55), inset 0 -1.5px 2px rgba(0, 0, 0, 0.2), 0 10px 24px -4px rgba(37, 99, 235, 0.45), 0 4px 10px -2px rgba(0, 0, 0, 0.12)",
        transform: isActive
          ? "translateY(0.5px) scale(0.99)"
          : isHovered
          ? "translateY(-1.5px)"
          : "translateY(0)",
        transition: "all 0.18s cubic-bezier(0.16, 1, 0.3, 1)",
        ...style,
      }}
    >
      <svg
        width={isLarge ? "18" : "16"}
        height={isLarge ? "18" : "16"}
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ flexShrink: 0 }}
      >
        <rect x="2" y="2" width="9.2" height="9.2" rx="1.6" />
        <rect x="12.8" y="2" width="9.2" height="9.2" rx="1.6" />
        <rect x="2" y="12.8" width="9.2" height="9.2" rx="1.6" />
        <rect x="12.8" y="12.8" width="9.2" height="9.2" rx="1.6" />
      </svg>
      <span>Get for Windows</span>
    </a>
  );
}
