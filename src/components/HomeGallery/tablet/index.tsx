import { memo, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import reactStringReplace from "react-string-replace";
import * as Styled from "./TabletGallery.styles";
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

  return (
    <Styled.HomeGalleryContainer>
      <Styled.AstronautWrapper
        initial={{ x: 0 }}
        animate={
          showIntro && {
            x: -1000,
            transitionEnd: {
              display: "none",
            },
          }
        }
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <Styled.Image
          animate={{ y: [0, 10, 0] }}
          transition={{
            type: "spring",
            stiffness: 100,
            repeat: Infinity,
            duration: 3,
          }}
          src={AstronautPic}
          alt="astronaut"
        />
        <ScrollDown
          name="slide-tablet"
          style={{
            width: "4rem",
            transform: "rotateZ(-90deg)",
            cursor: "pointer",
          }}
          onClick={() => setShowIntro((v) => !v)}
        />
      </Styled.AstronautWrapper>

      {showIntro && (
        <Styled.IntroductionContainer
          initial={{ x: 1000, display: "none" }}
          animate={showIntro && { x: 0, display: "flex" }}
          transition={{ duration: 0.7 }}
        >
          <Styled.Blob>
            <Styled.Image
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
              src={ProfilePic}
              alt="Rasoul"
              width="125"
            />
            <Styled.SocialLinkWrapper
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div whileHover={{ scale: 1.2, rotate: 360 }}>
                <LinkedinIcon
                  size={30}
                  onClick={() => openNewTab(Links.linkedin)}
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: 360 }}>
                <StackOverflowIcon
                  size={35}
                  onClick={() => openNewTab(Links.stackOverflow)}
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: 360 }}>
                <GithubIcon
                  size={35}
                  onClick={() => openNewTab(Links.github)}
                />
              </motion.div>
            </Styled.SocialLinkWrapper>
          </Styled.Blob>
          <Styled.IntroductionInfoWrapper>
            <Styled.UserNameWrapper
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {reactStringReplace(t("welcome-intro"), t("me"), (match, i) => (
                <Styled.Name key={i}>{match}</Styled.Name>
              ))}
            </Styled.UserNameWrapper>
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

            <Styled.ArrowDownWrapper
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
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
          </Styled.IntroductionInfoWrapper>
        </Styled.IntroductionContainer>
      )}
      <NightBackground />
    </Styled.HomeGalleryContainer>
  );
};

export default memo(HomeGallery);
