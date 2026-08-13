import React from "react";
import Reveal from "../../components/Reveal";
import Link from "next/link";
import { docsData } from "./data";
import { ArrowRight } from "lucide-react";

export default function DocsPage() {
  return (
    <div className="pt-8 max-w-4xl">
      <Reveal>
        <p className="font-sans uppercase tracking-[0.15em] text-xs text-[#1c1a18]/50 font-medium mb-4 flex items-center gap-2">
          Documentation
        </p>
        <h1 className="font-sans font-light text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] text-[#1c1a18] mb-6">
          Platform reference.
        </h1>
        <p className="text-lg md:text-xl text-[#1c1a18]/70 font-sans leading-relaxed mb-16 max-w-2xl">
          A comprehensive technical overview of the Trentarev desktop application, the API architecture, and our design conventions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {docsData.map((section) => (
            <div key={section.category} className="col-span-1 md:col-span-2 mt-8 first:mt-0">
              <h3 className="font-sans font-medium text-lg text-[#1c1a18] mb-6 border-b border-[#1c1a18]/10 pb-4 flex items-center">
                {section.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.items.map((item) => (
                  <Link 
                    href={`/docs/${item.slug}`} 
                    key={item.title} 
                    className="group block p-6 rounded-2xl border border-[#1c1a18]/10 bg-white/40 backdrop-blur-xl hover:border-[#1c1a18]/30 hover:bg-white/80 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="m-0 font-sans font-medium text-[16px] text-[#1c1a18] pr-4">
                        {item.title}
                      </h4>
                      <ArrowRight size={18} className="text-[#1c1a18]/20 group-hover:text-[#1c1a18] group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-0.5" />
                    </div>
                    <p className="m-0 text-[14px] text-[#1c1a18]/60 font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}