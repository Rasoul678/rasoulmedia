import { memo } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";
import reactStringReplace from "react-string-replace";
import * as Styled from "./LapTopGallery.styles";
import CustomTypewriter from "components/CustomTypewriter";
import ScrollDown from "components/Lotties/ScrollDown";
import ProfilePic from "assets/profile-pic-2.jpg";
import Socials from "./Socials";

const HomeGallery: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Styled.HomeGalleryContainer>
      <Styled.IntroductionContainer>
        <Styled.IntroHead>
          <Styled.ImageWrapper>
            <Styled.Image
              initial={{ scale: 0 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              src={ProfilePic}
              alt="My-Picture"
            />
          </Styled.ImageWrapper>
          <Socials />
        </Styled.IntroHead>
        <Styled.IntroductionInfoWrapper>
          <div>
            <Styled.UserNameWrapper
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {reactStringReplace(t("welcome-intro"), t("me"), (match, i) => (
                <Styled.Name key={i}>{match}</Styled.Name>
              ))}
            </Styled.UserNameWrapper>
            <Styled.UserSkills
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Styled.Skill>Web Developer</Styled.Skill> |{" "}
              <Styled.Skill>Javascript</Styled.Skill> |{" "}
              <Styled.Skill>ReactJS</Styled.Skill> |{" "}
              <Styled.Skill>HTML</Styled.Skill> |{" "}
              <Styled.Skill>CSS</Styled.Skill>
            </Styled.UserSkills>
          </div>
          <Styled.TypeWriterWrapper
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
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
          </Styled.TypeWriterWrapper>
        </Styled.IntroductionInfoWrapper>
      </Styled.IntroductionContainer>
      <Styled.ArrowDownWrapper
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <ScrollLink
          activeClass="active"
          to="github-repos"
          spy={true}
          smooth={true}
          duration={500}
          className="scroll-down-btn"
          offset={-60}
        >
          <ScrollDown />
        </ScrollLink>
      </Styled.ArrowDownWrapper>
    </Styled.HomeGalleryContainer>
  );
};

export default memo(HomeGallery);
