import { groq } from "next-sanity";

export const allPostsQuery = groq`
  *[_type == "post" && published == true && defined(slug.current)]
    | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      excerpt,
      coverImage,
      tags,
    }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug && published == true][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    coverImage,
    tags,
    body,
  }
`;

export const allPostSlugsQuery = groq`
  *[_type == "post" && published == true && defined(slug.current)].slug.current
`;
