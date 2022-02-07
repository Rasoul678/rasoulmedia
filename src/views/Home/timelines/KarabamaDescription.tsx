import * as Styled from "../Home.styles";
import { useTranslation } from "react-i18next";
import Stack from "../Stack";
import { Links } from "constants/Links";

interface KaraDescriptionProps {}

const KaraDescription: React.FC<KaraDescriptionProps> = () => {
  const { t } = useTranslation();

  return (
    <Styled.DescriptionWrapper style={{ padding: "1rem" }}>
      <ul style={{ marginBottom: "1rem" }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <li key={i}>{t(`kara.description.${i}`)}</li>
        ))}
      </ul>
      <Styled.LinkTo href={Links.karabama} target="_blank" rel="noreferrer">
        karabama.com
      </Styled.LinkTo>
      <Stack
        title={t("tech-stack")}
        stack={[
          "JAVASCRIPT",
          "REACT",
          "REDUX",
          "MATERIAL_UI",
          "Laravel",
          "REST API",
        ]}
      />
    </Styled.DescriptionWrapper>
  );
};

export default KaraDescription;
