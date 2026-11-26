export interface CaseStudyVideo {
  title: string;
  subtitle: string;
  src: string;
}

export interface CaseStudy {
  challenge?: string;
  approach?: string;
  description?: string;
  workDetails?: string[];
  gallery?: string[];
  videos?: CaseStudyVideo[];
  result?: string;
  tools?: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  client: string;
  year: string;
  role: string;
  shortDesc: string;
  heroImage: string;
  videoPreview?: string | null;
  aspectRatio: string;
  featured: boolean;
  behanceUrl?: string;
  tags: string[];
  caseStudy: CaseStudy;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export interface ClientBrand {
  name: string;
  location: string;
}

export const projectsData: Project[] = [
  {
    id: "skillnesst-brand-identity",
    title: "Skillnesst — Brand Identity Development & Visual System",
    category: "brand-design",
    categoryLabel: "Brand Design",
    client: "Skillnesst",
    year: "2025",
    role: "Brand Identity Designer & Art Director",
    shortDesc: "Comprehensive brand identity development, logo architecture, typography system, brand patterns, and digital brand collateral for a modern skill empowerment platform.",
    heroImage: "assets/03-brand-design/skillnesst/14.jpg",
    videoPreview: null,
    aspectRatio: "16/10",
    featured: true,
    behanceUrl: "https://www.behance.net/gallery/250308653/Skillnesst-Brand-Identity-development",
    tags: ["Brand Strategy", "Visual Identity", "Adobe Photoshop", "Adobe Illustrator"],
    caseStudy: {
      challenge: "Skillnesst needed a vibrant, modern, and trustworthy brand identity that positions the platform as a premier destination for next-generation skill acquisition, education, and career transformation. The visual identity had to appeal to ambitious learners, creators, and corporate partners across digital interfaces, print collateral, and marketing campaigns.",
      approach: "Crafted a memorable, dynamic brand mark and custom typographic system reflecting growth, connectivity, and mastery. Developed an expansive visual identity including vibrant brand color palettes, modular geometric brand patterns, custom icon sets, high-impact social media templates, and comprehensive brand guidelines.",
      workDetails: [
        "Logo architecture, grid construction, and responsive icon variations",
        "Comprehensive brand color hierarchy and modern typography curation",
        "Digital marketing templates, stationery suite, and social media creative system",
        "Physical brand mockups, merchandise, event collateral, and packaging",
        "Full brand guidelines documentation ensuring absolute visual consistency"
      ],
      gallery: [
        "assets/03-brand-design/skillnesst/2.jpg",
        "assets/03-brand-design/skillnesst/3.jpg",
        "assets/03-brand-design/skillnesst/4.jpg",
        "assets/03-brand-design/skillnesst/5.jpg",
        "assets/03-brand-design/skillnesst/6.jpg",
        "assets/03-brand-design/skillnesst/7.jpg",
        "assets/03-brand-design/skillnesst/8.jpg",
        "assets/03-brand-design/skillnesst/9.jpg",
        "assets/03-brand-design/skillnesst/10.jpg",
        "assets/03-brand-design/skillnesst/11.jpg",
        "assets/03-brand-design/skillnesst/12.jpg",
        "assets/03-brand-design/skillnesst/13.jpg",
        "assets/03-brand-design/skillnesst/14.jpg"
      ],
      result: "Established a bold, cohesive, and instantly recognizable brand presence across digital and physical touchpoints, accelerating Skillnesst's platform rollout and driving user acquisition across key educational markets.",
      tools: ["Adobe Photoshop", "Adobe Illustrator", "Affinity"]
    }
  },
  {
    id: "obodoma-brand-identity",
    title: "obodỌma — Hospitality & Tourism Brand Identity",
    category: "brand-design",
    categoryLabel: "Brand Design",
    client: "obodỌma",
    year: "2025",
    role: "Brand Identity Designer & Art Director",
    shortDesc: "A culturally rooted brand identity for a Nigerian hospitality destination inspiring relaxation, reconnection, and renewal — blending contemporary sophistication with deep cultural heritage.",
    heroImage: "assets/03-brand-design/obodoma/16.jpg",
    videoPreview: null,
    aspectRatio: "16/10",
    featured: true,
    tags: ["Brand Strategy", "Visual Identity", "Hospitality", "Adobe Photoshop", "Adobe Illustrator"],
    caseStudy: {
      challenge: "obodỌma needed a contemporary and sophisticated brand identity rooted in Nigerian cultural heritage — one that positions the destination as a sanctuary for relaxation, reconnection, and renewal for individuals, families, and communities seeking meaningful experiences away from the pressures of everyday life.",
      approach: "Developed a distinctive wordmark blending a clean sans-serif 'Obodo' (Igbo for 'place') with a refined serif 'Ọma' (meaning 'good' or 'beautiful'), crowned by the traditional Igbo underdot as a standalone brand icon. Created an earthy, nature-inspired color palette with sage greens and warm browns, custom brand patterns, and an expansive collateral system spanning merchandise, signage, billboards, and digital touchpoints.",
      workDetails: [
        "Custom dual-typeface wordmark design with cultural Igbo underdot icon",
        "Earthy, nature-inspired color palette — sage greens, warm browns, and cream tones",
        "Brand pattern system and modular design elements",
        "Merchandise design — tote bags, flip-flops, keychains, door hangers, throw pillows",
        "Environmental signage, billboard mockups, and outdoor advertising",
        "Social media creative system and digital brand applications",
        "Full brand guidelines documentation"
      ],
      gallery: [
        "assets/03-brand-design/obodoma/1.jpg",
        "assets/03-brand-design/obodoma/2.jpg",
        "assets/03-brand-design/obodoma/3.jpg",
        "assets/03-brand-design/obodoma/4.jpg",
        "assets/03-brand-design/obodoma/5.jpg",
        "assets/03-brand-design/obodoma/6.jpg",
        "assets/03-brand-design/obodoma/7.jpg",
        "assets/03-brand-design/obodoma/8.jpg",
        "assets/03-brand-design/obodoma/9.jpg",
        "assets/03-brand-design/obodoma/10.jpg",
        "assets/03-brand-design/obodoma/11.jpg",
        "assets/03-brand-design/obodoma/12.jpg",
        "assets/03-brand-design/obodoma/13.jpg",
        "assets/03-brand-design/obodoma/14.jpg",
        "assets/03-brand-design/obodoma/15.jpg",
        "assets/03-brand-design/obodoma/16.jpg",
        "assets/03-brand-design/obodoma/17.jpg"
      ],
      result: "Delivered a culturally authentic, visually striking brand identity that seamlessly bridges Nigerian heritage with contemporary hospitality design — establishing obodỌma as a memorable and inviting destination brand across all physical and digital touchpoints.",
      tools: ["Adobe Photoshop", "Adobe Illustrator", "Affinity"]
    }
  },
  {
    id: "my-contents-today",
    title: "Engaging Social Media Contents — Victor Johnson",
    category: "video-editing",
    categoryLabel: "Video Editing",
    client: "Victor Johnson",
    year: "2025",
    role: "Visual Storytelling & Editing",
    shortDesc: "A dynamic cinematic video edit highlighting narrative pacing, rhythmic sound design, visual flow, and polished color grading.",
    heroImage: "assets/02-video-projects/my-contents-today-thumb.jpg",
    videoPreview: "assets/02-video-projects/my-contents-today.mp4",
    aspectRatio: "16/9",
    featured: true,
    tags: ["Video Editing", "Cinematic Pacing", "Color Grading", "Sound Design", "Premiere Pro"],
    caseStudy: {
      videos: [
        { title: "Brand Launch Film", subtitle: "Hero brand introduction with cinematic pacing and sound design", src: "assets/02-video-projects/my-contents-today.mp4" },
        { title: "Social Media Campaign Cut", subtitle: "Fast-paced vertical and horizontal cuts for Instagram & TikTok", src: "assets/02-video-projects/V2.mp4" },
        { title: "Product Showcase Reel", subtitle: "Clean product-focused edit with motion graphics overlays", src: "assets/02-video-projects/V3.mp4" },
        { title: "Event Recap Highlight", subtitle: "Dynamic recap edit from a live brand activation event", src: "assets/02-video-projects/V4.mp4" }
      ],
      gallery: [],
      result: "Delivered 5 broadcast-ready video edits demonstrating advanced narrative pacing, emotional resonance, and high-impact visual storytelling across multiple formats.",
      tools: ["Adobe Premiere Pro", "DaVinci Resolve"]
    }
  },
  {
    id: "aura-soundscapes",
    title: "Aura Soundscapes — 4K Commercial Launch Film",
    category: "video-editing",
    categoryLabel: "Video Editing",
    client: "Aura Audio London",
    year: "2025",
    role: "Lead Editor, Sound Design & Colorist",
    shortDesc: "A high-octane, rhythmic commercial launch film showcasing next-generation spatial acoustic headphones.",
    heroImage: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1400&auto=format&fit=crop",
    videoPreview: "assets/02-video-projects/my-contents-today.mp4",
    aspectRatio: "16/9",
    featured: false,
    tags: ["Commercial", "Color Grading", "Sound Design", "DaVinci Resolve"],
    caseStudy: {
      challenge: "Aura Audio needed a fast-paced, visceral launch video to introduce their luxury spatial audio gear to gen-Z and audiophile creators. The raw footage spanned 12 different camera angles with mismatched ambient audio and varying lighting conditions.",
      approach: "Built a syncopated editorial rhythm locked tightly to an original synthesized audio track. Applied a custom film emulation LUT in DaVinci Resolve with rich cinematic teal-and-amber contrast, and layered 48 distinct Foley and whoosh elements to elevate the tactile product feel.",
      workDetails: [
        "Dynamic pacing matching micro-beats of the music",
        "Dual-pass color grade with film-grain texture overlay",
        "Spatial audio panning and sub-bass impact design",
        "Multi-aspect ratio cutdowns for 9:16 TikTok and 16:9 YouTube"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop"
      ],
      result: "Generated 3.2M organic impressions across Twitter/X and YouTube within 14 days of launch, driving a 34% pre-order conversion surge.",
      tools: ["Adobe Premiere Pro", "DaVinci Resolve Studio", "Logic Pro", "After Effects"]
    }
  },
  {
    id: "catalyst-docu-series",
    title: "The Founders' Blueprint — 5-Part Docu-Series",
    category: "video-editing",
    categoryLabel: "Video Editing",
    client: "Catalyst Media Studio",
    year: "2024",
    role: "Senior Video Editor & Narrative Storyteller",
    shortDesc: "An intimate, documentary-style episodic video series covering the unspoken realities of tech founders across emerging markets.",
    heroImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1400&auto=format&fit=crop",
    videoPreview: "https://assets.mixkit.co/videos/preview/mixkit-man-holding-a-vintage-video-camera-in-a-studio-41484-large.mp4",
    aspectRatio: "16/9",
    featured: true,
    tags: ["Docu-Style", "Narrative", "Interviews", "Premiere Pro"],
    caseStudy: {
      challenge: "More than 60 hours of raw multi-cam interview footage, B-roll, and archival photography needed to be distilled into five gripping 12-minute episodes without losing emotional nuance.",
      approach: "Formulated clear narrative arcs for each founder. Used J-cuts, ambient room tones, archival paper textures, and subtle sound transitions to evoke vulnerability. Applied documentary-grade naturalistic color grades to keep human skin tones warm and authentic.",
      workDetails: [
        "Story-led scripting and footage assembly from 60+ hours of rushes",
        "Multi-track audio cleanup with dialogue isolation and leveling",
        "Archival photo animation with parallax 2.5D depth mapping",
        "Custom lower thirds and chapter cards"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1000&auto=format&fit=crop"
      ],
      result: "Amassed over 1.8M views on YouTube with an average watch retention rate of 68%, outperforming the studio's benchmark by 2.4x.",
      tools: ["Adobe Premiere Pro", "iZotope RX", "DaVinci Resolve", "After Effects"]
    }
  },
  {
    id: "verve-fashion-week",
    title: "Verve Fashion Collective — Global Runway Visual Identity",
    category: "brand-design",
    categoryLabel: "Brand Design",
    client: "Verve Global & Lagos Fashion Week",
    year: "2025",
    role: "Lead Brand & Graphic Designer",
    shortDesc: "High-fashion typographic identity, physical exhibition collateral, and dynamic digital billboards for the Autumn/Winter showcase.",
    heroImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1400&auto=format&fit=crop",
    videoPreview: null,
    aspectRatio: "16/10",
    featured: false,
    tags: ["Fashion", "Typography", "Editorial Print", "OOH Billboards"],
    caseStudy: {
      challenge: "Verve needed an avant-garde visual language that fused African textile heritage with high-concept European editorial aesthetics across large format outdoor billboards, VIP invitations, and runway projections.",
      approach: "Crafted an expressive serif display typography combined with brutalist grid structures and high-contrast monochrome photography. Delivered physical foil-stamped press kits and animated runway LED stage backdrops.",
      workDetails: [
        "Custom display serif lettering with high vertical contrast",
        "Large-format outdoor billboards and transit shelter ads",
        "VIP invitation suites featuring embossed tactile paper",
        "Motion-ready motion assets for live runway screens"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
      ],
      result: "Featured across Vogue Africa, BellaNaija Style, and Dazed, reaching over 500,000 attendees and digital viewers.",
      tools: ["Adobe InDesign", "Photoshop", "Illustrator", "Figma"]
    }
  },
  {
    id: "nexus-motion-teaser",
    title: "Nexus Neural OS — 3D Motion Graphics & Launch Teaser",
    category: "motion-graphics",
    categoryLabel: "Motion Graphics",
    client: "Nexus Dynamics AI",
    year: "2025",
    role: "Motion Designer & 3D Animator",
    shortDesc: "Futuristic 3D kinetic typography, glassmorphism UI interactions, and particle simulations introducing an AI operating system.",
    heroImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1400&auto=format&fit=crop",
    videoPreview: "https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-background-animation-42510-large.mp4",
    aspectRatio: "16/9",
    featured: true,
    tags: ["3D Animation", "Kinetic Type", "UI Motion", "After Effects"],
    caseStudy: {
      challenge: "Explain an abstract neural computing paradigm in an exciting, 45-second teaser without bogging down the viewer in technical jargon.",
      approach: "Used metaphoric glass spheres, floating data nodes, and explosive kinetic typography. Choreographed lighting sweeps and chromatic aberration to give the technology a tactile, premium physical presence.",
      workDetails: [
        "3D particle simulation and procedural glowing ribbons",
        "Kinetic typographic layout timed to modular synthesizer soundscapes",
        "Looping UI interaction prototypes rendered in 60 FPS",
        "WebM and MP4 optimized video exports for ultra-fast web embedding"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop"
      ],
      result: "Became the #1 trending Product Hunt video of the week and achieved a 41% sign-up rate on the product waitlist.",
      tools: ["After Effects", "Blender", "Cavalry", "Premiere Pro"]
    }
  },
  {
    id: "poga-gadgets-campaign",
    title: "POGA — Gadgets & Accessories High-Conversion Social & Ad Campaigns",
    category: "graphic-design",
    categoryLabel: "Graphic Design",
    client: "POGA Gadgets",
    year: "2025",
    role: "Lead Visual & Ad Creative Designer",
    shortDesc: "Vibrant, high-conversion promotional ad creatives, social media campaigns, and festive marketing graphics for a modern consumer electronics & gadget retail brand.",
    heroImage: "assets/04-graphic-design/poga/poga democracy day.jpg",
    videoPreview: null,
    aspectRatio: "1/1",
    featured: true,
    tags: ["Social Media", "Ad Creatives", "Campaign Design", "Photoshop", "Illustrator"],
    caseStudy: {
      challenge: "POGA needed bold, thumb-stopping visual creatives that resonate with tech-savvy youth and gadget enthusiasts across Instagram, WhatsApp, and paid social channels while driving direct e-commerce conversions.",
      approach: "Created a striking design system utilizing high-contrast color grading, vibrant purple and green brand palettes, bold custom typography, product photo manipulation, and eye-catching celebratory campaign layouts.",
      workDetails: [
        "11+ high-impact social media and e-commerce promotional creatives",
        "Democracy Day, New Year, and seasonal marketing ad campaigns",
        "Product feature callouts and conversion-focused typography hierarchy",
        "Consistent brand identity across all digital marketing touchpoints"
      ],
      gallery: [
        "assets/04-graphic-design/poga/poga democracy day.jpg",
        "assets/04-graphic-design/poga/2nd friday poga1.jpg",
        "assets/04-graphic-design/poga/2nd wednesday june poga1.jpg",
        "assets/04-graphic-design/poga/poga monday23.jpg",
        "assets/04-graphic-design/poga/poga new year (1).jpg",
        "assets/04-graphic-design/poga/poga wed 21.jpg",
        "assets/04-graphic-design/poga/poga wednesday 1.jpg",
        "assets/04-graphic-design/poga/poga wednesday 2.jpg",
        "assets/04-graphic-design/poga/sddjjjs.jpg",
        "assets/04-graphic-design/poga/SmartSelect_20251106_203024_WhatsApp.jpg",
        "assets/04-graphic-design/poga/SmartSelect_20251113_141128_Gallery.jpg"
      ],
      result: "Significantly boosted social media engagement, established an energetic visual presence for POGA across digital platforms, and drove direct traffic to the web storefront.",
      tools: ["Adobe Photoshop", "Adobe Illustrator"]
    }
  },
  {
    id: "laterra-realty-marketing",
    title: "Laterra & His Presence Realty — Real Estate Marketing Collateral",
    category: "graphic-design",
    categoryLabel: "Graphic Design",
    client: "Laterra & His Presence Realty",
    year: "2025",
    role: "Creative Designer & Visual Communicator",
    shortDesc: "Strategic real estate marketing collateral, property allocation announcements, and localized community event campaigns communicating trust, value, and land ownership.",
    heroImage: "assets/04-graphic-design/real-estate/democray day laterra1.jpg",
    videoPreview: null,
    aspectRatio: "1/1",
    featured: true,
    tags: ["Real Estate", "Event Marketing", "Campaign Design", "Photoshop"],
    caseStudy: {
      challenge: "Real estate campaigns in competitive Nigerian markets require visual communications that evoke trust, economic empowerment, and community solidarity while driving on-the-ground event attendance.",
      approach: "Designed premium marketing flyers and localized outreach graphics emphasizing land ownership as economic freedom, featuring crisp architectural vector outlines, patriotic Nigerian motifs, and clear event callouts.",
      workDetails: [
        "Democracy Day national campaign design with 3D text styling",
        "Property allocation announcement creatives",
        "Grassroots Ochanja Market marketing outreach promotional design",
        "Consistent multi-channel identity for realty brands"
      ],
      gallery: [
        "assets/04-graphic-design/real-estate/democray day laterra1.jpg",
        "assets/04-graphic-design/real-estate/allocation.jpg",
        "assets/04-graphic-design/real-estate/his presence1.jpg",
        "assets/04-graphic-design/real-estate/new month his presence.jpg"
      ],
      result: "Drove high turnout for ground marketing activations and reinforced client brand credibility in property investment.",
      tools: ["Adobe Photoshop", "Adobe Illustrator"]
    }
  },
  {
    id: "smebundle-carousel-series",
    title: "SMEBundle by BrandForge — High-Converting Social Carousel Series",
    category: "graphic-design",
    categoryLabel: "Graphic Design",
    client: "SMEBundle (BrandForge)",
    year: "2025",
    role: "Lead Visual Designer & Carousel Strategist",
    shortDesc: "An engaging 6-slide educational Instagram carousel and marketing suite designed to capture attention and convert SME owners into growth bundle clients.",
    heroImage: "assets/04-graphic-design/sme-bundle/smebundle-carrousel_01.jpg",
    videoPreview: null,
    aspectRatio: "1/1",
    featured: true,
    tags: ["Carousel Design", "SME Marketing", "Social Strategy", "Photoshop"],
    caseStudy: {
      challenge: "SMEs often overlook business development offers unless presented in an irresistible, highly legible visual format that retains high swipe-through rates on Instagram.",
      approach: "Crafted a 6-part seamless carousel utilizing modern 3D clay-style hand mockups holding mobile screens, warm friendly peach tones, high-contrast typography, and conversational UI message elements.",
      workDetails: [
        "6-slide narrative Instagram swipe carousel",
        "Custom 3D smartphone UI mockup compositions",
        "Conversational typography and value-driven microcopy hierarchy",
        "High-contrast action prompts that maximize retention"
      ],
      gallery: [
        "assets/04-graphic-design/sme-bundle/smebundle-carrousel_01.jpg",
        "assets/04-graphic-design/sme-bundle/smebundle-carrousel_02.jpg",
        "assets/04-graphic-design/sme-bundle/smebundle-carrousel_03.jpg",
        "assets/04-graphic-design/sme-bundle/smebundle-carrousel_04.jpg",
        "assets/04-graphic-design/sme-bundle/smebundle-carrousel_05.jpg",
        "assets/04-graphic-design/sme-bundle/smebundle-carrousel_06.jpg"
      ],
      result: "Achieved 3x higher swipe-through completion rates and elevated SMEBundle's brand perception across LinkedIn and Instagram.",
      tools: ["Adobe Photoshop", "Adobe Illustrator"]
    }
  },
  {
    id: "commercial-advertising-creatives",
    title: "Commercial Advertising & Event Creatives — Entertainment & Food",
    category: "graphic-design",
    categoryLabel: "Graphic Design",
    client: "Hotel De La Nice & Nze's Cuisine",
    year: "2025",
    role: "Art Director & Print / Digital Designer",
    shortDesc: "Luxury nightlife event promotion and mouth-watering culinary packaging campaigns blending vibrant color contrast, premium typography, and appetite appeal.",
    heroImage: "assets/04-graphic-design/commercial-creative/rythm and romance updated.jpg",
    videoPreview: null,
    aspectRatio: "1/1",
    featured: false,
    tags: ["Event Poster", "Food Packaging", "Advertising", "Photoshop"],
    caseStudy: {
      challenge: "Create high-end visual promotional materials for distinct commercial niches: a sultry, elegant live music evening and an appetizing food delivery campaign.",
      approach: "For 'Rhythm & Romance', utilized dramatic golden lighting, deep velvet shadows, and metallic serif typography. For 'Nze's Cuisine', engineered vibrant floating ingredient composites with energetic callouts.",
      workDetails: [
        "Rhythm & Romance VIP concert & nightlife poster",
        "Nze's Cuisine appetite-stimulating food delivery advertisement",
        "Corporate 'We Are Hiring' recruitment graphic",
        "Social media new month and celebratory greeting designs"
      ],
      gallery: [
        "assets/04-graphic-design/commercial-creative/rythm and romance updated.jpg",
        "assets/04-graphic-design/commercial-creative/nzes cuisine1.jpg",
        "assets/04-graphic-design/commercial-creative/we are hiring (1).jpg",
        "assets/04-graphic-design/commercial-creative/new year brandseries.jpg",
        "assets/04-graphic-design/commercial-creative/monday SME.jpg"
      ],
      result: "Sold out table reservations for the Easter Monday event and generated high engagement for regional brand campaigns.",
      tools: ["Adobe Photoshop", "Adobe Illustrator"]
    }
  },
  {
    id: "elysium-cinematic-visual",
    title: "Elysium — Cinematic Narrative Visual Experience",
    category: "video-editing",
    categoryLabel: "Video Editing",
    client: "Warner Music / Independent Artist",
    year: "2024",
    role: "Lead Video Editor & Colorist",
    shortDesc: "A poetic, cinematic visual piece fusing vintage 16mm film stock aesthetics with modern digital cinematography.",
    heroImage: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1400&auto=format&fit=crop",
    videoPreview: "https://assets.mixkit.co/videos/preview/mixkit-night-sky-with-stars-and-a-full-moon-41584-large.mp4",
    aspectRatio: "16/9",
    featured: false,
    tags: ["Cinematic", "Music Video", "16mm Film Look", "DaVinci Resolve"],
    caseStudy: {
      challenge: "The director wanted an unhurried, evocative visual mood that felt nostalgic yet polished, with seamless transitions between dream sequences and realistic performance shots.",
      approach: "Used match cuts, optical speed ramps, organic light leaks, and authentic 16mm halation grain. Scored custom Foley elements to enhance subtle actor movements and environmental breezes.",
      workDetails: [
        "Seamless match cuts bridging chronological timelines",
        "Authentic 16mm analog halation and gate weave simulation",
        "Custom acoustic reverb modeling for dream sequences",
        "Festival-ready DCI-P3 theatrical color master"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop"
      ],
      result: "Selected for screening at 3 international short-film festivals and garnered 950,000+ views on Vimeo Staff Picks.",
      tools: ["Adobe Premiere Pro", "DaVinci Resolve Studio", "FilmConvert Nitrate"]
    }
  }
];

export const testimonialsData: Testimonial[] = [
  {
    quote: "Chidera is one of the rare creative minds who understands both narrative tension in video and meticulous typography in branding. His launch video generated over 3.2M impressions and converted higher than any campaign we've run.",
    name: "Marcus Vance",
    role: "Creative Director",
    company: "Aura Audio London",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "Working with Chidera transformed how Kore presents itself internationally. He turned our initial ideas into a world-class brand system that directly helped us close our $4.5M seed round.",
    name: "Amina Adeleke",
    role: "Co-Founder & VP Product",
    company: "Kore Technologies",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "The speed, taste level, and storytelling precision Chidera brings to video editing is unmatched. He took 60 hours of raw interview rushes and turned it into our most-watched docu-series.",
    name: "Liam O'Connor",
    role: "Head of Content",
    company: "Catalyst Media Studio",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  }
];

export const clientBrands: ClientBrand[] = [
  { name: "SKILLNESST", location: "Global" },
  { name: "OBODỌMA", location: "Nigeria" },
  { name: "POGA", location: "E-Commerce" },
  { name: "LATERRA", location: "Real Estate" },
  { name: "HIS PRESENCE", location: "Realty" },
  { name: "SMEBUNDLE", location: "BrandForge" },
  { name: "NZE'S CUISINE", location: "Hospitality" },
  { name: "AURA AUDIO", location: "London" },
  { name: "CATALYST MEDIA", location: "New York" }
];

export const services = [
  {
    number: "01",
    title: "Video Editing",
    subtitle: "Editing · Color · Sound · Storytelling",
    description: "High-tension commercial edits, long-form documentary storytelling, YouTube narrative pacing, and platform-specific viral short-form cuts.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"></polygon>
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
      </svg>
    ),
    capabilities: [
      "Commercials & Brand Launch Films",
      "Documentary & Episodic Editing",
      "Cinematic Color Grading (DaVinci Resolve)",
      "Sound Design, Dialogue Cleanup & Foley"
    ]
  },
  {
    number: "02",
    title: "Brand Design",
    subtitle: "Strategy · Identity · Systems",
    description: "Holistic brand identities that position your business for market leadership. Building systems that are flexible, timeless, and immediately recognizable.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
      </svg>
    ),
    capabilities: [
      "Visual Identity & Logo Architecture",
      "Comprehensive Brand Guidelines & Systems",
      "Typography Curation & Bespoke Lettering",
      "Packaging Design & Physical Collateral"
    ]
  },
  {
    number: "03",
    title: "Graphic Design",
    subtitle: "Campaigns · Social · Print · Decks",
    description: "High-converting visual assets across digital and physical mediums. Strategic art direction that commands attention across crowded feeds and outdoor spaces.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <circle cx="8.5" cy="8.5" r="1.5"></circle>
        <polyline points="21 15 16 10 5 21"></polyline>
      </svg>
    ),
    capabilities: [
      "High-Converting Ad Campaigns & Social Creatives",
      "Editorial Layouts, Magazines & Books",
      "Investor Pitch Decks & Keynotes",
      "Out-of-Home (OOH) Billboards & Exhibition Design"
    ]
  },
  {
    number: "04",
    title: "Motion Design",
    subtitle: "Animation · Kinetic Type · 3D VFX",
    description: "Dynamic kinetic motion that brings static brands to life. Adding dimension, rhythm, and visual polish that reinforces modern product value.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
      </svg>
    ),
    capabilities: [
      "Kinetic Typography & Title Sequences",
      "3D Product Reveals & Teaser Animations",
      "Logo Animation & Brand Motion Language",
      "UI/App Interaction Prototypes"
    ]
  }
];
