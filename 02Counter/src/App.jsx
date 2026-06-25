import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)
  const addValue = () => {
    console.log("clicked",counter);
  counter++;
  setCounter(counter);
  }
  const removeValue=() =>{
   console.log("jiremkk",counter)
   counter--;
   setCounter(counter);
  }
  
  return (
    <>
      <h1>
        chai aur react
      </h1>
      <h2>
        Counter value : {counter}
      </h2>
      <button onClick = {addValue}>Add</button>
      <br/>
      <button onClick = {removeValue}>Remove</button>
   </>
  )
}

export default App
