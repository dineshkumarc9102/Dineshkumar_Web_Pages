import React, { useState } from 'react'
import './style.css'
import search_icon from '../Assets/search.png'
import clear from '../Assets/clear.png'
import cloud from '../Assets/cloudy.png'
import drizzle from '../Assets/drizzle.png'
import rain from '../Assets/rain.png'
import snow from '../Assets/snow.png'
import wind from '../Assets/wind.png'
import humidity from '../Assets/humidity.png'

const WeatherApp = () => {
 
  let api_key = "dd94f859a0e52d6e4767fddf735f04a7";
  
  const [wicon,setWicon] = useState(cloud);

  const search = async () => {

    const element = document.getElementsByClassName("input")
    if(element[0].value===""){
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
 
    let res = await fetch(url);
    let data = await res.json();
    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temprature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather_location");
  
    humidity[0].innerHTML=data.main.humidity+" %";
    wind[0].innerHTML=Math.floor(data.wind.speed)+" km/hr";
    temprature[0].innerHTML=Math.floor(data.main.temp)+" °C";
    location[0].innerHTML=data.name;

    if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
      setWicon(clear);
    }
    else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
      setWicon(cloud);
    }
    else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
      setWicon(drizzle);
    }
    else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
      setWicon(drizzle);
    }
    else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
      setWicon(rain);
    }
    else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
      setWicon(rain);
    }
    else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
      setWicon(snow);
    }
    else{
      setWicon(clear);
    }
  }

  return (
    
    <div className='container'>
      <div className="topbar">
        <input type="text" className='input' placeholder='Seacrh'/>
        <div className="search" onClick={()=>{search()}}>
          <img src={search_icon} alt=''/>
        </div>
      </div>
      <div className="weather-image">
          <img src={wicon} alt=''/>
      </div>
      <div className="weather-temp">0°C</div>
      <div className="weather_location">City</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity} alt='' className='icon'/>
          <div className="data">
            <div className="humidity-percent">0%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind} alt='' className='icon'/>
          <div className="data">
            <div className="wind-rate">0 km/hr</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  )
} 

export default WeatherApp