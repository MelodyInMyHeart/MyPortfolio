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
  carouselSlides?: string[];
  standaloneDesigns?: string[];
  videos?: CaseStudyVideo[];
  result?: string;
  tools?: string[];
}

export interface Project {
  id: string;
  excludeFromAllWorks?: boolean;
  youtubeId?: string;
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
    id: "yt-explained-edit",
    youtubeId: "ov3p0A_lxp8",
    title: "explained edit",
    category: "video-editing",
    categoryLabel: "Video Editing",
    client: "YouTube Portfolio",
    year: "2025",
    role: "Video Editor & Visual Storyteller",
    shortDesc: "Explainer-style video edit featuring structured narrative pacing, clean callouts, and rhythmic sound design.",
    heroImage: "https://img.youtube.com/vi/ov3p0A_lxp8/maxresdefault.jpg",
    videoPreview: null,
    aspectRatio: "16/9",
    featured: true,
    tags: ["Video Editing", "Explainer", "Pacing", "Sound Design"],
    caseStudy: {
      description: "An explainer edit focused on keeping complex information clear, engaging, and visually dynamic from start to finish.",
      result: "Delivered a crisp, high-retention explainer edit tailored for online audiences.",
      tools: ["Adobe Premiere Pro", "DaVinci Resolve"]
    }
  },
  {
    id: "yt-tutorial-edit",
    youtubeId: "-8z6Uhch9a8",
    title: "Tutorial edit",
    category: "video-editing",
    categoryLabel: "Video Editing",
    client: "YouTube Portfolio",
    year: "2025",
    role: "Video Editor",
    shortDesc: "Step-by-step tutorial edit built with clean screen pacing, visual highlights, and clear audio-visual flow.",
    heroImage: "https://img.youtube.com/vi/-8z6Uhch9a8/maxresdefault.jpg",
    videoPreview: null,
    aspectRatio: "16/9",
    featured: false,
    tags: ["Video Editing", "Tutorial", "Pacing"],
    caseStudy: {
      description: "A structured tutorial edit designed to guide viewers effortlessly through each step without losing momentum.",
      result: "Produced an easy-to-follow instructional video with tight pacing and clean visual cues.",
      tools: ["Adobe Premiere Pro", "DaVinci Resolve"]
    }
  },
  {
    id: "yt-interview-edit",
    youtubeId: "h5LdmFo6Rrs",
    title: "interview edit",
    category: "video-editing",
    categoryLabel: "Video Editing",
    client: "YouTube Portfolio",
    year: "2025",
    role: "Video Editor & Colorist",
    shortDesc: "Dialogue-driven interview edit balancing natural conversational rhythm, B-roll cutaways, and clean audio.",
    heroImage: "https://img.youtube.com/vi/h5LdmFo6Rrs/maxresdefault.jpg",
    videoPreview: null,
    aspectRatio: "16/9",
    featured: false,
    tags: ["Video Editing", "Interview", "Storytelling", "Color Grading"],
    caseStudy: {
      description: "An interview edit crafted around conversational flow, tight J-cuts and L-cuts, and balanced color grading.",
      result: "Shaped raw interview footage into a cohesive, engaging story.",
      tools: ["Adobe Premiere Pro", "DaVinci Resolve"]
    }
  },
  {
    id: "yt-birthday-event-edit",
    youtubeId: "MgkSXvjvW6I",
    title: "Birthday event edit for the commissioner of health delta state",
    category: "video-editing",
    categoryLabel: "Video Editing",
    client: "Commissioner of Health, Delta State",
    year: "2025",
    role: "Event Video Editor & Colorist",
    shortDesc: "Celebratory event highlight edit capturing key moments, atmosphere, and polished color grading.",
    heroImage: "https://img.youtube.com/vi/MgkSXvjvW6I/maxresdefault.jpg",
    videoPreview: null,
    aspectRatio: "16/9",
    featured: false,
    tags: ["Event Edit", "Highlights", "Color Grading", "Sound Design"],
    caseStudy: {
      description: "An event highlight reel celebrating the birthday of the Commissioner of Health, Delta State, edited with warm color grading and music-synced pacing.",
      result: "Delivered a memorable, broadcast-ready event recap film.",
      tools: ["Adobe Premiere Pro", "DaVinci Resolve"]
    }
  },
  {
    id: "yt-davinci-text-behind-subject",
    youtubeId: "bUecrGhxm1s",
    title: "Use these few steps to add text behind your subject in davinci resolve",
    category: "video-editing",
    categoryLabel: "Video Editing",
    client: "YouTube Portfolio",
    year: "2025",
    role: "Video Editor & DaVinci Resolve Specialist",
    shortDesc: "Concise DaVinci Resolve compositing walkthrough demonstrating how to mask and layer typography behind a moving subject.",
    heroImage: "https://img.youtube.com/vi/bUecrGhxm1s/maxresdefault.jpg",
    videoPreview: null,
    aspectRatio: "16/9",
    featured: false,
    tags: ["DaVinci Resolve", "Compositing", "Tutorial", "Typography"],
    caseStudy: {
      description: "A focused DaVinci Resolve tutorial breaking down subject isolation and behind-subject text layering in a few practical steps.",
      result: "Demonstrated clean masking, layering, and pacing in DaVinci Resolve.",
      tools: ["DaVinci Resolve"]
    }
  },
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
    id: "luminous-crypto-exchange",
    excludeFromAllWorks: true,
    title: "Luminous Crypto Exchange — Social Media Campaign Designs",
    category: "graphic-design",
    categoryLabel: "Graphic Design",
    client: "Luminous Exchange",
    year: "2026",
    role: "Visual & Social Media Designer",
    shortDesc: "Social media designs for a crypto exchange brand, featuring dark purple grid layouts, 3D crypto coin and vault visuals, rate table graphics, and seasonal campaign creatives.",
    heroImage: "assets/04-graphic-design/luminous-crypto-exchange/luminous-flyer3.jpeg",
    videoPreview: null,
    aspectRatio: "1/1",
    featured: false,
    tags: ["Graphic Design", "Social Media", "Crypto", "Photoshop"],
    caseStudy: {
      challenge: "Create a cohesive set of social media graphics for a digital asset and crypto exchange brand covering trading announcements, rate updates, customer appreciation, and seasonal campaigns.",
      approach: "Built a dark-mode visual system anchored by deep black-to-purple grid backgrounds, bold sans-serif typography, 3D crypto coins, and glowing purple light accents across promotional flyers and holiday creatives.",
      workDetails: [
        "Promotional trading flyer featuring a 3D purple wallet, floating crypto coins, and CTA pill",
        "Customer appreciation graphic with a 3D vault, coins, and luminous light streaks",
        "Buying and selling rate table creative for digital asset pricing updates",
        "Seasonal Christmas and 2026 New Year social media campaign visuals"
      ],
      gallery: [
        "assets/04-graphic-design/luminous-crypto-exchange/luminous-flyer3.jpeg",
        "assets/04-graphic-design/luminous-crypto-exchange/luminous-flyer.jpeg",
        "assets/04-graphic-design/luminous-crypto-exchange/luminous-flyer2.jpeg",
        "assets/04-graphic-design/luminous-crypto-exchange/luminous-happy christmas.jpeg",
        "assets/04-graphic-design/luminous-crypto-exchange/luminous-new year.jpeg"
      ],
      result: "Delivered a consistent multi-post social media visual suite ready for promotional, rate-card, and seasonal publishing.",
      tools: ["Adobe Photoshop"]
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
    heroImage: "assets/04-graphic-design/sme-bundle/smebundle-carousel/smebundle-carrousel_01.jpg",
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
      carouselSlides: [
        "assets/04-graphic-design/sme-bundle/smebundle-carousel/smebundle-carrousel_01.jpg",
        "assets/04-graphic-design/sme-bundle/smebundle-carousel/smebundle-carrousel_02.jpg",
        "assets/04-graphic-design/sme-bundle/smebundle-carousel/smebundle-carrousel_03.jpg",
        "assets/04-graphic-design/sme-bundle/smebundle-carousel/smebundle-carrousel_04.jpg",
        "assets/04-graphic-design/sme-bundle/smebundle-carousel/smebundle-carrousel_05.jpg",
        "assets/04-graphic-design/sme-bundle/smebundle-carousel/smebundle-carrousel_06.jpg"
      ],
      standaloneDesigns: [
        "assets/04-graphic-design/sme-bundle/smebundle-flyer%201.jpg",
        "assets/04-graphic-design/sme-bundle/smebundle-flyer2.jpg"
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
    quote: "Chidera shot and edited my videos from start to finish, and the response was immediate. In 4 months, my content crossed 100K views across all platforms. He understands rhythm and pacing, which is exactly what music-driven content needs.",
    name: "Victor Johnson",
    role: "Music Producer",
    company: "",
    avatar: "/assets/06-testimonials/brand-profile/victor-johnson.jpg"
  },
  {
    quote: "I didn't expect video to work this well for my field, but Chidera made it happen. He shot and edited my content, and in 4 months we passed 100K views across platforms. He made my expertise easy to watch and easy to trust.",
    name: "Miracle Onyema",
    role: "Accountant",
    company: "",
    avatar: "/assets/06-testimonials/brand-profile/onyema-miracle.jpg"
  },
  {
    quote: "Chidera built our visual and brand identity from the ground up, then stayed on for 3 months of social media designs. Everything felt consistent, clear and credible, which matters a lot when you're building trust in education. He gave skillnesst a look we're proud of.",
    name: "skillnesst",
    role: "Ed Tech Brand",
    company: "",
    avatar: "/assets/06-testimonials/brand-profile/skillnesst.jpg"
  },
  {
    quote: "Chidera developed our visual and brand identity, and it changed how customers see us. In a trade where trust matters, our brand now looks professional, reliable and established. He took the time to understand our work and turned it into an identity we're proud of.",
    name: "Donalds",
    role: "Household Repairs (Solar, AC & Electrical)",
    company: "",
    avatar: "/assets/06-testimonials/brand-profile/donalds.jpg"
  }
];

export const clientBrands: ClientBrand[] = [
  { name: "Brandforge", location: "" },
  { name: "Victor Johnson", location: "" },
  { name: "skillnesst", location: "" },
  { name: "Smebundle", location: "" },
  { name: "Onyema Miracle", location: "" },
  { name: "Brand Series", location: "" }
];

export const services = [
  {
    number: "01",
    title: "Video Editing",
    subtitle: "Editing · Color · Sound · Storytelling",
    description: "High-retention video edits tailored for creators, brands, and events with clean pacing, sound design, and color grading.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"></polygon>
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
      </svg>
    ),
    capabilities: [
      "Event coverage",
      "Talking head videos",
      "Interviews",
      "Podcast edits"
    ]
  },
  {
    number: "02",
    title: "Graphic Design",
    subtitle: "Campaigns · Social · Print · Thumbnails",
    description: "High-converting visual assets across digital and physical mediums. Strategic art direction that commands attention across crowded feeds and outdoor spaces.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <circle cx="8.5" cy="8.5" r="1.5"></circle>
        <polyline points="21 15 16 10 5 21"></polyline>
      </svg>
    ),
    capabilities: [
      "Stunning social media designs",
      "Ad designs",
      "Carousels",
      "YouTube thumbnails",
      "Billboards"
    ]
  },
  {
    number: "03",
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
      "Brand identity development",
      "Visual identity",
      "Logo architecture",
      "Event branding"
    ]
  }
];
