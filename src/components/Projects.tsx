import { useState, useRef, useCallback, useEffect } from "react";
import { projectsData, type Project } from "~/data/projects";

/* ── Portrait Video Editing Carousel (9:16) ─────────────────────────────── */
function VideoCarousel({
  projects,
  onOpen,
}: {
  projects: Project[];
  onOpen: (id: string) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(projects.length > 1);
  const dragRef = useRef({ isDown: false, startX: 0, startSL: 0, dragged: false });

  const updateUI = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.querySelectorAll<HTMLElement>(".video-portrait-card"));
    if (!cards.length) return;
    let closest = 0;
    let minDiff = Infinity;
    cards.forEach((card, i) => {
      const diff = Math.abs(card.offsetLeft - track.scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closest = i;
      }
    });
    setActiveIdx(closest);
    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (track) track.scrollLeft = 0;
    updateUI();
  }, [projects, updateUI]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const track = trackRef.current;
      if (!dragRef.current.isDown || !track) return;
      const x = e.pageX - track.offsetLeft;
      const walk = x - dragRef.current.startX;
      if (Math.abs(walk) > 6) dragRef.current.dragged = true;
      track.scrollLeft = dragRef.current.startSL - walk;
    };
    const onUp = () => {
      const track = trackRef.current;
      if (!dragRef.current.isDown) return;
      dragRef.current.isDown = false;
      track?.classList.remove("is-dragging");
      setTimeout(() => {
        dragRef.current.dragged = false;
      }, 50);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  const scrollToIndex = useCallback((idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll<HTMLElement>(".video-portrait-card");
    if (!cards.length) return;
    const clamped = Math.max(0, Math.min(idx, cards.length - 1));
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({
      left: cards[clamped].offsetLeft,
      behavior: prefersReduced ? "auto" : "smooth",
    });
  }, []);

  return (
    <div className="video-carousel-section" id="video-carousel-section">
      <div
        ref={trackRef}
        className="video-carousel-track"
        id="video-carousel-track"
        tabIndex={0}
        aria-label="Video editing projects carousel"
        onScroll={() => requestAnimationFrame(updateUI)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            scrollToIndex(activeIdx + 1);
          } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            scrollToIndex(activeIdx - 1);
          }
        }}
        onMouseDown={(e) => {
          if (e.button !== 0 || !trackRef.current) return;
          dragRef.current.isDown = true;
          dragRef.current.dragged = false;
          trackRef.current.classList.add("is-dragging");
          dragRef.current.startX = e.pageX - trackRef.current.offsetLeft;
          dragRef.current.startSL = trackRef.current.scrollLeft;
        }}
      >
        {projects.map((project) => (
          <article
            key={project.id}
            className="video-portrait-card"
            tabIndex={0}
            onClick={(e) => {
              if (dragRef.current.dragged) {
                e.preventDefault();
                return;
              }
              onOpen(project.id);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onOpen(project.id);
              }
            }}
          >
            <img
              className="video-portrait-thumb"
              src={project.heroImage}
              alt={project.title}
              loading="lazy"
            />
            <div className="video-portrait-gradient" />
            <div className="video-portrait-top">
              <span className="project-badge-pill">{project.categoryLabel}</span>
              <span className="video-portrait-year">{project.year}</span>
            </div>
            <div className="video-portrait-play" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="6 3 20 12 6 21 6 3" />
              </svg>
            </div>
            <div className="video-portrait-overlay">
              <h3 className="video-portrait-title">{project.title}</h3>
              <p className="video-portrait-desc">{project.shortDesc}</p>
              <div className="project-tags">
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
        ))}
      </div>

      <div className="video-carousel-controls">
        <div className="video-carousel-dots">
          {projects.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`carousel-dot${i === activeIdx ? " active" : ""}`}
              aria-label={`Go to video ${i + 1}`}
              onClick={() => scrollToIndex(i)}
            />
          ))}
        </div>
        <div className="video-carousel-nav">
          <span className="video-carousel-counter">
            {String(activeIdx + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            className="carousel-arrow-btn"
            aria-label="Previous video"
            disabled={!canPrev}
            onClick={() => scrollToIndex(activeIdx - 1)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            className="carousel-arrow-btn"
            aria-label="Next video"
            disabled={!canNext}
            onClick={() => scrollToIndex(activeIdx + 1)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── SMEBundle slide carousel ───────────────────────────────────────────── */
function SmbCarousel({ slides, title }: { slides: string[]; title: string }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const total = slides.length;

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const goTo = useCallback(
    (idx: number) => {
      const clamped = Math.max(0, Math.min(idx, total - 1));
      const track = trackRef.current;
      if (!track) return;
      const slide = track.children[clamped] as HTMLElement;
      track.scrollTo({
        left: slide.offsetLeft,
        behavior: prefersReduced ? "auto" : "smooth",
      });
      setActiveIdx(clamped);
    },
    [total, prefersReduced]
  );

  return (
    <div className="smb-carousel-wrap" aria-label="Design carousel">
      <div
        ref={trackRef}
        className="smb-carousel-track"
        tabIndex={0}
        aria-live="polite"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") { e.preventDefault(); goTo(activeIdx + 1); }
          if (e.key === "ArrowLeft")  { e.preventDefault(); goTo(activeIdx - 1); }
        }}
      >
        {slides.map((src, i) => (
          <div
            key={i}
            className="smb-slide"
            role="group"
            aria-label={`Slide ${i + 1} of ${total}`}
          >
            <img
              src={src}
              alt={`${title} carousel slide ${i + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="smb-carousel-controls">
        <button
          type="button"
          className="smb-arrow smb-prev"
          aria-label="Previous slide"
          disabled={activeIdx === 0}
          onClick={() => goTo(activeIdx - 1)}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <span className="smb-counter">
          {String(activeIdx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <div className="smb-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`smb-dot${i === activeIdx ? " active" : ""}`}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <button
          type="button"
          className="smb-arrow smb-next"
          aria-label="Next slide"
          disabled={activeIdx === total - 1}
          onClick={() => goTo(activeIdx + 1)}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

const categories = [
  { label: "All Works", value: "all", count: projectsData.filter((p) => !p.excludeFromAllWorks).length },
  { label: "Video Editing", value: "video-editing", count: projectsData.filter((p) => p.category === "video-editing").length },
  { label: "Brand Design", value: "brand-design", count: projectsData.filter((p) => p.category === "brand-design").length },
  { label: "Graphic Design", value: "graphic-design", count: projectsData.filter((p) => p.category === "graphic-design").length },
];

function ProjectCard({
  project,
  index,
  isFeatured,
  onOpen,
}: {
  project: Project;
  index: number;
  isFeatured: boolean;
  onOpen: (id: string) => void;
}) {
  return (
    <article
      className={`project-card flex flex-col bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] rounded-[var(--radius-lg)] overflow-hidden transition-all duration-[0.35s] ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer hover:translate-y-[-6px] hover:border-[var(--color-border-active)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.6)] max-md:w-[85%] max-md:shrink-0 max-md:snap-start ${
        isFeatured ? "md:col-span-2 lg:grid lg:grid-cols-[1.2fr_0.8fr]" : ""
      }`}
      style={{ animationDelay: `${index * 0.08}s` }}
      tabIndex={0}
      onClick={() => onOpen(project.id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(project.id);
        }
      }}
    >
      {/* Thumbnail */}
      <div
        className={`relative w-full overflow-hidden bg-black ${
          project.youtubeId || isFeatured ? "aspect-video" : "aspect-[16/10]"
        }`}
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
      ? projectsData.filter((p) => !p.excludeFromAllWorks)
      : projectsData.filter((p) => p.category === filter);

  const videoProjects = filtered.filter((p) => p.category === "video-editing" && p.youtubeId);
  const nonVideoProjects = filtered.filter((p) => !(p.category === "video-editing" && p.youtubeId));

  const openById = (id: string) => {
    const p = projectsData.find((x) => x.id === id);
    if (p) setModalProject(p);
  };

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

          {/* Portrait Video Carousel */}
          {videoProjects.length > 0 && (
            <VideoCarousel projects={videoProjects} onOpen={openById} />
          )}

          {/* Non-video projects grid */}
          {nonVideoProjects.length > 0 && (
            <div className="max-md:flex max-md:flex-row max-md:overflow-x-auto max-md:snap-x max-md:snap-mandatory max-md:gap-5 max-md:pb-4 md:grid md:grid-cols-2 md:gap-10">
              {nonVideoProjects.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  isFeatured={false}
                  onOpen={openById}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Inline modal */}
      {modalProject && (
        <Modal
          project={modalProject}
          onClose={() => setModalProject(null)}
          onSelectProject={(p) => setModalProject(p)}
        />
      )}
    </>
  );
}

function Modal({
  project,
  onClose,
  onSelectProject,
}: {
  project: Project;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
}) {
  const cs = project.caseStudy;
  const hasMultiVideos = cs.videos && cs.videos.length > 0;
  const videoList = project.youtubeId
    ? projectsData.filter((p) => p.category === "video-editing" && p.youtubeId)
    : [];
  const currentVideoIdx = project.youtubeId
    ? videoList.findIndex((p) => p.id === project.id)
    : -1;
  const prevVideo = currentVideoIdx > 0 ? videoList[currentVideoIdx - 1] : null;
  const nextVideo =
    currentVideoIdx >= 0 && currentVideoIdx < videoList.length - 1
      ? videoList[currentVideoIdx + 1]
      : null;

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
          className="modal-close-btn"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Hero media */}
        {project.youtubeId ? (
          <div className="modal-hero-visual is-youtube">
            <div className="modal-video-embed">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}?autoplay=1&rel=0`}
                title={project.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="modal-video-nav">
              <button
                type="button"
                className="modal-video-nav-btn"
                disabled={!prevVideo}
                onClick={() => prevVideo && onSelectProject(prevVideo)}
              >
                <span className="nav-label-full">← Prev Edit</span>
                <span className="nav-label-short">← Prev</span>
              </button>
              <span className="video-carousel-counter">
                {String(currentVideoIdx + 1).padStart(2, "0")} / {String(videoList.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                className="modal-video-nav-btn"
                disabled={!nextVideo}
                onClick={() => nextVideo && onSelectProject(nextVideo)}
              >
                <span className="nav-label-full">Next Edit →</span>
                <span className="nav-label-short">Next →</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full max-h-[480px] overflow-hidden bg-black relative">
            <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover block" />
          </div>
        )}

        {/* Body */}
        <div className="modal-body-responsive">
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

          {/* SMEBundle: horizontal CSS carousel */}
          {cs.carouselSlides && cs.carouselSlides.length > 0 && (
            <div className="flex flex-col gap-4 w-full">
              <span className="font-[var(--font-mono)] text-[0.75rem] uppercase tracking-[0.12em] text-[var(--color-accent-volt)]">
                Carousel Design
              </span>
              <SmbCarousel slides={cs.carouselSlides} title={project.title} />
            </div>
          )}

          {/* SMEBundle: standalone social media designs */}
          {cs.standaloneDesigns && cs.standaloneDesigns.length > 0 && (
            <div className="flex flex-col gap-4 w-full">
              <span className="font-[var(--font-mono)] text-[0.75rem] uppercase tracking-[0.12em] text-[var(--color-accent-volt)]">
                Social Media Designs
              </span>
              <div className="smb-flyers-grid">
                {cs.standaloneDesigns.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${project.title} social media design ${i + 1}`}
                    loading="lazy"
                    className="smb-flyer-img"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Image gallery (all other projects — only when no carousel) */}
          {cs.gallery && cs.gallery.length > 0 && !cs.carouselSlides && !hasMultiVideos && (
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
