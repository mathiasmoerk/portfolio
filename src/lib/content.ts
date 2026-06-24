/*
  Single source of truth for all site copy.
  Edit values here - components read from this file.
  Fields marked `TODO` are placeholders awaiting Mathias's real details.
*/

export type ChipColor =
  | "violet"
  | "blue"
  | "green"
  | "orange"
  | "pink"
  | "amber";

export type Chip = { label: string; color: ChipColor };

export type Figure = {
  /** Path under /public, e.g. "/projects/p1-cover.png". Falls back to a
   *  styled placeholder until the file is dropped in. */
  src: string;
  alt: string;
  caption?: string;
};

export type Embed = {
  kind: "instagram";
  url: string; // the post/reel permalink
  heading?: string;
  caption?: string;
};

export type CaseStudy = {
  /** One-line framing shown under the title. */
  lead: string;
  /** Opening narrative. */
  intro: string;
  /** The research question / framing statement, pulled out as a highlight. */
  problem?: string;
  /** Cover image at the top of the case study. */
  cover: Figure;
  /** Key features / deliverables block. */
  features?: { title: string; body: string }[];
  featuresHeading?: string;
  featuresLead?: string;
  /** Closing note on method / validation. */
  method?: string;
  /** Supporting screenshots. */
  gallery: Figure[];
  facts: { label: string; value: string }[];
  /** Process - sequential phases / studies / workstreams. */
  process?: { phase: string; title: string; body: string }[];
  processHeading?: string;
  processLead?: string;
  /** Headline results / numbers. */
  metrics?: { value: string; label: string }[];
  /** Named design principles the work was grounded in. */
  principles?: { name: string; note: string }[];
  principlesHeading?: string;
  /** A representative user quote. */
  quote?: { text: string; author: string };
  /** An embedded social post (e.g. an Instagram reel the designer features in). */
  embed?: Embed;
  /** Honest reflection / next steps. */
  reflection?: { intro: string; points: string[] };
};

export type Project = {
  id: string;
  slug: string;
  index: string; // editorial numbering, e.g. "01"
  title: string;
  client?: string;
  year: string;
  role: string;
  summary: string;
  chips: Chip[];
  /** Optional real cover image (path under /public). Falls back to `thumb`. */
  cover?: string;
  /** Thumbnail treatment - high-saturation, with depth (per moodboard). */
  thumb: {
    variant: "phone" | "browser" | "cards";
    from: string; // gradient start
    to: string; // gradient end
    accent: string; // foreground graphic accent
  };
  /** Full case study. When present, the card links to /work/<slug>. */
  caseStudy?: CaseStudy;
};

export function projectHref(p: Project): string {
  return p.caseStudy ? `/work/${p.slug}` : "#work";
}

export const site = {
  name: "Mathias Mørk",
  initials: "MM",
  role: "Product Designer",
  email: "mathiasmoerk306@gmail.com",
  nav: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  social: [
    { label: "Email", href: "mailto:mathiasmoerk306@gmail.com" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mathias-mørk-541b09145",
    },
  ],
};

export const hero = {
  eyebrow: "Product Designer · Denmark",
  // Strong typographic statement. Words in `emphasis` get the editorial accent.
  lead: "Crafting",
  emphasis: "intuitive",
  trail: "products that feel just right.",
  intro:
    "I'm a product designer working at the intersection of user needs, business goals, and technical reality: research to pixel-perfect UI. Most recently at Trifork, after LEGO, Vipps MobilePay, and Hesehus.",
  portrait: {
    src: "/projects/mathias.jpg",
    name: "Mathias Mørk",
    role: "Product Designer",
  },
};

// Profile-card header (wallofportfolios-style layout).
export const profile = {
  name: site.name,
  handle: "@mathiasmoerk",
  role: site.role,
  avatar: "/projects/mathias.jpg",
  bio: "I'm a product designer who turns complex flows into intuitive, pixel-perfect products. I work end to end: research, prototyping, and UI. Recently at Trifork, and before that LEGO, Vipps MobilePay, and Hesehus.",
  actions: [
    { label: "Get in touch", href: "#contact", primary: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mathias-mørk-541b09145" },
  ],
};

// "Worked with" — logo files dropped into /public/companies (falls back to a
// styled text wordmark until the real logo is added).
export const companies: { name: string; logo: string }[] = [
  { name: "Trifork", logo: "/companies/trifork.png" },
  { name: "LEGO", logo: "/companies/lego.png" },
  { name: "Vipps MobilePay", logo: "/companies/vipps.png" },
  { name: "Hesehus", logo: "/companies/hesehus.png" },
];

export const projects: Project[] = [
  {
    id: "project-one",
    slug: "data-governance",
    index: "01",
    title: "Enhancing the UX of data governance",
    client: "Sydbank",
    year: "2024",
    role: "UX Researcher & Designer",
    summary:
      "A UX research project layering lightweight, social collaboration onto Sydbank's Alation data catalog - turning hallway data questions into reusable, trusted knowledge.",
    chips: [
      { label: "UX Research", color: "violet" },
      { label: "Data Governance", color: "blue" },
      { label: "Figma", color: "green" },
      { label: "Prototyping", color: "orange" },
    ],
    cover: "/projects/p1-cover.png",
    thumb: { variant: "browser", from: "#1f6bff", to: "#0a3aa3", accent: "#ffffff" },
    caseStudy: {
      lead: "A Master's research project reimagining how a bank shares and trusts its data - where I led the prototype and usability testing.",
      intro:
        "Sydbank's Alation catalog stores thousands of tables, queries and articles - yet employees still solve everyday data questions over Teams, email and hallway chats. That siloed habit buries good work and slows new analysts. In a team of four at SDU, I led Study 3: the high-fidelity prototype and the usability test with real Alation users.",
      problem:
        "How might we improve Alation's community features so the catalog actively drives knowledge-sharing between its users?",
      facts: [
        { label: "Partner", value: "Sydbank" },
        { label: "Context", value: "MSc thesis · SDU" },
        { label: "My focus", value: "Prototype & usability test" },
        { label: "Method", value: "Mixed-methods · 5 studies" },
      ],
      process: [
        {
          phase: "Study 01",
          title: "Interview analysis",
          body: "Re-analysed Sydbank's internal interviews: ratings, conversations and queries were useful in principle but overlooked in practice.",
        },
        {
          phase: "Study 02",
          title: "Observation & heuristic evaluation",
          body: "Netnographic review plus an expert pass against Nielsen's 10 heuristics - confirming near-zero community activity and the UI issues behind it.",
        },
        {
          phase: "Study 03 - my focus",
          title: "Prototype & usability test",
          body: "Built the high-fidelity Figma prototype - Threads, a redesigned dashboard, clearer states - and tested it unmoderated in Maze.",
        },
        {
          phase: "Study 04",
          title: "Mixed-methods data",
          body: "Triangulated Maze behaviour (heat-maps, completion, time-on-task) with qualitative email responses, coded in NVivo.",
        },
        {
          phase: "Study 05",
          title: "Communities of Practice lens",
          body: "Framed it all through Wenger's Communities of Practice - UI alone can't manufacture a culture of sharing.",
        },
      ],
      metrics: [
        { value: "9", label: "Test participants" },
        { value: "8/9", label: "Completed all tasks" },
        { value: "5.5/6", label: "Top task usability rating" },
        { value: "5", label: "Linked research studies" },
      ],
      principles: [
        {
          name: "Nielsen's 10 heuristics",
          note: "Audited and redesigned the UI against each principle.",
        },
        {
          name: "Fitts's Law",
          note: "Sized interactive targets for faster, surer hits.",
        },
        {
          name: "Jakob's Law",
          note: "Matched mental models from LinkedIn & Gmail.",
        },
        {
          name: "WCAG 2.1 AA",
          note: "Contrast-safe states across every component.",
        },
        {
          name: "What do prototypes prototype?",
          note: "Houde & Hill framing to pick the right fidelity.",
        },
      ],
      quote: {
        text: "It's not just ‘empty’ when I open it - I can see my colleagues are active, and I keep up with what Alation can do.",
        author: "Sydbank employee · usability test",
      },
      reflection: {
        intro:
          "The honest read: usability improved, but a single prototype can't create a community of practice on its own.",
        points: [
          "Half of participants didn't expect to use the features more - the gap is partly workflow and culture, not just interface.",
          "Non-anonymous responses risked social-desirability bias; I'd anonymise participation next time.",
          "With more time, I'd run a moderated before/after test for step-level insight.",
        ],
      },
      cover: {
        src: "/projects/p1-cover.png",
        alt: "Sydbank data catalog - New way to work with data",
      },
      features: [
        {
          title: "Threads",
          body: "A tag-driven discussion anchored to every table, query and article. Questions get asked in context and answers marked “Accepted” - so the next person finds a trusted resolution.",
        },
        {
          title: "Curated home dashboard",
          body: "Latest Threads, Popular Queries and Featured Articles surface active content at login, replacing the static landing page with a living overview.",
        },
        {
          title: "Clarified rating UI",
          body: "Ambiguous flags become clear positive / negative thumbs with colour-safe states and a tooltip explaining each rating's impact.",
        },
        {
          title: "Undo toasts & micro-animation",
          body: "Real-time feedback makes actions reversible and the UI feel tactile - WCAG-AA throughout.",
        },
      ],
      gallery: [
        {
          src: "/projects/p1-overview.png",
          alt: "Feature overview - new layout, threads, tags, ratings and navigation",
          caption: "System overview - the acknowledged UX patterns we built on.",
        },
        {
          src: "/projects/p1-dashboard.png",
          alt: "Curated home dashboard with Latest Threads, Queries and Articles",
          caption: "The curated home dashboard surfaces active content at login.",
        },
        {
          src: "/projects/p1-threads.png",
          alt: "Threads discussion panel anchored to a data asset",
          caption: "Threads turn one-off questions into reusable, accepted answers.",
        },
        {
          src: "/projects/p1-compose.png",
          alt: "Compose modal for posting a thread with query, code and mentions",
          caption: "Composing a thread - inline queries, code, images and @mentions.",
        },
      ],
    },
  },
  {
    id: "project-two",
    slug: "mobilepay",
    index: "02",
    title: "Designing trust into a payments app",
    client: "Vipps MobilePay",
    year: "2024",
    role: "UX Design Intern",
    summary:
      "A nine-week UX internship on the MobilePay app - shipping toward the Wishlists launch, redesigning the profile into a personal hub, and stress-testing Tap & Go with the Nordic design team.",
    chips: [
      { label: "UX Design", color: "violet" },
      { label: "Mobile App", color: "blue" },
      { label: "User Research", color: "green" },
      { label: "Figma", color: "orange" },
    ],
    cover: "/projects/p2-cover.png",
    thumb: { variant: "phone", from: "#5a78ff", to: "#3b32d6", accent: "#ffffff" },
    caseStudy: {
      lead: "A nine-week UX internship on MobilePay - from a flagship feature launch to a cross-city research workshop and a set of high-stakes fixes.",
      intro:
        "MobilePay is the app Danes reach for to move money - and, as Vipps, the same service across Norway, Sweden and Finland after the Nordic merger. I joined the design team as a UX intern with one ambition: take real work from idea toward production on a product millions of people trust with their money. I ran insight sessions and user tests, shipped prototypes in Figma, and worked across disciplines and borders with the wider design team.",
      problem:
        "MobilePay's feature set was outgrowing its navigation. As Wishlists and Tap & Go arrived, how could the app absorb new features without losing the clarity people trust it for?",
      facts: [
        { label: "Partner", value: "Vipps MobilePay" },
        { label: "Role", value: "UX Design Intern" },
        { label: "Period", value: "Aug - Oct 2024" },
        { label: "Scope", value: "Features & research" },
      ],
      processHeading: "Three projects, idea toward production.",
      processLead:
        "I had the freedom to shape my own scope - which spanned a flagship feature, a cross-city research workshop, and a set of high-stakes refinements.",
      process: [
        {
          phase: "Project 01",
          title: "Wishlists & the “Me” page",
          body: "Designed a home-screen entry that lets users create a wish in as few taps as possible, and reframed the cluttered Profile into a personalised “Me” hub of user-controlled widgets - absorbing new features without removing anything. Shipped toward the November 2024 Wishlists launch, timed before Christmas to maximise onboarding.",
        },
        {
          phase: "Project 02",
          title: "Tap & Go evaluation workshop",
          body: "Co-facilitated expert-evaluation workshops (Nielsen & Molich) in Aarhus and Copenhagen with UX Unite, evaluating the in-development Tap & Go NFC wallet - MobilePay's answer to Apple Pay, unlocked when the EU forced Apple to open its NFC chip. Groups scored key screens in FigJam across Usability, Discoverability, Value and Aesthetics, against a clickable Figma prototype.",
        },
        {
          phase: "Project 03",
          title: "High-stakes refinements",
          body: "Redesigned recipient search in the Send flow after a business was mistakenly sent 18,000 kr in a single weekend - users couldn't tell a company from a person. Using Gestalt principles, I clarified what each result represents. I also made cross-border Groups surface currency-conversion fees clearly, before a transfer is sent.",
        },
      ],
      metrics: [
        { value: "9 wks", label: "Internship · 2024" },
        { value: "Nov 2024", label: "Wishlists shipped" },
        { value: "2", label: "Workshop cities" },
        { value: "4", label: "Markets - DK·NO·SE·FI" },
      ],
      principlesHeading: "Methods I brought to the work.",
      principles: [
        {
          name: "Heuristic / expert evaluation",
          note: "Nielsen & Molich, run as a facilitated group workshop.",
        },
        {
          name: "Gestalt principles",
          note: "Clarified high-risk search and fee moments.",
        },
        {
          name: "Information architecture",
          note: "Re-housed features without removing any.",
        },
        {
          name: "Personalisation",
          note: "A configurable “Me” hub the user controls.",
        },
        {
          name: "Figma & FigJam",
          note: "Prototypes for both user tests and stakeholder buy-in.",
        },
      ],
      embed: {
        kind: "instagram",
        url: "https://www.instagram.com/reel/DAikOgrMUMF/",
        heading: "From the internship",
        caption: "A reel from my time at Vipps MobilePay - I'm featured in it.",
      },
      reflection: {
        intro:
          "My biggest takeaway was designing under real business constraints.",
        points: [
          "The hardest brief - add features to the navigation without removing any - pushed me deep into information architecture and creative prioritisation.",
          "With dev resources tight, much of my work lives on as ready-to-build proposals - a realistic look at how product teams actually sequence work.",
          "Working across Danish and Norwegian teams showed me how much the written word carries in a financial UI, especially around fees and trust.",
        ],
      },
      cover: {
        src: "/projects/p2-cover.png",
        alt: "MobilePay - UX design",
      },
      gallery: [
        {
          src: "/projects/p2-overview.webp",
          alt: "Overview of redesigned MobilePay screens",
          caption: "A spread of the screens I worked on across the internship.",
        },
        {
          src: "/projects/p2-me.webp",
          alt: "Profile page redesigned into a personalised Me hub",
          caption: "Current vs. proposed - the cluttered Profile becomes a personal “Me” hub.",
        },
        {
          src: "/projects/p2-search.webp",
          alt: "Redesigned recipient search in the Send flow",
          caption: "Recipient search, redesigned to make clear who you're sending to.",
        },
        {
          src: "/projects/p2-crossborder.png",
          alt: "Cross-border settlement showing currency conversion fee",
          caption: "Cross-border Groups surface the currency-conversion fee before sending.",
        },
        {
          src: "/projects/p2-me-detail.webp",
          alt: "Personalised Me hub with stats, cards and accounts",
          caption: "The “Me” hub - stats, cards and shortcuts the user can arrange.",
        },
      ],
    },
  },
  {
    id: "project-three",
    slug: "lego-builder",
    index: "03",
    title: "A new world of building",
    client: "The LEGO Group",
    year: "2025",
    role: "Digital Product Design Student Worker",
    summary:
      "Helping shape the LEGO Builder app - LEGO's digital companion for building, exploring and co-creating - including the real-time Build Together experience.",
    chips: [
      { label: "Product Design", color: "violet" },
      { label: "iOS & iPad", color: "blue" },
      { label: "Prototyping", color: "green" },
      { label: "Figma", color: "orange" },
    ],
    cover: "/projects/p3-cover.png",
    thumb: { variant: "phone", from: "#ffd02e", to: "#f5a623", accent: "#6b3fa0" },
    caseStudy: {
      lead: "Helping shape LEGO's digital companion for building, exploring and co-creating - including the real-time Build Together experience.",
      intro:
        "During my time as a Digital Product Design Student Worker at LEGO, I had the joy of helping shape the LEGO Builder app - LEGO's digital companion for building, exploring and co-creating. Working alongside product managers, engineers and fellow creatives, I took ownership of design tasks across the full UX spectrum: planning and facilitating workshops, creating wireframes, prototypes and UI visuals in Figma, and transforming user research into design decisions that made building instructions smarter, smoother and more social. In short: I helped make digital building feel just as magical as snapping bricks together in real life - one iteration at a time.",
      problem:
        "How do you make building with digital instructions feel as magical - and as social - as snapping bricks together on the living-room floor?",
      facts: [
        { label: "Partner", value: "The LEGO Group" },
        { label: "Role", value: "Product Design (Student)" },
        { label: "Period", value: "2024 - 2025" },
        { label: "Team", value: "LEGO Builder app" },
      ],
      featuresHeading: "What I helped build.",
      featuresLead:
        "Across the full UX spectrum - from workshops and research to pixel-tight UI in Figma.",
      features: [
        {
          title: "Build Together",
          body: "Splits a set's instructions into parallel “builder roles” so families and friends construct the same model at once - each on their own device, perfectly in sync. Shared flow, playful teamwork, intuitive coordination.",
        },
        {
          title: "Smarter building instructions",
          body: "Clearer, step-by-step 3D guidance that makes following along smoother - so the digital build feels as satisfying as the physical one.",
        },
        {
          title: "Browse & discover",
          body: "A themed home and set pages - LEGO City, Architecture, Botanicals and more - that make finding your next build effortless.",
        },
        {
          title: "End-to-end UX",
          body: "Workshops, wireframes, prototypes and UI in Figma - turning user research into design decisions that shipped.",
        },
      ],
      quote: {
        text: "I helped make digital building feel just as magical as snapping bricks together in real life - one iteration at a time.",
        author: "On shaping the LEGO Builder app",
      },
      reflection: {
        intro:
          "Designing for LEGO meant designing for play - for everyone from a five-year-old to a parent.",
        points: [
          "Build Together reframed building as a shared moment: multiple people, multiple devices, one synchronised flow - coordination as a UX problem.",
          "Working inside a beloved brand showed me how much craft and consistency matter when expectations are this high.",
          "I grew comfortable moving from research to workshops to pixel-tight UI inside a large, cross-functional product org.",
        ],
      },
      cover: {
        src: "/projects/p3-cover.png",
        alt: "LEGO Builder app",
      },
      gallery: [
        {
          src: "/projects/p3-overview.jpg",
          alt: "Overview of LEGO Builder app screens",
          caption: "A spread of the LEGO Builder app I helped shape.",
        },
        {
          src: "/projects/p3-home.jpg",
          alt: "LEGO Builder home on iPhone and iPad",
          caption: "The Builder home - themed sets and Build Together, across iPhone and iPad.",
        },
        {
          src: "/projects/p3-browse.jpg",
          alt: "Browsing and discovering LEGO sets by theme",
          caption: "Browsing and discovering sets by theme, down to each set's page.",
        },
        {
          src: "/projects/p3-building.jpg",
          alt: "Step-by-step 3D building instructions",
          caption: "Following smarter, step-by-step 3D building instructions.",
        },
        {
          src: "/projects/p3-buildtogether.jpg",
          alt: "Build Together split building roles in sync",
          caption: "Build Together - parallel builder roles, kept perfectly in sync.",
        },
      ],
    },
  },
];

export const about = {
  years: "5+",
  stats: [
    { value: "5+", label: "Years designing" },
    { value: "10+", label: "Brands & products" },
    { value: "MSc", label: "Interaction design" },
  ],
  philosophy: [
    "Design is everywhere. My job is turning complexity into experiences that feel just right.",
    "I work at the intersection of user needs, business goals, and technical reality: research, prototyping, and pixel-perfect interfaces, built systems-first with cross-functional teams. The details are where it all comes together.",
  ],
  education: [
    {
      school: "University of Southern Denmark",
      program: "MSc - Web Communication & Interaction Design",
      period: "2023 - 2025",
    },
    {
      school: "Business Academy Aarhus",
      program: "PBA - Digital Concept Development",
      period: "2019 - 2021",
    },
    {
      school: "IBA Erhvervsakademi Kolding",
      program: "AP - Multimedia Design",
      period: "2016 - 2018",
    },
  ],
  experience: [
    { role: "Digital Product Designer", org: "Trifork", period: "2025 - 2026" },
    {
      role: "Digital Product Designer",
      org: "The LEGO Group",
      period: "2024 - 2025",
    },
    {
      role: "Product Design Intern",
      org: "Vipps MobilePay",
      period: "2024",
    },
    { role: "Digital Designer", org: "Hesehus", period: "2021 - 2023" },
    { role: "Digital Designer", org: "OPENING", period: "2021" },
  ],
};
