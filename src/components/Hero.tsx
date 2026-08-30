import { useState, useEffect } from "react";
import { useHeroParallax } from "~/hooks/useHeroParallax";

export default function Hero() {
  const { heroRef, portraitRef, setLineRef, sparkleRef } = useHeroParallax();
  const [portraitReady, setPortraitReady] = useState(false);

  useEffect(() => {
    // After entrance animation delay + duration, mark portrait as ready for parallax
    const timer = setTimeout(() => setPortraitReady(true), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center relative bg-[var(--color-bg-main)] overflow-hidden px-6 pt-32 pb-16"
    >
      {/* Background overlay */}
      <div
        className="absolute inset-0 opacity-[0.07] mix-blend-screen pointer-events-none z-0"
        style={{
          backgroundImage: "url('/assets/01-profile/hero-overlay-timeline.png')",
          backgroundPosition: "center bottom",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="max-w-[1200px] w-full flex flex-col items-center justify-center relative z-[1]">
        {/* Eyebrow */}
        <div className="hero-eyebrow">Visual Designer and Video Editor</div>

        {/* Name + Portrait */}
        <div className="relative flex flex-col items-center justify-center gap-[clamp(0.4rem,1.5vw,1.25rem)] mb-10 w-full select-none">
          <div ref={setLineRef(0)} className="hero-name-line">
            ONUABUCHI
          </div>

          {/* Portrait pill — horizontal, follows cursor left/right */}
          <div
            ref={portraitRef}
            className="hero-portrait-pill"
            title="Onuabuchi Chidera"
            style={{
              // Entrance animation handled via inline styles, not CSS keyframes
              opacity: portraitReady ? 1 : 0,
              transform: portraitReady
                ? "translate(-50%, -50%)" // parallax hook takes over from here
                : "translate(-50%, -50%) scale(0.85)",
              transition: portraitReady
                ? "none" // parallax controls transform after this
                : "opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.35s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.35s",
            }}
          >
            <img
              src="/assets/01-profile/onuabuchi-chidera.jpg"
              alt="Onuabuchi Chidera Portrait"
            />
          </div>

          <div ref={setLineRef(1)} className="hero-name-line">
            CHIDERA
          </div>
        </div>

        {/* Sparkle */}
        <div ref={sparkleRef} className="hero-sparkle">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#d4ff00">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </div>

        {/* Statement */}
        <p className="hero-statement">
          I'm Onuabuchi Chidera, a visual designer and video editor creating
          bold visuals for brands that want to stand out. From social media
          content to complete brand identities, I turn ideas into visuals that
          capture attention and communicate with purpose.
        </p>

        {/* Scroll indicator */}
        <div className="hero-scroll">
          <div className="hero-scroll-line" />
          <span>SCROLL</span>
        </div>
      </div>
    </section>
  );
}
