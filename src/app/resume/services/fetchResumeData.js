import { sanityClient } from "../../../lib/sanity";

export async function getResumeData() {
  try {
    const resumeData = await sanityClient.fetch(`*[_type == "resume"][0]{
      title,
      description,
      experiences[]{
        role,
        company,
        period,
        location,
        description
      },
       "pdfUrl": pdf.asset->url
    }`);
    return resumeData;
  } catch (err) {
    console.error("Error fetching Resume data", err);
    return [];
  }
}
