import { memo, useCallback, useMemo } from "react";
import Lottie from "lottie-web";
import TwitterLottie from "components/Lotties/SocialMedia/Twitter";
import InstagramLottie from "components/Lotties/SocialMedia/Instagram";
import LinkedinLottie from "components/Lotties/SocialMedia/Linkedin";
import FacebookLottie from "components/Lotties/SocialMedia/Facebook";
import Flex from "components/Flex";
import { openNewTab, shuffleArray } from "utils/helpers";
import { ThemeColors } from "constants/Colors";
import { useTypedSelector } from "hooks/useTypedSelector";
import * as Styled from "views/Contact/Contact.styles";
import { Links } from "constants/Links";

interface SocialsProps {}

const Socials: React.FC<SocialsProps> = () => {
  const { themeMode } = useTypedSelector((state) => state.global);

  const memoColors = useMemo(
    () => shuffleArray(ThemeColors[themeMode]),
    [themeMode]
  );

  const handleMouseEnter = useCallback(
    (link: string) => () => {
      Lottie.play(link);
    },
    []
  );

  const handleMouseLeave = useCallback(
    (link: string) => () => {
      Lottie.stop(link);
    },
    []
  );

  const handleClick = useCallback(
    (link: string) => () => {
      openNewTab(link);
    },
    []
  );

  return (
    <Flex
      position="relative"
      margin="2rem 0"
      gap="1rem"
      justifyContent="center"
    >
      <Flex
        width="100%"
        alignItems="center"
        justifyContent="center"
        gap="0.5rem"
      >
        <Styled.SocialWrapper
          onHoverStart={handleMouseEnter("twitter")}
          onHoverEnd={handleMouseLeave("twitter")}
          onClick={handleClick(Links.twitter)}
        >
          <TwitterLottie color={memoColors[0]} style={{ maxWidth: "3rem" }} />
        </Styled.SocialWrapper>

        <Styled.SocialWrapper
          onMouseEnter={handleMouseEnter("linkedin")}
          onMouseLeave={handleMouseLeave("linkedin")}
          onClick={handleClick(Links.linkedin)}
        >
          <LinkedinLottie color={memoColors[1]} style={{ maxWidth: "3rem" }} />
        </Styled.SocialWrapper>
        <Styled.SocialWrapper
          onMouseEnter={handleMouseEnter("instagram")}
          onMouseLeave={handleMouseLeave("instagram")}
          onClick={handleClick(Links.instagram)}
        >
          <InstagramLottie color={memoColors[2]} style={{ maxWidth: "3rem" }} />
        </Styled.SocialWrapper>
        <Styled.SocialWrapper
          onMouseEnter={handleMouseEnter("facebook")}
          onMouseLeave={handleMouseLeave("facebook")}
          onClick={handleClick(Links.facebook)}
        >
          <FacebookLottie color={memoColors[3]} style={{ maxWidth: "3rem" }} />
        </Styled.SocialWrapper>
      </Flex>
    </Flex>
  );
};

export default memo(Socials);
