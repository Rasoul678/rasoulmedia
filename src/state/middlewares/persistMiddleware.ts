import { Dispatch } from "redux";
import { Action } from "../actions";
import { RootState } from "../reducers";

export const persistMiddleware = ({
  dispatch,
  getState,
}: {
  dispatch: Dispatch<Action>;
  getState: () => RootState;
}) => {
  return (next: (action: Action) => void) => {
    return (action: Action) => {
      next(action);
      localStorage.setItem(
        "rasoulMediaState",
        JSON.stringify({
          global: {
            themeMode: getState().global.themeMode,
            themePallet: getState().global.themePallet,
            selectedPallet: getState().global.selectedPallet,
          },
        })
      );
    };
  };
};
