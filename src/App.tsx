import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { GlobalStyles } from "components/Global/GlobalStyles";
import { lightTheme, darkTheme } from "components/Global/Theme";
import { useTypedSelector } from "hooks/useTypedSelector";
import MobileMenu from "layouts/MobileMenu";
import Home from "views/Home";
import Contact from "views/Contact";
import Apps from "views/Apps";
import Code from "views/Code";
import OnMobile from "components/MediaQuery/Mobile";
import NotFound from "views/404";

declare global {
  interface Window {
    direction: string;
    float: string;
    revFloat: string;
  }
}

const App: React.FC = () => {
  const { theme } = useTypedSelector((state) => state.global);
  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.style.direction = i18n.dir(i18n.language);
    window.direction = i18n.dir(i18n.language);
    window.float = i18n.dir(i18n.language) === "ltr" ? "left" : "right";
    window.revFloat = i18n.dir(i18n.language) === "ltr" ? "right" : "left";
  }, [i18n.language, i18n]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/code" element={<Code />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <OnMobile>
        <MobileMenu />
      </OnMobile>
    </ThemeProvider>
  );
};

export default App;
