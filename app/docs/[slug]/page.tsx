import { notFound } from "next/navigation";
import { allDocs } from "../data";
import { MdxContent } from "../components/MdxContent";
import { TableOfContents } from "../components/TableOfContents";
import { DocsPagination } from "../components/DocsPagination";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const doc = allDocs.find((a) => a.slug === params.slug);
  if (!doc) return {};
  return {
    title: `${doc.title} | Trentarev Docs`,
    description: doc.description,
    alternates: {
      canonical: `https://trentarev.com/docs/${doc.slug}`,
    }
  };
}

export default function DocPage({ params }: { params: { slug: string } }) {
  const doc = allDocs.find((a) => a.slug === params.slug);

  if (!doc) {
    notFound();
  }

  // Find category for breadcrumbs
  const section = require('../data').docsData.find((s: any) => 
    s.items.some((i: any) => i.slug === params.slug)
  );
  const category = section ? section.category : 'Documentation';

  return (
    <div className="flex xl:gap-16 pt-8 w-full">
      <article className="flex-1 min-w-0 max-w-3xl">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm font-sans font-medium text-[#1c1a18]/40 mb-8 mt-2">
          <Link href="/docs" className="hover:text-[#1c1a18] transition-colors">Docs</Link>
          <ChevronRight size={14} />
          <span>{category}</span>
        </div>

        <h1 className="font-sans font-light text-4xl md:text-5xl tracking-[-0.02em] text-[#1c1a18] mb-4">
          {doc.title}
        </h1>
        
        <p className="text-lg text-[#1c1a18]/60 font-sans leading-relaxed mb-10 pb-10 border-b border-[#1c1a18]/10">
          {doc.description}
        </p>

        <MdxContent content={doc.content} />
        
        <DocsPagination currentSlug={doc.slug} />
      </article>

      {/* Right Sidebar - Output TOC */}
      <TableOfContents content={doc.content} />
    </div>
  );
}
