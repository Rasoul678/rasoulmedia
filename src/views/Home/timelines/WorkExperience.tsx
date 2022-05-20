import { useTranslation } from "react-i18next";
import Timeline, { TimelineElement } from "components/Timeline";
import * as Styled from "../Home.styles";
import SuitcaseLottie from "components/Lotties/Suitcase";
import CertificationLottie from "components/Lotties/Certification";
import JSDescription from "./JSDescription";
import KarabamaDescription from "./KarabamaDescription";
import CliqmindDescription from "./CliqmindDescription";

interface WorkExperienceProps {}

const WorkExperience: React.FC<WorkExperienceProps> = () => {
  const { t } = useTranslation();

  const items: TimelineElement[] = [
    {
      title: t('js.dev'),
      date: "2019 - 2020",
      description: <JSDescription />,
      icon: <SuitcaseLottie name="suitcase1" />,
      className: "timeline-lottie",
    },
    {
      title: t('front.dev'),
      description: <KarabamaDescription />,
      date: "2020 - 2021",
      icon: <SuitcaseLottie name="suitcase2" />,
      className: "timeline-lottie",
    },
    {
      title: t('front.dev'),
      description: <CliqmindDescription />,
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
