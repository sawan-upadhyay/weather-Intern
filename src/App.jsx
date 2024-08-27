//`https://api.weatherapi.com/v1/current.json?key=52656d58856e4421b2562827242608&q=${city}&aqi=no;` my key
import React, { useEffect, useState } from "react";
import Temperature from "./components/Temperature";
import Highlights from "./components/Highlights";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "./store/weatherSlice";

function App() {

   const dispatch= useDispatch();
  const weatherData=useSelector((state)=>state.weatherData.data);
  const city= useSelector(state=>state.city);
  //const weatherStatus = useSelector((state) => state.weatherData.status);
  //const weatherError = useSelector((state) => state.weatherData.error);

  useEffect(() => { 
    dispatch(fetchWeatherData(city));
  }, [city,dispatch]);

  return (
    <> check if screen blank
    <div className="bg-slate-800 h-screen flex justify-center  ">
      <div className="w-1/5 h-1/3 mt-40">
        {weatherData && (
          <Temperature
          />
        )}
      </div>
      <div className="w-1/3 h-1/3 mt-40 p-10 grid grid-cols-2 gap-6">
        <h1 className="text-slate-200 text-2xl col-span-2">
          Today's Highlights
        </h1>
        {weatherData && (
          <>
            <Highlights
              stats={{
                title: "Wind Status",                
                unit: "mph",
              }}
            />
            <Highlights
              stats={{
                title: "Humidity",
                unit: "%",
              }}
            />
            <Highlights
              stats={{
                title: "Visibility",
                unit: "miles",
              }}
            />
            <Highlights
              stats={{
                title: "Air Pressure",
                unit: "mb",
              }}
            />
            </>
        )}
      </div>
    </div>
    </>
  );
}

export default App;