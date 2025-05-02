import useWeather from "../hooks/useWeather";
import convertTemp from "../utils/convertTemp";
import Loading from "./Loading";
import maxTemp from "../assets/high-temperature.png";
import minTemp from "../assets/low-temperature.png";

const TodayWeather = () => {
  const { weather, icon, loading } = useWeather();
  return (
    <div className="weather-section h-full min-w-full">
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-stretch gap-2 h-full">
          <div className="bg-white text-black p-4 md:p-1 rounded-md dark:bg-transparent dark:text-white flex flex-col justify-evenly items-center">
            {weather && (
              <img
                src={icon}
                alt={weather?.weather[0]?.description}
                className="mx-auto"
              />
            )}
            <p className="text-4xl">
              {convertTemp(weather?.main?.temp).celsius.toFixed()}
              <sup>o</sup> C
            </p>
            <div className="flex justify-start items-center text-base mt-4">
              <div className="mr-12">
                <p className="font-bold">
                  {weather?.name}, {weather?.sys?.country}
                </p>
                <p>{weather?.weather[0]?.description}</p>
              </div>
            </div>
          </div>
          <div className="bg-white text-black p-4 rounded-md dark:bg-transparent dark:text-white flex flex-col justify-evenly items-center">
            <img src={maxTemp} alt="" className="w-14 h-14 rounded-md" />
            <p className="text-4xl">
              {convertTemp(weather?.main?.temp_max).celsius.toFixed()}
              <sup>o</sup> C
            </p>
            <p className="font-bold text-base">Max Temperature</p>
          </div>

          <div className="bg-white text-black p-4 rounded-md dark:bg-transparent dark:text-white flex flex-col justify-evenly items-center">
            <img src={minTemp} alt="" className="w-14 h-14 rounded-md" />
            <p className="text-4xl">
              {convertTemp(weather?.main?.temp_min).celsius.toFixed()}
              <sup>o</sup> C
            </p>
            <p className="font-bold text-base">Min Temperature</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodayWeather;
