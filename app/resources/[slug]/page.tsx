import GlassNav from "../../../components/GlassNav";
import Footer from "../../../components/Footer";
import Reveal from "../../../components/Reveal";
import { allArticles } from "../data";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = allArticles.find((a) => a.slug === params.slug);
  if (!article) return {};
  return {
    title: `${article.title} | Trentarev Resources`,
    description: article.description || article.title,
    alternates: {
      canonical: `https://trentarev.com/resources/${article.slug}`,
    }
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = allArticles.find(a => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  // Very simple Markdown-like parser for paragraphs and bold text
  const paragraphs = article.content.trim().split('\n\n');

  return (
    <div>
      <GlassNav alwaysLight={true} />
      <main style={{ paddingTop: "160px", paddingBottom: "100px", minHeight: "100vh" }}>
        <article className="section-inner" style={{ maxWidth: "800px" }}>
          
          <Link href="/resources" style={{ 
            display: "inline-block",
            fontFamily: "var(--font-sans)", 
            fontSize: "14px", 
            color: "rgba(28, 26, 24, 0.6)", 
            textDecoration: "none",
            marginBottom: "32px",
            borderBottom: "1px solid transparent",
            transition: "all 0.2s ease"
          }}
          className="back-link"
          >
            ← Back to Resources
          </Link>
          <style dangerouslySetInnerHTML={{__html: `
            .back-link:hover {
              color: #1c1a18 !important;
              border-bottom-color: #1c1a18 !important;
            }
          `}} />

          <Reveal>
            <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "24px" }}>
              <p style={{
                fontFamily: "var(--font-sans)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                fontSize: "12px",
                color: "rgba(28, 26, 24, 0.5)",
                fontWeight: 500,
                margin: 0
              }}>
                {article.time}
              </p>
            </div>
            
            <h1 style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
              fontSize: "56px",
              lineHeight: "1.1",
              letterSpacing: "-0.03em",
              color: "#1c1a18",
              marginTop: 0,
              marginBottom: "24px"
            }}>
              {article.title}
            </h1>
            
            <p style={{ 
              fontSize: "20px", 
              color: "rgba(28, 26, 24, 0.6)", 
              fontFamily: "var(--font-display)", 
              fontStyle: "italic",
              lineHeight: "1.6", 
              marginBottom: "64px",
              paddingBottom: "64px",
              borderBottom: "1px solid rgba(28, 26, 24, 0.1)"
            }}>
              "{article.description}"
            </p>

            <div style={{ 
              fontFamily: "var(--font-sans)", 
              fontSize: "18px", 
              lineHeight: "1.8", 
              color: "rgba(28, 26, 24, 0.8)",
              display: "flex",
              flexDirection: "column",
              gap: "32px"
            }}>
              {paragraphs.map((p, i) => {
                // If the paragraph starts with bold text "**", style it as a subhead
                if (p.startsWith('**') && p.includes('**', 2)) {
                  const titleEnd = p.indexOf('**', 2);
                  const titleStr = p.slice(2, titleEnd);
                  const rest = p.slice(titleEnd + 2).trim();
                  
                  return (
                    <div key={i}>
                      <h3 style={{
                        fontFamily: "var(--font-sans)",
                        fontWeight: 500,
                        fontSize: "24px",
                        letterSpacing: "-0.02em",
                        color: "#1c1a18",
                        marginBottom: "16px",
                        marginTop: "24px"
                      }}>
                        {titleStr}
                      </h3>
                      {rest && <p style={{ margin: 0 }}>{rest}</p>}
                    </div>
                  );
                }

                return <p key={i} style={{ margin: 0 }}>{p}</p>;
              })}
            </div>
          </Reveal>
        </article>
      </main>
      <Footer />
    </div>
  );
}