import { LOCAL_STORAGE_KEY } from "constants/Global";
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
        LOCAL_STORAGE_KEY,
        JSON.stringify({
          global: {
            appVersion: process.env.REACT_APP_VERSION,
            themeMode: getState().global.themeMode,
            themePallet: getState().global.themePallet,
            selectedPallet: getState().global.selectedPallet,
            tour: getState().global.tour,
          },
        })
      );
    };
  };
};
