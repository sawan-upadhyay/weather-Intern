import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchWeatherData = createAsyncThunk(
    'weatherData/fetchWeatherData',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const city = state.city;
        

        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=52656d58856e4421b2562827242608&q=${city}&aqi=no;`;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        return thunkAPI.rejectWithValue('Failed to fetch data');
      }
      const data = await response.json();
      return data;
    }
  );

const weatherSlice=createSlice({
    name:"weatherData",
    initialState:{
        data: null,
        status: 'idle',
        error: null,
      },
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchWeatherData.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchWeatherData.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
          })
          .addCase(fetchWeatherData.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
          });
      }
});
//export const {add} =weatherSlice.actions;
export default weatherSlice.reducer;