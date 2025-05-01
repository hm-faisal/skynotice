import { useSelector } from "react-redux";
import Header from "../components/Header";
import History from "../components/History";
import TodayHighlights from "../components/TodayHighlights";
import TodayWeather from "../components/TodayWeather";
import { RootState } from "./store";

const HomePage = () => {
  const darkTheme = useSelector((state: RootState) => state.darkTheme);
  return (
    <div
      className="max-h-screen h-screen p-2 grid grid-cols-12 grid-rows-9 gap-2"
      data-theme={darkTheme ? "dark" : "light"}
    >
      <header className="row-span-1 col-span-12">
        <Header />
      </header>
      <div className="row-span-4 col-span-8">
        <TodayWeather />
      </div>
      <aside className="col-span-4 row-span-8 h-full">
        <History />
      </aside>
      <div className="row-span-4 col-span-8">
        <TodayHighlights />
      </div>
    </div>
  );
};

export default HomePage;
