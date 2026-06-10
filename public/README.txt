PUBLIC ASSET NOTES — michaelwest-site
======================================

Drop your real files into this folder before deploying:

1. resume.pdf
   Currently a placeholder. Replace with your actual PDF résumé.
   The Experience page has a "Download PDF" button that links to /resume.pdf.

2. images/profile.jpg
   Drop a headshot here (1:1 ratio, at least 800×800 recommended).
   Not currently referenced — add to the About page if/when you want it.

3. images/og-default.png
   1200×630 image used as the default OpenGraph preview when someone shares
   your homepage to LinkedIn. Will look like a generic gradient until you add it.

4. images/blog/
   Cover images for blog posts. 16:9 ratio recommended (e.g., 1600×900).
   Each post's frontmatter `coverImage` field should be a path like:
     coverImage: "/images/blog/your-post-cover.jpg"

   The sample post references /images/blog/discovery-call-cover.jpg — drop one in
   or it'll render as a styled placeholder (still looks fine).
