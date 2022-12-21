import { memo, useCallback } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";
import reactStringReplace from "react-string-replace";
import * as Styled from "./LapTopGallery.styles";
import CustomTypewriter from "components/CustomTypewriter";
import ScrollDown from "components/Lotties/ScrollDown";
import ProfilePic from "assets/profile-pic-2.jpg";
import SocialsLink from "./Socials";
import { openNewTab } from "utils/helpers";
import { Links } from "constants/Links";

const HomeGallery: React.FC = () => {
  const { t } = useTranslation();

  const handleClick = useCallback((link: string) => () => openNewTab(link), []);

  const handleKeyDown = useCallback(
    (link: string) => (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Enter") {
        openNewTab(link);
      }
    },
    []
  );

  const handlekeyPressLink = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    (target.children[0] as HTMLElement).click();
  };

  return (
    <Styled.HomeGalleryContainer>
      <Styled.IntroductionContainer>
        <Styled.IntroHead data-tour="step-3">
          <Styled.ImageWrapper
            tabIndex={0}
            onClick={handleClick(Links.github)}
            onKeyDown={handleKeyDown(Links.github)}
            title='Visit github'
          >
            <Styled.Image
              initial={{ scale: 0 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              src={ProfilePic}
              alt="My-Picture"
              aria-label="my profile picture"
            />
          </Styled.ImageWrapper>
          <SocialsLink />
        </Styled.IntroHead>
        <Styled.IntroductionInfoWrapper>
          <div data-tour="step-1">
            <Styled.UserNameWrapper
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              tabIndex={0}
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
              <Styled.Skill tabIndex={0} aria-label="Web Developer">
                Web Developer
              </Styled.Skill>{" "}
              |{" "}
              <Styled.Skill tabIndex={0} aria-label="Javascript">
                Javascript
              </Styled.Skill>{" "}
              |{" "}
              <Styled.Skill tabIndex={0} aria-label="ReactJS">
                ReactJS
              </Styled.Skill>{" "}
              |{" "}
              <Styled.Skill tabIndex={0} aria-label="HTML">
                HTML
              </Styled.Skill>{" "}
              |{" "}
              <Styled.Skill tabIndex={0} aria-label="CSS">
                CSS
              </Styled.Skill>
            </Styled.UserSkills>
          </div>
          <Styled.TypeWriterWrapper
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            data-tour="step-2"
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
        tabIndex={0}
        onKeyPress={handlekeyPressLink}
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
