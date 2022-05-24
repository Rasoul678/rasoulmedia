import { useEffect, useState } from "react";
// import lottie from "lottie-web";
import * as Styled from "./MobileMenu.styles";
import useScrollDirection from "hooks/useScrollDirection";
import MenuIcon from "components/Icons/MenuIcon";
import BottomSheet from "./BottomSheet";
import CustomLink from "components/CustomLink";
import { useTypedSelector } from "hooks/useTypedSelector";
import useActions from "hooks/useActions";

import HomeLottie from "components/Lotties/Home";
import LayersLottie from "components/Lotties/Layers";
import CodeLottie from "components/Lotties/Code";
import ContactLottie from "components/Lotties/Contact";

const MobileMenu: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const direction = useScrollDirection();
  const { isMobileMenuOpen } = useTypedSelector((state) => state.global);
  const { toggleMobileMenu } = useActions();

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
        // onMouseEnter={() => lottie.play("home")}
        // onMouseLeave={() => lottie.stop("home")}
        as={CustomLink}
        to="/"
      >
        <HomeLottie style={{ height: "2.5rem" }} />
      </Styled.MenuItem>
      <Styled.MenuItem
        // onMouseEnter={() => lottie.play("apps")}
        // onMouseLeave={() => lottie.stop("apps")}
        as={CustomLink}
        to="/apps"
      >
        <LayersLottie style={{ height: "4.7rem" }} />
      </Styled.MenuItem>
      <Styled.MenuItem onClick={handleMenuClick} isOpen={isMobileMenuOpen}>
        <BottomSheet />
        {!isMobileMenuOpen && <MenuIcon onClick={handleMenuClick} size={35} />}
      </Styled.MenuItem>
      <Styled.MenuItem
        // onMouseEnter={() => lottie.play("code")}
        // onMouseLeave={() => lottie.stop("code")}
        as={CustomLink}
        to="/code"
      >
        <CodeLottie style={{ height: "4.7rem", width: "4.7rem" }} />
      </Styled.MenuItem>
      <Styled.MenuItem
        // onMouseEnter={() => lottie.play("contact")}
        // onMouseLeave={() => lottie.stop("contact")}
        as={CustomLink}
        to="/contact"
      >
        <ContactLottie style={{ height: "4rem" }} />
      </Styled.MenuItem>
    </Styled.MobileMenuContainer>
  );
};

export default MobileMenu;
