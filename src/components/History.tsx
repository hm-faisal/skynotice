import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const History = () => {
  const history = useSelector((state: RootState) => state.history);

  return (
    <>
      <div className="history max-h-full overflow-hidden">
        <h3 className="text-2xl font-bold">Searched History</h3>
        <div className="overflow-y-auto overflow-x-hidden pr-2 h-full">
          {history.map((item, i) => (
            <div
              className="bg-white dark:bg-transparent dark:text-white rounded p-2 mb-2 dark:border-[rgba(255,255,255,0.3)] dark:border
          "
            >
              <div
                className="grid grid-cols-4 items-center justify-evenly"
                key={i}
              >
                <img
                  src={item.icon}
                  alt={item?.description}
                  className="w-16 h-16 border rounded-md dark:border-[rgba(255,255,255,0.4)]"
                />
                <div className="mr-12 text-black dark:text-white col-span-2">
                  <p className="font-bold text-sm">
                    {item?.city}, {item?.country}
                  </p>
                  <p>{item?.description}</p>
                </div>
                <div className="">
                  <p className="text-4xl min-w-28 text-black dark:text-[rgba(255,255,255,0.9)]">
                    {item.temp}
                    <sup>o</sup> C
                  </p>
                </div>
              </div>
              <p className="text-[rgba(0,0,0,0.6)] dark:text-[rgba(255,255,255,0.8)] text-sm pt-2">
                At: {item.time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default History;
