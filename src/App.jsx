import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculator from './calculator/Calculator'
import FancyCounter from './fancyCounter/FancyCounter'


function App() {

  const [applications, setApplication] = useState([])

  useEffect(() => {
    if(applications < 2) {
    for(let i=0;i<2;i++)
      applications.push(false);
    }
  }, []);

  const onClick = (index) => {
    let newArray = [...applications];
    for(let i=0;i<newArray.length;i++) {
      if(i != index)
        newArray[i] = false;
    }
    newArray[index] = !newArray[index]
    setApplication(newArray);
  }

  return (
    <>
    <div className="card">
    <button onClick={() => onClick(0)}>Calculator</button>
    <button onClick={() => onClick(1)}>Fancy Counter</button>
    </div>
    { applications[0] ? <Calculator /> : null }
    { applications[1] ? <FancyCounter /> : null }
    </>
  )
}

export default App
