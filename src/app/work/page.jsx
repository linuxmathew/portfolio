import SectionDivider from "../components/SectionDivider";
import SlashHead from "../components/slashHead/slashHead";
import WorkCard from "../home/work/workCard";
import { getAllProjects } from "./services/fetchAllProducts";

export default async function Work() {
  const projects = await getAllProjects();
  return (
    <>
      <div className="container-md" style={{ marginTop: "8rem" }}>
        <SlashHead
          headName="work"
          desc="From product based teams and startups I’ve worked with"
        />
        {projects && projects.length > 0 ? (
          <div className="row gy-5">
            {projects.map((item, index) => (
              <div className="col col-12 col-md-6" key={item.slug}>
                <WorkCard
                  image={item.image}
                  title={item.title}
                  slug={item.slug}
                  desc={item.desc}
                  addLink={true}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="work-page max-w-4xl mx-auto p-8 fw-bold">
            <p>No projects found.</p>
          </div>
        )}

        {/* <p>This page showcases my projects and accomplishments.</p> */}
      </div>
      <SectionDivider isDefault />
    </>
  );
}
