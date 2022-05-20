import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { store } from "./state";
import AppLoader from "./components/AppLoader";
import ErrorBoundary from "components/ErrorBoundary";
import "./i18n";
import "./index.css";

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <Router>
        <React.StrictMode>
          <Suspense fallback={<AppLoader />}>
            <App />
          </Suspense>
        </React.StrictMode>
      </Router>
    </Provider>
  </ErrorBoundary>,
  document.getElementById("root")
);
