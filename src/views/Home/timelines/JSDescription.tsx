import * as Styled from "../Home.styles";
import { useTranslation } from "react-i18next";
import Stack from "../Stack";

interface JSDescriptionProps {}

const JSDescription: React.FC<JSDescriptionProps> = () => {
  const { t } = useTranslation();

  return (
    <Styled.DescriptionWrapper style={{ padding: "1rem" }}>
      <ul>
        {[1, 2, 3].map((i) => (
          <li key={i}>{t(`js.description.${i}`)}</li>
        ))}
      </ul>
      <Stack
        title={t("tech-stack")}
        stack={["JAVASCRIPT", "REACT", "HTML5", "CSS3", "BOOTSTRAP"]}
      />
    </Styled.DescriptionWrapper>
  );
};

export default JSDescription;
