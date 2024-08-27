import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice";
import cityReducer from "./citySlice"
const store=configureStore({
    reducer:{
        weatherData:weatherReducer,
        city:cityReducer,
    },
});
export default store;