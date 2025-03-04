import React from "react";

const CoreTech = ({ skill }) => {
  return (
    <div
      className="d-flex align-items-center col-6 col-md-12"
      style={{ marginBottom: "20px" }}
    >
      <span
        style={{
          marginRight: "12px",
          height: "8px",
          width: "8px",
          backgroundColor: "var(--shoot-up-arrow)",
        }}
      ></span>
      <span
        className=""
        style={{
          fontSize: "18px",
          fontWeight: "var(--font-weight-regular)",
          color: "var(--text-color-neutral)",
        }}
      >
        {skill}
      </span>
    </div>
  );
};

export default CoreTech;
