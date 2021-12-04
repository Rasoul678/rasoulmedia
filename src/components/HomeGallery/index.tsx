import Particles, { Container } from "react-tsparticles";
import { useTheme } from "styled-components";
import md5 from "md5";
import { Link as ScrollLink } from "react-scroll";
import { getParticlesConfig } from "../../config";
import * as Styled from "./HomeGallery.styles";
import CustomTypewriter from "../CustomTypewriter";
import LottieMaker from "../LottieMaker";
import ArrowDownWhite from "../../assets/animations/34342-arrow-down-icon-white.json";
import ArrowDownBlack from "../../assets/animations/34342-arrow-down-icon.json";
import LinkedinIcon from "../../components/Icons/LinkedinIcon";
import GithubIcon from "../../components/Icons/GithubIcon";
import { Links } from "../../constants/Links";

const HomeGallery: React.FC = () => {
  const theme = useTheme();
  const particlesLoaded = (container: Container) => {
    // console.log(container);
  };

  const options = {
    lineColor: theme.particles.lineColor,
    particleNumber: 70,
    backgroundColor: theme.particles.backgroundColor,
  };

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
        <img
          src={"https://i.pravatar.cc/135?img=67"}
          alt="Rasoul"
          className="home-gallery-avatar"
          width="135"
        />
        <Styled.UserNameWrapper>
          Hi, I'm <Styled.UserName>Rasoul Hesami</Styled.UserName>
        </Styled.UserNameWrapper>
        <CustomTypewriter
          strings={[
            "I like to design things.",
            "I love learning new tech.",
            "I like meeting new people.",
            "I create unique apps.",
          ]}
          wrapperClassName="typing"
          cursorClassName="cursor"
          cursor="|"
        />
        <Styled.SocialLinkWrapper>
          <LinkedinIcon
            size={40}
            onClick={() => handleLinkClick(Links.linkedin)}
          />
          <GithubIcon size={46} onClick={() => handleLinkClick(Links.github)} />
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
      </Styled.IntroductionContainer>
      <Particles
        id="home-gallery"
        loaded={particlesLoaded}
        options={getParticlesConfig(options) as any}
        canvasClassName="gallery-canvas"
      />
    </Styled.HomeGalleryContainer>
  );
};

export default HomeGallery;
