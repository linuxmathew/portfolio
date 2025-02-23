import React from "react";
import SectionHead from "../../components/secHead/SectionHead";

const WhatPeopleSay = () => {
  return (
    <div className="container-md">
      <SectionHead
        secHead1="TESTIMONIALS"
        secHead2="What people say"
        secDesc={
          <>
            Lorem ipsum dolor sit amet consectetur. Varius blandit
            <br />
            facilisis egestas nulla tristique viverra
          </>
        }
      />
      <div
        style={{
          height: "298px",
          border: "1px solid grey",
          borderRadius: "20px",
        }}
      ></div>
    </div>
  );
};

export default WhatPeopleSay;
