import React from "react";

export const CancerDeathEachYear = () => {
  const a = 3.935e6;
  const b = 5.836e-10;

  const locale = "en";
  const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update

  const [year, set_year] = React.useState(2024);

  const handleClictUp = () => set_year((prev) => prev + 1);
  const handleClictDown = () => set_year((prev) => prev - 1);

  const year_second = new Date(year, 11, 31, 23, 59, 59);
  const death_year = Math.round(
    a * Math.exp(b * Math.round(year_second.getTime() / 1000))
  );

  return (
   
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-row">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold py-0 px-4 rounded-full"
            onClick={handleClictDown}
          >
            -
          </button>

          <button
            className="ml-2 bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-0 px-4 rounded-full"
            onClick={handleClictUp}
          >
            Cancer Deaths {year} +
          </button>
        </div>

        <div className="pl-2 text-center text-xl text-orange-500 font-bold">
          {death_year}
        </div>
      </div>

  );
};
