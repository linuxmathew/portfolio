import React from "react";
import "./ExperienceWork.css";

const ExperienceWork = ({ key, companyName, location, title, date, works }) => {
  return (
    <div style={{ marginBottom: "3rem" }} key={key}>
      <div className="companyInfo">
        <span
          style={{
            fontWeight: "var(--font-weight-semiBold)",
            color: "var(--resume-headline)",
          }}
        >
          {companyName}
        </span>
        <span
          style={{
            color: "var(--text-color-neutral)",
            fontWeight: "var(--font-weight-regular)",
          }}
        >
          <span className="location"> | {location}</span> — {title}
        </span>
      </div>
      <div style={{ marginBottom: "23px" }}>
        <i className="expDate">{date}</i>
      </div>

      {works.map((work) => (
        <div className="workDescWrap" key={work.id}>
          <div
            className="d-flex align-items-start"
            style={{ marginBottom: "8px" }}
          >
            <span
              className="mt-2"
              style={{
                marginRight: "12px",
                height: "8px",
                width: "8px",
                backgroundColor: "var(--shoot-up-arrow)",
              }}
            ></span>
            <span className="descBody">{work.workDesc}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceWork;
