import Image from "next/image";
import React from "react";

const ContentHead = ({ icon, title }) => {
  return (
    <div className="d-flex align-items-end " style={{ marginBottom: "20px" }}>
      <span
        style={{
          color: "var(--icon-color)",
          marginRight: "13px",
        }}
      >
        <Image
          src={icon}
          alt=""
          width={32}
          height={32}
          className="hero-image"
        />
      </span>
      <span
        className=""
        style={{
          fontSize: "24px",
          fontWeight: "var(--font-weight-semiBold)",
          letterSpacing: "-0.9px",
        }}
      >
        {title}
      </span>
    </div>
  );
};

export default ContentHead;
