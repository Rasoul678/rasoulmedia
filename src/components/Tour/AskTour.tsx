import Box from "components/Box";
import Flex from "components/Flex";
import React from "react";
import { useTranslation } from "react-i18next";
import Button from "components/Button";
import { ReactourStepContentArgs } from "reactour";

interface AskTourProps extends ReactourStepContentArgs {}

const AskTour: React.FC<AskTourProps> = (props) => {
  const { close, step, goTo } = props;
  const { t } = useTranslation();

  return (
    <Box>
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
        <Button size="small" onClick={() => goTo(step)}>
          {t("step.yes")}
        </Button>
      </Flex>
      <Box
        fontSize="0.85rem"
        marginTop="1rem"
        color="crimson"
        textAlign="center"
      >
        {t("step.warning")}
      </Box>
    </Box>
  );
};

export default AskTour;
