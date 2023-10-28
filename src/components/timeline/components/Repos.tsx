import React from "react";
import Repo from "./Repo";
import { RepoType } from "interfaces";

type IProps = {
  inView: boolean;
  repos: RepoType[];
};

const Repos: React.FC<IProps> = ({ inView, repos }) => {
  return (
    <div className="w-[70%] mt-14 flex flex-col gap-4">
      {repos.slice(0, 10).map((repo, i) => {
        return (
          <div
            key={repo.id}
            className={`flex items-center h-6 gap-3 ${
              inView ? `in-view delay-[${i + 3}50ms]` : "out-view"
            }`}
          >
            <Repo repo={repo} />
          </div>
        );
      })}
    </div>
  );
};

export default Repos;
