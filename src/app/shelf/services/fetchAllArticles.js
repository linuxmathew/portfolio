import { sanityClient } from "../../../lib/sanity";

export async function getAllArticles() {
  try {
    const articles = await sanityClient.fetch(
      `*[_type == "article" && defined(slug.current)] | order(publishedAt desc){
            title,
            "slug": slug.current,
            "image": image.asset->url,
            publishedAt,
            readTime,
            excerpt, 
            tip
            }`
    );
    // console.log("incoming articles", articles);
    return articles;
  } catch (error) {
    console.error("Error fetching all articles:", error);
    return [];
  }
}
