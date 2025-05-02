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
      className="h-screen p-2 lg:grid lg:grid-cols-12 lg:grid-rows-9 gap-2 flex flex-col"
      data-theme={darkTheme ? "dark" : "light"}
    >
      <header className="lg:row-span-1 lg:col-span-12 order-1">
        <Header />
      </header>
      <div className="row-span-4 col-span-8 order-2">
        <TodayWeather />
      </div>
      <div className="row-span-4 col-span-8 lg:order-4 order-3">
        <TodayHighlights />
      </div>
      <aside className="col-span-4 row-span-8 h-full lg:order-3 order-4">
        <History />
      </aside>
    </div>
  );
};

export default HomePage;
