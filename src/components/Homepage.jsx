import React, { useEffect } from 'react'
import { fetchWeatherData } from '../store/weatherSlice';
import { useDispatch } from 'react-redux';

const Homepage = () => {
   

  return (
    <div className='h-screen bg-slate-700 text-center text-slate-100 pt-10 text-2xl'>This is Our Weather Report Homapage. Please Login to View </div>
  )
}

export default Homepage