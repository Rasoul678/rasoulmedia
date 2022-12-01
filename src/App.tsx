import "react-toastify/dist/ReactToastify.css";
import { lazy, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { GlobalStyles } from "components/Global/GlobalStyles";
import useSetDirection from "hooks/useSetDirection";
import useDarkMode from "hooks/useDarkMode";
import { useStore } from "store/store";

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
  const theme = useDarkMode();
  const { direction } = useSetDirection();
  const { actions } = useStore();

  //! Get repositories from my github account
  useEffect(() => {
    actions.getGithubRepos();
  }, [actions]);

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
    </ThemeProvider>
  );
};

export default App;
