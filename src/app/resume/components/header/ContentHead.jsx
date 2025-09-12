import Image from "next/image";
import React from "react";
import "./ContentHead.css";

const ContentHead = ({ icon: Icon, title }) => {
  return (
    <div className="d-flex align-items-end " style={{ marginBottom: "20px" }}>
      <span
        style={{
          color: "var(--icon-color)",
          marginRight: "13px",
        }}
      >
        <Icon width={32} height={32} className="hero-image" />
      </span>
      <span
        className=""
        style={{
          fontSize: "24px",
          fontWeight: "var(--font-weight-semiBold)",
          letterSpacing: "0.24px",
          color: "var(--resume-headline)",
        }}
      >
        {title}
      </span>
    </div>
  );
};

export default ContentHead;
