import "react-toastify/dist/ReactToastify.css";
import { lazy } from "react";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { GlobalStyles } from "components/Global/GlobalStyles";
import OnMobile from "components/MediaQuery/Mobile";
import useSetDirection from "hooks/useSetDirection";
import useDarkMode from "hooks/useDarkMode";
import OnTablet from "components/MediaQuery/Tablet";

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
const TabletMenu = lazy(
  () => import(/*webpackChunkName: "Tablet_Menu"*/ "layouts/TabletMenu")
);

const App: React.FC = () => {
  const theme = useDarkMode();
  const { direction } = useSetDirection();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={direction === "rtl"}
        draggable
      />
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
      <OnTablet>
        <TabletMenu />
      </OnTablet>
    </ThemeProvider>
  );
};

export default App;
