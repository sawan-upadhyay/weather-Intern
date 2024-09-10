import React, { useEffect, useState } from "react";
import Temperature from "./components/Temperature";
import Highlights from "./components/Highlights";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";

import { Link } from "react-router-dom";
import Loading from "./components/Loading";
import Stormy from "./assets/weatherimg.jpg";

const Weatherreport = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weatherData);
  const city = useSelector(state => state.city);

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
      })
      .catch((err) => {

        alert("You are not logged in")
        console.log("Error occured", err)
      })
  }
 

  return (
    <>
      <div className=" text-gray-400 p-4 flex flex-col md:flex-row md:justify-between items-center font-bold text-center md:text-left">
        <p >Name : {userData?.name || "N/A"} </p>
        <p>Email : {userData?.email || "N/A"}</p>
        <p>Role : {userData?.role || "N/A"}</p>
        <p> {weatherData.status}</p>
      </div>
      <div className="p-4 ">
        <Link to="/detaildaily">
          <button className="bg-amber-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
            Go to Detail Weather
          </button>
        </Link>
      </div>
      <img src={Stormy} className="blur-sm bg-opacity-50 fixed -z-[10] h-screen w-full top-0 left-0" />

      <div className=" flex text-xl justify-center  min-h-screen flex-col md:flex-row md:justify-center items-start">
        <div className=" w-full md:w-1/3 md:h-1/3  mt-12 md:mt-40 ">
          {weatherData.data && (
            <Temperature
            />
          )}
        </div>
        <div className={`${weatherData.status == 'succeeded' ? 'visible' : 'invisible'} w-full md:w-1/2 h-1/3 mt-40 p-10 grid md:grid md:grid-cols-2 md:gap-6`}>
          <h1 className="text-white  font-bold text-4xl mb-1 text-center col-span-2">
            Today's Highlights
          </h1>
          {weatherData.data && (
            <>
              <Highlights stats={{ title: "Wind Status", unit: "mph", }} />
              <Highlights stats={{ title: "Humidity", unit: "%", }} />
              <Highlights
                stats={{ title: "Visibility", unit: "miles", }} />
              <Highlights stats={{ title: "Air Pressure", unit: "mb", }} />
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Weatherreport