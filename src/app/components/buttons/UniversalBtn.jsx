import React from "react";
import styles from "./UniversalBtn.module.css";

const UniversalBtn = ({
  type = "default",
  children,
  onClick,
  fadeBorder = "",
}) => {
  const className = `${styles["universal-btn"]} ${
    type === "primary" ? styles.primary : ""
  }`;

  return (
    <button
      className={className}
      onClick={onClick}
      style={{ border: fadeBorder ? "1px solid #C6C6D7" : "" }}
    >
      {children}
    </button>
  );
};

export default UniversalBtn;
