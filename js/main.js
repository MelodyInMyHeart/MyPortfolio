/**
 * Onuabuchi Chidera — Creative Portfolio Core Logic
 * Handles interactive project filters, case study modal, showreel player, contact handling, live WAT clock, and theme toggle
 */

document.addEventListener('DOMContentLoaded', () => {
  initProjectFiltering();
  initCaseStudyModal();
  initContactForm();
  initLocalTimeClock();
  initMobileNavigation();
  initScrollSpy();
  initMetricCounters();
  initBackToTop();
  initThemeToggle();
  initHeaderScroll();
});

/* ==========================================================================
   1. PROJECT FILTERING & RENDERING
   ========================================================================== */
function initProjectFiltering() {
  const workGrid = document.getElementById('work-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!workGrid) return;

  // Initial render with all projects
  renderProjects('all');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');
      renderProjects(filterValue);
    });
  });
}

function renderProjects(filter) {
  const workGrid = document.getElementById('work-grid');
  if (!workGrid || typeof projectsData === 'undefined') return;

  const filtered = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  workGrid.innerHTML = '';

  filtered.forEach((project, index) => {
    const card = document.createElement('article');
    const isFeatured = index === 0 && filter === 'all';
    card.className = `project-card ${isFeatured ? 'featured-card' : ''}`;
    card.setAttribute('data-id', project.id);
    card.setAttribute('tabindex', '0');
    card.style.animationDelay = `${index * 0.08}s`;

    // Video preview tag if available
    const videoMarkup = project.videoPreview ? `
      <video class="project-video-preview" muted loop playsinline preload="none">
        <source src="${project.videoPreview}" type="video/mp4">
      </video>
    ` : '';

    const tagsMarkup = project.tags.slice(0, 3).map(tag => `<span class="project-tag">${tag}</span>`).join('');

    card.innerHTML = `
      <div class="project-thumbnail-wrapper">
        <span class="project-badge-pill">${project.categoryLabel}</span>
        <img class="project-thumbnail" src="${project.heroImage}" alt="${project.title}" loading="lazy">
        ${videoMarkup}
        <div class="project-hover-cta" title="View Case Study">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      </div>
      <div class="project-content">
        <div>
          <div class="project-meta-row">
            <span class="project-client">${project.client}</span>
            <span class="project-year">${project.year}</span>
          </div>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.shortDesc}</p>
        </div>
        <div class="project-tags">
          ${tagsMarkup}
        </div>
      </div>
    `;

    // Video hover preview interaction
    const video = card.querySelector('.project-video-preview');
    if (video) {
      card.addEventListener('mouseenter', () => {
        video.play().catch(() => {});
      });
      card.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
      });
    }

    // Modal trigger on click or Enter key
    card.addEventListener('click', () => openCaseStudyModal(project.id));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openCaseStudyModal(project.id);
      }
    });

    workGrid.appendChild(card);
  });
}

/* ==========================================================================
   2. CASE STUDY MODAL (Phase 5 / Reusable Structure)
   ========================================================================== */
function initCaseStudyModal() {
  const modalOverlay = document.getElementById('case-study-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modalOverlay || !closeBtn) return;

  closeBtn.addEventListener('click', closeCaseStudyModal);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeCaseStudyModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
      closeCaseStudyModal();
    }
  });
}

function openCaseStudyModal(projectId) {
  const modalOverlay = document.getElementById('case-study-modal');
  const modalContent = document.getElementById('modal-dynamic-content');
  if (!modalOverlay || !modalContent || typeof projectsData === 'undefined') return;

  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  // Determine hero media (video vs image) — only for non-multi-video projects
  let heroMedia = '';
  const hasMultiVideos = project.caseStudy.videos && project.caseStudy.videos.length > 0;

  if (!hasMultiVideos) {
    if (project.videoPreview) {
      heroMedia = `
        <div class="modal-hero-visual">
          <video controls autoplay loop playsinline class="modal-video">
            <source src="${project.videoPreview}" type="video/mp4">
          </video>
        </div>
      `;
    } else {
      heroMedia = `
        <div class="modal-hero-visual">
          <img src="${project.heroImage}" alt="${project.title}">
        </div>
      `;
    }
  }

  // Gallery items
  const galleryMarkup = project.caseStudy.gallery ? project.caseStudy.gallery.map(imgUrl => `
    <img class="modal-gallery-img" src="${imgUrl}" alt="${project.title} highlight" loading="lazy">
  `).join('') : '';

  // Tools badges
  const toolsMarkup = project.caseStudy.tools ? project.caseStudy.tools.map(tool => `
    <span class="tool-badge">${tool}</span>
  `).join('') : '';

  // Work approach bullets
  const workDetailsMarkup = project.caseStudy.workDetails ? `
    <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; margin-top: 0.5rem;">
      ${project.caseStudy.workDetails.map(item => `
        <li style="display: flex; align-items: baseline; gap: 0.6rem; color: var(--text-secondary); font-size: 0.95rem;">
          <span style="color: var(--accent-volt); font-weight: bold;">—</span>
          <span>${item}</span>
        </li>
      `).join('')}
    </ul>
  ` : '';

  // Multi-video gallery markup
  const multiVideoMarkup = hasMultiVideos ? project.caseStudy.videos.map((video, i) => `
    <div class="multi-video-item">
      <div class="multi-video-header">
        <span class="multi-video-number">${String(i + 1).padStart(2, '0')}</span>
        <div class="multi-video-info">
          <h4 class="multi-video-title">${video.title}</h4>
          <p class="multi-video-subtitle">${video.subtitle}</p>
        </div>
      </div>
      <div class="multi-video-player-wrap">
        <video controls playsinline preload="metadata" class="multi-video-player">
          <source src="${video.src}" type="video/mp4">
        </video>
      </div>
    </div>
  `).join('') : '';

  // Description block (for multi-video projects)
  const descriptionMarkup = project.caseStudy.description ? `
    <div class="modal-section">
      <p class="modal-section-text" style="font-size: 1.05rem; line-height: 1.75; color: var(--text-primary);">
        ${project.caseStudy.description}
      </p>
    </div>
  ` : '';

  modalContent.innerHTML = `
    ${heroMedia}
    <div class="modal-body">
      <!-- Title & Headline -->
      <div>
        <div style="font-family: var(--font-mono); font-size: 0.78rem; text-transform: uppercase; color: var(--accent-volt); letter-spacing: 0.1em; margin-bottom: 0.5rem;">
          ${project.categoryLabel} · Case Study
        </div>
        <h2 class="modal-section-heading" style="font-size: clamp(1.8rem, 3.5vw, 2.5rem); margin-bottom: 1rem;">
          ${project.title}
        </h2>
      </div>

      <!-- Project Metadata Grid -->
      <div class="modal-meta-grid">
        <div class="modal-meta-item">
          <span class="modal-meta-label">Client</span>
          <span class="modal-meta-value">${project.client}</span>
        </div>
        <div class="modal-meta-item">
          <span class="modal-meta-label">Year</span>
          <span class="modal-meta-value">${project.year}</span>
        </div>
        <div class="modal-meta-item">
          <span class="modal-meta-label">Role</span>
          <span class="modal-meta-value">${project.role}</span>
        </div>
        <div class="modal-meta-item">
          <span class="modal-meta-label">Discipline</span>
          <span class="modal-meta-value">${project.categoryLabel}</span>
        </div>
      </div>

      <!-- Description (for multi-video projects, text comes first) -->
      ${descriptionMarkup}

      <!-- Tools Used -->
      <div class="modal-section">
        <span class="modal-section-title">Tools & Software Stack</span>
        <div class="tools-grid">
          ${toolsMarkup}
        </div>
      </div>

      <!-- Multi-Video Sequential Gallery -->
      ${hasMultiVideos ? `
        <div class="modal-section" style="margin-top: 1.5rem;">
          <span class="modal-section-title">Video Deliverables</span>
          <div class="multi-video-gallery">
            ${multiVideoMarkup}
          </div>
        </div>
      ` : ''}

      <!-- Image Gallery (for non-video projects) -->
      ${galleryMarkup ? `
        <div class="modal-section" style="margin-top: 1rem;">
          <div class="modal-gallery-grid">
            ${galleryMarkup}
          </div>
        </div>
      ` : ''}

      <!-- The Outcome / Result -->
      <div class="modal-section" style="background: rgba(212, 255, 0, 0.05); padding: 1.75rem; border-radius: var(--radius-md); border-left: 3px solid var(--accent-volt); margin-top: 1.5rem;">
        <span class="modal-section-title" style="color: var(--accent-volt);">The Result & Business Impact</span>
        <p class="modal-section-text" style="color: var(--text-primary); font-size: 1.05rem; font-weight: 500;">
          ${project.caseStudy.result}
        </p>
      </div>

      <!-- CTA In Modal -->
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: space-between; align-items: center; padding-top: 1.5rem; border-top: 1px solid var(--border-subtle); margin-top: 1rem;">
        <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
          ${project.behanceUrl ? `
            <a href="${project.behanceUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.45rem; background: rgba(255, 255, 255, 0.08); color: #fff; text-decoration: none; padding: 0.45rem 1rem; border-radius: 9999px; font-size: 0.82rem; font-weight: 600; border: 1px solid var(--border-subtle); transition: background 0.2s;">
              <span>View on Behance</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </a>
          ` : ''}
          <span style="font-size: 0.9rem; color: var(--text-secondary);">Interested in a similar project?</span>
        </div>
        <a href="#contact" onclick="closeCaseStudyModal()" class="btn-emerald" style="padding: 0.45rem 1.2rem; font-size: 0.85rem; text-decoration: none;">
          Discuss Your Project →
        </a>
      </div>
    </div>
  `;

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCaseStudyModal() {
  const modalOverlay = document.getElementById('case-study-modal');
  if (!modalOverlay) return;

  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';

  // Stop any playing video in modal
  const modalVideo = modalOverlay.querySelector('video');
  if (modalVideo) {
    modalVideo.pause();
  }
}

/* ==========================================================================
   3. CONTACT FORM & DIRECT INQUIRY
   ========================================================================= */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  const serviceCheckboxes = document.querySelectorAll('.service-checkbox');
  const copyEmailBtn = document.getElementById('copy-email-btn');

  // Service checkbox pill active state
  serviceCheckboxes.forEach(chk => {
    chk.addEventListener('change', (e) => {
      const parentLabel = e.target.closest('.service-radio-label');
      if (parentLabel) {
        if (e.target.checked) {
          parentLabel.classList.add('checked');
        } else {
          parentLabel.classList.remove('checked');
        }
      }
    });
  });

  // Copy Email to clipboard
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'chidera.visuals@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email address copied to clipboard: ' + email);
      }).catch(() => {
        window.location.href = 'mailto:' + email;
      });
    });
  }

  // Form submission handler
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name')?.value.trim() || '';
      const email = document.getElementById('contact-email')?.value.trim() || '';
      const message = document.getElementById('contact-message')?.value.trim() || '';
      const selectedServices = Array.from(document.querySelectorAll('.service-checkbox:checked'))
        .map(cb => cb.value)
        .join(', ');

      if (!name || !email || !message) {
        showToast('Please fill in your name, email, and project message.', 'warning');
        return;
      }

      const subject = encodeURIComponent(`Project Inquiry from ${name} [${selectedServices || 'Creative Work'}]`);
      const body = encodeURIComponent(`Hi Chidera,\n\nName: ${name}\nEmail: ${email}\nServices Needed: ${selectedServices || 'General Design & Video'}\n\nProject Overview:\n${message}\n\nLooking forward to hearing from you!`);

      // Open email client
      window.location.href = `mailto:chidera.visuals@gmail.com?subject=${subject}&body=${body}`;

      showToast(`Thank you ${name}! Opening your email client to send message...`);
      form.reset();
      document.querySelectorAll('.service-radio-label').forEach(lbl => lbl.classList.remove('checked'));
    });
  }
}

/* ==========================================================================
   4. LIVE LOCAL TIME CLOCK (WAT - West Africa Time)
   ========================================================================== */
function initLocalTimeClock() {
  const clockElement = document.getElementById('wat-clock');
  if (!clockElement) return;

  const updateClock = () => {
    const now = new Date();
    const options = {
      timeZone: 'Africa/Lagos',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    try {
      const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
      clockElement.textContent = `${timeString} WAT (GMT+1)`;
    } catch (e) {
      clockElement.textContent = `${now.toLocaleTimeString()} WAT`;
    }
  };

  updateClock();
  setInterval(updateClock, 1000);
}

/* ==========================================================================
   5. MOBILE NAVIGATION
   ========================================================================== */
function initMobileNavigation() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileOverlay = document.getElementById('mobile-nav-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!mobileToggle || !mobileOverlay) return;

  mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    mobileOverlay.classList.toggle('open');
    document.body.style.overflow = mobileOverlay.classList.contains('open') ? 'hidden' : '';
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileToggle.classList.remove('active');
      mobileOverlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ==========================================================================
   6. SCROLL SPY & HEADER SCROLL
   ========================================================================== */
function initHeaderScroll() {
  const header = document.getElementById('villo-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   7. THEME TOGGLE (Dark / Light)
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    showToast(`Switched to ${newTheme} mode`);
  });
}

/* ==========================================================================
   8. METRIC COUNTERS ANIMATION
   ========================================================================== */
function initMetricCounters() {
  const metricElements = document.querySelectorAll('.metric-number[data-target]');
  if (!metricElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-target'));
        const suffix = el.getAttribute('data-suffix') || '';
        animateValue(el, 0, target, 1800, suffix);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.4 });

  metricElements.forEach(el => observer.observe(el));
}

function animateValue(obj, start, end, duration, suffix = '') {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const current = Math.floor(progress * (end - start) + start);
    obj.innerHTML = `${current}${suffix}`;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      obj.innerHTML = `${end}${suffix}`;
    }
  };
  window.requestAnimationFrame(step);
}

/* ==========================================================================
   9. BACK TO TOP
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   10. TOAST NOTIFICATION UTILITY
   ========================================================================== */
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-icon">✦</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

// ==========================================================================
// HERO MOUSE-FOLLOW PARALLAX
// ==========================================================================
(function initHeroParallax() {
  const hero = document.querySelector('.hero-villo');
  if (!hero) return;

  const portrait = hero.querySelector('.hero-villo-portrait-pill');
  const nameLines = hero.querySelectorAll('.hero-villo-name-line');
  const sparkle = hero.querySelector('.hero-villo-sparkle');
  const overlay = hero.querySelector('.hero-villo::before');

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let rafId = null;
  let isHovering = false;

  // Smooth lerp animation loop
  function animate() {
    const ease = 0.08;
    currentX += (targetX - currentX) * ease;
    currentY += (targetY - currentY) * ease;

    // Portrait moves the most (follows cursor)
    if (portrait) {
      portrait.style.transform = `translate(calc(-50% + ${currentX * 18}px), calc(-50% + ${currentY * 18}px)) scale(1)`;
    }

    // Name lines move slightly in opposite directions for depth
    nameLines.forEach((line, i) => {
      const dir = i === 0 ? 1 : -1;
      line.style.transform = `translateX(${currentX * 5 * dir}px)`;
    });

    // Sparkle follows subtly
    if (sparkle) {
      sparkle.style.transform = `translate(${currentX * 8}px, ${currentY * 8}px)`;
    }

    if (isHovering || Math.abs(targetX - currentX) > 0.01 || Math.abs(targetY - currentY) > 0.01) {
      rafId = requestAnimationFrame(animate);
    } else {
      rafId = null;
    }
  }

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    // Normalize to -1 to 1 range from center
    targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    isHovering = true;

    if (!rafId) {
      rafId = requestAnimationFrame(animate);
    }
  });

  hero.addEventListener('mouseleave', () => {
    // Smoothly return to center
    targetX = 0;
    targetY = 0;
    isHovering = false;

    if (!rafId) {
      rafId = requestAnimationFrame(animate);
    }
  });
})();
