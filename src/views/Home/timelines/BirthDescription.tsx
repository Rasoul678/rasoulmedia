import reactStringReplace from "react-string-replace";
import { useTranslation } from "react-i18next";
import * as Styled from "../Home.styles";

interface BirthDescriptionProps {}

const BirthDescription: React.FC<BirthDescriptionProps> = () => {
  const { t } = useTranslation();

  return (
    <Styled.BirthDescriptionWrapper>
      {reactStringReplace(t("born-description"), t("country.iran"), (match, i) => (
        <Styled.LinkTo
          key={i}
          href="https://en.wikipedia.org/wiki/Iran"
          target="_blank"
          rel="noreferrer"
        >
          {match}
        </Styled.LinkTo>
      ))}{" "}
      {reactStringReplace(t("live-description"), t("hometown"), (match, i) => (
        <Styled.LinkTo
          key={i}
          href="https://en.wikipedia.org/wiki/Rostamkola"
          target="_blank"
          rel="noreferrer"
        >
          {match}
        </Styled.LinkTo>
      ))}
    </Styled.BirthDescriptionWrapper>
  );
};

export default BirthDescription;
