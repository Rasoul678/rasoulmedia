import { useRef, useState } from "react";
import * as Styled from "./MobileMenu.styles";
import usePreventScroll from "hooks/usePreventScroll";
import MenuIcon from "components/Icons/MenuIcon";
import { useTypedSelector } from "hooks/useTypedSelector";
import useActions from "hooks/useActions";
import Toggle from "components/Toggle";

const ExpandedMenu: React.FC = () => {
  const { isMobileMenuOpen } = useTypedSelector((state) => state.global);
  const { toggleMobileMenu, toggleTheme } = useActions();
  const ref = useRef<HTMLDivElement>(null);
  const cellsRef = useRef<HTMLDivElement>(null);
  const [isChecked, setIsChecked] = useState(false);
  const { theme } = useTypedSelector((state) => state.global);

  usePreventScroll(ref, isMobileMenuOpen);

  const handleCloseMobileMenu = () => {
    toggleMobileMenu(false);
  };

  const handleToggle = (value: boolean) => {
    toggleTheme(theme === "dark" ? "light" : "dark");
    setIsChecked(value);
  };

  return (
    <Styled.ExpandedMenuContainer ref={ref} isOpen={isMobileMenuOpen}>
      <MenuIcon size={35} onClick={handleCloseMobileMenu} />

      <Styled.MenuCellsContainer ref={cellsRef}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
          <Styled.MenuCellWrapper key={i}>Cell : {i}</Styled.MenuCellWrapper>
        ))}
        <Styled.MenuCellWrapper>
          <Toggle value={isChecked} onToggle={handleToggle} />
          <Styled.MenuCellName>{theme === "dark" ? "Dark" : "Light"}</Styled.MenuCellName>
        </Styled.MenuCellWrapper>
      </Styled.MenuCellsContainer>
    </Styled.ExpandedMenuContainer>
  );
};

export default ExpandedMenu;
