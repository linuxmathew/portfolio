import React from "react";
import "./Headline.css";

const Headline = ({ title, description }) => {
  return (
    <div className="headline container-md container-md-none">
      <h1 className="headName">Temitayo Afolabi</h1>
      <p className="headTitle">{title}</p>
      <p className="headDesc">{description}</p>
    </div>
  );
};

export default Headline;
