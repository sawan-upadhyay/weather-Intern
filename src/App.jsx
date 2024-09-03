//`https://api.weatherapi.com/v1/current.json?key=52656d58856e4421b2562827242608&q=${city}&aqi=no;` my key
import React, { useEffect, useState } from "react";
import Weatherreport from "./Weatherreport";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import ProtectedRoute from "./components/Protected/ProtectedRoute";
import Header from "./components/Header";
import Dailyreport from "./components/Dailyreport.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "./store/weatherSlice.js";
import Homepage from "./components/Homepage.jsx";

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
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/weatherreport" element={<Weatherreport />} />
            <Route path="/dailyreport" element={<Dailyreport />} />
          </Route>
          
          <Route path="/" element={<Homepage/>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    
    </>
  );
}

export default App;