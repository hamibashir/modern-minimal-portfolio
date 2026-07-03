import { useEffect, useState } from "react";
import {
  MapPin,
  Briefcase,
  Coffee,
  Code2,
  GitPullRequest,
  Layers,
  ArrowDownToLine,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { personalInfo } from "@/data/portfolio";
import { useInView } from "@/components/useInView";
import { cn } from "@/utils/cn";

// ── Quick stats ─────────────────────────────────────────────────────────────
const stats = [
  { label: "Years Experience", value: "6+", icon: <Briefcase className="h-4 w-4" /> },
  { label: "Projects Delivered", value: "40+", icon: <Layers className="h-4 w-4" /> },
  { label: "Open Source PRs", value: "120+", icon: <GitPullRequest className="h-4 w-4" /> },
  { label: "Cups of Coffee", value: "∞", icon: <Coffee className="h-4 w-4" /> },
];

// ── Animated counter ────────────────────────────────────────────────────────
function AnimatedValue({ value, animate }: { value: string; animate: boolean }) {
  const numericPart = parseInt(value);
  const suffix = value.replace(/[0-9]/g, "");
  const isNumber = !isNaN(numericPart);

  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (!animate || !isNumber) return;
    let frame: number;
    const duration = 1200;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setDisplayed(Math.round(eased * numericPart));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [animate, isNumber, numericPart]);

  if (!isNumber) return <span>{value}</span>;
  return (
    <span>
      {animate ? displayed : 0}
      {suffix}
    </span>
  );
}

// ── Component ───────────────────────────────────────────────────────────────
export function About() {
  const { ref, isInView } = useInView(0.15);

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        {/* ── Section heading ──────────────────────────────────────────── */}
        <div
          className={cn(
            "transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-sm font-mono text-muted-foreground mb-2">01</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            About Me
          </h2>
          <Separator className="mt-4 mb-10 max-w-[60px]" />
        </div>

        {/* ── Main grid: avatar + content ──────────────────────────────── */}
        <div className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] gap-10 lg:gap-14">
          {/* ── Left column: avatar + quick info ───────────────────────── */}
          <div
            className={cn(
              "transition-all duration-700 delay-200",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            {/* Avatar */}
            <div className="relative group mb-6">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-border bg-muted">
                <img
                  src="/images/avatar.jpg"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              {/* Status dot */}
              <div className="absolute -bottom-1.5 -right-1.5 h-5 w-5 rounded-full bg-card border-2 border-border flex items-center justify-center">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </div>
            </div>

            {/* Quick info pills */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Code2 className="h-4 w-4 shrink-0" />
                <span>Full-Stack & Mobile</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm">
                <span className="relative flex h-4 w-4 items-center justify-center shrink-0">
                  <span className="animate-ping absolute h-2.5 w-2.5 rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-emerald-600 font-medium">
                  Available for work
                </span>
              </div>
            </div>

            {/* Resume CTA */}
            <a
              href="#contact"
              className={cn(
                "mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium",
                "border border-border bg-card hover:bg-muted transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              )}
            >
              <ArrowDownToLine className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          {/* ── Right column: bio + stats ──────────────────────────────── */}
          <div>
            {/* Bio text */}
            <div
              className={cn(
                "transition-all duration-700 delay-300",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <p className="text-lg text-foreground/85 leading-relaxed">
                {personalInfo.bio}
              </p>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                I specialize in building cross-platform mobile apps with{" "}
                <span className="text-foreground font-medium">Flutter</span>,
                crafting responsive web applications with{" "}
                <span className="text-foreground font-medium">React</span> and{" "}
                <span className="text-foreground font-medium">Vue.js</span>, and
                architecting robust backend systems with{" "}
                <span className="text-foreground font-medium">Laravel</span> and{" "}
                <span className="text-foreground font-medium">Node.js</span>. My
                approach combines clean code practices with thoughtful design to
                create software that users love.
              </p>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me contributing to open source,
                writing technical articles, or exploring new technologies to add
                to my toolkit.
              </p>
            </div>

            {/* Tech I love */}
            <div
              className={cn(
                "mt-8 transition-all duration-700 delay-[400ms]",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                Technologies I love
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Flutter",
                  "React",
                  "TypeScript",
                  "Laravel",
                  "Node.js",
                  "Next.js",
                  "Vue.js",
                  "Docker",
                  "PostgreSQL",
                  "AWS",
                ].map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-xs font-normal"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Stats grid */}
            <div
              className={cn(
                "mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 transition-all duration-700 delay-500",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group/stat rounded-xl border border-border bg-card p-4 hover:shadow-sm hover:border-foreground/15 transition-all duration-200"
                >
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    {stat.icon}
                    <span className="text-[11px] font-medium uppercase tracking-wider leading-none">
                      {stat.label}
                    </span>
                  </div>
                  <p className="text-2xl font-bold tracking-tight font-mono">
                    <AnimatedValue value={stat.value} animate={isInView} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
