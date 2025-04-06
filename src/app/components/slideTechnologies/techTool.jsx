import React from "react";
import { BiSolidBookContent, BiSolidFileCss } from "react-icons/bi";
import { FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiBootstrap,
  SiC,
  SiElectron,
  SiFlask,
  SiSanity,
} from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";

const iconMap = {
  BiSolidFileCss: BiSolidFileCss,
  FaPython: FaPython,
  IoLogoJavascript: IoLogoJavascript,
  SiFlask: SiFlask,
  FaNodeJs: FaNodeJs,
  FaReact: FaReact,
  TiHtml5: TiHtml5,
  BiSolidBookContent: BiSolidBookContent,
  SiC: SiC,
  SiElectron: SiElectron,
  SiSanity: SiSanity,
  SiBootstrap: SiBootstrap,
};
const TechTool = ({ tool }) => {
  console.log("tool.iconName:", tool.iconName);
  const IconComponent = iconMap[tool.iconName];
  return (
    <span
      className="align-items-center"
      style={{
        padding: "0px 16px",
        color: "var(--bg-color)",
        display: "flex", // Add Flexbox
        justifyContent: "center", // Center horizontally
      }}
    >
      {tool.iconName && (
        <IconComponent
          // className="bg-danger"
          style={{
            marginRight: "12px",

            width: "32px",
            height: "32px",
          }}
        />
      )}
      <span
        className=""
        style={{
          fontSize: "16px",
          fontWeight: "var(--font-weight-semiBold)",
        }}
      >
        {tool.tool}
      </span>
    </span>
  );
};

export default TechTool;
