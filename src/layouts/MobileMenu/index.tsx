import { useEffect, useState } from "react";
import * as Styled from "./MobileMenu.styles";
import useScrollDirection from "hooks/useScrollDirection";
import HomeIcon from "components/Icons/HomeIcon";
import AppsIcon from "components/Icons/AppsIcon";
import ContactIcon from "components/Icons/ContactIcon";
import CodeIcon from "components/Icons/CodeIcon";
import MenuIcon from "components/Icons/MenuIcon";
import BottomSheet from "./BottomSheet";
import CustomLink from "components/CustomLink";
import { useTypedSelector } from "hooks/useTypedSelector";
import useActions from "hooks/useActions";

const MobileMenu: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const direction = useScrollDirection();
  const { isMobileMenuOpen } = useTypedSelector((state) => state.global);
  const { token } = useTypedSelector((state) => state.github);
  const { toggleMobileMenu, getGithubRepositories } = useActions();

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

  //! Get pinned repositories from my github(rasoul678)
  useEffect(() => {
    getGithubRepositories();
  }, [getGithubRepositories, token]);

  // useEffect(() => {
  //   const onScroll = () => {
  //     if (window.pageYOffset < 50 && hasVScrollbar) {
  //       setIsVisible(false);
  //     }
  //   };
  //   window.addEventListener("scroll", onScroll);
  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //   };
  // }, [hasVScrollbar]);

  return (
    <Styled.MobileMenuContainer isVisible={isVisible}>
      <Styled.MenuItem as={CustomLink} to="/">
        <HomeIcon size={35} />
      </Styled.MenuItem>
      <Styled.MenuItem as={CustomLink} to="/apps">
        <AppsIcon size={35} />
      </Styled.MenuItem>
      <Styled.MenuItem
        style={{ position: "relative" }}
        onClick={handleMenuClick}
        isOpen={isMobileMenuOpen}
      >
        <BottomSheet />
        {!isMobileMenuOpen && <MenuIcon size={35} />}
      </Styled.MenuItem>
      <Styled.MenuItem as={CustomLink} to="/code">
        <CodeIcon size={35} />
      </Styled.MenuItem>
      <Styled.MenuItem as={CustomLink} to="/contact">
        <ContactIcon size={35} />
      </Styled.MenuItem>
    </Styled.MobileMenuContainer>
  );
};

export default MobileMenu;
