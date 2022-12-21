import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import * as Styled from "./DesktopMenu.styles";
import HomeLottie from "components/Lotties/Home";
import LayersLottie from "components/Lotties/Layers";
import CodeLottie from "components/Lotties/Code";
import ContactLottie from "components/Lotties/Contact";
import MenuItem from "./MenuItem";
import SunIcon from "components/Icons/SunIcon";
import MoonIcon from "components/Icons/MoonIcon";
import PaletteSelect from "./PaletteSelect";
import CustomSelect from "components/CustomSelect/CustomSelect";
import { useStore } from "store/store";
import { GlobalState } from "interfaces";
import useTheme from "hooks/useTheme";

interface DesktopMenuProps {}

const DesktopMenu: React.FC<DesktopMenuProps> = () => {
  const { store, actions } = useStore();
  const theme = useTheme();
  const { themeMode, selectedPallet, themePallet } =
    store.global as GlobalState;
  const { toggleThemeMode, setThemePalette } = actions;
  const { t } = useTranslation();

  const colorOptions = useMemo(() => {
    return Object.entries(themePallet.pallets).map(([key, value]) => ({
      label: t((value as any).name),
      value: key,
    }));
  }, [t, themePallet.pallets]);

  const langOptions = useMemo(() => {
    return [
      { label: t("lang.en"), value: "en" },
      { label: t("lang.fr"), value: "fr" },
      { label: t("lang.nl"), value: "nl" },
      { label: t("lang.hi"), value: "hi" },
      { label: t("lang.fa"), value: "fa" },
      { label: t("lang.es"), value: "es" },
    ];
  }, [t]);

  const handleToggle = () => {
    toggleThemeMode(themeMode === "dark" ? "light" : "dark");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      handleToggle();
    }
  };

  const handleChangeLanguage = useCallback((value: any) => {
    const lang = value.value;
    //! Reload for rtl.
    if (lang === "fa" || i18next.language === "fa") {
      window.location.reload();
    }

    i18next.changeLanguage(lang);
  }, []);

  const getStyles = (select?: string) => ({
    menu: (styles: any) => ({
      ...styles,
      ...(select === "lang" ? { width: "7rem" } : { width: "auto" }),
    }),
    option: (
      styles: any,
      { isSelected, isFocused }: { isSelected: boolean; isFocused: boolean }
    ) => ({
      ...styles,
      backgroundColor: isFocused
        ? themePallet.pallets[selectedPallet].mainColor + "!important"
        : "",
      cursor: "pointer",
      color: isSelected
        ? isFocused
          ? ""
          : themePallet.pallets[selectedPallet].mainColor + "!important"
        : "",
    }),
    singleValue: (styles: any) => ({
      ...styles,
      cursor: "pointer",
      ...(select === "lang" ? { width: "6rem" } : { width: "3rem" }),
      height: "1.8rem",
      color: themePallet.pallets[selectedPallet].text + "!important",
      fontSize: "1.2rem",
    }),
  });

  return (
    <Styled.DesktopNavbar>
      <Styled.MenuItemsWrapper data-tour="step-desktop-nav-links">
        <MenuItem name="home" linkTo="/">
          <HomeLottie name="home" style={{ width: "2.5rem" }} title="home" />
        </MenuItem>
        <MenuItem name="apps" linkTo="/apps">
          <LayersLottie name="apps" style={{ width: "2.5rem" }} title="apps" />
        </MenuItem>
        <MenuItem name="code" linkTo="/code">
          <CodeLottie name="code" style={{ height: "4rem" }} title="code" />
        </MenuItem>
        <MenuItem name="contact" linkTo="/contact">
          <ContactLottie
            name="contact"
            style={{ width: "3rem" }}
            title="contact"
          />
        </MenuItem>
      </Styled.MenuItemsWrapper>
      <Styled.MenuItemsWrapper style={{ gap: "0" }}>
        <Styled.SettingWrapper data-tour="step-desktop-nav-lang">
          <CustomSelect
            value={{
              label: t(`lang.${i18next.language}`),
              value: i18next.language,
            }}
            options={langOptions}
            isSearchable={false}
            styles={getStyles("lang")}
            onChange={handleChangeLanguage}
            hideSelectedOptions={true}
          />
        </Styled.SettingWrapper>
        <Styled.SettingWrapper data-tour="step-desktop-nav-color">
          <PaletteSelect
            value={{ label: "", value: selectedPallet }}
            options={colorOptions}
            isSearchable={false}
            styles={getStyles()}
            onChange={(value: any) => setThemePalette(value.value)}
            // hideSelectedOptions={true}
          />
        </Styled.SettingWrapper>
        <Styled.SettingWrapper
          onClick={handleToggle}
          onKeyPress={handleKeyPress}
          data-tour="step-desktop-nav-dark"
          tabIndex={0}
        >
          {themeMode === "dark" ? (
            <SunIcon size={32} color="#F8C004" />
          ) : (
            <MoonIcon size={30} color={theme.text} />
          )}
        </Styled.SettingWrapper>
      </Styled.MenuItemsWrapper>
    </Styled.DesktopNavbar>
  );
};

export default DesktopMenu;
