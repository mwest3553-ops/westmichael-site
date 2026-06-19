import type { ExperienceRole, Project, TimelineEntry, SkillTag } from "./types";

export const experienceRoles: ExperienceRole[] = [
  {
    company: "Enterprise Mobility",
    title: "Business Development/Marketing Intern",
    startDate: "May 2026",
    endDate: "Present",
    location: "Maryland Heights, MO",
    bullets: [
      "Selected for an Enterprise Mobility startup program focused on developing emerging talent in commercial business development, applying strategic thinking and business and customer insight to real-world sales operations.",
      "Conduct business insight research and competitive analysis in a fast-paced environment while working to identify process gaps, delivering data-backed recommendations that directly inform operational improvements.",
      "Translate customer insight into targeted prospecting and pipeline development for commercial accounts in the St. Louis market.",
      "Collaborate cross-functionally to surface inefficiencies and translate business and customer insight into strategic recommendations presented to leadership.",
    ],
  },
  {
    company: "Westhird",
    title: "Founder",
    startDate: "May 2026",
    endDate: "Present",
    location: "St. Louis, MO",
    bullets: [
      "Founded Westhird, a digital marketing agency for small businesses and local trades, building custom hand-coded websites and delivering full sites in 7 days starting at $450.",
      "Execute the complete sales cycle independently: cold outreach, discovery, audit delivery, live demo, and contract close through a structured consultative framework.",
      "Manage all operations end-to-end including client discovery, pricing strategy, design, development, and post-launch support.",
      "Build and maintain a pipeline of local business prospects, securing paid contracts through value-first selling and transparent pricing.",
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
      "Selected to the Marketing and Events Committee of the Young Professionals Board for a St. Louis community development nonprofit, supporting marketing and outreach for local economic development initiatives.",
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
      "Founded and operated an apparel brand managing the full business lifecycle. Generated $1,200 in revenue in the first month with no outside investment.",
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

// Skills ordered with most important first within each category.
// Business category emphasizes commercial work; Tech category emphasizes practical tooling.
export const skills: SkillTag[] = [
  // Business — ordered per Michael's spec
  { label: "Business Development", category: "business" },
  { label: "Sales and Marketing", category: "business" },
  { label: "Team Leadership", category: "business" },
  { label: "Strategic Thinking", category: "business" },
  { label: "Marketing Insights", category: "business" },
  { label: "Customer Research", category: "business" },
  { label: "CRM", category: "business" },
  { label: "Competitive Analysis", category: "business" },

  // Tech — certified credentials first, then others by importance
  { label: "Excel", certified: true, category: "tech" },
  { label: "Google Analytics", certified: true, category: "tech" },
  { label: "AI Tools", category: "tech" },
  { label: "Web Design", category: "tech" },
  { label: "Data Analysis", category: "tech" },
];

export const businessSkills = skills.filter((s) => s.category === "business");
export const techSkills = skills.filter((s) => s.category === "tech");
