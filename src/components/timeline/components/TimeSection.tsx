import React from "react";
import InfiniteLoopSlider from "components/infinite-loop-slider/InfiniteLoopSlider";
import { useInView } from "react-intersection-observer";
import TimeCrawler from "./TimeCrawler";

type IProps = {
  tagList?: string[];
  color?: string;
  title?: string;
  loop?: boolean;
  children?: ({ inView }: { inView: boolean }) => React.ReactNode;
};

export const TimeSection: React.FC<IProps> = (props) => {
  const { color, loop, tagList, title = "Time Title", children } = props;
  const { ref, inView } = useInView();

  return (
    <div className="mt-8">
      <p className="text-center text-xl sm:text-2xl p-2">{title}</p>
      <section
        ref={ref}
        className="grid place-items-center content-center relative min-h-[10rem]"
      >
        <div className="absolute flex justify-center items-center gap-4 top-0 rounded-sm w-[80%] z-10 bg-gray-800/40">
          <div className="overflow-hidden">
            <InfiniteLoopSlider
              tagList={tagList}
              color={color}
              rows={1}
              loop={loop}
              className="opacity-80"
            />
          </div>
        </div>
        <TimeCrawler color={color} />
        {children?.({ inView })}
      </section>
    </div>
  );
};
