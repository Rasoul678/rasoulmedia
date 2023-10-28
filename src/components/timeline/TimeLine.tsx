import React from "react";
import { useTranslation } from "react-i18next";
import { TimeSection } from "./components";
import TechListIcons from "./components/TechListIcons";
import Education from "./components/Education";
import Repos from "./components/Repos";
import { RepoType } from "interfaces";
import { TAGS } from "constants/Tags";

type IProps = {
  repos: RepoType[];
};

const TimeLine: React.FC<IProps> = ({ repos }) => {
  const { t } = useTranslation();

  return (
    <div>
      <TimeSection loop title="My Tech Stack" tagList={TAGS}>
        {({ inView }) => <TechListIcons inView={inView} />}
      </TimeSection>
      <TimeSection
        loop
        title={t("git.repos")}
        tagList={repos.map((r: RepoType) => r.name)}
        color="ffe082"
      >
        {({ inView }) => <Repos repos={repos} inView={inView} />}
      </TimeSection>
      <TimeSection
        title="Academic Background"
        tagList={["Master & Bachelor"]}
        color="f48fb1"
      >
        {({ inView }) => <Education inView={inView} />}
      </TimeSection>
      {/* <TimeSection tagList={TAGS} color="a5d6a7" /> */}
    </div>
  );
};

export default TimeLine;
