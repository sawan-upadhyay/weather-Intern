import React, { useEffect, useState } from 'react'
//images
import Clear from '../assets/Clear.jpg'
import Fog from '../assets/fog.png'
import Cloudy from '../assets/Cloudy.jpg'
import Rainy from '../assets/Rainy.jpg'
import Snow from '../assets/snow.jpg'
import Stormy from '../assets/Stormy.jpg'
import Sunny from '../assets/Sunny.jpg'
import { useSelector } from 'react-redux'

const BackgroundLayout = () => {

  const weatherData= useSelector(state=>state.weatherData.data);
  const [image, setImage] = useState(Clear);

  useEffect(() => {
    if (weatherData) {
      let imageString = weatherData.forecast.forecastday[0].day.condition.text;
      if (imageString.toLowerCase().includes('clear')) {
        setImage(Clear);
      } else if (imageString.toLowerCase().includes('cloud')) {
        setImage(Cloudy);
      } 
      else if (imageString.toLowerCase().includes('sunny')) {
        setImage(Sunny);
      }
      else if (imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('shower')) {
        setImage(Rainy);
      } else if (imageString.toLowerCase().includes('snow')) {
        setImage(Snow);
      } else if (imageString.toLowerCase().includes('fog')) {
        setImage(Fog);
      } else if (imageString.toLowerCase().includes('thunder') || imageString.toLowerCase().includes('storm')) {
        setImage(Stormy);
      }
    }
  }, [weatherData])

  return (
    <img src={image} alt="weather_image" className='h-screen w-full fixed left-0 top-0 -z-[10]' />
  )
}

export default BackgroundLayout