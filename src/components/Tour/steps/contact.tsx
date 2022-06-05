import Flex from "components/Flex";
import Button from "components/Button";
import { ReactourStep } from "reactour";

const steps: ReactourStep[] = [
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
    content: <div style={{ fontSize: "1.2rem" }}>Enter subject (optional)</div>,
    position: "bottom",
    resizeObservables: ['[data-tour="step-3"]'],
  },
  {
    selector: '[data-tour="step-4"]',
    content: <div style={{ fontSize: "1.2rem" }}>Write your message here</div>,
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

export default steps;
