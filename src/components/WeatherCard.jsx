/* eslint-disable react/prop-types */
import React  from 'react';

import '../index.css';
import { useSelector } from 'react-redux';


const WeatherCard = () => {
  
  const weatherData=useSelector(state=>state.weatherData.data);

  return (
    weatherData && <div className='w-[22rem] min-w-[20rem] h-[30rem] glassCard p-4 backdrop-blur-sm border border-slate-400 shadow-lg transform transition-transform hover:scale-105'>
      <div className='flex w-full just-center, items-center gap-4 mt-12 mb-4'>
        <img src={weatherData.forecast.forecastday[0].day.condition.icon} alt="weather_icon" />
        <p className='font-bold text-5xl flex justify-center items-center' >{weatherData.current.temp_c} &deg;C</p>
      </div>
      <div className='font-bold text-center text-xl'>
        {weatherData.location.name}
      </div>
      <div className='w-full flex justify-between items-center mt-4'>
        <p className='flex-1 text-center p-2'>{weatherData.forecast.forecastday[0].date}</p>
        <p className='flex-1 text-center p-2'>{weatherData.location.localtime}</p>
      </div>
      <div className='w-full flex justify-between items-center mt-4 gap-4'>
        <p className='flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg'>Wind Speed <p className='font-normal'>{weatherData.forecast.forecastday[0].day.maxwind_kph} km/h</p></p>
        <p className='flex-1 text-center p-2 font-bold rounded-lg bg-green-600'>Humidity <p className='font-normal'>{weatherData.forecast.forecastday[0].day.avghumidity} gm/m&#179;</p></p>
      </div>

      <hr className='bg-slate-600' />
      <div className='w-full p-4 flex justify-center items-center text-3xl font-semibold'>
        {weatherData.forecast.forecastday[0].day.condition.text}
      </div>
    </div>
  )
}

export default WeatherCard