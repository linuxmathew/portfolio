import { sanityClient } from "../../../lib/sanity";
// Fetch all projects for the list page
export async function getAllProjects() {
  try {
    const projects = await sanityClient.fetch(
      `*[_type == "project" && defined(slug.current)] | order(year desc){
          title,
          "slug": slug.current,
          "image": image.asset->url,
          role,
          year
        }`
    );
    return projects;
  } catch (error) {
    console.error("Error fetching all projects:", error);
    return [];
  }
}
