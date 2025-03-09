import React from "react";

const EducationSection = ({ course, school, date }) => {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <p
        style={{
          fontSize: "20px",
          fontWeight: "var(--font-weight-semiBold)",
          letterSpacing: "-0.2px",
          color: "var(--text-color)",
          marginBottom: "8px",
        }}
      >
        {course}
      </p>
      <p
        style={{
          color: "var(--text-color-neutral)",
          fontSize: "18px",
          fontWeight: "var( --font-weight-regular)",
          marginBottom: "8px",
        }}
      >
        {school}
      </p>
      <i style={{ fontSize: "18px", color: "var(--shoot-up-arrow)" }}>{date}</i>
    </div>
  );
};

export default EducationSection;
