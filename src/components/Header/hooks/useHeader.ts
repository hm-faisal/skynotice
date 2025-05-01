import { useDispatch, useSelector } from "react-redux";
import useWeather from "../../../hooks/useWeather";
import { RootState } from "../../../app/store";
import { setDarkTheme } from "../../../features/darkTheme/darkThemeSlice";
import darkIcon from "../../../assets/dark.png";
import lightIcon from "../../../assets/light.png";

const useHeader = () => {
  const dispatch = useDispatch();
  const { handleSubmit } = useWeather();
  const darkTheme = useSelector((state: RootState) => state.darkTheme);

  const toggleTheme = () => {
    dispatch(setDarkTheme(!darkTheme));
  };

  return {
    handleSubmit,
    toggleTheme,
    darkTheme,
    darkIcon,
    lightIcon,
  };
};

export default useHeader;
