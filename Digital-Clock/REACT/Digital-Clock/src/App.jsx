
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const time = setInterval( () => {
      setCurrentTime(new Date())
    },1000);
    return() => clearInterval(time);
  },[])

  const hourFormat = (hour) => {
    return hour === 0 ? 12 : hour>12 ? hour-12 :hour; 
  };

  const leadingZero = (num) => {
    return num<10 ? `0${num}` : num;
  };

  const dateFormat = (date) =>{
    const option = {weekday: "long", year: "numeric", month: "long", day:"numeric"}
    return date.toLocaleDateString(undefined, option);
  }; 


  return (
    <>
    <div className='container'>
        <div className="clock">
        <div className='time'>
          <span id="hrs">{leadingZero(hourFormat(currentTime.getHours()))}</span>
          <span>:</span>
          <span id="min">{leadingZero((currentTime.getMinutes()))}</span>
          <span>:</span>
          <span id="sec">{leadingZero((currentTime.getSeconds()))}</span>  
          <p>{currentTime.getHours>12 ? "PM" : "AM"}</p>
       </div>
       <div className='date'>{dateFormat(currentTime)}</div>
      </div>
    </div>
    </>
  )
}

export default App
