/* eslint-disable react/prop-types */
// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux';


// const MiniCard = ({date,temp,icon}) => {
//     const weatherData = useSelector((state) => state.weatherData);
//     const dats = weatherData.data?.forecast.forecastday[0].hour;

 
//   return (
//     <div className='glassCard w-[10rem] h-[10rem] p-4 flex flex-col'>
//       <p className='text-center'>
//         {date}
//       </p>
//       <hr />
//       <div className='w-full flex justify-center items-center flex-1'>
//         <img src={icon} alt="forecast not available" className='w-[4rem] h-[4rem]' />
//       </div>
//       <p className='text-center font-bold'>{temp}&deg;C</p>
//     </div>
//   )
// }

// export default MiniCard


import React from 'react';

const MiniCard = ({ date, temp, icon }) => {
  return (
    <div className="w-full md:w-1/4 p-4 rounded-3xl  backdrop-blur-sm border border-slate-400 shadow-lg transform transition-transform hover:scale-105">
      <div className="flex flex-col items-center">
        <img src={icon} alt="weather icon" className="w-12 h-12" />
        <p className="text-lg font-bold">{temp}°C</p>
        <p className="text-sm font-semibold text-purple">{date}</p>
      </div>
    </div>
  );
};

export default MiniCard;
