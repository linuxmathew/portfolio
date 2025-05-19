import React from "react";

const SectionDivider = ({ style, isDefault }) => {
  return (
    <div
      style={
        isDefault
          ? {
              borderBottom: "1px solid var(--main-border-divider)",
              marginBottom: "4.25rem",
              marginTop: "4.25rem",
            }
          : style
      }
    ></div>
  );
};

export default SectionDivider;
