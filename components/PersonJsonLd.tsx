import { siteConfig } from "@/lib/config";

/**
 * Person structured data (JSON-LD). Helps search engines and AI tools
 * understand who Michael is, where he studies, and what he's founded.
 * Rendered once site-wide from the root layout.
 */
export default function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    email: `mailto:${siteConfig.email}`,
    description:
      "Marketing & Psychology student at Saint Louis University; founder of Westhird and co-founder of Keller Joseph Capital.",
    knowsAbout: [
      "Marketing strategy",
      "Consumer psychology",
      "Business development",
      "Brand strategy",
      "Digital marketing",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Saint Louis University",
      department: "Richard A. Chaifetz School of Business",
    },
    founder: [
      { "@type": "Organization", name: "Westhird", url: "https://westhird.com" },
      {
        "@type": "Organization",
        name: "Keller Joseph Capital",
        url: "https://kellerjosephcapital.com",
      },
    ],
    sameAs: [siteConfig.linkedIn],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
