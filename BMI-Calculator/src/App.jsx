import { useState } from 'react'
import './App.css'

function App() {

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState();

  const calculate = () => {
    const validHeight = /^\d+(\.\d+)?$/.test(height);
    const validWeight = /^\d+(\.\d+)?$/.test(weight);

    if (validHeight && validWeight){
      const heightInMeter = height / 100;
      const bmiValue = weight / (heightInMeter * heightInMeter);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 16){
        setStatus("Severe Thinness")
      }
      if (bmiValue >16 && bmiValue <17){
        setStatus("Moderate Thinness")
      }
      if (bmiValue >17 && bmiValue <18.5){
        setStatus("Mild Thinness")
      }
      if (bmiValue >18.5 && bmiValue <25){
        setStatus("Normal")
      }
      if (bmiValue >25 && bmiValue <30){
        setStatus("Overweight")
      }
      if (bmiValue >30 && bmiValue <35){
        setStatus("Obese Class 1")
      }
      if (bmiValue >35 && bmiValue <40){
        setStatus("Obese Class 2")
      }
      if (bmiValue > 40){
        setStatus("Obese Class 3")
      }
      setError("")
    }
    else{
      setBmi(null);
      setStatus("");
      setError("Please enter valid numeric vlues for height and weight")
      setError("");
    }
  }

  const clearAll = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setStatus("");
  };

  return (
    <>
      <h1><span>bmi</span> calculator</h1>
      <div className='container'>
        <div className="left"></div>
        <div className="right">
          <p className='error'>{error}</p>
          <div className="input">
            <label htmlFor="hg">Height (cm)</label>
            <input type="text" id='hg' placeholder='Enter Your Height' required value={height} onChange={(e)=>setHeight(e.target.value)}/>
          </div>
          <div className="input">
            <label htmlFor="wg">Weight (kg)</label>
            <input type="text" id='wg'placeholder='Enter Your Weight' required value={weight} onChange={(e)=>setWeight(e.target.value)}/>
          </div>
          <button onClick={calculate}>Calculate</button>
          <button onClick={clearAll}>Clear Data</button>
          {bmi!==null && (
            <div className='result'>
            <p>Your BMI Score is : <span>{bmi}</span></p>
            <p>BMI Status : <span>{status}</span></p>
          </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
