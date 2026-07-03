import { useEffect, useState, useCallback, useRef } from "react";
import { ArrowRight, MousePointer2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";
import { personalInfo } from "@/data/portfolio";
import { cn } from "@/utils/cn";

// ── Rotating roles ──────────────────────────────────────────────────────────
const roles = [
  "Flutter Developer",
  "React Engineer",
  "Laravel Architect",
  "Full-Stack Builder",
  "Open Source Contributor",
];

function useRotatingText(items: string[], interval = 3000) {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % items.length);
        setIsVisible(true);
      }, 300);
    }, interval);
    return () => clearInterval(timer);
  }, [items.length, interval]);

  return { text: items[index], isVisible };
}

// ── Typing effect ───────────────────────────────────────────────────────────
function useTypewriter(text: string, speed = 60, delay = 600) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayed("");
    setDone(false);

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayed, done };
}

// ── Component ───────────────────────────────────────────────────────────────
export function Hero() {
  const { text: role, isVisible: roleVisible } = useRotatingText(roles, 3000);
  const { displayed: typedName, done: nameDone } = useTypewriter(
    personalInfo.name,
    80,
    400
  );

  // Mouse-reactive parallax for orbs using refs
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      
      requestAnimationFrame(() => {
        if (orb1Ref.current) orb1Ref.current.style.transform = `translate(${x * 15}px, ${y * 10}px)`;
        if (orb2Ref.current) orb2Ref.current.style.transform = `translate(${x * -20}px, ${y * -12}px)`;
        if (orb3Ref.current) orb3Ref.current.style.transform = `translate(${x * 10}px, ${y * 15}px)`;
      });
    },
    []
  );

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* ── Background layers ──────────────────────────────────────────── */}

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.18]" />

      {/* Radial gradient fade */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,0,0,0.04),transparent)]" />

      {/* Floating orbs — react to mouse */}
      <div
        ref={orb1Ref}
        className="absolute top-[15%] left-[12%] h-72 w-72 rounded-full bg-gradient-to-br from-neutral-200/60 to-neutral-300/30 blur-3xl animate-float-slow"
        style={{
          transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
        }}
      />
      <div
        ref={orb2Ref}
        className="absolute bottom-[20%] right-[8%] h-64 w-64 rounded-full bg-gradient-to-tr from-neutral-200/50 to-neutral-100/40 blur-3xl animate-float-medium"
        style={{
          transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
        }}
      />
      <div
        ref={orb3Ref}
        className="absolute top-[55%] left-[55%] h-40 w-40 rounded-full bg-gradient-to-br from-neutral-300/40 to-transparent blur-2xl animate-float-fast"
        style={{
          transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
        }}
      />

      {/* Bottom fade-out */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      {/* ── Content ────────────────────────────────────────────────────── */}
      <div className="relative max-w-4xl mx-auto w-full">
        <div className="flex flex-col items-center text-center">
          {/* Status badge */}
          <div className="animate-fade-in opacity-0 stagger-1 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border/80 bg-card/80 backdrop-blur-sm mb-10 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[13px] text-muted-foreground">
              Available for opportunities
            </span>
          </div>

          {/* Greeting line */}
          <p className="animate-fade-in opacity-0 stagger-2 text-base sm:text-lg text-muted-foreground font-mono mb-3">
            Hello, my name is
          </p>

          {/* Name with typewriter */}
          <h1 className="animate-fade-in opacity-0 stagger-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05]">
            <span>{typedName}</span>
            <span
              className={cn(
                "inline-block w-[3px] h-[0.75em] bg-foreground ml-1 align-baseline rounded-full",
                nameDone ? "animate-caret" : "opacity-100"
              )}
            />
          </h1>

          {/* Rotating role */}
          <div className="animate-fade-in opacity-0 stagger-3 mt-5 h-9 flex items-center justify-center overflow-hidden">
            <p
              className={cn(
                "text-xl sm:text-2xl font-light text-muted-foreground transition-all duration-300",
                roleVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-3"
              )}
            >
              {role}
            </p>
          </div>

          {/* Sub-description */}
          <p className="animate-fade-in opacity-0 stagger-4 mt-6 text-base sm:text-lg text-muted-foreground/70 max-w-xl mx-auto leading-relaxed">
            I craft{" "}
            <span className="text-foreground/80 font-medium">
              performant mobile apps
            </span>
            ,{" "}
            <span className="text-foreground/80 font-medium">
              elegant web interfaces
            </span>
            , and{" "}
            <span className="text-foreground/80 font-medium">
              scalable backend systems
            </span>{" "}
            that solve real problems.
          </p>

          {/* Tech marquee */}
          <div className="animate-fade-in opacity-0 stagger-5 mt-8 flex items-center gap-3 flex-wrap justify-center">
            {[
              "Flutter",
              "React",
              "TypeScript",
              "Laravel",
              "Node.js",
              "Next.js",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono text-muted-foreground/70 border border-border/60 rounded-md bg-card/50 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="animate-fade-in opacity-0 stagger-6 mt-10 flex flex-col sm:flex-row items-center gap-3">
            <a
              href="#projects"
              className={cn(
                "group inline-flex items-center gap-2.5 px-7 py-3 rounded-xl text-sm font-medium",
                "bg-foreground text-background hover:bg-foreground/85 transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              )}
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className={cn(
                "inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-medium",
                "border border-border bg-card/60 backdrop-blur-sm hover:bg-muted transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              )}
            >
              Get in Touch
            </a>
          </div>

          {/* Social row */}
          <div className="animate-fade-in opacity-0 stagger-7 mt-10 flex items-center gap-5">
            <span className="text-xs text-muted-foreground/50 font-mono uppercase tracking-widest hidden sm:inline">
              Find me
            </span>
            <span className="hidden sm:block h-px w-8 bg-border" />

            {[
              {
                href: personalInfo.github,
                label: "GitHub",
                Icon: GithubIcon,
              },
              {
                href: personalInfo.linkedin,
                label: "LinkedIn",
                Icon: LinkedinIcon,
              },
              {
                href: personalInfo.twitter,
                label: "X / Twitter",
                Icon: TwitterIcon,
              },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground/60 hover:text-foreground transition-colors duration-200"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ───────────────────────────────────────────── */}
      <div className="animate-fade-in opacity-0 stagger-8 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <MousePointer2 className="h-4 w-4 text-muted-foreground/40" />
        <div className="h-8 w-px bg-border relative overflow-hidden">
          <div className="absolute inset-0 bg-foreground/30 animate-scroll-line" />
        </div>
      </div>
    </section>
  );
}
