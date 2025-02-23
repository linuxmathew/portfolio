import React from "react";
import "./infoComponent.css";

const InfoComponent = ({ text, icon: Icon }) => {
  return (
    <div
      className="d-flex align-items-end col-6 col-md-12"
      style={{ marginBottom: "20px" }}
    >
      <span
        style={{
          color: "var(--icon-color)",
          marginRight: "8px",
        }}
      >
        {Icon && <Icon className="infoIcon" />}
      </span>
      <span className="infoText">{text}</span>
    </div>
  );
};

// <CiGlobe style={{width: "24px",
//   height: "24px",}}   />
//  <FaRegEnvelope />
//  <CiLocationOn />

export default InfoComponent;
