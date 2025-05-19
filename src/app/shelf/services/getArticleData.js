import { sanityClient } from "../../../lib/sanity";

export async function getArticleBySlug(slug) {
  console.log("incoming", slug);
  if (!slug || typeof slug !== "string" || slug.trim() === "") {
    return null;
  }
  try {
    console.log("incoming2", slug);
    const article = await sanityClient.fetch(
      `*[_type =="article" && slug.current == $slug ][0]
      {
      title, 
      content, 
      slug, 
      publishedAt, 
      readTime, 
      tip, 
      "image": image.asset->url
      }
      `,
      { slug }
    );

    return article;
  } catch (err) {
    console.error("Error fetching article with slugs:", err);
    return null;
  }
}
