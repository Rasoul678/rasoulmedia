import { lazy } from "react";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { GlobalStyles } from "components/Global/GlobalStyles";
import OnMobile from "components/MediaQuery/Mobile";
import useSetDirection from "hooks/useSetDirection";
import useDarkMode from "hooks/useDarkMode";
import Footer from "components/Footer";

const Home = lazy(() => import(/*webpackChunkName: "Home_View"*/ "views/Home"));
const Contact = lazy(
  () => import(/*webpackChunkName: "Contact_View"*/ "views/Contact")
);
const Apps = lazy(() => import(/*webpackChunkName: "Apps_View"*/ "views/Apps"));
const Code = lazy(() => import(/*webpackChunkName: "Code_View"*/ "views/Code"));
const NotFound = lazy(
  () => import(/*webpackChunkName: "NotFound_View"*/ "views/404")
);

const MobileMenu = lazy(
  () => import(/*webpackChunkName: "Mobile_Menu"*/ "layouts/MobileMenu")
);

const App: React.FC = () => {
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
      <Footer color={theme.colors[2]} />
    </ThemeProvider>
  );
};

export default App;
