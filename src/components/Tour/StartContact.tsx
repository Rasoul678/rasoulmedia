import { useTranslation } from "react-i18next";
import { ReactourStepContentArgs } from "reactour";
import Button from "components/Button";
import Flex from "components/Flex";
import Box from "components/Box";

interface StartContactProps extends ReactourStepContentArgs {}

const StartContact: React.FC<StartContactProps> = ({ goTo, step }) => {
  const { t } = useTranslation();

  return (
    <Flex fontSize="1rem" flexDirection="column" gap="1rem">
      <Box>{t('step.startContact')}</Box>
      <Button size="medium" onClick={() => goTo(step)}>
        {t("start")}
      </Button>
    </Flex>
  );
};

export default StartContact;
