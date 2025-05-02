import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../features/location/locationSlice";
import { RootState } from "../app/store";
import { useEffect } from "react";
import { getCurrentLocation } from "../utils/getCurrentLocation";
import { getWeather } from "../utils/getWeatherData";
import { setWeatherData } from "../features/weatherData/weatherDataSlice";
import { setLoading } from "../features/loading/loadingSlice";
import { setHistory } from "../features/history/historySlice";
import convertTemp from "../utils/convertTemp";
import moment from "moment";
import HistoryType from "../types/HistoryType";
import WeatherData from "../types/weatherData";

const useWeather = () => {
  const dispatch = useDispatch();
  const location = useSelector((state: RootState) => state.location);
  const weather = useSelector((state: RootState) => state.weather);
  const loading = useSelector((state: RootState) => state.loading);
  const history = useSelector((state: RootState) => state.history);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        dispatch(setLoading(true));

        // Get current location (if location is empty or default)
        if (!location) {
          const coords = (await getCurrentLocation()) as {
            latitude: number | undefined;
            longitude: number | undefined;
          };

          console.log(coords);
          if (coords) {
            dispatch(setLocation(`${coords.latitude},${coords.longitude}`));
          } else {
            dispatch(setLoading(false));
            return;
          }
        }

        // Fetch weather
        const weather: WeatherData = (await getWeather(
          location,
          import.meta.env.VITE_WEATHER_BASE_URL
        )) as WeatherData;

        dispatch(setWeatherData(weather));

        const historyItem: HistoryType = {
          icon: `https://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@2x.png`,
          description: weather?.weather[0]?.description ?? "",
          city: weather?.name ?? "",
          country: weather?.sys?.country ?? "",
          temp: convertTemp(weather?.main?.temp).celsius.toFixed(),
          time: moment().format("MMMM Do YYYY, h:mm:ss a"),
        };

        dispatch(setHistory([historyItem, ...history]));
        localStorage.setItem(
          "weather-history",
          JSON.stringify([...history, historyItem])
        );
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchWeather();
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      location: { value: string };
    };
    dispatch(setLocation(target.location.value));
  };

  const icon = `https://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@2x.png`;

  return { handleSubmit, weather, icon, loading };
};

export default useWeather;
