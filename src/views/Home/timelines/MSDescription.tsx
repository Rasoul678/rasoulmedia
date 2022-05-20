import reactStringReplace from "react-string-replace";
import { useTranslation } from "react-i18next";
import * as Styled from "../Home.styles";
import { Links } from "constants/Links";

interface MSDescriptionProps {}

const MSDescription: React.FC<MSDescriptionProps> = () => {
  const { t } = useTranslation();

  return (
    <Styled.DescriptionWrapper>
      {reactStringReplace(
        t("master-description"),
        t("university.sbu"),
        (match, i) => (
          <Styled.LinkTo
            key={i}
            href={Links.SBU}
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

export default MSDescription;
