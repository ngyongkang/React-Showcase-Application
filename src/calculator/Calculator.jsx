import { useState } from 'react'
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
      {string}
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
      </div>
     
    </>
  )
}

export default Calculator
