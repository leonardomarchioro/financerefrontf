import { DARK_THEME, LIGHT_THEME } from "./actionTypes";

const themeReducer = (
  state: { mode: string } = { mode: "light" },
  action: { type: string; state: { mode: string } }
) => {
  switch (action.type) {
    case LIGHT_THEME:
      state = action.state;
      return state;

    case DARK_THEME:
      state = action.state;
      return state;

    default:
      return state;
  }
};

export default themeReducer;
