import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import About from "@/components/About";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-accent/20 selection:text-white pb-0">
      <Header />
      <Hero />
      <Process />
      <div className="bg-slate-950/30">
        <Experience />
        <Projects />
      </div>
      <TechStack />
      <About />
      <Contact />

      <footer className="py-6 border-t border-slate-900 text-center text-slate-700 text-xs bg-black">
        <div className="container-clean">
          <p>© {new Date().getFullYear()} Haris V K. Built with React & Next.js.</p>
        </div>
      </footer>
    </main>
  );
}
