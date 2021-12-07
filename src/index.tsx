import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { store } from "./state";
import "./i18n";
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <Suspense fallback='Loading ...'>
          <App />
        </Suspense>
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById("root")
);
