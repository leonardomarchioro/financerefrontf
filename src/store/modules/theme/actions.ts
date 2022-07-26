import { DARK_THEME, LIGHT_THEME } from "./actionTypes";

export const lightTheme = () => ({
  type: LIGHT_THEME,
  state: { mode: "light" },
});

export const darkTheme = () => ({
  type: DARK_THEME,
  state: { mode: "dark" },
});
