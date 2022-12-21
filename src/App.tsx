import "react-toastify/dist/ReactToastify.css";
import { lazy, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { GlobalStyles } from "components/Global/GlobalStyles";
import useSetDirection from "hooks/useSetDirection";
import useTheme from "hooks/useTheme";
import { useStore } from "store/store";
import CodeEditor from "views/Apps/code-editor";
import MainLayout from "layouts/Main";
import useTrackUser from "hooks/useTrackUser";

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
  const theme = useTheme();
  const { direction } = useSetDirection();
  const { actions } = useStore();

  useTrackUser();

  //! Get repositories from my github account
  useEffect(() => {
    actions.getGithubRepos();
  }, [actions]);

  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
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
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="apps">
              <Route index element={<Apps />} />
              <Route path="code-editor" element={<CodeEditor />} />
            </Route>
            <Route path="code" element={<Code />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </ThemeProvider>
  );
};

export default App;
