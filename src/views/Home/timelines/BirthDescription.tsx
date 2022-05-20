import reactStringReplace from "react-string-replace";
import { useTranslation } from "react-i18next";
import * as Styled from "../Home.styles";
import { Links } from "constants/Links";

interface BirthDescriptionProps {}

const BirthDescription: React.FC<BirthDescriptionProps> = () => {
  const { t } = useTranslation();

  return (
    <Styled.DescriptionWrapper>
      {reactStringReplace(
        t("born-description"),
        t("country.iran"),
        (match, i) => (
          <Styled.LinkTo
            key={i}
            href={Links.wiki_iran}
            target="_blank"
            rel="noreferrer"
          >
            {match}
          </Styled.LinkTo>
        )
      )}{" "}
      {reactStringReplace(t("live-description"), t("hometown"), (match, i) => (
        <Styled.LinkTo
          key={i}
          href={Links.wiki_rostamkola}
          target="_blank"
          rel="noreferrer"
        >
          {match}
        </Styled.LinkTo>
      ))}
    </Styled.DescriptionWrapper>
  );
};

export default BirthDescription;
