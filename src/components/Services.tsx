import { services } from "~/data/projects";

export default function Services() {
  return (
    <section className="py-24 lg:py-32 border-b border-[var(--color-border-subtle)]" id="services">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-[2]">
        <div className="flex flex-col gap-3 mb-14">
          <span className="inline-flex items-center gap-2 font-[var(--font-mono)] text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-[var(--color-accent-volt)] bg-[var(--color-accent-volt-dim)] py-1.5 px-3.5 rounded-full w-fit border border-[rgba(212,255,0,0.2)]">
            Capabilities
          </span>
          <h2 className="font-[var(--font-heading)] text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.03em] leading-[1.15] text-[var(--color-text-primary)]">
            Services & Disciplines
          </h2>
          <p className="text-[var(--color-text-secondary)] text-[1.05rem] max-w-[600px] leading-[1.7]">
            Four specialized creative pillars designed to take your project from
            conceptual strategy to flawless, production-ready execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.number}
              className="bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] rounded-[var(--radius-lg)] p-10 flex flex-col gap-6 relative overflow-hidden transition-all duration-[0.35s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[var(--color-border-active)] hover:bg-[var(--color-bg-card-hover)] hover:translate-y-[-4px] group"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-transparent transition-colors duration-[0.35s] group-hover:bg-[var(--color-accent-volt)]" />

              <div className="flex items-center justify-between">
                <span className="font-[var(--font-mono)] text-[0.85rem] font-bold text-[var(--color-accent-volt)]">
                  {s.number}
                </span>
                <div className="w-11 h-11 rounded-[var(--radius-md)] bg-[rgba(255,255,255,0.04)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-text-primary)]">
                  {s.icon}
                </div>
              </div>

              <div>
                <span className="font-[var(--font-mono)] text-[0.78rem] text-[var(--color-accent-volt)] uppercase tracking-[0.08em]">
                  {s.subtitle}
                </span>
                <h3 className="font-[var(--font-heading)] text-[1.6rem] font-bold text-[var(--color-text-primary)] tracking-[-0.02em] mt-1">
                  {s.title}
                </h3>
              </div>

              <p className="text-[var(--color-text-secondary)] text-[0.95rem] leading-[1.65]">
                {s.description}
              </p>

              <ul className="list-none flex flex-col gap-2.5 mt-2 pt-5 border-t border-[var(--color-border-subtle)]">
                {s.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-center gap-2.5 text-[0.88rem] text-[var(--color-text-secondary)]"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-[var(--color-accent-volt)] shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
