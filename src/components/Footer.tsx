export default function Footer() {
  return (
    <footer className="pt-16 pb-16 bg-[var(--color-bg-main)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-[2]">
        <div className="flex flex-col gap-8 justify-between items-start pb-10 border-b border-[var(--color-border-subtle)] md:flex-row md:items-center">
          <a href="#hero" className="no-underline flex items-center gap-2">
            <span className="font-[var(--font-heading)] text-[1.2rem] font-extrabold text-[var(--footer-brand-color)]">
              ONUABUCHI CHIDERA
            </span>
          </a>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {[
              { name: "Instagram", url: "https://www.instagram.com/chidera_onuabuchi" },
              { name: "Behance", url: "https://www.behance.net/onuabuchi" },
              { name: "TikTok", url: "https://www.tiktok.com/@onuabuchi_chidera" },
            ].map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text-secondary)] text-[0.88rem] no-underline transition-colors duration-[0.2s] hover:text-[var(--color-accent-volt)]"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-between items-center pt-8 font-[var(--font-mono)] text-[0.75rem] text-[var(--color-text-muted)] md:flex-row">
          <div>
            © {new Date().getFullYear()} Onuabuchi Chidera. All rights reserved.
          </div>
          <div>
            <a
              href="#hero"
              className="text-[var(--color-text-secondary)] no-underline hover:text-[var(--color-accent-volt)] transition-colors duration-[0.2s]"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
