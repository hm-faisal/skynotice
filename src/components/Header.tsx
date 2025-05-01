import useWeather from "../hooks/useWeather";

const Header = () => {
  const { handleSubmit } = useWeather();
  return (
    <>
      <header className="flex justify-between flex-col md:flex-row px-7 py-0 items-center bg-[rgba(255,255,255,0.2)] backdrop:blur-md -web border border-[rgba(255,255,255,0.2)] rounded h-full text-white shadow-lg shadow-[rgba(0,0,0,0.1)] max-h-14">
        <div className="flex items-center gap-4 text-lg">
          <h1 className="text-xl">Skynotic</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-4 text-base p-4"
        >
          <input
            type="text"
            name="location"
            id="location"
            className="input-element outline-none"
          />{" "}
          <button className="input-element cursor-pointer" type="submit">
            Search
          </button>
        </form>

        <div className="flex items-center justify-between gap-4 text-xl *:cursor-pointer *:transition *:duration-300">
          <span className="hover:text-[#409ac7]">
            {/* <ion-icon name="calendar-outline"></ion-icon> */}
          </span>
          <span className="hover:text-[#409ac7]">
            {/* <ion-icon name="notifications-outline"></ion-icon> */}
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
