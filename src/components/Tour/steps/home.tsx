import Flex from "components/Flex";
import Button from "components/Button";
import { ReactourStep } from "reactour";

const steps: ReactourStep[] = [
  {
    selector: '[data-tour="step-start"]',
    content: ({ goTo, close }) => (
      <div>
        <h4 style={{ fontSize: "1.1rem" }}>Would you like to take a tour?</h4>
        <Flex gap="1rem" marginTop="1rem" justifyContent="center">
          <Button
            onClick={close}
            size="small"
            variant="outline"
            style={{ color: "#777" }}
          >
            Naaah!
          </Button>
          <Button size="small" onClick={() => goTo(1)}>
            Yes, let's go
          </Button>
        </Flex>
        <div
          style={{
            fontSize: "0.9rem",
            marginTop: "1rem",
            color: "crimson",
            textAlign: "center",
          }}
        >
          If you cancel it here, won't see it again.
        </div>
      </div>
    ),
  },
  {
    selector: '[data-tour="step-1"]',
    content: (
      <div style={{ fontSize: "1.2rem" }}>
        Here you would find succinct information about me and my skills
      </div>
    ),
    position: "bottom",
    resizeObservables: ['[data-tour="step-1"]'],
  },
  {
    selector: '[data-tour="step-2"]',
    content: <div style={{ fontSize: "1.2rem" }}>These are my passions</div>,
    position: "top",
    resizeObservables: ['[data-tour="step-2"]'],
  },
  {
    selector: '[data-tour="step-3"]',
    content: (
      <div style={{ fontSize: "1.2rem" }}>
        This is my picture and my social networks 😊
      </div>
    ),
    position: "bottom",
    resizeObservables: ['[data-tour="step-3"]'],
  },
  {
    selector: '[data-tour="step-desktop-nav-links"]',
    content: <div style={{ fontSize: "1.1rem" }}>Navigate between pages</div>,
    position: "bottom",
    resizeObservables: ['[data-tour="step-desktop-nav-links"]'],
  },
  {
    selector: '[data-tour="step-desktop-nav-lang"]',
    content: <div style={{ fontSize: "1.1rem" }}>Choose site language</div>,
    position: "bottom",
    resizeObservables: ['[data-tour="step-desktop-nav-lang"]'],
  },
  {
    selector: '[data-tour="step-desktop-nav-color"]',
    content: <div style={{ fontSize: "1.1rem" }}>Choose theme color</div>,
    position: "bottom",
    resizeObservables: ['[data-tour="step-desktop-nav-color"]'],
  },
  {
    selector: '[data-tour="step-desktop-nav-dark"]',
    content: <div style={{ fontSize: "0.9rem" }}>Toggle between dark and light mode</div>,
    position: "bottom",
    resizeObservables: ['[data-tour="step-desktop-nav-dark"]'],
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
