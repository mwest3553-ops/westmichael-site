import type { ExperienceRole, Project, TimelineEntry, SkillTag } from "./types";

export const experienceRoles: ExperienceRole[] = [
  {
    company: "Enterprise Mobility",
    title: "Business Development / Marketing Intern",
    startDate: "May 2026",
    endDate: "Aug 2026",
    location: "Maryland Heights, MO",
    bullets: [
      "Validated market demand for new customer segments in Enterprise Mobility's car-sales business, informing leadership's budget-allocation decisions within a 10-intern startup program.",
      "Pitched messaging and process changes adopted by senior leadership, streamlining the sales cycle and helping increase sales by 14%.",
      "Ranked #1 of 10 interns in customer engagement, averaging 700+ weekly touchpoints.",
      "Managed lead pipeline and prospect data in Salesforce, tracking engagement-to-conversion at every stage of the funnel.",
    ],
  },
  {
    company: "Westhird",
    url: "https://westhird.com",
    title: "Founder",
    startDate: "May 2026",
    endDate: "Present",
    location: "St. Louis, MO",
    bullets: [
      "Founded a digital marketing agency delivering brand strategy, custom websites, and local search optimization for small businesses and trades.",
      "Prospect local businesses through cold outreach, booking 4 qualified discovery calls.",
      "Run end-to-end campaigns spanning brand positioning, web design, and local SEO to grow client visibility, bookings, and inbound leads.",
      "Delivered a full brand and website build for Keller Joseph Capital that converted into a co-founding role, plus a branded client portal and admin dashboard for real-time project tracking.",
    ],
    summary: [
      "Founded a digital marketing agency delivering brand strategy, custom websites, and local SEO for small businesses and trades.",
      "Run campaigns end to end, from positioning to web design, growing client visibility, bookings, and inbound leads.",
      "A full brand and web build for Keller Joseph Capital turned into a co-founding role.",
    ],
  },
  {
    company: "The Gatesworth",
    title: "Concierge",
    startDate: "Aug 2025",
    endDate: "Present",
    location: "University City, MO",
    bullets: [
      "Serve as primary point of contact for 200+ residents and guests, coordinating events and building the relationships behind loyalty and retention.",
    ],
    summary: [
      "Primary point of contact for 200+ residents and guests, coordinating events and building the relationships behind retention.",
    ],
  },
  {
    company: "Rise Young Professionals Board",
    title: "Marketing Committee",
    startDate: "May 2026",
    endDate: "Present",
    location: "St. Louis, MO",
    bullets: [
      "Develop the marketing and communications playbook, messaging guidelines, and brand positioning for a community-development nonprofit to grow membership, participation, and partnerships.",
    ],
    summary: [
      "Build the marketing and communications playbook and brand positioning for a community-development nonprofit.",
    ],
  },
  {
    company: "Keller Joseph Capital",
    title: "Co-Founder / Partner & Marketing Lead",
    startDate: "Jun 2026",
    endDate: "Present",
    location: "St. Louis, MO",
    bullets: [
      "Lead marketing for a co-founded private investment partnership, building the brand, visual identity, website, and investor-facing messaging from the ground up.",
      "Conduct market and competitive research that shapes positioning, strategy, and communications.",
    ],
  },
  {
    company: "Saint Louis Public Schools",
    title: "Teacher Aide",
    startDate: "Aug 2024",
    endDate: "May 2025",
    location: "St. Louis, MO",
    bullets: [
      "Assisted classroom teacher with lesson preparation and instructional materials for 5th grade students.",
      "Supervised students during activities, transitions, and lunch periods.",
      "Graded assignments, maintained student records, and prepared classroom materials.",
    ],
  },
  {
    company: "Adams Park Boys & Girls Club",
    title: "Youth Development & Membership Data Specialist",
    startDate: "Oct 2022",
    endDate: "Jan 2025",
    location: "St. Louis, MO",
    bullets: [
      "Managed the membership database and analyzed 150+ weekly attendance logs in Excel, surfacing enrollment trends that supported 15% program growth.",
      "Led daily programming for 30+ youth members through structured mentorship and activity leadership.",
    ],
  },
  {
    company: "St. Louis Sports Commission",
    title: "Marketing Intern",
    startDate: "Jun 2022",
    endDate: "Aug 2022",
    location: "St. Louis, MO",
    bullets: [
      "Reviewed 40+ nominee profiles for the Musial Awards, a nationally televised sportsmanship ceremony, and presented data-backed marketing recommendations to leadership.",
      "Researched youth-engagement strategies to inform outreach and audience-growth initiatives.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Independent Apparel Brand",
    description:
      "Founded and operate a self-funded apparel brand end-to-end (design, sourcing, and direct-to-consumer sales), generating four-figure revenue in its first month with no outside investment.",
  },
  {
    name: "AI-Powered Business Tools",
    description:
      "Designed and built AI-powered tools for business operations and wellness use cases, taking each from concept to working prototype.",
  },
];

export const timeline: TimelineEntry[] = [
  {
    institution: "Saint Louis University",
    role: "B.S. in Marketing & Psychology, Richard A. Chaifetz School of Business",
    dates: "2025 – 2029",
    location: "St. Louis, MO",
  },
  {
    institution: "Westhird",
    url: "https://westhird.com",
    role: "Founder",
    dates: "Since May 2026",
    location: "St. Louis, MO",
  },
  {
    institution: "Enterprise Mobility",
    role: "Business Development / Marketing Intern",
    dates: "May – Aug 2026",
    location: "Maryland Heights, MO",
  },
  {
    institution: "The Gatesworth",
    role: "Concierge",
    dates: "Since Aug 2025",
    location: "University City, MO",
  },
  {
    institution: "Saint Louis Public Schools",
    role: "Teacher Aide",
    dates: "2024 – 2025",
    location: "St. Louis, MO",
  },
  {
    institution: "Adams Park Boys & Girls Club",
    role: "Youth Development & Membership Data Specialist",
    dates: "2022 – 2025",
    location: "St. Louis, MO",
  },
  {
    institution: "St. Louis Sports Commission",
    role: "Marketing Intern",
    dates: "Summer 2022",
    location: "St. Louis, MO",
  },
];

// Skills in Michael's order. category "business" renders under "Professional",
// "tech" under "Technical" (see HomeSkills.tsx / about/page.tsx CategoryHeader).
export const skills: SkillTag[] = [
  // Professional — marketing-first
  { label: "Marketing Strategy", category: "business" },
  { label: "Brand Positioning", category: "business" },
  { label: "Market Research", category: "business" },
  { label: "Lead Generation", category: "business" },
  { label: "Business Development", category: "business" },
  { label: "Client Relations", category: "business" },
  { label: "Project Management", category: "business" },
  { label: "Leadership", category: "business" },

  // Technical
  { label: "Google Analytics", certified: true, category: "tech" },
  { label: "Microsoft Excel", certified: true, category: "tech" },
  { label: "Salesforce & CRM Tools", category: "tech" },
  { label: "Data Analysis", category: "tech" },
  { label: "SEO & Local Search", category: "tech" },
  { label: "Email & Social Media Marketing", category: "tech" },
  { label: "PowerPoint", category: "tech" },
  { label: "Word", category: "tech" },
];

export const businessSkills = skills.filter((s) => s.category === "business");
export const techSkills = skills.filter((s) => s.category === "tech");
