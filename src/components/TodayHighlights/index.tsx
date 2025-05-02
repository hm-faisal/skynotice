import Loading from "../Loading";
import useHighlights from "./hooks/useHighlights";

const TodayHighlights = () => {
  const { highlights, loading } = useHighlights();

  return (
    <div className="highlights h-full">
      {loading ? (
        <Loading />
      ) : (
        <div className="h-full flex flex-col justify-center">
          <h2 className="text-4xl font-bold flex-1">Today&apos;s Highlights</h2>
          <div className="content grid md:grid-cols-2 grid-cols-1 mt-4 gap-2 flex-auto">
            {highlights.map((item) => (
              <div
                className="flex justify-between items-center bg-[#fff] p-4 rounded-md dark:bg-transparent dark:border"
                key={item.id}
              >
                <div className="content flex justify-center items-center gap-2">
                  <img src={item.image} alt="" className="h-12 w-12" />
                  <div className="">
                    <h4 className="text-[#000] dark:text-white font-bold">
                      {item.title}
                    </h4>
                    <p className="text-[#6d6d6d] dark:text-[rgba(255,255,255,0.7)] text-sm">
                      {item.value}
                    </p>
                  </div>
                </div>
                <div className="number text-[#000] dark:text-white font-semibold">
                  {item.valueInNumber?.toFixed()}
                  {item.valueInNumberUnit === "o" ? (
                    <sup>o</sup>
                  ) : (
                    item.valueInNumberUnit
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TodayHighlights;
