import React from "react";
import { CiDumbbell } from "react-icons/ci";
import { GiCycling, GiHollowCat } from "react-icons/gi";
import { IoIosFootball } from "react-icons/io";
import { IoBookOutline, IoCarSportOutline } from "react-icons/io5";
import { LuCat, LuCookingPot } from "react-icons/lu";
import {
  PiAirplaneTiltThin,
  PiBookOpenThin,
  PiCheersLight,
  PiHeadCircuitThin,
  PiMusicNoteSimpleThin,
} from "react-icons/pi";
import { RiQuillPenAiLine } from "react-icons/ri";
import { TbMovie } from "react-icons/tb";

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
  GiHollowCat: GiHollowCat,
  LuCat: LuCat,
  MdOutlineLocalMovies: TbMovie,
};

const Hubby = ({ hobby }) => {
  const IconComponent = iconMap[hobby.hubbyIcon];
  return (
    <span
      className="align-items-center"
      style={{
        padding: "16px 32px",
        border: "1px solid var(--text-color-neutral-border)",
        color: " var(--bg-color)",
        borderRadius: "36px",

        display: "flex", // Add Flexbox
        justifyContent: "center", // Center horizontally
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
