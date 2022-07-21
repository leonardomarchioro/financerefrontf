import { FC, ReactNode } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, colors } from "../../styles/Themes";

interface IThemeState {
  theme: { mode: string };
}

const Theme: FC<{ children: ReactNode }> = ({ children }) => {
  const { mode } = useSelector((state: IThemeState) => state.theme);

  const theme =
    mode === "light" ? { ...lightTheme, colors } : { ...darkTheme, colors };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
