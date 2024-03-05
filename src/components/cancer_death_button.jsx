import React from "react";

export const ShowTotayThisYear = () => {
  const a = 3.935e6;
  const b = 5.836e-10;

  const locale = "en";
  const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update

  React.useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 500);
    return () => {
      clearInterval(timer); // Return a function to clear the timer so that it will stop being called on unmount
    };
  }, []);

  const [showyear, setperoid] = React.useState(true);

  const handleClict = () => setperoid((prev) => !prev);

  const second_today =
    today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();

  const death_2024 = Math.round(a * Math.exp(b * 1735689599));
  const today_seconds = Math.round(today.getTime() / 1000);

  const death_by_now_in_2024 = Math.round(
    (death_2024 * (today_seconds - 1704067199)) / (1735689599 - 1704067199)
  );
  const death_today = Math.round(
    (death_2024 * second_today) / (1735689599 - 1704067199)
  );

  return (
    <div className="flex flex-row justify-center items-center">
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 rounded-full"
          onClick={handleClict}
        >
          Cancer Deaths Occurred {showyear ? "Today" : "This Year"}
        </button>
      </div>
      <div className="pl-2 text-center text-2xl text-orange-500 font-bold">
        {showyear ? death_today : death_by_now_in_2024}+
      </div>
    </div>
  );
};
