import { FC, ReactNode } from "react";
import { useSelector } from "react-redux";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./Themes";

interface IThemeState {
  theme: { mode: string };
}

const Theme: FC<{ children: ReactNode }> = ({ children }) => {
  const { mode } = useSelector((state: IThemeState) => state.theme);

  const theme: DefaultTheme =
    mode === "light" ? { ...lightTheme } : { ...darkTheme };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
