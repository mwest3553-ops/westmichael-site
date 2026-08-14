// Skills mapped to the roles that prove them — powers the interactive
// "tap a skill to see where I've done it" section. Data + categories match
// the design UI/UX mockup exactly.

export interface Skill {
  label: string;
  certified?: boolean;
  orgs: string[];
}

export interface SkillCategory {
  label: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Marketing",
    skills: [
      { label: "Brand Strategy & Positioning", orgs: ["Westhird", "Rise YP", "Keller Joseph"] },
      { label: "Campaign Management", orgs: ["Westhird", "Rise YP"] },
      {
        label: "Market Research & Consumer Insights",
        orgs: ["Enterprise Mobility", "Keller Joseph", "STL Sports Commission"],
      },
      { label: "Digital Marketing", orgs: ["Westhird", "Keller Joseph"] },
      { label: "SEO & Local Search", orgs: ["Westhird"] },
      { label: "Email & Social Media Marketing", orgs: ["Enterprise Mobility", "Westhird"] },
      { label: "Content Creation", orgs: ["Westhird", "Rise YP"] },
      { label: "Copywriting & Messaging", orgs: ["Rise YP", "Enterprise Mobility", "Westhird"] },
      { label: "Lead Generation", orgs: ["Enterprise Mobility", "Westhird"] },
    ],
  },
  {
    label: "Analytics & Tools",
    skills: [
      { label: "Google Analytics", certified: true, orgs: ["Westhird", "Keller Joseph"] },
      {
        label: "Microsoft Excel",
        certified: true,
        orgs: ["Enterprise Mobility", "Boys & Girls Club", "Keller Joseph"],
      },
      { label: "Salesforce & CRM", orgs: ["Enterprise Mobility"] },
      {
        label: "Marketing / Data Analysis",
        orgs: ["Enterprise Mobility", "Keller Joseph", "Boys & Girls Club"],
      },
      { label: "A/B Testing", orgs: ["Enterprise Mobility"] },
      { label: "PowerPoint", orgs: ["Enterprise Mobility", "Rise YP"] },
    ],
  },
  {
    label: "Professional",
    skills: [
      { label: "Business Development", orgs: ["Enterprise Mobility", "Westhird"] },
      { label: "Client Relations", orgs: ["Westhird", "The Gatesworth"] },
      { label: "Cold Outreach", orgs: ["Westhird", "Enterprise Mobility"] },
      { label: "Negotiation", orgs: ["Westhird", "Keller Joseph"] },
      { label: "Project Management", orgs: ["Westhird", "Rise YP", "The Gatesworth"] },
      {
        label: "Leadership",
        orgs: ["Enterprise Mobility", "Keller Joseph", "Rise YP", "Boys & Girls Club"],
      },
    ],
  },
];
