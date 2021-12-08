import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./MobileMenu.styles";
import usePreventScroll from "hooks/usePreventScroll";
import MenuIcon from "components/Icons/MenuIcon";
import SunIcon from "components/Icons/SunIcon";
import MoonIcon from "components/Icons/MoonIcon";
import { useTypedSelector } from "hooks/useTypedSelector";
import useActions from "hooks/useActions";
import Modal from "components/Modal";
import useModal from "hooks/useModal";
import SelectLang from "./SelectLang";
import useLanguages from "hooks/useLanguages";

const ExpandedMenu: React.FC = () => {
  const { isMobileMenuOpen } = useTypedSelector((state) => state.global);
  const { toggleMobileMenu, toggleTheme } = useActions();
  const ref = useRef<HTMLDivElement>(null);
  const cellsRef = useRef<HTMLDivElement>(null);
  const { theme } = useTypedSelector((state) => state.global);
  const { t, i18n } = useTranslation();
  const { isShown, toggle } = useModal();

  usePreventScroll(ref, isMobileMenuOpen);
  const { flag } = useLanguages(i18n.language);

  const handleCloseMobileMenu = () => {
    toggleMobileMenu(false);
  };

  const handleToggle = () => {
    toggleTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Styled.ExpandedMenuContainer ref={ref} isOpen={isMobileMenuOpen}>
      <MenuIcon size={35} onClick={handleCloseMobileMenu} />
      <Styled.MenuCellsContainer ref={cellsRef}>
        <Styled.MenuCellWrapper onClick={handleToggle}>
          {theme === "dark" ? (
            <SunIcon size={60} />
          ) : (
            <MoonIcon className="dark-mode" size={60} />
          )}
        </Styled.MenuCellWrapper>
        <Styled.MenuCellWrapper>
          <>
            <Styled.LangCellWrapper onClick={toggle}>
              {flag}
            </Styled.LangCellWrapper>
            <Modal
              isShown={isShown}
              hide={toggle}
              headerText={t("select-lang")}
              modalContent={<SelectLang toggle={toggle} />}
            />
          </>
        </Styled.MenuCellWrapper>

        {[1, 2, 3, 4].map((i) => (
          <Styled.MenuCellWrapper key={i}>Cell : {i}</Styled.MenuCellWrapper>
        ))}
      </Styled.MenuCellsContainer>
    </Styled.ExpandedMenuContainer>
  );
};

export default ExpandedMenu;
