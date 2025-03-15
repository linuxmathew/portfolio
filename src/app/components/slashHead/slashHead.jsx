import React from "react";
import "./slashHead.css";

const SlashHead = ({ headName }) => {
  return (
    <div className="strokeHeadWrapper">
      <p className="slashHeadWrap">
        <span className="slashStroke">/</span>
        <span className="slashHeadText">{headName}</span>
      </p>
    </div>
  );
};

export default SlashHead;
