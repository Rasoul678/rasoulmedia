import { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "App";
import { store } from "state";
import { initI18n, render, screen } from "utils/testUtils";

describe("Mobile Menu Test", () => {
  let wrapper: any;

  beforeAll(() => {
    initI18n();

    wrapper = render(
      <Provider store={store}>
        <Router>
          <Suspense fallback={<>Loading...</>}>
            <App />
          </Suspense>
        </Router>
      </Provider>
    );
  });

  it("renders", () => {
    expect(wrapper).not.toBeNull();
  });
});
