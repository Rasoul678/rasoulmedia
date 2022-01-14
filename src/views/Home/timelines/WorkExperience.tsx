import { useTranslation } from "react-i18next";
import Timeline, { TimelineElement } from "components/Timeline";
import * as Styled from "../Home.styles";
import SuitcaseLottie from "components/Lotties/Suitcase";
import CertificationLottie from "components/Lotties/Certification";

interface WorkExperienceProps {}

const WorkExperience: React.FC<WorkExperienceProps> = () => {
  const { t } = useTranslation();

  const items: TimelineElement[] = [
    {
      title: "Newbie",
      date: "2019 - 2020",
      description: "Getting familiar with new technologies & Freelancing",
      icon: <SuitcaseLottie name="suitcase1" />,
      className: "timeline-lottie",
    },
    {
      title: "Frontend developer",
      description: "www.karabama.com",
      date: "2020 - 2021",
      icon: <SuitcaseLottie name="suitcase2" />,
      className: "timeline-lottie",
    },
    {
      title: "Frontend developer",
      description: "www.cliqmind.ir",
      date: "2021 - 2022",
      icon: <SuitcaseLottie name="suitcase3" />,
      className: "timeline-lottie",
    },

    {
      title: "...",
      date: "...",
      icon: <CertificationLottie />,
      contentStyle: { display: "none" },
      className: "timeline-certification-lottie",
    },
  ];

  return (
    <Styled.TimelineWrapper style={{ marginTop: "3rem" }}>
      <Styled.ScrollPlaceholder className="work" />
      <Styled.TimelineTitle>{t("work-experience")}</Styled.TimelineTitle>
      <Timeline
        items={items}
        onIconClick={() => console.log("icon clicked")}
        onElementClick={() => console.log("element clicked")}
      />
    </Styled.TimelineWrapper>
  );
};

export default WorkExperience;
