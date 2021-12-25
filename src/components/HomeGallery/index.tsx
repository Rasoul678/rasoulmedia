import { memo, useEffect, useRef, useState } from "react";
import { useTheme } from "styled-components";
import md5 from "md5";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";
import reactStringReplace from "react-string-replace";
import * as Styled from "./HomeGallery.styles";
import CustomTypewriter from "components/CustomTypewriter";
import ArrowDownWhite from "assets/animations/34342-arrow-down-icon-white.json";
import ArrowDownBlack from "assets/animations/34342-arrow-down-icon.json";
import LinkedinIcon from "components/Icons/LinkedinIcon";
import GithubIcon from "components/Icons/GithubIcon";
import StackOverflowIcon from "components/Icons/StackOverflowIcon";
import { Links } from "constants/Links";
import { openNewTab } from "utils/helpers";
import MatrixBackground from "components/MatrixBackground/MatrixBackground";
import useLottie from "hooks/useLottie";

const HomeGallery: React.FC = () => {
  const [matrixKey, setMatrixKey] = useState<number | null>(null);
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const container = useRef<HTMLDivElement | null>(null);

  useLottie({
    container: container as any,
    animationData: theme.name === "dark" ? ArrowDownWhite : ArrowDownBlack,
    name: 'arrow-down'
  });

  //! Trigger matrix effect
  useEffect(() => {
    setTimeout(() => {
      setMatrixKey(Math.random());
    }, 50);
  }, []);

  let size = 300;
  let src =
    "http://www.gravatar.com/avatar/" + md5(Links.email) + ".jpg?s=" + size;

  return (
    <Styled.HomeGalleryContainer>
      <Styled.IntroductionContainer>
        <div className="content-wrapper">
          <img
            src={"https://i.pravatar.cc/135?img=67"}
            alt="Rasoul"
            className="home-gallery-avatar"
            width="135"
          />
          <Styled.UserNameWrapper>
            {reactStringReplace(
              t("welcome-intro"),
              i18n.language === "fa" ? "رسول حسامی" : "Rasoul Hesami",
              (match, i) => (
                <Styled.Name key={i}>{match}</Styled.Name>
              )
            )}
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
              to="next"
              spy={true}
              smooth={true}
              // offset={200}
              duration={500}
              className="scroll-down-btn"
            >
              <div style={{ width: "4rem" }} ref={container} />
            </ScrollLink>
          </Styled.ArrowDownWrapper>
        </div>
      </Styled.IntroductionContainer>
      <MatrixBackground key={matrixKey} timeout={75} />
    </Styled.HomeGalleryContainer>
  );
};

export default memo(HomeGallery);
