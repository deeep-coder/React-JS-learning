import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)  // here count is variable and setCount is function which is for update count variable and 0 is given as default value

  const addValue=()=>{
    count=count+1
    setCount(count)

    // we can also do in this style also
    //setCount(count+1)
  }

  const removeValue=()=>{
    if(count>0){
      setCount(count-1)
    }
    
  }

  return (
    <>
      
    <h1>Hey Deep your count is : {count}</h1>
    <button onClick={addValue}>Add Value {count}</button>
    <br/>
    <br/>
    <br/>
    <button onClick={removeValue}>Remove value {count}</button> 
    </>
  )
}

export default App
