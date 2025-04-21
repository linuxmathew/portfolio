import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  throw new Error("SANITY_PROJECT_ID is not defined in .env.local");
}

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-05-03",
  useCdn: true,
  // token: process.env.SANITY_API_TOKEN, // Uncomment if using a token
});

const builder = imageUrlBuilder(sanityClient);
export function urlFor(source: any) {
  return builder.image(source);
}
