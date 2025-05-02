import useHeader from "./hooks/useHeader";

const Header = () => {
  const { handleSubmit, toggleTheme, darkTheme, darkIcon, lightIcon } =
    useHeader();

  return (
    <>
      <div className="header-section">
        <div className="gap-4 text-lg order-1">
          <h1 className="text-xl">Skynotice</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 md:gap-4 text-base flex-col md:flex-row order-3 md:order-2 max-w-full"
        >
          <input
            type="text"
            name="location"
            id="location"
            placeholder="search by city name"
            className="input-element"
          />{" "}
          <button className="input-element cursor-pointer w-full" type="submit">
            Search
          </button>
        </form>

        <div className="flex items-center justify-between gap-4 text-xl *:cursor-pointer *:transition *:duration-300 order-2 md:order-3">
          <button className="hover:text-[#409ac7]" onClick={toggleTheme}>
            <img
              src={darkTheme ? lightIcon : darkIcon}
              alt=""
              className="w-12 h-12"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
