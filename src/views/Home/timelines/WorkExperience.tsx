import Timeline, { TimelineElement } from "components/Timeline";
import * as Styled from "../Home.styles";
import FetusLottie from "components/Lotties/Fetus";
import BookLottie from "components/Lotties/Book";
import MasterOfScienceLottie from "components/Lotties/Graduation/v1";
import BachelorOfScienceLottie from "components/Lotties/Graduation/v2";
import DeveloperLottie from "components/Lotties/Developer";
import { useTranslation } from "react-i18next";

interface WorkExperienceProps {}

const WorkExperience: React.FC<WorkExperienceProps> = () => {
  const { t } = useTranslation();

  const items: TimelineElement[] = [
    {
      title: "Birthday",
      date: "1998/04/07",
      description: "i was born here",
      icon: <FetusLottie />,
    },
    {
      title: "School",
      date: "1996 - 2008",
      icon: <BookLottie />,
    },
    {
      title: "Bachelor of Science",
      date: "2011 - 2013",
      icon: <BachelorOfScienceLottie />,
    },
    {
      title: "Master of Science",
      date: "2011 - 2013",
      icon: <MasterOfScienceLottie />,
    },
    {
      title: "End of education",
      date: "...",
      icon: <DeveloperLottie />,
      contentStyle: { display: "none" },
    },
  ];

  return (
    <Styled.EducationTimelineWrapper>
      <Styled.TimelineTitle className="bio">
        {t("work-experience")}
      </Styled.TimelineTitle>
      <Timeline
        items={items}
        onIconClick={() => console.log("icon clicked")}
        onElementClick={() => console.log("element clicked")}
      />
    </Styled.EducationTimelineWrapper>
  );
};

export default WorkExperience;
