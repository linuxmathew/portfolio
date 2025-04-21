"use client";

import React from "react";
import UniversalBtn from "../../components/buttons/UniversalBtn";
import { FiArrowUpRight } from "react-icons/fi";

const DemoButton = ({ demoUrl }) => {
  const handleDemoClick = () => {
    if (demoUrl) {
      window.open(demoUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <UniversalBtn type="primary" onClick={handleDemoClick}>
      Live site
      <FiArrowUpRight className="work-page-icon" />
    </UniversalBtn>
  );
};

export default DemoButton;
