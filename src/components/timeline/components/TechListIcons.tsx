import React, { memo } from "react";
import { iconsList } from "components/Icons/icon-pack";

type IProps = {
  inView: boolean;
};

const TechListIcons: React.FC<IProps> = ({ inView }) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-5 mt-[5rem] relative left-[0%] mb-[3rem] w-[65%]">
      <div className={inView ? "in-view delay-[250ms]" : "out-view"}>
        {iconsList.stacks.html({ width: 80, alt: "HTML" })}
      </div>
      <div className={inView ? "in-view delay-[350ms]" : "out-view"}>
        {iconsList.stacks.css({ width: 80, alt: "CSS" })}
      </div>
      <div className={inView ? "in-view delay-[450ms]" : "out-view"}>
        {iconsList.stacks.javascript({ width: 80, alt: "Javascript" })}
      </div>
      <div className={`${inView ? "in-view delay-[550ms]" : "out-view"} mt-1`}>
        {iconsList.stacks.ts({ width: 80, alt: "Typescript" })}
      </div>
      <div className={inView ? "in-view delay-[650ms]" : "out-view"}>
        {iconsList.stacks.git({ width: 80, alt: "Git" })}
      </div>
      <div className={inView ? "in-view delay-[750ms]" : "out-view"}>
        {iconsList.stacks.postman({ width: 80, alt: "Postman" })}
      </div>
      <div className={`${inView ? "in-view delay-[850ms]" : "out-view"} mt-2`}>
        {iconsList.stacks.react({ width: 75, alt: "ReactJs" })}
      </div>
      <div className={`${inView ? "in-view delay-[950ms]" : "out-view"} mt-5`}>
        {iconsList.stacks.nextjs({ width: 100, alt: "Next.js" })}
      </div>
      <div className={`${inView ? "in-view delay-[1050ms]" : "out-view"}`}>
        {iconsList.stacks.yarn({ width: 90, alt: "Yarn" })}
      </div>
      <div className={`${inView ? "in-view delay-[1150ms]" : "out-view"}`}>
        {iconsList.stacks.npm({ width: 90, alt: "NPM" })}
      </div>
      <div className={`${inView ? "in-view delay-[1250ms]" : "out-view"}`}>
        {iconsList.stacks.docker({ width: 90, alt: "Docker" })}
      </div>
      <div className={`${inView ? "in-view delay-[1350ms]" : "out-view"}`}>
        {iconsList.stacks.redux({ width: 80, alt: "Redux" })}
      </div>
      <div className={`${inView ? "in-view delay-[1450ms]" : "out-view"}`}>
        {iconsList.stacks.webpack({ width: 80, alt: "Webpack" })}
      </div>
    </div>
  );
};

export default memo(TechListIcons);
