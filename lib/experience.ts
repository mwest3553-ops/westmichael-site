import type { ExperienceRole, Project, TimelineEntry, SkillTag } from "./types";

export const experienceRoles: ExperienceRole[] = [
  {
    company: "Enterprise Mobility",
    title: "Business Development/Marketing Intern",
    startDate: "May 2026",
    endDate: "Present",
    location: "Maryland Heights, MO",
    bullets: [
      "Collaborated with a team of 10 interns in a startup program marketing Enterprise Mobility's car-sales business to a broader customer network, validating market demand to inform leadership's budget-allocation decisions.",
      "Presented workflow and process changes to senior leadership that were adopted, streamlining the sales cycle and directly increasing sales by 14%.",
      "Ranked #1 out of 10 interns for all-time customer engagements, averaging 700+ weekly touchpoints across target segments.",
      "Manage prospecting and pipeline across Salesforce, AWS WorkSpaces, and a custom CRM tracker I built to monitor engagements and conversion.",
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
      "Founded Westhird, a digital marketing agency delivering custom websites, brand strategy, and local search optimization for small businesses and trades — growing client organic web traffic by an average of 10% after launch.",
      "Execute the end-to-end sales funnel solo — prospecting a continually growing pipeline of local businesses and converting cold outreach into 4 signed clients within three weeks.",
      "Deliver campaigns that grow bookings, lead volume, and Google visibility, converting first-time clients into recurring monthly retainers.",
      "Manage operations end-to-end: client discovery, marketing strategy, design, development, and ongoing performance optimization.",
    ],
  },
  {
    company: "The Gatesworth",
    title: "Concierge",
    startDate: "Aug 2025",
    endDate: "Present",
    location: "University City, MO",
    bullets: [
      "Act as primary point of contact for 200+ residents and guests, resolving inquiries and client requests in real time.",
      "Coordinate reservations, transportation logistics, and resident events, applying project management across competing priorities.",
      "Manage daily package and mail distribution for 50+ items, tracking inventory in CRM-style logs to ensure on-time delivery across multiple floors.",
    ],
  },
  {
    company: "Rise Community Development",
    title: "Young Professionals Board — Marketing and Events Committee",
    startDate: "Jun 2026",
    endDate: "Present",
    location: "St. Louis, MO",
    bullets: [
      "Selected to the marketing committee of a St. Louis community-development nonprofit advancing equitable community revitalization.",
      "Developed the board's marketing and communications playbook, messaging guidelines, and brand positioning to grow membership, participation, and community partnerships.",
    ],
  },
  {
    company: "Keller Joseph Capital",
    title: "Co-Founder/Partner & Marketing Lead",
    startDate: "Jun 2026",
    endDate: "Present",
    location: "St. Louis, MO",
    bullets: [
      "Co-founded a private investment partnership; built the fund's website and a custom app tracker used to research and develop investment strategies for stronger ROI.",
      "Contribute to market research and portfolio strategy targeting specific return objectives — the fund has outperformed the S&P 500 and Nasdaq on total return since inception.",
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
    title: "Youth Development Professional & Membership Data Specialist",
    startDate: "Oct 2022",
    endDate: "Jan 2025",
    location: "St. Louis, MO",
    bullets: [
      "Led daily programming for 30+ youth members, building engagement through structured mentorship and activity leadership.",
      "Managed member registration database and analyzed attendance data in Excel, tracking enrollment trends that supported 15% program growth over two years.",
      "Marketed club programs to families and community members through outreach campaigns.",
    ],
  },
  {
    company: "St. Louis Sports Commission",
    title: "Marketing Intern",
    startDate: "Jul 2022",
    endDate: "Aug 2022",
    location: "St. Louis, MO",
    bullets: [
      "Conducted nominee research and selection analysis for the Musial Awards, a nationally televised ceremony.",
      "Researched youth engagement strategies and presented data-backed marketing recommendations to leadership.",
      "Attended executive board meetings, contributing youth engagement insights to senior leadership.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Independent Apparel Brand",
    description:
      "Founded and operate a self-funded apparel brand end-to-end — design, sourcing, and direct-to-consumer sales — generating four-figure revenue in its first month with no outside investment.",
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
    role: "B.S. in Marketing & Psychology",
    dates: "Expected May 2029",
    note: "University Scholarship Recipient",
  },
  {
    institution: "Enterprise Mobility",
    role: "Business Development/Marketing Intern",
    dates: "May 2026–Present",
    location: "Maryland Heights, MO",
  },
  {
    institution: "Westhird",
    url: "https://westhird.com",
    role: "Founder",
    dates: "May 2026–Present",
    location: "St. Louis, MO",
  },
  {
    institution: "The Gatesworth",
    role: "Concierge",
    dates: "Aug 2025–Present",
    location: "University City, MO",
  },
  {
    institution: "Saint Louis Public Schools",
    role: "Teacher Aide",
    dates: "Aug 2024–May 2025",
    location: "St. Louis, MO",
  },
  {
    institution: "Adams Park Boys & Girls Club",
    role: "Youth Development Professional & Membership Data Specialist",
    dates: "Oct 2022–Jan 2025",
    location: "St. Louis, MO",
  },
  {
    institution: "St. Louis Sports Commission",
    role: "Marketing Intern",
    dates: "Jul–Aug 2022",
    location: "St. Louis, MO",
  },
];

// Skills in Michael's order. category "business" renders under "Professional",
// "tech" under "Technical" (see HomeSkills.tsx / about/page.tsx CategoryHeader).
export const skills: SkillTag[] = [
  // Professional
  { label: "Business Development", category: "business" },
  { label: "B2B Sales", category: "business" },
  { label: "Lead Generation", category: "business" },
  { label: "Pipeline Management", category: "business" },
  { label: "Account Management", category: "business" },
  { label: "Market Research", category: "business" },
  { label: "Marketing Strategy", category: "business" },
  { label: "Brand Positioning", category: "business" },
  { label: "Cold Outreach", category: "business" },
  { label: "Negotiation", category: "business" },
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
  { label: "AI Application Development", category: "tech" },
];

export const businessSkills = skills.filter((s) => s.category === "business");
export const techSkills = skills.filter((s) => s.category === "tech");
