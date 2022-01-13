import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import MenuItem from "./MenuItem";
import * as Styled from "./TabletMenu.styles";
import HomeLottie from "components/Lotties/Home";
import LayersLottie from "components/Lotties/Layers";
import CodeLottie from "components/Lotties/Code";
import ContactLottie from "components/Lotties/Contact";
import { useTypedSelector } from "hooks/useTypedSelector";
import useLanguages from "hooks/useLanguages";
import SunIcon from "components/Icons/SunIcon";
import MoonIcon from "components/Icons/MoonIcon";
import ColorPaletteIcon from "components/Icons/ColorPaletteIcon";
import useActions from "hooks/useActions";
import useModal from "hooks/useModal";
import Modal from "components/Modal";
import SelectLanguage from "layouts/MobileMenu/SelectLanguage";
import SelectPalette from "layouts/MobileMenu/SelectPalette";

type ModalType = "language" | "palette" | null;

const footer = {
  open: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 0,
    x: -250,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const style = { height: "2.5rem", width: "2.5rem" };

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const { toggleThemeMode } = useActions();

  const { themeMode } = useTypedSelector((state) => state.global);
  const { flag } = useLanguages(i18n.language);

  const [modalType, setModalType] = useState<ModalType>(null);

  const { isShown, toggle } = useModal();

  const handleSelect = useCallback((type: ModalType) => {
    return () => {
      toggle();
      setModalType(type);
    };
  }, []);

  const handleToggle = () => {
    toggleThemeMode(themeMode === "dark" ? "light" : "dark");
  };

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
    <Styled.TabletMenuItemsWrapper variants={footer}>
      <Modal
        isShown={isShown}
        hide={toggle}
        headerText={
          modalType === "language" ? t("select-lang") : t("select-theme")
        }
        modalContent={getModalContent(modalType)}
      />
      <MenuItem linkTo="/" name={t("nav.home")}>
        <HomeLottie name={t("nav.home")} style={style} />
      </MenuItem>
      <MenuItem linkTo="/apps" name={t("nav.applications")}>
        <LayersLottie name={t("nav.applications")} style={style} />
      </MenuItem>
      <MenuItem linkTo="/code" name={t("nav.code")}>
        <CodeLottie name={t("nav.code")} style={style} />
      </MenuItem>
      <MenuItem linkTo="/contact" name={t("nav.contact")}>
        <ContactLottie name={t("nav.contact")} style={style} />
      </MenuItem>
      <Styled.MenuCellsContainer variants={variants}>
        <Styled.MenuCellWrapper
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleToggle}
        >
          {themeMode === "dark" ? (
            <SunIcon size={35} />
          ) : (
            <MoonIcon className="dark-mode" size={35} />
          )}
        </Styled.MenuCellWrapper>
        <Styled.MenuCellWrapper
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Styled.LangCellWrapper onClick={handleSelect("language")}>
            {flag}
          </Styled.LangCellWrapper>
        </Styled.MenuCellWrapper>
        <Styled.MenuCellWrapper
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSelect("palette")}
        >
          <ColorPaletteIcon size={35} />
        </Styled.MenuCellWrapper>
      </Styled.MenuCellsContainer>
    </Styled.TabletMenuItemsWrapper>
  );
};

export default Navigation;
