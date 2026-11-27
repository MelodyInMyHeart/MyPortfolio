import { useState, useRef, type FormEvent } from "react";

const serviceOptions = [
  "Video Editing",
  "Brand Design",
  "Graphic Design",
];

type FeedbackState = { type: "success" | "error"; message: string } | null;

export default function Contact() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState<FeedbackState>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const toggle = (value: string) =>
    setChecked((prev) => ({ ...prev, [value]: !prev[value] }));

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFeedback(null);
    const form = e.currentTarget;

    const nameEl    = form.elements.namedItem("name")    as HTMLInputElement;
    const emailEl   = form.elements.namedItem("email")   as HTMLInputElement;
    const messageEl = form.elements.namedItem("message") as HTMLTextAreaElement;

    const name    = nameEl?.value.trim()    ?? "";
    const email   = emailEl?.value.trim()   ?? "";
    const message = messageEl?.value.trim() ?? "";
    const selected = Object.keys(checked).filter((k) => checked[k]).join(", ");

    // Client-side validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name) {
      setFeedback({ type: "error", message: "Please enter your name or company." });
      nameEl?.focus();
      return;
    }
    if (!email || !emailRegex.test(email)) {
      setFeedback({ type: "error", message: "Please enter a valid email address." });
      emailEl?.focus();
      return;
    }
    if (!message) {
      setFeedback({ type: "error", message: "Please describe your project before sending." });
      messageEl?.focus();
      return;
    }

    setSending(true);

    const formData = new FormData();
    formData.set("access_key", "eb8efc30-0ec6-4813-9453-e9d754fffdc8");
    formData.set("subject", `New Project Inquiry from ${name}`);
    formData.set("replyto", email);
    formData.set("from_name", "Portfolio Contact Form");
    formData.set("botcheck", "");          // honeypot — must be empty
    formData.set("name", name);
    formData.set("email", email);
    formData.set("message", `Services Needed: ${selected || "Not specified"}\n\nProject Details:\n${message}`);

    try {
      const res  = await fetch("https://api.web3forms.com/submit", {
        method:  "POST",
        headers: { Accept: "application/json" },
        body:    formData,
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setFeedback({ type: "success", message: "✓ Thanks! Your inquiry has been sent. I'll reply within 24 hours." });
        form.reset();
        setChecked({});
      } else {
        throw new Error(data.message ?? "Submission rejected");
      }
    } catch (err) {
      console.error("Web3Forms error:", err);
      setFeedback({
        type: "error",
        message: "Something went wrong. Please email me directly at helloonuabuchi@gmail.com.",
      });
    } finally {
      setSending(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard
      .writeText("helloonuabuchi@gmail.com")
      .then(() => alert("Copied: helloonuabuchi@gmail.com"))
      .catch(() => { window.location.href = "mailto:helloonuabuchi@gmail.com"; });
  };

  return (
    <section className="py-24 lg:py-32 border-b border-[var(--color-border-subtle)]" id="contact">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-[2]">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-[4.5rem]">
          {/* Left */}
          <div className="flex flex-col gap-8">
            <span className="inline-flex items-center gap-2 font-[var(--font-mono)] text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-[var(--color-accent-volt)] bg-[var(--color-accent-volt-dim)] py-1.5 px-3.5 rounded-full w-fit border border-[rgba(212,255,0,0.2)]">
              Let's Connect
            </span>
            <h2 className="font-[var(--font-heading)] text-[clamp(2.2rem,4vw,3.25rem)] font-extrabold leading-[1.15] tracking-[-0.03em]">
              Have a project in mind?{" "}
              <span className="text-[var(--color-accent-volt)]">
                Let's create something great.
              </span>
            </h2>
            <p className="text-[var(--color-text-secondary)] text-[1.05rem] leading-[1.7]">
              I'm currently accepting new freelance projects, brand retainers,
              and commercial video editing commissions. Feel free to reach out
              directly via email, WhatsApp, or through the inquiry form.
            </p>

            {/* Channels */}
            <div className="flex flex-col gap-4">
              <button
                onClick={copyEmail}
                className="flex items-center justify-between bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] rounded-[var(--radius-md)] py-3 px-4 md:py-[1.15rem] md:px-6 text-[var(--color-text-primary)] no-underline transition-all duration-[0.2s] cursor-pointer hover:border-[var(--color-border-active)] hover:bg-[var(--color-bg-card-hover)] hover:translate-x-1 text-left w-full gap-3"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 shrink-0 rounded-[var(--radius-sm)] bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-[var(--color-accent-volt)]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="font-[var(--font-mono)] text-[0.65rem] md:text-[0.72rem] uppercase text-[var(--color-text-muted)] truncate">
                      Direct Email (Click to copy)
                    </div>
                    <div className="text-[0.8rem] md:text-[0.95rem] font-semibold text-[var(--color-text-primary)] truncate">
                      helloonuabuchi@gmail.com
                    </div>
                  </div>
                </div>
                <span className="shrink-0">📋</span>
              </button>

              <a
                href="https://wa.me/2349043751135"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] rounded-[var(--radius-md)] py-3 px-4 md:py-[1.15rem] md:px-6 text-[var(--color-text-primary)] no-underline transition-all duration-[0.2s] hover:border-[var(--color-border-active)] hover:bg-[var(--color-bg-card-hover)] hover:translate-x-1 gap-3"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 shrink-0 rounded-[var(--radius-sm)] bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-[var(--color-accent-volt)]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="font-[var(--font-mono)] text-[0.65rem] md:text-[0.72rem] uppercase text-[var(--color-text-muted)] truncate">
                      WhatsApp
                    </div>
                    <div className="text-[0.8rem] md:text-[0.95rem] font-semibold text-[var(--color-text-primary)] truncate">
                      09043751135
                    </div>
                  </div>
                </div>
                <span className="shrink-0">→</span>
              </a>
            </div>
          </div>

          {/* Right form */}
          <div className="bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] rounded-[var(--radius-lg)] p-10 max-sm:p-6">
            <form ref={formRef} onSubmit={onSubmit} className="flex flex-col gap-6" noValidate>
              {/* Honeypot — hidden from humans, traps bots */}
              <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex={-1} aria-hidden="true" />

              {/* Feedback message */}
              {feedback && (
                <div
                  role="status"
                  aria-live="polite"
                  aria-atomic="true"
                  className={`px-4 py-3 rounded-[var(--radius-sm)] text-[0.9rem] leading-relaxed border-l-4 ${
                    feedback.type === "success"
                      ? "bg-[rgba(166,255,77,0.08)] border-[var(--color-accent-volt)] text-[var(--color-accent-volt)]"
                      : "bg-[rgba(255,80,80,0.08)] border-[#ff5050] text-[#ff7070]"
                  }`}
                >
                  {feedback.type === "error" && feedback.message.includes("helloonuabuchi@gmail.com") ? (
                    <>
                      Something went wrong. Please email me directly at{" "}
                      <a
                        href="mailto:helloonuabuchi@gmail.com"
                        className="underline underline-offset-2 hover:opacity-80"
                      >
                        helloonuabuchi@gmail.com
                      </a>
                      .
                    </>
                  ) : (
                    feedback.message
                  )}
                </div>
              )}
              {/* Services */}
              <div className="flex flex-col gap-2">
                <label className="font-[var(--font-mono)] text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-text-secondary)]">
                  Services You Need
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {serviceOptions.map((s) => (
                    <label
                      key={s}
                      className={`flex items-center gap-2.5 min-h-[46px] py-2.5 px-3.5 rounded-[var(--radius-sm)] text-[0.82rem] cursor-pointer transition-all duration-[0.2s] border ${
                        checked[s]
                          ? "border-[var(--color-accent-volt)] bg-[var(--color-accent-volt-dim)] text-[var(--color-text-primary)]"
                          : "bg-[rgba(255,255,255,0.02)] border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:bg-[rgba(255,255,255,0.05)] hover:text-[var(--color-text-primary)]"
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="accent-[var(--color-accent-volt)] shrink-0"
                        checked={!!checked[s]}
                        onChange={() => toggle(s)}
                      />
                      <span className="leading-[1.2]">{s}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="font-[var(--font-mono)] text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-text-secondary)]">
                  Your Name / Company
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="e.g. Alex Morgan (Verve Studio)"
                  required
                  className="w-full bg-[rgba(255,255,255,0.03)] border border-[var(--color-border-subtle)] rounded-[var(--radius-md)] py-3.5 px-[1.15rem] font-[var(--font-body)] text-[0.95rem] text-[var(--color-text-primary)] transition-all duration-[0.2s] outline-none focus:border-[var(--color-accent-volt)] focus:bg-[rgba(255,255,255,0.06)] focus:shadow-[0_0_0_3px_rgba(212,255,0,0.15)]"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="font-[var(--font-mono)] text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-text-secondary)]">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="alex@company.com"
                  required
                  className="w-full bg-[rgba(255,255,255,0.03)] border border-[var(--color-border-subtle)] rounded-[var(--radius-md)] py-3.5 px-[1.15rem] font-[var(--font-body)] text-[0.95rem] text-[var(--color-text-primary)] transition-all duration-[0.2s] outline-none focus:border-[var(--color-accent-volt)] focus:bg-[rgba(255,255,255,0.06)] focus:shadow-[0_0_0_3px_rgba(212,255,0,0.15)]"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="font-[var(--font-mono)] text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-text-secondary)]">
                  Project Details & Goals
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project, timeline, deliverables, and goals..."
                  required
                  className="w-full bg-[rgba(255,255,255,0.03)] border border-[var(--color-border-subtle)] rounded-[var(--radius-md)] py-3.5 px-[1.15rem] font-[var(--font-body)] text-[0.95rem] text-[var(--color-text-primary)] transition-all duration-[0.2s] outline-none focus:border-[var(--color-accent-volt)] focus:bg-[rgba(255,255,255,0.06)] focus:shadow-[0_0_0_3px_rgba(212,255,0,0.15)] resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className={`w-full bg-[var(--color-accent-volt)] text-[#111] font-bold py-3.5 px-7 rounded-full border-none transition-all duration-[0.2s] ${
                  sending
                    ? "opacity-70 cursor-not-allowed"
                    : "cursor-pointer hover:translate-y-[-2px] hover:shadow-[0_8px_25px_rgba(212,255,0,0.35)]"
                }`}
              >
                {sending ? "Sending…" : "Send Project Inquiry →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
