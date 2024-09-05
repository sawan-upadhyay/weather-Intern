/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';


const MiniCard = ({date,temp,icon}) => {
    const weatherData = useSelector((state) => state.weatherData);
    const dats = weatherData.data?.forecast.forecastday[0].hour;

 
  return (
    <div className='glassCard w-[10rem] h-[10rem] p-4 flex flex-col'>
      <p className='text-center'>
        {date}
      </p>
      <hr />
      <div className='w-full flex justify-center items-center flex-1'>
        <img src={icon} alt="forecast not available" className='w-[4rem] h-[4rem]' />
      </div>
      <p className='text-center font-bold'>{temp}&deg;C</p>
    </div>
  )
}

export default MiniCard