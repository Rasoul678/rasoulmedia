import Flex from "components/Flex";
import { ReactourStep } from "reactour";
import { Pages } from "interfaces";
import { useTranslation } from "react-i18next";
import Content from "./Content";
import AskTour from "./AskTour";
import StartContact from "./StartContact";

const useStep = (step: Pages): ReactourStep[] => {
  const { t } = useTranslation();
  let steps: ReactourStep[];

  switch (step) {
    case "home":
      steps = [
        {
          selector: '[data-tour="step-start"]',
          content: (props) => <AskTour {...props} />,
        },
        {
          selector: '[data-tour="step-1"]',
          content: (props) => <Content content={t("step.info")} {...props} />,
          position: "bottom",
          resizeObservables: ['[data-tour="step-1"]'],
        },
        {
          selector: '[data-tour="step-2"]',
          content: (props) => (
            <Content content={t("step.passion")} {...props} />
          ),
          position: "top",
          resizeObservables: ['[data-tour="step-2"]'],
        },
        {
          selector: '[data-tour="step-3"]',
          content: (props) => <Content content={t("step.social")} {...props} />,
          position: "bottom",
          resizeObservables: ['[data-tour="step-3"]'],
        },
        {
          selector: '[data-tour="step-desktop-nav-links"]',
          content: (props) => <Content content={t("step.nav")} {...props} />,
          position: "bottom",
          resizeObservables: ['[data-tour="step-desktop-nav-links"]'],
        },
        {
          selector: '[data-tour="step-desktop-nav-lang"]',
          content: (props) => <Content content={t("step.lang")} {...props} />,
          position: "bottom",
          resizeObservables: ['[data-tour="step-desktop-nav-lang"]'],
        },
        {
          selector: '[data-tour="step-desktop-nav-color"]',
          content: (props) => <Content content={t("step.theme")} {...props} />,
          position: "bottom",
          resizeObservables: ['[data-tour="step-desktop-nav-color"]'],
        },
        {
          selector: '[data-tour="step-desktop-nav-dark"]',
          content: (props) => (
            <Content content={t("step.darkmode")} {...props} />
          ),
          position: "bottom",
          resizeObservables: ['[data-tour="step-desktop-nav-dark"]'],
        },
        {
          selector: '[data-tour="step-end"]',
          content: (
            <Flex justifyContent="center" fontSize="1.3rem">
              {t("step.tnx")}
            </Flex>
          ),
          position: "top",
          resizeObservables: ['[data-tour="step-end"]'],
        },
      ];
      break;
    //! Contact
    case "contact":
      steps = [
        {
          selector: '[data-tour="step-start"]',
          content: (props) => <StartContact {...props} />,
        },
        {
          selector: '[data-tour="step-1"]',
          content: (props) => (
            <Content content={t("step.enterName")} {...props} />
          ),
          position: "bottom",
          resizeObservables: ['[data-tour="step-1"]'],
        },
        {
          selector: '[data-tour="step-2"]',
          content: (props) => (
            <Content content={t("step.enterEmail")} {...props} />
          ),
          position: "bottom",
          resizeObservables: ['[data-tour="step-2"]'],
        },
        {
          selector: '[data-tour="step-3"]',
          content: (props) => (
            <Content content={t("step.enterSubject")} {...props} />
          ),
          position: "bottom",
          resizeObservables: ['[data-tour="step-3"]'],
        },
        {
          selector: '[data-tour="step-4"]',
          content: (props) => (
            <Content content={t("step.writeMsg")} {...props} />
          ),
          position: "bottom",
          resizeObservables: ['[data-tour="step-4"]'],
        },
        {
          selector: '[data-tour="step-5"]',
          content: (props) => <Content content={t("step.send")} {...props} />,
          position: "bottom",
          resizeObservables: ['[data-tour="step-5"]'],
        },
        {
          selector: '[data-tour="step-end"]',
          content: (
            <Flex justifyContent="center" fontSize="1.3rem">
              {t("step.tnx")}
            </Flex>
          ),
          position: "top",
          resizeObservables: ['[data-tour="step-end"]'],
        },
      ];
      break;

    default:
      steps = [];
      break;
  }

  return steps;
};

export default useStep;
