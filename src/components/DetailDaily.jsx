import React from 'react'

import BackgroundLayout from './BackgroundLayout'
import WeatherCard from './WeatherCard'
import { useSelector } from 'react-redux';
import MiniCard from './MiniCard';
import Loading from './Loading';




function DetailDaily() {
    const weatherData = useSelector((state) => state.weatherData);
    const dats = weatherData.data?.forecast?.forecastday[0]?.hour;

    if(weatherData.status=='idle'|| weatherData.status=='loading')
        return (<Loading/>);
    

  return (
    <div className='w-full h-screen text-white px-8'>
      <nav className='w-full p-3 flex justify-between items-center'>
        <h1 className='font-bold tracking-wide text-3xl'>Detail Weather for 24 Hours</h1>
      </nav>

      <BackgroundLayout/>

      <main className='w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center'>
        <WeatherCard/>

         {dats && <div className='flex justify-center gap-8 flex-wrap w-[60%]'>
          {
            dats.map((dat,index) => {
              return (
                <MiniCard key={index} date={dat.time} temp={dat.temp_c} icon={dat.condition.icon}
                />
              )
            })
          }
        </div>
         }

      </main>
    </div>
  )
}

export default DetailDaily