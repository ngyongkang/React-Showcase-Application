import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculator from './calculator/Calculator'
import FancyCounter from './fancyCounter/FancyCounter'
import ListGroup from './gameWebsite/ListGroup'
import WordApp from './word-analytics/WordApp'

function App() {

  const [applications, setApplication] = useState([]);

  let string = <Calculator/>
  useEffect(() => {
    let newArray = [];
    for(let i=0;i<4;i++)
      newArray.push(false);

    setApplication(newArray);
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
    {/* Stock template */}
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
    <h1>Vite + React</h1>
    {/* End of Stock template */}

    <div className="card">
    {applications.map((value, index) => {
      return (
      <button key={index} onClick={() => onClick(index)}>Calculator</button>
      )
    })}
    
    </div>
    <div className="module-container">
      { applications[0] ? string : null }
      { applications[1] ? <FancyCounter /> : null }
      { applications[2] ? <ListGroup className="text-3xl font-bold underline" /> : null }
      { applications[3] ? <WordApp /> : null }
    </div>
    <p>
          Edit <code>src/App.jsx</code> and save to test HMR
    </p>
    <p className="read-the-docs">
        Click on the Vite and React logos to learn more
    </p>
    </>
  )
}

export default App
