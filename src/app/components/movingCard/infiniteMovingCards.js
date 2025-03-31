// "use client";

// import { cn } from "../../../lib/utils";
// import React, { useEffect, useState, useRef } from "react";

// export const InfiniteMovingCards = ({
//   items,
//   renderItem,
//   direction = "left",
//   speed = "normal",
//   pauseOnHover = true,
//   className,
// }) => {
//   const containerRef = useRef(null);
//   const scrollerRef = useRef(null);
//   const [start, setStart] = useState(false);

//   useEffect(() => {
//     if (!items.length) return;
//     addAnimation();
//   }, [items]);

//   function addAnimation() {
//     if (containerRef.current && scrollerRef.current) {
//       const scrollerContent = Array.from(scrollerRef.current.children);
//       scrollerContent.forEach((item) => {
//         const duplicatedItem = item.cloneNode(true);
//         scrollerRef.current.appendChild(duplicatedItem);
//       });
//       getDirection();
//       getSpeed();
//       setStart(true);
//     }
//   }

//   function getDirection() {
//     if (containerRef.current) {
//       containerRef.current.style.setProperty(
//         "--animation-direction",
//         direction === "left" ? "forwards" : "reverse"
//       );
//     }
//   }

//   function getSpeed() {
//     if (containerRef.current) {
//       const duration =
//         speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
//       containerRef.current.style.setProperty("--animation-duration", duration);
//     }
//   }

//   return (
//     <div
//       ref={containerRef}
//       className={cn(
//         "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
//         className
//       )}
//     >
//       <ul
//         ref={scrollerRef}
//         className={cn(
//           "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
//           start && "animate-scroll",
//           pauseOnHover && "hover:[animation-play-state:paused]"
//         )}
//       >
//         {items.map((item, idx) => (
//           <li
//             key={idx}
//             className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
//           >
//             {renderItem(item, idx)}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

"use client";

import { cn } from "../../../lib/utils";
import React, { useEffect, useRef } from "react";

export const InfiniteMovingCards = ({
  items,
  renderItem,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  itemWidth = "350px",
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
          "flex w-max min-w-full shrink-0 flex-nowrap py-4 list-none animate-scroll",
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
