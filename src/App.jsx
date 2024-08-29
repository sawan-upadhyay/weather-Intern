//`https://api.weatherapi.com/v1/current.json?key=52656d58856e4421b2562827242608&q=${city}&aqi=no;` my key
import React, { useEffect, useState } from "react";
import Weatherreport from "./Weatherreport";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import ProtectedRoute from "./components/Protected/ProtectedRoute";
import Header from "./components/Header";

function App() {
  return (
    <> 
     <Router>
        <Header />
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/weatherreport" element={<Weatherreport />} />
          </Route>
          
          <Route path="/" element={"This is our home page Please Login for Weather Report"} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    
    </>
  );
}

export default App;