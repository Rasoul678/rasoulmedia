import { lazy } from "react";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { GlobalStyles } from "components/Global/GlobalStyles";
import { lightTheme, darkTheme } from "components/Global/Theme";
import { useTypedSelector } from "hooks/useTypedSelector";
import MobileMenu from "layouts/MobileMenu";
import OnMobile from "components/MediaQuery/Mobile";
import useSetDirection from "hooks/useSetDirection";
import useDarkMode from "hooks/useDarkMode";

const Home = lazy(() => import(/*webpackChunkName: "Home_View"*/ "views/Home"));
const Contact = lazy(
  () => import(/*webpackChunkName: "Contact_View"*/ "views/Contact")
);
const Apps = lazy(() => import(/*webpackChunkName: "Apps_View"*/ "views/Apps"));
const Code = lazy(() => import(/*webpackChunkName: "Code_View"*/ "views/Code"));
const NotFound = lazy(
  () => import(/*webpackChunkName: "NotFound_View"*/ "views/404")
);

const App: React.FC = () => {
  const { themeMode } = useTypedSelector((state) => state.global);
  const theme = useDarkMode();
  useSetDirection();

  return (
    <ThemeProvider theme={theme}>
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
