import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Dailyreport() {
    const weatherData = useSelector((state) => state.weatherData);
    const city=useSelector((state)=>state.city);
    const dats = weatherData.data?.forecast.forecastday[0].hour;
    const [forecast,setForecast]= useState([]);
  
    const days = [15,16,17,18,19,20,21];
   
    const getFormattedDate = (dayOffset) => {
      const today = new Date();
      today.setDate(today.getDate() + dayOffset);
      return today.toISOString().split('T')[0]; // Format: YYYY-MM-DD
    };

    useEffect(() => {
        const fetchData = async () => {
              try {
            const requests = days.map(day => 
              fetch(`http://api.weatherapi.com/v1/future.json?key=52656d58856e4421b2562827242608&q=${city}&dt=${getFormattedDate(day)}`).then(response => {
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                return response.json();
              } )
            );
            
            const responses = await Promise.all(requests);
          
            setForecast(responses);
          } catch (err) {
            console.log(err.message);
          } 
        };
        // Utility function to get the formatted date string
        // const getFormattedDate = (dayOffset) => {
        //   const today = new Date();
        //   today.setDate(today.getDate() + dayOffset);
        //   return today.toISOString().split('T')[0]; // Format: YYYY-MM-DD
        // };
    
        fetchData();
        console.log(forecast);
      }, [city]);

      useEffect(() => {
        if (forecast.length > 0) {
          console.log(forecast);
        }
      }, [forecast]);

    //   let newarr=[];
    //      newarr= forecast.map((fore)=>fore?.forecast?.forecastday[0]?.day?.avgtemp_c);
        console.log("forecast dikha?");
         

    return (
            <>
            <div className='h-screen bg-slate-800 text-white font-bold text-center'>
              Weekly Weather Forecast
            <div className='flex flex-row flex-wrap gap-y-10 justify-around items-center text-white mt-4 bg-teal-400'>

          { forecast && forecast.map((da,index)=>(
            <div key={Math.random()} className='flex flex-col items-center '>
              <p>{getFormattedDate(index+1)} </p>
              <img className='w-12 h-12' src={`${da.forecast.forecastday[0].day.condition.icon}`} />
             <p>Avg Temp {da.forecast.forecastday[0].day.avgtemp_c}°C </p>
             </div>
             
            ) ) 
          }
            
          </div>
          <div className='text-center font-bold text-white mt-14'> Daily 24 Hour Weather</div>
        <div className='flex flex-row flex-wrap gap-y-1 space-x-2 justify-center bg-slate-800  text-white h-screen items-center  pt-0' >
           
            {
              dats?.map((dat, index) => (
                <div key={index} className='flex flex-col items-center space-y-1 m-0'>
                        <p>{dat.time.split(' ')[1]}</p>
                        <img className='w-12 h-12' src={`${dat.condition.icon}`} />
                        <p> {dat.temp_c}°C</p>

                    </div>
                ))
              }
        </div>
              </div>
            </>
    )
}

export default Dailyreport;