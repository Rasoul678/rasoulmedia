import { iconsList } from "components/Icons/icon-pack";
import React from "react";
import { Link } from "react-router-dom";

type IProps = {
  inView: boolean;
};

const Education: React.FC<IProps> = ({ inView }) => {
  return (
    <div className="w-[70%] mt-14 flex flex-col gap-4">
      <div
        className={`flex items-center px-5 h-10 gap-5 ${
          inView ? "in-view delay-[350ms]" : "out-view"
        }`}
      >
        {iconsList.ok({ width: 40, alt: "Ok" })}
        <span className="mt-2 flex gap-2">
          Master of Science
          <span className="hidden md:inline">in Aerospace Engineering</span> at
          <Link
            to="https://sbu.ac.ir"
            target="_blank"
            rel="noopener noreferrer"
            className="red_gradient"
          >
            SBU
          </Link>{" "}
          <span className="hidden lg:inline">(Shahid Beheshti University)</span>
        </span>
      </div>
      <div
        className={`flex items-center px-5 h-10 gap-5 ${
          inView ? "in-view delay-[550ms]" : "out-view"
        }`}
      >
        {iconsList.ok({ width: 40, alt: "Ok" })}
        <span className="mt-2 flex gap-2">
          Bachelor of Science
          <span className="hidden md:inline">in Aerospace Engineering</span> at
          <Link
            to="https://mut.ac.ir"
            target="_blank"
            rel="noopener noreferrer"
            className="red_gradient"
          >
            MUT
          </Link>{" "}
          <span className="hidden lg:inline">
            (Malek-e-Ashtar University of Technology)
          </span>
        </span>
      </div>
    </div>
  );
};

export default Education;
