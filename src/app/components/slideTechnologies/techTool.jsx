import React from "react";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as SiIcons from "react-icons/si";
import * as TiIcons from "react-icons/ti";

const iconMap = {
  BiSolidFileCss: BiIcons.BiSolidFileCss,
  FaPython: FaIcons.FaPython,
  IoLogoJavascript: IoIcons.IoLogoJavascript,
  SiFlask: SiIcons.SiFlask,
  FaNodeJs: FaIcons.FaNodeJs,
  SiBootstrap: SiIcons.SiBootstrap,
  FaReact: FaIcons.FaReact,
  TiHtml5: TiIcons.TiHtml5,
  BiSolidBookContent: BiIcons.BiSolidBookContent,
  SiC: SiIcons.SiC,
  SiElectron: SiIcons.SiElectron,
  SiSanity: SiIcons.SiSanity,
};
const TechTool = ({ tool }) => {
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
      {IconComponent && (
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
