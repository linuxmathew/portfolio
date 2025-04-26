"use client";
import React from "react";
import { TbFileDownload } from "react-icons/tb";
import "./styles/floatingBtn.css";

function FloatingButton() {
  const handleResumeDownload = () => {
    console.log("resume downloaded");
  };
  return (
    <button className="floatBtn" onClick={handleResumeDownload}>
      <TbFileDownload className="resume-float-icon" />
    </button>
  );
}

export default FloatingButton;
