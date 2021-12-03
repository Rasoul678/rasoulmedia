import Particles, { Container } from "react-tsparticles";
import { useTheme } from "styled-components";
import md5 from "md5";
import { Link as ScrollLink } from "react-scroll";
import { getParticlesConfig } from "../../config";
import * as Styled from "./HomeGallery.styles";
import CustomTypewriter from "../CustomTypewriter";
import LottieMaker from "../LottieMaker";
import ArrowDown from "../../assets/animations/8711-scroll-down-hint.json";
import LinkedinIcon from "../../components/Icons/LinkedinIcon";
import GithubIcon from "../../components/Icons/GithubIcon";

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

  let email = "h.rostami.r@gmail.com";
  let size = 300;
  let src = "http://www.gravatar.com/avatar/" + md5(email) + ".jpg?s=" + size;

  return (
    <Styled.HomeGalleryContainer>
      <Styled.IntroductionContainer>
        <img
          src={"https://i.pravatar.cc/150?img="}
          alt="Rasoul"
          className="home-gallery-avatar"
        />
        <Styled.UserNameWrapper>
          Hi, I'm <Styled.UserName>Rasoul Hesami</Styled.UserName>
        </Styled.UserNameWrapper>
        <CustomTypewriter
          strings={[
            "I like to design things.",
            "I love learning new tech.",
            "I love meeting new people.",
            "I create unique digital experiences.",
          ]}
          wrapperClassName="typing"
          cursorClassName="cursor"
          cursor="|"
        />
        <Styled.SocialLinkWrapper>
          <LinkedinIcon
            size={30}
            onClick={() =>
              handleLinkClick(
                "https://www.linkedin.com/in/rasoul-hesami-rostami/"
              )
            }
          />
          <GithubIcon
            size={34}
            onClick={() => handleLinkClick("https://github.com/Rasoul678")}
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
            <LottieMaker animationJSON={ArrowDown} autoplay width="5rem" />
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
