import React, { useEffect, useState } from "react";
import Temperature from "./components/Temperature";
import Highlights from "./components/Highlights";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "./store/weatherSlice";
import axios from "axios";

const Weatherreport = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weatherData.data);
  const city = useSelector(state => state.city);

  useEffect(() => {
    dispatch(fetchWeatherData());
  }, [city, dispatch]);

  const [userData, setUserData] = useState();
  useEffect(() => {
    getProfileData();
  }, [])

  const getProfileData = () => {
    const token = JSON.parse(localStorage.getItem('token'))
    const header = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    axios.get('https://api.escuelajs.co/api/v1/auth/profile', header)
      .then((res) => {

        setUserData(res.data)
        console.log("profile data", res)
      })
      .catch((err) => {

        alert("You are not logged in")
        console.log("Error occured", err)
      })
  }

  return (
    <>
      <div className=" bg-blue-300 p-4 flex flex-col md:flex-row md:justify-between items-center font-bold text-center md:text-left">
        <p >Name : {userData?.name || "N/A"} </p>
        <p>Email : {userData?.email || "N/A"}</p>
        <p>Role : {userData?.role || "N/A"}</p>
      </div>

      <div className="bg-slate-800 flex   justify-center  min-h-screen flex-col md:flex-row md:justify-center items-start">
        <div className=" w-full md:w-1/3 md:h-1/3  mt-12 md:mt-40 ">
          {weatherData && (
            <Temperature
            />
          )}
        </div>
        <div className="w-full md:w-1/2 h-1/3 mt-40 p-10 grid md:grid md:grid-cols-2 md:gap-6">
          <h1 className="text-slate-200 text-2xl mb-1 text-center col-span-2">
            Today's Highlights
          </h1>
          {weatherData && (
            <>
              <Highlights stats={{ title: "Wind Status", unit: "mph", }} />
              <Highlights stats={{title: "Humidity", unit: "%",}}/>
              <Highlights
                stats={{title: "Visibility",unit: "miles", }}/>
              <Highlights stats={{title: "Air Pressure",unit: "mb",}}/>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Weatherreport