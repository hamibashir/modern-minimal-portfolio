import { useState, useCallback, useRef, useEffect } from "react";
import {
  Briefcase,
  GraduationCap,
  Award,
  CalendarDays,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  timelineData,
  type TimelineCategory,
  type TimelineItem,
} from "@/data/portfolio";
import { useInView } from "@/components/useInView";
import { cn } from "@/utils/cn";

// ── Tab config ──────────────────────────────────────────────────────────────
const tabs: {
  id: TimelineCategory;
  label: string;
  description: string;
  icon: React.ReactNode;
  emoji: string;
  accent: string;
}[] = [
  {
    id: "experience",
    label: "Experience",
    description: "Professional roles",
    icon: <Briefcase className="h-4 w-4" />,
    emoji: "💼",
    accent: "from-blue-500/15 to-sky-500/5",
  },
  {
    id: "education",
    label: "Education",
    description: "Academic background",
    icon: <GraduationCap className="h-4 w-4" />,
    emoji: "🎓",
    accent: "from-violet-500/15 to-purple-500/5",
  },
  {
    id: "certifications",
    label: "Certifications",
    description: "Industry credentials",
    icon: <Award className="h-4 w-4" />,
    emoji: "🏅",
    accent: "from-amber-500/15 to-orange-500/5",
  },
];

// ── Timeline entry ──────────────────────────────────────────────────────────
function TimelineEntry({
  item,
  index,
  isLast,
  animating,
  activeTab,
}: {
  item: TimelineItem;
  index: number;
  isLast: boolean;
  animating: boolean;
  activeTab: TimelineCategory;
}) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(false);
  }, [activeTab]);

  return (
    <div
      className={cn(
        "relative flex gap-5 transition-all duration-500 ease-out",
        animating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      )}
      style={{ transitionDelay: animating ? `${100 + index * 100}ms` : "0ms" }}
    >
      {/* ── Left: timeline gutter ──────────────────────────────────── */}
      <div className="flex flex-col items-center shrink-0 pt-1">
        {/* Dot */}
        <div className="relative z-10 h-8 w-8 rounded-full bg-card border-2 border-border flex items-center justify-center text-xs font-mono font-bold text-muted-foreground group-hover:border-foreground/30 transition-colors">
          {String(index + 1).padStart(2, "0")}
        </div>
        {/* Connector line */}
        {!isLast && (
          <div className="flex-1 w-px bg-border mt-2" />
        )}
      </div>

      {/* ── Right: content card ────────────────────────────────────── */}
      <div className={cn("flex-1 pb-8", isLast && "pb-0")}>
        <div
          className={cn(
            "group rounded-xl border border-border bg-card transition-all duration-300",
            "hover:shadow-md hover:border-foreground/10"
          )}
        >
          <div className="p-5">
            {/* Top row */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground bg-muted px-2.5 py-1 rounded-md">
                  <CalendarDays className="h-3 w-3" />
                  {item.period}
                </span>
                {item.subtitle && (
                  <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {item.subtitle}
                  </span>
                )}
              </div>

              <button
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
                aria-label={expanded ? "Collapse details" : "Expand details"}
                className={cn(
                  "h-7 w-7 rounded-lg flex items-center justify-center text-muted-foreground shrink-0",
                  "hover:bg-muted hover:text-foreground transition-all duration-200 cursor-pointer",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                )}
              >
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    expanded && "rotate-180"
                  )}
                />
              </button>
            </div>

            {/* Title */}
            <h3 className="text-base font-semibold leading-snug">
              {item.title}
            </h3>

            {/* Tags (always visible) */}
            {item.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-3">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono text-muted-foreground/80 bg-muted px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Expandable details */}
            <div
              className={cn(
                "grid transition-all duration-300 ease-in-out",
                expanded
                  ? "grid-rows-[1fr] opacity-100 mt-4"
                  : "grid-rows-[0fr] opacity-0 mt-0"
              )}
            >
              <div className="overflow-hidden">
                <div className="pt-3 border-t border-dashed border-border">
                  <p className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground/60 mb-3">
                    Details
                  </p>
                  
                  {item.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {item.description}
                    </p>
                  )}
                  
                  {!item.description && item.details.length === 0 && (
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      More details coming soon.
                    </p>
                  )}

                  {item.details.length > 0 && (
                    <ul className="space-y-2.5">
                      {item.details.map((detail, i) => (
                        <li
                          key={detail}
                          className="text-sm text-muted-foreground flex items-start gap-3"
                        >
                          <span className="shrink-0 h-5 w-5 rounded-md bg-muted flex items-center justify-center text-[10px] font-mono font-medium text-muted-foreground/70 mt-px">
                            {i + 1}
                          </span>
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main component ──────────────────────────────────────────────────────────
export function Experience() {
  const [activeTab, setActiveTab] = useState<TimelineCategory>("experience");
  const [animating, setAnimating] = useState(true);
  const { ref, isInView } = useInView(0.1);
  const tabListRef = useRef<HTMLDivElement>(null);

  const switchTab = useCallback(
    (tab: TimelineCategory) => {
      if (tab === activeTab) return;
      setAnimating(false);
      setTimeout(() => {
        setActiveTab(tab);
        requestAnimationFrame(() => setAnimating(true));
      }, 150);
    },
    [activeTab]
  );

  useEffect(() => {
    if (isInView) setAnimating(true);
  }, [isInView]);

  // Keyboard nav
  const handleTabKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      const cur = tabs.findIndex((t) => t.id === activeTab);
      let next = cur;

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        next = (cur + 1) % tabs.length;
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        next = (cur - 1 + tabs.length) % tabs.length;
      } else if (e.key === "Home") {
        e.preventDefault();
        next = 0;
      } else if (e.key === "End") {
        e.preventDefault();
        next = tabs.length - 1;
      } else {
        return;
      }

      switchTab(tabs[next].id);
      tabListRef.current
        ?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
        ?.[next]?.focus();
    },
    [activeTab, switchTab]
  );

  const items: TimelineItem[] = timelineData[activeTab];
  const activeTabMeta = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="experience" className="py-24 px-6 bg-muted/30">
      <div ref={ref} className="max-w-5xl mx-auto">
        {/* ── Header ──────────────────────────────────────────────────── */}
        <div
          className={cn(
            "transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-sm font-mono text-muted-foreground mb-2">04</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Background
          </h2>
          <Separator className="mt-4 mb-4 max-w-[60px]" />
          <p className="text-muted-foreground max-w-lg">
            My professional journey, academic foundation, and industry
            credentials.
          </p>
        </div>

        {/* ── Content grid: sidebar + timeline ────────────────────────── */}
        <div className="mt-12 grid md:grid-cols-[240px_1fr] gap-6 lg:gap-10">
          {/* ── Sidebar tabs ─────────────────────────────────────────── */}
          <div
            ref={tabListRef}
            role="tablist"
            aria-label="Timeline categories"
            className="flex flex-col gap-1.5"
          >
            {tabs.map((tab, index) => {
              const isActive = activeTab === tab.id;
              const count = timelineData[tab.id].length;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onKeyDown={handleTabKeyDown}
                  onClick={() => switchTab(tab.id)}
                  className={cn(
                    "group relative flex items-center gap-4 w-full text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    isActive
                      ? "bg-card border-foreground/15 shadow-sm"
                      : "bg-transparent border-transparent hover:bg-card/60 hover:border-border",
                    isInView
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  )}
                  style={{
                    transitionDelay: isInView ? `${200 + index * 80}ms` : "0ms",
                  }}
                >
                  {/* Icon */}
                  <div
                    className={cn(
                      "h-11 w-11 rounded-xl flex items-center justify-center text-xl shrink-0 transition-all duration-300 bg-gradient-to-br",
                      tab.accent,
                      isActive ? "scale-105" : "group-hover:scale-105"
                    )}
                  >
                    {tab.emoji}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p
                      className={cn(
                        "text-sm font-semibold truncate transition-colors",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground group-hover:text-foreground"
                      )}
                    >
                      {tab.label}
                    </p>
                    <p className="text-[11px] text-muted-foreground/60 truncate mt-0.5">
                      {count} {count === 1 ? "entry" : "entries"}
                    </p>
                  </div>

                  {/* Active dot */}
                  <div
                    className={cn(
                      "h-1.5 w-1.5 rounded-full bg-foreground shrink-0 transition-all duration-300",
                      isActive
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-0"
                    )}
                  />
                </button>
              );
            })}

            {/* Summary stat */}
            <div
              className={cn(
                "mt-3 px-4 py-3 rounded-xl border border-dashed border-border transition-all duration-700",
                isInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
              )}
              style={{ transitionDelay: isInView ? "500ms" : "0ms" }}
            >
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/50 mb-1">
                Total
              </p>
              <p className="text-xl font-bold font-mono tracking-tight">
                {Object.values(timelineData).reduce(
                  (sum, arr) => sum + arr.length,
                  0
                )}
                <span className="text-sm font-normal text-muted-foreground ml-1">
                  entries
                </span>
              </p>
            </div>
          </div>

          {/* ── Timeline panel ────────────────────────────────────────── */}
          <div
            role="tabpanel"
            id={`panel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
            className={cn(
              "min-h-[300px] rounded-2xl border border-border bg-card p-5 sm:p-7 transition-all duration-700 delay-300",
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            {/* Panel header */}
            <div
              className={cn(
                "flex items-center gap-3 mb-6 pb-5 border-b border-border transition-all duration-500",
                animating && isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3"
              )}
            >
              <div
                className={cn(
                  "h-9 w-9 rounded-lg flex items-center justify-center bg-gradient-to-br",
                  activeTabMeta.accent
                )}
              >
                {activeTabMeta.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold">
                  {activeTabMeta.label}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {activeTabMeta.description}
                </p>
              </div>
              <span className="ml-auto text-xs font-mono text-muted-foreground/50">
                {items.length} {items.length === 1 ? "entry" : "entries"}
              </span>
            </div>

            {/* Timeline entries */}
            <div>
              {items.map((item, index) => (
                <TimelineEntry
                  key={`${activeTab}-${index}-${item.title}`}
                  item={item}
                  index={index}
                  isLast={index === items.length - 1}
                  animating={animating && isInView}
                  activeTab={activeTab}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
