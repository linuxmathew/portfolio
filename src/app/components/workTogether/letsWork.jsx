import React from "react";
import SectionHead from "../../components/secHead/SectionHead";
import UniversalBtn from "../buttons/UniversalBtn";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import "./letsWork.css";
import { FaXTwitter } from "react-icons/fa6";
import FlipWordSection from "../flipWords/FlipWordSection";

const LetsWork = () => {
  return (
    <div className="container-md">
      <div className="row justify-content-between  align-items-center">
        <div className="col col-12 col-lg-5 pe-0 pe-lg-5 mb-5 mb-lg-0">
          <FlipWordSection />
          <div style={{ marginTop: "2rem" }}></div>
          <UniversalBtn>
            temfoden@gmail.com <FiArrowUpRight className="ms-1" />
          </UniversalBtn>
        </div>
        <div className="col col-12 col-lg-6 ms-0 ps-lg-5">
          <div className="d-flex ">
            <span style={{ marginRight: "24px" }}>
              <UniversalBtn type="primary" fadeBorder>
                <span className="workWithMeBtn">
                  <FaLinkedin className=" workWithLeftIcon" />{" "}
                  <span className="workWithMeText">Linkedin</span>
                  <FiArrowUpRight className="workWithRightIcon" />{" "}
                </span>
              </UniversalBtn>
            </span>
            <UniversalBtn type="primary" fadeBorder>
              <span className="workWithMeBtn">
                <FaXTwitter className=" workWithLeftIcon" />{" "}
                <span className="workWithMeText">Twitter</span>
                <FiArrowUpRight className="workWithRightIcon" />{" "}
              </span>
            </UniversalBtn>
          </div>

          <div className="d-flex" style={{ marginTop: "26px" }}>
            <span style={{ marginRight: "24px" }}>
              <UniversalBtn type="primary" fadeBorder>
                <span className="workWithMeBtn">
                  <FaInstagram className=" workWithLeftIcon" />{" "}
                  <span className="workWithMeText">Instagram</span>
                  <FiArrowUpRight className="workWithRightIcon" />{" "}
                </span>
              </UniversalBtn>
            </span>
            <UniversalBtn type="primary" fadeBorder>
              <span className="workWithMeBtn">
                <FaGithub className=" workWithLeftIcon" />{" "}
                <span className=" workWithMeText">Github</span>
                <FiArrowUpRight className="workWithRightIcon" />{" "}
              </span>
            </UniversalBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsWork;
