import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { allDocs } from "../data";

export function DocsPagination({ currentSlug }: { currentSlug: string }) {
  const currentIndex = allDocs.findIndex((doc) => doc.slug === currentSlug);
  
  if (currentIndex === -1) return null;

  const prevDoc = currentIndex > 0 ? allDocs[currentIndex - 1] : null;
  const nextDoc = currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-24 pt-8 border-t border-[#1c1a18]/10">
      {prevDoc ? (
        <Link 
          href={`/docs/${prevDoc.slug}`}
          className="flex flex-col gap-2.5 p-6 rounded-3xl border border-[#1c1a18]/5 bg-[#faf9f8]/60 hover:bg-white hover:border-[#1c1a18]/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300 group"
        >
          <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#1c1a18]/40 font-sans group-hover:text-[#1c1a18]/70 transition-colors">
            <ChevronLeft size={14} className="group-hover:-translate-x-1.5 transition-transform duration-300 ease-out" />
            Previous
          </span>
          <span className="font-sans font-medium text-[#1c1a18] text-lg pl-1">
            {prevDoc.title}
          </span>
        </Link>
      ) : <div />}

      {nextDoc && (
        <Link 
          href={`/docs/${nextDoc.slug}`}
          className="flex flex-col gap-2.5 p-6 rounded-3xl border border-[#1c1a18]/5 bg-[#faf9f8]/60 hover:bg-white hover:border-[#1c1a18]/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300 cursor-pointer text-right items-end group"
        >
          <span className="flex items-center justify-end gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#1c1a18]/40 font-sans group-hover:text-[#1c1a18]/70 transition-colors">
            Next
            <ChevronRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300 ease-out" />
          </span>
          <span className="font-sans font-medium text-[#1c1a18] text-lg pr-1">
            {nextDoc.title}
          </span>
        </Link>
      )}
    </div>
  );
}
