import { memo, useEffect, useState } from "react";
import md5 from "md5";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";
import reactStringReplace from "react-string-replace";
import * as Styled from "./HomeGallery.styles";
import CustomTypewriter from "components/CustomTypewriter";
import LinkedinIcon from "components/Icons/LinkedinIcon";
import GithubIcon from "components/Icons/GithubIcon";
import StackOverflowIcon from "components/Icons/StackOverflowIcon";
import { Links } from "constants/Links";
import { openNewTab } from "utils/helpers";
import MatrixBackground from "components/MatrixBackground/MatrixBackground";
import ScrollDown from "components/Lotties/ScrollDown";

const HomeGallery: React.FC = () => {
  const [matrixKey, setMatrixKey] = useState<number | null>(null);
  const { t } = useTranslation();

  //! Trigger matrix effect
  useEffect(() => {
    setTimeout(() => {
      setMatrixKey(Math.random());
    }, 50);
  }, []);

  const src = `${Links.gravatar}${md5(
    Links.email
  )}.jpg?s=500&timestamp=${new Date().getMonth()}`;

  return (
    <Styled.HomeGalleryContainer>
      <Styled.IntroductionContainer>
        <div className="content-wrapper">
          <img
            src={src}
            alt="Rasoul"
            className="home-gallery-avatar"
            width="135"
          />
          <Styled.UserNameWrapper>
            {reactStringReplace(t("welcome-intro"), t("me"), (match, i) => (
              <Styled.Name key={i}>{match}</Styled.Name>
            ))}
          </Styled.UserNameWrapper>
          <CustomTypewriter
            strings={[
              t("typewriter.1"),
              t("typewriter.2"),
              t("typewriter.3"),
              t("typewriter.4"),
            ]}
            wrapperClassName="typing"
            cursorClassName="cursor"
            cursor="|"
          />
          <Styled.SocialLinkWrapper>
            <LinkedinIcon
              size={36}
              onClick={() => openNewTab(Links.linkedin)}
            />
            <StackOverflowIcon
              size={42}
              onClick={() => openNewTab(Links.stackOverflow)}
            />
            <GithubIcon size={42} onClick={() => openNewTab(Links.github)} />
          </Styled.SocialLinkWrapper>
          <Styled.ArrowDownWrapper>
            <ScrollLink
              activeClass="active"
              to="bio"
              spy={true}
              smooth={true}
              // offset={200}
              duration={500}
              className="scroll-down-btn"
            >
              <ScrollDown />
            </ScrollLink>
          </Styled.ArrowDownWrapper>
        </div>
      </Styled.IntroductionContainer>
      <MatrixBackground key={matrixKey} timeout={75} />
    </Styled.HomeGalleryContainer>
  );
};

export default memo(HomeGallery);
