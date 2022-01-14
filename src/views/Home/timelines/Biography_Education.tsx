import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";
import Timeline, { TimelineElement } from "components/Timeline";
import * as Styled from "../Home.styles";
import FetusLottie from "components/Lotties/Fetus";
import BookLottie from "components/Lotties/Book";
import MasterOfScienceLottie from "components/Lotties/Graduation/v1";
import BachelorOfScienceLottie from "components/Lotties/Graduation/v2";
import DeveloperLottie from "components/Lotties/Developer";
import BirthDescription from "./BirthDescription";
import BSDescription from "./BSDescription";
import MSDescription from "./MSDescription";
import Button from "components/Button";

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
      description: <BSDescription />,
      icon: <BachelorOfScienceLottie className="bachelor" />,
      className: "timeline-grad-lottie",
    },
    {
      title: t("ms-degree"),
      date: "2011 - 2013",
      description: <MSDescription />,
      icon: <MasterOfScienceLottie className="master" />,
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
    <Styled.TimelineWrapper>
      <Styled.ScrollPlaceholder className="bio" />
      <Styled.TimelineTitle>
        {t("bio-education")}
        <ScrollLink
          activeClass="active"
          to="work"
          spy={true}
          smooth={true}
          duration={500}
        >
          <Button variant="ghost" size="small" className="next-button">
            next
          </Button>
        </ScrollLink>
      </Styled.TimelineTitle>
      <Timeline
        items={items}
        onIconClick={() => console.log("icon clicked")}
        onElementClick={() => console.log("element clicked")}
      />
    </Styled.TimelineWrapper>
  );
};

export default BiographyEducation;
