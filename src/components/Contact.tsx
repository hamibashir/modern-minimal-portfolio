import { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  ArrowUpRight,
  Clock,
  MessageSquare,
  Handshake,
  CheckCircle2,
  Copy,
  Check,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";
import { personalInfo } from "@/data/portfolio";
import { useInView } from "@/components/useInView";
import { cn } from "@/utils/cn";

// ── Process steps ───────────────────────────────────────────────────────────
const steps = [
  {
    icon: <MessageSquare className="h-4 w-4" />,
    title: "Reach Out",
    description: "Send me a message via the form or email",
  },
  {
    icon: <Clock className="h-4 w-4" />,
    title: "Discussion",
    description: "We'll hop on a call within 24 hours",
  },
  {
    icon: <Handshake className="h-4 w-4" />,
    title: "Collaborate",
    description: "Let's build something great together",
  },
];

// ── Social links config ─────────────────────────────────────────────────────
const socials = [
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: <GithubIcon className="h-5 w-5" />,
    handle: "@alexchen",
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    icon: <LinkedinIcon className="h-5 w-5" />,
    handle: "in/alexchen",
  },
  {
    label: "X / Twitter",
    href: personalInfo.twitter,
    icon: <TwitterIcon className="h-5 w-5" />,
    handle: "@alexchen",
  },
];

// ── Copy email button ───────────────────────────────────────────────────────
function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
      )}
      aria-label="Copy email address"
    >
      {copied ? (
        <>
          <Check className="h-3 w-3 text-emerald-500" />
          <span className="text-emerald-600">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="h-3 w-3" />
          <span>Copy</span>
        </>
      )}
    </button>
  );
}

// ── Form submit state ───────────────────────────────────────────────────────
type FormStatus = "idle" | "sending" | "sent";

// ── Main component ──────────────────────────────────────────────────────────
export function Contact() {
  const { ref, isInView } = useInView(0.1);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => {
      setFormStatus("sent");
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        {/* ── Header ──────────────────────────────────────────────────── */}
        <div
          className={cn(
            "transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-sm font-mono text-muted-foreground mb-2">05</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Get in Touch
          </h2>
          <Separator className="mt-4 mb-4 max-w-[60px]" />
          <p className="text-muted-foreground max-w-lg">
            I'm always interested in new opportunities, collaborations, or just
            a friendly chat about technology.
          </p>
        </div>

        {/* ── Process steps ───────────────────────────────────────────── */}
        <div
          className={cn(
            "mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 transition-all duration-700 delay-100",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative flex items-start gap-3 p-4 rounded-xl border border-border bg-card"
            >
              <div className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground shrink-0">
                {step.icon}
              </div>
              <div>
                <p className="text-sm font-semibold">{step.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {/* Step number */}
              <span className="absolute top-3 right-3 text-[10px] font-mono text-muted-foreground/30 font-bold">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>

        {/* ── Main content: info + form ───────────────────────────────── */}
        <div className="mt-10 grid md:grid-cols-[1fr_1.2fr] gap-6 lg:gap-10">
          {/* ── Left column: contact info ─────────────────────────────── */}
          <div
            className={cn(
              "flex flex-col gap-5 transition-all duration-700 delay-200",
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            {/* Email card */}
            <div className="rounded-xl border border-border bg-card p-5 group hover:shadow-sm hover:border-foreground/10 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500/15 to-sky-500/5 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-foreground/60" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/50 mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-medium hover:text-foreground/70 transition-colors truncate block"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <CopyEmailButton />
              </div>
            </div>

            {/* Location card */}
            <div className="rounded-xl border border-border bg-card p-5 hover:shadow-sm hover:border-foreground/10 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500/15 to-teal-500/5 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-foreground/60" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/50 mb-1">
                    Location
                  </p>
                  <p className="text-sm font-medium">
                    {personalInfo.location}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Open to remote worldwide
                  </p>
                </div>
              </div>
            </div>

            {/* Response time */}
            <div className="rounded-xl border border-border bg-card p-5 hover:shadow-sm hover:border-foreground/10 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-500/15 to-orange-500/5 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-foreground/60" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/50 mb-1">
                    Response Time
                  </p>
                  <p className="text-sm font-medium">Within 24 hours</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Usually much sooner
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/50 mb-3 px-1">
                Connect
              </p>
              <div className="space-y-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social flex items-center gap-3 p-3 rounded-xl border border-border bg-card hover:shadow-sm hover:border-foreground/10 transition-all duration-200"
                  >
                    <span className="text-muted-foreground group-hover/social:text-foreground transition-colors">
                      {social.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{social.label}</p>
                      <p className="text-xs text-muted-foreground truncate">
                        {social.handle}
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground/30 group-hover/social:text-muted-foreground transition-all duration-200 group-hover/social:-translate-y-0.5 group-hover/social:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right column: form ────────────────────────────────────── */}
          <div
            className={cn(
              "transition-all duration-700 delay-300",
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              {/* Form header */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold">Send a Message</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-xs font-medium mb-1.5 block text-muted-foreground"
                    >
                      Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className={cn(
                        "w-full h-10 px-3.5 rounded-xl border border-input bg-background text-sm transition-all duration-200",
                        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 focus:border-transparent",
                        "placeholder:text-muted-foreground/40",
                        "hover:border-foreground/20"
                      )}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="text-xs font-medium mb-1.5 block text-muted-foreground"
                    >
                      Email <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className={cn(
                        "w-full h-10 px-3.5 rounded-xl border border-input bg-background text-sm transition-all duration-200",
                        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 focus:border-transparent",
                        "placeholder:text-muted-foreground/40",
                        "hover:border-foreground/20"
                      )}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="text-xs font-medium mb-1.5 block text-muted-foreground"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="What's this about?"
                    className={cn(
                      "w-full h-10 px-3.5 rounded-xl border border-input bg-background text-sm transition-all duration-200",
                      "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 focus:border-transparent",
                      "placeholder:text-muted-foreground/40",
                      "hover:border-foreground/20"
                    )}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="text-xs font-medium mb-1.5 block text-muted-foreground"
                  >
                    Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    placeholder="Tell me about your project, timeline, and budget..."
                    className={cn(
                      "w-full px-3.5 py-3 rounded-xl border border-input bg-background text-sm transition-all duration-200 resize-none",
                      "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 focus:border-transparent",
                      "placeholder:text-muted-foreground/40",
                      "hover:border-foreground/20"
                    )}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className={cn(
                    "w-full inline-flex items-center justify-center gap-2.5 h-11 px-6 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    "disabled:opacity-70 disabled:cursor-not-allowed",
                    formStatus === "sent"
                      ? "bg-emerald-600 text-white hover:bg-emerald-700"
                      : "bg-foreground text-background hover:bg-foreground/85"
                  )}
                >
                  {formStatus === "idle" && (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                  {formStatus === "sending" && (
                    <>
                      <svg
                        className="h-4 w-4 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </>
                  )}
                  {formStatus === "sent" && (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      Message Sent!
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-muted-foreground/50">
                  I'll respond within 24 hours. No spam, ever.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
