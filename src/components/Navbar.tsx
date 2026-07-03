import { useState, useEffect, useCallback, useRef } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/utils/cn";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Background", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const scrollTicking = useRef(false);

  // ── Scroll tracking ───────────────────────────────────────────────────────
  const handleScroll = useCallback(() => {
    if (!scrollTicking.current) {
      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);

        // Determine active section
        const sections = navLinks
          .map((l) => l.href.replace("#", ""))
          .map((id) => document.getElementById(id))
          .filter(Boolean) as HTMLElement[];

        let current = "";
        for (const section of sections) {
          const top = section.offsetTop - 120;
          if (window.scrollY >= top) {
            current = section.id;
          }
        }
        setActiveSection(current);
        scrollTicking.current = false;
      });
      scrollTicking.current = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // ── Lock body scroll when mobile menu is open ─────────────────────────────
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "py-2" : "py-4"
        )}
      >
        <nav
          className={cn(
            "max-w-3xl mx-auto px-4 transition-all duration-500",
            isScrolled ? "px-2" : "px-6"
          )}
        >
          <div
            className={cn(
              "flex items-center justify-between h-12 transition-all duration-500 rounded-2xl px-4",
              isScrolled
                ? "bg-card/75 backdrop-blur-xl border border-border/60 shadow-lg shadow-black/[0.03]"
                : "bg-transparent"
            )}
          >
            {/* ── Logo ─────────────────────────────────────────────────── */}
            <a
              href="#"
              className="relative text-base font-bold tracking-tight hover:opacity-70 transition-opacity shrink-0"
            >
              AC
              <span className="text-muted-foreground font-normal">.</span>
            </a>

            {/* ── Desktop links ────────────────────────────────────────── */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-3 py-1.5 text-[13px] font-medium rounded-lg transition-all duration-200",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {/* Active background pill */}
                    {isActive && (
                      <span className="absolute inset-0 bg-muted rounded-lg" />
                    )}
                    <span className="relative">{link.label}</span>
                  </a>
                );
              })}
            </div>

            {/* ── CTA + mobile toggle ──────────────────────────────────── */}
            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className={cn(
                  "hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 text-[13px] font-medium rounded-lg transition-all duration-200",
                  "bg-foreground text-background hover:bg-foreground/85"
                )}
              >
                Let's Talk
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "md:hidden h-9 w-9 flex items-center justify-center rounded-xl transition-all duration-200 cursor-pointer",
                  "text-foreground hover:bg-muted",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                )}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                <div className="relative h-5 w-5">
                  <Menu
                    className={cn(
                      "h-5 w-5 absolute inset-0 transition-all duration-300",
                      isMobileMenuOpen
                        ? "opacity-0 rotate-90 scale-75"
                        : "opacity-100 rotate-0 scale-100"
                    )}
                  />
                  <X
                    className={cn(
                      "h-5 w-5 absolute inset-0 transition-all duration-300",
                      isMobileMenuOpen
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 -rotate-90 scale-75"
                    )}
                  />
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* ── Mobile overlay ───────────────────────────────────────────────── */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* ── Mobile drawer ────────────────────────────────────────────────── */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-72 bg-card border-l border-border shadow-2xl",
          "transition-transform duration-300 ease-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 h-16 border-b border-border">
            <span className="text-base font-bold tracking-tight">
              AC<span className="text-muted-foreground font-normal">.</span>
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="h-9 w-9 flex items-center justify-center rounded-xl hover:bg-muted transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Drawer links */}
          <nav className="flex-1 px-4 py-6">
            <div className="space-y-1">
              {navLinks.map((link, index) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300",
                      isActive
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                      // Stagger entrance
                      isMobileMenuOpen
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-4"
                    )}
                    style={{
                      transitionDelay: isMobileMenuOpen
                        ? `${150 + index * 50}ms`
                        : "0ms",
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                    )}
                  </a>
                );
              })}
            </div>
          </nav>

          {/* Drawer footer CTA */}
          <div
            className={cn(
              "px-4 pb-8 transition-all duration-300",
              isMobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: isMobileMenuOpen ? "400ms" : "0ms" }}
          >
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-medium bg-foreground text-background hover:bg-foreground/85 transition-colors"
            >
              Let's Talk
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
