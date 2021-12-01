import * as Styled from "./Footer.styles";
import useScrollDirection from "../../hooks/useScrollDirection";
import HomeIcon from "../../components/Icons/HomeIcon";
import AppsIcon from "../../components/Icons/AppsIcon";
import ContactIcon from "../../components/Icons/ContactIcon";
import CodeIcon from "../../components/Icons/CodeIcon";
import MenuIcon from "../../components/Icons/MenuIcon";
import FooterMenu from "./FooterMenu";
import { useEffect, useState } from "react";

const Footer: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const direction = useScrollDirection();

  const handleMenuClick = () => {
    setIsMenuOpen((oldState) => !oldState);
  };

  useEffect(() => {
    if (direction === "up") {
      setIsMenuOpen(false);
    }
  }, [direction]);

  return (
    <Styled.FooterContainer isVisible={direction === "down" ? true : false}>
      <Styled.FooterItem>
        <HomeIcon size={35} />
      </Styled.FooterItem>
      <Styled.FooterItem>
        <AppsIcon size={35} />
      </Styled.FooterItem>
      <Styled.FooterItem
        style={{ position: "relative" }}
        onClick={handleMenuClick}
      >
        <FooterMenu isMenuOpen={isMenuOpen} />
        <MenuIcon size={35} />
      </Styled.FooterItem>
      <Styled.FooterItem>
        <CodeIcon size={35} />
      </Styled.FooterItem>
      <Styled.FooterItem>
        <ContactIcon size={35} />
      </Styled.FooterItem>
    </Styled.FooterContainer>
  );
};

export default Footer;
