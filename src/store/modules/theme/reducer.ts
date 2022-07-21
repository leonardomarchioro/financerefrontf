import { DARK_THEME, LIGHT_THEME } from "./actionTypes";

const themeReducer = (
  state: { mode: string } = { mode: "light" },
  action: { type: string }
) => {
  switch (action.type) {
    case LIGHT_THEME:
      state = { mode: "light" };
      return state;

    case DARK_THEME:
      state = { mode: "dark" };
      return state;

    default:
      state = { mode: "light" };
      return state;
  }
};

export default themeReducer;
