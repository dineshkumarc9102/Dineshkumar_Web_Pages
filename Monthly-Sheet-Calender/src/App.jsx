import { useState } from 'react';
import './App.css';

import left_arrow from "./assets/arrow_circle_left.svg";
import right_arrow from "./assets/arrow_circle_right.svg";

const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function App() {

  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysInMonth = () => {
    const daysArray = [];
    const firstDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    const lastDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);

    for (let i = 0; i < firstDate.getDay(); i++) {
      daysArray.push(null);
    }
    for (let i = 1; i <= lastDate.getDate(); i++) {
      daysArray.push(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i));
    }

    return daysArray;
  };

  const handleChangeMonth = (e) => {
    const newMonth = parseInt(e.target.value, 10);
    setSelectedDate(new Date(selectedDate.getFullYear(), newMonth, 1));
  };

  const handleChangeYear = (e) => {
    const newYear = parseInt(e.target.value, 10);
    setSelectedDate(new Date(newYear, selectedDate.getMonth(), 1));
  };

  const currentDate = (date1, date2) => {
    return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
  };

  return (
    <>
      <h1>Monthly Sheet  <span>Calender</span></h1>
      <div className="container">
        <div className="header">
          <button className="left" onClick={() => { setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1)) }}>
            <img src={left_arrow} alt="left arrow"/>
          </button>
          <select value={selectedDate.getMonth()} onChange={handleChangeMonth}>
            {months.map((month, index) => (
              <option key={index} value={index}> {month} </option>
            ))}
          </select>
          <select value={selectedDate.getFullYear()} onChange={handleChangeYear}>
            {
              Array.from({ length: 11 }, (_, i) => selectedDate.getFullYear() - 5 + i)
                .map((year) => (
                  <option key={year} value={year}> {year} </option>
                ))
            }
          </select>
          <button className="right" onClick={() => { setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1)) }}>
            <img src={right_arrow} alt="right arrow"/>
          </button>
        </div>
        <div className="weeks">
          {weeks.map((week) => (
            <div key={week}>{week}</div>
          ))}
        </div>
        <div className="dates">
          {daysInMonth().map((day, index) => (
            <div key={index} className={day ? (currentDate(day, new Date()) ? "day current" : "day") : "empty"}>
              {day ? day.getDate() : ""}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
