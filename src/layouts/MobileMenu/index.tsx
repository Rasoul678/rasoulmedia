import { useEffect, useRef, useState } from "react";
import * as Styled from "./MobileMenu.styles";
import useScrollDirection from "hooks/useScrollDirection";
// import HomeIcon from "components/Icons/HomeIcon";
// import AppsIcon from "components/Icons/AppsIcon";
// import ContactIcon from "components/Icons/ContactIcon";
// import CodeIcon from "components/Icons/CodeIcon";
import MenuIcon from "components/Icons/MenuIcon";
import BottomSheet from "./BottomSheet";
import CustomLink from "components/CustomLink";
import { useTypedSelector } from "hooks/useTypedSelector";
import useActions from "hooks/useActions";
import homeJson from "assets/animations/lordicons/green/63-home-outline-edited (dark).json";
import appsJson from "assets/animations/lordicons/green/12-layes-outline-edited (dark).json";
import codeJson from "assets/animations/lordicons/green/742-multimedia-code-1-outline-edited (dark).json";
import contactJson from "assets/animations/lordicons/green/981-consultation-outline-edited (dark).json";
import useLottie from "hooks/useLottie";

const MobileMenu: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const direction = useScrollDirection();
  const { isMobileMenuOpen } = useTypedSelector((state) => state.global);
  const { toggleMobileMenu } = useActions();
  const homeRef = useRef<HTMLDivElement | null>(null);
  const appsRef = useRef<HTMLDivElement | null>(null);
  const codeRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const lottie = useLottie({
    container: homeRef as any,
    animationData: homeJson,
    name: "home",
    loop: false,
  });

  useLottie({
    container: appsRef as any,
    animationData: appsJson,
    name: "apps",
    loop: false,
  });

  useLottie({
    container: codeRef as any,
    animationData: codeJson,
    name: "code",
    loop: false,
  });

  useLottie({
    container: contactRef as any,
    animationData: contactJson,
    name: "contact",
    loop: false,
  });

  const handleMenuClick = () => {
    !isMobileMenuOpen && toggleMobileMenu(!isMobileMenuOpen);
  };

  const hasVScrollbar = document.body.scrollHeight > document.body.clientHeight;

  useEffect(() => {
    if (direction === "down") {
      toggleMobileMenu(false);
    }

    if (!hasVScrollbar) {
      setIsVisible(true);
    }

    if (direction === "up") {
      setIsVisible(true);
    } else if (direction === "down") {
      setIsVisible(false);
    }
  }, [direction, hasVScrollbar, toggleMobileMenu]);

  return (
    <Styled.MobileMenuContainer isVisible={isVisible}>
      <Styled.MenuItem
        onMouseEnter={() => lottie.play("home")}
        onMouseLeave={() => lottie.stop("home")}
        as={CustomLink}
        to="/"
      >
        <div style={{ width: "2.5rem" }} ref={homeRef} />
        {/* <HomeIcon size={35} /> */}
      </Styled.MenuItem>
      <Styled.MenuItem
        onMouseEnter={() => lottie.play("apps")}
        onMouseLeave={() => lottie.stop("apps")}
        as={CustomLink}
        to="/apps"
      >
        <div ref={appsRef} />
        {/* <AppsIcon size={35} /> */}
      </Styled.MenuItem>
      <Styled.MenuItem onClick={handleMenuClick} isOpen={isMobileMenuOpen}>
        <BottomSheet />
        {!isMobileMenuOpen && <MenuIcon size={35} />}
      </Styled.MenuItem>
      <Styled.MenuItem
        onMouseEnter={() => lottie.play("code")}
        onMouseLeave={() => lottie.stop("code")}
        as={CustomLink}
        to="/code"
      >
        <div style={{ width: "4.7rem" }} ref={codeRef} />
        {/* <CodeIcon size={35} /> */}
      </Styled.MenuItem>
      <Styled.MenuItem
        onMouseEnter={() => lottie.play("contact")}
        onMouseLeave={() => lottie.stop("contact")}
        as={CustomLink}
        to="/contact"
      >
        <div style={{ width: "3rem" }} ref={contactRef} />
        {/* <ContactIcon size={35} /> */}
      </Styled.MenuItem>
    </Styled.MobileMenuContainer>
  );
};

export default MobileMenu;
