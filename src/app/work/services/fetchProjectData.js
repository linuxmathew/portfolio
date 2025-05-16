import { sanityClient } from "../../../lib/sanity";

// Fetch all project slugs for generateStaticParams
export async function getProjectSlugs() {
  // console.log("incoming1");
  try {
    const projects = await sanityClient.fetch(
      `*[_type == "project" && defined(slug.current)][]{
            "slug": slug.current
          }`
    );
    return projects.map((project) => ({ slug: project.slug }));
  } catch (error) {
    console.error("Error fetching project slugs:", error);
    return [];
  }
}

// Fetch a single project by slug
export async function getProjectBySlug(slug) {
  if (!slug || typeof slug !== "string" || slug.trim() === "") {
    return null;
  }
  try {
    const project = await sanityClient.fetch(
      `*[_type == "project" && slug.current == $slug][0]{
              title,
              slug,
              description,
              technologies,
              "image": image.asset->url,
              images[]{
              "url": asset->url,
              alt
              },
              role,
              timeline,
              year,
              demoUrl
            }`,
      { slug }
    );
    return project;
  } catch (error) {
    console.error(`Error fetching project with slug "${slug}":`, error);
    return null;
  }
}

export async function getAllProjectsNavigation() {
  const query = `*[_type == "project" && defined(slug.current)] | order(createdAt desc){
    "slug": slug.current,
    title
  }`;
  return await sanityClient.fetch(query);
}
