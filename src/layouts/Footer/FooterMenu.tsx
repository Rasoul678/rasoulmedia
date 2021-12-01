import * as Styled from "./Footer.styles";
import ReactIcon from "../../components/Icons/ReactIcon";

interface FooterMenuProps {
  isMenuOpen: boolean;
}

const FooterMenu: React.FC<FooterMenuProps> = ({ isMenuOpen }) => {
  return (
    <Styled.FooterMenuContainer
      onClick={(e) => e.stopPropagation()}
      isOpen={isMenuOpen}
    >
      {[1, 2, 3, 4, 5].map((i) => {
        return (
          <Styled.FooterMenuItem key={i}>
            <ReactIcon size={45} />
          </Styled.FooterMenuItem>
        );
      })}
    </Styled.FooterMenuContainer>
  );
};

export default FooterMenu;
