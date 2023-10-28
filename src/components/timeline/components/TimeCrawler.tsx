import React, { CSSProperties } from "react";
import { useElementScroll } from "hooks/useElementScroll";
import { useElementSize } from "hooks/useElementSize";
import Sparkler from "./Sparkler";

type IProps = {
  color?: string;
};

const TimeCrawler: React.FC<IProps> = ({ color = "8ce7f2" }) => {
  const ref = React.useRef(null);
  const crawlerRef = React.useRef(null);

  let { height } = useElementScroll(ref);
  const [state] = useElementSize({ ref: crawlerRef });

  const userPrefersReduced = window.matchMedia(
    "(prefers-reduced-motion)"
  ).matches;

  if (userPrefersReduced) {
    height = 0;
  }

  const hasAnimation =
    state.status === "detected" && state.height > 0 && !userPrefersReduced;

  return (
    <div
      ref={ref}
      className="absolute left-[10%] w-[0.3rem] rounded-sm h-full bg-gray-800/70"
    >
      <div
        ref={crawlerRef}
        className="crawler"
        style={
          { "--height": `${height}px`, "--color": `#${color}` } as CSSProperties
        }
      >
        <Sparkler hasAnimation={hasAnimation} color={color} />
      </div>
    </div>
  );
};

export default TimeCrawler;
