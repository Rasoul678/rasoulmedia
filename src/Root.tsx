import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import AppLoader from "./components/AppLoader";
import ErrorBoundary from "components/ErrorBoundary";
import "./i18n";
import "./index.css";
import { StoreProvider } from "store/store";


const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <ErrorBoundary>
    <StoreProvider>
      <Router>
        <React.StrictMode>
          <Suspense fallback={<AppLoader />}>
            <App />
          </Suspense>
        </React.StrictMode>
      </Router>
    </StoreProvider>
  </ErrorBoundary>
);
