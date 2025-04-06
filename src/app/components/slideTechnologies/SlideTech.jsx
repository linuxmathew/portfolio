"use client";
import React from "react";
import { InfiniteMovingCards } from "../movingCard/infiniteMovingCards";
import TechTool from "./techTool";

const SlideTech = () => {
  const arr = [
    { tool: "CSS", iconName: "BiSolidFileCss" },
    { tool: "python", iconName: "FaPython" },
    { tool: "Javascript", iconName: "IoLogoJavascript" },
    { tool: "Flask", iconName: "SiFlask" },
    { tool: "NodeJs", iconName: "FaNodeJs" },
    { tool: "Bootstrap", iconName: "SiBootstrap" },
    { tool: "ReactJs", iconName: "FaReact" },
    { tool: "HTML", iconName: "TiHtml5" },
    { tool: "CMS", iconName: "BiSolidBookContent" },
    { tool: "C program", iconName: "SiC" },
    { tool: "ElectronJs", iconName: "SiElectron" },
    { tool: "Sanity", iconName: "SiSanity" },
  ];
  return (
    <div
      className=""
      style={{
        // height: "88px",
        backgroundColor: "var(--text-color)",
        color: "var(--bg-color)",
      }}
    >
      <InfiniteMovingCards
        items={[...arr]}
        renderItem={(ar, index) => <TechTool key={index} tool={ar} />}
        fadeEdges={false}
        gap="23px"
        itemWidth=""
        pauseOnHover={false}
      />
    </div>
  );
};

export default SlideTech;
