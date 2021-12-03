import { useEffect, useState } from "react";
import * as Styled from "./MobileMenu.styles";
import useScrollDirection from "../../hooks/useScrollDirection";
import HomeIcon from "../../components/Icons/HomeIcon";
import AppsIcon from "../../components/Icons/AppsIcon";
import ContactIcon from "../../components/Icons/ContactIcon";
import CodeIcon from "../../components/Icons/CodeIcon";
import MenuIcon from "../../components/Icons/MenuIcon";
import ExpandedMenu from "./ExpandedMenu";
import CustomLink from "../../components/CustomLink";

const MobileMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const direction = useScrollDirection();

  const handleMenuClick = () => {
    setIsMenuOpen((oldState) => !oldState);
  };

  const hasScrollbar =
    document.body.clientHeight > document.documentElement.clientHeight;

  useEffect(() => {
    if (direction === "down") {
      setIsMenuOpen(false);
    }

    if (!hasScrollbar) {
      setIsVisible(true);
    }

    if (direction === "up") {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [direction, hasScrollbar]);

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset === 0) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    if (hasScrollbar) {
      setIsVisible(false);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [hasScrollbar]);

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
        isOpen={isMenuOpen}
      >
        <ExpandedMenu isMenuOpen={isMenuOpen} />
        <MenuIcon size={35} />
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
