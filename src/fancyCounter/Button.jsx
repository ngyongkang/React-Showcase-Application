import React from 'react'

export default function Button(props) {
  
  let {counter, type, setCounter } = props;

  const onClickLogic = () => {
      
      //setState is an async function, that is why you can't use
      //direct updates for example, counter++
      switch(type) {
        case "Reset":
            setCounter(0);
          break;
        case "-":
            setCounter((count) => count - 1);
          break;
        case "+":
            setCounter((count) => count + 1);
          break;
        default:
          console.log("Error in onClickLogic");
      }
  }
  
  return (
    <button onClick={onClickLogic}>
        {type}
    </button>
  )
}
