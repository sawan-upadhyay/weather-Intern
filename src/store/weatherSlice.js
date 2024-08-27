import { createSlice } from "@reduxjs/toolkit";

const weatherSlice=createSlice({
    name:"weatherData",
    initialState:null,
    reducers: {
        add: (state,action)=>
        {
            return action.payload;
        }
    },
});
export const {add} =weatherSlice.actions;
export default weatherSlice.reducer;