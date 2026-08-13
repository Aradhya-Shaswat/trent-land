"use client";

import { useEffect, useState } from "react";

type TOCItem = {
  id: string;
  text: string;
  level: number;
};

export function TableOfContents({ content }: { content: string }) {
  const [activeId, setActiveId] = useState<string>("");
  const [headings, setHeadings] = useState<TOCItem[]>([]);

  useEffect(() => {
    // Basic regex to find markdown headers
    const matches = Array.from(content.matchAll(/^(##|###)\s+(.+)$/gm));
    const items = matches.map(match => {
      const text = match[2].trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return {
        id,
        text,
        level: match[1].length // 2 for ##, 3 for ###
      };
    });
    setHeadings(items);

    const handleScroll = () => {
      let currentId = "";
      for (const item of items) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold based on nav height (120px)
          if (rect.top <= 140) {
            currentId = item.id;
          }
        }
      }
      if (currentId) {
        setActiveId(currentId);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [content]);

  if (headings.length === 0) return null;

  return (
    <div className="hidden xl:block w-64 flex-shrink-0">
      <div className="sticky top-32 pt-8">
        <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#1c1a18]/50 mb-4">
          On this page
        </h4>
        <ul className="flex flex-col gap-2.5 border-l border-[#1c1a18]/5">
          {headings.map((heading) => (
            <li 
              key={heading.id}
              style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}
            >
              <a
                href={`#${heading.id}`}
                className={`
                  block pl-4 py-0.5 text-sm font-sans transition-all border-l -ml-px
                  ${activeId === heading.id 
                    ? "border-[#1c1a18] text-[#1c1a18] font-medium" 
                    : "border-transparent text-[#1c1a18]/60 hover:text-[#1c1a18] hover:border-[#1c1a18]/30"
                  }
                `}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(heading.id)?.scrollIntoView({ behavior: "smooth" });
                  // small timeout to set active id reliably
                  setTimeout(() => setActiveId(heading.id), 100);
                }}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
