import React from "react";
import SectionHead from "../../components/secHead/SectionHead";
import UniversalBtn from "../buttons/UniversalBtn";
import { TfiArrowTopRight } from "react-icons/tfi";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import "./letsWork.css";
import { FaXTwitter } from "react-icons/fa6";

const LetsWork = () => {
  return (
    <div className="container-md">
      <div className="row justify-content-between  align-items-center">
        <div className="col col-12 col-md-5 pe-0 pe-md-5 mb-5 mb-md-0">
          <SectionHead
            secHead2="Let’s work together"
            secDesc="Lorem ipsum ilisis egestas nulla tristique viverra in. Sit amet consectetur. Varius blandit facilisis egestas"
          />
          <div style={{ marginTop: "2rem" }}></div>
          <UniversalBtn>
            temfoden@gmail.com <TfiArrowTopRight className="ms-1" />
          </UniversalBtn>
        </div>
        <div className="col col-12 col-md-6 ms-0 ps-md-5">
          <div className="d-flex ">
            <span style={{ marginRight: "24px" }}>
              <UniversalBtn type="primary" fadeBorder>
                <span className="workWithMeBtn">
                  <FaLinkedin className=" workWithLeftIcon" />{" "}
                  <span className=" workWithMeText">Linkedin</span>
                  <FiArrowUpRight className="workWithRightIcon" />{" "}
                </span>
              </UniversalBtn>
            </span>
            <UniversalBtn type="primary" fadeBorder>
              <span className="workWithMeBtn">
                <FaXTwitter className=" workWithLeftIcon" />{" "}
                <span className=" workWithMeText">Twitter</span>
                <FiArrowUpRight className="workWithRightIcon" />{" "}
              </span>
            </UniversalBtn>
          </div>

          <div className="d-flex" style={{ marginTop: "26px" }}>
            <span style={{ marginRight: "24px" }}>
              <UniversalBtn type="primary" fadeBorder>
                <span className="workWithMeBtn">
                  <FaInstagram className=" workWithLeftIcon" />{" "}
                  <span className=" workWithMeText">Instagram</span>
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