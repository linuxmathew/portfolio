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

const Resume = () => {
  const coreTechArr = [
    "Javascript",
    "ReactJs",
    "NodeJs",
    "Flask",
    "Sanity",
    "Bootstrap",
    "MaterialUI",
    "ElectronJs",
  ];
  return (
    <>
      {/* <div
        className="mb-0 d-none d-md-block "
        style={{
          borderTop: "1px solid #aaaadd",
          marginTop: "5.125rem",
        }}
      ></div> */}

      <div className=" two-column-section2">
        <div className="column2 column-left2">
          <div className="container-md infoSection">
            <div className="row" style={{ paddingTop: "15px" }}>
              <InfoComponent text="tayoafolabi.dev" icon={CiGlobe} />
              <InfoComponent
                text="temfoden@gmail.com"
                icon={HiOutlineEnvelope}
              />
              <InfoComponent text="+234 706 700 1568" icon={SlPhone} />
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
              {coreTechArr.map((arr) => (
                <CoreTech skill={arr} />
              ))}
            </div>
          </div>
          <ResumeDivider />
          <div className="container-md infoSection">
            <ContentHead icon="/images/graduation-hat.svg" title="Education" />
            <EducationSection />
          </div>
        </div>
        <div className="column2 column-right2">
          <Headline />
          <ResumeDivider />
        </div>
      </div>
      <div
        className="mt-0 d-none d-md-block"
        style={{
          borderTop: "1px solid #aaaadd",
          marginBottom: "5.125rem",
        }}
      ></div>
    </>
  );
};

export default Resume;
