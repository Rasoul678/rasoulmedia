import reactStringReplace from "react-string-replace";
import { useTranslation } from "react-i18next";
import * as Styled from "../Home.styles";
import { Links } from "constants/Links";

interface BSDescriptionProps {}

const BSDescription: React.FC<BSDescriptionProps> = () => {
  const { t } = useTranslation();

  return (
    <Styled.DescriptionWrapper>
      {reactStringReplace(
        t("bachelor-description"),
        t("university.mut"),
        (match, i) => (
          <Styled.LinkTo
            key={i}
            href={Links.MUT}
            target="_blank"
            rel="noreferrer"
          >
            {match}
          </Styled.LinkTo>
        )
      )}
    </Styled.DescriptionWrapper>
  );
};

export default BSDescription;
