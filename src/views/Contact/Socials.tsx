import { memo, useCallback, useMemo, useState } from "react";
import Lottie from "lottie-web";
import TwitterLottie from "components/Lotties/SocialMedia/Twitter";
import InstagramLottie from "components/Lotties/SocialMedia/Instagram";
import LinkedinLottie from "components/Lotties/SocialMedia/Linkedin";
import FacebookLottie from "components/Lotties/SocialMedia/Facebook";
import ThankYou from "components/SVG/ThankYou";
import Flex from "components/Flex";
import { shuffleArray } from "utils/helpers";
import { ThemeColors } from "constants/Colors";
import { useTypedSelector } from "hooks/useTypedSelector";
import SocialLink from "./SocialLink";
import * as Styled from "./Contact.styles";

interface SocialsProps {}

const Socials: React.FC<SocialsProps> = () => {
  const { themeMode } = useTypedSelector((state) => state.global);

  const memoColors = useMemo(() => shuffleArray(ThemeColors[themeMode]), []);

  const [show, setShow] = useState({
    twitter: false,
    instagram: false,
    linkedin: false,
    facebook: false,
  });

  const handleMouseEnter = useCallback(
    (link: string) => () => {
      Lottie.play(link);
      setShow({ ...show, [link]: true });
    },
    []
  );

  const handleMouseLeave = useCallback(
    (link: string) => () => {
      Lottie.stop(link);
      setShow({ ...show, [link]: false });
    },
    []
  );

  return (
    <Flex position="relative" marginTop="2rem">
      <ThankYou />

      <Flex flexDirection="column" width="100%" alignItems="flex-start">
        <Styled.SocialWrapper
          onMouseEnter={handleMouseEnter("twitter")}
          onMouseLeave={handleMouseLeave("twitter")}
        >
          {show.twitter && <SocialLink title="github" />}
          <TwitterLottie color={memoColors[0]} style={{ width: "3rem" }} />
        </Styled.SocialWrapper>
        <Styled.SocialWrapper
          onMouseEnter={handleMouseEnter("instagram")}
          onMouseLeave={handleMouseLeave("instagram")}
        >
          {show.instagram && <SocialLink title="github" />}
          <InstagramLottie color={memoColors[1]} style={{ width: "3rem" }} />
        </Styled.SocialWrapper>
        <Styled.SocialWrapper
          onMouseEnter={handleMouseEnter("linkedin")}
          onMouseLeave={handleMouseLeave("linkedin")}
        >
          {show.linkedin && <SocialLink title="linkedin" />}
          <LinkedinLottie color={memoColors[2]} style={{ width: "3rem" }} />
        </Styled.SocialWrapper>
        <Styled.SocialWrapper
          onMouseEnter={handleMouseEnter("facebook")}
          onMouseLeave={handleMouseLeave("facebook")}
        >
          {show.facebook && <SocialLink title="github" />}
          <FacebookLottie color={memoColors[3]} style={{ width: "3rem" }} />
        </Styled.SocialWrapper>
      </Flex>
    </Flex>
  );
};

export default memo(Socials);
