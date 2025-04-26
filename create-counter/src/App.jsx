import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  const IncreaseCount = () =>{
    if(counter < 20)
     setCounter(++counter)
  }
   const DecreaseCount = () =>{
    if(counter > 0)
    setCounter(--counter)
  }

  return (
    <>
     <h1>Create Counter</h1>
     <p>counter: {counter}</p>
     <button onClick={IncreaseCount}>Increment</button>
     <br/><br/>
     <button onClick={DecreaseCount}>Decrement</button>
    </>
  )
}

export default App
