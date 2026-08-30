# Project Case Study Templates

Use these standardized templates when adding new projects to `js/projects-data.js`.

---

## 📹 1. Video Editing Case Study Template

```javascript
{
  id: "project-slug-here",
  title: "Project Name — [Format / Type of Video]",
  category: "video-editing",
  categoryLabel: "Video Editing",
  client: "Client Name & City",
  year: "2025",
  role: "Lead Video Editor & Colorist",
  shortDesc: "1-2 sentence compelling summary of the video project.",
  heroImage: "https://your-image-url.com/poster.jpg",
  videoPreview: "https://your-video-url.com/preview.mp4",
  aspectRatio: "16/9",
  featured: true,
  tags: ["Commercial", "Color Grading", "Sound Design", "DaVinci Resolve"],
  caseStudy: {
    challenge: "What problem was the client facing? (Footage quality, storyline constraints, brand transition, tight turnaround).",
    approach: "How did you edit and pace the film? (Editorial pacing, rhythm locking, LUT development, sound design, aspect ratios).",
    workDetails: [
      "Key editorial technique used",
      "Color grading pass in DaVinci Resolve",
      "Custom audio layering & sound design",
      "Deliverable specifications (9:16, 16:9, 4K)"
    ],
    gallery: [
      "https://your-image-url.com/still-1.jpg",
      "https://your-image-url.com/still-2.jpg"
    ],
    result: "Quantifiable outcome (e.g. 2.5M organic views, 40% increase in watch-through rate, client signed second season).",
    tools: ["Adobe Premiere Pro", "DaVinci Resolve Studio", "After Effects", "Logic Pro"]
  }
}
```

---

## 🎨 2. Brand Design Case Study Template

```javascript
{
  id: "brand-project-slug",
  title: "Brand Name — Brand Identity & Visual System",
  category: "brand-design",
  categoryLabel: "Brand Design",
  client: "Company / Founder Name",
  year: "2025",
  role: "Brand Identity Designer & Art Director",
  shortDesc: "Concise summary of the brand transformation and target audience.",
  heroImage: "https://your-image-url.com/hero.jpg",
  videoPreview: null,
  aspectRatio: "16/10",
  featured: false,
  tags: ["Brand Strategy", "Visual Identity", "Design System", "Figma"],
  caseStudy: {
    challenge: "Why did the brand need a redesign or new identity? (Outdated visual style, lack of distinction in crowded market, expanding into new verticals).",
    approach: "What was your creative direction? (Logo mark geometry, bespoke typography, color strategy, design system tokens, collateral).",
    workDetails: [
      "Primary wordmark and responsive sub-marks",
      "Full brand guidelines system (PDF + Figma Tokens)",
      "Digital assets, marketing templates, and iconography",
      "Packaging / physical print production specifications"
    ],
    gallery: [
      "https://your-image-url.com/mockup-1.jpg",
      "https://your-image-url.com/mockup-2.jpg"
    ],
    result: "Business impact (e.g. Secured venture funding, 3x increase in enterprise inquiries, international press features).",
    tools: ["Figma", "Adobe Illustrator", "Photoshop", "InDesign"]
  }
}
```

---

## 📐 3. Graphic Design Case Study Template

```javascript
{
  id: "graphic-campaign-slug",
  title: "Campaign Name — Global Digital & Print Creatives",
  category: "graphic-design",
  categoryLabel: "Graphic Design",
  client: "Brand Name",
  year: "2024",
  role: "Lead Graphic Designer",
  shortDesc: "High-impact visual marketing collateral across digital ad feeds and physical print.",
  heroImage: "https://your-image-url.com/hero.jpg",
  videoPreview: null,
  aspectRatio: "16/10",
  featured: false,
  tags: ["Ad Campaigns", "Social Strategy", "Retail", "Photoshop"],
  caseStudy: {
    challenge: "What was the marketing challenge? (Dull social engagement, complex data needing editorial simplification, competitive product launch).",
    approach: "How did you design the campaign? (Bold contrast, hierarchy, typography curation, modular layout variants).",
    workDetails: [
      "High-converting static & animated ad creative variations",
      "Editorial layout and poster compositions",
      "Multichannel asset batch (Meta, TikTok, Outdoor Billboards)"
    ],
    gallery: [
      "https://your-image-url.com/ad-1.jpg",
      "https://your-image-url.com/ad-2.jpg"
    ],
    result: "Metrics & impact (e.g. 3.8x ROAS, 100k+ event attendees, sold out merchandise collection).",
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "After Effects"]
  }
}
```

---

## ⚡ 4. Motion Graphics Case Study Template

```javascript
{
  id: "motion-project-slug",
  title: "Product Name — 3D Motion Teaser & Kinetic System",
  category: "motion-graphics",
  categoryLabel: "Motion Graphics",
  client: "Tech / Product Client",
  year: "2025",
  role: "Motion Designer & 3D Animator",
  shortDesc: "Futuristic 3D kinetic typography and UI interactions introducing a new product.",
  heroImage: "https://your-image-url.com/hero.jpg",
  videoPreview: "https://your-video-url.com/loop.mp4",
  aspectRatio: "16/9",
  featured: false,
  tags: ["3D Animation", "Kinetic Type", "UI Motion", "After Effects"],
  caseStudy: {
    challenge: "Explain an abstract concept or new software product in a thrilling 30-45 second motion reel.",
    approach: "Created procedural animations, lighting sweeps, kinetic typography, and fluid camera transitions.",
    workDetails: [
      "3D procedural asset modeling and lighting",
      "Dynamic typography synchronized to audio track",
      "60 FPS smooth web-optimized video loop exports"
    ],
    gallery: [
      "https://your-image-url.com/frame-1.jpg",
      "https://your-image-url.com/frame-2.jpg"
    ],
    result: "High engagement (e.g. 40%+ waitlist conversion rate, trending product launch on Product Hunt/Twitter).",
    tools: ["Adobe After Effects", "Blender 3D", "Cinema 4D", "Premiere Pro"]
  }
}
```
