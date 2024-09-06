import React, { useEffect } from 'react'
import { fetchWeatherData } from '../store/weatherSlice';
import { useDispatch } from 'react-redux';
import Sunny from '../assets/Sunny.jpg'

const Homepage = () => {
   

  return (
    <>
    <div className='flex justify-center' >
    {/* <div className=' text-center  text-slate-100 pt-10 text-2xl'>This is Our Weather Report Homapage. Please Login to View </div> */}
   <img src={Sunny} alt='No Image' className='h-screen fixed w-full left-0 top-0 -z-[10] opacity-90 blur-sm'/>
      <div className='w-full p-3 flex justify-center pt-28 items-center'>
        <h1 className='font-bold tracking-wide text-3xl'>This is Our Weather Report Homapage. Please Login to View</h1>
      </div>
    </div>
    </>
  )
}

export default Homepage