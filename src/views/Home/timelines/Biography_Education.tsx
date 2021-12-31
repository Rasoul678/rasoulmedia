import { useTranslation } from "react-i18next";
import Timeline, { TimelineElement } from "components/Timeline";
import * as Styled from "../Home.styles";
import FetusLottie from "components/Lotties/Fetus";
import BookLottie from "components/Lotties/Book";
import MasterOfScienceLottie from "components/Lotties/Graduation/v1";
import BachelorOfScienceLottie from "components/Lotties/Graduation/v2";
// import CertificationLottie from "components/Lotties/Certification";
import DeveloperLottie from "components/Lotties/Developer";
import BirthDescription from "./BirthDescription";

const BiographyEducation: React.FC = () => {
  const { t } = useTranslation();

  const items: TimelineElement[] = [
    {
      title: t("birthday"),
      date: "1998/04/07",
      description: <BirthDescription />,
      icon: <FetusLottie />,
    },
    {
      title: t("school"),
      date: "1996 - 2008",
      icon: <BookLottie />,
    },
    {
      title: t("bs-degree"),
      date: "2011 - 2013",
      icon: <BachelorOfScienceLottie />,
    },
    {
      title: t("ms-degree"),
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
