"use client";
import React from "react";
import Hubby from "./Hubby";
import { InfiniteMovingCards } from "@/app/components/movingCard/infiniteMovingCards";
// import { motion } from "framer-motion";

const OtherThings = () => {
  const arr = [
    { hubbyText: "Travelling", hubbyIcon: "PiAirplaneTiltThin" },
    { hubbyText: "Reading", hubbyIcon: "PiBookOpenThin" },
    { hubbyText: "Cooking", hubbyIcon: "LuCookingPot" },
    { hubbyText: "Cycling", hubbyIcon: "GiCycling" },
    { hubbyText: "Workout", hubbyIcon: "CiDumbbell" },
    { hubbyText: "Partying", hubbyIcon: "PiCheersLight" },
    { hubbyText: "Reading", hubbyIcon: "PiBookOpenThin" },
    { hubbyText: "Learning", hubbyIcon: "PiBookOpenThin" },
    { hubbyText: "Cars", hubbyIcon: "IoCarSportOutline" },
    { hubbyText: "Animals", hubbyIcon: null },
    { hubbyText: "Writing", hubbyIcon: "RiQuillPenAiLine" },
    { hubbyText: "Manutd", hubbyIcon: "IoIosFootball" },
    { hubbyText: "Music", hubbyIcon: "PiMusicNoteSimpleThin" },
    { hubbyText: "Movies", hubbyIcon: null },
  ];
  const midpoint = Math.ceil(arr.length / 2);

  return (
    <div className="container-md overflow-hidden">
      <p
        className="text-center"
        style={{
          fontSize: "2rem",
          fontWeight: "var(--font-weight-bold)",
          lineHeight: "35.2px",
          letterSpacing: "-1.5%",
          marginBottom: "2rem",
        }}
      >
        I also love to do & talk about other things
      </p>
      <InfiniteMovingCards
        items={[...arr.slice(0, midpoint)]}
        renderItem={(ar, index) => (
          <Hubby key={`hubby-first-half${index}`} hobby={ar} />
        )}
        fadeEdges={true}
        gap="10px"
        itemWidth=""
        pauseOnHover={false}
      />
      <InfiniteMovingCards
        items={[...arr.slice(midpoint)]}
        renderItem={(ar, index) => (
          <Hubby key={`hubby-first-half${index}`} hobby={ar} />
        )}
        // itemWidth="600px" // Adjust to fit ~3 cards on your screen
        fadeEdges={true}
        gap="10px"
        itemWidth=""
        direction="forwards"
        pauseOnHover={false}
      />
    </div>
  );
};

export default OtherThings;
