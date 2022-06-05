import Flex from "components/Flex";
import Button from "components/Button";
import { ReactourStep } from "reactour";
import { Pages } from "interfaces";
import { useTranslation } from "react-i18next";

const useStep = (step: Pages): ReactourStep[] => {
  const { t } = useTranslation();
  let steps: ReactourStep[];

  switch (step) {
    case "home":
      steps = [
        {
          selector: '[data-tour="step-start"]',
          content: ({ goTo, close }) => (
            <div>
              <h4 style={{ fontSize: "1rem" }}>{t("step.asktour")}</h4>
              <Flex gap="1rem" marginTop="1rem" justifyContent="center">
                <Button
                  onClick={close}
                  size="small"
                  variant="outline"
                  style={{ color: "#777" }}
                >
                  {t("step.no")}
                </Button>
                <Button size="small" onClick={() => goTo(1)}>
                  {t("step.yes")}
                </Button>
              </Flex>
              <div
                style={{
                  fontSize: "0.85rem",
                  marginTop: "1rem",
                  color: "crimson",
                  textAlign: "center",
                }}
              >
                {t("step.warning")}
              </div>
            </div>
          ),
        },
        {
          selector: '[data-tour="step-1"]',
          content: <div style={{ fontSize: "1.2rem" }}>{t("step.info")}</div>,
          position: "bottom",
          resizeObservables: ['[data-tour="step-1"]'],
        },
        {
          selector: '[data-tour="step-2"]',
          content: (
            <div style={{ fontSize: "1.2rem" }}>{t("step.passion")}</div>
          ),
          position: "top",
          resizeObservables: ['[data-tour="step-2"]'],
        },
        {
          selector: '[data-tour="step-3"]',
          content: <div style={{ fontSize: "1.2rem" }}>{t("step.social")}</div>,
          position: "bottom",
          resizeObservables: ['[data-tour="step-3"]'],
        },
        {
          selector: '[data-tour="step-desktop-nav-links"]',
          content: <div style={{ fontSize: "1.1rem" }}>{t("step.nav")}</div>,
          position: "bottom",
          resizeObservables: ['[data-tour="step-desktop-nav-links"]'],
        },
        {
          selector: '[data-tour="step-desktop-nav-lang"]',
          content: <div style={{ fontSize: "1.1rem" }}>{t("step.lang")}</div>,
          position: "bottom",
          resizeObservables: ['[data-tour="step-desktop-nav-lang"]'],
        },
        {
          selector: '[data-tour="step-desktop-nav-color"]',
          content: <div style={{ fontSize: "1.1rem" }}>{t("step.theme")}</div>,
          position: "bottom",
          resizeObservables: ['[data-tour="step-desktop-nav-color"]'],
        },
        {
          selector: '[data-tour="step-desktop-nav-dark"]',
          content: (
            <div style={{ fontSize: "0.9rem" }}>{t("step.darkmode")}</div>
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
          content: ({ goTo }) => (
            <Flex fontSize="1rem" flexDirection="column" gap="1rem">
              <div>This is where you can contact me</div>
              <Button size="medium" onClick={() => goTo(1)}>
                Start
              </Button>
            </Flex>
          ),
        },
        {
          selector: '[data-tour="step-1"]',
          content: <div style={{ fontSize: "1.2rem" }}>Enter you name</div>,
          position: "bottom",
          resizeObservables: ['[data-tour="step-1"]'],
        },
        {
          selector: '[data-tour="step-2"]',
          content: <div style={{ fontSize: "1.2rem" }}>Enter your E-mail</div>,
          position: "bottom",
          resizeObservables: ['[data-tour="step-2"]'],
        },
        {
          selector: '[data-tour="step-3"]',
          content: (
            <div style={{ fontSize: "1.2rem" }}>Enter subject (optional)</div>
          ),
          position: "bottom",
          resizeObservables: ['[data-tour="step-3"]'],
        },
        {
          selector: '[data-tour="step-4"]',
          content: (
            <div style={{ fontSize: "1.2rem" }}>Write your message here</div>
          ),
          position: "bottom",
          resizeObservables: ['[data-tour="step-4"]'],
        },
        {
          selector: '[data-tour="step-5"]',
          content: <div style={{ fontSize: "1.2rem" }}>And, send it to me</div>,
          position: "bottom",
          resizeObservables: ['[data-tour="step-5"]'],
        },
        {
          selector: '[data-tour="step-end"]',
          content: (
            <Flex justifyContent="center" fontSize="1.3rem">
              Thank You! 🎉
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
