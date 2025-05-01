import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { setLocation } from "../features/location/locationSlice";
import { getCurrentLocation } from "../utils/getCurrtentLocation";
import { useEffect } from "react";
import { getWeather } from "../utils/getWeatherData";

const HomePage = () => {
  const location = useSelector((state: RootState) => state.location);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      location: { value: string };
    };
    dispatch(setLocation(target.location.value));
  };

  useEffect(() => {
    (async function () {
      getCurrentLocation(setLocation);
      console.log(location);

      const weather = await getWeather(
        location,
        import.meta.env.VITE_WEATHER_BASE_URL
      );
      console.log(weather);
    })();
  }, [location]);

  return (
    <div className=" h-screen p-4 flex flex-col gap-4">
      <header className="border">
        Weather app location {location.city}
        <form onSubmit={handleSubmit}>
          <input type="text" name="location" id="location" />{" "}
          <button type="submit">Search</button>
        </form>
      </header>
      <main className="grid grid-cols-12 justify-between gap-4 items-center">
        <div className="border col-span-8">hello</div>
        <aside className="border col-span-4">world</aside>
      </main>
    </div>
  );
};

export default HomePage;
