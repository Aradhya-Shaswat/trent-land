"use client";

import Reveal from "./Reveal";
import { ArrowUpRight } from "lucide-react";

export default function PressSection() {
  const pressItems = [
    {
      source: "Wealth & Finance Digital",
      badge: "Awards 2026",
      title: "Trentarev Nominated for FinTech Awards 2026",
      link: "https://www.wealthandfinance.digital/"
    },
    {
      source: "Tremis Capital",
      badge: "Industry Insight",
      title: "Trentarev's vision recognized by Pushkar Singh at Tremis Capital",
      link: "#"
    }
  ];

  const founders = [
    {
      name: "Aaditya Abhishek Singh",
      role: "Co-founder & CEO",
      bio: "Driving the institutional-grade vision and infrastructure architecture for retail traders.",
      linkedin: "https://linkedin.com/in/aadityaabhisheksingh"
    },
    {
      name: "Aradhya Shaswat",
      role: "Co-founder & CTO",
      bio: "Engineering high-performance native desktop environments and market data pipelines.",
      linkedin: "https://linkedin.com/in/aradhyashaswat"
    }
  ];

  return (
    <section className="relative w-full py-24 bg-[#faf9f8]" id="recognition">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <Reveal>
          <div className="flex flex-col items-center text-center mb-16">
            <p className="font-sans text-[13px] uppercase tracking-[0.15em] text-[#1c1a18]/50 font-medium mb-4">
              Recognition
            </p>
            <h2 className="font-sans font-light text-4xl md:text-5xl leading-[1.1] tracking-[-0.03em] text-[#1c1a18]">
              In the <span className="font-display italic font-normal tracking-normal text-[#BEAB80]">news.</span>
            </h2>
          </div>
        </Reveal>

        {/* Press & Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {pressItems.map((item, i) => (
            <Reveal key={i}>
              <a 
                href={item.link}
                target={item.link !== "#" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="group block relative p-8 md:p-10 rounded-[28px] border border-[#1c1a18]/5 bg-white/40 backdrop-blur-xl hover:bg-white/70 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-[#1c1a18]/10 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-8 right-8 w-8 h-8 rounded-full bg-[#1c1a18]/5 flex items-center justify-center group-hover:bg-[#1c1a18] group-hover:text-white transition-all duration-300">
                  <ArrowUpRight size={16} />
                </div>
                
                <div className="mb-8">
                  <span className="inline-flex items-center px-3 py-1 rounded-full border border-[#1c1a18]/10 bg-white/50 text-[11px] font-medium tracking-wide uppercase text-[#1c1a18]/60 mb-6">
                    {item.badge}
                  </span>
                  <p className="text-sm font-sans font-medium text-[#1c1a18]/40 mb-2">{item.source}</p>
                  <h3 className="font-sans text-xl md:text-2xl font-light text-[#1c1a18] leading-snug">
                    {item.title}
                  </h3>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Founders Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {founders.map((founder, i) => (
            <Reveal key={i}>
              <div className="flex flex-col md:flex-row gap-6 p-8 rounded-[28px] border border-[#1c1a18]/5 bg-gradient-to-br from-white/30 to-transparent backdrop-blur-sm transition-all duration-500">
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-sans font-medium text-[20px] text-[#1c1a18] mb-1">
                      {founder.name}
                    </h4>
                    <p className="font-sans text-[#BEAB80] text-sm font-medium mb-4">
                      {founder.role}
                    </p>
                    <p className="font-sans text-[15px] font-light leading-relaxed text-[#1c1a18]/70 mb-6">
                      {founder.bio}
                    </p>
                  </div>
                  <a 
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-sans font-medium text-[#1c1a18]/50 hover:text-[#0077b5] transition-colors w-fit"
                  >
                    <span>Connect on LinkedIn</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        
      </div>
    </section>
  );
}
