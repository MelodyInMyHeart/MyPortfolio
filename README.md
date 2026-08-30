# Onuabuchi Chidera — Creative Portfolio Website

[![GitHub repo](https://img.shields.io/badge/GitHub-My--Portfolio--site-181717?style=flat&logo=github)](https://github.com/MelodyInMyHeart/My-Portfolio-site/tree/main/portfolio-onuabuchi)
[![Design Style](https://img.shields.io/badge/Aesthetic-Villo%20Editorial-d4ff00?style=flat&labelColor=111111)](https://github.com/MelodyInMyHeart/My-Portfolio-site)
[![Responsive](https://img.shields.io/badge/Responsive-Mobile%20%7C%20Tablet%20%7C%20Desktop-white?style=flat&labelColor=111111)](https://github.com/MelodyInMyHeart/My-Portfolio-site)

A minimal, high-end editorial portfolio website for **Onuabuchi Chidera (Visual Designer & Video Editor)**, built strictly following the **Villo Framer SOP** and modern web standards.

---

## 📑 Complete Process & Documentation Backup

All planning, standard operating procedures, case study blueprints, and guides are preserved in the [`docs/`](docs/) directory:

- 📘 [**SOP — Building Your Creative Portfolio**](docs/SOP-BUILDING-CREATIVE-PORTFOLIO.md): Complete 10-phase SOP covering positioning, audience personas, project distribution formulas, visual systems, and launch checklists.
- 📂 [**Project Case Study Templates**](docs/CASE-STUDY-TEMPLATES.md): Ready-to-use case study schemas for Video Editing, Brand Design, Graphic Design, and Motion Graphics (*Challenge → Approach → Work Highlights → Result & Impact*).
- 🚀 [**Deployment & Custom Domain Guide**](docs/DEPLOYMENT-AND-HOSTING-GUIDE.md): Step-by-step instructions for deploying to Vercel, Netlify, GitHub Pages, and attaching custom domains (`chidera.design`).

---

## 🗂️ Project File Structure

```
portfolio-onuabuchi/
├── index.html                   # High-end semantic homepage
├── README.md                    # Root project documentation & index
├── .gitignore                   # Clean repository ignore rules
├── css/
│   └── styles.css               # Obsidian Dark (#111111) & Volt Lime (#D4FF00) luxury styles
├── js/
│   ├── projects-data.js         # Curated database of 8 rich case studies & testimonials
│   └── main.js                  # Video controller, filter engine, modal & live WAT clock
├── docs/                        # Complete process documentation & SOP backups
│   ├── SOP-BUILDING-CREATIVE-PORTFOLIO.md
│   ├── CASE-STUDY-TEMPLATES.md
│   └── DEPLOYMENT-AND-HOSTING-GUIDE.md
└── assets/                      # SOP Phase 2 Content Folders
    ├── 01-profile/              # Studio portraits & bio cutouts
    ├── 02-video-projects/       # 4K master files & video cutdowns
    ├── 03-brand-design/         # Brand identity mockups & system tokens
    ├── 04-graphic-design/       # Ad campaign posters & print layouts
    ├── 05-motion-graphics/      # 3D teasers & kinetic loops
    ├── 06-testimonials/        # Client avatars
    ├── 07-client-logos/         # Client partner marks
    └── 08-contact/              # Contact assets
```

---

## ✨ Features & Interactive Systems

- **Editorial Hero & Giant Typography**: Bold 2-line `Anton` display typography with central capsule portrait cutout, 4-point volt lime sparkle, and positioning statement.
- **Top Navigation Bar**: Minimalist hamburger drawer toggle, cursive signature mark (`OC` / `Chidera`), dark/light theme switch, and white pill CTA.
- **Filterable Selected Work**: Instant filtering by *All, Video Editing, Brand Design, Graphic Design, Motion Graphics*.
- **Interactive Case Study Modal**: Deep case study popup presenting challenge, strategy bullets, visual gallery, and quantifiable results.
- **Live WAT Clock**: Real-time West Africa Time (GMT+1) clock in the About section.
- **Infinite Client Marquee**: Seamless looping brand ticker (*Aura Audio, Kore Labs, Catalyst Media, Verve Global, Nexus AI, Pulse Athletics, Chronos Berlin*).
- **Interactive Contact Form**: Service checkbox selector, direct email copy button with toast notification, and WhatsApp direct link.

---

## 🛠️ How to Customize

1. **Add or Edit Projects**: Open `js/projects-data.js` and modify titles, descriptions, tools, and gallery images.
2. **Update Contact Details**: Replace `chidera.visuals@gmail.com` and the WhatsApp phone number in `index.html` and `js/main.js`.
3. **Change Images/Videos**: Add your files to the corresponding `assets/` subfolder and update the paths in `js/projects-data.js`.

---

## 📦 Git Setup & Workflow

### Initial Setup (One-Time)

If cloning the repository for the first time:

```bash
# Clone the repository
git clone https://github.com/MelodyInMyHeart/MyPortfolio.git

# Navigate to project folder
cd MyPortfolio

# Verify remote is connected
git remote -v
# Should output: origin https://github.com/MelodyInMyHeart/MyPortfolio.git
```

### Regular Development Workflow

After making changes to your portfolio, keep it synchronized with GitHub:

```bash
# 1. Check what files have changed
git status

# 2. Stage all changes
git add .

# 3. Commit with a descriptive message
git commit -m "Update: Add new project case studies"

# 4. Push changes to GitHub
git push origin main
```

### Common Commands

```bash
# View commit history
git log --oneline

# View specific changes
git diff

# Unstage changes (if you accidentally added files)
git reset HEAD <filename>

# Revert last commit (if needed)
git reset --soft HEAD~1

# Check branch status
git branch -vv
```

### Best Practices

- **Commit frequently** — Make small, meaningful commits (not massive changes all at once)
- **Use clear messages** — Write descriptive commit messages like "Add video projects section" or "Fix mobile navbar padding"
- **Push daily** — Keep your GitHub repo up-to-date to avoid losing work
- **Create branches for big changes** — For major feature work, create a feature branch: `git checkout -b feature/new-feature`

---

## 🌐 Deploy to Vercel in 60 Seconds

1. Go to [vercel.com](https://vercel.com) and log in with GitHub (`MelodyInMyHeart`).
2. Import `MelodyInMyHeart/MyPortfolio`.
3. Set Root Directory to `./` (or leave blank if it's the repo root).
4. Click **Deploy**.
5. Your live portfolio will be available at a Vercel URL, and you can connect a custom domain (`chidera.design`).
