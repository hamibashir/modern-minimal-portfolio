import React, { useState, useCallback, useMemo } from "react";
import { ExternalLink, ArrowUpRight, Folder } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { GithubIcon } from "@/components/icons";
import { projects, type Project } from "@/data/portfolio";
import { useInView } from "@/components/useInView";
import { cn } from "@/utils/cn";

// ── Category config ─────────────────────────────────────────────────────────
const categories = ["All", "Full Stack", "Frontend", "Machine Learning", "App Development"] as const;

function getCategoryCount(cat: string) {
  if (cat === "All") return projects.length;
  return projects.filter((p) => p.category.includes(cat)).length;
}

// ── Project card ────────────────────────────────────────────────────────────
const ProjectCard = React.memo(function ProjectCard({
  project,
  animating,
  delay,
}: {
  project: Project;
  animating: boolean;
  delay: number;
}) {
  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-xl border border-border bg-card overflow-hidden",
        "hover:shadow-md hover:border-foreground/10 transition-all duration-500 hover:-translate-y-1",
        animating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
      style={{ transitionDelay: animating ? `${delay}ms` : "0ms" }}
    >
      {/* Header */}
      <div className="p-5 pb-0">
        <div className="flex items-start justify-between mb-4">
          <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:bg-muted/80 transition-colors duration-200">
            <Folder className="h-5 w-5" />
          </div>
          <div className="flex items-center gap-2">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground/50 hover:text-foreground transition-colors"
                aria-label="Live demo"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground/50 hover:text-foreground transition-colors"
                aria-label="Source code"
                onClick={(e) => e.stopPropagation()}
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base font-semibold tracking-tight leading-snug group-hover:text-foreground/80 transition-colors">
            {project.title}
          </h3>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-200 shrink-0 mt-0.5 -translate-y-0.5 translate-x-0.5 group-hover:translate-y-0 group-hover:translate-x-0" />
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {project.description}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-auto p-5 pt-0">
        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono text-muted-foreground/80 bg-muted px-2 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex items-center gap-3 pt-3 border-t border-border">
          <div className="flex flex-wrap gap-1.5 flex-1">
            {project.category.map((cat) => (
              <Badge
                key={cat}
                variant="outline"
                className="text-[9px] uppercase tracking-wider font-medium truncate max-w-[100px]"
                title={cat}
              >
                {cat}
              </Badge>
            ))}
          </div>
          <span className="text-[11px] font-mono text-muted-foreground/50 shrink-0">
            {project.year}
          </span>
        </div>
      </div>
    </div>
  );
});

// ── Main component ──────────────────────────────────────────────────────────
export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [animating, setAnimating] = useState(true);
  const { ref, isInView } = useInView(0.05);

  const switchCategory = useCallback(
    (cat: string) => {
      if (cat === activeCategory) return;
      setAnimating(false);
      setTimeout(() => {
        setActiveCategory(cat);
        requestAnimationFrame(() => setAnimating(true));
      }, 150);
    },
    [activeCategory]
  );

  const filtered = useMemo(() => {
    return activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeCategory));
  }, [activeCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    categories.forEach(cat => {
      counts[cat] = getCategoryCount(cat);
    });
    return counts;
  }, []);

  return (
    <section id="projects" className="py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* ── Header ──────────────────────────────────────────────────── */}
        <div
          className={cn(
            "transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <p className="text-sm font-mono text-muted-foreground mb-2">
                03
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Featured Projects
              </h2>
              <Separator className="mt-4 mb-4 max-w-[60px]" />
              <p className="text-muted-foreground max-w-lg">
                A selection of projects that showcase my skills across different
                domains and technologies.
              </p>
            </div>

            {/* Project count */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <Folder className="h-4 w-4" />
              <span className="text-sm font-mono">
                {filtered.length} project{filtered.length !== 1 && "s"}
              </span>
            </div>
          </div>
        </div>

        {/* ── Filter tabs ─────────────────────────────────────────────── */}
        <div
          className={cn(
            "mt-10 mb-10 transition-all duration-700 delay-100",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-muted/60 border border-border">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              const count = categoryCounts[cat];
              return (
                <button
                  key={cat}
                  onClick={() => switchCategory(cat)}
                  className={cn(
                    "relative inline-flex items-center gap-1.5 px-4 py-2 text-sm rounded-lg font-medium transition-all duration-200 cursor-pointer",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
                    isActive
                      ? "bg-card text-foreground shadow-sm border border-border"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {cat}
                  <span
                    className={cn(
                      "text-[10px] font-mono tabular-nums transition-colors",
                      isActive
                        ? "text-muted-foreground"
                        : "text-muted-foreground/50"
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Projects grid ───────────────────────────────────────────── */}
        {filtered.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                animating={animating && isInView}
                delay={200 + i * 100}
              />
            ))}
          </div>
        )}

        {/* ── Empty state ─────────────────────────────────────────────── */}
        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <Folder className="h-10 w-10 mx-auto text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground">
              No projects in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
