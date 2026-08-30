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
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-[0.35s] ease-[cubic-bezier(0.16,1,0.3,1)] ${            scrolled
            ? "bg-[rgba(17,17,17,0.9)] backdrop-blur-[20px] border-b border-[rgba(255,255,255,0.08)] py-[1.1rem] px-4 md:px-8"
            : "bg-transparent py-5 md:py-7 px-4 md:px-8"
        }`}
        data-theme={theme}
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          {/* Hamburger */}
          <button
            className="flex flex-col justify-center gap-[6px] bg-transparent border-none cursor-pointer p-[6px_0] w-9 h-9 z-[101]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-[26px] h-[2px] bg-white rounded-sm transition-all duration-[0.2s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block w-[26px] h-[2px] bg-white rounded-sm transition-all duration-[0.2s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-[26px] h-[2px] bg-white rounded-sm transition-all duration-[0.2s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>

          {/* Right controls */}
          <div className="flex items-center gap-4">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="w-12 h-[26px] bg-[rgba(255,255,255,0.12)] rounded-full relative cursor-pointer border border-[rgba(255,255,255,0.15)] transition-colors duration-[0.2s]"
              title="Toggle theme"
            >
              <div
                className={`absolute top-[3px] w-[18px] h-[18px] rounded-full transition-all duration-[0.2s] ${
                  theme === "light"
                    ? "left-[22px] bg-white"
                    : "left-[3px] bg-[#333]"
                }`}
              />
            </button>
            {/* CTA */}
            <a
              href="#contact"
              className="bg-white text-[#111] font-[var(--font-body)] text-[0.85rem] font-bold py-[0.55rem] px-[1.4rem] rounded-full no-underline transition-all duration-[0.2s] shadow-[0_4px_15px_rgba(255,255,255,0.1)] inline-flex items-center justify-center hover:translate-y-[-1px] hover:scale-[1.03] hover:bg-[#d4ff00]"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 bg-[var(--color-bg-main)] pt-28 px-8 pb-12 flex flex-col gap-7 transition-all duration-[0.35s] ease-[cubic-bezier(0.16,1,0.3,1)] z-[99] ${
          mobileOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMobile}
            className="font-[var(--font-heading)] text-[2rem] font-bold no-underline text-[var(--color-text-primary)] flex items-center justify-between py-3 border-b border-[var(--color-border-subtle)] hover:text-[var(--color-accent-volt)] transition-colors duration-[0.2s]"
          >
            {link.label} <span>→</span>
          </a>
        ))}
        <div className="mt-auto pt-8">
          <a
            href="#contact"
            onClick={closeMobile}
            className="block text-center no-underline bg-[var(--color-accent-volt)] text-[#111] font-bold py-3.5 px-7 rounded-full"
          >
            Start a Project Together
          </a>
        </div>
      </div>
    </>
  );
}
