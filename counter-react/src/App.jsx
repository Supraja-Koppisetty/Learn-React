import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 5;
   let [counter, setCounter] = useState(5);

   const increaseValue = ()=>{
    if(counter < 20)
     setCounter(++counter);
   }

   const decreaseValue = ()=>{
    if(counter >= 1)
    setCounter(--counter);
  }

  return (
    <>
      <h1>counter in react</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={increaseValue}>Increase Counter</button>
      <br/>
      <br/>
      <button onClick={decreaseValue}>Decrease Counter</button>
    </>
  )
}

export default App
