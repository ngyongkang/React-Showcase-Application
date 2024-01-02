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

  useEffect(() => {
    let newArray = [
      {
        name : "Calculator",
        status : false,
        component: <Calculator/>

      },
      {
        name : "Fancy Counter",
        status : false,
        component: <FancyCounter/>

      },
      {
        name : "Game Website",
        status : false,
        component: <ListGroup/>

      },
      {
        name : "Word Analytics",
        status : false,
        component: <WordApp/>

      },
    ];

    setApplication(newArray);
  }, []);

  const onClick = (index) => {
    let newArray = [...applications];
    for(let i=0;i<newArray.length;i++) {
      if(i != index)
        newArray[i].status = false;
    }
    newArray[index].status = !newArray[index].status
    setApplication(newArray);
  }
  
  return (
    <>
    {/* Stock template */}
    <div>
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank" rel="noreferrer">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
    <h1>Vite + React</h1>
    {/* End of Stock template */}

    <div className="card">
    {applications.map((value, index) => {
      return (
      <button key={index} onClick={() => onClick(index)}>{value.name}</button>
      )
    })}
    </div>
    <div className="module-container">
      {applications.map((value) => {
        return (
          value.status ? value.component : null
        )
      })}
    </div>

    {/* Stock template */}
    <p>
          Edit <code>src/App.jsx</code> and save to test HMR
    </p>
    <p className="read-the-docs">
        Click on the Vite and React logos to learn more
    </p>
    {/* End of Stock template */}
    </>
  )
}

export default App
