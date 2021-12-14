import React, { useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./MobileMenu.styles";
import usePreventScroll from "hooks/usePreventScroll";
import MenuIcon from "components/Icons/MenuIcon";
import SunIcon from "components/Icons/SunIcon";
import MoonIcon from "components/Icons/MoonIcon";
import ColorPaletteIcon from "components/Icons/ColorPaletteIcon";
import { useTypedSelector } from "hooks/useTypedSelector";
import useActions from "hooks/useActions";
import Modal from "components/Modal";
import useModal from "hooks/useModal";
import SelectLanguage from "./SelectLanguage";
import SelectPalette from "./SelectPalette";
import useLanguages from "hooks/useLanguages";

type ModalType = "language" | "palette" | null;

const BottomSheet: React.FC = () => {
  const { isMobileMenuOpen } = useTypedSelector((state) => state.global);
  const { toggleMobileMenu, toggleThemeMode } = useActions();
  const ref = useRef<HTMLDivElement>(null);
  const { themeMode } = useTypedSelector((state) => state.global);
  const { t, i18n } = useTranslation();
  const { isShown, toggle } = useModal();
  const [modalType, setModalType] = useState<ModalType>(null);

  usePreventScroll(ref, isMobileMenuOpen);
  const { flag } = useLanguages(i18n.language);

  const handleCloseMobileMenu = () => {
    toggleMobileMenu(false);
  };

  const handleToggle = () => {
    toggleThemeMode(themeMode === "dark" ? "light" : "dark");
  };

  const handleSelect = useCallback((type: ModalType) => {
    return () => {
      toggle();
      setModalType(type);
    };
  }, []);

  const getModalContent = (type: ModalType) => {
    switch (type) {
      case "language":
        return <SelectLanguage toggle={toggle} />;
      case "palette":
        return <SelectPalette toggle={toggle} />;
      default:
        return null;
    }
  };

  return (
    <Styled.ExpandedMenuContainer ref={ref} isOpen={isMobileMenuOpen}>
      <MenuIcon size={35} onClick={handleCloseMobileMenu} />
      <Modal
        isShown={isShown}
        hide={toggle}
        headerText={
          modalType === "language" ? t("select-lang") : t("select-theme")
        }
        modalContent={getModalContent(modalType)}
      />
      <Styled.MenuCellsContainer>
        <Styled.MenuCellWrapper onClick={handleToggle}>
          {themeMode === "dark" ? (
            <SunIcon size={60} />
          ) : (
            <MoonIcon className="dark-mode" size={50} />
          )}
        </Styled.MenuCellWrapper>
        <Styled.MenuCellWrapper>
          <Styled.LangCellWrapper onClick={handleSelect("language")}>
            {flag}
          </Styled.LangCellWrapper>
        </Styled.MenuCellWrapper>
        <Styled.MenuCellWrapper onClick={handleSelect("palette")}>
          <ColorPaletteIcon size={50} />
        </Styled.MenuCellWrapper>
      </Styled.MenuCellsContainer>
      <Styled.MenuSlidesContainer>
        <Styled.MenuSlider />
        <Styled.MenuSlider />
        <Styled.MenuSlider />
        <Styled.MenuSlider />
      </Styled.MenuSlidesContainer>
    </Styled.ExpandedMenuContainer>
  );
};

export default BottomSheet;
