import React from "react";
import { CiDumbbell } from "react-icons/ci";
import { GiCycling } from "react-icons/gi";
import { IoIosFootball } from "react-icons/io";
import { IoBookOutline, IoCarSportOutline } from "react-icons/io5";
import { LuCookingPot } from "react-icons/lu";
import {
  PiAirplaneTiltThin,
  PiBookOpenThin,
  PiCheersLight,
  PiHeadCircuitThin,
  PiMusicNoteSimpleThin,
} from "react-icons/pi";
import { RiQuillPenAiLine } from "react-icons/ri";

const iconMap = {
  LuCookingPot: LuCookingPot,
  CiDumbbell: CiDumbbell,
  GiCycling: GiCycling,
  IoIosFootball: IoIosFootball,
  IoBookOutline: IoBookOutline,
  IoCarSportOutline: IoCarSportOutline,
  PiAirplaneTiltThin: PiAirplaneTiltThin,
  PiBookOpenThin: PiBookOpenThin,
  PiAirplaneTiltThin: PiAirplaneTiltThin,
  PiCheersLight: PiCheersLight,
  PiMusicNoteSimpleThin: PiMusicNoteSimpleThin,
  PiHeadCircuitThin: PiHeadCircuitThin,
  RiQuillPenAiLine: RiQuillPenAiLine,
};

const Hubby = ({ hobby }) => {
  const IconComponent = iconMap[hobby.hubbyIcon];
  return (
    <span
      className="align-items-center me-3"
      style={{
        padding: "16px 32px",
        border: "1px solid var(--text-color-neutral-border)",
        color: "color: var(--bg-color);",
        borderRadius: "36px",
        color: "",
      }}
    >
      {hobby.hubbyIcon && (
        <IconComponent
          // className="bg-danger"
          style={{
            marginRight: "12px",
            color: "#86869B",
            width: "24px",
            height: "24px",
          }}
        />
      )}
      <span
        className=""
        style={{
          fontSize: "18px",
          fontWeight: "var(--font-weight-regular)",
          color: "var(--text-color-neutral)",
        }}
      >
        {hobby.hubbyText}
      </span>
    </span>
  );
};

export default Hubby;
