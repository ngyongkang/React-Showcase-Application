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
    <button onClick={() => onClick(0)}>Calculator</button>
    <button onClick={() => onClick(1)}>Fancy Counter</button>
  
    </div>
    { applications[0] ? <Calculator /> : null }
    { applications[1] ? <FancyCounter /> : null }
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
