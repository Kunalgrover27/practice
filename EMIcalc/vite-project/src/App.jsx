import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [Amt, setAmt] = useState(0)
  const [Ans, setAns] = useState(0)
  const [time, setTime] = useState(0)

  const handlechange=(e) =>{
    let id=e.target.id;
    let value= parseInt(e.target.value)

    if(id ==='principal'){
      setCount(value)
    }
    if(id ==='Amount'){
      setAmt(value)
    }
    if(id ==='Time'){
      setTime(value)
    }  

  }

  useEffect(() => {
    const k=(count*Amt)/time;
    console.log(k);

    setAns((count*Amt)/time)
  
  }, [count,Amt,time])
  
  return (
    <>
     <p>Principal</p>
     <input id='principal'  onChange={handlechange}></input>
     <p>Amount</p>
     <input id='Amount'  onChange={handlechange}></input>
     <p>Time</p>
     <input id='Time'  onChange={handlechange}></input>
     <p>{Ans}</p>
    </>
  )
}

export default App
