import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCity } from "../store/citySlice";

function Temperature() {
 const city=useSelector((state)=>state.city);
  const weatherData = useSelector((state) => state.weatherData);
  const dispatch=useDispatch();
  const handleCityChange = (e) => {
    dispatch(setCity(e.target.value));
  };
  return (
    <>
      <div className="flex align-middle justify-center">
        <input
          type="text"
          className="hover:bg-opacity-60 bg-transparent backdrop-blur-none border border-slate-500 text-slate-200 placeholder-slate-400 text-md focus:border-slate-400 block w-2/3 md:w-60 p-2 focus:outline-none transition-all duration-300"
          placeholder="Enter Your City Name"
          onChange={handleCityChange}
          value={city}
        />
        <div className="m-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6 text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
        </div>
      </div>

      { weatherData.status=='succeeded'&& ( <>
        <div className="flex justify-center ">
        { weatherData.data.current.is_day !== 0 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-14 h-14 text-yellow-300 mt-8"
           >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
         )  : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 text-slate-200 mt-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
         )}
      </div>

      <div className="flex justify-center items-center text-slate-200 mt-8 ">
        <p className="font-semibold text-[55px] ">
          {weatherData.data.current.temp_c}
          <span className="text-[33px]">°C</span>
        </p>
      </div>

      <div className="font-semibold text-6xl  flex justify-center text-slate-300 mt-8 text-[25px] ">
        {weatherData.data.current.condition.text}
      </div>

      <div className=" text-4xl font-semibold flex justify-center text-slate-300 mt-5 text-[15px]">
        Today &#183; {weatherData.data.location.localtime} | {weatherData.data.location.name}
      </div>
      </> ) }
    </>
  );
}

export default Temperature;