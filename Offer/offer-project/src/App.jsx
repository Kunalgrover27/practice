import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Initialoffer from './Initialoffer.jsx'
import Offer from './Offer.jsx'

function App() {
  const [show, setShow] = useState(false)
  const [accept, setAccept] = useState(false)
  const [showo, setshowo] = useState(false)

const handleclick=()=>{
  setShow(true)
  console.log(show)
}
const back=()=>{
  setShow(false)
}
const final=()=>{
  setAccept(true)
  setShow(true)
  setshowo(true)
}

  return (
    <>
     { !show && <Initialoffer handleclick={handleclick}/>}
     {
     show && !showo && <Offer back={back} final={final}/>
}
{
  accept && <h1>you won 10 crore</h1>
}
    </>
  )
}

export default App
