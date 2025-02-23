"use client";
import React from "react";
import SectionHead from "../components/secHead/SectionHead";
import UniversalBtn from "../components/buttons/UniversalBtn";
import { TfiArrowTopRight } from "react-icons/tfi";
import WorkCard from "./work/workCard";
import "swiper/css"; // Core Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const WorkSection = () => {
  const projects = [
    {
      image: "/images/project1.png", // Ensure the public folder in Next.js
      title: "Research Gains",
      link: "https://example.com/research-gains",
    },
    {
      image: "/images/project2.gif",
      title: "Fyuur",
      link: "https://example.com/fyuur",
    },
    {
      image: "/images/project3.png", // Ensure the public folder in Next.js
      title: "Research Gains",
      link: "https://example.com/research-gains",
    },
    {
      image: "/images/project4.png",
      title: "Fyuur",
      link: "https://example.com/fyuur",
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
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation={true}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <WorkCard
              image={project.image}
              title={project.title}
              link={project.link}
              key={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="row gx-3 gy-3 workSlide "> */}
      {/* <div
          className="col col-12 col-6"
          style={{
            border: "1px solid #aaaadd",
            borderRadius: "24px",
            height: "401px",
            // width: "503px",
          }}
        ></div> */}
      {/* <div
          className="col col-12 col-6"
          style={{
            border: "1px solid #aaaadd",
            borderRadius: "24px",
            height: "401px",
            // width: "503px",
          }}
        ></div>
        <div
          className="col col-12 col-6"
          style={{
            border: "1px solid #aaaadd",
            borderRadius: "24px",
            height: "401px",
            // width: "503px",
          }}
        ></div> */}
      {/* </div> */}
      <div className="text-center" style={{ marginTop: "3.785rem" }}>
        <UniversalBtn>
          See my works <TfiArrowTopRight className="ms-1" />
        </UniversalBtn>
      </div>
    </>
  );
};

export default WorkSection;
