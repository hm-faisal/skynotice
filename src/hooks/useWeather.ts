import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../features/location/locationSlice";
import { RootState } from "../app/store";
import { useEffect } from "react";
import { getCurrentLocation } from "../utils/getCurrtentLocation";
import { getWeather } from "../utils/getWeatherData";
import { setWeatherData } from "../features/weatherData/weatherDataSlice";

const useWeather = () => {
  const dispatch = useDispatch();
  const location = useSelector((state: RootState) => state.location);
  const weather = useSelector((state: RootState) => state.weather);

  useEffect(() => {
    (async function () {
      getCurrentLocation(setLocation);

      const weather = await getWeather(
        location,
        import.meta.env.VITE_WEATHER_BASE_URL
      );
      dispatch(setWeatherData(weather));
    })();
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      location: { value: string };
    };
    dispatch(setLocation(target.location.value));
  };

  const icon = `https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`;
  return { handleSubmit, weather, icon };
};

export default useWeather;
