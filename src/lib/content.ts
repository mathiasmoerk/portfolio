/*
  Single source of truth for all site copy.
  Edit values here — components read from this file.
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

export type CaseStudy = {
  /** One-line framing shown under the title. */
  lead: string;
  /** Opening narrative. */
  intro: string;
  /** The research question / framing statement, pulled out as a highlight. */
  problem?: string;
  /** Cover image at the top of the case study. */
  cover: Figure;
  features: { title: string; body: string }[];
  /** Closing note on method / validation. */
  method?: string;
  /** Supporting screenshots. */
  gallery: Figure[];
  facts: { label: string; value: string }[];
  /** Research process — sequential phases / studies. */
  process?: { phase: string; title: string; body: string }[];
  /** Headline results / numbers. */
  metrics?: { value: string; label: string }[];
  /** Named design principles the work was grounded in. */
  principles?: { name: string; note: string }[];
  /** A representative user quote. */
  quote?: { text: string; author: string };
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
  /** Thumbnail treatment — high-saturation, with depth (per moodboard). */
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
    { label: "Webflow", href: "https://moerk.webflow.io" },
  ],
};

export const hero = {
  eyebrow: "Product Designer — Trifork · Denmark",
  // Strong typographic statement. Words in `emphasis` get the editorial accent.
  lead: "Crafting",
  emphasis: "intuitive",
  trail: "products that feel just right.",
  intro:
    "I'm a product designer at Trifork working at the intersection of user needs, business goals, and technical reality — research to pixel-perfect UI. Previously at LEGO, Vipps MobilePay, and Hesehus.",
};

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
      "A UX research project layering lightweight, social collaboration onto Sydbank's Alation data catalog — turning hallway data questions into reusable, trusted knowledge.",
    chips: [
      { label: "UX Research", color: "violet" },
      { label: "Data Governance", color: "blue" },
      { label: "Figma", color: "green" },
      { label: "Prototyping", color: "orange" },
    ],
    cover: "/projects/p1-cover.png",
    thumb: { variant: "browser", from: "#1f6bff", to: "#0a3aa3", accent: "#ffffff" },
    caseStudy: {
      lead: "A Master's research project reimagining how a bank shares and trusts its data — where I led the prototype and usability testing.",
      intro:
        "Sydbank's Alation catalog stores thousands of tables, queries and articles — yet employees still solve everyday data questions over Teams, email and hallway chats. That siloed habit buries good work and slows new analysts. In a team of four at SDU, I led Study 3: the high-fidelity prototype and the usability test with real Alation users.",
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
          body: "Netnographic review plus an expert pass against Nielsen's 10 heuristics — confirming near-zero community activity and the UI issues behind it.",
        },
        {
          phase: "Study 03 — my focus",
          title: "Prototype & usability test",
          body: "Built the high-fidelity Figma prototype — Threads, a redesigned dashboard, clearer states — and tested it unmoderated in Maze.",
        },
        {
          phase: "Study 04",
          title: "Mixed-methods data",
          body: "Triangulated Maze behaviour (heat-maps, completion, time-on-task) with qualitative email responses, coded in NVivo.",
        },
        {
          phase: "Study 05",
          title: "Communities of Practice lens",
          body: "Framed it all through Wenger's Communities of Practice — UI alone can't manufacture a culture of sharing.",
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
        text: "It's not just ‘empty’ when I open it — I can see my colleagues are active, and I keep up with what Alation can do.",
        author: "Sydbank employee · usability test",
      },
      reflection: {
        intro:
          "The honest read: usability improved, but a single prototype can't create a community of practice on its own.",
        points: [
          "Half of participants didn't expect to use the features more — the gap is partly workflow and culture, not just interface.",
          "Non-anonymous responses risked social-desirability bias; I'd anonymise participation next time.",
          "With more time, I'd run a moderated before/after test for step-level insight.",
        ],
      },
      cover: {
        src: "/projects/p1-cover.png",
        alt: "Sydbank data catalog — New way to work with data",
      },
      features: [
        {
          title: "Threads",
          body: "A tag-driven discussion anchored to every table, query and article. Questions get asked in context and answers marked “Accepted” — so the next person finds a trusted resolution.",
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
          body: "Real-time feedback makes actions reversible and the UI feel tactile — WCAG-AA throughout.",
        },
      ],
      gallery: [
        {
          src: "/projects/p1-overview.png",
          alt: "Feature overview — new layout, threads, tags, ratings and navigation",
          caption: "System overview — the acknowledged UX patterns we built on.",
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
          caption: "Composing a thread — inline queries, code, images and @mentions.",
        },
      ],
    },
  },
  {
    id: "project-two",
    slug: "project-two",
    index: "02",
    title: "Project Two", // TODO: real project — details coming
    year: "2024",
    role: "Product Designer",
    summary:
      "A short, punchy one-liner on the outcome — what shipped and why it mattered. Full case study coming soon.",
    chips: [
      { label: "Web App", color: "orange" },
      { label: "0 → 1", color: "pink" },
      { label: "Research", color: "amber" },
    ],
    thumb: { variant: "browser", from: "#ff7a59", to: "#ff3d81", accent: "#1d1b16" },
  },
  {
    id: "project-three",
    slug: "project-three",
    index: "03",
    title: "Project Three", // TODO: real project — details coming
    year: "2024",
    role: "Product Designer",
    summary:
      "A short, punchy one-liner on the outcome — what shipped and why it mattered. Full case study coming soon.",
    chips: [
      { label: "Branding", color: "green" },
      { label: "Marketing Site", color: "blue" },
    ],
    thumb: { variant: "cards", from: "#10b981", to: "#0ea5e9", accent: "#ffe27a" },
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
    "Design is everywhere — in the flow of a good user journey, the texture of a ceramic cup, the rhythm of a well-composed song. My job is to turn complexity into experiences that feel just right.",
    "I work at the intersection of user needs, business goals, and technical reality: research, prototyping, and pixel-perfect interfaces, built systems-first with cross-functional teams. The details are where it all comes together.",
  ],
  education: [
    {
      school: "University of Southern Denmark",
      program: "MSc — Web Communication & Interaction Design",
      period: "2023 — 2025",
    },
    {
      school: "Business Academy Aarhus",
      program: "PBA — Digital Concept Development",
      period: "2019 — 2021",
    },
    {
      school: "IBA Erhvervsakademi Kolding",
      program: "AP — Multimedia Design",
      period: "2016 — 2018",
    },
  ],
  experience: [
    { role: "Digital Product Designer", org: "Trifork", period: "2025 — Now" },
    {
      role: "Digital Product Designer",
      org: "The LEGO Group",
      period: "2024 — 2025",
    },
    {
      role: "Product Design Intern",
      org: "Vipps MobilePay",
      period: "2024",
    },
    { role: "Digital Designer", org: "Hesehus", period: "2021 — 2023" },
    { role: "Digital Designer", org: "OPENING", period: "2021" },
  ],
};
