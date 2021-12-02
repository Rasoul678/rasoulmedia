import { useRef } from "react";
import * as Styled from "./MobileMenu.styles";
import usePreventScroll from "../../hooks/usePreventScroll";

interface ExpandedMenuProps {
  isMenuOpen: boolean;
}

const ExpandedMenu: React.FC<ExpandedMenuProps> = ({ isMenuOpen }) => {
  const ref = useRef<HTMLDivElement>(null);

  usePreventScroll(ref);

  return (
    <Styled.ExpandedMenuContainer
      ref={ref}
      onClick={(e) => e.stopPropagation()}
      isOpen={isMenuOpen}
    ></Styled.ExpandedMenuContainer>
  );
};

export default ExpandedMenu;
