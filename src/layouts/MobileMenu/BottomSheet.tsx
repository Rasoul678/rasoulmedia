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
// import GithubRepository from "./Repository";
// import AppLoader from "components/AppLoader";
// import Slider from "components/Slider";
// import GithubRepos from "views/Home/items/github-repos";

type ModalType = "language" | "palette" | null;

const sheet = {
  open: {
    y: 50,
    transition: { duration: 0.1 },
  },
  closed: {
    y: 250,
    transition: { duration: 0.1 },
  },
};

const BottomSheet: React.FC = () => {
  const { isMobileMenuOpen, themeMode } = useTypedSelector(
    (state) => state.global
  );
  const { toggleMobileMenu, toggleThemeMode } = useActions();
  const ref = useRef<HTMLDivElement>(null);
  // const { isLoading, repositories } = useTypedSelector((state) => state.github);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <Styled.ExpandedMenuContainer
      ref={ref}
      initial={false}
      variants={sheet}
      animate={isMobileMenuOpen ? "open" : "closed"}
    >
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
            <SunIcon size={50} color="#F8C004" />
          ) : (
            <MoonIcon className="dark-mode" size={50} color="#333" />
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
      {/* <GithubRepos showHeader={false} containerStyles={{ width: "100%" }} /> */}
      {/* <Slider height="calc(100% - 14rem)">
        {isLoading && (
          <div className="slider-loader-container ">
            <AppLoader />
          </div>
        )}
        {!isLoading &&
          repositories?.map((repo) => {
            return <GithubRepository repo={repo} key={repo?.id} />;
          })}
      </Slider> */}
    </Styled.ExpandedMenuContainer>
  );
};

export default BottomSheet;
