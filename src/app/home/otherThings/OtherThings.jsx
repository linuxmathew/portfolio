"use client";
import React from "react";
import Hubby from "./Hubby";
import { PiAirplaneTiltThin, PiBookOpenThin } from "react-icons/pi";
import { motion } from "framer-motion";

const OtherThings = () => {
  const arr = [
    { hubbyText: "Travelling", hubbyIcon: PiAirplaneTiltThin },
    { hubbyText: "Reading", hubbyIcon: PiBookOpenThin },
    { hubbyText: "Cooking", hubbyIcon: null },
    { hubbyText: "Cycling", hubbyIcon: null },
    { hubbyText: "Workout", hubbyIcon: null },
    { hubbyText: "Partying", hubbyIcon: null },
    { hubbyText: "Reading", hubbyIcon: null },
    { hubbyText: "Learning", hubbyIcon: null },
    { hubbyText: "Cars", hubbyIcon: null },
    { hubbyText: "Animals", hubbyIcon: null },
    { hubbyText: "Writing", hubbyIcon: null },
    // { hubbyText: "Supporting Manchester Utd.", hubbyIcon: null },
    { hubbyText: "Music", hubbyIcon: null },
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
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-4 flex-nowrap"
          initial={{ x: "100%" }} // Start from right
          animate={{ x: "-100%" }} // Move to left
          transition={{
            ease: "linear",
            duration: 30, // Adjust speed (lower = faster)
            repeat: Infinity,
          }}
        >
          {/* Duplicate array to make an infinite scroll effect */}
          {[...arr, ...arr].map((hobby, index) => (
            // <div key={index} className="" classNamemy-5>
            <Hubby hubbyText={hobby.hubbyText} hubbyIcon={hobby.hubbyIcon} />
            // </div>
          ))}
        </motion.div>
      </div>
      <div className="text-center" style={{ marginTop: "74px" }}>
        {arr.slice(0, midpoint).map((ar, index) => (
          <Hubby
            key={`hubby-first-half${index}`}
            hubbyText={ar.hubbyText}
            hubbyIcon={ar.hubbyIcon}
          />
        ))}
      </div>
      {/* <div className="text-center" style={{ marginTop: "40px" }}>
        {arr.slice(midpoint).map((ar, index) => (
          <Hubby
            key={`hubby-second-half${index}`}
            hubbyText={ar.hubbyText}
            hubbyIcon={ar.hubbyIcon}
          />
        ))}
      </div> */}
    </div>
  );
};

export default OtherThings;
