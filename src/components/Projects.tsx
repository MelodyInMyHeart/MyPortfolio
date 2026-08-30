import { useState, useRef, useCallback } from "react";
import { projectsData, type Project } from "~/data/projects";

const categories = [
  { label: "All Works", value: "all", count: projectsData.length },
  { label: "Video Editing", value: "video-editing", count: projectsData.filter((p) => p.category === "video-editing").length },
  { label: "Brand Design", value: "brand-design", count: projectsData.filter((p) => p.category === "brand-design").length },
  { label: "Graphic Design", value: "graphic-design", count: projectsData.filter((p) => p.category === "graphic-design").length },
  { label: "Motion Graphics", value: "motion-graphics", count: projectsData.filter((p) => p.category === "motion-graphics").length },
];

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (id: string) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const onMouseEnter = useCallback(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  const onMouseLeave = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  return (
    <article
      className="project-card flex flex-col bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] rounded-[var(--radius-lg)] overflow-hidden transition-all duration-[0.35s] ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer hover:translate-y-[-6px] hover:border-[var(--color-border-active)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.6)]"
      style={{ animationDelay: `${index * 0.08}s` }}
      tabIndex={0}
      onClick={() => onOpen(project.id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(project.id);
        }
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Thumbnail */}
      <div
        className="relative w-full overflow-hidden bg-black aspect-[16/10]"
      >
        <span className="absolute top-4 left-4 font-[var(--font-mono)] text-[0.7rem] font-bold uppercase tracking-[0.08em] bg-[rgba(17,17,17,0.85)] backdrop-blur-[10px] text-[var(--color-accent-volt)] py-1.5 px-3 rounded-full border border-[rgba(212,255,0,0.2)] z-[2]">
          {project.categoryLabel}
        </span>
        <img
          className="w-full h-full object-cover block transition-transform duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          src={project.heroImage}
          alt={project.title}
          loading="lazy"
        />
        {project.videoPreview && (
          <video
            ref={videoRef}
            className="project-video-preview"
            muted
            loop
            playsInline
            preload="none"
          >
            <source src={project.videoPreview} type="video/mp4" />
          </video>
        )}
        <div className="project-hover-cta" title="View Case Study">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center justify-between font-[var(--font-mono)] text-[0.75rem] text-[var(--color-text-muted)] mb-3">
            <span className="text-[var(--color-accent-volt)] font-semibold">{project.client}</span>
            <span>{project.year}</span>
          </div>
          <h3 className="font-[var(--font-heading)] text-[1.35rem] font-bold leading-[1.3] text-[var(--color-text-primary)] mb-3">
            {project.title}
          </h3>
          <p className="text-[0.92rem] text-[var(--color-text-secondary)] leading-[1.6] mb-6">
            {project.shortDesc}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="font-[var(--font-mono)] text-[0.7rem] text-[var(--color-text-secondary)] bg-[rgba(255,255,255,0.04)] py-1 px-2.5 rounded-[var(--radius-sm)] border border-[var(--color-border-subtle)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const filtered =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <>
      <section className="py-24 lg:py-32 border-b border-[var(--color-border-subtle)]" id="work">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-[2]">
          {/* Header */}
          <div className="flex flex-col gap-3 mb-14">
            <span className="inline-flex items-center gap-2 font-[var(--font-mono)] text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-[var(--color-accent-volt)] bg-[var(--color-accent-volt-dim)] py-1.5 px-3.5 rounded-full w-fit border border-[rgba(212,255,0,0.2)]">
              Portfolio
            </span>
            <h2 className="font-[var(--font-heading)] text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-[-0.03em] leading-[1.15] text-[var(--color-text-primary)]">
              Selected Work
            </h2>
            <p className="text-[var(--color-text-secondary)] text-[1.05rem] max-w-[600px] leading-[1.7]">
              Selected projects across video, branding and design.
            </p>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-2 gap-2 mb-12 pb-6 border-b border-[var(--color-border-subtle)] md:flex md:flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`font-[var(--font-body)] text-[0.85rem] font-medium py-2 px-[1.15rem] rounded-full cursor-pointer transition-all duration-[0.2s] ease-[cubic-bezier(0.16,1,0.3,1)] inline-flex items-center gap-2 ${
                  filter === cat.value
                    ? "bg-[var(--color-accent-volt)] text-[#111] border border-[var(--color-accent-volt)] font-bold"
                    : "bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-active)] hover:bg-[var(--color-bg-card-hover)]"
                }`}
              >
                {cat.label}{" "}
                <span className="font-[var(--font-mono)] text-[0.72rem] opacity-75">
                  ({cat.count})
                </span>
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onOpen={(id) => {
                  const p = projectsData.find((x) => x.id === id);
                  if (p) setModalProject(p);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Inline modal */}
      {modalProject && (
        <Modal project={modalProject} onClose={() => setModalProject(null)} />
      )}
    </>
  );
}

function Modal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const cs = project.caseStudy;
  const hasMultiVideos = cs.videos && cs.videos.length > 0;

  return (
    <div
      className={`modal-overlay open`}
      onClick={onClose}
    >
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="sticky top-5 float-right mr-5 mt-5 w-10 h-10 rounded-full bg-[rgba(255,255,255,0.1)] backdrop-blur-[8px] border border-[rgba(255,255,255,0.2)] text-white flex items-center justify-center cursor-pointer z-[20] transition-all duration-[0.2s] hover:bg-[var(--color-accent-volt)] hover:text-[#111] hover:rotate-90"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Hero media */}
        {!hasMultiVideos && (
          <div className="w-full max-h-[480px] overflow-hidden bg-black relative">
            {project.videoPreview ? (
              <video controls autoPlay loop playsInline className="w-full h-full object-cover block">
                <source src={project.videoPreview} type="video/mp4" />
              </video>
            ) : (
              <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover block" />
            )}
          </div>
        )}

        {/* Body */}
        <div className="p-10 flex flex-col gap-10 max-sm:p-6 max-sm:gap-8">
          {/* Title */}
          <div>
            <div className="font-[var(--font-mono)] text-[0.78rem] uppercase text-[var(--color-accent-volt)] tracking-[0.1em] mb-2">
              {project.categoryLabel} · Case Study
            </div>
            <h2 className="font-[var(--font-heading)] text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold text-[var(--color-text-primary)] mb-4">
              {project.title}
            </h2>
          </div>

          {/* Meta grid */}
          <div className="grid grid-cols-2 gap-6 p-6 bg-[var(--color-bg-card)] rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] max-sm:grid-cols-2 sm:grid-cols-4">
            {[
              { label: "Client", value: project.client },
              { label: "Year", value: project.year },
              { label: "Role", value: project.role },
              { label: "Discipline", value: project.categoryLabel },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="font-[var(--font-mono)] text-[0.7rem] uppercase text-[var(--color-text-muted)] tracking-[0.08em]">
                  {item.label}
                </span>
                <span className="text-[0.92rem] font-semibold text-[var(--color-text-primary)]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Tools */}
          {cs.tools && (
            <div className="flex flex-col gap-3.5">
              <span className="font-[var(--font-mono)] text-[0.75rem] uppercase tracking-[0.12em] text-[var(--color-accent-volt)]">
                Tools & Software Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {cs.tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-1.5 font-[var(--font-mono)] text-[0.75rem] text-[var(--color-text-primary)] bg-[var(--color-bg-card)] py-1.5 px-3.5 rounded-[var(--radius-sm)] border border-[var(--color-border-subtle)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Multi-video gallery */}
          {hasMultiVideos && (
            <div className="flex flex-col gap-10">
              <span className="font-[var(--font-mono)] text-[0.75rem] uppercase tracking-[0.12em] text-[var(--color-accent-volt)]">
                Video Deliverables
              </span>
              {cs.videos!.map((v, i) => (
                <div
                  key={i}
                  className="bg-[rgba(255,255,255,0.03)] border border-[var(--color-border-subtle)] rounded-[var(--radius-md)] overflow-hidden transition-colors duration-[0.3s] hover:border-[var(--color-accent-volt)]"
                >
                  <div className="flex items-center gap-4 py-5 px-6 border-b border-[var(--color-border-subtle)]">
                    <span className="font-[var(--font-mono)] text-[1.5rem] font-bold text-[var(--color-accent-volt)] leading-none min-w-[2.5rem]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-[var(--font-heading)] text-[1.1rem] font-semibold text-[var(--color-text-primary)] m-0 uppercase tracking-[0.03em]">
                        {v.title}
                      </h4>
                      <p className="text-[0.85rem] text-[var(--color-text-secondary)] m-0 leading-[1.4]">
                        {v.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="multi-video-player-wrap">
                    <video controls playsInline preload="metadata" className="multi-video-player">
                      <source src={v.src} type="video/mp4" />
                    </video>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Image gallery */}
          {cs.gallery && cs.gallery.length > 0 && !hasMultiVideos && (
            <div className="flex flex-col gap-8 w-full">
              {cs.gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${project.title} highlight`}
                  loading="lazy"
                  className="w-full h-auto object-contain rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] bg-[#0d0d0d] block"
                />
              ))}
            </div>
          )}

          {/* Work details */}
          {cs.workDetails && cs.workDetails.length > 0 && (
            <div className="flex flex-col gap-3.5">
              <span className="font-[var(--font-mono)] text-[0.75rem] uppercase tracking-[0.12em] text-[var(--color-accent-volt)]">
                Work Highlights
              </span>
              <ul className="list-none flex flex-col gap-2 m-0 p-0">
                {cs.workDetails.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-baseline gap-2.5 text-[var(--color-text-secondary)] text-[0.95rem]"
                  >
                    <span className="text-[var(--color-accent-volt)] font-bold">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Result */}
          {cs.result && (
            <div
              className="p-7 rounded-[var(--radius-md)] border-l-[3px] border-[var(--color-accent-volt)] mt-6"
              style={{ background: "rgba(212, 255, 0, 0.05)" }}
            >
              <span className="font-[var(--font-mono)] text-[0.75rem] uppercase tracking-[0.12em] text-[var(--color-accent-volt)] block mb-2">
                The Result & Business Impact
              </span>
              <p className="text-[var(--color-text-primary)] text-[1.05rem] font-medium leading-[1.7] m-0">
                {cs.result}
              </p>
            </div>
          )}

          {/* CTA */}
          <div className="flex flex-wrap gap-4 justify-between items-center pt-6 border-t border-[var(--color-border-subtle)] mt-4">
            <div className="flex items-center gap-3 flex-wrap">
              {project.behanceUrl && (
                <a
                  href={project.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[rgba(255,255,255,0.08)] text-white no-underline py-2 px-4 rounded-full text-[0.82rem] font-semibold border border-[var(--color-border-subtle)] transition-colors duration-[0.2s] hover:bg-[rgba(255,255,255,0.15)]"
                >
                  View on Behance
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              )}
              <span className="text-[0.9rem] text-[var(--color-text-secondary)]">
                Interested in a similar project?
              </span>
            </div>
            <a
              href="#contact"
              onClick={onClose}
              className="bg-[var(--color-accent-volt)] text-[#111] font-bold py-[0.45rem] px-5 rounded-full no-underline transition-all duration-[0.2s] text-[0.85rem] hover:translate-y-[-2px] hover:shadow-[0_8px_25px_rgba(212,255,0,0.35)]"
            >
              Discuss Your Project →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
