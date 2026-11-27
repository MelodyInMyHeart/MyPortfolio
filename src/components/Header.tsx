import { useState, useEffect, useCallback } from "react";
import { useTheme } from "~/hooks/useTheme";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#work", label: "Selected Work" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About Me" },
    { href: "#proof", label: "Client Reviews" },
    { href: "#contact", label: "Get in Touch" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full box-border z-[100] transition-all duration-[0.35s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? "bg-[rgba(17,17,17,0.9)] backdrop-blur-[20px] border-b border-[rgba(255,255,255,0.08)] py-3.5 md:py-4 px-5 md:px-8"
            : "bg-transparent py-4 md:py-5 px-5 md:px-8"
        }`}
        data-theme={theme}
      >
        <div className="max-w-[1280px] mx-auto w-full box-border flex items-center justify-between gap-4">
          {/* Hamburger (mobile & compact tablet) */}
          <button
            type="button"
            className="flex lg:hidden flex-col items-center justify-center gap-[6px] bg-transparent border-none cursor-pointer p-0 w-11 h-11 shrink-0 z-[101] focus-visible:outline-2 focus-visible:outline-[var(--color-accent-volt)] focus-visible:outline-offset-2 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
          >
            <span
              className={`block w-6 h-[2px] ${
                scrolled && !mobileOpen ? "bg-white" : "bg-[var(--header-icon)]"
              } rounded-sm transition-all duration-[0.2s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] ${
                scrolled && !mobileOpen ? "bg-white" : "bg-[var(--header-icon)]"
              } rounded-sm transition-all duration-[0.2s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] ${
                scrolled && !mobileOpen ? "bg-white" : "bg-[var(--header-icon)]"
              } rounded-sm transition-all duration-[0.2s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>

          {/* Desktop Inline Navigation (1024px+) */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-[var(--font-body)] text-[0.95rem] font-medium no-underline whitespace-nowrap transition-colors duration-[0.2s] focus-visible:outline-2 focus-visible:outline-[var(--color-accent-volt)] focus-visible:outline-offset-4 rounded ${
                  scrolled && theme === "light"
                    ? "text-[rgba(255,255,255,0.78)] hover:text-[var(--color-accent-volt)]"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-accent-volt)]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
              aria-pressed={theme === "light"}
              className="w-12 h-[26px] bg-[var(--theme-toggle-track)] rounded-full relative cursor-pointer border border-[var(--theme-toggle-border)] transition-colors duration-[0.2s] shrink-0 focus-visible:outline-2 focus-visible:outline-[var(--color-accent-volt)] focus-visible:outline-offset-2"
              title="Toggle theme"
            >
              <div
                className={`absolute top-[3px] w-[18px] h-[18px] bg-[var(--theme-toggle-knob)] rounded-full transition-all duration-[0.2s] ${
                  theme === "light"
                    ? "left-[22px] shadow-[0_1px_3px_rgba(0,0,0,0.18),0_0_0_1px_rgba(0,0,0,0.06)]"
                    : "left-[3px]"
                }`}
              />
            </button>
            {/* CTA */}
            <a
              href="#contact"
              className={`bg-[var(--header-button-bg)] text-[#111] font-[var(--font-body)] text-[0.85rem] font-bold py-[0.55rem] px-5 md:px-[1.4rem] rounded-full border border-[var(--header-button-border)] no-underline whitespace-nowrap transition-all duration-[0.2s] inline-flex items-center justify-center hover:translate-y-[-1px] hover:scale-[1.03] hover:bg-[#d4ff00] ${
                theme === "light"
                  ? "shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
                  : "shadow-[0_4px_15px_rgba(255,255,255,0.1)]"
              }`}
            >
              Let's Talk
            </a>
          </div>
        </div>
      </header>

      {/* Mobile & Compact Tablet Dropdown */}
      <nav
        id="mobile-nav-drawer"
        aria-label="Mobile navigation"
        className={`fixed lg:hidden top-[76px] left-0 w-full h-[calc(100dvh-76px)] box-border bg-[var(--color-bg-main)] px-5 pt-4 pb-[calc(1.5rem+env(safe-area-inset-bottom))] flex flex-col gap-1 overflow-y-auto overscroll-contain md:left-auto md:right-8 md:top-[84px] md:max-w-[320px] md:h-auto md:max-h-[calc(100dvh-100px)] md:px-5 md:pt-3 md:pb-5 md:rounded-[var(--radius-md)] md:border md:border-[var(--color-border-active)] md:shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-all duration-[0.35s] ease-[cubic-bezier(0.16,1,0.3,1)] z-[99] ${
          mobileOpen
            ? "translate-y-0 opacity-100 pointer-events-auto visible"
            : "-translate-y-3 opacity-0 pointer-events-none invisible"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMobile}
            className="font-[var(--font-heading)] text-[clamp(1.25rem,5.5vw,1.75rem)] md:font-[var(--font-body)] md:text-[0.95rem] md:font-semibold font-bold no-underline text-[var(--color-text-primary)] flex items-center justify-between min-h-[48px] md:min-h-[44px] py-3.5 md:py-2.5 border-b border-[var(--color-border-subtle)] hover:text-[var(--color-accent-volt)] focus-visible:text-[var(--color-accent-volt)] transition-colors duration-[0.2s]"
          >
            <span>{link.label}</span>
            <span className="text-[var(--color-text-secondary)]">→</span>
          </a>
        ))}
        <div className="mt-auto pt-5">
          <a
            href="#contact"
            onClick={closeMobile}
            className="block text-center no-underline bg-[var(--color-accent-volt)] text-[#111] font-bold py-3.5 px-7 rounded-full"
          >
            Start a Project Together
          </a>
        </div>
      </nav>
    </>
  );
}
