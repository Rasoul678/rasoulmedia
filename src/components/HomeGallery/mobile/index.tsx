import { memo, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";
import reactStringReplace from "react-string-replace";
import { motion } from "framer-motion";
import * as Styled from "./MobileGallery.styles";
import CustomTypewriter from "components/CustomTypewriter";
import LinkedinIcon from "components/Icons/LinkedinIcon";
import GithubIcon from "components/Icons/GithubIcon";
import StackOverflowIcon from "components/Icons/StackOverflowIcon";
import { Links } from "constants/Links";
import { openNewTab } from "utils/helpers";
import ScrollDown from "components/Lotties/ScrollDown";
import ProfilePic from "assets/profile-pic.png";
import AstronautPic from "assets/astronaut.png";
import NightBackground from "components/NightBackground/NightBackground";

const HomeGallery: React.FC = () => {
  const [showIntro, setShowIntro] = useState(false);
  const { t } = useTranslation();

  console.log("render");

  return (
    <Styled.HomeGalleryContainer>
      <Styled.AstronautWrapper
        initial={{ x: 0 }}
        animate={{
          x: showIntro ? -500 : 0,
          transition: { duration: 1, ease: "easeInOut" },
        }}
      >
        <Styled.Image
          animate={{ y: [5, 15, 5] }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          src={AstronautPic}
          alt="astronaut"
        />
        <ScrollDown
          name="slide-mobile"
          style={{
            width: "4rem",
            transform: "rotateZ(-90deg)",
            cursor: "pointer",
          }}
          onClick={() => setShowIntro((v) => !v)}
        />
      </Styled.AstronautWrapper>
      <Styled.IntroductionContainer
        initial={{ x: 500 }}
        animate={
          showIntro ? { x: 0, display: "block" } : { x: 1000, display: "none" }
        }
        transition={{ duration: 1 }}
      >
        <div className="content-wrapper">
          <motion.img
            src={ProfilePic}
            alt="Rasoul"
            className="home-gallery-avatar"
            width="125"
          />
          <Styled.UserNameWrapper>
            {reactStringReplace(t("welcome-intro"), t("me"), (match, i) => (
              <Styled.Name key={i}>{match}</Styled.Name>
            ))}
          </Styled.UserNameWrapper>
          <Styled.TypeWriterWrapper>
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
          <Styled.SocialLinkWrapper>
            <motion.div>
              <LinkedinIcon
                size={30}
                onClick={() => openNewTab(Links.linkedin)}
              />
            </motion.div>
            <motion.div>
              <StackOverflowIcon
                size={35}
                onClick={() => openNewTab(Links.stackOverflow)}
              />
            </motion.div>
            <motion.div>
              <GithubIcon size={35} onClick={() => openNewTab(Links.github)} />
            </motion.div>
          </Styled.SocialLinkWrapper>
          <Styled.ArrowDownWrapper>
            <ScrollLink
              activeClass="active"
              to="bio"
              spy={true}
              smooth={true}
              duration={500}
              className="scroll-down-btn"
            >
              <ScrollDown />
            </ScrollLink>
          </Styled.ArrowDownWrapper>
          <Styled.Blob />
        </div>
      </Styled.IntroductionContainer>
      <NightBackground />
    </Styled.HomeGalleryContainer>
  );
};

export default memo(HomeGallery);
