import React from "react";
import { FlipWords } from "./FlipWords";
import "./FlipWordSection.css";

const FlipWordSection = () => {
  return (
    <>
      <div className="flip-content">
        <div className="d-flex">
          <p className="mb-0">Build</p>
          <FlipWords
            className="flip-word"
            words={["better", "cute", "beautiful", "modern"]}
          />
        </div>
        <p>softwares with me</p>
      </div>
      <p className="flip-desc">
        Let’s turn bold ideas into delightful, user-friendly software that
        people truly love to use.
      </p>
    </>
  );
};

export default FlipWordSection;
