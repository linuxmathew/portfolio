"use client";
import React from "react";
import { TbFileDownload } from "react-icons/tb";
import "./styles/floatingBtn.css";

function FloatingButton({ url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }} // optional, to remove link underline
    >
      <button className="floatBtn">
        <TbFileDownload className="resume-float-icon" />
      </button>
    </a>
  );
}

export default FloatingButton;
