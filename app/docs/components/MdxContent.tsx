"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Check, Copy } from "lucide-react";

const CodeBlock = ({ inline, className, children, ...props }: any) => {
  const match = /language-(\w+)/.exec(className || "");
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(String(children).replace(/\n$/, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!inline && match) {
    return (
      <div className="relative group rounded-xl overflow-hidden my-6 border border-[#1c1a18]/10 bg-[#1e1e1e]">
        <div className="flex items-center justify-between px-4 py-2 bg-[#2d2d2d] border-b border-white/5">
          <span className="text-xs font-mono text-white/50 lowercase">{match[1]}</span>
          <button
            onClick={copyToClipboard}
            className="text-white/40 hover:text-white transition-colors"
            title="Copy code"
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
          </button>
        </div>
        <SyntaxHighlighter
          style={vscDarkPlus}
          language={match[1]}
          PreTag="div"
          customStyle={{
            margin: 0,
            padding: "1.5rem 1rem",
            background: "transparent",
            fontSize: "14px",
            lineHeight: "1.6",
          }}
          {...props}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      </div>
    );
  }

  return (
    <code className="px-1.5 py-0.5 rounded-md bg-[#1c1a18]/5 text-[#1c1a18] font-mono text-[0.85em]" {...props}>
      {children}
    </code>
  );
};

// Generate IDs for headers so the TOC can scroll to them
const generateId = (text: string) => {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

const Header2 = ({ children }: any) => {
  const text = React.Children.toArray(children).join("");
  return <h2 id={generateId(text)} className="text-2xl md:text-3xl font-sans font-medium text-[#1c1a18] mt-16 mb-6 pb-2 border-b border-[#1c1a18]/10 scroll-mt-32">{children}</h2>;
};

const Header3 = ({ children }: any) => {
  const text = React.Children.toArray(children).join("");
  return <h3 id={generateId(text)} className="text-xl md:text-2xl font-sans font-medium text-[#1c1a18] mt-10 mb-4 scroll-mt-32">{children}</h3>;
};

export function MdxContent({ content }: { content: string }) {
  return (
    <div className="mdx-content text-[16px] md:text-[18px]">
      <style dangerouslySetInnerHTML={{__html: `
        .mdx-content p {
          font-family: var(--font-sans);
          color: rgba(28, 26, 24, 0.7);
          line-height: 1.8;
          margin-bottom: 24px;
        }
        .mdx-content a {
          color: #1c1a18;
          text-decoration: underline;
          text-decoration-color: rgba(28, 26, 24, 0.3);
          text-underline-offset: 4px;
          transition: all 0.2s ease;
        }
        .mdx-content a:hover {
          text-decoration-color: #1c1a18;
        }
        .mdx-content ul {
          list-style-type: disc;
          padding-left: 24px;
          margin-bottom: 24px;
          font-family: var(--font-sans);
          color: rgba(28, 26, 24, 0.7);
        }
        .mdx-content li {
          margin-bottom: 12px;
          line-height: 1.6;
        }
        .mdx-content strong {
          font-weight: 600;
          color: #1c1a18;
        }
      `}} />
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code: CodeBlock,
          h2: Header2,
          h3: Header3,
          h1: () => null, // We already render the title outside
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
