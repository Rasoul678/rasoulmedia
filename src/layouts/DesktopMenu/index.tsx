import * as Styled from "./DesktopMenu.styles";
import HomeLottie from "components/Lotties/Home";
import LayersLottie from "components/Lotties/Layers";
import CodeLottie from "components/Lotties/Code";
import ContactLottie from "components/Lotties/Contact";
import MenuItem from "./MenuItem";
import SunIcon from "components/Icons/SunIcon";
import MoonIcon from "components/Icons/MoonIcon";
import { useTypedSelector } from "hooks/useTypedSelector";
import useActions from "hooks/useActions";

interface DesktopMenuProps {}

const DesktopMenu: React.FC<DesktopMenuProps> = () => {
  const { themeMode } = useTypedSelector((state) => state.global);
  const { toggleThemeMode } = useActions();

  const handleToggle = () => {
    toggleThemeMode(themeMode === "dark" ? "light" : "dark");
  };

  return (
    <Styled.DesktopNavbar>
      <Styled.MenuItemsWrapper>
        <MenuItem name="home" linkTo="/">
          <HomeLottie name="home" style={{ width: "2.5rem" }} />
        </MenuItem>
        <MenuItem name="apps" linkTo="/apps">
          <LayersLottie name="apps" style={{ width: "2.5rem" }} />
        </MenuItem>
        <MenuItem name="code" linkTo="/code">
          <CodeLottie name="code" style={{ height: "4rem" }} />
        </MenuItem>
        <MenuItem name="contact" linkTo="/contact">
          <ContactLottie name="contact" style={{ width: "3rem" }} />
        </MenuItem>
      </Styled.MenuItemsWrapper>
      <Styled.MenuItemsWrapper>
        <Styled.SettingWrapper
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleToggle}
        >
          {themeMode === "dark" ? (
            <SunIcon size={30} />
          ) : (
            <MoonIcon className="dark-mode" size={25} />
          )}
        </Styled.SettingWrapper>
      </Styled.MenuItemsWrapper>
    </Styled.DesktopNavbar>
  );
};

export default DesktopMenu;
