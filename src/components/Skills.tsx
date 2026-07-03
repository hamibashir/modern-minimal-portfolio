import { useState, useEffect, useRef } from "react";
import { Smartphone, Layout, Server, Cloud, Zap } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { skillCategories, type SkillCategory, type SkillItem } from "@/data/portfolio";
import { useInView } from "@/components/useInView";
import { cn } from "@/utils/cn";

// ── Icon map ────────────────────────────────────────────────────────────────
const iconMap: Record<string, React.ReactNode> = {
  smartphone: <Smartphone className="h-5 w-5" />,
  layout: <Layout className="h-5 w-5" />,
  server: <Server className="h-5 w-5" />,
  cloud: <Cloud className="h-5 w-5" />,
};

// ── Total unique skill count ────────────────────────────────────────────────
const totalSkills = skillCategories.reduce(
  (sum, cat) => sum + cat.skills.length,
  0
);

// ── Animated bar ────────────────────────────────────────────────────────────
function SkillBar({
  skill,
  animate,
  delay,
}: {
  skill: SkillItem;
  animate: boolean;
  delay: number;
}) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!animate) {
      setWidth(0);
      return;
    }
    const timer = setTimeout(() => setWidth(skill.level), delay);
    return () => clearTimeout(timer);
  }, [animate, skill.level, delay]);

  return (
    <div className="group/bar">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium text-foreground/80 group-hover/bar:text-foreground transition-colors">
          {skill.name}
        </span>
        <span
          className={cn(
            "text-xs font-mono tabular-nums text-muted-foreground transition-all duration-500",
            animate ? "opacity-100" : "opacity-0"
          )}
          style={{ transitionDelay: `${delay + 300}ms` }}
        >
          {skill.level}%
        </span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full bg-foreground/20 transition-all duration-700 ease-out"
          style={{
            width: `${width}%`,
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

// ── Category card ───────────────────────────────────────────────────────────
function SkillCategoryCard({
  category,
  index,
  isActive,
  onClick,
  isInView,
}: {
  category: SkillCategory;
  index: number;
  isActive: boolean;
  onClick: () => void;
  isInView: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative flex items-center gap-4 w-full text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        isActive
          ? "bg-card border-foreground/15 shadow-sm"
          : "bg-transparent border-transparent hover:bg-card/60 hover:border-border",
        isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
      )}
      style={{ transitionDelay: isInView ? `${200 + index * 80}ms` : "0ms" }}
    >
      {/* Emoji */}
      <div
        className={cn(
          "h-11 w-11 rounded-xl flex items-center justify-center text-xl shrink-0 transition-all duration-300 bg-gradient-to-br",
          category.accent,
          isActive ? "scale-105" : "group-hover:scale-105"
        )}
      >
        {category.emoji}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p
          className={cn(
            "text-sm font-semibold truncate transition-colors",
            isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
          )}
        >
          {category.title}
        </p>
        <p className="text-xs text-muted-foreground/70 truncate mt-0.5">
          {category.skills.length} skills
        </p>
      </div>

      {/* Active indicator */}
      <div
        className={cn(
          "h-1.5 w-1.5 rounded-full bg-foreground shrink-0 transition-all duration-300",
          isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
        )}
      />
    </button>
  );
}

// ── Detail panel ────────────────────────────────────────────────────────────
function SkillDetail({
  category,
  animate,
}: {
  category: SkillCategory;
  animate: boolean;
}) {
  return (
    <div className="space-y-1">
      {/* Header */}
      <div
        className={cn(
          "flex items-center gap-3 mb-6 transition-all duration-500",
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        )}
      >
        <div
          className={cn(
            "h-10 w-10 rounded-xl flex items-center justify-center bg-gradient-to-br",
            category.accent
          )}
        >
          {iconMap[category.icon]}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{category.title}</h3>
          <p className="text-xs text-muted-foreground">{category.description}</p>
        </div>
      </div>

      {/* Skill bars */}
      <div className="space-y-4">
        {category.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            animate={animate}
            delay={100 + i * 80}
          />
        ))}
      </div>

      {/* Average */}
      <div
        className={cn(
          "mt-6 pt-4 border-t border-dashed border-border flex items-center justify-between transition-all duration-500",
          animate ? "opacity-100" : "opacity-0"
        )}
        style={{ transitionDelay: animate ? "600ms" : "0ms" }}
      >
        <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          Average Proficiency
        </span>
        <span className="text-sm font-bold font-mono">
          {Math.round(
            category.skills.reduce((s, sk) => s + sk.level, 0) /
              category.skills.length
          )}
          %
        </span>
      </div>
    </div>
  );
}

// ── Main component ──────────────────────────────────────────────────────────
export function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [detailAnimating, setDetailAnimating] = useState(true);
  const { ref, isInView } = useInView(0.1);
  const detailRef = useRef<HTMLDivElement>(null);

  // Trigger bar animations on scroll into view
  useEffect(() => {
    if (isInView) setDetailAnimating(true);
  }, [isInView]);

  const switchCategory = (index: number) => {
    if (index === activeIndex) return;
    setDetailAnimating(false);
    setTimeout(() => {
      setActiveIndex(index);
      requestAnimationFrame(() => setDetailAnimating(true));
    }, 150);
  };

  const active = skillCategories[activeIndex];

  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div ref={ref} className="max-w-5xl mx-auto">
        {/* ── Header ──────────────────────────────────────────────────── */}
        <div
          className={cn(
            "transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <p className="text-sm font-mono text-muted-foreground mb-2">02</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Skills & Expertise
              </h2>
              <Separator className="mt-4 mb-4 max-w-[60px]" />
              <p className="text-muted-foreground max-w-lg">
                Technologies and frameworks I work with across the full
                development stack.
              </p>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Zap className="h-4 w-4" />
              <span className="text-sm font-mono">
                {totalSkills} technologies
              </span>
            </div>
          </div>
        </div>

        {/* ── Content: sidebar + detail panel ─────────────────────────── */}
        <div className="mt-12 grid md:grid-cols-[280px_1fr] gap-6 lg:gap-10">
          {/* Sidebar — category list */}
          <div className="flex flex-col gap-1">
            {skillCategories.map((category, index) => (
              <SkillCategoryCard
                key={category.title}
                category={category}
                index={index}
                isActive={activeIndex === index}
                onClick={() => switchCategory(index)}
                isInView={isInView}
              />
            ))}
          </div>

          {/* Detail panel */}
          <div
            ref={detailRef}
            className={cn(
              "rounded-2xl border border-border bg-card p-6 sm:p-8 min-h-[340px] transition-all duration-700 delay-300",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <SkillDetail
              category={active}
              animate={detailAnimating && isInView}
            />
          </div>
        </div>

        {/* ── Bottom: all tools marquee ────────────────────────────────── */}
        <div
          className={cn(
            "mt-12 transition-all duration-700 delay-500",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
            All Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {skillCategories
              .flatMap((cat) => cat.skills.map((s) => s.name))
              .filter((name, i, arr) => arr.indexOf(name) === i)
              .map((name) => (
                <span
                  key={name}
                  className="px-3 py-1.5 text-xs font-mono text-muted-foreground border border-border rounded-lg bg-card/60 hover:bg-card hover:border-foreground/15 hover:text-foreground transition-all duration-200 cursor-default"
                >
                  {name}
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
