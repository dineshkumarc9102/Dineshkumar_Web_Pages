import { useState } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [number, setNumber] = useState(true);
  const [spl, setSpl] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let charset = "";
    if (upper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lower) charset += "abcdefghijklmnopqrstuvwxyz";
    if (number) charset += "1234567890";
    if (spl) charset += "~`!@#$%^&*)(_-+=}{][;:'>,<?/";
    let generatePassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatePassword += charset[randomIndex];
    }
    setPassword(generatePassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password).then(() => {
      alert("Password copied to clipboard!");
    });
  };

  return (
    <>
      <h1>Generate a<span><br/>Strong Password</span></h1>
      <div className="container">
        <div className="length-input">
          <label htmlFor="num">Password Length:</label>
          <input type="number" id='num' value={length} onChange={(e) => setLength(parseInt(e.target.value))}/>
        </div>
        <div className="checkbox-input">
          <input type="checkbox" id="uppercase" checked={upper} onChange={(e) => setUpper(e.target.checked)}/> 
          <label htmlFor="uppercase">Include Uppercase</label>
        </div>
        <div className="checkbox-input">
          <input type="checkbox" id="lowercase" checked={lower} onChange={(e) => setLower(e.target.checked)}/> 
          <label htmlFor="lowercase">Include Lowercase</label>
        </div>
        <div className="checkbox-input">
          <input type="checkbox" id="numbers" checked={number} onChange={(e) => setNumber(e.target.checked)}/> 
          <label htmlFor="numbers">Include Numbers</label>
        </div>
        <div className="checkbox-input">
          <input type="checkbox" id="spl-char" checked={spl} onChange={(e) => setSpl(e.target.checked)}/> 
          <label htmlFor="spl-char">Include Special Characters</label>
        </div>
        <button className='generate-btn' onClick={generatePassword}>Generate</button>
        <div className="copy">
          <input type="text" readOnly value={password}/>
          <button className='copy-btn' onClick={copyToClipboard}>Copy</button>
        </div>
      </div>
    </>
  )
}

export default App
