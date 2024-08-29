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
      <div className="bg-blue-300 flex justify-center items-center font-bold gap-3 ">
        <p >Name : {userData?.name || "N/A"} </p>
        <p>Email : {userData?.email || "N/A"}</p>
        <p>Role : {userData?.role || "N/A"}</p>
      </div>

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
  )
}

export default Weatherreport