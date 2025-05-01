import useHeader from "./hooks/useHeader";

const Header = () => {
  const { handleSubmit, toggleTheme, darkTheme, darkIcon, lightIcon } =
    useHeader();

  return (
    <>
      <div className="header-section ">
        <div className="flex items-center gap-4 text-lg">
          <h1 className="text-xl">Skynotice</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-4 text-base p-4"
        >
          <input
            type="text"
            name="location"
            id="location"
            placeholder="search by city name"
            className="input-element"
          />{" "}
          <button className="input-element cursor-pointer" type="submit">
            Search
          </button>
        </form>

        <div className="flex items-center justify-between gap-4 text-xl *:cursor-pointer *:transition *:duration-300">
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
