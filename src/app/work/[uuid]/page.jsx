import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import "./workpage.css";

const WorkPage = () => {
  return (
    <div className="container workpage-wrapper">
      <div className="d-flex align-items-center work-page-head">
        <p className="workpage-title">ResearchGains</p>
        <p className="live-site">
          Live site{" "}
          <span>
            <FiArrowUpRight className="work-page-icon" />
          </span>
        </p>
      </div>
      <div className="row">
        <div className="col">
          Led the design efforts for the mobile app & website, working closely
          with a with a fellow designer, the founder, and the engineering team.
        </div>
        <div className="col">weeks</div>
        <div className="col">Restful API, Node Js, React Js,</div>
      </div>
    </div>
  );
};

export default WorkPage;
