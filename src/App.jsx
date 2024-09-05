//`https://api.weatherapi.com/v1/current.json?key=52656d58856e4421b2562827242608&q=${city}&aqi=no;` my key
import React, { useEffect, useState } from "react";
import Weatherreport from "./Weatherreport";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import ProtectedRoute from "./components/Protected/ProtectedRoute";
import Header from "./components/Header";
import Weeklyreport from "./components/Weeklyreport.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "./store/weatherSlice.js";
import Homepage from "./components/Homepage.jsx";
import DetailDaily from "./components/DetailDaily.jsx";
import Dataeg from "./components/Dataeg.jsx";


function App() {
  const city = useSelector(state => state.city);
  const dispatch=useDispatch();

  useEffect(() => {
      dispatch(fetchWeatherData());
      console.log("hi i am s1");
    }, [city, dispatch]);
  return (
    <> 
     <Router>
        <Header />
        {/* <div> HI I AM VARUN</div> */}
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/weatherreport" element={<Weatherreport />} />
            <Route path="/dailyreport" element={<Weeklyreport />} />
            <Route path="/detaildaily" element={<DetailDaily />} />

          </Route>
          
          <Route path="/" element={<Homepage/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/dataeg" element={<Dataeg/>} />
        </Routes>
      </Router>
    
    </>
  );
}

export default App;