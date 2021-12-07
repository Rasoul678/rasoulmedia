import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./MobileMenu.styles";
import usePreventScroll from "hooks/usePreventScroll";
import MenuIcon from "components/Icons/MenuIcon";
import { useTypedSelector } from "hooks/useTypedSelector";
import useActions from "hooks/useActions";
import Toggle from "components/Toggle";
import Modal from "components/Modal";
import useModal from "hooks/useModal";
import SelectLang from "./SelectLang";

const ExpandedMenu: React.FC = () => {
  const { isMobileMenuOpen } = useTypedSelector((state) => state.global);
  const { toggleMobileMenu, toggleTheme } = useActions();
  const ref = useRef<HTMLDivElement>(null);
  const cellsRef = useRef<HTMLDivElement>(null);
  const [isChecked, setIsChecked] = useState(false);
  const { theme } = useTypedSelector((state) => state.global);
  const { t, i18n } = useTranslation();
  const { isShown, toggle } = useModal();

  usePreventScroll(ref, isMobileMenuOpen);

  const languages: { [key: string]: string } = {
    en: t("lang.english"),
    es: t("lang.spanish"),
    fr: t("lang.french"),
    fa: t("lang.persian"),
    nl: t("lang.dutch"),
  };

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
        <Styled.MenuCellWrapper>
          <Toggle value={isChecked} onToggle={handleToggle} />
          <Styled.MenuCellName>
            {theme === "dark" ? t("light") : t("dark")}
          </Styled.MenuCellName>
        </Styled.MenuCellWrapper>
        <Styled.MenuCellWrapper>
          <>
            <Styled.LangCellWrapper onClick={toggle}>
              {languages[i18n.language]}
            </Styled.LangCellWrapper>
            <Modal
              isShown={isShown}
              hide={toggle}
              headerText={t("select-lang")}
              modalContent={
                <SelectLang languages={languages} toggle={toggle} />
              }
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
