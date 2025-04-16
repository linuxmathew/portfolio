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
        <div className="col col-12 col-md-5">
          <p
            className="text-muted"
            style={{
              fontSize: "12px",
              fontWeight: "var(--font-weight-medium)",
            }}
          >
            ROLE/TEAM
          </p>
          <p
            className="role-title-desc"
            style={{
              fontWeight: "var(--font-weight-regular)",
              fontSize: "16px",
              color: "var(--resume-headline)",
            }}
          >
            Led the design efforts for the mobile app & website, working closely
            with a with a fellow designer, the founder, and the engineering
            team.
          </p>
        </div>
        <div className="project-timeline col col-12 col-md-3">
          <p
            className="text-muted"
            style={{
              fontSize: "12px",
              fontWeight: "var(--font-weight-medium)",
            }}
          >
            TIMELINE
          </p>
          <p
            style={{
              fontWeight: "var(--font-weight-regular)",
              fontSize: "16px",
              color: "var(--resume-headline)",
            }}
          >
            weeks
          </p>
          <p
            style={{
              fontWeight: "var(--font-weight-regular)",
              fontSize: "16px",
              color: "var(--resume-headline)",
            }}
          >
            Year: June 2022
          </p>
        </div>
        <div className="col col-12 col-md-4 ">
          <p
            className="text-muted"
            style={{
              fontSize: "12px",
              fontWeight: "var(--font-weight-medium)",
            }}
          >
            TOOLS USED
          </p>
          <p
            style={{
              fontWeight: "var(--font-weight-regular)",
              fontSize: "16px",
              color: "var(--resume-headline)",
            }}
          >
            Restful API, Node Js, React Js,
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
