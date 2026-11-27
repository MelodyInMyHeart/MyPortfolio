import { useEffect, useRef } from "react";
import { testimonialsData, clientBrands } from "~/data/projects";

function useCounter(target: number, suffix: string) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 1800;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const current = Math.floor(progress * target);
            el.textContent = `${current}${suffix}`;
            if (progress < 1) requestAnimationFrame(step);
            else el.textContent = `${target}${suffix}`;
          };
          requestAnimationFrame(step);
          observer.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix]);

  return ref;
}

function MetricBox({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useCounter(value, suffix);
  return (
    <div className="bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] rounded-[var(--radius-lg)] py-8 px-6 text-center flex flex-col gap-1 transition-transform duration-[0.2s] hover:translate-y-[-4px] hover:border-[var(--color-border-active)]">
      <span
        ref={ref}
        className="font-[var(--font-heading)] text-[clamp(2.2rem,3.5vw,3rem)] font-extrabold tracking-[-0.03em] text-[var(--color-accent-volt)]"
      >
        {value}
        {suffix}
      </span>
      <span className="font-[var(--font-mono)] text-[0.75rem] uppercase text-[var(--color-text-secondary)] tracking-[0.08em]">
        {label}
      </span>
    </div>
  );
}

export default function SocialProof() {
  const brands = [...clientBrands, ...clientBrands];

  return (
    <section className="py-24 lg:py-32 border-b border-[var(--color-border-subtle)]" id="proof">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-[2]">
        {/* Metrics */}
        <div className="grid grid-cols-2 gap-6 mb-16 lg:grid-cols-4">
          <MetricBox value={5} suffix="+" label="Years of experience" />
          <MetricBox value={100} suffix="+" label="Projects delivered" />
          <MetricBox value={100} suffix="k+" label="Video views" />
          <MetricBox value={100} suffix="%" label="Client satisfaction" />
        </div>

        {/* Marquee */}
        <div className="marquee-container overflow-hidden select-none relative mb-18 py-6 border-t border-[var(--color-border-subtle)] border-b border-[var(--color-border-subtle)]">
          <div className="absolute top-0 left-0 w-[100px] h-full z-[2] pointer-events-none bg-gradient-to-r from-[var(--color-bg-main)] to-transparent" />
          <div className="absolute top-0 right-0 w-[100px] h-full z-[2] pointer-events-none bg-gradient-to-l from-[var(--color-bg-main)] to-transparent" />
          <div className="marquee-track">
            {brands.map((b, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-5 font-[var(--font-heading)] text-[1.25rem] font-extrabold tracking-[0.05em] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors duration-[0.2s]"
              >
                {b.name}{" "}
                <span className="w-[5px] h-[5px] rounded-full bg-[var(--color-accent-volt)]" />
              </span>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-7 min-[640px]:grid-cols-2 items-stretch">
          {testimonialsData.map((t, i) => (
            <div
              key={i}
              className="bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] rounded-[var(--radius-lg)] p-9 flex flex-col justify-start h-full gap-7 transition-all duration-[0.35s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[var(--color-border-active)] hover:translate-y-[-4px]"
            >
              <div className="flex gap-1 text-[var(--color-accent-volt)]">★★★★★</div>
              <p className="text-[0.95rem] leading-[1.7] text-[var(--color-text-secondary)]">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3.5 pt-4 border-t border-[var(--color-border-subtle)] mt-auto">
                <div className="w-11 h-11 flex-shrink-0">
                  {t.avatar ? (
                    <img
                      className="w-11 h-11 rounded-full object-cover border border-[var(--color-border-subtle)] block"
                      src={t.avatar}
                      alt={`${t.name} profile photo`}
                      width={44}
                      height={44}
                      onError={(e) => {
                        const img = e.currentTarget;
                        img.style.display = 'none';
                        const fallback = img.nextElementSibling as HTMLElement | null;
                        if (fallback) fallback.style.display = 'block';
                      }}
                    />
                  ) : null}
                  <svg
                    className="w-11 h-11"
                    style={{ display: t.avatar ? 'none' : 'block' }}
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <circle cx="22" cy="22" r="22" fill="#1e1e1e"/>
                    <text x="22" y="27" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="#d4ff00">
                      {t.name.split(' ').map((w: string) => w[0]).join('').slice(0, 2).toUpperCase()}
                    </text>
                  </svg>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-[var(--font-heading)] text-[0.95rem] font-bold text-[var(--color-text-primary)]">
                    {t.name}
                  </span>
                  <span className="font-[var(--font-mono)] text-[0.72rem] leading-[1.4] text-[var(--color-text-muted)]">
                    {t.role}{t.company ? ` · ${t.company}` : ''}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
