import * as Styled from "../Home.styles";
import { useTranslation } from "react-i18next";
import Stack from "../Stack";
import { Links } from "constants/Links";

interface CliqmindDescriptionProps {}

const CliqmindDescription: React.FC<CliqmindDescriptionProps> = () => {
  const { t } = useTranslation();

  return (
    <Styled.DescriptionWrapper style={{ padding: "1rem" }}>
      <ul style={{ marginBottom: "1rem" }}>
        {[1, 2, 3, 4].map((i) => (
          <li key={i}>{t(`mind.description.${i}`)}</li>
        ))}
      </ul>
      <Styled.LinkTo href={Links.cliqmind} target="_blank" rel="noreferrer">
        cliqmind.ir
      </Styled.LinkTo>
      <Stack
        title={t("tech-stack")}
        stack={[
          "JAVASCRIPT",
          "REACT",
          "REDUX",
          "STYLED COMPONENTS",
          "REST API",
          "REACT TABLE LIBRARY"
        ]}
      />
    </Styled.DescriptionWrapper>
  );
};

export default CliqmindDescription;
