"use client";

import { cn } from "../../../lib/utils";
import React, { useEffect, useRef } from "react";

export const InfiniteMovingCards = ({
  items,
  renderItem,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  itemWidth = "",
  gap = "16px",
  className,
  itemClassName,
  fadeEdges = "false",
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !items?.length) return;

    // Set animation properties
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
    const duration =
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
    containerRef.current.style.setProperty("--animation-duration", duration);
  }, [items, direction, speed]);

  if (!items?.length) return null;

  // Duplicate items for infinite scrolling
  const doubledItems = [...items, ...items];

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden ",
        fadeEdges &&
          "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap py-3 list-none animate-scroll",
          "mb-0",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{ gap }}
      >
        {doubledItems.map((item, idx) => (
          <li
            key={idx}
            className={cn("shrink-0", itemClassName)}
            style={{ width: itemWidth }}
          >
            {renderItem(item, idx % items.length)}{" "}
            {/* Use original index for uniqueness */}
          </li>
        ))}
      </ul>
    </div>
  );
};
