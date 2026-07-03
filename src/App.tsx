import { Suspense, lazy, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

const About = lazy(() => import("@/components/About").then((m) => ({ default: m.About })));
const Skills = lazy(() => import("@/components/Skills").then((m) => ({ default: m.Skills })));
const Projects = lazy(() => import("@/components/Projects").then((m) => ({ default: m.Projects })));
const Experience = lazy(() => import("@/components/Experience").then((m) => ({ default: m.Experience })));
const Contact = lazy(() => import("@/components/Contact").then((m) => ({ default: m.Contact })));
const Footer = lazy(() => import("@/components/Footer").then((m) => ({ default: m.Footer })));

export default function App() {
  useEffect(() => {
    // Prevent browser from remembering scroll position
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-[50vh] flex items-center justify-center opacity-0"></div>}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-20 opacity-0"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
}
