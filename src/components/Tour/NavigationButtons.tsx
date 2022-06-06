import Flex from "components/Flex";
import React from "react";
import Button from "components/Button";
import { useTranslation } from "react-i18next";

interface NavigationButtonsProps {
  goTo: (step: number) => void;
  step: number;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = (props) => {
  const { goTo, step } = props;
  const { t } = useTranslation();

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      gap="2rem"
      marginTop="1rem"
    >
      <Button size="small" onClick={() => goTo(step - 2)}>
        {t("prev")}
      </Button>
      <Button size="small" onClick={() => goTo(step)}>
        {t("next")}
      </Button>
    </Flex>
  );
};

export default NavigationButtons;
