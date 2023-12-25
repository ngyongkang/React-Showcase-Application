import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './Calculator.css'
import Numberpad from './Numberpad'

function calculate (string) {
   
  let array = string.split(" ");
  let operatorIndex = 0;
  let firstnumber = "";
  let secondnumber = "";

    for(let i = 0; i < array.length; i++) {
      if(array[i] ==  "+" || array[i] ==  "-" || array[i] ==  "x" || array[i] ==  "/") {
        operatorIndex = i;
        break;
      }
      firstnumber = firstnumber + array[i];
    }

    for(let i = operatorIndex+1; i < array.length; i++) {
      secondnumber = secondnumber + array[i];
    }
    
    switch(array[operatorIndex]) {
      case "+":
        return parseInt(firstnumber) + parseInt(secondnumber);
      case "-":
        return parseInt(firstnumber) - parseInt(secondnumber);
      case "x":
        return parseInt(firstnumber) * parseInt(secondnumber);
      case "/":
        return parseInt(firstnumber) / parseInt(secondnumber);
      default:
        return "Invalid Operator!!!"
    }
}

function Calculator() {
  const [string, setString] = useState("")

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button>
          {string}
        </button>
        
      </div>
      <Numberpad string={string} setString={setString}/>
      <div className="card">
        <button onClick={() => setString("")}>
          Reset
        </button>
        <button onClick={() => 
          {
            calculate(string)
            setString(calculate(string))
          }}>
          Calculate
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Calculator
