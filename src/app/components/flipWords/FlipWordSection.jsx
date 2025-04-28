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
        Lorem ipsum ilisis egestas nulla tristique viverra in. Sit amet
        consectetur. Varius blandit facilisis egestas
      </p>
    </>
  );
};

export default FlipWordSection;
