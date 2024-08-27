import { createSlice } from "@reduxjs/toolkit";

const citySlice=createSlice({
    name:"city",
    initialState:"New Delhi",
    reducers: {
        setCity: (state,action)=>
        {
            return action.payload;
        }
    },
});
export const {setCity} =citySlice.actions;
export default citySlice.reducer;