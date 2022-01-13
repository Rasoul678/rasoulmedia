import { memo, useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";
import reactStringReplace from "react-string-replace";
import * as Styled from "../HomeGallery.styles";
import CustomTypewriter from "components/CustomTypewriter";
import LinkedinIcon from "components/Icons/LinkedinIcon";
import GithubIcon from "components/Icons/GithubIcon";
import StackOverflowIcon from "components/Icons/StackOverflowIcon";
import { Links } from "constants/Links";
import { openNewTab } from "utils/helpers";
import ScrollDown from "components/Lotties/ScrollDown";
import { motion, useCycle } from "framer-motion";
import ProfilePic from "assets/profile-pic.png";
import NightBackground from "components/NightBackground/NightBackground";

const HomeGallery: React.FC = () => {


  return (
    <Styled.HomeGalleryContainer>
      <Styled.IntroductionContainer>

      </Styled.IntroductionContainer>
      <NightBackground />
    </Styled.HomeGalleryContainer>
  );
};

export default memo(HomeGallery);
