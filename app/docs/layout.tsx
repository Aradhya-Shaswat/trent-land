import GlassNav from "../../components/GlassNav";
import Footer from "../../components/Footer";
import { Sidebar } from "./components/Sidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#faf9f8] min-h-screen selection:bg-[#1c1a18]/10" style={{ isolation: "isolate" }}>
      <GlassNav alwaysLight={true} />
      
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="flex flex-col md:flex-row md:gap-12 lg:gap-16 relative">
          <Sidebar />
          
          <main className="flex-1 min-w-0 pb-32">
            {children}
          </main>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
