import { memo, useEffect, useState } from "react";
import Particles, { Container } from "react-tsparticles";
import { useTheme } from "styled-components";
import md5 from "md5";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";
import reactStringReplace from "react-string-replace";
import { useParticlesConfig } from "config";
import * as Styled from "./HomeGallery.styles";
import CustomTypewriter from "components/CustomTypewriter";
import LottieMaker from "components/LottieMaker";
import ArrowDownWhite from "assets/animations/34342-arrow-down-icon-white.json";
import ArrowDownBlack from "assets/animations/34342-arrow-down-icon.json";
import LinkedinIcon from "components/Icons/LinkedinIcon";
import GithubIcon from "components/Icons/GithubIcon";
import StackOverflowIcon from "components/Icons/StackOverflowIcon";
import { Links } from "constants/Links";
import Fade from "components/CustomReveal/Fade";

const HomeGallery: React.FC = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [particlesKey, setParticlesKey] = useState<number | null>(null);
  const theme = useTheme();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setParticlesKey(Math.random());
  }, [theme]);

  const particlesLoaded = (container: Container) => {
    // console.log(container);
  };

  const options = useParticlesConfig();

  const handleLinkClick = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  let size = 300;
  let src =
    "http://www.gravatar.com/avatar/" + md5(Links.email) + ".jpg?s=" + size;

  return (
    <Styled.HomeGalleryContainer>
      <Styled.IntroductionContainer>
        <Fade bottom cascade when={isImageLoaded}>
          <div className="content-wrapper">
            <img
              src={"https://i.pravatar.cc/135?img=67"}
              alt="Rasoul"
              className="home-gallery-avatar"
              width="135"
              onLoad={() => setIsImageLoaded(true)}
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
                onClick={() => handleLinkClick(Links.linkedin)}
              />
              <StackOverflowIcon
                size={42}
                onClick={() => handleLinkClick(Links.stackOverflow)}
              />
              <GithubIcon
                size={42}
                onClick={() => handleLinkClick(Links.github)}
              />
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
                <LottieMaker
                  animationJSON={
                    theme.name === "dark" ? ArrowDownWhite : ArrowDownBlack
                  }
                  autoplay
                  width="4rem"
                />
              </ScrollLink>
            </Styled.ArrowDownWrapper>
          </div>
        </Fade>
      </Styled.IntroductionContainer>
      <Particles
        key={particlesKey}
        id="home-gallery"
        loaded={particlesLoaded}
        options={options as any}
        canvasClassName="gallery-canvas"
      />
    </Styled.HomeGalleryContainer>
  );
};

export default memo(HomeGallery);
