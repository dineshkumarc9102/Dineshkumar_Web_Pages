import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {


  const [amt, setAmt] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [result, setresult] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(()=>{
    const getExchngeRate = async () => {
      try{
        let url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
        const res = await axios.get(url);
        setExchangeRate(res.data.rates[toCurrency]);        
      }
      catch(error){
        console.error("Error on fetching exchange rate: ", error);
      }
    };
    getExchngeRate();
  },[fromCurrency, toCurrency]);
  
  useEffect(()=>{
    if (exchangeRate !== null){
      setresult((amt * exchangeRate).toFixed(2));
    }
  },[amt, exchangeRate]);

  const handleAmt = (e) => {
    const value = parseFloat(e.target.value);
    setAmt(isNaN(value) ? 0 : value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value)
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value)
  };


  return (
    <>
    <div className="container">
      <div className="top">
      </div>
      <div className="bottom">
      <h1>Currency Converter</h1>
        <div className="input-con">
          <label htmlFor="amt">Amount</label>
          <input type='number' id="amt" value={amt} onChange={handleAmt}/>
        </div>
        <div className="input-con">
          <label htmlFor="from">From Currency</label>
          <select id="from" value={fromCurrency} onChange={handleFromCurrencyChange}>
            <option value="USD">USD - United States Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound Sterling</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="AUD">AUD - Australian Dollar</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="CNY">CNY - Chinese Yuan</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="BRL">BRL - Brazilian Real</option>
            <option value="ZAR">ZAR - South AFrican Rand</option>
          </select>
        </div>
        <div className="input-con">
          <label htmlFor="to">To Currency</label>
          <select id="to" value={toCurrency} onChange={handleToCurrencyChange}>
            <option value="USD">USD - United States Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound Sterling</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="AUD">AUD - Australian Dollar</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="CNY">CNY - Chinese Yuan</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="BRL">BRL - Brazilian Real</option>
            <option value="ZAR">ZAR - South AFrican Rand</option>
          </select>
        </div>
        <div className="result">
          <p> {amt} {fromCurrency} is equal to {result} {toCurrency}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
