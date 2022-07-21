import { useDispatch, useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../../store/modules/theme/actions";

import { HiOutlineLightBulb, HiLightBulb } from "react-icons/hi";

import { Button, Box } from "./styles";

const ThemeSelect: React.FC = () => {
  interface IThemeState {
    theme: { mode: string };
  }

  const theme = useSelector((state: IThemeState) => state.theme);

  const dispatch = useDispatch();
  const handleTheme = () => {
    theme.mode === "light" ? dispatch(darkTheme()) : dispatch(lightTheme());
  };

  return (
    <Box>
      <Button className={theme.mode} onClick={handleTheme}>
        {theme.mode === "light" ? (
          <HiLightBulb size={20} />
        ) : (
          <HiOutlineLightBulb size={20} />
        )}
      </Button>
    </Box>
  );
};

export default ThemeSelect;
