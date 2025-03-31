import SlashHead from "../components/slashHead/slashHead";
import WorkCard from "../home/work/workCard";

export default function Work() {
  const projects = [
    {
      image: "/images/project1.png", // Ensure the public folder in Next.js
      title: "Research Gains",
      link: "https://example.com/research-gains",
      desc: "This is a brief description of the project consectetur. Varius blandit facilisis egestas nulla tristique.  sit amet consectetur. blandit facilisis egestas sit amet consectetur facilisis egestas nulla consectetur.  blandit facilisis egestas nulla tristique. ",
    },

    {
      image: "/images/project3.png", // Ensure the public folder in Next.js
      title: "Research Gains",
      link: "https://example.com/research-gains",
      desc: "This is a brief description of the project consectetur. Varius blandit facilisis egestas nulla tristique.  sit amet consectetur. blandit facilisis egestas sit amet consectetur facilisis egestas nulla consectetur.  blandit facilisis egestas nulla tristique.  ",
    },
    {
      image: "/images/project4.png",
      title: "Fyuur",
      link: "https://example.com/fyuur",
      desc: "This is a brief description of the project consectetur. Varius blandit facilisis egestas nulla tristique.  sit amet consectetur. blandit facilisis egestas sit amet consectetur facilisis egestas nulla consectetur.  blandit facilisis egestas nulla tristique.  ",
    },
    {
      image: "/images/project2.gif",
      title: "Fyuur",
      link: "https://example.com/fyuur",
      desc: "This is a brief description of the project consectetur. Varius blandit facilisis egestas nulla tristique.  sit amet consectetur. blandit facilisis egestas sit amet consectetur facilisis egestas nulla consectetur.  blandit facilisis egestas nulla tristique.  ",
    },
    // Add more projects here
  ];
  return (
    <div className="container-md" style={{ marginTop: "8rem" }}>
      <SlashHead
        headName="work"
        desc="From product based teams and startups I’ve worked with"
      />

      <div className="row gy-3">
        {projects.map((item, index) => (
          <div className="col col-12 col-md-6">
            <WorkCard
              image={item.image}
              title={item.title}
              link={item.link}
              desc={item.desc}
              key={index}
            />
          </div>
        ))}
      </div>
      {/* <p>This page showcases my projects and accomplishments.</p> */}
    </div>
  );
}
