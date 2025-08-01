"use client";
import React from "react";
import SectionHead from "../../components/secHead/SectionHead";
import { InfiniteMovingCards } from "@/app/components/movingCard/infiniteMovingCards";
import TestimonialComponent from "../../components/testimonialComponents/TestimonialComponent";
import { CardStack } from "../../components/testimonialComponents/stackCard";

const WhatPeopleSay = ({ testimonials }) => {
  return (
    <>
      <div className="container-md">
        <SectionHead
          secHead1="TESTIMONIALS"
          secHead2="What people say"
          secDesc={
            <>
              What collaborators and teammates say about building real-world
              <br className="d-none d-lg-block" /> software projects together
              with me
            </>
          }
        />
        <div
          className="d-block d-md-none"
          style={{
            height: "10.25rem",
            marginTop: "4rem",
            marginBottom: "6rem",
          }}
        >
          <CardStack items={testimonials} />
        </div>
      </div>
      <div className="d-none d-md-block">
        <InfiniteMovingCards
          items={testimonials}
          renderItem={(item, index) => (
            <TestimonialComponent item={item} key={index} />
          )}
          itemWidth="552px" // Adjust to fit ~3 cards on your screen
          fadeEdges={false}
          direction="right"
          speed="slow"
        />
      </div>
    </>
  );
};

export default WhatPeopleSay;
