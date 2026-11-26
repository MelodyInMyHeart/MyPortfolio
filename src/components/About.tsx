import { useClock } from "~/hooks/useClock";

const tools = [
  "DaVinci Resolve",
  "Premiere Pro",
  "Photoshop",
  "Affinity Designer",
  "Illustrator",
];

export default function About() {
  const time = useClock();

  return (
    <section className="py-24 lg:py-32 border-b border-[var(--color-border-subtle)]" id="about">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-[2]">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-[4.5rem] items-center">
          {/* Portrait card */}
          <div className="relative rounded-[var(--radius-lg)] overflow-hidden border border-[var(--color-border-subtle)] bg-[var(--color-bg-card)]">
            <img
              className="w-full aspect-[4/5] object-cover object-[center_20%] block"
              src="/assets/01-profile/onuabuchi-chidera.jpg"
              alt="Onuabuchi Chidera Portrait"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[rgba(17,17,17,0.95)] to-transparent flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 font-[var(--font-mono)] text-[0.75rem] text-[var(--color-text-primary)] bg-[rgba(255,255,255,0.08)] backdrop-blur-[8px] py-1.5 px-3 rounded-full w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-volt)]" />
                <span>Based in Nigeria · Global Remote</span>
              </div>
              <div className="font-[var(--font-mono)] text-[0.75rem] text-[var(--color-text-secondary)]">
                Local Time:{" "}
                <span className="text-white font-semibold">{time}</span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-7">
            <span className="inline-flex items-center gap-2 font-[var(--font-mono)] text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-[var(--color-accent-volt)] bg-[var(--color-accent-volt-dim)] py-1.5 px-3.5 rounded-full w-fit border border-[rgba(212,255,0,0.2)]">
              About Me
            </span>

            <h2 className="font-[var(--font-heading)] text-[clamp(1.4rem,2.5vw,1.85rem)] font-bold leading-[1.35] text-[var(--color-text-primary)] tracking-[-0.02em]">
              "A cohesive creative practice where video gives life to motion,
              and design anchors the identity."
            </h2>

            <p className="text-[var(--color-text-secondary)] text-base leading-[1.75]">
              I'm Onuabuchi Chidera, a Visual Designer, Video Editor, and the
              founder of Creathieves.
            </p>

            <p className="text-[var(--color-text-secondary)] text-base leading-[1.75]">
              I help startups and individuals communicate their ideas, build
              meaningful connections, and tell their stories through compelling
              visuals and creative storytelling.
            </p>

            <p className="text-[var(--color-text-secondary)] text-base leading-[1.75]">
              Beyond my creative work, I'm building Creathieves, a community
              dedicated to helping creatives grow, learn, and do better work.
              Through the community, I share valuable insights, practical tools,
              creative resources, and industry updates to inspire and equip
              creatives to take their craft further.
            </p>

            <p className="text-[var(--color-text-secondary)] text-base leading-[1.75]">
              I believe great visuals do more than catch attention; they
              communicate ideas, evoke emotions, and create lasting impressions.
            </p>

            <div className="border-l-2 border-[var(--color-accent-volt)] pl-5 italic text-[var(--color-text-primary)] text-[1.05rem]">
              "Animation and design should guide attention, not demand it. The
              strongest work speaks with restrained power."
            </div>

            {/* Tools */}
            <div className="flex flex-col gap-3.5 pt-4">
              <span className="font-[var(--font-mono)] text-[0.75rem] uppercase text-[var(--color-text-muted)] tracking-[0.1em]">
                Production Toolkit & Software
              </span>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-1.5 font-[var(--font-mono)] text-[0.75rem] text-[var(--color-text-primary)] bg-[var(--color-bg-card)] py-1.5 px-3.5 rounded-[var(--radius-sm)] border border-[var(--color-border-subtle)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
