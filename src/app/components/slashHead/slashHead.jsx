import React from "react";
import "./slashHead.css";

const SlashHead = ({ headName, desc }) => {
  return (
    <div className="strokeHeadWrapper">
      <p className="slashHeadWrap">
        <span className="slashStroke">/</span>
        <span className="slashHeadText">{headName}</span>
      </p>
      {desc && <p className="slashDesc">{desc}</p>}
    </div>
  );
};

export default SlashHead;
