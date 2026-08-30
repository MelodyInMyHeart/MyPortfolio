import { useState, type FormEvent } from "react";
import { showGlobalToast } from "~/components/ToastContainer";

const serviceOptions = [
  "Video Editing",
  "Brand Design",
  "Graphic Design",
  "Motion Graphics",
];

export default function Contact() {
  const showToast = showGlobalToast;
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (value: string) =>
    setChecked((prev) => ({ ...prev, [value]: !prev[value] }));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value.trim();
    const selected = Object.keys(checked).filter((k) => checked[k]).join(", ");

    if (!name || !email || !message) {
      showToast("Please fill in your name, email, and project message.", );
      return;
    }

    const subject = encodeURIComponent(`Project Inquiry from ${name} [${selected || "Creative Work"}]`);
    const body = encodeURIComponent(
      `Hi Chidera,\n\nName: ${name}\nEmail: ${email}\nServices Needed: ${selected || "General Design & Video"}\n\nProject Overview:\n${message}\n\nLooking forward to hearing from you!`
    );
    window.location.href = `mailto:chidera.visuals@gmail.com?subject=${subject}&body=${body}`;
    showToast(`Thank you ${name}! Opening your email client to send message...`);
    form.reset();
    setChecked({});
  };

  const copyEmail = () => {
    navigator.clipboard
      .writeText("chidera.visuals@gmail.com")
      .then(() => showToast("Email address copied to clipboard: chidera.visuals@gmail.com"))
      .catch(() => {
        window.location.href = "mailto:chidera.visuals@gmail.com";
      });
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
                className="flex items-center justify-between bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] rounded-[var(--radius-md)] py-[1.15rem] px-6 text-[var(--color-text-primary)] no-underline transition-all duration-[0.2s] cursor-pointer hover:border-[var(--color-border-active)] hover:bg-[var(--color-bg-card-hover)] hover:translate-x-1 text-left w-full"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-[var(--color-accent-volt)]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <div className="font-[var(--font-mono)] text-[0.72rem] uppercase text-[var(--color-text-muted)]">
                      Direct Email (Click to copy)
                    </div>
                    <div className="text-[0.95rem] font-semibold text-[var(--color-text-primary)]">
                      chidera.visuals@gmail.com
                    </div>
                  </div>
                </div>
                <span>📋</span>
              </button>

              <a
                href="https://wa.me/2348000000000?text=Hi%20Chidera,%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] rounded-[var(--radius-md)] py-[1.15rem] px-6 text-[var(--color-text-primary)] no-underline transition-all duration-[0.2s] hover:border-[var(--color-border-active)] hover:bg-[var(--color-bg-card-hover)] hover:translate-x-1"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-[var(--color-accent-volt)]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="font-[var(--font-mono)] text-[0.72rem] uppercase text-[var(--color-text-muted)]">
                      Instant Chat
                    </div>
                    <div className="text-[0.95rem] font-semibold text-[var(--color-text-primary)]">
                      WhatsApp Messenger
                    </div>
                  </div>
                </div>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Right form */}
          <div className="bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] rounded-[var(--radius-lg)] p-10 flex flex-col gap-6 max-sm:p-6">
            <form onSubmit={onSubmit}>
              {/* Services */}
              <div className="flex flex-col gap-2 mb-6">
                <label className="font-[var(--font-mono)] text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-text-secondary)]">
                  Services You Need
                </label>
                <div className="grid grid-cols-2 gap-2 max-[480px]:grid-cols-1">
                  {serviceOptions.map((s) => (
                    <label
                      key={s}
                      className={`flex items-center gap-2 py-2.5 px-3.5 rounded-[var(--radius-sm)] text-[0.82rem] cursor-pointer transition-all duration-[0.2s] border ${
                        checked[s]
                          ? "border-[var(--color-accent-volt)] bg-[var(--color-accent-volt-dim)] text-[var(--color-text-primary)]"
                          : "bg-[rgba(255,255,255,0.02)] border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:bg-[rgba(255,255,255,0.05)] hover:text-[var(--color-text-primary)]"
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="accent-[var(--color-accent-volt)]"
                        checked={!!checked[s]}
                        onChange={() => toggle(s)}
                      />
                      <span>{s}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div className="flex flex-col gap-2 mb-6">
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
              <div className="flex flex-col gap-2 mb-6">
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
              <div className="flex flex-col gap-2 mb-6">
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
                className="w-full bg-[var(--color-accent-volt)] text-[#111] font-bold py-3.5 px-7 rounded-full border-none cursor-pointer transition-all duration-[0.2s] hover:translate-y-[-2px] hover:shadow-[0_8px_25px_rgba(212,255,0,0.35)]"
              >
                Send Project Inquiry →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
