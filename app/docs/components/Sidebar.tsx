"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsData, DocSection, DocItem } from "../data";
import { Search, Menu, X } from "lucide-react";
import { useState, useMemo } from "react";

export function Sidebar() {
  const pathname = usePathname();
  const [search, setSearch] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const filteredData = useMemo(() => {
    if (!search) return docsData;
    return docsData.map((section: DocSection) => ({
      ...section,
      items: section.items.filter((item: DocItem) => 
        item.title.toLowerCase().includes(search.toLowerCase()) || 
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.content.toLowerCase().includes(search.toLowerCase())
      )
    })).filter((section: DocSection) => section.items.length > 0);
  }, [search]);

  return (
    <>
      <button 
        className="md:hidden fixed bottom-6 right-6 z-50 p-4 bg-black text-white rounded-full shadow-lg"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`
        fixed inset-y-0 left-0 z-40 w-[240px] bg-white border-r border-[#1c1a18]/5
        transform transition-all duration-300 ease-out flex flex-col pt-32
        md:translate-x-0 md:static md:h-[calc(100vh-8rem)] md:pt-0 md:sticky md:top-32 
        md:bg-transparent md:border-transparent
        ${mobileOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"}
      `}>
        <div className="px-6 pb-6">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1c1a18]/40 group-focus-within:text-[#1c1a18] transition-colors" size={16} />
            <input
              type="text"
              placeholder="Search docs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-[#1c1a18]/10 group-focus-within:border-[#1c1a18]/30 group-focus-within:shadow-sm rounded-lg py-2 pl-10 pr-4 text-sm font-sans outline-none transition-all placeholder:text-[#1c1a18]/30 text-[#1c1a18]"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {filteredData.map((section: DocSection, idx: number) => (
            <div key={idx} className="mb-8 last:mb-0">
              <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-[#1c1a18]/40 font-sans">
                {section.category}
              </h4>
              <ul className="flex flex-col border-l border-[#1c1a18]/10 ml-1">
                {section.items.map((item: DocItem) => {
                  const isActive = pathname === `/docs/${item.slug}`;
                  return (
                    <li key={item.slug}>
                      <Link
                        href={`/docs/${item.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className={`
                          block py-1.5 pl-4 -ml-[1px] text-[14px] font-sans transition-all border-l
                          ${isActive
                            ? "border-black text-black font-medium"
                            : "border-transparent text-[#1c1a18]/60 hover:text-black hover:border-[#1c1a18]/30"
                          }
                        `}
                      >
                        {item.title}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
          {filteredData.length === 0 && (
            <p className="px-2 text-sm text-[#1c1a18]/50 font-sans">No results found.</p>
          )}
        </div>
      </div>
      
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-[#1c1a18]/20 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
