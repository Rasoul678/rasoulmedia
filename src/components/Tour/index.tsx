import useActions from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";
import { Pages } from "interfaces";
import React, { useRef, useState } from "react";
import Tour, { ReactourProps } from "reactour";
import useStep from "./useStep";

interface TourProps
  extends Omit<ReactourProps, "isOpen" | "onRequestClose" | "steps"> {
  name: Pages;
}

const ReactTour: React.FC<TourProps> = ({ name, ...rest }) => {
  const { tour } = useTypedSelector((state) => state.global);
  const [isTourOpen, setIsTourOpen] = useState(
    tour.hasTour && !tour.pages[name].isDone
  );
  const currentStepRef = useRef<number | null>(null);
  const { setAppTour, setPageTour } = useActions();

  const steps = useStep(name);

  const closeTour = () => {
    setIsTourOpen(false);

    if (currentStepRef.current === 0) {
      setAppTour(false);
    } else {
      setPageTour({ name, isDone: true });
    }
  };

  const setCurrentStep = (currentStep: number) => {
    currentStepRef.current = currentStep;
  };

  return (
    <Tour
      steps={steps}
      isOpen={isTourOpen}
      onRequestClose={closeTour}
      rounded={7}
      className="custom-helper"
      showNavigation={false}
      showButtons={false}
      onAfterOpen={() => (document.body.style.overflowY = "hidden")}
      onBeforeClose={() => (document.body.style.overflowY = "auto")}
      getCurrentStep={setCurrentStep}
      {...rest}
    />
  );
};

export default ReactTour;
