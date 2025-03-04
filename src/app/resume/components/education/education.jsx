import React from "react";

const EducationSection = () => {
  return (
    <div>
      <p
        style={{
          fontSize: "20px",
          fontWeight: "var(--font-weight-semiBold)",
          letterSpacing: "-0.2px",
          color: "var(--text-color)",
          marginBottom: "8px",
        }}
      >
        BSC. Computer Engineering
      </p>
      <p
        style={{
          color: "var(--text-color-neutral)",
          fontSize: "18px",
          fontWeight: "var( --font-weight-regular)",
          marginBottom: "8px",
        }}
      >
        Obafemi Awolowo University
      </p>
      <i style={{ fontSize: "18px", color: "var(--shoot-up-arrow)" }}>
        Sep 2017 - Dec 2022
      </i>
    </div>
  );
};

export default EducationSection;
