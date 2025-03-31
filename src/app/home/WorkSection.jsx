"use client";
import React from "react";
import SectionHead from "../components/secHead/SectionHead";
import UniversalBtn from "../components/buttons/UniversalBtn";
import WorkCard from "./work/workCard";
// import "swiper/css"; // Core Swiper styles
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
import { FiArrowUpRight } from "react-icons/fi";
import { InfiniteMovingCards } from "../components/movingCard/infiniteMovingCards";
import { useNavigate } from "../utils/navigation";

const WorkSection = () => {
  const navigate = useNavigate();
  const projects = [
    {
      image: "/images/project1.png", // Ensure the public folder in Next.js
      title: "Research Gains",
      link: "https://example.com/research-gains",
      desc: "This is a brief description of the project consectetur. Varius blandit facilisis egestas nulla tristique.  sit amet consectetur. blandit facilisis egestas sit amet consectetur facilisis egestas nulla consectetur.  blandit facilisis egestas nulla tristique. ",
    },
    {
      image: "/images/project2.gif",
      title: "Fyuur",
      link: "https://example.com/fyuur",
      desc: "This is a brief description of the project consectetur. Varius blandit facilisis egestas nulla tristique.  sit amet consectetur. blandit facilisis egestas sit amet consectetur facilisis egestas nulla consectetur.  blandit facilisis egestas nulla tristique.  ",
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
    // Add more projects here
  ];
  return (
    <>
      <div className="container-md">
        <SectionHead
          secHead1="WORK"
          secHead2="Selected projects"
          secDesc=" From product based teams and startups I’ve worked with"
        />
      </div>
      <InfiniteMovingCards
        items={projects}
        renderItem={(item, index) => (
          <WorkCard
            image={item.image}
            title={item.title}
            link={item.link}
            desc={item.desc}
            key={index}
          />
        )}
        itemWidth="600px" // Adjust to fit ~3 cards on your screen
        fadeEdges={false}
      />

      <div className="text-center" style={{ marginTop: "3.785rem" }}>
        <UniversalBtn onClick={() => navigate("/work")}>
          See my works <FiArrowUpRight className="ms-1" />
        </UniversalBtn>
      </div>
    </>
  );
};

export default WorkSection;
