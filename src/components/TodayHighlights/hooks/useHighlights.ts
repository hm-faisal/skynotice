import useWeather from "../../../hooks/useWeather";
import getFeelsLike from "../../../utils/getFeelsLike";
import getCloudinessDescription from "../../../utils/getCloudinessDescription";
import getHumidity from "../../../utils/getHumidity";
import getWindSpeedDescription from "../../../utils/getWindSpeedDescription";
import convertTemp from "../../../utils/convertTemp";
import sunCloudy from "../../../assets/sun-cloudy.png";
import compass from "../../../assets/compass.png";
import drops from "../../../assets/drops.png";
import windSpeed from "../../../assets/wind-speed.png";

const useHighlights = () => {
  const { weather, loading } = useWeather();
  const highlights = [
    {
      id: 1,
      image: compass,
      title: "Feel Like",
      value: getFeelsLike(weather?.main?.temp, weather?.main?.feels_like),
      valueInNumber: convertTemp(weather?.main?.feels_like)?.celsius,
      valueInNumberUnit: "o",
    },
    {
      id: 2,
      image: sunCloudy,
      title: "Cloud",
      value: getCloudinessDescription(weather?.clouds?.all),
      valueInNumber: weather?.clouds?.all,
      valueInNumberUnit: "%",
    },
    {
      id: 3,
      image: drops,
      title: "Humidity",
      value: getHumidity(weather?.main?.humidity),
      valueInNumber: weather?.main?.humidity,
      valueInNumberUnit: "%",
    },
    {
      id: 4,
      image: windSpeed,
      title: "Wind Speed",
      value: getWindSpeedDescription(weather?.wind?.speed),
      valueInNumber: weather?.wind?.speed,
      valueInNumberUnit: "Km/h",
    },
  ];

  return {
    highlights,
    loading,
  };
};

export default useHighlights;
