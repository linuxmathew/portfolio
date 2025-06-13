import React from "react";
import "./Resume.css";
import InfoComponent from "./components/info/infoComponent";
import Headline from "./components/headline/Headline";
import ResumeDivider from "./components/Divider";
import { CiGlobe, CiLocationOn } from "react-icons/ci";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { SlPhone } from "react-icons/sl";
import ContentHead from "./components/header/ContentHead";
import CoreTech from "./components/coreTech/CoreTech";
import EducationSection from "./components/education/education";
import ExperienceWork from "./components/experience/ExperienceWork";
import {
  coreTechArr,
  eduArr,
  experienceArr,
} from "../../../public/data/resumeData";
import Link from "next/link";
import FloatingButton from "./components/floatingBtn";
import { getResumeData } from "./services/fetchResumeData";

const Resume = async () => {
  const resume = await getResumeData();
  const { title = "", experiences = [], pdfUrl = "" } = resume;
  const desc = resume.description[0].children[0].text;

  if (!resume) {
    return <div>No resume data found</div>;
  }
  return (
    <>
      <div className="two-column-section2">
        <div className="column2 column-left2">
          <div className="container-md infoSection">
            <div className="row" style={{ paddingTop: "15px" }}>
              <InfoComponent text="tayoafolabi.dev" icon={CiGlobe} />
              <InfoComponent
                text="temfoden@gmail.com"
                icon={HiOutlineEnvelope}
              />
              <InfoComponent text="+234 7067001568" icon={SlPhone} />
              <InfoComponent text="Ibadan, Nigeria" icon={CiLocationOn} />
            </div>
          </div>
          <ResumeDivider />
          <div className="container-md infoSection">
            <ContentHead
              icon="/images/code-square.svg"
              title="Core Technologies"
            />
            <div className="row" style={{}}>
              {coreTechArr.map((arr, index) => (
                <CoreTech skill={arr} key={index} />
              ))}
            </div>
          </div>
          <ResumeDivider />
          <div className="container-md infoSection">
            <ContentHead icon="/images/graduation-hat.svg" title="Education" />
            {eduArr.map((edu, index) => (
              <EducationSection
                key={index}
                course={edu.course}
                school={edu.school}
                date={edu.date}
              />
            ))}
          </div>
        </div>
        <div className="column2 column-right2">
          <Headline title={title} description={desc} />
          <ResumeDivider />
          <div className=" headline container-md ">
            <ContentHead icon="/images/briefcase-02.svg" title="Experience" />
            {experiences.map((exp, index) => (
              <ExperienceWork
                key={index}
                companyName={exp.company}
                location={exp.location}
                title={exp.role}
                date={exp.period}
                works={exp.description}
              />
            ))}

            <ContentHead icon="/images/terminal-browser.svg" title="Projects" />
            <p className="projectDesc">
              Links to some of my work can be found on{" "}
              <Link href="/work">temitayoh.dev/work</Link> and details can be
              provided upon request via a scheduled demo call.
            </p>
          </div>
        </div>
      </div>
      <div
        className="mt-0  d-md-block"
        style={{
          borderTop: "1px solid var(--main-border-divider)",
          marginBottom: "5.125rem",
        }}
      ></div>
      <FloatingButton url={pdfUrl} />
    </>
  );
};

export default Resume;
