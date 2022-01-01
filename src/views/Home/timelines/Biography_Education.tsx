import { useTranslation } from "react-i18next";
import Timeline, { TimelineElement } from "components/Timeline";
import * as Styled from "../Home.styles";
import FetusLottie from "components/Lotties/Fetus";
import BookLottie from "components/Lotties/Book";
import MasterOfScienceLottie from "components/Lotties/Graduation/v1";
import BachelorOfScienceLottie from "components/Lotties/Graduation/v2";
import DeveloperLottie from "components/Lotties/Developer";
import BirthDescription from "./BirthDescription";

const BiographyEducation: React.FC = () => {
  const { t } = useTranslation();

  const items: TimelineElement[] = [
    {
      title: t("birthday"),
      date: "1998/04/07",
      description: <BirthDescription />,
      icon: <FetusLottie className="fetus" />,
      className: "timeline-fetus-lottie",
    },
    {
      title: t("school"),
      date: "1996 - 2008",
      icon: <BookLottie />,
      description: t("school-description"),
      className: "timeline-lottie",
    },
    {
      title: t("bs-degree"),
      date: "2011 - 2013",
      icon: <BachelorOfScienceLottie className="bachelor" />,
      description: t("bachelor-description"),
      className: "timeline-grad-lottie",
    },
    {
      title: t("ms-degree"),
      date: "2011 - 2013",
      icon: <MasterOfScienceLottie className="master" />,
      description: t("master-description"),
      className: "timeline-grad2-lottie",
    },
    {
      title: "End of education",
      date: "...",
      icon: <DeveloperLottie />,
      contentStyle: { display: "none" },
      className: "timeline-lottie",
    },
  ];

  return (
    <Styled.EducationTimelineWrapper>
      <Styled.TimelineTitle className="bio">
        {t("bio-education")}
      </Styled.TimelineTitle>
      <Timeline
        items={items}
        onIconClick={() => console.log("icon clicked")}
        onElementClick={() => console.log("element clicked")}
      />
    </Styled.EducationTimelineWrapper>
  );
};

export default BiographyEducation;
