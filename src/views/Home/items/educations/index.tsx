import React from "react";
import { useInView } from "react-intersection-observer";
import BachelorOfScienceLottie from "components/Lotties/Graduation/v2";
import * as Styled from "./Educations.styles";
import { useTranslation } from "react-i18next";
import reactStringReplace from "react-string-replace";
import { Links } from "constants/Links";

interface EducationsProps {}

const Educations: React.FC<EducationsProps> = () => {
  const { t } = useTranslation();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  console.log({ inView, entry });

  return (
    <Styled.EducationsContainer ref={ref}>
      <Styled.EducationsWrapper
        initial={{ width: 0 }}
        animate={{ width: inView ? "100%" : 0 }}
        transition={{ duration: 0.4 }}
      >
        <Styled.EducationsItems>
          <Styled.Heading>{t("edu.header")}</Styled.Heading>
          <Styled.ItemsList>
            <Styled.Item>
              {reactStringReplace(t("edu.first"), t("hometown"), (match, i) => (
                <Styled.LinkTo
                  key={i}
                  href={Links.wiki_rostamkola}
                  target="_blank"
                  rel="noreferrer"
                >
                  {match}
                </Styled.LinkTo>
              ))}
            </Styled.Item>
            <Styled.Item>
              {reactStringReplace(
                t("edu.second"),
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
            </Styled.Item>
            <Styled.Item>
              {reactStringReplace(
                t("edu.third"),
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
            </Styled.Item>
          </Styled.ItemsList>
        </Styled.EducationsItems>
        <Styled.LottieWrapper>
          <BachelorOfScienceLottie className="bs-lottie-icon" />
        </Styled.LottieWrapper>
      </Styled.EducationsWrapper>
    </Styled.EducationsContainer>
  );
};

export default Educations;
