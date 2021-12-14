import { Suspense } from "react";
import { Provider } from "react-redux";
import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { store } from "state";
import { initI18n } from "./utils/testUtils";

beforeAll(() => {
  initI18n();
});

afterEach(cleanup);

it("renders without crashing", () => {
  render(
    <Provider store={store}>
      <Router>
        <Suspense fallback={<>Loading...</>}>
          <App />
        </Suspense>
      </Router>
    </Provider>
  );

  const element = screen.getByText("Loading...");

  expect(element).toBeInTheDocument();
});
