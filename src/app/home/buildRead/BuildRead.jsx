"use client";
import React from "react";
import "./BuildRead.css";
import BuildReadComponent from "./BuildReadComponent";
import { useNavigate } from "../../../app/utils/navigation";

const BuildRead = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="mb-0 d-none d-md-block"
        style={{
          borderTop: "1px solid #aaaadd",
          marginTop: "5.125rem",
        }}
      ></div>

      <div className="container-md two-column-section">
        <div className="column column-left">
          <BuildReadComponent
            imgPath="/images/buildlap.svg"
            imgAlt="laptop"
            beforeBreak="I build &"
            afterBreak="Design stuff"
            desc="I design with the entire software development lifecycle in mind,
        combining creativity and problem-solving to build thoughtful, lasting
        solutions. With a background in computer engineering, I enjoy turning
        complex challenges into seamless experiences."
            btnText="See my work"
            btnRoute="/work"
            onClick={() => navigate("/work")}
          />
        </div>
        <div className="column column-right">
          <BuildReadComponent
            imgPath="/images/quillwrite.svg"
            imgAlt="write"
            beforeBreak="I write,"
            afterBreak="sometimes"
            desc="Apart from designing, I enjoy putting my thoughts into words. I share insights on design, development, and the behind-the-scenes intricacies of the web, exploring not just the how, but the why, in crafting seamless digital experiences."
            btnText="Read my articles"
            btnRoute="/shelf"
            onClick={() => navigate("/shelf")}
          />
        </div>
      </div>
      <div
        className="mt-0 d-none d-md-block"
        style={{
          borderTop: "1px solid #aaaadd",
          marginBottom: "5.125rem",
        }}
      ></div>
    </>
  );
};

export default BuildRead;
