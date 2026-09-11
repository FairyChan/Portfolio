import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Recognition from "@/components/Recognition";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Recognition />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t border-[#d9d5cd] px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-3 text-[10px] uppercase tracking-[0.2em] text-[#77736c] md:flex-row">
          <p>© 2026 Astha Singh</p>
          <p>Fashion · Commerce · Experience</p>
        </div>
      </footer>
    </>
  );
}