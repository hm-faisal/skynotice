import useWeather from "../hooks/useWeather";
import convertTemp from "../utils/convertTemp";

const TodayWeather = () => {
  const { weather, icon } = useWeather();
  return (
    <div className="weather-section">
      <div className="">
        <div className="text-center mx-auto">
          {weather && (
            <img
              src={icon}
              alt={weather?.weather[0]?.description}
              className="mx-auto"
            />
          )}
        </div>
        <div className="flex justify-start items-center text-base mt-4">
          <div className="mr-12">
            <p className="font-bold">
              {weather?.name}, {weather?.sys?.country}
            </p>
            <p>{weather?.weather[0]?.description}</p>
          </div>
          <div className="">
            <p className="text-4xl min-w-28">
              {convertTemp(weather?.main?.temp).celsius.toFixed()}
              <sup>o</sup> C
            </p>
          </div>
        </div>
      </div>
      <div className=""></div>
      <div className=""></div>
    </div>
  );
};

export default TodayWeather;
